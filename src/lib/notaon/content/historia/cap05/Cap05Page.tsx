"use client";
import { ExerciseCard as Exercise } from "@/lib/notaon/components/ExerciseCard";
export default function Cap05Page() {
  return (
    <article className="lesson-landing">
      <section className="lesson-hero">
        <div>
          <span className="lesson-badge">História • Capítulo 5</span>
          <h1>Egito Antigo</h1>
          <p>
            Às margens do Nilo, uma das civilizações mais duradouras e influentes da história humana
            floresceu por mais de três milênios. O Egito Antigo ergueu pirâmides que desafiam a engenharia
            moderna, desenvolveu um sistema de escrita que registrou mitos, leis e ciência, e construiu
            um Estado teocrático cujo faraó era simultaneamente rei, deus e mediador cósmico entre os
            homens e o universo. Compreender o Egito é compreender como sociedades complexas se organizam
            a partir do ambiente, da religião e do poder — temas centrais nas questões de Ciências Humanas
            do ENEM.
          </p>
        </div>
      </section>

      {/* ── Seção 1 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Geografia e Ambiente</span>
        <h2>1. O Nilo como Elemento Civilizatório Central</h2>
        <p>
          Heródoto, historiador grego do século V a.C., definiu o Egito como "um presente do Nilo" —
          síntese perfeita de como o rio moldou absolutamente cada dimensão da vida egípcia. O Nilo é o
          único grande rio do mundo que corre do sul para o norte, nascendo nos lagos e planaltos da
          África Oriental e desaguando no Mar Mediterrâneo por um vasto delta triangular. Em ambas as
          margens, uma estreita faixa verde de até 20 km de largura contrastava vividamente com o deserto
          que se estendia para além, chamado pelos egípcios de <em>deshret</em> (terra vermelha),
          enquanto o vale fértil era denominado <em>kemet</em> (terra negra).
        </p>
        <p>
          A chave da fertilidade egípcia eram as cheias periódicas. Entre julho e outubro, o Nilo
          transbordava regularmente — fenômeno chamado <em>akhet</em> pelos egípcios — depositando
          sobre os campos uma camada de silt (limo) rico em minerais trazidos da Etiópia pelo Rio Azul
          e dos planaltos equatoriais pelo Rio Branco. Esse sedimento cinza-escuro transformava solos
          que seriam áridos em campos de alta produtividade agrícola. Após a retirada das águas
          (novembro), iniciava-se o plantio (<em>peret</em>), seguido pela colheita (<em>shemu</em>)
          entre março e junho. Esse ciclo de três estações estruturou o calendário agrícola egípcio —
          o primeiro calendário solar da história, com 365 dias divididos em 12 meses de 30 dias mais
          5 dias epagômenos (adicionais) — e foi o fundamento sobre o qual a civilização se organizou.
        </p>
        <div className="lesson-highlight">
          <h3>O Calendário Egípcio</h3>
          <p>
            O calendário solar egípcio de 365 dias, desenvolvido por volta de 4000 a.C., foi adotado
            pelos romanos no calendário Juliano (46 a.C.) e é ancestral direto do nosso calendário
            gregoriano. A precisão astronômica dos egípcios foi possível pela observação da estrela Sírius
            (Sopdet), cuja reaparição no horizonte leste coincidia com o início das cheias do Nilo.
          </p>
        </div>

        {/* SVG 1 — Mapa esquemático do Nilo */}
        <div className="lesson-figure">
          <svg viewBox="0 0 420 560" width="420" height="560" aria-label="Mapa esquemático do Egito Antigo">
            {/* Fundo deserto */}
            <rect x="0" y="0" width="420" height="560" fill="#f5e6c8" />
            {/* Mar Mediterrâneo */}
            <rect x="0" y="0" width="420" height="60" fill="#a8d8ea" />
            <text x="210" y="35" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#1a5276">Mar Mediterrâneo</text>
            {/* Delta */}
            <polygon points="160,60 260,60 210,130" fill="#6dbe6d" />
            <text x="210" y="100" textAnchor="middle" fontSize="11" fill="#1a5226">Delta</text>
            {/* Nilo — canal verde */}
            <rect x="195" y="130" width="30" height="370" fill="#5ca85c" />
            {/* Baixo Egito label */}
            <rect x="70" y="65" width="110" height="24" rx="4" fill="#d5f5e3" stroke="#27ae60" strokeWidth="1" />
            <text x="125" y="81" textAnchor="middle" fontSize="12" fill="#1e8449">Baixo Egito</text>
            {/* Alto Egito label */}
            <rect x="240" y="300" width="100" height="24" rx="4" fill="#fdebd0" stroke="#e67e22" strokeWidth="1" />
            <text x="290" y="316" textAnchor="middle" fontSize="12" fill="#a04000">Alto Egito</text>
            {/* Gizé */}
            <circle cx="200" cy="140" r="7" fill="#c0392b" />
            <text x="213" y="137" fontSize="11" fill="#922b21">Gizé (Pirâmides)</text>
            {/* Cairo */}
            <circle cx="200" cy="125" r="5" fill="#1a5276" />
            <text x="210" y="122" fontSize="10" fill="#1a5276">Cairo</text>
            {/* Luxor / Tebas */}
            <circle cx="210" cy="380" r="7" fill="#8e44ad" />
            <text x="222" y="383" fontSize="11" fill="#6c3483">Luxor / Tebas</text>
            {/* Abu Simbel */}
            <circle cx="210" cy="490" r="6" fill="#d35400" />
            <text x="222" y="493" fontSize="10" fill="#d35400">Abu Simbel</text>
            {/* Mar Vermelho */}
            <rect x="330" y="60" width="90" height="440" fill="#aed6f1" rx="8" />
            <text x="375" y="280" textAnchor="middle" fontSize="11" fill="#1a5276" transform="rotate(90,375,280)">Mar Vermelho</text>
            {/* Deserto Ocidental */}
            <text x="60" y="280" textAnchor="middle" fontSize="11" fill="#935116" transform="rotate(-90,60,280)">Deserto Ocidental</text>
            {/* Deserto Oriental */}
            <text x="310" y="280" textAnchor="middle" fontSize="11" fill="#935116" transform="rotate(90,310,280)">Deserto Oriental</text>
            {/* Seta Norte */}
            <line x1="30" y1="30" x2="30" y2="10" stroke="#333" strokeWidth="2" markerEnd="url(#arrow)" />
            <text x="30" y="48" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#333">N</text>
            {/* Título */}
            <text x="210" y="545" textAnchor="middle" fontSize="12" fill="#555" fontStyle="italic">Egito Antigo — Alto e Baixo Egito</text>
          </svg>
          <p className="lesson-figure-caption">Mapa esquemático do Egito Antigo: o Nilo dividindo o deserto e ligando o Delta ao Sul.</p>
        </div>
      </section>

      {/* ── Seção 2 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Periodização</span>
        <h2>2. As Grandes Fases da História Egípcia</h2>
        <p>
          A história do Egito Antigo é convencionalmente dividida em períodos baseados na estabilidade
          política e no controle centralizado do Estado. A sistematização foi feita pelo sacerdote egípcio
          Manetão (séc. III a.C.), que organizou os faraós em 30 dinastias — classificação que os
          historiadores modernos ainda utilizam, agrupada em períodos maiores.
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Período</th>
                <th>Datas Aprox.</th>
                <th>Características</th>
                <th>Faraós Notáveis</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Período Pré-dinástico</td>
                <td>5000–3100 a.C.</td>
                <td>Unificação progressiva; surgimento da escrita</td>
                <td>Narmer / Menes</td>
              </tr>
              <tr>
                <td>Período Arcaico (Dinas. I–II)</td>
                <td>3100–2686 a.C.</td>
                <td>Consolidação do Estado unificado</td>
                <td>Hor-Aha</td>
              </tr>
              <tr>
                <td>Antigo Reino (Dinas. III–VI)</td>
                <td>2686–2181 a.C.</td>
                <td>Era das pirâmides; centralização máxima</td>
                <td>Djoser, Quéops, Quéfren, Miquerinos</td>
              </tr>
              <tr>
                <td>1.º Período Intermediário</td>
                <td>2181–2055 a.C.</td>
                <td>Fragmentação política; fomes; poder regional</td>
                <td>—</td>
              </tr>
              <tr>
                <td>Médio Reino (Dinas. XI–XII)</td>
                <td>2055–1650 a.C.</td>
                <td>Reunificação; expansão comercial; literatura</td>
                <td>Mentuhotep II, Amenemhat I</td>
              </tr>
              <tr>
                <td>2.º Período Intermediário</td>
                <td>1650–1550 a.C.</td>
                <td>Invasão dos Hicsos (carro de guerra)</td>
                <td>Hicsos (dinastia XV–XVI)</td>
              </tr>
              <tr>
                <td>Novo Reino (Dinas. XVIII–XX)</td>
                <td>1550–1070 a.C.</td>
                <td>Apogeu imperial; grandes templos; Ramsés II</td>
                <td>Tutmés III, Akhenaton, Tutancâmon, Ramsés II</td>
              </tr>
              <tr>
                <td>3.º Período Intermediário</td>
                <td>1070–664 a.C.</td>
                <td>Divisão; faraós líbios e núbios</td>
                <td>Sheshonq I, Pianky</td>
              </tr>
              <tr>
                <td>Período Tardio (Dinas. XXVI–XXX)</td>
                <td>664–332 a.C.</td>
                <td>Renascimento saíta; conquistas persas</td>
                <td>Psamético I, Nectanebo II</td>
              </tr>
              <tr>
                <td>Período Ptolomaico</td>
                <td>332–30 a.C.</td>
                <td>Helenização; Alexandria; Cleópatra VII</td>
                <td>Ptolomeu I–XV, Cleópatra VII</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          O Antigo Reino (2686–2181 a.C.) representa o auge da centralização faraônica e a época das
          grandes pirâmides de Gizé. O Médio Reino (2055–1650 a.C.) é considerado o período clássico
          da literatura egípcia, com obras como o "Conto de Sinuhe". O Novo Reino (1550–1070 a.C.) é
          a fase imperial por excelência — o período em que o Egito projetou seu poder até a Síria e
          a Núbia e construiu os templos colossais de Karnak e Luxor. O Período Tardio (664–332 a.C.)
          é marcado por tentativas de reavivamento cultural e pela conquista persa (525 a.C.), antes
          que Alexandre Magno pusesse fim à dominação estrangeira em 332 a.C.
        </p>
      </section>

      {/* ── Seção 3 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Política e Poder</span>
        <h2>3. Estado Teocrático: o Faraó como Deus-Rei</h2>
        <p>
          No coração da civilização egípcia estava uma concepção de poder absolutamente singular na
          história antiga: o faraó não era apenas um rei ungido pelos deuses, mas ele próprio uma
          divindade encarnada. Em vida, o faraó era considerado a manifestação terrestre de Hórus,
          o deus falcão filho de Osíris e Ísis; em morte, ele se tornava Osíris, o deus dos mortos e
          senhor do submundo. Essa identidade divina conferia ao faraó legitimidade inquestionável:
          sua palavra era lei, sua pessoa sagrada, e sua vontade expressão da vontade dos deuses.
        </p>
        <p>
          O título oficial do faraó era "Per-aa" (Grande Casa), que os hebreus transliteraram como
          "Faraó". Mas o protocolo real era muito mais elaborado: o faraó carregava cinco títulos
          distintos, incluindo o nome de Hórus (identidade divina), o "Senhor das Duas Terras"
          (soberania sobre o Alto e o Baixo Egito) e o "Filho de Rá" (relação com o deus solar).
          Esse sistema de títulos refletia a natureza multifacetada do poder faraônico — simultaneamente
          político, religioso e cósmico. A manutenção da <em>Ma'at</em> (ordem, justiça, equilíbrio
          cósmico) era a obrigação suprema do faraó: enquanto ele reinasse com sabedoria, o Nilo
          encheria, as colheitas seriam fartas e os inimigos seriam derrotados.
        </p>
        <div className="lesson-highlight">
          <h3>A Dupla Coroa</h3>
          <p>
            O faraó usava a Coroa Branca (<em>Hedjet</em>) quando governava o Alto Egito e a Coroa
            Vermelha (<em>Deshret</em>) no Baixo Egito. A unificação dos dois reinos por Narmer/Menes
            (c. 3100 a.C.) foi simbolizada pela Dupla Coroa (<em>Pschent</em>), que combinava as duas
            — símbolo do poder unificado sobre todo o Egito que perdurou por três mil anos.
          </p>
        </div>
      </section>

      {/* ── Seção 4 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Sociedade</span>
        <h2>4. Organização Social Egípcia</h2>
        <p>
          A sociedade egípcia era rigidamente hierarquizada e intimamente ligada ao aparato religioso
          e burocrático do Estado. No topo absoluto estava o faraó, ser divino. Logo abaixo, o alto
          sacerdócio controlava os templos e suas imensas riquezas fundiárias — especialmente os
          sacerdotes de Amon, em Tebas, cuja influência rivalizada com a do próprio faraó no Novo
          Reino. Os escribas formavam a espinha dorsal da burocracia: capazes de ler e escrever
          hieróglifos, gerenciavam os celeiros, os registros de terra, os projetos de construção
          e a correspondência diplomática.
        </p>

        {/* SVG 2 — Pirâmide social */}
        <div className="lesson-figure">
          <svg viewBox="0 0 480 340" width="480" height="340" aria-label="Pirâmide social egípcia">
            <rect x="0" y="0" width="480" height="340" fill="#fdf6e3" rx="8" />
            {/* Nível 1 — Faraó */}
            <polygon points="240,10 190,60 290,60" fill="#f1c40f" stroke="#b7950b" strokeWidth="1.5" />
            <text x="240" y="48" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#6e2f00">Faraó</text>
            {/* Nível 2 — Sacerdotes e escribas */}
            <polygon points="240,60 160,110 320,110" fill="#f39c12" stroke="#b7770d" strokeWidth="1.5" />
            <text x="240" y="93" textAnchor="middle" fontSize="11" fill="#4a1000">Sacerdotes e Escribas</text>
            {/* Nível 3 — Funcionários e guerreiros */}
            <polygon points="240,110 130,165 350,165" fill="#e67e22" stroke="#a04000" strokeWidth="1.5" />
            <text x="240" y="147" textAnchor="middle" fontSize="11" fill="#fff">Funcionários e Guerreiros</text>
            {/* Nível 4 — Artesãos e camponeses */}
            <polygon points="240,165 90,230 390,230" fill="#ca6f1e" stroke="#784212" strokeWidth="1.5" />
            <text x="240" y="207" textAnchor="middle" fontSize="11" fill="#fff">Artesãos e Camponeses</text>
            {/* Nível 5 — Escravizados */}
            <polygon points="240,230 40,300 440,300" fill="#935116" stroke="#4a235a" strokeWidth="1.5" />
            <text x="240" y="273" textAnchor="middle" fontSize="11" fill="#fff">Escravizados e Prisioneiros de Guerra</text>
            {/* Base */}
            <rect x="40" y="300" width="400" height="8" fill="#784212" rx="2" />
            {/* Legendas laterais */}
            <line x1="295" y1="35" x2="350" y2="35" stroke="#888" strokeWidth="1" strokeDasharray="3,3" />
            <text x="355" y="39" fontSize="10" fill="#555">Poder absoluto divino</text>
            <line x1="325" y1="85" x2="365" y2="85" stroke="#888" strokeWidth="1" strokeDasharray="3,3" />
            <text x="368" y="89" fontSize="10" fill="#555">Elite intelectual/religiosa</text>
            <line x1="355" y1="137" x2="390" y2="137" stroke="#888" strokeWidth="1" strokeDasharray="3,3" />
            <text x="392" y="141" fontSize="10" fill="#555">Classe administrativa</text>
            <line x1="393" y1="197" x2="420" y2="197" stroke="#888" strokeWidth="1" strokeDasharray="3,3" />
            <text x="422" y="201" fontSize="10" fill="#555">Maioria da população</text>
            <line x1="443" y1="265" x2="455" y2="265" stroke="#888" strokeWidth="1" strokeDasharray="3,3" />
            <text x="457" y="269" fontSize="9" fill="#555">Base social</text>
            <text x="240" y="322" textAnchor="middle" fontSize="11" fill="#555" fontStyle="italic">Hierarquia Social do Egito Antigo</text>
          </svg>
          <p className="lesson-figure-caption">Pirâmide social egípcia: do faraó-deus aos escravizados na base.</p>
        </div>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Grupo Social</th>
                <th>Função Principal</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Faraó</td>
                <td>Governante divino, mediador entre deuses e homens</td>
                <td>Divino — intocável</td>
              </tr>
              <tr>
                <td>Alto Clero (Sacerdotes)</td>
                <td>Rituais, administração dos templos, educação</td>
                <td>Elite privilegiada</td>
              </tr>
              <tr>
                <td>Escribas</td>
                <td>Registro, contabilidade, administração estatal</td>
                <td>Classe letrada</td>
              </tr>
              <tr>
                <td>Funcionários e Nomarcos</td>
                <td>Governadores regionais, coletores de impostos</td>
                <td>Burocracia estatal</td>
              </tr>
              <tr>
                <td>Guerreiros</td>
                <td>Exército, fronteiras, campanhas militares</td>
                <td>Status variável</td>
              </tr>
              <tr>
                <td>Artesãos</td>
                <td>Construção, cerâmica, joalheria, têxteis</td>
                <td>Trabalhadores especializados</td>
              </tr>
              <tr>
                <td>Camponeses</td>
                <td>Agricultura, tributação em grãos</td>
                <td>Maioria — semi-livres</td>
              </tr>
              <tr>
                <td>Escravizados</td>
                <td>Mineração, obras públicas, serviços domésticos</td>
                <td>Base da pirâmide</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ── Seção 5 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Monumentalidade</span>
        <h2>5. Pirâmides: Função, Construção e Evolução</h2>
        <p>
          As pirâmides são o símbolo mais imediato do Egito Antigo, mas sua compreensão exige superar
          o mito de que foram construídas por escravos em condições degradantes. Pesquisas arqueológicas
          recentes demonstram que os trabalhadores eram egípcios livres — camponeses deslocados durante
          a estação das cheias, quando não podiam cultivar — que recebiam alimentação, moradia e cuidados
          médicos do Estado. As pirâmides eram, acima de tudo, tumbas reais: câmaras funerárias
          monumentais destinadas a garantir a imortalidade do faraó e, por extensão, a manutenção
          da ordem cósmica (Ma'at).
        </p>
        <p>
          A evolução arquitetônica das pirâmides é notável. As primeiras sepulturas reais eram as
          <strong> mastabas</strong> (palavra árabe para "banco") — estruturas retangulares de tijolos
          de adobe com câmaras subterrâneas. Por volta de 2650 a.C., o arquiteto Imhotep empilhou
          seis mastabas em degraus para criar a <strong>Pirâmide Escalonada de Djoser</strong>, em
          Saqqara — a primeira grande estrutura de pedra do mundo. Menos de um século depois,
          os engenheiros do faraó Sneferu experimentaram diferentes ângulos, produzindo a Pirâmide
          Curvada (que muda de inclinação no meio) e a Pirâmide Vermelha — a primeira pirâmide
          verdadeira de faces lisas. O apogeu veio com os três faraós de Gizé:
        </p>
        <div className="lesson-grid">
          <div className="lesson-card">
            <h4>Pirâmide de Quéops (Khufu)</h4>
            <p>
              A maior pirâmide já construída: 230 m de base, 146 m de altura original (hoje 138 m),
              composta por cerca de 2,3 milhões de blocos de pedra calcária com peso médio de 2,5
              toneladas. Única das Sete Maravilhas do Mundo Antigo ainda em pé.
            </p>
          </div>
          <div className="lesson-card">
            <h4>Pirâmide de Quéfren (Khafre)</h4>
            <p>
              Ligeiramente menor (136 m), mas parece maior por estar em terreno mais elevado.
              Conserva parte do revestimento original em calcário polido no topo. Ao lado ergue-se
              a Grande Esfinge, com 73 m de comprimento.
            </p>
          </div>
          <div className="lesson-card">
            <h4>Pirâmide de Miquerinos (Menkaure)</h4>
            <p>
              A menor das três pirâmides de Gizé (65 m), mas revestida parcialmente de granito rosa
              de Assuã. Representa o início da descentralização do poder faraônico no final do
              Antigo Reino.
            </p>
          </div>
        </div>
        <div className="lesson-highlight">
          <h3>Quem construiu as pirâmides?</h3>
          <p>
            A descoberta do "Diário de Merer" (2013), um papiro do reinado de Quéops encontrado no
            Wadi al-Jarf, revelou detalhes precisos sobre o transporte de pedra calcária de Tura até
            Gizé por trabalhadores organizados em equipes chamadas "falanges". Os trabalhadores recebiam
            rações de pão, carne bovina e cerveja — cardápio de qualidade para a época —, eram divididos
            em turmas supervisionadas e tinham acesso a cuidados médicos. A "escravidão nas pirâmides"
            é um mito moderno sem sustentação arqueológica.
          </p>
        </div>
      </section>

      {/* ── Seção 6 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Comunicação e Saber</span>
        <h2>6. Escrita Hieroglífica e a Pedra de Roseta</h2>
        <p>
          Os egípcios desenvolveram um sistema de escrita por volta de 3200 a.C., quase simultaneamente
          aos sumérios da Mesopotâmia. A escrita egípcia é conhecida como <strong>hieroglífica</strong>
          (do grego "letras sagradas entalhadas") e combina três tipos de sinais: <em>logogramas</em>
          (representam palavras inteiras), <em>fonogramas</em> (representam sons consonantais) e
          <em>determinativos</em> (signos mudos que indicam a categoria semântica da palavra).
          O sistema é formado por cerca de 700 signos no período clássico, expandindo-se para
          mais de 5.000 no período ptolemaico.
        </p>
        <p>
          Com o tempo, os egípcios desenvolveram versões simplificadas dos hieróglifos para uso
          cotidiano: a <strong>escrita hierática</strong>, cursiva e destinada aos escribas em papiro,
          utilizada desde o Antigo Reino; e a <strong>escrita demótica</strong> (c. 650 a.C.), ainda
          mais simplificada, usada para documentos legais, comerciais e literários do cotidiano.
          O conhecimento dos hieróglifos foi se tornando restrito ao clero e acabou por se perder
          completamente com o fechamento dos últimos templos pagãos (século IV d.C.), tornando
          os textos egípcios ilegíveis por mais de 1.400 anos.
        </p>
        <p>
          A chave para decifrar essa escrita foi encontrada em 1799 por soldados franceses da expedição
          napoleônica ao Egito: a <strong>Pedra de Roseta</strong>, um decreto do faraó Ptolomeu V
          (196 a.C.) gravado em três escritas — hieroglífico, demótico e grego. O jovem linguista
          francês <strong>Jean-François Champollion</strong> (1790–1832), usando seu conhecimento
          de copta (língua derivada do egípcio antigo) e de grego, conseguiu em 1822 decifrar
          os hieróglifos, abrindo a porta para toda a egiptologia moderna.
        </p>
        <div className="lesson-highlight">
          <h3>Impacto da Decifração</h3>
          <p>
            A decifração de Champollion permitiu a leitura de milares de textos: desde o "Livro dos
            Mortos" e os "Textos das Pirâmides" até contratos de compra e venda, cartas pessoais e
            tratados diplomáticos. A Pedra de Roseta está hoje no Museu Britânico, em Londres, e é
            o objeto mais visitado de sua coleção.
          </p>
        </div>
      </section>

      {/* ── Seção 7 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Cosmovisão</span>
        <h2>7. Religião, Mumificação e a Vida Após a Morte</h2>
        <p>
          A religião egípcia era politeísta e dotada de extraordinária complexidade teológica: o
          panteão incluía mais de 2.000 divindades, muitas delas com formas mistas de humano e animal.
          Entre as mais importantes: <strong>Rá</strong>, o deus sol, criador supremo que atravessava
          o céu de barco durante o dia e o submundo à noite; <strong>Osíris</strong>, deus dos mortos
          e da vegetação, que ressuscitou após ser assassinado pelo irmão Set e se tornou o juiz das
          almas no além; <strong>Ísis</strong>, deusa da magia e da maternidade, que recolheu os
          pedaços do corpo de Osíris e o ressuscitou; <strong>Hórus</strong>, deus falcão e faraó
          celeste; e <strong>Anúbis</strong>, deus chacal protetor dos mortos e guardião do processo
          de mumificação.
        </p>
        <p>
          A crença na vida após a morte era o pilar central da religiosidade egípcia. Para os egípcios,
          a morte era uma transição — não um fim. O falecido precisava passar pelo julgamento de Osíris
          na "Sala das Duas Verdades": seu coração era pesado numa balança contra a pena de Ma'at
          (símbolo da verdade e da justiça). Se o coração fosse mais leve que a pena — sinal de uma
          vida justa —, o morto ganhava acesso ao Aaru (Campo dos Juncos), o paraíso egípcio.
          Se fosse mais pesado, o coração era devorado pelo monstro Ammit.
        </p>
        <p>
          Para garantir a sobrevivência na outra vida, era necessário preservar o corpo —
          daí a prática da <strong>mumificação</strong>. O processo durava 70 dias e incluía:
          extração dos órgãos internos (guardados em vasos canópicos), dessecação do corpo com
          natrão (sal natural), aplicação de resinas aromáticas, envolvimento em centenas de metros
          de linho e deposição em sarcófagos pintados. O <strong>Livro dos Mortos</strong> era
          uma coleção de fórmulas mágicas colocada junto ao morto para guiá-lo no além — um
          verdadeiro "manual de sobrevivência" do mundo dos mortos.
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Divindade</th>
                <th>Representação</th>
                <th>Domínio</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Rá / Amon-Rá</td>
                <td>Homem com cabeça de falcão e disco solar</td>
                <td>Sol, criação, poder real</td>
              </tr>
              <tr>
                <td>Osíris</td>
                <td>Homem mumificado com coroa Atef</td>
                <td>Morte, ressurreição, julgamento</td>
              </tr>
              <tr>
                <td>Ísis</td>
                <td>Mulher com hieróglifo do trono na cabeça</td>
                <td>Magia, maternidade, cura</td>
              </tr>
              <tr>
                <td>Hórus</td>
                <td>Homem com cabeça de falcão</td>
                <td>Céu, faraó, proteção</td>
              </tr>
              <tr>
                <td>Anúbis</td>
                <td>Homem com cabeça de chacal</td>
                <td>Mumificação, mortos, além</td>
              </tr>
              <tr>
                <td>Toth</td>
                <td>Homem com cabeça de íbis</td>
                <td>Escrita, sabedoria, lua</td>
              </tr>
              <tr>
                <td>Set</td>
                <td>Animal mítico (animal de Set)</td>
                <td>Caos, tempestades, deserto</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ── Seção 8 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Arte e Arquitetura</span>
        <h2>8. Templos, Obeliscos e o Cânone Artístico</h2>
        <p>
          A arte egípcia obedecia a regras rigorosas e imutáveis ao longo de séculos — o que os
          historiadores chamam de <strong>cânone artístico</strong>. A representação humana seguia
          a "lei da frontalidade": o rosto era mostrado de perfil, mas o olho e os ombros de frente;
          as pernas de perfil, mas o tronco de frente. O tamanho das figuras indicava hierarquia —
          faraós eram representados maiores que nobres, que por sua vez eram maiores que servos.
          A perspectiva realista era deliberadamente evitada: o objetivo não era imitar a realidade
          visual, mas transmitir a verdade essencial e atemporal dos sujeitos representados.
        </p>
        <p>
          Em arquitetura, os templos eram concebidos como habitações dos deuses. O complexo de
          <strong> Karnak</strong>, em Tebas, é o maior complexo religioso já construído na história:
          erguido ao longo de 2.000 anos por gerações de faraós, abrange 100 hectares e inclui a
          imponente Sala Hipostila, com 134 colunas de até 23 m de altura. O templo de <strong>Luxor</strong>,
          a 3 km de Karnak, era conectado a ele por uma avenida de esfinges e usado nas festas de Opet.
          Os <strong>obeliscos</strong> — monólitos de granito com a ponta em pirâmide dourada
          (<em>piramidion</em>) — eram erigidos em pares na entrada dos templos como símbolos solares.
          Numerosos obeliscos egípcios foram levados para Roma, Paris, Londres e Nova York na Antiguidade
          e no período moderno.
        </p>
      </section>

      {/* ── Seção 9 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Identidade e Perspectiva</span>
        <h2>9. O Egito e a África: a Perspectiva Afrocentrada</h2>
        <p>
          Uma das discussões mais importantes e politicamente significativas da historiografia
          contemporânea sobre o Egito Antigo diz respeito à sua identidade racial e cultural.
          Durante séculos, a historiografia eurocêntrica tendeu a "separar" o Egito da África subsaariana,
          tratando-o como uma civilização mediterrânea ou até "pré-europeia" — o que serviu para justificar
          narrativas racistas que negavam às populações negras a capacidade de construir civilizações
          complexas.
        </p>
        <p>
          O intelectual senegalês <strong>Cheikh Anta Diop</strong> (1923–1986) foi pioneiro em contestar
          essa visão. Em obras como "Nations nègres et Culture" (1954), Diop argumentou que os egípcios
          antigos eram, em sua maioria, populações negras africanas — o que é sugerido pela própria
          palavra <em>Kemet</em> ("terra negra"), pelas análises de pigmentação de múmias, pelas relações
          culturais com o Sudão (Núbia/Kush) e pelas representações na arte egípcia. O debate continua
          entre estudiosos, mas a perspectiva afrocentrada contribuiu fundamentalmente para reconhecer
          o Egito como parte constitutiva da história africana e não um "apêndice" do Mediterrâneo.
        </p>
        <p>
          As evidências das conexões africanas do Egito são abundantes: o faraó Pianky (Piye), da
          dinastia núbia (Cush), conquistou todo o Egito no século VIII a.C. e fundou a 25.ª dinasta
          — conhecida como "Dinastia Negra". A Núbia/Kush (atual Sudão) e o Egito mantiveram relações
          profundas por milênios — de comércio, conflito e intercâmbio cultural — e as pirâmides nubias
          de Meroe (mais numerosas que as egípcias) demonstram a profundidade dessa herança compartilhada.
        </p>
      </section>

      {/* ── Seção 10 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Ciência e Legado</span>
        <h2>10. Herança Egípcia: Medicina, Matemática e Astronomia</h2>
        <p>
          O Egito Antigo legou à humanidade contribuições científicas de primeira ordem, muitas delas
          transmitidas ao Ocidente via Grécia. Em <strong>medicina</strong>, o Papiro Edwin Smith
          (c. 1600 a.C., mas baseado em textos do Antigo Reino) descreve 48 casos cirúrgicos com uma
          abordagem notavelmente empírica — exames clínicos, diagnósticos e tratamentos baseados na
          observação, não apenas na magia. Os médicos egípcios conheciam a circulação sanguínea,
          faziam suturas e praticavam cirurgias cerebrais. Imhotep, o arquiteto das pirâmides de
          Djoser, foi também médico e foi divinizado como deus da medicina — identificado pelos gregos
          com Asclépio.
        </p>
        <p>
          Em <strong>matemática</strong>, o Papiro de Rhind (c. 1550 a.C.) revela que os egípcios
          dominavam frações, progressões aritméticas, áreas de triângulos e círculos (com um valor
          de π ≈ 3,16) e volumes de sólidos. O sistema numérico egípcio era decimal aditivo —
          possuía hieróglifos específicos para 1, 10, 100, 1.000, 10.000, 100.000 e 1.000.000.
          Em <strong>astronomia</strong>, além do calendário solar de 365 dias, os egípcios
          mapearam 36 constelações (decanos), calcularam os períodos de Sirius e Orion, e
          orientaram as pirâmides com precisão impressionante em relação aos pontos cardinais
          e às estrelas circumpolares.
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Área</th>
                <th>Conquista Egípcia</th>
                <th>Legado</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Calendário</td>
                <td>365 dias, 12 meses de 30 dias + 5 epagômenos</td>
                <td>Base do calendário Juliano e Gregoriano</td>
              </tr>
              <tr>
                <td>Medicina</td>
                <td>Cirurgia, sutura, diagnóstico clínico</td>
                <td>Influência em Hipócrates e medicina greco-romana</td>
              </tr>
              <tr>
                <td>Matemática</td>
                <td>Frações, π≈3,16, volumes (Papiro de Rhind)</td>
                <td>Transmitido via geometria grega</td>
              </tr>
              <tr>
                <td>Arquitetura</td>
                <td>Pirâmides, templos, obeliscos</td>
                <td>Influência greco-romana e mundial</td>
              </tr>
              <tr>
                <td>Escrita</td>
                <td>Hieróglifos → escrita fonética</td>
                <td>Influência nos alfabetos fenícios e gregos</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ── Seção 11 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Relações Externas</span>
        <h2>11. O Egito e o Mundo: Hicsos, Punt e a Batalha de Kadesh</h2>
        <p>
          O Egito raramente viveu em isolamento. Durante o Médio Reino, estabeleceu rotas comerciais
          com a mítica terra de <strong>Punt</strong> (provavelmente atual Eritreia/Somalia), de onde
          importava mirra, incenso, ébano, ouro, marfim e animais exóticos — como relatam os relevos
          do templo de Deir el-Bahari, encomendados pela faraó Hatshepsut. Comerciantes egípcios
          também operavam no Levante (atual Israel/Palestina/Líbano) e na Núbia.
        </p>
        <p>
          A invasão dos <strong>Hicsos</strong> (c. 1650–1550 a.C.) foi o trauma central do 2.º
          Período Intermediário. Povo de origem semítica que vinha do Levante, os Hicsos introduziram
          no Egito tecnologias militares revolucionárias: o carro de guerra puxado por cavalos, o arco
          composto e novas formas de espada. Quando os faraós tebanos da 17.ª e 18.ª dinastias
          os expulsaram, incorporaram essas mesmas tecnologias e as usaram para construir o Império
          do Novo Reino.
        </p>
        <p>
          O confronto mais famoso do Egito Antigo com uma potência estrangeira foi a
          <strong> Batalha de Kadesh</strong> (c. 1274 a.C.), entre Ramsés II e o rei hitita
          Muwatalli II. A batalha, travada no atual território sírio, terminou em empate — mas
          Ramsés II a propagandeou como uma grande vitória egípcia, cobrindo os muros de Karnak,
          Luxor e Abu Simbel com representações de seu heroísmo. Em 1259 a.C., Ramsés II e o
          sucessor hitita Hattusili III firmaram o <strong>Tratado de Kadesh</strong> — o mais
          antigo tratado de paz documentado da história, cujo texto sobrevive em versões egípcia
          e hitita. Uma réplica desse tratado está exposta na sede da ONU em Nova York.
        </p>
      </section>

      {/* ── Seção 12 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Síntese ENEM</span>
        <h2>12. Como o ENEM Cobra o Egito Antigo</h2>
        <p>
          O ENEM aborda o Egito Antigo principalmente a partir de quatro ângulos: (1) o estudo
          das civilizações hidráulicas e a relação entre ambiente natural e organização social;
          (2) a análise de fontes históricas (imagens de hieróglifos, relevos, representações
          artísticas) como documentos que revelam aspectos da sociedade; (3) a questão da identidade
          africana do Egito, frequentemente associada a textos sobre afrocentrismo, patrimônio
          cultural africano ou racismo epistemológico; e (4) a comparação com outras civilizações
          antigas (Mesopotâmia, Grécia, Roma) quanto a formas de poder, escrita e religião.
        </p>
        <p>
          As questões raramente pedem datas ou nomes. O candidato precisa ser capaz de: interpretar
          uma imagem de uma pirâmide como documento sobre organização do trabalho e poder estatal;
          relacionar a mumificação a uma concepção de tempo e de vida após a morte; identificar
          na escrita hieroglífica um instrumento de controle burocrático e religioso; e situar
          o Egito no continente africano tanto geográfica quanto culturalmente.
        </p>
        <div className="lesson-highlight">
          <h3>Palavras-chave ENEM</h3>
          <p>
            Teocracia — Hidráulica (civilização do rio) — Hierarquia social — Afrocentrismo —
            Kemet — Mumificação — Ma'at — Hieróglifos — Champollion — Pirâmides — Faraó —
            Calendário solar — Batalha de Kadesh — Tratado de paz
          </p>
        </div>
      </section>

      {/* ── Exercícios ── */}
      <Exercise
        level="Básico"
        title="Nilo e Civilização"
        statement={
          <p>
            O historiador grego Heródoto afirmou que o Egito era "um presente do Nilo". Essa
            expressão se refere principalmente à função do rio de:
          </p>
        }
        options={[
          { letter: "A", text: "Servir como fronteira natural contra invasões estrangeiras, garantindo a segurança do Estado faraônico." },
          { letter: "B", text: "Fornecer silt fértil por meio das cheias periódicas, tornando possível a agricultura que sustentava a civilização.", correct: true },
          { letter: "C", text: "Permitir a pesca como principal fonte de proteína da dieta egípcia, prescindindo da agricultura." },
          { letter: "D", text: "Gerar energia hidráulica para as obras de construção das pirâmides durante o Antigo Reino." },
          { letter: "E", text: "Conectar o Egito ao Mar Vermelho, viabilizando exclusivamente o comércio com a terra de Punt." },
        ]}
        resolution={
          <p>
            A chave está no papel agrícola do Nilo: as cheias periódicas depositavam limo fértil
            (silt) nas margens, permitindo colheitas abundantes que sustentavam toda a estrutura
            social e estatal egípcia. Sem essa fertilidade garantida, não haveria excedente
            alimentar para sustentar faraós, sacerdotes, escribas e trabalhadores das pirâmides.
          </p>
        }
      />

      <Exercise
        level="Intermediário"
        title="Faraó como Deus-Rei"
        statement={
          <p>
            O sistema político egípcio caracterizava-se pela teocracia faraônica. Analise as
            afirmativas sobre esse sistema:<br />
            I. O faraó era identificado com Hórus em vida e com Osíris após a morte.<br />
            II. O conceito de Ma'at obrigava o faraó a manter a ordem cósmica, sob pena de
            legitimidade política.<br />
            III. Os sacerdotes do deus Amon, em Tebas, chegaram a rivalizar com o poder faraônico
            no Novo Reino.<br />
            Estão corretas:
          </p>
        }
        options={[
          { letter: "A", text: "Apenas I." },
          { letter: "B", text: "Apenas I e II." },
          { letter: "C", text: "Apenas II e III." },
          { letter: "D", text: "I, II e III.", correct: true },
          { letter: "E", text: "Apenas III." },
        ]}
        resolution={
          <p>
            Todas as três afirmativas são corretas. I — A identidade Hórus/Osíris era parte central
            da teologia faraônica. II — Ma'at era o princípio que legitimava o poder faraônico;
            faraós que não a mantivessem perdiam legitimidade. III — No Novo Reino, especialmente
            após Ramsés XI, os sacerdotes de Amon acumularam tanto poder que chegaram a governar
            o Sul do Egito, precipitando o 3.º Período Intermediário.
          </p>
        }
      />

      <Exercise
        level="Avançado"
        title="A Perspectiva Afrocentrada"
        statement={
          <p>
            "A civilização egípcia foi uma civilização de povos negros africanos. O próprio nome
            Kemet, 'terra negra', não se refere apenas à cor do solo fértil, mas à identidade
            de seus habitantes." (Adaptado de Cheikh Anta Diop, 1954.)<br /><br />
            Sobre a perspectiva afrocentrada no estudo do Egito Antigo, é correto afirmar que:
          </p>
        }
        options={[
          { letter: "A", text: "É consenso absoluto entre os arqueólogos e não encontra contestação na academia internacional." },
          { letter: "B", text: "Representa uma revisão historiográfica que contesta a eurocentrismo ao inserir o Egito na história da África negra e questionar narrativas racistas sobre civilização.", correct: true },
          { letter: "C", text: "Afirma que o Egito foi fundado por populações originárias da Grécia Antiga, especialmente de Creta." },
          { letter: "D", text: "Nega qualquer relação entre o Egito e a Núbia/Kush, vendo-os como civilizações completamente separadas." },
          { letter: "E", text: "É uma perspectiva exclusivamente política sem qualquer embasamento em fontes históricas ou arqueológicas." },
        ]}
        resolution={
          <p>
            A perspectiva afrocentrada, desenvolvida por Diop e outros, é uma revisão historiográfica
            legítima que questiona o eurocentrismo ao afirmar que o Egito é parte integrante da
            história africana e que seus habitantes foram predominantemente africanos negros.
            Ela tem embasamento em análises de múmias, iconografia egípcia, evidências linguísticas
            e conexões com a Núbia. Embora debatida, não é mera retórica política.
          </p>
        }
      />

      <Exercise
        level="Contextualizado"
        title="Pirâmides e Trabalho"
        statement={
          <p>
            Em 2013, pesquisadores descobriram no Egito o "Diário de Merer", um papiro do tempo
            do faraó Quéops que descreve equipes de trabalhadores transportando pedra calcária
            de Tura para Gizé, recebendo rações de pão, carne e cerveja.<br /><br />
            Esse documento contraria qual narrativa historicamente difundida sobre a construção
            das pirâmides?
          </p>
        }
        options={[
          { letter: "A", text: "A ideia de que as pirâmides foram construídas durante o Antigo Reino, por volta de 2500 a.C." },
          { letter: "B", text: "A hipótese de que os blocos de pedra foram extraídos de pedreiras no Alto Egito." },
          { letter: "C", text: "O mito de que as pirâmides foram erguidas por escravos em condições degradantes, sem remuneração ou cuidados.", correct: true },
          { letter: "D", text: "A teoria de que Quéops foi o maior faraó da história egípcia em termos de poder político." },
          { letter: "E", text: "A afirmação de que as pirâmides serviam exclusivamente como tumbas reais." },
        ]}
        resolution={
          <p>
            O "Diário de Merer" demonstra que os construtores das pirâmides eram trabalhadores
            organizados em equipes, que recebiam alimentação (pão, carne, cerveja) e eram
            remunerados pelo Estado. Isso derruba o mito — popularizado pela Bíblia e pelo cinema
            — de que as pirâmides foram construídas por escravos hebreus ou por qualquer outra
            população em condições de escravidão forçada.
          </p>
        }
      />

      <Exercise
        level="Contextualizado"
        title="Pedra de Roseta e Decifração"
        statement={
          <p>
            A Pedra de Roseta (196 a.C.) contém um decreto do faraó Ptolomeu V em três escritas:
            hieroglífico, demótico e grego. Em 1822, Jean-François Champollion utilizou esse
            trilinguismo para decifrar os hieróglifos egípcios.<br /><br />
            Qual foi o principal impacto histórico dessa decifração para os estudos sobre o Egito?
          </p>
        }
        options={[
          { letter: "A", text: "Permitiu a tradução apenas de textos religiosos, sem implicações para o estudo político ou econômico do Egito." },
          { letter: "B", text: "Abriu o acesso a milhares de textos egípcios — religiosos, médicos, literários, jurídicos e diplomáticos — que estavam ilegíveis há 14 séculos, fundando a egiptologia moderna.", correct: true },
          { letter: "C", text: "Demonstrou que os hieróglifos eram puramente decorativos e não tinham função comunicativa real." },
          { letter: "D", text: "Revelou que a língua egípcia era derivada do latim, confirmando a origem europeia da civilização egípcia." },
          { letter: "E", text: "Permitiu apenas a leitura dos decretos reais, sem contribuição para a compreensão da vida cotidiana dos egípcios." },
        ]}
        resolution={
          <p>
            A decifração de Champollion foi um divisor de águas: tornou legíveis textos que haviam
            permanecido herméticos por mais de 1.400 anos. Isso permitiu o estudo direto de fontes
            primárias egípcias de todos os tipos — do "Livro dos Mortos" ao Papiro de Rhind, de
            cartas privadas a tratados diplomáticos — e fundou a egiptologia como disciplina
            científica. Champollion percebeu que o copta (língua cristã do Egito) era herdeiro do
            egípcio antigo e usou esse conhecimento como chave para o sistema fonético dos hieróglifos.
          </p>
        }
      />
    </article>
  );
}
