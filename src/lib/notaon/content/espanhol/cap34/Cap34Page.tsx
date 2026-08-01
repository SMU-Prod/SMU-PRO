"use client";
import { ExerciseCard as Exercise } from "@/lib/notaon/components/ExerciseCard";
export default function Cap34Page() {
  return (
    <article className="lesson-landing">

      <section className="lesson-hero">
        <div>
          <span className="lesson-badge">Espanhol • Capítulo 34</span>
          <h1>Revisão Geral de Espanhol: estratégias de prova, interpretação textual e simulado comentado</h1>
          <p>
            Chegamos ao capítulo de encerramento do curso de Espanhol para o ENEM. Aqui você vai consolidar
            tudo o que aprendeu ao longo dos 34 capítulos: desde as estratégias de leitura do capítulo 1
            até a análise de questões comentadas do capítulo 33. Este capítulo funciona como um painel de
            controle completo — reunindo falsos cognatos críticos, conectores argumentativos, verbos
            irregulares essenciais, gêneros textuais mais cobrados, variação linguística e um checklist de
            véspera de prova. O simulado final com 5 questões tipo ENEM fecha o percurso com textos
            autênticos em espanhol cobertos por resolução detalhada, para que você chegue ao dia da prova
            com máxima segurança e clareza.
          </p>
        </div>
      </section>

      {/* ── SEÇÃO 1 — Panorama do ENEM em Espanhol ── */}
      <section className="lesson-section">
        <span className="section-kicker">Visão Geral</span>
        <h2>1. Panorama do ENEM em Espanhol: 2015–2024</h2>
        <p>
          Ao longo de uma década de provas, o ENEM consolidou um perfil muito definido para as questões de
          Espanhol. Sempre 5 questões de múltipla escolha, sempre focadas em leitura e interpretação de
          textos autênticos, sempre com enunciado em português e texto-base em espanhol. Analisar o histórico
          dessas provas revela tendências claras que orientam sua preparação final de forma objetiva e
          estratégica.
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Período</th>
                <th>Tendência predominante</th>
                <th>Autores / fontes mais citados</th>
                <th>Tipo de questão mais frequente</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>2015–2017</td>
                <td>Textos literários e poéticos em destaque</td>
                <td>Neruda, García Márquez, Borges</td>
                <td>Identificação de recursos expressivos</td>
              </tr>
              <tr>
                <td>2018–2020</td>
                <td>Equilíbrio entre jornalístico e literário</td>
                <td>El País, La Nación, Vargas Llosa</td>
                <td>Inferência e vocabulário em contexto</td>
              </tr>
              <tr>
                <td>2021–2022</td>
                <td>Textos de opinião e charge social</td>
                <td>Revistas hispânicas, cartunistas latinos</td>
                <td>Estratégia persuasiva e intenção comunicativa</td>
              </tr>
              <tr>
                <td>2023–2024</td>
                <td>Diversidade cultural e variação linguística</td>
                <td>Vozes indígenas, imprensa regional latinoamericana</td>
                <td>Relação entre texto verbal e visual</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="lesson-highlight">
          <strong>Tendência 2024–2025:</strong> A banca tem valorizado cada vez mais textos que abordam
          diversidade cultural, identidade latinoamericana e questões socioambientais. Familiarize-se
          com vocabulário de <em>derechos indígenas, biodiversidad, desigualdad social</em> e
          <em> cambio climático</em> — esses temas cruzam com Ciências Humanas e aumentam a integração
          interdisciplinar da prova.
        </div>
      </section>

      {/* ── SEÇÃO 2 — Estratégia de prova ── */}
      <section className="lesson-section">
        <span className="section-kicker">Estratégia</span>
        <h2>2. Estratégia de prova: como ler, identificar e responder</h2>
        <p>
          A maior diferença entre um candidato que acerta 4 de 5 e um que acerta 2 de 5 em Espanhol não é
          o nível de proficiência no idioma — é a <strong>estratégia de leitura</strong>. Seguir um protocolo
          fixo economiza tempo, reduz erros de distração e aumenta a precisão nas escolhas. O candidato que
          lê o enunciado antes do texto já sabe o que procurar e não desperdiça energia em partes
          irrelevantes.
        </p>
        <div className="lesson-grid">
          <div className="lesson-card">
            <span>1</span>
            <h3>Leia o enunciado primeiro</h3>
            <p>
              Antes de ler o texto, leia a pergunta. Ela revela o que você deve buscar: tema central,
              vocabulário, função de um conector, posição do autor, gênero do texto. Isso orienta sua
              leitura para os trechos relevantes e economiza até 90 segundos por questão.
            </p>
          </div>
          <div className="lesson-card">
            <span>2</span>
            <h3>Pré-leitura paratextual</h3>
            <p>
              Analise título, fonte, ano, autor e imagens antes do corpo do texto. Esses elementos
              revelam gênero, origem geográfica (espanhol peninsular ou latinoamericano) e contexto
              temático em menos de 10 segundos.
            </p>
          </div>
          <div className="lesson-card">
            <span>3</span>
            <h3>Leitura global (skimming)</h3>
            <p>
              Passe os olhos pelo texto inteiro buscando o assunto geral e a posição do autor. Não
              trave em palavras desconhecidas — contexto, cognatos e estrutura da frase geralmente
              bastam para inferir o significado com segurança suficiente para o ENEM.
            </p>
          </div>
          <div className="lesson-card">
            <span>4</span>
            <h3>Elimine por contradição</h3>
            <p>
              Dos quatro distratores, pelo menos um contradiz diretamente o texto. Identificar e
              eliminar esse primeiro já aumenta sua chance de 25% para 33%. Continue eliminando
              os que exageram ou generalizam além do que o texto afirma.
            </p>
          </div>
        </div>
        <div className="lesson-highlight">
          <strong>Propósito comunicativo — perguntas-guia:</strong> Ao identificar o gênero, pergunte-se:
          (1) Quem escreveu? (2) Para quem? (3) Com que objetivo — informar, convencer, emocionar,
          entreter, instruir? (4) Qual o suporte — jornal, cartaz, blog, revista literária? As respostas
          a essas quatro perguntas respondem metade das questões do ENEM sem precisar entender cada
          palavra do texto.
        </div>
      </section>

      {/* ── SEÇÃO 3 — Falsos cognatos ── */}
      <section className="lesson-section">
        <span className="section-kicker">Vocabulário Crítico</span>
        <h2>3. Falsos cognatos mais perigosos para o ENEM</h2>
        <p>
          Português e Espanhol compartilham entre 89% e 93% do vocabulário básico, o que é uma vantagem
          enorme. Porém, os <strong>falsos cognatos</strong> — palavras que se parecem mas significam coisas
          diferentes — são armadilhas frequentes nas provas. O candidato que as conhece de cor evita erros
          graves de interpretação que podem custar questões decisivas.
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Palavra em Espanhol</th>
                <th>O que você pensa que significa</th>
                <th>O que realmente significa</th>
                <th>Exemplo de uso</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><em>embarazada</em></td>
                <td>embaraçada, envergonhada</td>
                <td><strong>grávida</strong></td>
                <td><em>Está embarazada de seis meses.</em></td>
              </tr>
              <tr>
                <td><em>borracha</em></td>
                <td>borracha (látex, material)</td>
                <td><strong>bêbada</strong></td>
                <td><em>Llegó a la fiesta completamente borracha.</em></td>
              </tr>
              <tr>
                <td><em>polvo</em></td>
                <td>polvo (cefalópode marinho)</td>
                <td><strong>pó, poeira</strong></td>
                <td><em>Hay polvo en todos los muebles.</em></td>
              </tr>
              <tr>
                <td><em>largo</em></td>
                <td>largo (espaço amplo)</td>
                <td><strong>longo, comprido</strong></td>
                <td><em>Tiene el cabello largo y rizado.</em></td>
              </tr>
              <tr>
                <td><em>exquisito</em></td>
                <td>esquisito (estranho, excêntrico)</td>
                <td><strong>delicioso, requintado</strong></td>
                <td><em>Este vino tiene un sabor exquisito.</em></td>
              </tr>
              <tr>
                <td><em>pretender</em></td>
                <td>pretender (fingir)</td>
                <td><strong>querer, ter intenção de</strong></td>
                <td><em>Pretendo estudiar toda la tarde.</em></td>
              </tr>
              <tr>
                <td><em>apología</em></td>
                <td>apologia (pedido de desculpa)</td>
                <td><strong>defesa, elogio entusiasmado</strong></td>
                <td><em>El discurso fue una apología de la libertad.</em></td>
              </tr>
              <tr>
                <td><em>taller</em></td>
                <td>talher (utensílio de mesa)</td>
                <td><strong>oficina mecânica; ateliê</strong></td>
                <td><em>Llevé el coche al taller.</em></td>
              </tr>
              <tr>
                <td><em>realizar</em></td>
                <td>perceber, constatar</td>
                <td><strong>realizar, executar, concretizar</strong></td>
                <td><em>Realizamos el proyecto en tiempo récord.</em></td>
              </tr>
              <tr>
                <td><em>sensible</em></td>
                <td>sensato, razoável</td>
                <td><strong>sensível (emocional)</strong></td>
                <td><em>Es una persona muy sensible a la música.</em></td>
              </tr>
              <tr>
                <td><em>soportar</em></td>
                <td>apoiar, suportar (estruturalmente)</td>
                <td><strong>aguentar, tolerar (com esforço)</strong></td>
                <td><em>No puedo soportar tanto ruido.</em></td>
              </tr>
              <tr>
                <td><em>contestar</em></td>
                <td>contestar (discordar)</td>
                <td><strong>responder (a uma pergunta)</strong></td>
                <td><em>Contesta el teléfono, por favor.</em></td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="lesson-highlight">
          <strong>Regra de ouro para falsos cognatos:</strong> Toda vez que uma palavra em espanhol parecer
          "estranha demais" no contexto, desconfie. Releia a frase substituindo pelo significado real —
          se o sentido ficar coerente com o restante do texto, você acertou. O contexto sempre prevalece
          sobre o instinto de tradução direta.
        </div>
      </section>

      {/* ── SEÇÃO 4 — SVG 1: Mapa visual dos módulos ── */}
      <section className="lesson-section">
        <span className="section-kicker">Visão do Curso</span>
        <h2>4. Mapa do curso: os 8 módulos de Espanhol percorridos</h2>
        <p>
          Ao longo dos 34 capítulos deste curso, você percorreu 8 grandes módulos temáticos que cobrem
          integralmente o que o ENEM cobra em Espanhol. Visualizar esse caminho completo ajuda a identificar
          quais áreas merecem uma última revisão antes da prova e reforça a sensação de preparo — você
          chegou até aqui, e isso faz toda a diferença.
        </p>
        <figure className="lesson-figure">
          <svg viewBox="0 0 700 320" width="700" height="320" aria-label="Mapa visual dos 8 módulos do curso de Espanhol para o ENEM — caminho percorrido do capítulo 1 ao 34">
            <rect x="0" y="0" width="700" height="320" rx="14" fill="#f8fafc" />
            <text x="350" y="28" textAnchor="middle" fill="#1e3a5f" fontSize="14" fontWeight="bold">
              Os 8 Módulos do Curso de Espanhol — Caminho Percorrido
            </text>
            <defs>
              <marker id="cap34arrowA" markerWidth="7" markerHeight="7" refX="5" refY="3" orient="auto">
                <path d="M0,0 L0,6 L7,3 z" fill="#6b7280" />
              </marker>
            </defs>
            {/* Módulo 1 */}
            <rect x="20" y="50" width="145" height="70" rx="10" fill="#dbeafe" stroke="#2563eb" strokeWidth="2" />
            <text x="93" y="74" textAnchor="middle" fill="#1e40af" fontSize="10" fontWeight="bold">MÓDULO 1</text>
            <text x="93" y="90" textAnchor="middle" fill="#1e40af" fontSize="10">Estratégias de</text>
            <text x="93" y="105" textAnchor="middle" fill="#1e40af" fontSize="10">Leitura (caps 1–4)</text>
            {/* Seta M1 → M2 */}
            <line x1="165" y1="85" x2="183" y2="85" stroke="#6b7280" strokeWidth="1.5" markerEnd="url(#cap34arrowA)" />
            {/* Módulo 2 */}
            <rect x="185" y="50" width="145" height="70" rx="10" fill="#dcfce7" stroke="#16a34a" strokeWidth="2" />
            <text x="258" y="74" textAnchor="middle" fill="#166534" fontSize="10" fontWeight="bold">MÓDULO 2</text>
            <text x="258" y="90" textAnchor="middle" fill="#166534" fontSize="10">Vocabulário e</text>
            <text x="258" y="105" textAnchor="middle" fill="#166534" fontSize="10">Cognatos (caps 5–8)</text>
            {/* Seta M2 → M3 */}
            <line x1="330" y1="85" x2="348" y2="85" stroke="#6b7280" strokeWidth="1.5" markerEnd="url(#cap34arrowA)" />
            {/* Módulo 3 */}
            <rect x="350" y="50" width="145" height="70" rx="10" fill="#fef9c3" stroke="#ca8a04" strokeWidth="2" />
            <text x="423" y="74" textAnchor="middle" fill="#854d0e" fontSize="10" fontWeight="bold">MÓDULO 3</text>
            <text x="423" y="90" textAnchor="middle" fill="#854d0e" fontSize="10">Gramática para</text>
            <text x="423" y="105" textAnchor="middle" fill="#854d0e" fontSize="10">Leitura (caps 9–12)</text>
            {/* Seta M3 → M4 */}
            <line x1="495" y1="85" x2="513" y2="85" stroke="#6b7280" strokeWidth="1.5" markerEnd="url(#cap34arrowA)" />
            {/* Módulo 4 */}
            <rect x="515" y="50" width="165" height="70" rx="10" fill="#fed7aa" stroke="#ea580c" strokeWidth="2" />
            <text x="598" y="74" textAnchor="middle" fill="#9a3412" fontSize="10" fontWeight="bold">MÓDULO 4</text>
            <text x="598" y="90" textAnchor="middle" fill="#9a3412" fontSize="10">Gêneros Textuais</text>
            <text x="598" y="105" textAnchor="middle" fill="#9a3412" fontSize="10">(caps 13–17)</text>
            {/* Seta curva M4 → M5 (desce e volta) */}
            <line x1="598" y1="120" x2="598" y2="148" stroke="#6b7280" strokeWidth="1.5" />
            <line x1="598" y1="148" x2="93" y2="148" stroke="#6b7280" strokeWidth="1.5" />
            <line x1="93" y1="148" x2="93" y2="168" stroke="#6b7280" strokeWidth="1.5" markerEnd="url(#cap34arrowA)" />
            {/* Módulo 5 */}
            <rect x="20" y="170" width="145" height="70" rx="10" fill="#e9d5ff" stroke="#7c3aed" strokeWidth="2" />
            <text x="93" y="194" textAnchor="middle" fill="#5b21b6" fontSize="10" fontWeight="bold">MÓDULO 5</text>
            <text x="93" y="210" textAnchor="middle" fill="#5b21b6" fontSize="10">Literatura Hispânica</text>
            <text x="93" y="225" textAnchor="middle" fill="#5b21b6" fontSize="10">(caps 18–22)</text>
            {/* Seta M5 → M6 */}
            <line x1="165" y1="205" x2="183" y2="205" stroke="#6b7280" strokeWidth="1.5" markerEnd="url(#cap34arrowA)" />
            {/* Módulo 6 */}
            <rect x="185" y="170" width="145" height="70" rx="10" fill="#fce7f3" stroke="#db2777" strokeWidth="2" />
            <text x="258" y="194" textAnchor="middle" fill="#9d174d" fontSize="10" fontWeight="bold">MÓDULO 6</text>
            <text x="258" y="210" textAnchor="middle" fill="#9d174d" fontSize="10">Cultura e Contexto</text>
            <text x="258" y="225" textAnchor="middle" fill="#9d174d" fontSize="10">(caps 23–26)</text>
            {/* Seta M6 → M7 */}
            <line x1="330" y1="205" x2="348" y2="205" stroke="#6b7280" strokeWidth="1.5" markerEnd="url(#cap34arrowA)" />
            {/* Módulo 7 */}
            <rect x="350" y="170" width="145" height="70" rx="10" fill="#ccfbf1" stroke="#0d9488" strokeWidth="2" />
            <text x="423" y="194" textAnchor="middle" fill="#115e59" fontSize="10" fontWeight="bold">MÓDULO 7</text>
            <text x="423" y="210" textAnchor="middle" fill="#115e59" fontSize="10">Variação Linguística</text>
            <text x="423" y="225" textAnchor="middle" fill="#115e59" fontSize="10">(caps 27–30)</text>
            {/* Seta M7 → M8 */}
            <line x1="495" y1="205" x2="513" y2="205" stroke="#6b7280" strokeWidth="1.5" markerEnd="url(#cap34arrowA)" />
            {/* Módulo 8 */}
            <rect x="515" y="170" width="165" height="70" rx="10" fill="#fef2f2" stroke="#dc2626" strokeWidth="2" />
            <text x="598" y="194" textAnchor="middle" fill="#991b1b" fontSize="10" fontWeight="bold">MÓDULO 8</text>
            <text x="598" y="210" textAnchor="middle" fill="#991b1b" fontSize="10">Simulados e Revisão</text>
            <text x="598" y="225" textAnchor="middle" fill="#991b1b" fontSize="10">(caps 31–34) ✓</text>
            {/* Rodapé */}
            <rect x="20" y="260" width="660" height="40" rx="8" fill="#eff6ff" stroke="#93c5fd" strokeWidth="1" />
            <text x="350" y="280" textAnchor="middle" fill="#1e40af" fontSize="10" fontWeight="bold">
              Capítulo 34 — Revisão Geral: consolidação de todos os módulos
            </text>
            <text x="350" y="295" textAnchor="middle" fill="#374151" fontSize="10">
              Você percorreu 34 capítulos cobrindo integralmente o que o ENEM cobra em Espanhol.
            </text>
          </svg>
          <figcaption>Os 8 módulos do curso de Espanhol para o ENEM — do capítulo 1 ao 34, cobrindo estratégias de leitura, gramática, literatura, cultura, variação linguística e simulados.</figcaption>
        </figure>
      </section>

      {/* ── SEÇÃO 5 — Conectores textuais ── */}
      <section className="lesson-section">
        <span className="section-kicker">Gramática Funcional</span>
        <h2>5. Conectores textuais e operadores argumentativos</h2>
        <p>
          Os conectores textuais são um dos tópicos mais cobrados nas questões de Espanhol do ENEM. Uma
          questão típica apresenta um trecho com um conector destacado e pergunta: "Qual relação lógica
          ele estabelece?". Dominar os principais conectores é garantia direta de pontos na prova.
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Conector em Espanhol</th>
                <th>Equivalente em Português</th>
                <th>Relação lógica</th>
                <th>Exemplo</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><em>sin embargo</em></td>
                <td>no entanto, contudo</td>
                <td><strong>Contraste / oposição</strong></td>
                <td><em>Es cara; sin embargo, la calidad lo justifica.</em></td>
              </tr>
              <tr>
                <td><em>aunque</em></td>
                <td>embora, ainda que</td>
                <td><strong>Concessão</strong></td>
                <td><em>Aunque llueva, iremos al partido.</em></td>
              </tr>
              <tr>
                <td><em>por lo tanto</em></td>
                <td>portanto, logo</td>
                <td><strong>Conclusão</strong></td>
                <td><em>No estudió; por lo tanto, reprobó.</em></td>
              </tr>
              <tr>
                <td><em>además</em></td>
                <td>além disso, também</td>
                <td><strong>Adição / reforço</strong></td>
                <td><em>Es inteligente y además muy trabajadora.</em></td>
              </tr>
              <tr>
                <td><em>no obstante</em></td>
                <td>não obstante, todavia</td>
                <td><strong>Contraste formal</strong></td>
                <td><em>El proyecto fue aprobado; no obstante, hubo críticas.</em></td>
              </tr>
              <tr>
                <td><em>a pesar de</em></td>
                <td>apesar de</td>
                <td><strong>Concessão</strong></td>
                <td><em>A pesar del frío, salieron a caminar.</em></td>
              </tr>
              <tr>
                <td><em>puesto que</em></td>
                <td>visto que, posto que</td>
                <td><strong>Causa / explicação</strong></td>
                <td><em>Puesto que es tarde, nos vamos.</em></td>
              </tr>
              <tr>
                <td><em>es decir</em></td>
                <td>ou seja, isto é</td>
                <td><strong>Reformulação / esclarecimento</strong></td>
                <td><em>Es herbívoro, es decir, come solo plantas.</em></td>
              </tr>
              <tr>
                <td><em>por ejemplo</em></td>
                <td>por exemplo</td>
                <td><strong>Exemplificação</strong></td>
                <td><em>Hay muchos recursos, por ejemplo, el agua.</em></td>
              </tr>
              <tr>
                <td><em>en cambio</em></td>
                <td>por outro lado, ao contrário</td>
                <td><strong>Contraste / alternativa</strong></td>
                <td><em>Él prefiere el fútbol; en cambio, ella juega tenis.</em></td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="lesson-highlight">
          <strong>Dica ENEM — conectores de contraste:</strong> Os conectores <em>sin embargo</em>,
          <em> no obstante</em>, <em>en cambio</em> e <em>aunque</em> todos expressam contraste ou
          oposição, mas com nuances diferentes. <em>Aunque</em> é concessivo (admite o fato antes de
          contrariá-lo); <em>sin embargo</em> e <em>no obstante</em> são adversativos puros; <em>en
          cambio</em> estabelece alternância entre dois elementos comparados. Saber distingui-los vale
          questões.
        </div>
      </section>

      {/* ── SEÇÃO 6 — Verbos irregulares ── */}
      <section className="lesson-section">
        <span className="section-kicker">Gramática Essencial</span>
        <h2>6. Verbos irregulares essenciais: formas mais cobradas</h2>
        <p>
          O ENEM não cobra conjugação de verbos diretamente, mas as formas verbais aparecem nos textos e
          são essenciais para a compreensão. Reconhecer formas irregulares impede erros de interpretação —
          especialmente no pretérito e no subjuntivo, que aparecem com frequência em textos formais e
          literários de alto prestígio.
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Verbo</th>
                <th>Presente (yo / él)</th>
                <th>Pretérito Indefinido (yo / él)</th>
                <th>Futuro (yo / él)</th>
                <th>Obs. para o ENEM</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><em>ser</em> (ser)</td>
                <td><em>soy / es</em></td>
                <td><em>fui / fue</em></td>
                <td><em>seré / será</em></td>
                <td>Confundir <em>fue</em> (ser/ir) com <em>era</em> (ser, imperfecto)</td>
              </tr>
              <tr>
                <td><em>estar</em> (estar)</td>
                <td><em>estoy / está</em></td>
                <td><em>estuve / estuvo</em></td>
                <td><em>estaré / estará</em></td>
                <td><em>Ser vs. estar</em> — distinção relevante em textos descritivos</td>
              </tr>
              <tr>
                <td><em>tener</em> (ter)</td>
                <td><em>tengo / tiene</em></td>
                <td><em>tuve / tuvo</em></td>
                <td><em>tendré / tendrá</em></td>
                <td><em>Tener que + infinitivo</em> = ter que (obrigação)</td>
              </tr>
              <tr>
                <td><em>hacer</em> (fazer)</td>
                <td><em>hago / hace</em></td>
                <td><em>hice / hizo</em></td>
                <td><em>haré / hará</em></td>
                <td><em>Hace + tempo</em> = faz (referência temporal)</td>
              </tr>
              <tr>
                <td><em>ir</em> (ir)</td>
                <td><em>voy / va</em></td>
                <td><em>fui / fue</em></td>
                <td><em>iré / irá</em></td>
                <td><em>Ir a + infinitivo</em> = futuro próximo</td>
              </tr>
              <tr>
                <td><em>poder</em> (poder)</td>
                <td><em>puedo / puede</em></td>
                <td><em>pude / pudo</em></td>
                <td><em>podré / podrá</em></td>
                <td>Exprime possibilidade; frequente em textos de opinião</td>
              </tr>
              <tr>
                <td><em>querer</em> (querer)</td>
                <td><em>quiero / quiere</em></td>
                <td><em>quise / quiso</em></td>
                <td><em>querré / querrá</em></td>
                <td>Também significa "amar" em contextos afetivos literários</td>
              </tr>
              <tr>
                <td><em>decir</em> (dizer)</td>
                <td><em>digo / dice</em></td>
                <td><em>dije / dijo</em></td>
                <td><em>diré / dirá</em></td>
                <td>Frequente em discurso indireto: <em>dijo que…</em></td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ── SEÇÃO 7 — SVG 2: Diagrama de gêneros ── */}
      <section className="lesson-section">
        <span className="section-kicker">Gêneros Textuais</span>
        <h2>7. Gêneros textuais de maior incidência no ENEM</h2>
        <p>
          O reconhecimento do gênero textual é o primeiro passo para interpretar corretamente qualquer
          questão de Espanhol do ENEM. Cada gênero tem características formais, propósito comunicativo
          e estratégias de leitura específicas que, quando dominados, permitem ao candidato responder
          com muito mais eficiência e precisão.
        </p>
        <figure className="lesson-figure">
          <svg viewBox="0 0 700 250" width="700" height="250" aria-label="Diagrama de barras mostrando a frequência dos gêneros textuais nas questões de Espanhol do ENEM entre 2015 e 2024">
            <rect x="0" y="0" width="700" height="250" rx="14" fill="#f8fafc" />
            <text x="350" y="28" textAnchor="middle" fill="#111827" fontSize="14" fontWeight="bold">
              Frequência dos Gêneros Textuais — Espanhol ENEM (2015–2024)
            </text>
            {/* Eixo Y */}
            <line x1="60" y1="40" x2="60" y2="200" stroke="#9ca3af" strokeWidth="1.5" />
            {/* Eixo X */}
            <line x1="60" y1="200" x2="680" y2="200" stroke="#9ca3af" strokeWidth="1.5" />
            {/* Marcas e rótulos Y */}
            <text x="52" y="44" textAnchor="end" fill="#6b7280" fontSize="9">35%</text>
            <text x="52" y="80" textAnchor="end" fill="#6b7280" fontSize="9">28%</text>
            <text x="52" y="116" textAnchor="end" fill="#6b7280" fontSize="9">21%</text>
            <text x="52" y="152" textAnchor="end" fill="#6b7280" fontSize="9">14%</text>
            <text x="52" y="188" textAnchor="end" fill="#6b7280" fontSize="9">7%</text>
            <line x1="58" y1="44" x2="62" y2="44" stroke="#9ca3af" strokeWidth="1" />
            <line x1="58" y1="80" x2="62" y2="80" stroke="#9ca3af" strokeWidth="1" />
            <line x1="58" y1="116" x2="62" y2="116" stroke="#9ca3af" strokeWidth="1" />
            <line x1="58" y1="152" x2="62" y2="152" stroke="#9ca3af" strokeWidth="1" />
            {/* Barra 1 — Jornalístico 33% */}
            <rect x="80" y="52" width="90" height="148" rx="4" fill="#dbeafe" stroke="#2563eb" strokeWidth="1" />
            <text x="125" y="70" textAnchor="middle" fill="#1e40af" fontSize="11" fontWeight="bold">33%</text>
            <text x="125" y="215" textAnchor="middle" fill="#374151" fontSize="9">Jornalístico</text>
            <text x="125" y="226" textAnchor="middle" fill="#374151" fontSize="9">/ Opinativo</text>
            {/* Barra 2 — Literário 28% */}
            <rect x="195" y="74" width="90" height="126" rx="4" fill="#dcfce7" stroke="#16a34a" strokeWidth="1" />
            <text x="240" y="92" textAnchor="middle" fill="#166534" fontSize="11" fontWeight="bold">28%</text>
            <text x="240" y="215" textAnchor="middle" fill="#374151" fontSize="9">Literário</text>
            <text x="240" y="226" textAnchor="middle" fill="#374151" fontSize="9">(conto/poema)</text>
            {/* Barra 3 — Publicitário 18% */}
            <rect x="310" y="118" width="90" height="82" rx="4" fill="#fef9c3" stroke="#ca8a04" strokeWidth="1" />
            <text x="355" y="136" textAnchor="middle" fill="#854d0e" fontSize="11" fontWeight="bold">18%</text>
            <text x="355" y="215" textAnchor="middle" fill="#374151" fontSize="9">Publicitário</text>
            <text x="355" y="226" textAnchor="middle" fill="#374151" fontSize="9">/ Institucional</text>
            {/* Barra 4 — Charge 12% */}
            <rect x="425" y="145" width="90" height="55" rx="4" fill="#fed7aa" stroke="#ea580c" strokeWidth="1" />
            <text x="470" y="163" textAnchor="middle" fill="#9a3412" fontSize="11" fontWeight="bold">12%</text>
            <text x="470" y="215" textAnchor="middle" fill="#374151" fontSize="9">Charge /</text>
            <text x="470" y="226" textAnchor="middle" fill="#374151" fontSize="9">Cartum</text>
            {/* Barra 5 — Científico 9% */}
            <rect x="540" y="159" width="90" height="41" rx="4" fill="#e9d5ff" stroke="#7c3aed" strokeWidth="1" />
            <text x="585" y="177" textAnchor="middle" fill="#5b21b6" fontSize="11" fontWeight="bold">9%</text>
            <text x="585" y="215" textAnchor="middle" fill="#374151" fontSize="9">Divulgação</text>
            <text x="585" y="226" textAnchor="middle" fill="#374151" fontSize="9">Científica</text>
            <text x="350" y="244" textAnchor="middle" fill="#9ca3af" fontSize="9">* Estimativa baseada em análise das edições 2015–2024</text>
          </svg>
          <figcaption>Distribuição estimada dos gêneros textuais nas questões de Espanhol do ENEM entre 2015 e 2024. O jornalístico/opinativo lidera, seguido pelo literário.</figcaption>
        </figure>
        <div className="lesson-grid">
          <div className="lesson-card">
            <span>📰</span>
            <h3>Notícia / Reportagem</h3>
            <p>
              Estrutura: título, lead (5 W: quem, o quê, quando, onde, por quê), desenvolvimento.
              Linguagem objetiva. O ENEM pede: tema central, inferência de dados, posição do veículo.
            </p>
          </div>
          <div className="lesson-card">
            <span>🎭</span>
            <h3>Charge / Cartum</h3>
            <p>
              Combina imagem e texto verbal. Sempre há crítica ou ironia. Leia a legenda com
              atenção — ela frequentemente inverte ou resignifica o sentido óbvio da imagem.
            </p>
          </div>
          <div className="lesson-card">
            <span>📜</span>
            <h3>Poema</h3>
            <p>
              Foco em linguagem figurada: metáfora, hipérbole, personificação. O ENEM pede
              identificação do recurso e seu efeito de sentido, nunca tradução literal dos versos.
            </p>
          </div>
          <div className="lesson-card">
            <span>📢</span>
            <h3>Propaganda / Anúncio</h3>
            <p>
              Identifique público-alvo, estratégia persuasiva (apelo emocional, autoridade,
              urgência) e <em>call to action</em>. Verbos no imperativo são marca registrada da
              propaganda.
            </p>
          </div>
          <div className="lesson-card">
            <span>💬</span>
            <h3>Artigo de Opinião</h3>
            <p>
              Tem tese explícita e argumentos. Procure marcadores de opinião:
              <em> a mi juicio, creo que, sin duda, es evidente que</em>. O ENEM pede
              identificar a posição do autor e a estratégia argumentativa usada.
            </p>
          </div>
        </div>
      </section>

      {/* ── SEÇÃO 8 — Estratégias de inferência ── */}
      <section className="lesson-section">
        <span className="section-kicker">Inferência</span>
        <h2>8. Estratégias de inferência: deduzir sem traduzir</h2>
        <p>
          A inferência de vocabulário desconhecido é uma competência central avaliada pelo ENEM. O exame
          deliberadamente inclui palavras que o candidato médio não conhece para testar se ele consegue
          deduzir o significado a partir do contexto — e não para penalizá-lo pelo desconhecimento isolado
          da palavra. Isso significa que a habilidade de inferir vale mais do que um dicionário.
        </p>
        <div className="lesson-grid">
          <div className="lesson-card">
            <span>🔤</span>
            <h3>Prefixos e sufixos cognatos</h3>
            <p>
              Muitos prefixos são idênticos ao português: <em>des-</em> (negação), <em>in-/im-</em>
              (negação), <em>re-</em> (repetição), <em>sub-</em> (abaixo), <em>super-</em> (acima).
              Sufixos: <em>-ción</em> = -ção; <em>-dad</em> = -dade; <em>-mente</em> = -mente.
            </p>
          </div>
          <div className="lesson-card">
            <span>🔗</span>
            <h3>Relação com palavras vizinhas</h3>
            <p>
              Se uma palavra desconhecida aparece junto a outras que você entende, a categoria
              semântica fica clara. <em>"La sequía, las inundaciones y las tormentas…"</em>
              — mesmo sem saber <em>sequía</em>, o contexto indica fenômenos climáticos.
            </p>
          </div>
          <div className="lesson-card">
            <span>🔄</span>
            <h3>Antonímia e sinonímia explícitas</h3>
            <p>
              Textos frequentemente reapresentam ideias com sinônimos ou as contrastam com
              antônimos. <em>"no es tacaño, sino generoso"</em> — mesmo sem saber <em>tacaño</em>,
              a estrutura revela que é o oposto de generoso (= avarento).
            </p>
          </div>
          <div className="lesson-card">
            <span>🌍</span>
            <h3>Cognatos de cultura geral</h3>
            <p>
              Nomes próprios, datas, números, siglas e termos técnicos internacionais são
              praticamente idênticos em espanhol e português. Eles funcionam como âncoras de
              compreensão mesmo quando o vocabulário ao redor é obscuro ou desconhecido.
            </p>
          </div>
        </div>
        <div className="lesson-highlight">
          <strong>Técnica do "substituto":</strong> Quando encontrar uma palavra desconhecida em uma
          questão de vocabulário, leia a frase substituindo mentalmente cada alternativa pela palavra no
          contexto. A alternativa que mantiver o sentido coerente com o restante do parágrafo é a
          correta. Esse método funciona mesmo sem saber a tradução exata da palavra original.
        </div>
      </section>

      {/* ── SEÇÃO 9 — Variação linguística ── */}
      <section className="lesson-section">
        <span className="section-kicker">Variação Linguística</span>
        <h2>9. Espanha vs. América Latina: diferenças que aparecem no ENEM</h2>
        <p>
          O Espanhol é falado por mais de 500 milhões de pessoas em 21 países, e existe variação
          linguística significativa entre o espanhol peninsular (da Espanha) e as variedades
          latinoamericanas. O ENEM reconhece essa diversidade e pode apresentar textos de qualquer
          variedade. Conhecer as principais diferenças previne erros de interpretação e demonstra
          maturidade linguística ao candidato.
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Fenômeno</th>
                <th>Espanhol da Espanha</th>
                <th>Espanhol da América Latina</th>
                <th>Relevância para o ENEM</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Pronome de tratamento plural</td>
                <td><em>vosotros / vuestro</em></td>
                <td><em>ustedes / su</em></td>
                <td>Alta — aparece em textos de épocas diferentes</td>
              </tr>
              <tr>
                <td>"Você" informal</td>
                <td><em>tú</em> (universal)</td>
                <td><em>tú</em> ou <em>vos</em> (Argentina, Uruguai, América Central)</td>
                <td>Média — <em>vos tenés</em> = você tem</td>
              </tr>
              <tr>
                <td>Vocabulário cotidiano</td>
                <td><em>ordenador</em> (comp.), <em>coche</em> (carro), <em>piso</em> (apto.)</td>
                <td><em>computadora/computador</em>, <em>carro/auto</em>, <em>departamento</em></td>
                <td>Alta — o contexto indica a variedade usada</td>
              </tr>
              <tr>
                <td>Uso do pretérito perfeito</td>
                <td>Preferência pelo Perfecto para ações recentes: <em>he llegado</em></td>
                <td>Preferência pelo Indefinido mesmo para ações recentes: <em>llegué</em></td>
                <td>Média — não muda o significado para fins do ENEM</td>
              </tr>
              <tr>
                <td>Pronome <em>le</em> / <em>lo</em> masc.</td>
                <td><em>leísmo</em>: preferência por <em>le</em></td>
                <td><em>lo</em> como forma padrão</td>
                <td>Baixa — raro como foco de questão</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="lesson-highlight">
          <strong>Dica prática de identificação:</strong> Quando o texto apresentar <em>vosotros</em> ou
          <em> vuestro</em>, é provável que seja de origem espanhola (Espanha). Quando apresentar
          <em> vos</em> ou formas como <em>tenés, sabés, sos</em>, é da variante rioplatense
          (Argentina/Uruguai). Reconhecer a variante ajuda a interpretar o contexto cultural da questão
          com maior precisão.
        </div>
      </section>

      {/* ── SEÇÃO 10 — Checklist final ── */}
      <section className="lesson-section">
        <span className="section-kicker">Véspera de Prova</span>
        <h2>10. Checklist final: o que revisar na véspera da prova</h2>
        <p>
          Na véspera do ENEM, o objetivo não é aprender coisas novas — é consolidar o que você já sabe
          e garantir que vai aplicar corretamente no dia da prova. O checklist abaixo cobre os pontos de
          maior impacto nas questões de Espanhol. Reserve no máximo 30 minutos para essa revisão final
          e depois descanse: o corpo e a mente descansados valem mais do que mais uma hora de estudo.
        </p>
        <div className="lesson-grid">
          <div className="lesson-card">
            <span>✅</span>
            <h3>Conectores (10 min)</h3>
            <p>
              Releia a tabela de conectores desta seção 5. Certifique-se de que você distingue
              <em> sin embargo</em> (contraste), <em>aunque</em> (concessão), <em>por lo tanto</em>
              (conclusão) e <em>además</em> (adição) com segurança.
            </p>
          </div>
          <div className="lesson-card">
            <span>✅</span>
            <h3>Falsos cognatos (5 min)</h3>
            <p>
              Releia a lista de falsos cognatos críticos: <em>embarazada, borracha, polvo, largo,
              exquisito, pretender, taller</em>. São os mais perigosos e os mais frequentemente
              explorados como distratores.
            </p>
          </div>
          <div className="lesson-card">
            <span>✅</span>
            <h3>Estratégia de leitura (5 min)</h3>
            <p>
              Confirme o protocolo: (1) leia o enunciado primeiro, (2) pré-leitura paratextual,
              (3) leitura global, (4) elimine por contradição. Não pule etapas no dia da prova —
              cada uma economiza tempo e evita erros.
            </p>
          </div>
          <div className="lesson-card">
            <span>✅</span>
            <h3>Gêneros textuais (5 min)</h3>
            <p>
              Recorde o que caracteriza cada gênero: notícia (objetividade + 5 W), artigo de
              opinião (tese + argumentos), poema (linguagem figurada), charge (ironia + imagem),
              propaganda (imperativo + apelo).
            </p>
          </div>
          <div className="lesson-card">
            <span>✅</span>
            <h3>Gestão de tempo (5 min)</h3>
            <p>
              Reserve 12–15 minutos para as 5 questões de Espanhol. Isso dá cerca de 2,5 minutos
              por questão. Se travar em uma, marque sua melhor opção e avance — nunca deixe em
              branco, não há desconto por erro.
            </p>
          </div>
        </div>
        <div className="lesson-highlight">
          <strong>Lembre-se sempre:</strong> O ENEM não tem desconto por questões erradas. Marque
          sempre uma alternativa, mesmo que seja um chute educado com eliminação de distratores
          óbvios. Com 4 alternativas, eliminar apenas 2 já dá 50% de chance de acertar —
          estatisticamente vantajoso frente ao branco.
        </div>
      </section>

      {/* ── SEÇÃO 11 — Simulado Final ── */}
      <section className="lesson-section">
        <span className="section-kicker">Simulado Final</span>
        <h2>Simulado comentado — 5 questões tipo ENEM</h2>
        <p>
          As cinco questões a seguir simulam com precisão o padrão das provas de Espanhol do ENEM:
          textos autênticos em espanhol de diferentes gêneros (notícia, poema, artigo de opinião,
          propaganda, charge), enunciados em português, quatro alternativas e resolução detalhada.
          Cronometre-se: tente resolver o simulado em 12 minutos antes de ler as resoluções.
        </p>

        <Exercise
          level="Básico"
          title="1. Questão tipo ENEM — notícia (vocabulário em contexto)"
          statement={
            <p>
              Leia o texto: <em>"Científicos de la Universidad de São Paulo descubrieron una nueva
              especie de rana en la Mata Atlántica. El hallazgo, publicado en la revista especializada
              Zootaxa, subraya la importancia de preservar los últimos remanentes del bioma, que ya
              perdió más del 85% de su cobertura original. Según los investigadores, la especie es
              extremadamente vulnerable a la deforestación y al cambio climático."</em>
              <br /><br />
              No texto, a palavra <strong>"hallazgo"</strong> refere-se:
            </p>
          }
          options={[
            { letter: "a", text: "À revista científica onde o estudo foi publicado." },
            { letter: "b", text: "Ao processo de desmatamento que ameaça a espécie descoberta." },
            { letter: "c", text: "À descoberta da nova espécie de sapo feita pelos pesquisadores.", correct: true },
            { letter: "d", text: "Ao bioma da Mata Atlântica e à sua cobertura original." },
          ]}
          resolution={
            <p>
              A palavra <em>hallazgo</em> significa "descoberta, achado" em espanhol — cognato do
              verbo <em>hallar</em> (encontrar, descobrir). O contexto confirma: os cientistas
              <em> "descubrieron"</em> (descobriram) uma nova espécie, e o <em>hallazgo</em> foi
              publicado na revista <em>Zootaxa</em>. Portanto, <em>hallazgo</em> refere-se à própria
              descoberta da espécie. Mesmo sem conhecer a palavra isoladamente, o contexto torna a
              alternativa (c) a única coerente com o desenvolvimento do texto. Resposta:{" "}
              <strong>c)</strong>.
            </p>
          }
        />

        <Exercise
          level="Intermediário"
          title="2. Questão tipo ENEM — poema (linguagem figurada)"
          statement={
            <p>
              Leia o trecho do poema de Pablo Neruda (<em>Oda a la vida</em>):
              <br /><br />
              <em>"Tengo que recordar todo: / las ramas de un ciruelo, / el humo de una locomotora, /
              las curvas palpitantes del amor, / todo lo que nos hizo / surgir, crecer, ser y ser."</em>
              <br /><br />
              O efeito de sentido produzido pela expressão <strong>"curvas palpitantes del amor"</strong>
              é:
            </p>
          }
          options={[
            { letter: "a", text: "Descrever de forma realista e objetiva a geometria do corpo humano." },
            { letter: "b", text: "Criticar o amor como um sentimento excessivo e destrutivo para o sujeito." },
            { letter: "c", text: "Humanizar o amor ao atribuir-lhe características físicas e pulsantes, tornando-o concreto e sensível.", correct: true },
            { letter: "d", text: "Indicar que o poema trata de uma viagem de trem pelas curvas de uma montanha." },
          ]}
          resolution={
            <p>
              A expressão usa dois recursos combinados: <strong>sinestesia</strong> (atribuir qualidade
              tátil — <em>palpitantes</em> — a um sentimento abstrato) e <strong>personificação</strong>
              (o amor possui "curvas" como um corpo físico). O efeito é humanizar e corporificar o
              amor, tornando-o sensível e palpável na memória do eu lírico. A alternativa (a) está
              errada pois o contexto é lírico, não realista. A alternativa (d) é um distrator que
              usa "curvas" em sentido literal e geográfico, descontextualizado do tema central do
              poema — a memória afetiva. Resposta: <strong>c)</strong>.
            </p>
          }
        />

        <Exercise
          level="Avançado"
          title="3. Questão tipo ENEM — artigo de opinião (relação lógica entre argumentos)"
          statement={
            <p>
              Leia o trecho: <em>"El acceso a internet ya no puede considerarse un lujo; es una
              necesidad básica del siglo XXI. Sin embargo, millones de personas en América Latina
              siguen sin conexión de calidad. Por lo tanto, los gobiernos deben garantizar la
              conectividad como un derecho, puesto que sin ella no hay posibilidad real de participación
              ciudadana ni de inclusión económica."</em>
              <br /><br />
              A relação lógica estabelecida pela sequência{" "}
              <strong>"sin embargo… por lo tanto… puesto que"</strong> é, respectivamente:
            </p>
          }
          options={[
            { letter: "a", text: "Adição — conclusão — exemplificação." },
            { letter: "b", text: "Concessão — adição — causa." },
            { letter: "c", text: "Contraste — conclusão — causa.", correct: true },
            { letter: "d", text: "Causa — contraste — conclusão." },
          ]}
          resolution={
            <p>
              Análise dos três conectores no texto:
              <br />— <em>Sin embargo</em>: introduz um dado que contrasta com a afirmação anterior
              (internet é necessidade, MAS milhões não têm acesso) → <strong>contraste</strong>.
              <br />— <em>Por lo tanto</em>: introduz a conclusão que decorre do problema apresentado
              (governos devem garantir conectividade) → <strong>conclusão</strong>.
              <br />— <em>Puesto que</em>: explica a razão da conclusão (sem conexão, não há cidadania
              nem inclusão) → <strong>causa / explicação</strong>.
              <br />Portanto: contraste — conclusão — causa. Resposta: <strong>c)</strong>.
            </p>
          }
        />

        <Exercise
          level="Contextualizado"
          title="4. Questão tipo ENEM — propaganda (estratégia persuasiva)"
          statement={
            <p>
              Leia o anúncio de uma ONG latinoamericana:
              <br /><br />
              <em>"Cada año, 2,5 millones de toneladas de ropa terminan en basureros de América
              Latina. Una camiseta que uses solo una vez puede tardar 200 años en descomponerse.
              ¿Cuántas veces usarás la tuya? Dona, reutiliza, transforma. El cambio empieza en
              tu armario."</em>
              <br /><br />
              A principal estratégia persuasiva utilizada nesse anúncio é:
            </p>
          }
          options={[
            { letter: "a", text: "Argumento de autoridade, citando especialistas em moda sustentável para embasar os dados apresentados." },
            { letter: "b", text: "Ironia, usando o humor para criticar o consumo excessivo de roupas descartáveis pelo leitor." },
            { letter: "c", text: "Apelo à responsabilidade individual, usando dados alarmantes e uma pergunta retórica para envolver diretamente o leitor.", correct: true },
            { letter: "d", text: "Comparação, confrontando o comportamento de consumidores ricos e pobres na América Latina." },
          ]}
          resolution={
            <p>
              O anúncio usa três recursos combinados para persuadir: (1) dados numéricos alarmantes
              (<em>2,5 millones de toneladas; 200 años</em>) para criar senso de urgência; (2) uma
              pergunta retórica direta (<em>¿Cuántas veces usarás la tuya?</em>) que envolve
              pessoalmente o leitor; (3) verbos no imperativo (<em>dona, reutiliza, transforma</em>)
              que apelam à ação individual. Tudo converge para o apelo à responsabilidade pessoal —
              "o câmbio começa no seu armário". Não há autoridade científica citada, nem ironia, nem
              comparação social entre classes. Resposta: <strong>c)</strong>.
            </p>
          }
        />

        <Exercise
          level="Contextualizado"
          title="5. Questão tipo ENEM — charge (relação texto-imagem e crítica social)"
          statement={
            <div>
              <p>
                Imagine uma charge publicada em um jornal argentino em 2023. Ela mostra dois planetas
                Terra lado a lado: um saudável, com vegetação exuberante e oceanos azuis, com a
                etiqueta de preço <em>"¿lo que cueste?"</em>; e outro degradado, árido e coberto de
                poluição, com a etiqueta <em>"Precio: inestimable"</em>. Abaixo dos dois planetas, a
                legenda diz: <em>"Elegimos el que se vendía más barato."</em>
              </p>
              <p>
                A crítica central expressa pela charge é:
              </p>
            </div>
          }
          options={[
            { letter: "a", text: "A escassez de recursos naturais aumenta progressivamente o preço dos produtos alimentícios no mercado global." },
            { letter: "b", text: "Os países em desenvolvimento não conseguem arcar com os custos de uma transição para uma economia sustentável." },
            { letter: "c", text: "A humanidade priorizou o lucro imediato em detrimento da preservação ambiental, escolhendo um planeta degradado por ser mais barato no curto prazo.", correct: true },
            { letter: "d", text: "As agências internacionais deveriam regular o preço dos recursos naturais para evitar a sua exploração descontrolada." },
          ]}
          resolution={
            <p>
              A charge usa ironia e metáfora visual para criticar o modelo econômico que trata a
              natureza como mercadoria descartável: o planeta saudável custaria{" "}
              <em>"o que fosse necessário"</em> (etiqueta aberta), enquanto o degradado tem preço
              <em> "inestimável"</em> — mas a legenda revela que a humanidade "escolheu o mais
              barato". A crítica central é ao imediatismo econômico: preferimos o lucro de curto
              prazo à preservação ambiental de longo prazo, mesmo que isso resulte em um planeta
              destruído. As alternativas (a), (b) e (d) trazem ideias externas ao conteúdo da
              charge — clássicos distratores com "informação plausível mas não presente no texto".
              Resposta: <strong>c)</strong>.
            </p>
          }
        />
      </section>

    </article>
  );
}
