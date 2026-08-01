"use client";
import { ExerciseCard as Exercise } from "@/lib/notaon/components/ExerciseCard";
export default function Cap05Page() {
  return (
    <article className="lesson-landing">

      <section className="lesson-hero">
        <div>
          <span className="lesson-badge">Espanhol • Capítulo 05</span>
          <h1>Alfabeto, pronúncia e acentuação gráfica</h1>
          <p>
            O sistema gráfico e fonológico do Espanhol é, em geral, muito mais regular que o do Português — cada letra corresponde a um som de forma mais previsível, e as regras de acentuação gráfica seguem um sistema lógico e consistente. Compreender esses sistemas não é apenas uma questão de pronúncia (que não é avaliada diretamente no ENEM), mas uma ferramenta de compreensão leitora: a acentuação gráfica em espanhol distingue pares de palavras com significados completamente diferentes (<em>él/el, sí/si, tú/tu</em>), e esses pares aparecem constantemente nos textos. Dominar a lógica do acento espanhol permite ao leitor interpretar com mais precisão frases que, de outra forma, poderiam ser ambíguas.
          </p>
        </div>
      </section>

      {/* ── SEÇÃO 1 ── */}
      <section className="lesson-section">
        <span className="section-kicker">O Alfabeto</span>
        <h2>1. O alfabeto espanhol — 27 letras e o "ñ"</h2>
        <p>
          O alfabeto espanhol moderno tem <strong>27 letras</strong>, uma a mais que o Português: a letra <strong>ñ</strong> (ene, pronunciada "énie"), que representa o som nasal palatal [ɲ] — o mesmo som do "nh" em Português (como em "banho"). A Real Academia Española (RAE), em 1994, removeu do alfabeto oficial o "ch" (che) e o "ll" (elle), que eram tratados como letras independentes, tornando o alfabeto espanhol totalmente compatível com o sistema latino internacional. Para fins práticos de leitura, o que importa reconhecer são as letras que se comportam de forma diferente do Português.
        </p>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Letra</th>
                <th>Nome em Espanhol</th>
                <th>Som principal</th>
                <th>Diferença do Português</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>ñ</strong></td>
                <td>ene</td>
                <td>[ɲ] como "nh" em banho</td>
                <td>Existe apenas em Espanhol (= "nh" em PT)</td>
              </tr>
              <tr>
                <td><strong>h</strong></td>
                <td>hache</td>
                <td>Mudo (sem som)</td>
                <td>Em PT o "h" é mudo no início; em ES sempre mudo</td>
              </tr>
              <tr>
                <td><strong>j</strong></td>
                <td>jota</td>
                <td>[x] como "rr" forte / "j" fricativo</td>
                <td>Som muito mais forte que o "j" do PT</td>
              </tr>
              <tr>
                <td><strong>ll</strong></td>
                <td>elle</td>
                <td>[j] ou [ʎ] (varia por região)</td>
                <td>Na maioria das regiões soa como "i" ou "lh"</td>
              </tr>
              <tr>
                <td><strong>rr</strong></td>
                <td>erre doble</td>
                <td>[r] vibrante múltiplo (forte)</td>
                <td>Igual ao "rr" no PT (carro, terra)</td>
              </tr>
              <tr>
                <td><strong>v</strong></td>
                <td>uve</td>
                <td>[b] igual ao "b"</td>
                <td>Em ES, "b" e "v" têm o mesmo som [b]</td>
              </tr>
              <tr>
                <td><strong>z</strong></td>
                <td>zeta</td>
                <td>[θ] (castelhano) ou [s] (América)</td>
                <td>Na Espanha soa como o "th" do inglês "think"</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="lesson-highlight">
          <strong>O "h" mudo em espanhol:</strong> Diferentemente do Português, onde o "h" é apenas uma herança gráfica (herança, hoje), em Espanhol o "h" NUNCA tem som em nenhuma posição. Portanto, <em>hablar</em> soa como "ablar", <em>hora</em> soa como "ora", <em>hijo</em> soa como "ixo". Isso é importante para leitura em voz alta mas não afeta a compreensão escrita.
        </div>
      </section>

      {/* ── SEÇÃO 2 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Sons Específicos</span>
        <h2>2. Sons específicos do Espanhol que diferem do Português</h2>
        <p>
          Para fins de leitura no ENEM, a pronúncia não é avaliada diretamente. No entanto, entender os padrões sonoros do Espanhol ajuda a reconhecer palavras, fazer associações com o Português, e compreender a lógica da escrita. Os sons que mais diferem entre Espanhol e Português são: o <em>c</em> antes de <em>e/i</em> (no espanhol peninsular soa como [θ], mas no latino-americano soa como [s]); o <em>ll</em> (soa como [j] em quase toda a América hispânica); o <em>j</em> e o <em>g</em> antes de <em>e/i</em> (som gutural forte [x]); e o <em>rr</em> e o <em>r</em> em início de palavra (vibrante forte).
        </p>

        <figure className="lesson-figure">
          <svg viewBox="0 0 700 220" width="700" height="220" aria-label="Diagrama comparando a pronúncia de letras em espanhol peninsular e latino-americano">
            <rect x="0" y="0" width="700" height="220" rx="14" fill="#f8fafc" />
            <text x="350" y="26" textAnchor="middle" fill="#1f2937" fontSize="14" fontWeight="bold">Variação de Pronúncia: Espanhol Peninsular × Latino-americano</text>
            {/* Cabeçalhos */}
            <rect x="20" y="42" width="200" height="32" rx="6" fill="#dbeafe" />
            <text x="120" y="62" textAnchor="middle" fill="#1e40af" fontSize="12" fontWeight="bold">Letra/Dígrafo</text>
            <rect x="240" y="42" width="200" height="32" rx="6" fill="#d1fae5" />
            <text x="340" y="62" textAnchor="middle" fill="#065f46" fontSize="12" fontWeight="bold">Espanhol Peninsular</text>
            <rect x="460" y="42" width="220" height="32" rx="6" fill="#fef3c7" />
            <text x="570" y="62" textAnchor="middle" fill="#92400e" fontSize="12" fontWeight="bold">Latino-americano</text>
            {/* Linha 1 */}
            <rect x="20" y="82" width="200" height="26" rx="4" fill="#f1f5f9" />
            <text x="120" y="99" textAnchor="middle" fill="#334155" fontSize="12"><tspan fontWeight="bold">c</tspan> + e/i (ej: "ciudad")</text>
            <rect x="240" y="82" width="200" height="26" rx="4" fill="#f1f5f9" />
            <text x="340" y="99" textAnchor="middle" fill="#334155" fontSize="11">[θ] = "th" inglês (think)</text>
            <rect x="460" y="82" width="220" height="26" rx="4" fill="#f1f5f9" />
            <text x="570" y="99" textAnchor="middle" fill="#334155" fontSize="11">[s] = "s" simples</text>
            {/* Linha 2 */}
            <rect x="20" y="116" width="200" height="26" rx="4" fill="#f8fafc" />
            <text x="120" y="133" textAnchor="middle" fill="#334155" fontSize="12"><tspan fontWeight="bold">ll</tspan> (ej: "llegar")</text>
            <rect x="240" y="116" width="200" height="26" rx="4" fill="#f8fafc" />
            <text x="340" y="133" textAnchor="middle" fill="#334155" fontSize="11">[ʎ] ou [j] (yeísmo)</text>
            <rect x="460" y="116" width="220" height="26" rx="4" fill="#f8fafc" />
            <text x="570" y="133" textAnchor="middle" fill="#334155" fontSize="11">[j] = "i" (yeísmo generalizado)</text>
            {/* Linha 3 */}
            <rect x="20" y="150" width="200" height="26" rx="4" fill="#f1f5f9" />
            <text x="120" y="167" textAnchor="middle" fill="#334155" fontSize="12"><tspan fontWeight="bold">j / g</tspan> + e/i (ej: "gente")</text>
            <rect x="240" y="150" width="200" height="26" rx="4" fill="#f1f5f9" />
            <text x="340" y="167" textAnchor="middle" fill="#334155" fontSize="11">[x] = fricativa velar forte</text>
            <rect x="460" y="150" width="220" height="26" rx="4" fill="#f1f5f9" />
            <text x="570" y="167" textAnchor="middle" fill="#334155" fontSize="11">[x] / [h] mais suave</text>
            {/* Linha 4 */}
            <rect x="20" y="184" width="200" height="26" rx="4" fill="#f8fafc" />
            <text x="120" y="201" textAnchor="middle" fill="#334155" fontSize="12"><tspan fontWeight="bold">rr</tspan> (ej: "perro")</text>
            <rect x="240" y="184" width="200" height="26" rx="4" fill="#f8fafc" />
            <text x="340" y="201" textAnchor="middle" fill="#334155" fontSize="11">[r] vibrante múltiplo</text>
            <rect x="460" y="184" width="220" height="26" rx="4" fill="#f8fafc" />
            <text x="570" y="201" textAnchor="middle" fill="#334155" fontSize="11">[r] vibrante múltiplo (igual)</text>
          </svg>
          <figcaption>Principais diferenças de pronúncia entre Espanhol Peninsular (Espanha) e Latino-americano — relevante para leitura em voz alta, não cobrado diretamente no ENEM.</figcaption>
        </figure>
      </section>

      {/* ── SEÇÃO 3 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Regras de Acentuação</span>
        <h2>3. As regras de acentuação gráfica em espanhol</h2>
        <p>
          O sistema de acentuação do Espanhol é, em princípio, mais lógico e previsível que o do Português. A regra fundamental é: toda palavra em espanhol tem uma sílaba tônica (a mais forte), e a acentuação gráfica (o acento escrito) existe apenas quando a pronúncia natural da palavra <strong>viola as regras gerais</strong>. As regras gerais definem onde a sílaba tônica "deveria" estar; quando a palavra não segue essas regras, escreve-se o acento gráfico para indicar a exceção. O sistema se organiza em quatro categorias: palabras agudas, llanas/graves, esdrújulas e sobreesdrújulas.
        </p>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Categoria</th>
                <th>Sílaba tônica</th>
                <th>Regra do acento</th>
                <th>Exemplos</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Agudas (oxítonas)</strong></td>
                <td>Última sílaba</td>
                <td>Acento se terminar em vogal, -n ou -s</td>
                <td><em>café, canción, francés, hablar (sem acento)</em></td>
              </tr>
              <tr>
                <td><strong>Llanas/Graves (paroxítonas)</strong></td>
                <td>Penúltima sílaba</td>
                <td>Acento se NÃO terminar em vogal, -n ou -s</td>
                <td><em>árbol, fácil, cárcel; casa (sem acento)</em></td>
              </tr>
              <tr>
                <td><strong>Esdrújulas (proparoxítonas)</strong></td>
                <td>Antepenúltima sílaba</td>
                <td>SEMPRE levam acento gráfico</td>
                <td><em>médico, música, lógico, público</em></td>
              </tr>
              <tr>
                <td><strong>Sobreesdrújulas</strong></td>
                <td>Antes da antepenúltima</td>
                <td>SEMPRE levam acento gráfico</td>
                <td><em>dígamelo, cómpratelo</em></td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="lesson-highlight">
          <strong>Dica prática para o ENEM:</strong> A maioria das palavras em espanhol são llanas (paroxítonas) terminadas em vogal ou -n/-s, portanto <strong>não levam acento gráfico</strong>. Quando você vê um acento em espanhol, ele está ali porque a palavra viola essa expectativa — e isso geralmente também altera ou distingue o significado (como nos pares diacríticos). Preste atenção especial às esdrújulas — elas sempre têm acento e são muito comuns: <em>médico, música, público, técnica, política, sílaba, página</em>.
        </div>
      </section>

      {/* ── SEÇÃO 4 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Acento Diacrítico</span>
        <h2>4. O acento diacrítico — distinguindo palavras idênticas</h2>
        <p>
          O acento diacrítico é usado em espanhol para distinguir pares de palavras que se escrevem de forma idêntica mas têm categorias gramaticais e significados diferentes. Diferentemente do acento prosódico (que indica a sílaba tônica), o acento diacrítico não muda a pronúncia — apenas ajuda a identificar o significado correto na leitura. Esses pares são especialmente importantes para o ENEM, pois textos em espanhol os usam constantemente e uma confusão de interpretação pode mudar completamente o sentido de uma frase.
        </p>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Com acento</th>
                <th>Significado</th>
                <th>Sem acento</th>
                <th>Significado</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><em>él</em></td>
                <td>pronome pessoal: ele</td>
                <td><em>el</em></td>
                <td>artigo definido: o</td>
              </tr>
              <tr>
                <td><em>sí</em></td>
                <td>afirmação: sim; pronome reflexivo</td>
                <td><em>si</em></td>
                <td>conjunção condicional: se</td>
              </tr>
              <tr>
                <td><em>más</em></td>
                <td>advérbio de quantidade: mais</td>
                <td><em>mas</em></td>
                <td>conjunção adversativa: mas</td>
              </tr>
              <tr>
                <td><em>tú</em></td>
                <td>pronome pessoal: tu/você</td>
                <td><em>tu</em></td>
                <td>pronome possessivo: teu/sua</td>
              </tr>
              <tr>
                <td><em>mí</em></td>
                <td>pronome preposicional: mim</td>
                <td><em>mi</em></td>
                <td>pronome possessivo: meu/minha</td>
              </tr>
              <tr>
                <td><em>sé</em></td>
                <td>verbo saber (eu sei) ou ser (seja imperativo)</td>
                <td><em>se</em></td>
                <td>pronome reflexivo: se</td>
              </tr>
              <tr>
                <td><em>té</em></td>
                <td>chá (a bebida)</td>
                <td><em>te</em></td>
                <td>pronome pessoal: te</td>
              </tr>
              <tr>
                <td><em>dé</em></td>
                <td>verbo dar (que dê)</td>
                <td><em>de</em></td>
                <td>preposição: de</td>
              </tr>
            </tbody>
          </table>
        </div>

        <figure className="lesson-figure">
          <svg viewBox="0 0 700 200" width="700" height="200" aria-label="Exemplos visuais de pares diacríticos em espanhol">
            <rect x="0" y="0" width="700" height="200" rx="14" fill="#fce7f3" />
            <text x="350" y="26" textAnchor="middle" fill="#9d174d" fontSize="14" fontWeight="bold">Pares Diacríticos — Acento Muda o Significado</text>
            {/* él vs el */}
            <rect x="20" y="48" width="200" height="130" rx="8" fill="#fdf2f8" />
            <text x="120" y="72" textAnchor="middle" fill="#9d174d" fontSize="22" fontWeight="bold">él / el</text>
            <text x="120" y="98" textAnchor="middle" fill="#9d174d" fontSize="12" fontWeight="bold">él = pronome</text>
            <text x="120" y="115" textAnchor="middle" fill="#9d174d" fontSize="11">"él habla" = ele fala</text>
            <text x="120" y="135" textAnchor="middle" fill="#9d174d" fontSize="12" fontWeight="bold">el = artigo</text>
            <text x="120" y="152" textAnchor="middle" fill="#9d174d" fontSize="11">"el libro" = o livro</text>
            {/* sí vs si */}
            <rect x="240" y="48" width="220" height="130" rx="8" fill="#fdf2f8" />
            <text x="350" y="72" textAnchor="middle" fill="#9d174d" fontSize="22" fontWeight="bold">sí / si</text>
            <text x="350" y="98" textAnchor="middle" fill="#9d174d" fontSize="12" fontWeight="bold">sí = sim / pronome</text>
            <text x="350" y="115" textAnchor="middle" fill="#9d174d" fontSize="11">"¡Sí!" = Sim!</text>
            <text x="350" y="135" textAnchor="middle" fill="#9d174d" fontSize="12" fontWeight="bold">si = se</text>
            <text x="350" y="152" textAnchor="middle" fill="#9d174d" fontSize="11">"si llueve" = se chover</text>
            {/* tú vs tu */}
            <rect x="480" y="48" width="200" height="130" rx="8" fill="#fdf2f8" />
            <text x="580" y="72" textAnchor="middle" fill="#9d174d" fontSize="22" fontWeight="bold">tú / tu</text>
            <text x="580" y="98" textAnchor="middle" fill="#9d174d" fontSize="12" fontWeight="bold">tú = pronome sujeito</text>
            <text x="580" y="115" textAnchor="middle" fill="#9d174d" fontSize="11">"tú eres" = tu és</text>
            <text x="580" y="135" textAnchor="middle" fill="#9d174d" fontSize="12" fontWeight="bold">tu = possessivo</text>
            <text x="580" y="152" textAnchor="middle" fill="#9d174d" fontSize="11">"tu libro" = teu livro</text>
          </svg>
          <figcaption>Os três pares diacríticos mais frequentes em textos em espanhol — a distinção pelo acento é fundamental para a interpretação correta das frases.</figcaption>
        </figure>
      </section>

      {/* ── SEÇÃO 5 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Interrogativos e Exclamativos</span>
        <h2>5. Acentos em interrogativos e exclamativos</h2>
        <p>
          Em espanhol, as palavras interrogativas e exclamativas <strong>sempre levam acento gráfico</strong>, independentemente de aparecerem em frases diretas (com ¿? ou ¡!) ou indiretas (sem essas pontuações). Esta é uma diferença fundamental em relação ao Português, onde apenas nas orações interrogativas diretas os pronomes relativos podem ser diferenciados. Em espanhol, a presença ou ausência do acento nas palavras <em>qué/que, quién/quien, cuál/cual, cómo/como, dónde/donde, cuándo/cuando, cuánto/cuanto, por qué/porque</em> é um indicador crucial do tipo de oração.
        </p>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Com acento (interrogativo/exclamativo)</th>
                <th>Significado</th>
                <th>Sem acento (relativo/conjunção)</th>
                <th>Significado</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><em>¿qué?</em> / <em>¡qué!</em></td>
                <td>interrogativo/exclamativo: que?/que!</td>
                <td><em>que</em></td>
                <td>pronome relativo ou conjunção: que</td>
              </tr>
              <tr>
                <td><em>¿quién?</em></td>
                <td>interrogativo: quem?</td>
                <td><em>quien</em></td>
                <td>pronome relativo: quem</td>
              </tr>
              <tr>
                <td><em>¿cómo?</em></td>
                <td>interrogativo: como?</td>
                <td><em>como</em></td>
                <td>conjunção/advérbio comparativo: como</td>
              </tr>
              <tr>
                <td><em>¿dónde?</em></td>
                <td>interrogativo: onde?</td>
                <td><em>donde</em></td>
                <td>advérbio relativo: onde</td>
              </tr>
              <tr>
                <td><em>¿cuándo?</em></td>
                <td>interrogativo: quando?</td>
                <td><em>cuando</em></td>
                <td>conjunção: quando</td>
              </tr>
              <tr>
                <td><em>¿por qué?</em></td>
                <td>interrogativo: por quê?</td>
                <td><em>porque</em></td>
                <td>conjunção causal: porque</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="lesson-highlight">
          <strong>Casos de interrogativa indireta (sem ¿? mas com acento):</strong><br />
          • <em>"No sé dónde está"</em> = Não sei onde está (indireta: <em>dónde</em> com acento)<br />
          • <em>"Me preguntó qué quería"</em> = Perguntou-me o que eu queria (<em>qué</em> com acento)<br />
          • <em>"Depende de cómo lo hagas"</em> = Depende de como você fizer (<em>cómo</em> com acento)<br />
          Nesses casos, a ausência do ¿? pode enganar o candidato, mas o acento já sinaliza o caráter interrogativo/subordinado.
        </div>
      </section>

      {/* ── SEÇÃO 6 ── */}
      <section className="lesson-section">
        <span className="section-kicker">O Ñ e Sons Especiais</span>
        <h2>6. O ñ e outros sons específicos do espanhol</h2>
        <p>
          A letra <strong>ñ</strong> é o símbolo mais icônico do Espanhol — ela aparece no próprio nome do idioma (<em>español</em>) e representa um som que em Português é escrito como "nh". Embora seja muito importante culturalmente, para fins de leitura e compreensão no ENEM, o importante é reconhecer as palavras com ñ e sua relação com formas similares no Português. A ñ aparece em palavras cotidianas muito frequentes em textos hispânicos.
        </p>

        <div className="lesson-grid">
          <div className="lesson-card">
            <span>Ñ</span>
            <h3>ñ = "nh" em Português</h3>
            <p><em>año</em>=ano, <em>señor</em>=senhor, <em>niño</em>=menino (criança), <em>español</em>=espanhol, <em>mañana</em>=amanhã/manhã, <em>pequeño</em>=pequeno.</p>
          </div>
          <div className="lesson-card">
            <span>RR</span>
            <h3>rr = "rr" em Português</h3>
            <p><em>perro</em>=cachorro, <em>tierra</em>=terra, <em>correr</em>=correr, <em>carro</em>=carro. Idêntico ao "rr" do Português em "carro", "terra".</p>
          </div>
          <div className="lesson-card">
            <span>LL</span>
            <h3>ll = "lh" ou "i"</h3>
            <p><em>llegar</em>=chegar, <em>llamar</em>=chamar, <em>lluvia</em>=chuva, <em>lleno</em>=cheio. Na América Latina soa como "i" (yeísmo).</p>
          </div>
          <div className="lesson-card">
            <span>GU</span>
            <h3>gu/qu — a regra do u mudo</h3>
            <p><em>guerra</em>=guerra, <em>guitarra</em>=guitarra (u mudo). <em>guión</em>=roteiro (u pronunciado com trema: <em>güero</em>). Semelhante ao PT.</p>
          </div>
        </div>
      </section>

      {/* ── SEÇÃO 7 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Diferenças de Acentuação PT/ES</span>
        <h2>7. Comparação: acentuação em Português vs. Espanhol</h2>
        <p>
          Embora ambas as línguas usem o acento agudo (´), existem diferenças importantes nas regras e nos padrões de acentuação. Em Português, usamos também o acento circunflexo (^) e o til (~), que não existem no Espanhol (exceto pelo ñ). Em Espanhol, o sistema é mais regular: apenas o acento agudo (´) é usado para marcar a sílaba tônica. Muitas palavras têm acentuação diferente nas duas línguas, o que pode causar estranheza na leitura.
        </p>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Português</th>
                <th>Espanhol</th>
                <th>Diferença</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>nação</td>
                <td><em>nación</em></td>
                <td>PT usa til; ES usa acento agudo na vogal tônica</td>
              </tr>
              <tr>
                <td>área</td>
                <td><em>área</em></td>
                <td>Mesmo acento — esdrújula em ambas</td>
              </tr>
              <tr>
                <td>médico</td>
                <td><em>médico</em></td>
                <td>Mesmo acento — esdrújula em ambas</td>
              </tr>
              <tr>
                <td>análise</td>
                <td><em>análisis</em></td>
                <td>Mesmo acento na sílaba; terminação diferente</td>
              </tr>
              <tr>
                <td>possível</td>
                <td><em>posible</em></td>
                <td>PT usa circunflexo; ES sem acento (llana terminada em vogal)</td>
              </tr>
              <tr>
                <td>também</td>
                <td><em>también</em></td>
                <td>PT sem acento; ES leva acento (aguda terminada em -n)</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="math-block">
          🎯 REGRA DE OURO ENEM: Em espanhol, toda palavra esdrújula (acento na antepenúltima sílaba) SEMPRE tem acento gráfico, sem exceção. Isso inclui quase todos os nomes científicos, técnicos e médicos: <em>química, física, matemática, biológico, económico, político</em>. Reconhecer esses padrões ajuda a identificar rapidamente palavras cognatas em textos de divulgação científica.
        </div>
      </section>

      {/* ── SEÇÃO 8 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Pontuação Especial</span>
        <h2>8. A pontuação especial do espanhol: ¿? e ¡!</h2>
        <p>
          Uma das características mais visuais e imediatamente reconhecíveis do Espanhol é o uso de <strong>sinais de interrogação e exclamação invertidos no início das frases</strong>: ¿ no início de perguntas e ¡ no início de exclamações. Esses sinais não existem em nenhum outro idioma e são uma adoção oficial da Real Academia Española desde o século XVIII. Para fins de leitura, eles são extremamente úteis: ao ver ¿ você já sabe, antes mesmo de ler a frase, que se trata de uma pergunta — o que ajuda a preparar a expectativa de compreensão e a localizar rapidamente o verbo e o elemento interrogado.
        </p>

        <div className="lesson-highlight">
          <strong>Uso prático dos sinais ¿? e ¡!:</strong><br />
          • <em>¿Cuándo llegaste?</em> = Quando você chegou? (¿ já anuncia pergunta)<br />
          • <em>¡Qué sorpresa!</em> = Que surpresa! (¡ já anuncia exclamação)<br />
          • Os sinais podem aparecer no meio de uma frase: <em>Ella preguntó: ¿dónde están?</em><br />
          • Em textos publicitários e informais, o ¡ é muito usado para criar impacto emocional: <em>¡Cómpralo ahora!</em> (Compre agora!)<br />
          • Em interrogativas indiretas, NÃO se usa ¿: <em>No sé qué quieres</em> (Não sei o que você quer) — mas o acento em <em>qué</em> permanece.
        </div>
      </section>

      {/* ── EXERCÍCIOS ── */}
      <section className="lesson-section">
        <span className="section-kicker">Prática</span>
        <h2>Questões Comentadas</h2>

        <Exercise
          level="Básico"
          title="1. Reconhecendo o alfabeto e a letra ñ"
          statement={
            <p>
              A letra <strong>ñ</strong> é exclusiva do alfabeto espanhol e representa um som que em Português é escrito como "nh". Considerando isso, qual das opções abaixo relaciona CORRETAMENTE uma palavra em espanhol com seu equivalente em português?
            </p>
          }
          options={[
            { letter: "a", text: "año = anho" },
            { letter: "b", text: "señor = senhor / señor = sênior", correct: true },
            { letter: "c", text: "niño = ninho (de pássaro)" },
            { letter: "d", text: "mañana = manha (astúcia)" },
            { letter: "e", text: "español = espanhós" },
          ]}
          resolution={
            <p>
              A alternativa <strong>b)</strong> está correta. <em>Señor</em> = senhor (em Português) — a ñ equivale ao "nh" do Português, portanto <em>se-ñor</em> = se-nhor. As demais alternativas têm erros: a) <em>año</em>=ano (não "anho"); c) <em>niño</em>=menino/criança (não "ninho de pássaro" — em ES "ninho" é <em>nido</em>); d) <em>mañana</em>=amanhã ou manhã (não "manha"); e) <em>español</em>=espanhol (terminação correta em PT é "-ol", não "-ós").
            </p>
          }
        />

        <Exercise
          level="Intermediário"
          title="2. Acento diacrítico — interpretando a diferença"
          statement={
            <div>
              <p>Leia as duas frases:</p>
              <p>I. <em>"Él me dijo que no podía ir."</em></p>
              <p>II. <em>"El libro que me diste es interesante."</em></p>
              <p>Qual é a diferença de significado entre <em>él</em> (com acento) e <em>el</em> (sem acento) nessas frases?</p>
            </div>
          }
          options={[
            { letter: "a", text: "Não há diferença; ambos são artigos definidos masculinos em espanhol." },
            { letter: "b", text: "Él com acento = pronome pessoal 'ele'; el sem acento = artigo definido 'o'.", correct: true },
            { letter: "c", text: "Él com acento = artigo definido 'o'; el sem acento = pronome pessoal 'ele'." },
            { letter: "d", text: "A diferença é apenas ortográfica — na fala as palavras soam diferente." },
            { letter: "e", text: "Él é a forma formal (de cortesia) e el é a forma informal do mesmo pronome." },
          ]}
          resolution={
            <p>
              A alternativa <strong>b)</strong> está correta. Este é um dos pares diacríticos mais importantes do Espanhol: <em>él</em> (com acento agudo) é pronome pessoal de terceira pessoa do singular — significa "ele". Na frase I: "Ele me disse que não podia ir." Já <em>el</em> (sem acento) é artigo definido masculino — significa "o". Na frase II: "O livro que você me deu é interessante." A pronúncia é idêntica — apenas a escrita diferencia os dois, e o contexto gramatical confirma qual é qual: antes de substantivo = artigo; como sujeito isolado = pronome.
            </p>
          }
        />

        <Exercise
          level="Avançado"
          title="3. Classificação de palavras quanto ao acento"
          statement={
            <div>
              <p>Classifique as palavras a seguir quanto ao tipo de acentuação em espanhol:</p>
              <p><em>médico / canción / árbol / cómpralo</em></p>
              <p>Qual alternativa apresenta a classificação CORRETA?</p>
            </div>
          }
          options={[
            { letter: "a", text: "Todas são esdrújulas: sílaba tônica na antepenúltima posição." },
            { letter: "b", text: "médico (esdrújula) / canción (aguda) / árbol (llana/grave) / cómpralo (sobreesdrújula).", correct: true },
            { letter: "c", text: "médico (llana) / canción (llana) / árbol (aguda) / cómpralo (esdrújula)." },
            { letter: "d", text: "Todas são agudas e levam acento porque terminam em -o." },
            { letter: "e", text: "médico (aguda) / canción (esdrújula) / árbol (sobreesdrújula) / cómpralo (llana)." },
          ]}
          resolution={
            <p>
              A alternativa <strong>b)</strong> está correta. Analisando cada palavra: (1) <em>MÉ-di-co</em>: tônica na antepenúltima (MÉ) = esdrújula → sempre leva acento; (2) <em>can-CIÓN</em>: tônica na última (CIÓN), terminada em -n = aguda → leva acento por terminar em vogal/n/s; (3) <em>ÁR-bol</em>: tônica na penúltima (ÁR), terminada em -l ≠ vogal/n/s = llana/grave → leva acento por ser exceção à regra (llanas terminadas em consoante que não seja n/s levam acento); (4) <em>CÓM-pra-lo</em>: tônica antes da antepenúltima (CÓM) = sobreesdrújula → sempre leva acento.
            </p>
          }
        />

        <Exercise
          level="Contextualizado"
          title="4. Interrogativos com e sem acento em contexto"
          statement={
            <div>
              <p>Leia os quatro trechos:</p>
              <p>I. <em>"¿Dónde vives tú?"</em></p>
              <p>II. <em>"La ciudad donde vivo es muy grande."</em></p>
              <p>III. <em>"No sé dónde está mi pasaporte."</em></p>
              <p>IV. <em>"El lugar donde naciste define parte de tu identidad."</em></p>
              <p>Em quais frases <em>dónde/donde</em> tem função interrogativa (direta ou indireta) e, portanto, deve ser escrito com acento?</p>
            </div>
          }
          options={[
            { letter: "a", text: "Apenas na frase I, que tem ¿? — as demais não são perguntas." },
            { letter: "b", text: "Nas frases I e III: I é interrogativa direta (¿Dónde?); III é interrogativa indireta embutida em 'no sé dónde...' — ambas levam acento.", correct: true },
            { letter: "c", text: "Em todas as frases, pois 'donde/dónde' sempre leva acento em espanhol." },
            { letter: "d", text: "Nas frases II e IV, pois o 'donde' funciona como pronome relativo enfático." },
            { letter: "e", text: "Apenas na frase III, pois é a única forma indireta de pergunta no espanhol." },
          ]}
          resolution={
            <p>
              A alternativa <strong>b)</strong> está correta. A regra em espanhol é: <em>dónde</em> com acento em interrogativas (diretas e indiretas) e exclamativas; <em>donde</em> sem acento em frases relativas (não interrogativas). I: <em>¿Dónde vives?</em> = interrogativa direta → <em>dónde</em> com acento. II: <em>la ciudad donde vivo</em> = pronome relativo (equivale a "a cidade em que moro") → <em>donde</em> sem acento. III: <em>no sé dónde está</em> = interrogativa indireta (ainda é uma pergunta, só que embutida) → <em>dónde</em> com acento. IV: <em>el lugar donde naciste</em> = relativo → <em>donde</em> sem acento. A questão testa exatamente a distinção essencial do espanhol entre interrogativos (acento) e relativos (sem acento).
            </p>
          }
        />

        <Exercise
          level="Contextualizado"
          title="5. Variação regional e compreensão de texto"
          statement={
            <div>
              <p>Leia o trecho de um texto espanhol peninsular: <em>"En España, la distinción entre el sonido de la 'c' (antes de e/i) y la 's' es fundamental en la pronunciación estándar. Por eso, 'caza' y 'casa' se pronuncian de manera diferente: 'caza' [kaθa] y 'casa' [kasa]."</em></p>
              <p>Com base no texto, qual seria a pronúncia dessas mesmas palavras no Espanhol Latino-americano?</p>
            </div>
          }
          options={[
            { letter: "a", text: "No espanhol latino-americano, 'caza' e 'casa' também se pronunciam de forma distinta, exatamente como na Espanha." },
            { letter: "b", text: "No espanhol latino-americano, ambas as palavras soariam igual ([kasa]), pois o 'c' antes de e/i e o 's' têm o mesmo som [s] — fenômeno chamado seseo.", correct: true },
            { letter: "c", text: "No espanhol latino-americano, a letra 'c' é silenciosa, então 'caza' seria pronunciada apenas como 'aza'." },
            { letter: "d", text: "No espanhol latino-americano, a distinção entre 'c' e 's' é ainda mais marcada do que na Espanha peninsular." },
            { letter: "e", text: "O texto não permite inferir como seriam pronunciadas essas palavras na América Latina." },
          ]}
          resolution={
            <p>
              A alternativa <strong>b)</strong> está correta. O texto indica que na Espanha existe distinção entre [θ] (c antes de e/i) e [s], tornando <em>caza</em> e <em>casa</em> palavras com sons diferentes. A inferência sobre a América Latina parte do conhecimento de que o Espanhol Latino-americano pratica o <em>seseo</em>: o "c" antes de e/i soa como [s], igual ao "s". Portanto, na América Latina, <em>caza</em> (caça) e <em>casa</em> (casa) soariam identicamente como [kasa] — são homófonos. Este fenômeno é importante para compreender variações textuais e é uma das diferenças regionais que o ENEM pode explorar em questões sobre variação linguística.
            </p>
          }
        />
      </section>

    </article>
  );
}
