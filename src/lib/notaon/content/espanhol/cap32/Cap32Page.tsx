"use client";
import { ExerciseCard as Exercise } from "@/lib/notaon/components/ExerciseCard";
export default function Cap32Page() {
  return (
    <article className="lesson-landing">
      <section className="lesson-hero">
        <div>
          <span className="lesson-badge">Espanhol • Capítulo 32</span>
          <h1>América Latina: cultura, sociedade e integração regional</h1>
          <p>
            A América Latina hispânica é um mosaico de culturas, histórias e identidades que o ENEM explora
            constantemente em textos sobre integração regional, expressões artísticas, gastronomia, música e
            diversidade linguística. Conhecer os países hispanófonos e suas capitais, os organismos de integração
            latino-americana, as variações do espanhol em cada região e a riqueza cultural do mundo hispânico
            são conhecimentos que aparecem tanto nas questões de espanhol quanto nas de História e Atualidades.
            Este capítulo reúne esse panorama cultural completo para que você leia qualquer texto hispânico do
            ENEM com segurança e curiosidade.
          </p>
        </div>
      </section>

      {/* Seção 1: Países Hispanófonos e Capitais */}
      <section className="lesson-section">
        <span className="section-kicker">Geografia</span>
        <h2>Países Hispanófonos e suas Capitais</h2>
        <p>
          O espanhol é língua oficial em 21 países do mundo. Saber identificar cada país e sua capital ajuda
          a contextualizar rapidamente os textos do ENEM que fazem referência a locais específicos.
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>País</th>
                <th>Capital</th>
                <th>Região</th>
                <th>Curiosidade cultural para o ENEM</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>México</td><td>Ciudad de México</td><td>América do Norte</td><td>Maior país hispanófono; civilizações asteca e maia</td></tr>
              <tr><td>Guatemala</td><td>Ciudad de Guatemala</td><td>América Central</td><td>Maior concentração de povos maias do mundo</td></tr>
              <tr><td>Honduras</td><td>Tegucigalpa</td><td>América Central</td><td>Sítio arqueológico de Copán (Maya)</td></tr>
              <tr><td>El Salvador</td><td>San Salvador</td><td>América Central</td><td>Menor país da América Central; pupusas (prato típico)</td></tr>
              <tr><td>Nicaragua</td><td>Managua</td><td>América Central</td><td>Revolução Sandinista; lago Nicarágua</td></tr>
              <tr><td>Costa Rica</td><td>San José</td><td>América Central</td><td>Referência em ecoturismo e democracia na AL</td></tr>
              <tr><td>Panamá</td><td>Ciudad de Panamá</td><td>América Central</td><td>Canal do Panamá; ponto de conexão intercontinental</td></tr>
              <tr><td>Cuba</td><td>La Habana</td><td>Caribe</td><td>Revolução Cubana; son cubano; literatur de Alejo Carpentier</td></tr>
              <tr><td>República Dominicana</td><td>Santo Domingo</td><td>Caribe</td><td>Primeira capital europeia nas Américas; merengue</td></tr>
              <tr><td>Puerto Rico</td><td>San Juan</td><td>Caribe</td><td>Território dos EUA; reggaeton moderno; salsa</td></tr>
              <tr><td>Venezuela</td><td>Caracas</td><td>América do Sul</td><td>Maiores reservas de petróleo do mundo; crise migratória</td></tr>
              <tr><td>Colombia</td><td>Bogotá</td><td>América do Sul</td><td>García Márquez; cumbia; café; biodiversidade</td></tr>
              <tr><td>Ecuador</td><td>Quito</td><td>América do Sul</td><td>Linha do Equador; Galápagos; natureza como sujeito de direitos</td></tr>
              <tr><td>Perú</td><td>Lima</td><td>América do Sul</td><td>Machu Picchu; gastronomia (ceviche); civilização inca</td></tr>
              <tr><td>Bolivia</td><td>Sucre (constitucional) / La Paz (sede)</td><td>América do Sul</td><td>País com mais línguas oficiais (36); salar de Uyuni</td></tr>
              <tr><td>Chile</td><td>Santiago</td><td>América do Sul</td><td>Neruda e Mistral (prêmios Nobel); deserto do Atacama</td></tr>
              <tr><td>Argentina</td><td>Buenos Aires</td><td>América do Sul</td><td>Tango; Borges; voseo; maior economia hispanófona</td></tr>
              <tr><td>Uruguay</td><td>Montevideo</td><td>América do Sul</td><td>País com maior IDH da AL; mate; tango compartilhado com Argentina</td></tr>
              <tr><td>Paraguay</td><td>Asunción</td><td>América do Sul</td><td>Bilíngue oficial: espanhol e guaraní; represade Itaipu</td></tr>
              <tr><td>España</td><td>Madrid</td><td>Europa</td><td>Origem do espanhol; flamenco; Cervantes; Velázquez</td></tr>
              <tr><td>Guinea Ecuatorial</td><td>Malabo</td><td>África</td><td>Único país africano com espanhol como língua oficial</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Seção 2: Organismos de Integração */}
      <section className="lesson-section">
        <span className="section-kicker">Integração Regional</span>
        <h2>Organismos de Integração Latino-Americana</h2>
        <p>
          A integração regional latino-americana é um tema frequente em textos jornalísticos e políticos em
          espanhol. Conhecer os principais organismos, suas siglas e seus objetivos é fundamental para
          compreender as referências que aparecem nos textos do ENEM.
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Sigla</th>
                <th>Nome completo em espanhol</th>
                <th>Países</th>
                <th>Objetivo principal</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>CELAC</td>
                <td>Comunidad de Estados Latinoamericanos y Caribeños</td>
                <td>33 países da AL e Caribe</td>
                <td>Fórum político e de diálogo regional; alternativa à OEA</td>
              </tr>
              <tr>
                <td>MERCOSUR</td>
                <td>Mercado Común del Sur</td>
                <td>Argentina, Brasil, Paraguai, Uruguai (Venezuela suspensa)</td>
                <td>Integração econômica e livre circulação de bens e pessoas</td>
              </tr>
              <tr>
                <td>UNASUR</td>
                <td>Unión de Naciones Suramericanas</td>
                <td>12 países da América do Sul</td>
                <td>Integração política, social e infraestrutura da América do Sul</td>
              </tr>
              <tr>
                <td>Alianza del Pacífico</td>
                <td>Alianza del Pacífico</td>
                <td>Chile, Colombia, México, Perú</td>
                <td>Integração econômica orientada ao mercado asiático</td>
              </tr>
              <tr>
                <td>OEA</td>
                <td>Organización de los Estados Americanos</td>
                <td>35 membros (toda a América)</td>
                <td>Fórum político hemisférico; defesa da democracia</td>
              </tr>
              <tr>
                <td>ALBA</td>
                <td>Alianza Bolivariana para los Pueblos de Nuestra América</td>
                <td>Venezuela, Cuba, Bolívia e outros</td>
                <td>Integração política de orientação bolivariana / socialista</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="lesson-highlight">
          <strong>Como esses organismos aparecem nos textos do ENEM:</strong>
          <br />
          Referências como <em>"según el MERCOSUR"</em>, <em>"la CELAC convocó una cumbre"</em> ou
          <em>"la Alianza del Pacífico busca reducir aranceles"</em> são comuns em textos jornalísticos
          sobre política latino-americana. O ENEM geralmente não pede a definição da sigla, mas sim a
          compreensão do que o texto afirma sobre a organização mencionada.
        </div>
      </section>

      {/* Seção 3: SVG — Variações do Espanhol */}
      <section className="lesson-section">
        <span className="section-kicker">Linguística</span>
        <h2>Variedades do Espanhol na América Latina</h2>
        <p>
          O espanhol não é homogêneo: cada região da América Latina tem características linguísticas próprias
          — diferenças de vocabulário, pronúncia e até de gramática. O ENEM pode apresentar textos de
          diferentes variedades sem aviso prévio.
        </p>
        <figure className="lesson-figure">
          <svg viewBox="0 0 700 250" width="700" height="250" aria-label="Mapa das variedades regionais do espanhol na América Latina">
            <rect x="0" y="0" width="700" height="250" rx="14" fill="#f0f9ff" />
            <text x="350" y="28" textAnchor="middle" fill="#0369a1" fontSize="14" fontWeight="bold">
              Variedades Regionales del Español en América Latina
            </text>
            {/* Mexicano */}
            <rect x="20" y="45" width="155" height="90" rx="10" fill="#dbeafe" stroke="#2563eb" strokeWidth="2" />
            <text x="97" y="68" textAnchor="middle" fill="#1e3a8a" fontSize="12" fontWeight="bold">Español mexicano</text>
            <text x="97" y="86" textAnchor="middle" fill="#374151" fontSize="10">• "güey" (amigo)</text>
            <text x="97" y="101" textAnchor="middle" fill="#374151" fontSize="10">• "chido" (legal)</text>
            <text x="97" y="116" textAnchor="middle" fill="#374151" fontSize="10">• "ahorita" (agora)</text>
            <text x="97" y="128" textAnchor="middle" fill="#6b7280" fontSize="9" fontStyle="italic">Influência náhuatl</text>
            {/* Caribeño */}
            <rect x="190" y="45" width="155" height="90" rx="10" fill="#dcfce7" stroke="#16a34a" strokeWidth="2" />
            <text x="267" y="68" textAnchor="middle" fill="#14532d" fontSize="12" fontWeight="bold">Español caribeño</text>
            <text x="267" y="86" textAnchor="middle" fill="#374151" fontSize="10">• S final aspirado/omitido</text>
            <text x="267" y="101" textAnchor="middle" fill="#374151" fontSize="10">• "ñame" (inhame)</text>
            <text x="267" y="116" textAnchor="middle" fill="#374151" fontSize="10">• Ritmo acelerado</text>
            <text x="267" y="128" textAnchor="middle" fill="#6b7280" fontSize="9" fontStyle="italic">Cuba, R. Dominicana, Puerto Rico</text>
            {/* Andino */}
            <rect x="360" y="45" width="155" height="90" rx="10" fill="#fef9c3" stroke="#ca8a04" strokeWidth="2" />
            <text x="437" y="68" textAnchor="middle" fill="#92400e" fontSize="12" fontWeight="bold">Español andino</text>
            <text x="437" y="86" textAnchor="middle" fill="#374151" fontSize="10">• Influência quechua</text>
            <text x="437" y="101" textAnchor="middle" fill="#374151" fontSize="10">• "Oye, pues" (marcador)</text>
            <text x="437" y="116" textAnchor="middle" fill="#374151" fontSize="10">• "Nomás" (somente)</text>
            <text x="437" y="128" textAnchor="middle" fill="#6b7280" fontSize="9" fontStyle="italic">Perú, Bolivia, Ecuador</text>
            {/* Rioplatense */}
            <rect x="530" y="45" width="155" height="90" rx="10" fill="#ede9fe" stroke="#7c3aed" strokeWidth="2" />
            <text x="607" y="68" textAnchor="middle" fill="#4c1d95" fontSize="12" fontWeight="bold">Español rioplatense</text>
            <text x="607" y="86" textAnchor="middle" fill="#374151" fontSize="10">• Voseo: "vos tenés"</text>
            <text x="607" y="101" textAnchor="middle" fill="#374151" fontSize="10">• "Che" (amigo)</text>
            <text x="607" y="116" textAnchor="middle" fill="#374151" fontSize="10">• /y/ → /ʒ/ (ll/y)</text>
            <text x="607" y="128" textAnchor="middle" fill="#6b7280" fontSize="9" fontStyle="italic">Argentina, Uruguay</text>
            {/* Tabela de resumo */}
            <rect x="20" y="155" width="660" height="75" rx="8" fill="#f8fafc" stroke="#94a3b8" strokeWidth="1" />
            <text x="350" y="175" textAnchor="middle" fill="#1e293b" fontSize="12" fontWeight="bold">
              Diferenças léxicas entre variedades — mesmo objeto, palavras diferentes
            </text>
            <text x="350" y="193" textAnchor="middle" fill="#374151" fontSize="11">
              Ônibus: "autobús" (España/México) | "colectivo" (Argentina) | "camión" (México) | "micro" (Chile)
            </text>
            <text x="350" y="211" textAnchor="middle" fill="#374151" fontSize="11">
              Celular: "teléfono celular" | "móvil" (España) | "cell" (Caribe)
            </text>
            <text x="350" y="228" textAnchor="middle" fill="#374151" fontSize="11">
              Pipoca: "palomitas" (México) | "pochoclo" (Argentina) | "canchita" (Perú)
            </text>
          </svg>
          <figcaption>Variantes regionais do espanhol na América Latina — diferenças de vocabulário, pronúncia e gramática que podem aparecer nos textos do ENEM.</figcaption>
        </figure>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Fenômeno</th>
                <th>Descrição</th>
                <th>Exemplo</th>
                <th>Região</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Voseo</td>
                <td>Uso de "vos" em vez de "tú"</td>
                <td><em>Vos tenés razón; ¿qué querés vos?</em></td>
                <td>Argentina, Uruguai, América Central</td>
              </tr>
              <tr>
                <td>Seseo</td>
                <td>S, C (antes de e/i) e Z têm o mesmo som /s/</td>
                <td><em>caza e casa pronunciadas igual</em></td>
                <td>Toda a América Latina</td>
              </tr>
              <tr>
                <td>Yeísmo</td>
                <td>LL e Y com o mesmo som</td>
                <td><em>valla e vaya pronunciadas igual</em></td>
                <td>Toda a América Latina (e parte da Espanha)</td>
              </tr>
              <tr>
                <td>Aspiraçãodo /s/ final</td>
                <td>/s/ no final de sílaba vira /h/ ou desaparece</td>
                <td><em>los niños → "loh niñoh"</em></td>
                <td>Caribe, sul da Espanha</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Seção 4: Cultura Popular Hispano-Americana */}
      <section className="lesson-section">
        <span className="section-kicker">Cultura</span>
        <h2>Cultura Popular Hispano-Americana</h2>
        <p>
          A música, a dança e as artes populares da América Latina hispânica são temas que aparecem tanto
          em textos do ENEM quanto no contexto geral da disciplina. Textos sobre cultura frequentemente
          exploram a identidade, a resistência e a exportação dessas expressões para o mundo.
        </p>
        <div className="lesson-grid">
          <div className="lesson-card">
            <span>💃</span>
            <h3>Tango</h3>
            <p>
              Originário de Buenos Aires e Montevidéu (fins do séc. XIX). Patrimônio Cultural Imaterial da
              UNESCO. Vocabulário: <em>bandoneón, milonga, arrabal, lunfardo</em> (gíria portenha).
            </p>
          </div>
          <div className="lesson-card">
            <span>🥁</span>
            <h3>Salsa e Cumbia</h3>
            <p>
              Salsa: fusão caribenha, associada a Cuba, Porto Rico e Nova York.
              Cumbia: origem colombiana, hoje em toda a AL. <em>Ritmo sincopado, percusión</em>.
            </p>
          </div>
          <div className="lesson-card">
            <span>🎵</span>
            <h3>Reggaeton e Urbano Latino</h3>
            <p>
              Origem em Porto Rico, anos 1990. Hoje é o gênero musical mais ouvido em espanhol no mundo.
              Artistas: Bad Bunny, J Balvin, Daddy Yankee. <em>Perreo, dembow</em> (ritmo).
            </p>
          </div>
          <div className="lesson-card">
            <span>🎭</span>
            <h3>Flamenco e Mariachi</h3>
            <p>
              Flamenco: expressão andaluza (Espanha), patrimônio UNESCO — <em>cante, baile, toque</em>.
              Mariachi: conjunto instrumental mexicano de Jalisco, también patrimônio UNESCO.
            </p>
          </div>
        </div>
      </section>

      {/* Seção 5: Gastronomia Hispânica */}
      <section className="lesson-section">
        <span className="section-kicker">Gastronomia</span>
        <h2>Gastronomia Hispânica e seu Vocabulário</h2>
        <p>
          A gastronomia é frequentemente usada como metáfora para a identidade cultural em textos do ENEM.
          Além disso, textos sobre turismo, economia e identidade frequentemente fazem referência a pratos
          típicos que o candidato deve saber reconhecer.
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Prato / Produto</th>
                <th>País de origem</th>
                <th>Descrição em espanhol</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>Ceviche</td><td>Perú</td><td><em>Pescado crudo marinado en limón con ají y cebolla</em></td></tr>
              <tr><td>Tacos</td><td>México</td><td><em>Tortilla de maíz rellena de carne, frijoles u otros ingredientes</em></td></tr>
              <tr><td>Asado / Parrilla</td><td>Argentina / Uruguay</td><td><em>Carne asada a las brasas; ritual social y cultural</em></td></tr>
              <tr><td>Arepas</td><td>Venezuela / Colombia</td><td><em>Pan de maíz cocido, asado o frito; base de la alimentación</em></td></tr>
              <tr><td>Mate</td><td>Argentina / Uruguay / Paraguay</td><td><em>Infusión de yerba mate; símbolo de identidad rioplatense</em></td></tr>
              <tr><td>Empanadas</td><td>Argentina / Chile / Colombia</td><td><em>Masa rellena horneada o frita; varía por región</em></td></tr>
              <tr><td>Tamales</td><td>México / América Central</td><td><em>Masa de maíz con relleno, envuelta en hoja de maíz o plátano</em></td></tr>
              <tr><td>Pupusas</td><td>El Salvador</td><td><em>Tortilla gruesa de maíz rellena; plato nacional</em></td></tr>
              <tr><td>Paella</td><td>España</td><td><em>Arroz con mariscos, pollo y azafrán; originaria de Valencia</em></td></tr>
              <tr><td>Churros</td><td>España / América Latina</td><td><em>Masa frita en forma alargada, con chocolate para mojar</em></td></tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Seção 6: SVG — Literatura Latinoamericana */}
      <section className="lesson-section">
        <span className="section-kicker">Literatura</span>
        <h2>Literatura e Arte Latinoamericana na Cena Global</h2>
        <p>
          A literatura latinoamericana em espanhol é uma das mais reconhecidas mundialmente. O ENEM frequentemente
          usa fragmentos de autores canônicos ou referências a movimentos literários que todo candidato deve conhecer.
        </p>
        <figure className="lesson-figure">
          <svg viewBox="0 0 700 240" width="700" height="240" aria-label="Linha do tempo da literatura latinoamericana em espanhol">
            <rect x="0" y="0" width="700" height="240" rx="14" fill="#fef3c7" />
            <text x="350" y="28" textAnchor="middle" fill="#92400e" fontSize="14" fontWeight="bold">
              Literatura Latinoamericana en Español — Hitos Principales
            </text>
            {/* Linha do tempo */}
            <line x1="40" y1="120" x2="660" y2="120" stroke="#b45309" strokeWidth="3" />
            {/* Modernismo */}
            <circle cx="80" cy="120" r="10" fill="#d97706" />
            <text x="80" y="100" textAnchor="middle" fill="#92400e" fontSize="10" fontWeight="bold">1888</text>
            <text x="80" y="148" textAnchor="middle" fill="#374151" fontSize="9">Modernismo</text>
            <text x="80" y="160" textAnchor="middle" fill="#374151" fontSize="9">Rubén Darío</text>
            {/* Vanguardismo */}
            <circle cx="200" cy="120" r="10" fill="#d97706" />
            <text x="200" y="100" textAnchor="middle" fill="#92400e" fontSize="10" fontWeight="bold">1920s</text>
            <text x="200" y="148" textAnchor="middle" fill="#374151" fontSize="9">Vanguardias</text>
            <text x="200" y="160" textAnchor="middle" fill="#374151" fontSize="9">Neruda, Huidobro</text>
            {/* Boom */}
            <circle cx="350" cy="120" r="14" fill="#b45309" />
            <text x="350" y="100" textAnchor="middle" fill="#92400e" fontSize="10" fontWeight="bold">1960-70s</text>
            <text x="350" y="148" textAnchor="middle" fill="#7c2d12" fontSize="10" fontWeight="bold">EL BOOM</text>
            <text x="350" y="162" textAnchor="middle" fill="#374151" fontSize="9">García Márquez,</text>
            <text x="350" y="174" textAnchor="middle" fill="#374151" fontSize="9">Vargas Llosa, Cortázar,</text>
            <text x="350" y="186" textAnchor="middle" fill="#374151" fontSize="9">Carlos Fuentes</text>
            {/* Posboom */}
            <circle cx="490" cy="120" r="10" fill="#d97706" />
            <text x="490" y="100" textAnchor="middle" fill="#92400e" fontSize="10" fontWeight="bold">1980s</text>
            <text x="490" y="148" textAnchor="middle" fill="#374151" fontSize="9">Posboom</text>
            <text x="490" y="160" textAnchor="middle" fill="#374151" fontSize="9">Isabel Allende</text>
            {/* Contemporáneo */}
            <circle cx="620" cy="120" r="10" fill="#d97706" />
            <text x="620" y="100" textAnchor="middle" fill="#92400e" fontSize="10" fontWeight="bold">2000+</text>
            <text x="620" y="148" textAnchor="middle" fill="#374151" fontSize="9">Contemporáneo</text>
            <text x="620" y="160" textAnchor="middle" fill="#374151" fontSize="9">Bolaño, Neuman</text>
            {/* Prêmios Nobel */}
            <rect x="20" y="200" width="660" height="30" rx="6" fill="#fde68a" stroke="#b45309" strokeWidth="1" />
            <text x="350" y="221" textAnchor="middle" fill="#92400e" fontSize="11" fontWeight="bold">
              Prêmios Nobel de Literatura em espanhol: Mistral (1945), Asturias (1967), Neruda (1971), García Márquez (1982), Vargas Llosa (2010)
            </text>
          </svg>
          <figcaption>Linha do tempo da literatura latinoamericana — o Boom dos anos 1960-70 é o período mais cobrado no ENEM.</figcaption>
        </figure>
        <div className="lesson-grid">
          <div className="lesson-card">
            <span>📚</span>
            <h3>García Márquez</h3>
            <p>
              Colombiano; Nobel de Literatura 1982. <em>Cien años de soledad</em> é o romance mais
              emblemático do Realismo Mágico (<em>realismo mágico</em>). Cidade fictícia: Macondo.
            </p>
          </div>
          <div className="lesson-card">
            <span>✍️</span>
            <h3>Neruda e Mistral</h3>
            <p>
              Poetas chilenos e Nobéis. Neruda: <em>Veinte poemas de amor y una canción desesperada</em>.
              Gabriela Mistral: 1.ª escritora latina a ganhar o Nobel (1945).
            </p>
          </div>
          <div className="lesson-card">
            <span>🎨</span>
            <h3>Frida Kahlo</h3>
            <p>
              Pintora mexicana. Obras autobiográficas, surrealistas e politicamente engajadas.
              Tornou-se ícone do feminismo e da identidade mexicana: <em>lo mexicano, identidad femenina</em>.
            </p>
          </div>
          <div className="lesson-card">
            <span>🏛️</span>
            <h3>Borges</h3>
            <p>
              Argentino. Mestre do conto fantástico. Obras: <em>Ficciones, El Aleph</em>. Conceitos:
              <em> laberinto, biblioteca infinita, tiempo circular</em>. Nunca ganhou o Nobel, mas é universal.
            </p>
          </div>
        </div>
      </section>

      {/* Seção 7: Expressões Idiomáticas por País */}
      <section className="lesson-section">
        <span className="section-kicker">Expressões Regionais</span>
        <h2>Expressões Idiomáticas Variadas por País</h2>
        <p>
          As expressões idiomáticas (<em>modismos</em>) são características marcantes de cada variedade do
          espanhol. O ENEM pode apresentar textos com essas expressões pedindo que o candidato as interprete
          pelo contexto, sem tradução.
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Expressão</th>
                <th>País / Região</th>
                <th>Significado</th>
              </tr>
            </thead>
            <tbody>
              <tr><td><em>Órale</em></td><td>México</td><td>Muito bem! / Vamos! / De acordo!</td></tr>
              <tr><td><em>Che, ¿qué hacés?</em></td><td>Argentina</td><td>Ei, o que você está fazendo?</td></tr>
              <tr><td><em>Bacán / Bacano</em></td><td>Colombia / Perú</td><td>Legal, ótimo, massa</td></tr>
              <tr><td><em>Chévere</em></td><td>Venezuela / Colombia / Caribe</td><td>Ótimo, incrível, legal</td></tr>
              <tr><td><em>Mande usted</em></td><td>México</td><td>Como disse? / A suas ordens</td></tr>
              <tr><td><em>Dale</em></td><td>Argentina / Uruguai</td><td>Tudo bem! / Claro! / Pode ser!</td></tr>
              <tr><td><em>Tío / Tía</em></td><td>España</td><td>Cara / Mano (gíria para amigo)</td></tr>
              <tr><td><em>Pura vida</em></td><td>Costa Rica</td><td>Tudo ótimo! / Que vida boa! (saudação e resposta)</td></tr>
              <tr><td><em>Ahorita</em></td><td>México / América Central</td><td>Agora (mas pode significar "daqui a pouco")</td></tr>
              <tr><td><em>Cuate</em></td><td>México</td><td>Amigo íntimo, parceiro</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Seção 8: Brasil e América Hispânica */}
      <section className="lesson-section">
        <span className="section-kicker">Relações Regionais</span>
        <h2>Brasil e a América Hispânica — Relações Históricas e Culturais</h2>
        <p>
          O Brasil é o único país de língua portuguesa na América do Sul, mas está imerso em contexto
          hispânico. O ENEM frequentemente explora essa relação de proximidade e diferença, tanto em
          questões de espanhol quanto de história e atualidades.
        </p>
        <div className="lesson-highlight">
          <strong>Pontos de contato entre Brasil e América hispânica:</strong>
          <ul>
            <li><strong>Tratado de Tordesilhas (1494):</strong> divisão inicial entre línguas e colonizações na América</li>
            <li><strong>MERCOSUL:</strong> integração econômica Brasil-Argentina-Paraguai-Uruguai; espanhol e português como línguas oficiais</li>
            <li><strong>Fronteiras:</strong> Brasil faz fronteira com 10 dos 12 países da América do Sul (todos hispanófonos menos Guiana e Suriname)</li>
            <li><strong>Tríplice Fronteira:</strong> Brasil, Argentina, Paraguai — região de intenso intercâmbio cultural e comercial</li>
            <li><strong>Amazônia transfronteiriça:</strong> Brasil, Peru, Colombia, Venezuela, Ecuador — cooperação ambiental em espanhol e português</li>
            <li><strong>Portuñol:</strong> língua de contato nas fronteiras, misturando português e espanhol naturalmente</li>
          </ul>
        </div>
        <div className="math-block">
          <strong>Dica ENEM — Textos sobre América Latina:</strong> O ENEM muitas vezes usa textos de
          jornais argentinos, colombianos ou mexicanos para abordar temas que também são relevantes para
          o Brasil — como desigualdade, meio ambiente ou democracia. Ao ler um texto hispânico que critica
          situações de países vizinhos, pense também no contexto brasileiro — isso ajuda a compreender
          a intenção do texto e evitar erros de interpretação.
        </div>
      </section>

      {/* Seção 9: Exercícios */}
      <section className="lesson-section">
        <span className="section-kicker">Prática</span>
        <h2>Questões Comentadas</h2>

        <Exercise
          level="Básico"
          title="1. Países hispanófonos — capital"
          statement={
            <p>
              Leia: <em>"La cumbre del MERCOSUR se realizará en la capital argentina, donde se debatirá
              la incorporación de nuevos miembros al bloque regional."</em>
              <br /><br />
              A "capital argentina" mencionada no texto é:
            </p>
          }
          options={[
            { letter: "a", text: "Santiago" },
            { letter: "b", text: "Montevideo" },
            { letter: "c", text: "Buenos Aires", correct: true },
            { letter: "d", text: "Lima" },
          ]}
          resolution={
            <p>
              Buenos Aires é a capital da Argentina. Santiago é a capital do Chile; Montevidéu, do Uruguai;
              Lima, do Peru. A identificação de capitais é conhecimento geográfico básico para contextualizar
              textos sobre política latino-americana. Resposta: (c).
            </p>
          }
        />

        <Exercise
          level="Intermediário"
          title="2. Variante regional do espanhol"
          statement={
            <p>
              Leia: <em>"—Che, ¿vos tenés el libro de Borges? —Dale, lo tengo. Te lo presto ahorita."</em>
              <br /><br />
              As características linguísticas desse diálogo indicam que o texto pertence à variedade:
            </p>
          }
          options={[
            { letter: "a", text: "Espanhol mexicano, com uso de 'ahorita' e gírias locais." },
            { letter: "b", text: "Espanhol caribenho, com influência africana e ritmo acelerado." },
            { letter: "c", text: "Espanhol rioplatense (argentino/uruguaio), com voseo e expressões características.", correct: true },
            { letter: "d", text: "Espanhol andino, com influência do quechua na estrutura frasal." },
          ]}
          resolution={
            <p>
              O texto apresenta três marcas do espanhol rioplatense: (1) <em>Che</em> — marcador discursivo
              típico da Argentina e Uruguai; (2) <em>vos tenés</em> — voseo com conjugação própria
              (<em>tenés</em> em vez de <em>tienes</em>); (3) <em>Dale</em> — expressão de concordância
              muito usada na Argentina. O nome "Borges" (escritor argentino) também é um pista contextual.
              Resposta: (c).
            </p>
          }
        />

        <Exercise
          level="Avançado"
          title="3. Literatura latinoamericana — Realismo Mágico"
          statement={
            <p>
              Leia: <em>"En Macondo, pueblo fundado por José Arcadio Buendía, la realidad y lo maravilloso
              convivían sin asombro. Los muertos regresaban para despedirse, los gitanos traían hielo como
              si fuera un milagro y el tiempo parecía girar sobre sí mismo sin avanzar."</em>
              <br /><br />
              O trecho acima exemplifica o movimento literário conhecido como:
            </p>
          }
          options={[
            { letter: "a", text: "Modernismo hispanoamericano, com uso de linguagem ornamental e simbolismo." },
            { letter: "b", text: "Realismo mágico, em que eventos sobrenaturais são narrados como parte natural da realidade.", correct: true },
            { letter: "c", text: "Naturalismo social, que retrata as condições miseráveis da vida rural na Colômbia." },
            { letter: "d", text: "Vanguardismo surreal, que propõe a ruptura total com a narrativa convencional." },
          ]}
          resolution={
            <p>
              O trecho descreve eventos sobrenaturais — mortos que voltam, o tempo circular, o gelo como
              milagre — narrados com total naturalidade (<em>"sin asombro"</em>). Isso é a marca definitória
              do realismo mágico: o sobrenatural integrado ao cotidiano sem espanto. Macondo e os Buendía são
              de <em>Cien años de soledad</em>, de García Márquez — o romance paradigmático do gênero.
              Resposta: (b).
            </p>
          }
        />

        <Exercise
          level="Contextualizado"
          title="4. Organismos de integração regional"
          statement={
            <p>
              Leia: <em>"Cuatro países del Pacífico sudamericano firmaron un acuerdo para eliminar barreras
              arancelarias entre sí y facilitar el comercio con Asia. El bloque, conocido por su orientación
              liberal y su apuesta por la apertura de mercados, se consolidó como alternativa a otros modelos
              de integración regional más centrados en la cooperación política."</em>
              <br /><br />
              O bloco regional descrito no texto corresponde a:
            </p>
          }
          options={[
            { letter: "a", text: "MERCOSUR, que integra os países do Cone Sul com foco no comércio bilateral." },
            { letter: "b", text: "ALBA, aliança bolivariana de orientação socialista entre países caribenhos e andinos." },
            { letter: "c", text: "Alianza del Pacífico, formada por Chile, Colombia, México e Peru com foco no comércio com a Ásia.", correct: true },
            { letter: "d", text: "CELAC, fórum de diálogo que reúne todos os países da América Latina e Caribe." },
          ]}
          resolution={
            <p>
              As pistas são: "cuatro países del Pacífico sudamericano" (Chile, Colombia, Peru + México),
              "orientación liberal", "apertura de mercados" e foco no comércio com a Ásia. Isso descreve
              com precisão a Alianza del Pacífico, fundada em 2011 como bloco de integração orientado ao
              livre comércio e à projeção no Pacífico. Resposta: (c).
            </p>
          }
        />

        <Exercise
          level="Contextualizado"
          title="5. Cultura popular — tango e identidade"
          statement={
            <p>
              Leia: <em>"El tango no es solo música: es una forma de entender el mundo desde los suburbios
              de Buenos Aires. Nació entre inmigrantes europeos y africanos a finales del siglo XIX, fue
              perseguido por la élite porteña y terminó conquistando los salones de París. Hoy, declarado
              Patrimonio Cultural Inmaterial de la Humanidad por la UNESCO, sigue siendo el lenguaje del
              alma rioplatense."</em>
              <br /><br />
              O texto apresenta o tango como:
            </p>
          }
          options={[
            { letter: "a", text: "Uma dança europeia que foi exportada para a Argentina no século XIX." },
            { letter: "b", text: "Uma expressão cultural de origem elitista que se popularizou nas periferias de Buenos Aires." },
            { letter: "c", text: "Uma manifestação cultural de raízes populares e imigrantes que se tornou símbolo da identidade rioplatense.", correct: true },
            { letter: "d", text: "Um gênero musical criado em Paris que foi adaptado pelos argentinos com elementos africanos." },
          ]}
          resolution={
            <p>
              O texto descreve a origem popular e periférica do tango: nasceu nos subúrbios (<em>suburbios</em>)
              entre imigrantes, foi rejeitado pela elite (<em>perseguido por la élite porteña</em>) e depois
              reconhecido mundialmente. A expressão <em>"lenguaje del alma rioplatense"</em> (linguagem da
              alma do Rio da Prata) confirma que o texto o apresenta como símbolo de identidade cultural.
              Resposta: (c).
            </p>
          }
        />
      </section>
    </article>
  );
}
