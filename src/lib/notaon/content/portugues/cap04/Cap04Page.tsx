"use client";
import { ExerciseCard as Exercise } from "@/lib/notaon/components/ExerciseCard";
export default function Cap04Page() {
  return (
    <article className="lesson-landing">
      <section className="lesson-hero">
        <div>
          <span className="lesson-badge">Português • Capítulo 4</span>

          <h1>Gêneros Textuais</h1>

          <p>
            Toda vez que nos comunicamos por meio de textos, utilizamos um <strong>gênero textual</strong> —
            uma forma relativamente estável de enunciado moldada pela história, pela cultura e pelas
            necessidades humanas. Compreender gêneros textuais é fundamental para o ENEM: as provas
            apresentam textos de diversas esferas (jornalística, literária, digital, publicitária) e
            exigem que o leitor reconheça finalidades, recursos linguísticos e efeitos de sentido.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Fundamento Teórico</span>

        <h2>1. O Conceito Bakhtiniano de Gênero Textual</h2>

        <p>
          O linguista russo <strong>Mikhail Bakhtin</strong> (1895–1975) definiu os gêneros textuais como
          <em> "tipos relativamente estáveis de enunciados"</em>. O adjetivo <em>relativamente</em> é
          essencial: os gêneros não são moldes rígidos, mas formas que se adaptam historicamente às
          condições sociais e tecnológicas de produção e circulação dos textos.
        </p>

        <p>
          Para Bakhtin, cada gênero é determinado por três elementos constitutivos inseparáveis:
          o <strong>conteúdo temático</strong> (o que pode ser dito), o <strong>estilo</strong> (como se
          diz: escolhas lexicais, sintáticas, expressivas) e a <strong>construção composicional</strong>
          (a forma, a organização estrutural do texto). Nenhum enunciado existe fora de um gênero; mesmo
          a conversa informal do dia a dia é um gênero — o da <em>conversa cotidiana</em>.
        </p>

        <div className="lesson-highlight">
          <h3>Distinção fundamental: gênero x tipo textual</h3>
          <p>
            <strong>Tipo textual</strong> é uma categoria abstrata que descreve a estrutura predominante
            do discurso: narração, descrição, dissertação (argumentação), exposição e injunção.
            <strong> Gênero textual</strong> é a realização concreta e social: uma <em>notícia</em> é um
            gênero; o tipo predominante nela é expositivo-narrativo. Um mesmo gênero pode conter
            múltiplos tipos textuais.
          </p>
        </div>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Tipo Textual</th>
                <th>Estrutura Central</th>
                <th>Exemplos de Gêneros</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Narração</td>
                <td>Sequência de eventos no tempo</td>
                <td>Conto, fábula, romance, notícia</td>
              </tr>
              <tr>
                <td>Descrição</td>
                <td>Caracterização de seres, espaços, objetos</td>
                <td>Guia turístico, laudo, resenha</td>
              </tr>
              <tr>
                <td>Dissertação / Argumentação</td>
                <td>Tese + argumentos + conclusão</td>
                <td>Artigo de opinião, editorial, redação ENEM</td>
              </tr>
              <tr>
                <td>Exposição</td>
                <td>Apresentação e explicação de conceitos</td>
                <td>Verbete, artigo científico, videoaula</td>
              </tr>
              <tr>
                <td>Injunção</td>
                <td>Instruções para realização de ações</td>
                <td>Receita, manual, edital, bula</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Onde Circulam</span>

        <h2>2. Esferas de Circulação dos Gêneros</h2>

        <p>
          Os gêneros não surgem no vácuo: eles emergem e circulam em <strong>esferas de atividade humana</strong>,
          também chamadas de <em>campos discursivos</em>. Cada esfera tem seus valores, seus participantes,
          suas formas de linguagem e seus gêneros próprios. Reconhecer a esfera é o primeiro passo para
          compreender o propósito do texto.
        </p>

        <div className="lesson-grid">
          <div className="lesson-card">
            <span>📰</span>
            <h3>Jornalística</h3>
            <p>Notícia, reportagem, editorial, crônica, manchete, carta do leitor, artigo de opinião.</p>
          </div>
          <div className="lesson-card">
            <span>📢</span>
            <h3>Publicitária</h3>
            <p>Anúncio, slogan, cartaz, folder, comercial, jingle, infomercial.</p>
          </div>
          <div className="lesson-card">
            <span>📖</span>
            <h3>Literária</h3>
            <p>Conto, romance, crônica, poema, novela, peça teatral, fábula.</p>
          </div>
          <div className="lesson-card">
            <span>🔬</span>
            <h3>Científica</h3>
            <p>Artigo científico, resumo (abstract), resenha acadêmica, monografia, verbete.</p>
          </div>
          <div className="lesson-card">
            <span>⚖️</span>
            <h3>Jurídica</h3>
            <p>Contrato, petição, sentença, edital, regulamento, lei, decreto.</p>
          </div>
          <div className="lesson-card">
            <span>💬</span>
            <h3>Cotidiana</h3>
            <p>Conversa, bilhete, lista de compras, receita culinária, carta pessoal.</p>
          </div>
          <div className="lesson-card">
            <span>🌐</span>
            <h3>Digital</h3>
            <p>E-mail, blog, tweet, meme, post, videoaula, podcast, story, newsletter.</p>
          </div>
          <div className="lesson-card">
            <span>🎓</span>
            <h3>Educacional</h3>
            <p>Aula expositiva, exercício, enunciado de prova, parecer pedagógico.</p>
          </div>
        </div>

        <figure className="lesson-figure">
          <svg
            viewBox="0 0 700 320"
            width="700"
            height="320"
            aria-label="Diagrama das esferas de circulação dos gêneros textuais em torno da comunicação humana"
          >
            <defs>
              <radialGradient id="centerGrad" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#6366f1" stopOpacity="1" />
                <stop offset="100%" stopColor="#4338ca" stopOpacity="1" />
              </radialGradient>
            </defs>
            <ellipse cx="350" cy="160" rx="62" ry="42" fill="url(#centerGrad)" />
            <text x="350" y="154" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">Comunicação</text>
            <text x="350" y="170" textAnchor="middle" fill="white" fontSize="11">Humana</text>

            <line x1="350" y1="118" x2="350" y2="65" stroke="#6366f1" strokeWidth="1.5" strokeDasharray="4,3" />
            <rect x="282" y="38" width="136" height="30" rx="6" fill="#e0e7ff" />
            <text x="350" y="58" textAnchor="middle" fill="#3730a3" fontSize="12" fontWeight="600">Jornalística</text>

            <line x1="350" y1="202" x2="350" y2="255" stroke="#6366f1" strokeWidth="1.5" strokeDasharray="4,3" />
            <rect x="282" y="255" width="136" height="30" rx="6" fill="#fce7f3" />
            <text x="350" y="275" textAnchor="middle" fill="#9d174d" fontSize="12" fontWeight="600">Publicitária</text>

            <line x1="288" y1="143" x2="196" y2="110" stroke="#6366f1" strokeWidth="1.5" strokeDasharray="4,3" />
            <rect x="68" y="92" width="130" height="30" rx="6" fill="#d1fae5" />
            <text x="133" y="112" textAnchor="middle" fill="#065f46" fontSize="12" fontWeight="600">Literária</text>

            <line x1="288" y1="175" x2="196" y2="208" stroke="#6366f1" strokeWidth="1.5" strokeDasharray="4,3" />
            <rect x="68" y="200" width="130" height="30" rx="6" fill="#fef3c7" />
            <text x="133" y="220" textAnchor="middle" fill="#92400e" fontSize="12" fontWeight="600">Cotidiana</text>

            <line x1="412" y1="143" x2="504" y2="110" stroke="#6366f1" strokeWidth="1.5" strokeDasharray="4,3" />
            <rect x="502" y="92" width="130" height="30" rx="6" fill="#e0f2fe" />
            <text x="567" y="112" textAnchor="middle" fill="#0369a1" fontSize="12" fontWeight="600">Científica</text>

            <line x1="412" y1="175" x2="504" y2="208" stroke="#6366f1" strokeWidth="1.5" strokeDasharray="4,3" />
            <rect x="502" y="200" width="130" height="30" rx="6" fill="#f3e8ff" />
            <text x="567" y="220" textAnchor="middle" fill="#6b21a8" fontSize="12" fontWeight="600">Digital</text>

            <line x1="288" y1="128" x2="206" y2="60" stroke="#6366f1" strokeWidth="1.5" strokeDasharray="4,3" />
            <rect x="68" y="38" width="130" height="30" rx="6" fill="#fee2e2" />
            <text x="133" y="58" textAnchor="middle" fill="#991b1b" fontSize="12" fontWeight="600">Jurídica</text>

            <line x1="412" y1="128" x2="494" y2="60" stroke="#6366f1" strokeWidth="1.5" strokeDasharray="4,3" />
            <rect x="502" y="38" width="130" height="30" rx="6" fill="#ecfdf5" />
            <text x="567" y="58" textAnchor="middle" fill="#065f46" fontSize="12" fontWeight="600">Educacional</text>
          </svg>
          <figcaption>As esferas de circulação organizam os gêneros em torno da comunicação humana.</figcaption>
        </figure>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Imprensa</span>

        <h2>3. Gêneros Jornalísticos</h2>

        <p>
          A <strong>esfera jornalística</strong> compreende textos produzidos por profissionais da
          comunicação para veículos de imprensa (jornais, revistas, portais, telejornais). O objetivo
          central é <em>informar o público</em>, embora muitos gêneros jornalísticos também argumentem,
          interpretem e entretenham. Conhecer as diferenças entre eles é muito cobrado no ENEM.
        </p>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Gênero</th>
                <th>Finalidade</th>
                <th>Traços Distintivos</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Manchete</strong></td>
                <td>Atrair o leitor; resumir a notícia principal</td>
                <td>Título em destaque; linguagem concisa; verbo geralmente omitido</td>
              </tr>
              <tr>
                <td><strong>Notícia</strong></td>
                <td>Informar sobre fato recente</td>
                <td>Responde a quem, o quê, quando, onde, como, por quê (pirâmide invertida)</td>
              </tr>
              <tr>
                <td><strong>Reportagem</strong></td>
                <td>Aprofundar e contextualizar um tema</td>
                <td>Mais extensa; entrevistas; dados; opinião de especialistas</td>
              </tr>
              <tr>
                <td><strong>Editorial</strong></td>
                <td>Expressar posição institucional do veículo</td>
                <td>Sem assinatura; linguagem formal; argumentativo; 1ª pessoa do plural</td>
              </tr>
              <tr>
                <td><strong>Artigo de Opinião</strong></td>
                <td>Defender tese com argumentos</td>
                <td>Assinado; autor identificado; linguagem variável; estrutura dissertativa</td>
              </tr>
              <tr>
                <td><strong>Crônica Jornalística</strong></td>
                <td>Comentar fatos com leveza e estilo</td>
                <td>Linguagem literária; brevidade; cotidiano; ironia; 1ª pessoa</td>
              </tr>
              <tr>
                <td><strong>Carta do Leitor</strong></td>
                <td>Permitir participação do público</td>
                <td>Assinada pelo leitor; reação a texto anterior; opinião do cidadão</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="lesson-highlight">
          <h3>Notícia x Reportagem — diferença crucial para o ENEM</h3>
          <p>
            A <strong>notícia</strong> relata um fato <em>pontual e recente</em> de forma objetiva, sem
            aprofundamento. A <strong>reportagem</strong> <em>investiga, contextualiza e interpreta</em> um
            tema, podendo abordar causas, consequências e vozes diversas. No ENEM, a pergunta "qual é o
            gênero do texto?" frequentemente exige reconhecer essa distinção.
          </p>
        </div>

        <div className="math-block">
          <h3>Exemplo de manchete</h3>
          <p>
            <em>"Governo anuncia corte de gastos para 2025"</em> — observe: fato recente, linguagem direta,
            verbo conjugado no presente histórico, ausência de artigo antes de "Governo" (recurso
            típico de manchetes para criar urgência e brevidade).
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Marketing e Persuasão</span>

        <h2>4. Gêneros Publicitários</h2>

        <p>
          A <strong>esfera publicitária</strong> produz textos com finalidade predominantemente
          <em> persuasiva e comercial</em>: vender produtos, serviços, ideias ou comportamentos. A linguagem
          publicitária é marcada por recursos retóricos, jogos de palavras, apelos emocionais, imagens e
          slogans memoráveis. A multimodalidade é quase sempre presente.
        </p>

        <div className="lesson-grid">
          <div className="lesson-card">
            <span>🖼️</span>
            <h3>Anúncio</h3>
            <p>
              Texto publicitário que combina imagem e linguagem verbal para promover produto ou serviço.
              Circula em revistas, jornais e sites.
            </p>
          </div>
          <div className="lesson-card">
            <span>✨</span>
            <h3>Slogan</h3>
            <p>
              Frase curta, memorável e impactante associada a uma marca. Ex.: <em>"Just do it"</em>.
              Usa jogos sonoros, aliterações e paralelismos.
            </p>
          </div>
          <div className="lesson-card">
            <span>🗂️</span>
            <h3>Folder</h3>
            <p>
              Material impresso ou digital com informações sobre produto, evento ou serviço. Usa
              linguagem sintética, tópicos e imagens.
            </p>
          </div>
          <div className="lesson-card">
            <span>📌</span>
            <h3>Cartaz</h3>
            <p>
              Texto visual de grande formato para espaços públicos. Prioritariamente icônico;
              linguagem verbal reduzida ao essencial.
            </p>
          </div>
        </div>

        <div className="lesson-highlight">
          <h3>Recursos linguísticos da publicidade</h3>
          <p>
            Imperativos (<em>"Compre agora!"</em>), pronomes de 2ª pessoa (<em>"Você merece"</em>),
            hipérbole (<em>"O melhor hambúrguer do universo"</em>), metáfora, rima, aliteração e
            intertextualidade são estratégias frequentes. O ENEM pede a identificação desses recursos
            e seus efeitos persuasivos.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Arte e Ficção</span>

        <h2>5. Gêneros Literários</h2>

        <p>
          A <strong>esfera literária</strong> abrange textos nos quais a <em>função poética da linguagem</em>
          é central: a forma como se diz é tão importante quanto o que se diz. Os gêneros literários são
          organizados tradicionalmente em três grandes modalidades: <strong>épico/narrativo</strong>,
          <strong> lírico/poético</strong> e <strong>dramático/teatral</strong>.
        </p>

        <div className="lesson-grid">
          <div className="lesson-card">
            <span>📗</span>
            <h3>Conto</h3>
            <p>
              Narrativa curta, com poucos personagens, único conflito central e desfecho surpreendente.
              Economia de recursos é sua marca.
            </p>
          </div>
          <div className="lesson-card">
            <span>📙</span>
            <h3>Crônica Literária</h3>
            <p>
              Texto curto, de tom íntimo, que transforma episódios cotidianos em reflexão ou humor.
              Fronteira tênue com o jornalismo.
            </p>
          </div>
          <div className="lesson-card">
            <span>🎼</span>
            <h3>Poema</h3>
            <p>
              Texto organizado em versos e estrofes. Explora ritmo, sonoridade, imagens e ambiguidade.
              Linguagem altamente conotativa.
            </p>
          </div>
          <div className="lesson-card">
            <span>📕</span>
            <h3>Romance</h3>
            <p>
              Narrativa extensa com múltiplos personagens, tramas paralelas e profundidade psicológica.
              Surge com a modernidade burguesa.
            </p>
          </div>
          <div className="lesson-card">
            <span>🦊</span>
            <h3>Fábula</h3>
            <p>
              Narrativa curta com personagens animais que representam vícios e virtudes humanas.
              Termina com uma moral explícita.
            </p>
          </div>
          <div className="lesson-card">
            <span>🎭</span>
            <h3>Peça Teatral</h3>
            <p>
              Texto escrito para ser encenado. Composto de falas (diálogos) e rubricas (indicações
              de cena). Predomina o tipo dramático.
            </p>
          </div>
        </div>

        <div className="math-block">
          <h3>A crônica: entre o jornal e a literatura</h3>
          <p>
            A crônica é um gênero <em>híbrido</em> que circula tanto na esfera jornalística (publicada
            em jornais e revistas) quanto na literária (reunida em livros). No ENEM, é frequente a pergunta
            sobre <strong>qual esfera de circulação</strong> o texto pertence e quais recursos literários
            o autor usa para transformar o cotidiano em arte.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Era Digital</span>

        <h2>6. Gêneros Digitais</h2>

        <p>
          A emergência da internet e das tecnologias móveis criou <strong>novos gêneros</strong> e
          transformou gêneros já existentes. Os gêneros digitais caracterizam-se pela
          <em> hipertextualidade</em> (links que expandem o texto), <strong>interatividade</strong>
          (comentários, curtidas, compartilhamentos), <strong>multimodalidade</strong> (texto, imagem,
          vídeo, áudio integrados) e <em>velocidade de circulação</em>.
        </p>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Gênero Digital</th>
                <th>Esfera</th>
                <th>Características</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>E-mail formal</strong></td>
                <td>Profissional / Institucional</td>
                <td>Saudação, corpo, despedida; linguagem culta; assunto obrigatório</td>
              </tr>
              <tr>
                <td><strong>Blog</strong></td>
                <td>Jornalística / Pessoal</td>
                <td>Posts em ordem cronológica inversa; comentários; hiperlinks; autoria pessoal</td>
              </tr>
              <tr>
                <td><strong>Tweet / Post</strong></td>
                <td>Digital / Cotidiana</td>
                <td>Brevidade; hashtags; linguagem informal; alto potencial de viralização</td>
              </tr>
              <tr>
                <td><strong>Meme</strong></td>
                <td>Digital / Humorística</td>
                <td>Imagem + texto verbal; humor; crítica social; intertextualidade intensa</td>
              </tr>
              <tr>
                <td><strong>Videoaula</strong></td>
                <td>Educacional / Digital</td>
                <td>Exposição didática em vídeo; linguagem oral planejada; recursos visuais</td>
              </tr>
              <tr>
                <td><strong>Podcast</strong></td>
                <td>Jornalística / Entretenimento</td>
                <td>Áudio seriado; entrevista ou debate; linguagem oral culta ou informal</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="lesson-highlight">
          <h3>Memes e o ENEM</h3>
          <p>
            O meme é um gênero <em>multimodal</em> e <em>intertextual</em> por excelência. Combina
            elementos verbais e não verbais para produzir humor, ironia ou crítica. No ENEM,
            questões sobre memes exigem a leitura integrada da imagem e do texto, bem como a
            identificação da <strong>intertextualidade</strong> e do <strong>efeito de sentido</strong>
            produzido pela justaposição dos elementos.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Instrução e Norma</span>

        <h2>7. Gêneros Instrucionais e Jurídicos</h2>

        <p>
          Os <strong>gêneros instrucionais</strong> têm como finalidade orientar o leitor a executar
          ações em sequência lógica. Já os <strong>gêneros jurídicos</strong> regulam condutas, direitos
          e obrigações com força de lei ou contrato. Ambos compartilham a linguagem objetiva, mas
          diferem em contexto e consequências.
        </p>

        <div className="lesson-grid">
          <div className="lesson-card">
            <span>🍳</span>
            <h3>Receita</h3>
            <p>
              Ingredientes + modo de preparo. Verbos no imperativo ou infinitivo.
              Linguagem direta e sequenciada.
            </p>
          </div>
          <div className="lesson-card">
            <span>📋</span>
            <h3>Manual</h3>
            <p>
              Explica o funcionamento de equipamentos ou sistemas. Usa diagramas,
              numeração de passos e linguagem técnica.
            </p>
          </div>
          <div className="lesson-card">
            <span>💊</span>
            <h3>Bula</h3>
            <p>
              Informa sobre medicamento: composição, indicações, contraindicações,
              posologia. Linguagem técnica com glossário para leigos.
            </p>
          </div>
          <div className="lesson-card">
            <span>📜</span>
            <h3>Edital</h3>
            <p>
              Documento oficial que convoca candidatos ou licitantes. Linguagem
              formal e impessoal; uso de incisos e alíneas.
            </p>
          </div>
          <div className="lesson-card">
            <span>📝</span>
            <h3>Regulamento</h3>
            <p>
              Estabelece regras para grupos ou situações específicas. Proibições
              e permissões; verbos modais (deve, é vedado, poderá).
            </p>
          </div>
          <div className="lesson-card">
            <span>🤝</span>
            <h3>Contrato</h3>
            <p>
              Acordo entre partes com obrigações recíprocas. Cláusulas numeradas;
              linguagem jurídica; assinaturas e testemunhas.
            </p>
          </div>
        </div>

        <div className="math-block">
          <h3>Marcas linguísticas dos gêneros instrucionais</h3>
          <p>
            Verbos no <strong>imperativo</strong> (<em>"adicione", "pressione"</em>) ou
            <strong> infinitivo</strong> (<em>"adicionar", "pressionar"</em>);
            <strong> marcadores de sequência</strong> (<em>"primeiramente", "em seguida", "por fim"</em>);
            ausência de subjetividade; enumerações e listas ordenadas.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Texto Visual</span>

        <h2>8. Multimodalidade</h2>

        <p>
          Um texto <strong>multimodal</strong> é aquele que articula dois ou mais <em>modos semióticos</em>
          para construir sentido: linguagem verbal (escrita ou oral), imagens, cores, tipografia, gestos,
          sons, gráficos e layouts. No mundo contemporâneo, a maioria dos textos é multimodal.
        </p>

        <p>
          A multimodalidade não é mera "decoração": cada modo semiótico contribui para o sentido global
          do texto. Uma imagem pode <em>confirmar, ampliar, contradizer ou ironizar</em> o que o texto
          verbal diz. O ENEM explora justamente essa relação entre os elementos verbais e não verbais.
        </p>

        <figure className="lesson-figure">
          <svg
            viewBox="0 0 680 260"
            width="680"
            height="260"
            aria-label="Diagrama de componentes semióticos de um texto multimodal"
          >
            <rect x="10" y="10" width="660" height="240" rx="12" fill="#f8fafc" stroke="#e2e8f0" strokeWidth="1.5" />
            <text x="340" y="40" textAnchor="middle" fill="#1e293b" fontSize="14" fontWeight="bold">Texto Multimodal</text>

            <rect x="40" y="60" width="130" height="56" rx="8" fill="#dbeafe" />
            <text x="105" y="84" textAnchor="middle" fill="#1e40af" fontSize="12" fontWeight="600">Linguagem</text>
            <text x="105" y="100" textAnchor="middle" fill="#1e40af" fontSize="11">Verbal</text>
            <text x="105" y="114" textAnchor="middle" fill="#3b82f6" fontSize="10">(palavras, frases)</text>

            <rect x="200" y="60" width="130" height="56" rx="8" fill="#dcfce7" />
            <text x="265" y="84" textAnchor="middle" fill="#166534" fontSize="12" fontWeight="600">Imagem</text>
            <text x="265" y="100" textAnchor="middle" fill="#166534" fontSize="11">Visual</text>
            <text x="265" y="114" textAnchor="middle" fill="#16a34a" fontSize="10">(fotos, ilustrações)</text>

            <rect x="360" y="60" width="130" height="56" rx="8" fill="#fef9c3" />
            <text x="425" y="84" textAnchor="middle" fill="#92400e" fontSize="12" fontWeight="600">Tipografia</text>
            <text x="425" y="100" textAnchor="middle" fill="#92400e" fontSize="11">e Layout</text>
            <text x="425" y="114" textAnchor="middle" fill="#b45309" fontSize="10">(cor, fonte, espaço)</text>

            <rect x="520" y="60" width="130" height="56" rx="8" fill="#fce7f3" />
            <text x="585" y="84" textAnchor="middle" fill="#9d174d" fontSize="12" fontWeight="600">Elementos</text>
            <text x="585" y="100" textAnchor="middle" fill="#9d174d" fontSize="11">Sonoros</text>
            <text x="585" y="114" textAnchor="middle" fill="#db2777" fontSize="10">(áudio, música)</text>

            <line x1="340" y1="150" x2="105" y2="150" stroke="#94a3b8" strokeWidth="1.5" />
            <line x1="340" y1="150" x2="265" y2="150" stroke="#94a3b8" strokeWidth="1.5" />
            <line x1="340" y1="150" x2="425" y2="150" stroke="#94a3b8" strokeWidth="1.5" />
            <line x1="340" y1="150" x2="585" y2="150" stroke="#94a3b8" strokeWidth="1.5" />

            <line x1="105" y1="116" x2="105" y2="150" stroke="#94a3b8" strokeWidth="1.5" />
            <line x1="265" y1="116" x2="265" y2="150" stroke="#94a3b8" strokeWidth="1.5" />
            <line x1="425" y1="116" x2="425" y2="150" stroke="#94a3b8" strokeWidth="1.5" />
            <line x1="585" y1="116" x2="585" y2="150" stroke="#94a3b8" strokeWidth="1.5" />

            <ellipse cx="340" cy="150" rx="50" ry="30" fill="#6366f1" />
            <text x="340" y="145" textAnchor="middle" fill="white" fontSize="11" fontWeight="bold">SENTIDO</text>
            <text x="340" y="162" textAnchor="middle" fill="white" fontSize="10">INTEGRADO</text>

            <text x="340" y="215" textAnchor="middle" fill="#475569" fontSize="11">
              Exemplos: anúncio publicitário, infográfico, meme, capa de revista, história em quadrinhos
            </text>
          </svg>
          <figcaption>Os diferentes modos semióticos articulam-se para construir o sentido do texto multimodal.</figcaption>
        </figure>

        <div className="lesson-highlight">
          <h3>Como o ENEM testa multimodalidade</h3>
          <p>
            Questões de multimodalidade pedem: (a) identificar o <em>efeito de sentido</em> produzido pela
            articulação entre imagem e texto; (b) reconhecer como a <em>diagramação e a tipografia</em>
            constroem significado; (c) analisar como a imagem <em>reforça, amplia ou contradiz</em> o texto
            verbal; (d) reconhecer recursos como ironia visual e humor gerado pelo contraste entre os modos.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Conceito Avançado</span>

        <h2>9. Suporte vs. Gênero</h2>

        <p>
          O <strong>suporte</strong> é o "veículo" ou "portador" físico/digital que carrega o texto ao
          leitor. Ele não é o gênero, mas influencia profundamente a leitura e as expectativas do público.
          Marcuschi (2003) define o suporte como <em>"um locus físico ou virtual com formato específico
          que serve de base ou ambiente de fixação do gênero materializado como texto"</em>.
        </p>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Suporte</th>
                <th>Gêneros que pode carregar</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Jornal impresso</strong></td>
                <td>Notícia, reportagem, editorial, crônica, charge, horóscopo</td>
              </tr>
              <tr>
                <td><strong>Muro / Parede</strong></td>
                <td>Cartaz, grafite, pichação</td>
              </tr>
              <tr>
                <td><strong>Embalagem de produto</strong></td>
                <td>Bula (simplificada), rótulo, instruções de uso</td>
              </tr>
              <tr>
                <td><strong>Aplicativo de mensagem</strong></td>
                <td>Conversa informal, áudios, memes, stickers</td>
              </tr>
              <tr>
                <td><strong>Livro didático</strong></td>
                <td>Verbete, exercício, infográfico, texto expositivo</td>
              </tr>
              <tr>
                <td><strong>Site de notícias</strong></td>
                <td>Notícia, reportagem multimídia, blog, comentários</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="lesson-highlight">
          <h3>Por que a distinção importa?</h3>
          <p>
            O suporte impacta o <em>projeto gráfico</em>, a <em>extensão</em> e o <em>registro</em> do gênero.
            Uma receita num livro de gastronomia tem diagramação, fotos e linguagem diferentes de uma receita
            num aplicativo de celular — mas ambas são o mesmo gênero. O ENEM pode perguntar se o candidato
            identifica o suporte correto de um texto.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Hibridismo</span>

        <h2>10. Intergenericidade</h2>

        <p>
          A <strong>intergenericidade</strong> (ou hibridismo de gêneros) ocorre quando um texto assume
          a <em>forma</em> de um gênero, mas exerce a <em>função</em> de outro — ou quando dois gêneros
          se mesclam de forma criativa para produzir efeitos específicos. Esse fenômeno é muito explorado
          na publicidade, na literatura e no humor.
        </p>

        <div className="math-block">
          <h3>Exemplos de intergenericidade</h3>
          <p>
            <strong>Anúncio em forma de receita:</strong> a publicidade assume o formato de uma receita
            culinária (lista de ingredientes e modo de preparo), mas o objetivo real é vender um produto.
            O leitor reconhece a forma da receita, mas a função é claramente persuasiva.
          </p>
          <p>
            <strong>Poema em forma de bula:</strong> o poeta usa a estrutura visual e o vocabulário técnico
            de uma bula de medicamento para tratar de um tema poético (como amor ou solidão), criando
            estranhamento e ironia.
          </p>
          <p>
            <strong>Fake news em forma de notícia:</strong> um texto desinformativo imita a estrutura e o
            estilo da notícia jornalística (lead, fontes citadas, linguagem objetiva) para ganhar
            credibilidade, embora seu conteúdo seja falso ou distorcido.
          </p>
        </div>

        <div className="lesson-highlight">
          <h3>Como identificar intergenericidade no ENEM</h3>
          <p>
            Pergunte-se: a <strong>forma</strong> do texto corresponde à sua <strong>função</strong>? Se a
            estrutura visual pertence a um gênero, mas o propósito comunicativo pertence a outro, há
            intergenericidade. A pegadinha do ENEM costuma estar justamente aí: o texto
            <em> parece</em> uma coisa, mas <em>faz</em> outra.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Síntese</span>

        <h2>11. Mapa Mental: Gêneros Textuais no ENEM</h2>

        <p>
          Para gabaritar questões sobre gêneros textuais no ENEM, siga este roteiro mental sempre
          que encontrar um texto na prova:
        </p>

        <div className="lesson-grid">
          <div className="lesson-card">
            <span>🔍</span>
            <h3>Identifique a esfera</h3>
            <p>Jornalística? Literária? Publicitária? Digital? A esfera já orienta as expectativas de leitura.</p>
          </div>
          <div className="lesson-card">
            <span>🎯</span>
            <h3>Reconheça a função</h3>
            <p>Informar, persuadir, instruir, entreter, regular? A função comunicativa é a chave.</p>
          </div>
          <div className="lesson-card">
            <span>🔤</span>
            <h3>Observe os recursos</h3>
            <p>Que recursos linguísticos, visuais e tipográficos o texto usa? Para que efeito?</p>
          </div>
          <div className="lesson-card">
            <span>🤔</span>
            <h3>Verifique hibridismo</h3>
            <p>A forma e a função coincidem? Há intergenericidade ou mistura de tipos textuais?</p>
          </div>
          <div className="lesson-card">
            <span>📍</span>
            <h3>Pense no suporte</h3>
            <p>Onde esse texto circula? O suporte influencia a leitura e as convenções do gênero.</p>
          </div>
          <div className="lesson-card">
            <span>👁️</span>
            <h3>Leia o não verbal</h3>
            <p>Imagens, cores, diagramação e tipografia também constroem sentido. Integre tudo.</p>
          </div>
        </div>

        <div className="lesson-highlight">
          <h3>Resumo das distinções mais cobradas</h3>
          <ul>
            <li><strong>Notícia</strong> (fato pontual, objetiva) x <strong>reportagem</strong> (aprofundamento, contextualização)</li>
            <li><strong>Editorial</strong> (posição institucional, sem assinatura) x <strong>artigo de opinião</strong> (autor identificado)</li>
            <li><strong>Crônica jornalística</strong> (estilo literário no jornal) x <strong>crônica literária</strong> (publicada em livro)</li>
            <li><strong>Gênero textual</strong> (forma concreta e social) x <strong>tipo textual</strong> (estrutura abstrata dominante)</li>
            <li><strong>Gênero</strong> (o texto em si) x <strong>suporte</strong> (onde o texto circula)</li>
            <li><strong>Intergenericidade</strong>: forma de um gênero + função de outro</li>
          </ul>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Exercícios Resolvidos</span>

        <h2>Questões Comentadas</h2>

        <Exercise
          level="Básico"
          title="1. Conceito bakhtiniano de gênero"
          statement={
            <p>
              De acordo com Mikhail Bakhtin, os gêneros textuais são definidos como "tipos relativamente
              estáveis de enunciados". O adjetivo <strong>relativamente</strong> indica que os gêneros:
            </p>
          }
          options={[
            {
              letter: "a",
              text: "são formas fixas e imutáveis que não admitem variações históricas ou culturais.",
            },
            {
              letter: "b",
              text: "se adaptam às condições sociais, históricas e tecnológicas de produção e circulação, sem serem completamente livres ou completamente rígidos.",
              correct: true,
            },
            {
              letter: "c",
              text: "existem apenas na linguagem literária, não se aplicando a textos cotidianos.",
            },
            {
              letter: "d",
              text: "são definidos exclusivamente pela estrutura gramatical das frases que os compõem.",
            },
          ]}
          resolution={
            <p>
              Bakhtin concebe os gêneros como "relativamente estáveis": eles possuem traços reconhecíveis
              (conteúdo temático, estilo, construção composicional), mas se transformam ao longo da história
              e se adaptam a novas situações comunicativas — como ocorreu com o surgimento dos gêneros
              digitais. O adjetivo "relativamente" recusa tanto o engessamento absoluto quanto a
              instabilidade total.
            </p>
          }
        />

        <Exercise
          level="Intermediário"
          title="2. Notícia, reportagem e editorial"
          statement={
            <p>
              Analise as afirmações sobre gêneros jornalísticos e marque a alternativa <strong>correta</strong>:
            </p>
          }
          options={[
            {
              letter: "a",
              text: "O editorial é assinado por um jornalista identificado e exprime apenas sua opinião pessoal.",
            },
            {
              letter: "b",
              text: "A notícia aprofunda um tema por meio de entrevistas e dados, enquanto a reportagem relata fatos pontuais de forma objetiva.",
            },
            {
              letter: "c",
              text: "A reportagem contextualiza e interpreta um tema com maior profundidade do que a notícia, que relata fatos recentes de forma mais direta.",
              correct: true,
            },
            {
              letter: "d",
              text: "A carta do leitor é produzida pelo próprio veículo jornalístico para expressar sua posição institucional.",
            },
          ]}
          resolution={
            <p>
              A <strong>notícia</strong> responde objetivamente às perguntas básicas (quem, o quê, quando,
              onde, como, por quê) sobre um fato recente, usando a estrutura da pirâmide invertida. A
              <strong> reportagem</strong> parte de um tema ou evento e o aprofunda com entrevistas,
              dados, análises e múltiplas perspectivas. O <strong>editorial</strong> é institucional e
              não assinado. A <strong>carta do leitor</strong> é produzida pelo público leitor.
            </p>
          }
        />

        <Exercise
          level="Avançado"
          title="3. Intergenericidade e efeito de sentido"
          statement={
            <p>
              Um anúncio publicitário de um suplemento vitamínico é apresentado com o formato visual
              de uma bula de remédio: seções como "indicações", "contraindicações", "posologia" e
              "composição", escritas em linguagem técnica. O recurso utilizado nesse texto é a:
            </p>
          }
          options={[
            {
              letter: "a",
              text: "intertextualidade temática, pois o texto aborda o mesmo assunto de uma bula real.",
            },
            {
              letter: "b",
              text: "tipologia injuntiva, já que o texto orienta o consumidor a tomar o suplemento.",
            },
            {
              letter: "c",
              text: "intergenericidade, pois o texto assume a forma da bula (gênero instrucional-jurídico) para exercer a função persuasiva do anúncio publicitário, conferindo credibilidade científica ao produto.",
              correct: true,
            },
            {
              letter: "d",
              text: "multimodalidade, pois o texto combina imagens e linguagem verbal em diferentes espaços da página.",
            },
          ]}
          resolution={
            <p>
              O fenômeno descrito é a <strong>intergenericidade</strong>: o texto veste a forma de um
              gênero (bula farmacêutica) para cumprir a função de outro (anúncio publicitário). O efeito
              buscado é a <em>credibilidade científica</em>: ao imitar a estrutura técnica da bula, o
              anúncio sugere que o produto tem respaldo médico e científico, tornando a mensagem mais
              persuasiva. A multimodalidade pode estar presente, mas não é o recurso principal
              explorado pela questão.
            </p>
          }
        />

        <Exercise
          level="Contextualizado"
          title="4. Gênero digital e multimodalidade"
          statement={
            <p>
              Uma imagem amplamente compartilhada nas redes sociais mostra a foto de um político
              fazendo uma careta, acompanhada do texto: <em>"Quando percebe que vai ter que explicar
              o orçamento de novo"</em>. O gênero textual desse material é o <strong>meme</strong>. Assinale
              a afirmação que melhor descreve as características desse gênero:
            </p>
          }
          options={[
            {
              letter: "a",
              text: "O meme é um gênero da esfera jornalística, pois circula em veículos de comunicação de massa e informa sobre eventos políticos.",
            },
            {
              letter: "b",
              text: "O meme é um gênero instrucional, pois orienta o leitor sobre como agir diante de situações políticas.",
            },
            {
              letter: "c",
              text: "O meme é um gênero digital multimodal que articula imagem e texto verbal para produzir humor e crítica social, com alto potencial de viralização e dependência da intertextualidade e do contexto cultural compartilhado.",
              correct: true,
            },
            {
              letter: "d",
              text: "O meme é um gênero literário, pois utiliza linguagem conotativa e figuras de linguagem para criar efeitos expressivos.",
            },
          ]}
          resolution={
            <p>
              O <strong>meme</strong> é um gênero da <em>esfera digital</em> que combina elementos
              multimodais (imagem + texto verbal) para produzir humor, ironia e crítica. Sua eficácia
              depende do <em>contexto cultural compartilhado</em> entre emissor e receptor: o humor só
              funciona se o leitor conhecer a situação política referenciada. O meme circula em plataformas
              digitais (redes sociais, aplicativos de mensagem) e tem alto potencial de viralização,
              característica estrutural do gênero. Não é jornalístico (não informa de forma objetiva),
              instrucional (não orienta ações) nem literário no sentido estrito.
            </p>
          }
        />

        <Exercise
          level="Contextualizado"
          title="5. Suporte, gênero e esfera de circulação"
          statement={
            <p>
              Uma professora encontra na internet um texto sobre alimentação saudável. O texto está
              organizado em tópicos curtos, tem hashtags no final (#saúde #bemestar), usa emojis,
              linguagem informal e um botão de "curtir" ao lado. Ela reconhece que, apesar de abordar
              um tema científico, esse texto pertence à esfera digital, não à científica. O elemento
              que mais evidencia essa classificação é:
            </p>
          }
          options={[
            {
              letter: "a",
              text: "o tema abordado, pois textos científicos nunca tratam de alimentação em linguagem informal.",
            },
            {
              letter: "b",
              text: "o suporte digital e as marcas do gênero post (hashtags, emojis, informalidade, interatividade), que revelam uma esfera de circulação cotidiana-digital, não acadêmica.",
              correct: true,
            },
            {
              letter: "c",
              text: "a ausência de referências bibliográficas, que é o único critério para distinguir textos científicos de não científicos.",
            },
            {
              letter: "d",
              text: "o uso de tópicos, recurso exclusivo dos gêneros digitais e proibido em textos científicos.",
            },
          ]}
          resolution={
            <p>
              A classificação do gênero e de sua esfera de circulação não depende apenas do tema, mas
              do conjunto de marcas textuais e do <strong>suporte</strong>. Hashtags, emojis, botão de
              "curtir" e linguagem informal são marcas do gênero <em>post</em> nas redes sociais — esfera
              digital/cotidiana. Um artigo científico sobre alimentação teria linguagem técnica formal,
              referências, abstract, metodologia e circularia em periódicos acadêmicos. O mesmo tema
              pode ser tratado por gêneros de esferas completamente diferentes, com funções, registros
              e suportes distintos.
            </p>
          }
        />
      </section>
    </article>
  );
}
