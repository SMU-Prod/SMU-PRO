"use client";
import { ExerciseCard as Exercise } from "@/lib/notaon/components/ExerciseCard";
export default function Cap29Page() {
  return (
    <article className="lesson-landing">
      <section className="lesson-hero">
        <div>
          <span className="lesson-badge">Espanhol • Capítulo 29</span>
          <h1>Meio ambiente, sustentabilidade e mudanças climáticas</h1>
          <p>
            As questões ambientais estão entre os temas mais recorrentes nas provas de Espanhol do ENEM,
            refletindo a preocupação global com as mudanças climáticas e a sustentabilidade. Jornais como
            <em> El País</em>, <em>El Universal</em> e <em>La Nación</em> publicam frequentemente textos
            jornalísticos e de opinião sobre esses temas — e é exatamente esse tipo de texto que cai na prova.
            Dominar o vocabulário ambiental em espanhol, entender como os movimentos ambientalistas se expressam
            na América Latina e saber interpretar dados percentuais e estatísticos em textos hispânicos são
            competências que fazem toda a diferença na hora de resolver as questões de língua estrangeira do ENEM.
          </p>
        </div>
      </section>

      {/* Seção 1: Vocabulário Ambiental Essencial */}
      <section className="lesson-section">
        <span className="section-kicker">Vocabulário</span>
        <h2>Vocabulário Ambiental Essencial em Espanhol</h2>
        <p>
          Conhecer os termos ambientais em espanhol é o primeiro passo para interpretar textos jornalísticos
          e de opinião sobre meio ambiente. O ENEM frequentemente apresenta esses termos sem tradução direta,
          exigindo que o candidato os reconheça pelo contexto.
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Espanhol</th>
                <th>Português</th>
                <th>Exemplo de uso</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>cambio climático</td><td>mudança climática</td><td><em>El cambio climático afecta a todos los países.</em></td></tr>
              <tr><td>calentamiento global</td><td>aquecimento global</td><td><em>El calentamiento global eleva el nivel del mar.</em></td></tr>
              <tr><td>capa de ozono</td><td>camada de ozônio</td><td><em>La capa de ozono protege la vida en la Tierra.</em></td></tr>
              <tr><td>huella de carbono</td><td>pegada de carbono</td><td><em>Debemos reducir nuestra huella de carbono.</em></td></tr>
              <tr><td>energías renovables</td><td>energias renováveis</td><td><em>Las energías renovables son el futuro energético.</em></td></tr>
              <tr><td>deforestación</td><td>desmatamento</td><td><em>La deforestación destruye la biodiversidad.</em></td></tr>
              <tr><td>biodiversidad</td><td>biodiversidade</td><td><em>América Latina posee gran biodiversidad.</em></td></tr>
              <tr><td>reciclaje</td><td>reciclagem</td><td><em>El reciclaje reduce los desechos sólidos.</em></td></tr>
              <tr><td>desechos / residuos</td><td>resíduos / lixo</td><td><em>Los desechos plásticos contaminan los océanos.</em></td></tr>
              <tr><td>contaminación</td><td>contaminação / poluição</td><td><em>La contaminación del aire afecta la salud.</em></td></tr>
              <tr><td>sequía</td><td>seca</td><td><em>La sequía devastó las cosechas del norte.</em></td></tr>
              <tr><td>inundaciones</td><td>inundações / enchentes</td><td><em>Las inundaciones dejaron miles de damnificados.</em></td></tr>
              <tr><td>emisiones</td><td>emissões</td><td><em>Las emisiones de CO₂ deben reducirse un 45%.</em></td></tr>
              <tr><td>panel solar</td><td>painel solar</td><td><em>Instalaron paneles solares en el edificio municipal.</em></td></tr>
              <tr><td>ecosistema</td><td>ecossistema</td><td><em>El ecosistema amazónico es único en el mundo.</em></td></tr>
              <tr><td>efecto invernadero</td><td>efeito estufa</td><td><em>El efecto invernadero intensifica las tormentas.</em></td></tr>
              <tr><td>desarrollo sostenible</td><td>desenvolvimento sustentável</td><td><em>El desarrollo sostenible equilibra economía y naturaleza.</em></td></tr>
              <tr><td>medio ambiente</td><td>meio ambiente</td><td><em>Cuidar el medio ambiente es responsabilidad de todos.</em></td></tr>
              <tr><td>erosión del suelo</td><td>erosão do solo</td><td><em>La erosión del suelo reduce la fertilidad agrícola.</em></td></tr>
              <tr><td>extinción de especies</td><td>extinção de espécies</td><td><em>La extinción de especies es irreversible.</em></td></tr>
              <tr><td>aguas residuales</td><td>águas residuais / esgoto</td><td><em>Las aguas residuales contaminan los ríos urbanos.</em></td></tr>
              <tr><td>combustibles fósiles</td><td>combustíveis fósseis</td><td><em>Los combustibles fósiles aceleran el cambio climático.</em></td></tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Seção 2: Mapa Conceitual SVG */}
      <section className="lesson-section">
        <span className="section-kicker">Visão Geral</span>
        <h2>Mapa Conceitual: Causas e Consequências do Cambio Climático</h2>
        <p>
          Os textos ambientais em espanhol geralmente organizam os problemas em causas, consequências e soluções.
          Reconhecer essa estrutura ajuda a responder questões de inferência e de identificação da posição do autor.
        </p>
        <figure className="lesson-figure">
          <svg viewBox="0 0 700 260" width="700" height="260" aria-label="Mapa conceitual de impactos ambientais">
            <rect x="0" y="0" width="700" height="260" rx="14" fill="#f0fdf4" />
            <defs>
              <marker id="cap29arr1" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
                <path d="M0,0 L0,6 L8,3 z" fill="#16a34a" />
              </marker>
              <marker id="cap29arr2" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
                <path d="M0,0 L0,6 L8,3 z" fill="#dc2626" />
              </marker>
            </defs>
            {/* Centro */}
            <rect x="270" y="100" width="160" height="60" rx="10" fill="#16a34a" />
            <text x="350" y="127" textAnchor="middle" fill="white" fontSize="13" fontWeight="bold">Cambio</text>
            <text x="350" y="145" textAnchor="middle" fill="white" fontSize="13" fontWeight="bold">Climático</text>
            {/* Causas */}
            <rect x="30" y="30" width="165" height="44" rx="8" fill="#bbf7d0" />
            <text x="112" y="52" textAnchor="middle" fill="#166534" fontSize="12">Combustibles fósiles</text>
            <text x="112" y="66" textAnchor="middle" fill="#166534" fontSize="11">(petróleo, carbón, gas)</text>
            <line x1="195" y1="54" x2="270" y2="115" stroke="#16a34a" strokeWidth="2" markerEnd="url(#cap29arr1)" />
            <rect x="30" y="108" width="165" height="44" rx="8" fill="#bbf7d0" />
            <text x="112" y="130" textAnchor="middle" fill="#166534" fontSize="12">Deforestación</text>
            <text x="112" y="144" textAnchor="middle" fill="#166534" fontSize="11">(pérdida de bosques)</text>
            <line x1="195" y1="130" x2="270" y2="130" stroke="#16a34a" strokeWidth="2" markerEnd="url(#cap29arr1)" />
            <rect x="30" y="186" width="165" height="44" rx="8" fill="#bbf7d0" />
            <text x="112" y="208" textAnchor="middle" fill="#166534" fontSize="12">Agricultura intensiva</text>
            <text x="112" y="222" textAnchor="middle" fill="#166534" fontSize="11">(metano, CO₂)</text>
            <line x1="195" y1="208" x2="270" y2="148" stroke="#16a34a" strokeWidth="2" markerEnd="url(#cap29arr1)" />
            {/* Consequências */}
            <rect x="505" y="30" width="170" height="44" rx="8" fill="#fee2e2" />
            <text x="590" y="52" textAnchor="middle" fill="#991b1b" fontSize="12">Sequías e inundaciones</text>
            <text x="590" y="66" textAnchor="middle" fill="#991b1b" fontSize="11">(eventos extremos)</text>
            <line x1="430" y1="115" x2="505" y2="54" stroke="#dc2626" strokeWidth="2" markerEnd="url(#cap29arr2)" />
            <rect x="505" y="108" width="170" height="44" rx="8" fill="#fee2e2" />
            <text x="590" y="130" textAnchor="middle" fill="#991b1b" fontSize="12">Extinción de especies</text>
            <text x="590" y="144" textAnchor="middle" fill="#991b1b" fontSize="11">(pérdida biodiversidad)</text>
            <line x1="430" y1="130" x2="505" y2="130" stroke="#dc2626" strokeWidth="2" markerEnd="url(#cap29arr2)" />
            <rect x="505" y="186" width="170" height="44" rx="8" fill="#fee2e2" />
            <text x="590" y="208" textAnchor="middle" fill="#991b1b" fontSize="12">Desplazamiento humano</text>
            <text x="590" y="222" textAnchor="middle" fill="#991b1b" fontSize="11">(refugiados climáticos)</text>
            <line x1="430" y1="148" x2="505" y2="208" stroke="#dc2626" strokeWidth="2" markerEnd="url(#cap29arr2)" />
            <text x="112" y="18" textAnchor="middle" fill="#166534" fontSize="13" fontWeight="bold">CAUSAS</text>
            <text x="590" y="18" textAnchor="middle" fill="#991b1b" fontSize="13" fontWeight="bold">CONSECUENCIAS</text>
          </svg>
          <figcaption>Mapa conceitual: causas e consequências do cambio climático — estrutura típica dos textos jornalísticos hispânicos sobre meio ambiente.</figcaption>
        </figure>
      </section>

      {/* Seção 3: Textos Jornalísticos */}
      <section className="lesson-section">
        <span className="section-kicker">Leitura</span>
        <h2>Textos Jornalísticos Hispânicos sobre Meio Ambiente</h2>
        <p>
          O ENEM frequentemente usa textos de jornais como <em>El País</em> (Espanha), <em>El Universal</em> (México),
          <em> La Nación</em> (Argentina) e <em>El Espectador</em> (Colômbia). Esses textos têm características
          específicas de linguagem e estrutura que você precisa reconhecer para responder com rapidez e precisão.
        </p>
        <div className="lesson-highlight">
          <strong>Texto modelo — trecho de reportagem ambiental:</strong>
          <br /><br />
          <em>
            "La Amazonia pierde cada año una superficie equivalente a la de un país europeo. Según datos del
            Instituto Nacional de Pesquisas Espaciais (INPE), la deforestación en Brasil alcanzó en 2023 un
            nivel récord, con más de 11.000 kilómetros cuadrados devastados. Los expertos advierten que, de
            continuar a este ritmo, el bioma podría alcanzar un punto de no retorno antes de 2035, lo que
            tendría consecuencias catastróficas para el clima global."
          </em>
          <br /><br />
          <strong>Análise linguística:</strong>
          <ul>
            <li><em>"según datos de"</em> = segundo dados de (citação de fonte)</li>
            <li><em>"alcanzó un nivel récord"</em> = atingiu um nível recorde</li>
            <li><em>"los expertos advierten"</em> = os especialistas alertam</li>
            <li><em>"de continuar a este ritmo"</em> = se continuar nesse ritmo (condicional)</li>
            <li><em>"punto de no retorno"</em> = ponto de não retorno</li>
          </ul>
        </div>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Estrutura</th>
                <th>Função</th>
                <th>Marcadores linguísticos em espanhol</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Título / Manchete</td>
                <td>Apresentar o tema de forma impactante</td>
                <td><em>Las emisiones baten récord; Crisis hídrica en el norte</em></td>
              </tr>
              <tr>
                <td>Lead (1.º parágrafo)</td>
                <td>Responder: quem, o quê, quando, onde, como</td>
                <td><em>Según informes recientes...; De acuerdo con datos oficiales...</em></td>
              </tr>
              <tr>
                <td>Desenvolvimento</td>
                <td>Ampliar dados, citar especialistas, contextualizar</td>
                <td><em>Los expertos sostienen...; Investigadores señalan...; Cabe destacar que...</em></td>
              </tr>
              <tr>
                <td>Conclusão / Perspectiva</td>
                <td>Projeções, soluções propostas</td>
                <td><em>En caso de que...; Si bien es cierto...; No obstante...</em></td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Seção 4: Movimentos Ambientalistas */}
      <section className="lesson-section">
        <span className="section-kicker">Contexto Hispânico</span>
        <h2>Movimentos Ambientalistas da América Latina</h2>
        <p>
          Os movimentos ambientalistas hispânicos aparecem frequentemente nos textos do ENEM, especialmente
          aqueles relacionados à Amazônia, à Patagônia argentina e às florestas mexicanas. Conhecer o
          vocabulário desses movimentos é essencial para compreender a posição dos autores nos textos.
        </p>
        <div className="lesson-grid">
          <div className="lesson-card">
            <span>🌿</span>
            <h3>Amazonia</h3>
            <p>
              Movimentos indígenas e ambientalistas combatem a deforestación em Brasil, Perú, Colombia e Venezuela.
              Expressões-chave: <em>pulmón del planeta, tierra indígena, soberanía ambiental</em>.
            </p>
          </div>
          <div className="lesson-card">
            <span>🏔️</span>
            <h3>Patagonia</h3>
            <p>
              Conflitos entre projetos energéticos e preservação dos glaciares argentinos e chilenos.
              Expressões: <em>glaciares en retroceso, patrimonio natural, parques nacionales</em>.
            </p>
          </div>
          <div className="lesson-card">
            <span>🌲</span>
            <h3>México</h3>
            <p>
              Florestas de pinheiros e carvalhos ameaçadas pelo <em>cambio de uso del suelo</em>. Comunidades
              indígenas como guardiãs dos bosques: <em>guardianes del bosque, comunidades originarias</em>.
            </p>
          </div>
          <div className="lesson-card">
            <span>🐦</span>
            <h3>Ecuador e Colombia</h3>
            <p>
              Proteção de florestas tropicais e de espécies em risco. Conceito jurídico inovador:
              <em> la naturaleza como sujeto de derechos</em> (Constituição do Equador, 2008).
            </p>
          </div>
        </div>
      </section>

      {/* Seção 5: Acordo de Paris */}
      <section className="lesson-section">
        <span className="section-kicker">Documentos Oficiais</span>
        <h2>Acordo de Paris e Textos Oficiais em Espanhol</h2>
        <p>
          Textos de organismos internacionais como a ONU e a CEPAL aparecem nas provas com linguagem formal
          e técnica. Reconhecer os termos desses documentos é fundamental para questões de vocabulário em contexto.
        </p>
        <div className="lesson-highlight">
          <strong>Fragmento do Acuerdo de París (2015) — texto oficial em espanhol:</strong>
          <br /><br />
          <em>
            "Las Partes en el presente Acuerdo, en busca del objetivo de la Convención Marco de las Naciones
            Unidas sobre el Cambio Climático, reconociendo que el cambio climático representa una amenaza
            urgente y potencialmente irreversible para las sociedades humanas y el planeta y, por lo tanto,
            exige la cooperación más amplia posible de todos los países..."
          </em>
          <br /><br />
          <strong>Termos-chave do documento:</strong>
          <ul>
            <li><em>Las Partes</em> = as Partes (países signatários)</li>
            <li><em>amenaza urgente e irreversible</em> = ameaça urgente e irreversível</li>
            <li><em>exige la cooperación más amplia</em> = exige a mais ampla cooperação</li>
            <li><em>temperatura media global</em> = temperatura média global</li>
            <li><em>compromisos determinados a nivel nacional (NDC)</em> = contribuições nacionalmente determinadas</li>
          </ul>
        </div>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Organismo</th>
                <th>Nome completo em espanhol</th>
                <th>Área ambiental</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>ONU</td><td>Organización de las Naciones Unidas</td><td>Coordena Conferências do Clima (COP)</td></tr>
              <tr><td>PNUMA</td><td>Programa de las Naciones Unidas para el Medio Ambiente</td><td>Dados globais sobre ecossistemas</td></tr>
              <tr><td>CEPAL</td><td>Comisión Económica para América Latina y el Caribe</td><td>Vulnerabilidade climática da AL</td></tr>
              <tr><td>IPCC</td><td>Panel Intergubernamental sobre Cambio Climático</td><td>Relatórios científicos sobre aquecimento global</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Seção 6: Expressões de Quantidade */}
      <section className="lesson-section">
        <span className="section-kicker">Gramática Aplicada</span>
        <h2>Expressões de Quantidade e Percentagem em Textos Ambientais</h2>
        <p>
          Os textos ambientais em espanhol são repletos de dados numéricos, percentagens e comparações.
          Saber interpretar essas expressões é decisivo para questões que pedem inferência de dados e
          para não ser enganado por alternativas que distorcem as informações do texto.
        </p>
        <div className="lesson-grid">
          <div className="lesson-card">
            <span>📊</span>
            <h3>Percentagens</h3>
            <p>
              <em>un 30% de las especies; el 45 por ciento de las emisiones; casi la mitad de los bosques;
              más de un tercio de la población</em>.
            </p>
          </div>
          <div className="lesson-card">
            <span>📈</span>
            <h3>Aumento e Redução</h3>
            <p>
              <em>aumentó en un 20%; se redujo a la mitad; creció exponencialmente; disminuyó drásticamente;
              se duplicó en una década</em>.
            </p>
          </div>
          <div className="lesson-card">
            <span>🔢</span>
            <h3>Comparações</h3>
            <p>
              <em>el doble que el año anterior; tres veces más que; tanto como; similar a; superior a;
              inferior al promedio mundial</em>.
            </p>
          </div>
          <div className="lesson-card">
            <span>⏰</span>
            <h3>Projeções Temporais</h3>
            <p>
              <em>para el año 2050; en las próximas décadas; a corto/medio/largo plazo; en el transcurso de;
              antes de que finalice el siglo</em>.
            </p>
          </div>
        </div>
        <div className="math-block">
          <strong>Dica ENEM:</strong> Quando um texto em espanhol apresenta dados como <em>"el 78% de los
          glaciares ha retrocedido más de 500 metros en los últimos 50 años"</em>, a questão geralmente pede
          que você: (1) identifique o que esse dado comprova sobre a tese do autor, ou (2) relacione esse dado
          com a alternativa que resume a informação corretamente. Nunca faça cálculos — leia o que o texto
          afirma e localize a alternativa que parafraseia essa informação com fidelidade, sem exagerar nem
          minimizar.
        </div>
      </section>

      {/* Seção 7: SVG Energias Renováveis */}
      <section className="lesson-section">
        <span className="section-kicker">Sustentabilidade</span>
        <h2>Energías Renovables na América Latina</h2>
        <p>
          Textos sobre transição energética são cada vez mais comuns no ENEM. Países como Chile, México e
          Argentina aparecem frequentemente em reportagens sobre energias limpas publicadas em jornais hispânicos.
          Conhecer as fontes renováveis e seu vocabulário em espanhol é fundamental para esses textos.
        </p>
        <figure className="lesson-figure">
          <svg viewBox="0 0 700 230" width="700" height="230" aria-label="Diagrama de energias renováveis na América Latina">
            <rect x="0" y="0" width="700" height="230" rx="14" fill="#fefce8" />
            <text x="350" y="28" textAnchor="middle" fill="#92400e" fontSize="14" fontWeight="bold">
              Fuentes de Energía Renovable en América Latina
            </text>
            {/* Solar */}
            <rect x="20" y="45" width="125" height="90" rx="10" fill="#fde68a" stroke="#ca8a04" strokeWidth="2" />
            <text x="82" y="75" textAnchor="middle" fill="#92400e" fontSize="28">☀️</text>
            <text x="82" y="98" textAnchor="middle" fill="#92400e" fontSize="12" fontWeight="bold">Solar</text>
            <text x="82" y="114" textAnchor="middle" fill="#92400e" fontSize="10">Chile lidera</text>
            <text x="82" y="127" textAnchor="middle" fill="#92400e" fontSize="10">en el desierto</text>
            {/* Eólica */}
            <rect x="160" y="45" width="125" height="90" rx="10" fill="#bfdbfe" stroke="#2563eb" strokeWidth="2" />
            <text x="222" y="75" textAnchor="middle" fill="#1e3a8a" fontSize="28">💨</text>
            <text x="222" y="98" textAnchor="middle" fill="#1e3a8a" fontSize="12" fontWeight="bold">Eólica</text>
            <text x="222" y="114" textAnchor="middle" fill="#1e3a8a" fontSize="10">México y</text>
            <text x="222" y="127" textAnchor="middle" fill="#1e3a8a" fontSize="10">Argentina</text>
            {/* Hidráulica */}
            <rect x="300" y="45" width="125" height="90" rx="10" fill="#a7f3d0" stroke="#065f46" strokeWidth="2" />
            <text x="362" y="75" textAnchor="middle" fill="#065f46" fontSize="28">💧</text>
            <text x="362" y="98" textAnchor="middle" fill="#065f46" fontSize="12" fontWeight="bold">Hidroeléctrica</text>
            <text x="362" y="114" textAnchor="middle" fill="#065f46" fontSize="10">Paraguay,</text>
            <text x="362" y="127" textAnchor="middle" fill="#065f46" fontSize="10">Brasil, Venezuela</text>
            {/* Geotérmica */}
            <rect x="440" y="45" width="125" height="90" rx="10" fill="#fecaca" stroke="#dc2626" strokeWidth="2" />
            <text x="502" y="75" textAnchor="middle" fill="#991b1b" fontSize="28">🌋</text>
            <text x="502" y="98" textAnchor="middle" fill="#991b1b" fontSize="12" fontWeight="bold">Geotérmica</text>
            <text x="502" y="114" textAnchor="middle" fill="#991b1b" fontSize="10">Costa Rica,</text>
            <text x="502" y="127" textAnchor="middle" fill="#991b1b" fontSize="10">El Salvador</text>
            {/* Biomasa */}
            <rect x="580" y="45" width="105" height="90" rx="10" fill="#e9d5ff" stroke="#7c3aed" strokeWidth="2" />
            <text x="632" y="75" textAnchor="middle" fill="#5b21b6" fontSize="28">🌾</text>
            <text x="632" y="98" textAnchor="middle" fill="#5b21b6" fontSize="12" fontWeight="bold">Biomasa</text>
            <text x="632" y="114" textAnchor="middle" fill="#5b21b6" fontSize="10">Brasil</text>
            <text x="632" y="127" textAnchor="middle" fill="#5b21b6" fontSize="10">(etanol)</text>
            {/* Barra de resumo */}
            <rect x="20" y="155" width="660" height="55" rx="8" fill="#f0fdf4" stroke="#16a34a" strokeWidth="1" />
            <text x="350" y="178" textAnchor="middle" fill="#166534" fontSize="12" fontWeight="bold">
              América Latina genera ~60% de su electricidad con fuentes renovables
            </text>
            <text x="350" y="198" textAnchor="middle" fill="#4b5563" fontSize="11">
              (hidroeléctrica + solar + eólica + geotérmica + biomasa / biocombustibles)
            </text>
          </svg>
          <figcaption>Principais fontes de energias renováveis na América Latina — vocabulário essencial para textos de sustentabilidade em espanhol.</figcaption>
        </figure>
      </section>

      {/* Seção 8: Textos de Opinião */}
      <section className="lesson-section">
        <span className="section-kicker">Gêneros Textuais</span>
        <h2>Textos de Opinião sobre Sustentabilidade em Espanhol</h2>
        <p>
          O texto de opinião (<em>artículo de opinión</em> ou <em>columna de opinión</em>) é um dos gêneros
          mais cobrados no ENEM. Diferentemente da reportagem, ele apresenta a perspectiva clara de um autor
          e usa recursos argumentativos específicos que você deve saber identificar.
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Recurso argumentativo</th>
                <th>Exemplo em espanhol</th>
                <th>Função no texto</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Tese (posição do autor)</td>
                <td><em>La crisis climática es, ante todo, una crisis de justicia social.</em></td>
                <td>Define o ponto de vista que será defendido</td>
              </tr>
              <tr>
                <td>Argumento de autoridade</td>
                <td><em>Según el Nobel de Economía Stiglitz, la economía verde...</em></td>
                <td>Apoia a tese com referências especializadas</td>
              </tr>
              <tr>
                <td>Dados e estatísticas</td>
                <td><em>El 80% de los desplazados climáticos son mujeres y niños.</em></td>
                <td>Quantifica o problema para convencer o leitor</td>
              </tr>
              <tr>
                <td>Contraargumento + refutação</td>
                <td><em>Aunque algunos afirman que el crecimiento económico es incompatible con la sostenibilidad, los datos demuestran que...</em></td>
                <td>Antecipa objeções e as rebate</td>
              </tr>
              <tr>
                <td>Conclusão / Chamada à ação</td>
                <td><em>Es hora de que los gobiernos actúen con la urgencia que esta crisis exige.</em></td>
                <td>Fecha o argumento e mobiliza o leitor</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="lesson-highlight">
          <strong>Conectores de opinião mais usados em espanhol:</strong>
          <ul>
            <li><em>a mi juicio / en mi opinión</em> = na minha opinião</li>
            <li><em>cabe señalar que</em> = vale destacar que</li>
            <li><em>no cabe duda de que</em> = não há dúvida de que</li>
            <li><em>conviene recordar que</em> = convém lembrar que</li>
            <li><em>más aún</em> = além disso, ainda mais</li>
            <li><em>sin embargo / no obstante</em> = no entanto, contudo</li>
            <li><em>en definitiva / en conclusión</em> = em definitivo / em conclusão</li>
          </ul>
        </div>
      </section>

      {/* Seção 9: Manchetes e Notícias */}
      <section className="lesson-section">
        <span className="section-kicker">Imprensa Hispânica</span>
        <h2>Manchetes Ambientais de Jornais Hispânicos</h2>
        <p>
          As manchetes de jornais em espanhol têm características linguísticas próprias: verbos no presente
          histórico, omissão de artigos, uso de dois pontos para introduzir fala de fontes e brevidade máxima.
          Praticar a leitura de manchetes melhora muito a velocidade na prova.
        </p>
        <div className="lesson-grid">
          <div className="lesson-card">
            <span>📰</span>
            <h3>El País (España)</h3>
            <p>
              <em>"La ONU alerta: las emisiones de gases de efecto invernadero alcanzaron un nuevo récord en 2023"</em>
              — uso dos dois pontos para citação de fonte oficial.
            </p>
          </div>
          <div className="lesson-card">
            <span>🗞️</span>
            <h3>El Universal (México)</h3>
            <p>
              <em>"Sequía histórica en el norte de México deja sin agua a tres millones de personas"</em> —
              manchete narrativa com impacto humano quantificado.
            </p>
          </div>
          <div className="lesson-card">
            <span>📄</span>
            <h3>La Nación (Argentina)</h3>
            <p>
              <em>"Incendios en la Patagonia: más de 80.000 hectáreas consumidas por las llamas"</em> —
              dois pontos partindo do tema para o dado central.
            </p>
          </div>
          <div className="lesson-card">
            <span>📋</span>
            <h3>El Espectador (Colombia)</h3>
            <p>
              <em>"Ríos colombianos contaminados: el precio del olvido ambiental"</em> —
              manchete com expressão metafórica (<em>el precio del olvido</em>).
            </p>
          </div>
        </div>
      </section>

      {/* Seção 10: Exercícios */}
      <section className="lesson-section">
        <span className="section-kicker">Prática</span>
        <h2>Questões Comentadas</h2>

        <Exercise
          level="Básico"
          title="1. Vocabulário ambiental básico"
          statement={
            <p>
              Leia o trecho: <em>"La deforestación en la Amazonia brasileña alcanzó niveles alarmantes
              en 2023, según el informe del INPE. La pérdida de cobertura vegetal acelera el proceso
              de desertificación y reduce la biodiversidad local."</em>
              <br /><br />
              A palavra <strong>"deforestación"</strong> se refere a:
            </p>
          }
          options={[
            { letter: "a", text: "Processo de plantio de árvores em regiões degradadas." },
            { letter: "b", text: "Eliminação da cobertura vegetal de uma área florestal.", correct: true },
            { letter: "c", text: "Estudos científicos sobre espécies vegetais da Amazônia." },
            { letter: "d", text: "Técnica agrícola de cultivo em regiões tropicais úmidas." },
          ]}
          resolution={
            <p>
              <em>Deforestación</em> é cognato quase perfeito de "desmatamento" (literalmente: desflorestamento).
              O contexto confirma: o texto fala em "pérdida de cobertura vegetal" (perda de cobertura vegetal),
              que é exatamente o resultado da deforestação. A alternativa (b) é a única que define corretamente
              o processo de remoção da vegetação florestal.
            </p>
          }
        />

        <Exercise
          level="Intermediário"
          title="2. Posição do autor em texto de opinião"
          statement={
            <p>
              Leia o fragmento: <em>"La crisis climática no es un problema del futuro: es el desafío más
              urgente del presente. Mientras los gobiernos debaten, las comunidades indígenas de la Amazonia
              ya sufren sus consecuencias. A mi juicio, cualquier estrategia de desarrollo que ignore el
              cambio climático está condenada al fracaso."</em>
              <br /><br />
              Qual é a posição do autor nesse texto?
            </p>
          }
          options={[
            { letter: "a", text: "O autor acredita que as mudanças climáticas são um problema do futuro distante." },
            { letter: "b", text: "O autor defende que os governos estão tomando medidas suficientes contra o clima." },
            { letter: "c", text: "O autor considera urgente enfrentar a crise climática, criticando a inação dos governos.", correct: true },
            { letter: "d", text: "O autor sugere que as comunidades indígenas são as únicas responsáveis pelo desmatamento." },
          ]}
          resolution={
            <p>
              A expressão <em>"a mi juicio"</em> (na minha opinião) sinaliza a posição do autor. O texto afirma
              que a crise é "el desafío más urgente del presente" e critica que "mientras los gobiernos debaten"
              as comunidades já sofrem. A conclusão — "cualquier estrategia que ignore el cambio climático está
              condenada al fracaso" — reforça a urgência e a crítica à inação governamental. Resposta: (c).
            </p>
          }
        />

        <Exercise
          level="Avançado"
          title="3. Inferência de dados em texto ambiental"
          statement={
            <p>
              Leia o texto: <em>"Según la CEPAL, América Latina y el Caribe alberga el 8% de la población
              mundial, pero concentra el 14% de las emisiones globales de dióxido de carbono relacionadas
              con el cambio en el uso del suelo. Sin embargo, la región genera apenas el 6% del PIB mundial.
              Esta asimetría revela una injusticia estructural en el debate climático global."</em>
              <br /><br />
              De acordo com o texto, qual conclusão pode ser inferida?
            </p>
          }
          options={[
            { letter: "a", text: "A América Latina é a maior emissora de CO₂ no mundo, por sua extensão territorial." },
            { letter: "b", text: "Os países ricos são os que menos contribuem com emissões de carbono globais." },
            { letter: "c", text: "A América Latina contribui desproporcionalmente com emissões ligadas ao uso do solo em relação ao seu peso econômico.", correct: true },
            { letter: "d", text: "A CEPAL defende que a América Latina deve ser isenta de metas climáticas internacionais." },
          ]}
          resolution={
            <p>
              O texto apresenta uma comparação: 8% da população, 14% das emissões por uso do solo, mas apenas
              6% do PIB mundial. A palavra <em>"asimetría"</em> (assimetria) é a chave: há uma desproporção
              entre a contribuição econômica (6% do PIB) e as emissões ligadas ao uso do solo (14%). O autor
              chama isso de "injusticia estructural". A alternativa (c) captura corretamente essa inferência,
              sem extrapolar o que o texto afirma. Resposta: (c).
            </p>
          }
        />

        <Exercise
          level="Contextualizado"
          title="4. Vocabulário em contexto — Acordo de Paris"
          statement={
            <p>
              Leia o trecho oficial: <em>"Las Partes acuerdan emprender esfuerzos ambiciosos para limitar el
              aumento de la temperatura a 1,5 °C con respecto a los niveles preindustriales, reconociendo que
              ello reduciría considerablemente los riesgos y los efectos del cambio climático."</em>
              <br /><br />
              No trecho acima, a expressão <strong>"esfuerzos ambiciosos"</strong> indica que:
            </p>
          }
          options={[
            { letter: "a", text: "Os países devem tomar medidas modestas e graduais para reduzir emissões." },
            { letter: "b", text: "Os países comprometem-se com ações exigentes e significativas para cumprir a meta climática.", correct: true },
            { letter: "c", text: "As partes reconhecem que é impossível limitar o aquecimento a 1,5 °C." },
            { letter: "d", text: "Os governos devem competir entre si para atingir metas de emissão zero." },
          ]}
          resolution={
            <p>
              <em>Esfuerzos</em> = esforços; <em>ambiciosos</em> = ambiciosos (cognato perfeito). A meta de
              limitar o aquecimento a 1,5°C é um objetivo desafiador, portanto exige comprometimento real.
              A alternativa (a) contradiz o sentido, pois "ambiciosos" implica exigência, não modéstia.
              A alternativa (b) é a que melhor parafraseia essa ideia. Resposta: (b).
            </p>
          }
        />

        <Exercise
          level="Contextualizado"
          title="5. Identificação do gênero textual ambiental"
          statement={
            <p>
              Leia: <em>"¡Planta un árbol, salva el planeta! Únete a nuestro movimiento. Cada árbol
              cuenta. Cada acción importa. El futuro del planeta está en tus manos. Regístrate en
              www.verdelatino.org y sé parte del cambio."</em>
              <br /><br />
              O texto acima pertence ao seguinte gênero textual:
            </p>
          }
          options={[
            { letter: "a", text: "Reportagem jornalística sobre reflorestamento na América Latina." },
            { letter: "b", text: "Artigo científico sobre os efeitos do plantio de árvores no clima." },
            { letter: "c", text: "Propaganda / chamada para ação de uma organização ambientalista.", correct: true },
            { letter: "d", text: "Crônica literária sobre a relação entre humanos e natureza." },
          ]}
          resolution={
            <p>
              O texto apresenta características típicas de propaganda com apelo ambiental: uso do imperativo
              (<em>¡Planta!, Únete!</em>), frases curtas e impactantes, chamada para ação com URL
              (<em>Regístrate en www...</em>), e linguagem emocional (<em>el futuro está en tus manos</em>).
              Não há narrativa jornalística, dados científicos formais ou voz narrativa literária.
              É claramente uma chamada para ação de uma ONG ambiental. Resposta: (c).
            </p>
          }
        />
      </section>
    </article>
  );
}
