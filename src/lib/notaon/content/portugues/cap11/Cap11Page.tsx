"use client";
import { ExerciseCard as Exercise } from "@/lib/notaon/components/ExerciseCard";
export default function Cap11Page() {
  return (
    <article className="lesson-landing">
      <section className="lesson-hero">
        <div>
          <span className="lesson-badge">Português • Capítulo 11</span>
          <h1>Introdução à Gramática</h1>
          <p>
            A gramática não é apenas um conjunto de regras a decorar — é a
            estrutura viva que organiza nossa comunicação. Compreender fonética,
            fonologia, ortografia e tonicidade é a base para dominar qualquer
            análise linguística cobrada no ENEM e em vestibulares de todo o
            Brasil.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Conceito Fundamental</span>
        <h2>1. O que é Gramática? Tipos e Perspectivas</h2>
        <p>
          A palavra <strong>gramática</strong> vem do grego <em>grammatiké</em>,
          que designava originalmente a arte de ler e escrever. Hoje, o termo
          abrange muito mais do que isso: ele se refere ao conjunto de
          conhecimentos sobre o funcionamento de uma língua.
        </p>
        <p>
          A Linguística moderna distingue três perspectivas fundamentais, que o
          ENEM frequentemente explora em textos sobre linguagem e variação:
        </p>
        <div className="lesson-grid">
          <div className="lesson-card">
            <span>📐</span>
            <h3>Gramática Normativa</h3>
            <p>
              Prescreve regras de prestígio social com base na norma culta
              escrita. Diz o que é "certo" ou "errado" segundo um padrão formal.
              Exemplo: o uso de "me" em "Dê-me o livro".
            </p>
          </div>
          <div className="lesson-card">
            <span>🔬</span>
            <h3>Gramática Descritiva</h3>
            <p>
              Descreve como a língua realmente é usada pelos falantes, sem
              emitir juízo de valor. Registra variações regionais, sociais e
              históricas da língua viva.
            </p>
          </div>
          <div className="lesson-card">
            <span>🧠</span>
            <h3>Gramática Internalizada</h3>
            <p>
              É o conhecimento linguístico inconsciente que todo falante nativo
              possui desde criança — a competência que permite construir e
              compreender frases nunca ouvidas antes.
            </p>
          </div>
        </div>
        <div className="lesson-highlight">
          <h3>Dica ENEM</h3>
          <p>
            O ENEM valoriza a perspectiva descritiva e sociolinguística. Questões
            sobre <strong>preconceito linguístico</strong> e{" "}
            <strong>variação dialetal</strong> partem do princípio de que toda
            variedade linguística é sistemática e legítima — a gramática
            normativa representa apenas uma entre muitas variedades.
          </p>
        </div>
        <figure className="lesson-figure">
          <svg
            viewBox="0 0 500 220"
            width="500"
            height="220"
            aria-label="Diagrama dos três tipos de gramática"
          >
            <rect width="500" height="220" rx="12" fill="#f8fafc" />
            <rect x="30" y="30" width="130" height="70" rx="10" fill="#3b82f6" />
            <text x="95" y="62" textAnchor="middle" fill="white" fontSize="13" fontWeight="bold">Normativa</text>
            <text x="95" y="82" textAnchor="middle" fill="#bfdbfe" fontSize="11">Prescreve</text>
            <text x="95" y="96" textAnchor="middle" fill="#bfdbfe" fontSize="11">o "correto"</text>
            <rect x="185" y="30" width="130" height="70" rx="10" fill="#10b981" />
            <text x="250" y="62" textAnchor="middle" fill="white" fontSize="13" fontWeight="bold">Descritiva</text>
            <text x="250" y="82" textAnchor="middle" fill="#a7f3d0" fontSize="11">Descreve</text>
            <text x="250" y="96" textAnchor="middle" fill="#a7f3d0" fontSize="11">o uso real</text>
            <rect x="340" y="30" width="130" height="70" rx="10" fill="#8b5cf6" />
            <text x="405" y="62" textAnchor="middle" fill="white" fontSize="13" fontWeight="bold">Internalizada</text>
            <text x="405" y="82" textAnchor="middle" fill="#ddd6fe" fontSize="11">Competência</text>
            <text x="405" y="96" textAnchor="middle" fill="#ddd6fe" fontSize="11">inconsciente</text>
            <rect x="155" y="155" width="190" height="45" rx="8" fill="#fef3c7" stroke="#f59e0b" strokeWidth="1.5" />
            <text x="250" y="175" textAnchor="middle" fill="#92400e" fontSize="12" fontWeight="bold">Língua Portuguesa</text>
            <text x="250" y="192" textAnchor="middle" fill="#92400e" fontSize="11">sistema vivo e dinâmico</text>
            <line x1="95" y1="100" x2="215" y2="155" stroke="#94a3b8" strokeWidth="1.5" strokeDasharray="5,3" />
            <line x1="250" y1="100" x2="250" y2="155" stroke="#94a3b8" strokeWidth="1.5" strokeDasharray="5,3" />
            <line x1="405" y1="100" x2="290" y2="155" stroke="#94a3b8" strokeWidth="1.5" strokeDasharray="5,3" />
          </svg>
          <figcaption>Os três tipos de gramática e sua relação com a língua</figcaption>
        </figure>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Sons da Língua</span>
        <h2>2. Fonética e Fonologia: Diferenças Essenciais</h2>
        <p>
          Muitos estudantes confundem <strong>fonética</strong> e{" "}
          <strong>fonologia</strong>. São disciplinas distintas, embora
          relacionadas — ambas estudam os sons da língua, mas com objetivos
          diferentes.
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Aspecto</th>
                <th>Fonética</th>
                <th>Fonologia</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Objeto de estudo</td>
                <td>Sons físicos (fones)</td>
                <td>Sons funcionais (fonemas)</td>
              </tr>
              <tr>
                <td>Abordagem</td>
                <td>Concreta e acústica</td>
                <td>Abstrata e sistemática</td>
              </tr>
              <tr>
                <td>Exemplo</td>
                <td>Articulação de [p] nos lábios</td>
                <td>/p/ vs /b/ distinguem "pato" e "bato"</td>
              </tr>
              <tr>
                <td>Notação</td>
                <td>Colchetes: [p]</td>
                <td>Barras: /p/</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          O <strong>fonema</strong> é a menor unidade sonora capaz de
          <em> distinguir significados</em>. Em português, /p/ e /b/ são fonemas
          distintos porque "pato" e "bato" têm significados diferentes. Já o
          <strong> fone</strong> é a realização concreta do fonema — por exemplo,
          o "r" de "caro" pode ser pronunciado de formas diferentes no Rio de
          Janeiro e em São Paulo, mas continua sendo o mesmo fonema /r/.
        </p>
        <div className="math-block">
          <h3>Fonemas do Português</h3>
          <p>
            O português possui <strong>12 vogais fonológicas</strong> (7 orais +
            5 nasais) e <strong>19 fonemas consonantais</strong>. O número de
            letras do alfabeto (26) é diferente do número de fonemas porque uma
            mesma letra pode representar fonemas distintos — o "x" em "exame",
            "táxi", "luxo" e "mexer" representa quatro sons diferentes.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Vogais e Consoantes</span>
        <h2>3. Vogais, Consoantes e Semivogais</h2>
        <p>
          A distinção entre vogais e consoantes é central para a análise
          fonológica. As <strong>vogais</strong> são produzidas sem obstrução do
          fluxo de ar, enquanto as <strong>consoantes</strong> envolvem alguma
          forma de bloqueio ou estreitamento no trato vocal.
        </p>
        <p>
          As vogais classificam-se segundo três critérios principais:
        </p>
        <div className="lesson-grid">
          <div className="lesson-card">
            <span>👄</span>
            <h3>Abertura da boca</h3>
            <p>
              <strong>Abertas:</strong> a, é, ó (boca bem aberta). <strong>Fechadas:</strong> e, o (posição intermediária). <strong>Altas/fechadas:</strong> i, u (boca quase fechada).
            </p>
          </div>
          <div className="lesson-card">
            <span>👃</span>
            <h3>Nasalidade</h3>
            <p>
              <strong>Orais:</strong> a, e, i, o, u (sem passagem pelo nariz). <strong>Nasais:</strong> ã, em, im, om, um (véu palatino abaixado).
            </p>
          </div>
          <div className="lesson-card">
            <span>👅</span>
            <h3>Posição da língua</h3>
            <p>
              <strong>Anteriores:</strong> e, i (língua à frente). <strong>Centrais:</strong> a. <strong>Posteriores:</strong> o, u (língua recuada).
            </p>
          </div>
        </div>
        <p>
          As <strong>consoantes</strong> classificam-se pelo ponto e modo de
          articulação:
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Classificação</th>
                <th>Tipo</th>
                <th>Exemplos</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td rowSpan={6}>Ponto de articulação</td>
                <td>Bilabiais</td>
                <td>p, b, m</td>
              </tr>
              <tr>
                <td>Labiodentais</td>
                <td>f, v</td>
              </tr>
              <tr>
                <td>Dentais/Alveolares</td>
                <td>t, d, n, l, r, s, z</td>
              </tr>
              <tr>
                <td>Palatais</td>
                <td>lh, nh, j, ch, x</td>
              </tr>
              <tr>
                <td>Velares</td>
                <td>g, c (duro), r (em início)</td>
              </tr>
              <tr>
                <td>Glotais</td>
                <td>h (aspirado, raro em PT)</td>
              </tr>
              <tr>
                <td rowSpan={6}>Modo de articulação</td>
                <td>Plosivas (oclusivas)</td>
                <td>p, b, t, d, k, g</td>
              </tr>
              <tr>
                <td>Fricativas</td>
                <td>f, v, s, z, ch, j</td>
              </tr>
              <tr>
                <td>Nasais</td>
                <td>m, n, nh</td>
              </tr>
              <tr>
                <td>Laterais</td>
                <td>l, lh</td>
              </tr>
              <tr>
                <td>Vibrantes</td>
                <td>r (simples), rr (múltiplo)</td>
              </tr>
              <tr>
                <td>Africadas</td>
                <td>t+ch em "tchau", d+j em "dj"</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          As <strong>semivogais</strong> (ou glides) são os sons de "i" e "u"
          quando não formam núcleo de sílaba. Em "pai" (/pai/), o "a" é vogal
          (núcleo) e o "i" é semivogal. As semivogais do português são{" "}
          <em>/j/</em> (i) e <em>/w/</em> (u).
        </p>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Encontros Vocálicos</span>
        <h2>4. Ditongo, Tritongo e Hiato</h2>
        <p>
          Os <strong>encontros vocálicos</strong> ocorrem quando vogais e
          semivogais aparecem em sequência. Saber distingui-los é fundamental
          para a correta divisão silábica e acentuação gráfica.
        </p>
        <div className="lesson-grid">
          <div className="lesson-card">
            <span>🔊</span>
            <h3>Ditongo</h3>
            <p>
              Vogal + semivogal (ou semivogal + vogal) na mesma sílaba. <strong>Decrescente:</strong> "pai", "lei", "mau" (vogal + semivogal). <strong>Crescente:</strong> "sua", "mia" (semivogal + vogal).
            </p>
          </div>
          <div className="lesson-card">
            <span>🔉</span>
            <h3>Tritongo</h3>
            <p>
              Semivogal + vogal + semivogal na mesma sílaba. Ex.: "Uruguai" (u-ru-guai), "iguais" (i-guais), "saguão" (sa-guão).
            </p>
          </div>
          <div className="lesson-card">
            <span>✂️</span>
            <h3>Hiato</h3>
            <p>
              Duas vogais em sílabas separadas. Ex.: "sa-ú-de", "po-e-ta", "ca-o-s". As vogais ficam em sílabas diferentes porque cada uma é núcleo silábico.
            </p>
          </div>
        </div>
        <div className="lesson-highlight">
          <h3>Ditongos Orais vs Nasais</h3>
          <p>
            Os ditongos também se classificam quanto à nasalidade. São{" "}
            <strong>orais</strong> quando não há nasalidade: "pai", "lei", "vou".
            São <strong>nasais</strong> quando ao menos um dos elementos é nasal:
            "mãe" (/mãj/), "bem" (/bẽj/), "põe" (/põj/), "muito" (/mũjtu/).
          </p>
        </div>
        <div className="math-block">
          <h3>Hiato vs Ditongo na Prática</h3>
          <p>
            A diferença entre hiato e ditongo está no papel fonológico de cada
            som. Em "saúde", o "a" e o "u" são ambos vogais nucleares (sílabas
            separadas: sa-ú-de). Em "jaula", o "au" forma ditongo decrescente
            (mesma sílaba: jau-la) porque o "u" é semivogal.
          </p>
        </div>
        <figure className="lesson-figure">
          <svg
            viewBox="0 0 520 240"
            width="520"
            height="240"
            aria-label="Diagrama de encontros vocálicos"
          >
            <rect width="520" height="240" rx="12" fill="#f8fafc" />
            <text x="260" y="30" textAnchor="middle" fill="#1e293b" fontSize="15" fontWeight="bold">Encontros Vocálicos</text>
            <rect x="20" y="50" width="145" height="150" rx="10" fill="#eff6ff" stroke="#3b82f6" strokeWidth="2" />
            <text x="92" y="78" textAnchor="middle" fill="#1d4ed8" fontSize="13" fontWeight="bold">Ditongo</text>
            <text x="92" y="100" textAnchor="middle" fill="#3b82f6" fontSize="11">V + SV ou SV + V</text>
            <text x="92" y="118" textAnchor="middle" fill="#374151" fontSize="11" fontStyle="italic">mesma sílaba</text>
            <text x="92" y="140" textAnchor="middle" fill="#374151" fontSize="12">Crescente: "sua"</text>
            <text x="92" y="158" textAnchor="middle" fill="#374151" fontSize="12">Decrescente: "pai"</text>
            <text x="92" y="180" textAnchor="middle" fill="#374151" fontSize="12">Nasal: "mãe"</text>
            <rect x="188" y="50" width="145" height="150" rx="10" fill="#f0fdf4" stroke="#10b981" strokeWidth="2" />
            <text x="260" y="78" textAnchor="middle" fill="#065f46" fontSize="13" fontWeight="bold">Tritongo</text>
            <text x="260" y="100" textAnchor="middle" fill="#10b981" fontSize="11">SV + V + SV</text>
            <text x="260" y="118" textAnchor="middle" fill="#374151" fontSize="11" fontStyle="italic">mesma sílaba</text>
            <text x="260" y="140" textAnchor="middle" fill="#374151" fontSize="12">"U-ru-guai"</text>
            <text x="260" y="158" textAnchor="middle" fill="#374151" fontSize="12">"i-guais"</text>
            <text x="260" y="180" textAnchor="middle" fill="#374151" fontSize="12">"sa-guão"</text>
            <rect x="355" y="50" width="145" height="150" rx="10" fill="#fef3c7" stroke="#f59e0b" strokeWidth="2" />
            <text x="428" y="78" textAnchor="middle" fill="#92400e" fontSize="13" fontWeight="bold">Hiato</text>
            <text x="428" y="100" textAnchor="middle" fill="#d97706" fontSize="11">V + V</text>
            <text x="428" y="118" textAnchor="middle" fill="#374151" fontSize="11" fontStyle="italic">sílabas separadas</text>
            <text x="428" y="140" textAnchor="middle" fill="#374151" fontSize="12">"sa-ú-de"</text>
            <text x="428" y="158" textAnchor="middle" fill="#374151" fontSize="12">"po-e-ta"</text>
            <text x="428" y="180" textAnchor="middle" fill="#374151" fontSize="12">"ra-i-nha"</text>
          </svg>
          <figcaption>Tipos de encontros vocálicos com exemplos</figcaption>
        </figure>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Encontros Consonantais e Dígrafos</span>
        <h2>5. Encontros Consonantais e Dígrafos</h2>
        <p>
          Os <strong>encontros consonantais</strong> ocorrem quando duas ou mais
          consoantes aparecem juntas em uma palavra. Já os <strong>dígrafos</strong>{" "}
          são dois grafemas (letras) que representam um único fonema.
        </p>
        <div className="lesson-grid">
          <div className="lesson-card">
            <span>🔗</span>
            <h3>Encontros Próprios</h3>
            <p>
              As duas consoantes ficam na mesma sílaba. Ex.: "bra-ço", "flo-res", "pla-no", "cri-me". Ocorrem com consoantes + l ou r.
            </p>
          </div>
          <div className="lesson-card">
            <span>✂️</span>
            <h3>Encontros Impróprios</h3>
            <p>
              As consoantes pertencem a sílabas diferentes na divisão silábica. Ex.: "rit-mo", "ad-vo-ga-do", "ap-to", "ob-je-to".
            </p>
          </div>
          <div className="lesson-card">
            <span>🔤</span>
            <h3>Dígrafos</h3>
            <p>
              Duas letras = um fonema. Ex.: "ch" em "chave", "lh" em "palha", "nh" em "ninho", "rr" em "carro", "ss" em "passo", "qu" em "quero".
            </p>
          </div>
        </div>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Dígrafo</th>
                <th>Fonema</th>
                <th>Exemplo</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>ch</td>
                <td>/ʃ/ (som de "x")</td>
                <td>chave, cheiro</td>
              </tr>
              <tr>
                <td>lh</td>
                <td>/ʎ/ (l palatal)</td>
                <td>folha, palha</td>
              </tr>
              <tr>
                <td>nh</td>
                <td>/ɲ/ (n palatal)</td>
                <td>ninho, manhã</td>
              </tr>
              <tr>
                <td>rr</td>
                <td>/ʁ/ (r forte)</td>
                <td>carro, terra</td>
              </tr>
              <tr>
                <td>ss</td>
                <td>/s/</td>
                <td>passo, massa</td>
              </tr>
              <tr>
                <td>sc / sç / xc / xs</td>
                <td>/s/</td>
                <td>nasceu, desça, exceto</td>
              </tr>
              <tr>
                <td>gu (+ e/i)</td>
                <td>/g/</td>
                <td>guerra, guitarra</td>
              </tr>
              <tr>
                <td>qu (+ e/i)</td>
                <td>/k/</td>
                <td>quero, quilo</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="lesson-highlight">
          <h3>Atenção: dígrafo vs encontro consonantal</h3>
          <p>
            No dígrafo, duas letras representam <em>um único som</em>. No
            encontro consonantal, cada letra representa um som diferente.
            Compare: "nh" em "ninho" (dígrafo — um som /ɲ/) vs "nt" em "canto"
            (encontro consonantal — dois sons /n/ + /t/).
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Estrutura Silábica</span>
        <h2>6. Sílaba: Estrutura e Divisão Silábica</h2>
        <p>
          A <strong>sílaba</strong> é a unidade fonológica básica da fala — um
          grupo de sons pronunciado em um único impulso de voz. Toda sílaba
          possui obrigatoriamente um <em>núcleo</em> (sempre uma vogal); pode
          ter também um ataque (consoante(s) antes da vogal) e uma coda
          (consoante(s) depois da vogal). Essa estrutura é representada como{" "}
          <strong>CVC</strong> (Consoante-Vogal-Consoante).
        </p>
        <p>
          As principais regras de divisão silábica são:
        </p>
        <div className="math-block">
          <h3>Regras de Divisão Silábica</h3>
          <p>
            <strong>1. Dígrafos:</strong> nunca se separam — "pa-lha", "ca-rro",
            "ma-nhã".
          </p>
          <p>
            <strong>2. Encontros consonantais impróprios:</strong> separam-se —
            "rit-mo", "ob-je-to", "ad-vo-ga-do".
          </p>
          <p>
            <strong>3. Encontros consonantais próprios:</strong> ficam juntos na
            próxima sílaba — "a-brir", "pro-ble-ma", "a-gra-dá-vel".
          </p>
          <p>
            <strong>4. Hiatos:</strong> separam-se — "sa-ú-de", "po-e-ta",
            "ra-i-nha".
          </p>
          <p>
            <strong>5. Ditongos e tritongos:</strong> ficam na mesma sílaba —
            "pai", "foi", "U-ru-guai".
          </p>
          <p>
            <strong>6. Vogal sozinha:</strong> pode formar sílaba — "a-ve",
            "i-da-de", "e-ta-pa".
          </p>
        </div>
        <div className="lesson-highlight">
          <h3>Dica ENEM: por que a divisão silábica importa?</h3>
          <p>
            A divisão silábica é a base para compreender a <strong>tonicidade</strong>{" "}
            e as <strong>regras de acentuação gráfica</strong>. Errar a divisão
            silábica leva a erros de acento. Além disso, a divisão silábica
            aparece em questões de ortografia e interpretação fonológica.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Tonicidade</span>
        <h2>7. Tonicidade: Oxítona, Paroxítona e Proparoxítona</h2>
        <p>
          <strong>Tonicidade</strong> é o destaque de intensidade (força de voz)
          que uma sílaba recebe em relação às outras. A sílaba mais forte chama-se{" "}
          <em>sílaba tônica</em>; as demais são <em>átonas</em>.
        </p>
        <p>
          A posição da sílaba tônica define a classificação da palavra:
        </p>
        <div className="lesson-grid">
          <div className="lesson-card">
            <span>⬅️</span>
            <h3>Oxítona</h3>
            <p>
              Tônica na última sílaba. Ex.: ca-<strong>fé</strong>, so-<strong>fá</strong>, ma-ra-cu-<strong>já</strong>, po-<strong>rém</strong>, tam-<strong>bém</strong>.
            </p>
          </div>
          <div className="lesson-card">
            <span>↔️</span>
            <h3>Paroxítona</h3>
            <p>
              Tônica na penúltima sílaba. Ex.: <strong>ca</strong>-sa, <strong>li</strong>-vro, ca-<strong>dê</strong>n-cia. A maior parte das palavras do português é paroxítona.
            </p>
          </div>
          <div className="lesson-card">
            <span>➡️</span>
            <h3>Proparoxítona</h3>
            <p>
              Tônica na antepenúltima sílaba. Ex.: <strong>lâm</strong>-pa-da, <strong>má</strong>-gi-ca, <strong>sá</strong>-ba-do. Todas são acentuadas graficamente.
            </p>
          </div>
        </div>
        <div className="lesson-highlight">
          <h3>Distinção Crucial: Tonicidade ≠ Acentuação Gráfica</h3>
          <p>
            <strong>Toda palavra tem uma sílaba tônica</strong>, mas{" "}
            <strong>nem toda sílaba tônica recebe acento gráfico</strong>. A
            palavra "casa" é paroxítona, mas não tem acento escrito. Já "sábado"
            é proparoxítona e tem acento. A acentuação gráfica é apenas uma
            convenção ortográfica para marcar os casos que fogem do padrão ou
            que exigem distinção.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Acentuação Gráfica</span>
        <h2>8. Regras de Acentuação Gráfica</h2>
        <p>
          A acentuação gráfica do português é regulada pelo Acordo Ortográfico.
          As regras gerais se baseiam na tonicidade da palavra, no tipo de sílaba
          tônica e na terminação do vocábulo.
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Classificação</th>
                <th>Regra de Acentuação</th>
                <th>Exemplos</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Proparoxítona</td>
                <td>Todas se acentuam (sem exceção)</td>
                <td>pátio, lâmpada, médico, ônibus</td>
              </tr>
              <tr>
                <td>Paroxítona irregular</td>
                <td>Acentuam-se quando terminam em: r, l, n, x, ps, i(s), u(s), ã(s), ão(s), ei(s), ditongo seguido de s</td>
                <td>açúcar, fácil, hífen, tórax, bíceps, táxi, vírus, ímã, bênção, jóquei (antes do acordo)</td>
              </tr>
              <tr>
                <td>Oxítona</td>
                <td>Acentuam-se quando terminam em: a(s), e(s), o(s), em, ens</td>
                <td>sofá, café, avó, também, parabéns</td>
              </tr>
              <tr>
                <td>Monossílabo tônico</td>
                <td>Mesmas terminações das oxítonas</td>
                <td>pá, pé, pó, mês, pôs</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          Os <strong>hiatos</strong> formados por "i" ou "u" tônicos — quando
          precedidos de vogal e seguidos de consoante (exceto nh) ou estando
          sozinhos na sílaba — recebem acento:
        </p>
        <div className="math-block">
          <h3>Hiatos Acentuados</h3>
          <p>
            "sa-ú-de" → o "u" é tônico e forma hiato: acento circunflexo.
            "ba-ú" → o "u" tônico em sílaba sozinha após vogal: acento agudo.
            "ra-í-nha" → o "i" tônico em hiato: acento agudo.
            "ru-ín" → "i" tônico em hiato, antes de "n": acento agudo.
          </p>
          <p>
            <strong>Exceção:</strong> "i" e "u" em hiato NÃO se acentuam quando
            seguidos de "-nh" (rainha, bainha) ou quando a sílaba anterior
            termina em ditongo (feiura, baiuca — sem acento desde 2009).
          </p>
        </div>
        <p>
          O <strong>acento diferencial</strong> sobreviveu ao Acordo de 2009
          apenas nos seguintes casos:
        </p>
        <div className="lesson-highlight">
          <h3>Acento Diferencial (ainda válido)</h3>
          <p>
            <strong>pôde</strong> (pretérito perfeito) vs <strong>pode</strong>{" "}
            (presente) — acento circunflexo marca distinção.
            <br />
            <strong>pôr</strong> (verbo) vs <strong>por</strong> (preposição).
            <br />
            Formas verbais com <strong>pronomes enclíticos ou mesoclíticos</strong>:
            "ele pÔs-se", "vê-se" (acento mantido por razão fonológica).
          </p>
          <p>
            <strong>Eliminados em 2009:</strong> pára/para, péla/pela,
            pólo/polo, côr/cor — não se acentuam mais diferenciando substantivo
            de forma verbal ou preposição.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Reforma Ortográfica</span>
        <h2>9. Acordo Ortográfico de 2009: Principais Mudanças</h2>
        <p>
          O <strong>Acordo Ortográfico da Língua Portuguesa</strong>, firmado em
          1990 e implementado no Brasil a partir de 2009, unificou a ortografia
          dos países lusófonos. As principais mudanças afetam acentuação,
          uso do hífen e supressão de letras.
        </p>
        <div className="lesson-grid">
          <div className="lesson-card">
            <span>📝</span>
            <h3>Trema eliminado</h3>
            <p>
              O trema (¨) foi suprimido das palavras portuguesas. Antes: "lingüiça", "conseqüência". Depois: "linguiça", "consequência". Mantém-se apenas em nomes estrangeiros e seus derivados.
            </p>
          </div>
          <div className="lesson-card">
            <span>📝</span>
            <h3>Ditongos abertos</h3>
            <p>
              Ditongos "ei" e "oi" em paroxítonas perderam o acento agudo quando seguidos de consoantes como r, m, z. Antes: "idéia", "jóia", "heróico". Depois: "ideia", "joia", "heroico".
            </p>
          </div>
          <div className="lesson-card">
            <span>📝</span>
            <h3>Acento diferencial</h3>
            <p>
              Muitos acentos diferenciais foram eliminados: "pára→para", "péla→pela", "vêm→vêm" (mantido só nos verbos de 3ª pessoa do plural para distinguir de "vem" singular).
            </p>
          </div>
          <div className="lesson-card">
            <span>📝</span>
            <h3>Hífen reformado</h3>
            <p>
              Muitas palavras compostas perderam o hífen: "auto-escola→autoescola", "anti-inflamatório→anti-inflamatório" (manteve), "super-homem" (manteve). As regras do hífen tornaram-se mais complexas.
            </p>
          </div>
        </div>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Caso</th>
                <th>Antes de 2009</th>
                <th>Após 2009</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Ditongo + r</td>
                <td>ameaçéiro, primeiro*</td>
                <td>Sem mudança (já era sem acento)</td>
              </tr>
              <tr>
                <td>Paroxítona ditongo "ei"</td>
                <td>idéia, assembléia</td>
                <td>ideia, assembleia</td>
              </tr>
              <tr>
                <td>Paroxítona ditongo "oi"</td>
                <td>jóia, bóia</td>
                <td>joia, boia</td>
              </tr>
              <tr>
                <td>Trema</td>
                <td>freqüente, lingüiça</td>
                <td>frequente, linguiça</td>
              </tr>
              <tr>
                <td>Acento diferencial</td>
                <td>pára, péla, pólo</td>
                <td>para, pela, polo</td>
              </tr>
              <tr>
                <td>vêem / crêem</td>
                <td>Plural = vêem</td>
                <td>Plural = veem / creem (sem acento)</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="lesson-highlight">
          <h3>O que o ENEM cobra sobre ortografia</h3>
          <p>
            O ENEM raramente pede a memorização de regras isoladas. O que aparece
            são <strong>questões de uso em contexto</strong>: identificar se um
            acento está correto, compreender por que determinada grafia muda o
            sentido, ou interpretar textos que exploram grafias alternativas como
            recurso estilístico. Conhecer as regras com compreensão — não apenas
            decoradas — é o caminho.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Síntese Integrativa</span>
        <h2>10. Da Fonologia à Ortografia: Visão Sistêmica</h2>
        <p>
          Os tópicos desta aula formam uma cadeia lógica. Entender essa cadeia
          é essencial para responder questões complexas que integram fonologia,
          morfologia e ortografia:
        </p>
        <figure className="lesson-figure">
          <svg
            viewBox="0 0 540 300"
            width="540"
            height="300"
            aria-label="Fluxograma da gramática ao texto"
          >
            <rect width="540" height="300" rx="12" fill="#f8fafc" />
            <rect x="195" y="15" width="150" height="42" rx="8" fill="#1e40af" />
            <text x="270" y="33" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">FONOLOGIA</text>
            <text x="270" y="50" textAnchor="middle" fill="#bfdbfe" fontSize="10">fonemas / sons</text>
            <line x1="270" y1="57" x2="270" y2="80" stroke="#64748b" strokeWidth="1.5" markerEnd="url(#arrow)" />
            <rect x="195" y="80" width="150" height="42" rx="8" fill="#065f46" />
            <text x="270" y="98" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">SÍLABA</text>
            <text x="270" y="115" textAnchor="middle" fill="#a7f3d0" fontSize="10">estrutura silábica</text>
            <line x1="270" y1="122" x2="270" y2="145" stroke="#64748b" strokeWidth="1.5" />
            <rect x="195" y="145" width="150" height="42" rx="8" fill="#7c3aed" />
            <text x="270" y="163" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">TONICIDADE</text>
            <text x="270" y="180" textAnchor="middle" fill="#ddd6fe" fontSize="10">oxítona / paroxítona / proparo.</text>
            <line x1="270" y1="187" x2="270" y2="210" stroke="#64748b" strokeWidth="1.5" />
            <rect x="195" y="210" width="150" height="42" rx="8" fill="#b45309" />
            <text x="270" y="228" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">ACENTUAÇÃO</text>
            <text x="270" y="245" textAnchor="middle" fill="#fde68a" fontSize="10">regras gráficas</text>
            <line x1="270" y1="252" x2="270" y2="270" stroke="#64748b" strokeWidth="1.5" />
            <rect x="195" y="270" width="150" height="20" rx="6" fill="#dc2626" />
            <text x="270" y="284" textAnchor="middle" fill="white" fontSize="11" fontWeight="bold">ORTOGRAFIA</text>
            <rect x="20" y="100" width="130" height="42" rx="8" fill="#eff6ff" stroke="#3b82f6" strokeWidth="1.5" />
            <text x="85" y="118" textAnchor="middle" fill="#1d4ed8" fontSize="11" fontWeight="bold">Gramática</text>
            <text x="85" y="133" textAnchor="middle" fill="#3b82f6" fontSize="10">normativa / descritiva</text>
            <line x1="150" y1="121" x2="195" y2="101" stroke="#94a3b8" strokeWidth="1" strokeDasharray="4,3" />
            <rect x="390" y="100" width="130" height="42" rx="8" fill="#fef3c7" stroke="#f59e0b" strokeWidth="1.5" />
            <text x="455" y="118" textAnchor="middle" fill="#92400e" fontSize="11" fontWeight="bold">Encontros</text>
            <text x="455" y="133" textAnchor="middle" fill="#92400e" fontSize="10">vocálicos / consonantais</text>
            <line x1="390" y1="121" x2="345" y2="101" stroke="#94a3b8" strokeWidth="1" strokeDasharray="4,3" />
          </svg>
          <figcaption>Cadeia lógica: da fonologia à ortografia</figcaption>
        </figure>
        <div className="lesson-highlight">
          <h3>Checklist de Revisão</h3>
          <p>
            Antes de fazer questões, confirme que sabe: (1) distinguir fonema de
            letra; (2) classificar vogais e consoantes; (3) identificar ditongo,
            hiato e tritongo; (4) separar sílabas corretamente; (5) classificar
            oxítonas, paroxítonas e proparoxítonas; (6) aplicar as regras de
            acentuação; (7) identificar dígrafos; (8) conhecer as mudanças do
            Acordo de 2009.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Exercícios</span>
        <h2>Questões Comentadas</h2>

        <Exercise
          level="Básico"
          title="1. Classificação de Encontro Vocálico"
          statement={
            <p>
              Em qual das alternativas abaixo ocorre um <strong>hiato</strong>?
            </p>
          }
          options={[
            {
              letter: "a",
              text: "pai",
            },
            {
              letter: "b",
              text: "mau",
            },
            {
              letter: "c",
              text: "saúde",
              correct: true,
            },
            {
              letter: "d",
              text: "Uruguai",
            },
          ]}
          resolution={
            <p>
              Em "saúde" (sa-ú-de), o "a" e o "u" são ambos vogais nucleares em
              sílabas diferentes — isso é hiato. Em "pai" e "mau" há ditongos
              decrescentes (vogal + semivogal na mesma sílaba). Em "Uruguai" há
              tritongo (SV + V + SV na última sílaba: -guai).
            </p>
          }
        />

        <Exercise
          level="Intermediário"
          title="2. Tonicidade e Acentuação Gráfica"
          statement={
            <p>
              A palavra <strong>"açúcar"</strong> é paroxítona e recebe acento
              gráfico porque:
            </p>
          }
          options={[
            {
              letter: "a",
              text: "toda paroxítona é acentuada.",
            },
            {
              letter: "b",
              text: "termina em r, o que é terminação irregular para paroxítonas.",
              correct: true,
            },
            {
              letter: "c",
              text: "é proparoxítona.",
            },
            {
              letter: "d",
              text: "segue a regra das oxítonas.",
            },
          ]}
          resolution={
            <p>
              "Açúcar" é paroxítona (tônica na penúltima sílaba: a-<strong>çú</strong>-car).
              Paroxítonas só se acentuam quando terminam em sílabas que fogem do
              padrão regular. Terminação em "r" é uma dessas terminações irregulares
              que obriga o acento gráfico em paroxítonas. Não é proparoxítona,
              pois esta teria a tônica na antepenúltima sílaba.
            </p>
          }
        />

        <Exercise
          level="Avançado"
          title="3. Fonologia: Fonema vs Letra"
          statement={
            <p>
              A palavra <strong>"exceção"</strong> possui quantos fonemas?
            </p>
          }
          options={[
            {
              letter: "a",
              text: "7 fonemas",
            },
            {
              letter: "b",
              text: "6 fonemas",
              correct: true,
            },
            {
              letter: "c",
              text: "8 fonemas",
            },
            {
              letter: "d",
              text: "5 fonemas",
            },
          ]}
          resolution={
            <p>
              "Exceção" tem 7 letras (e-x-c-e-ç-ã-o), mas apenas 6 fonemas.
              O "xc" forma um dígrafo que representa o fonema /s/ (som único),
              e o "ão" final é um ditongo nasal. Portanto: /e/ + /s/ (dígrafo xc)
              + /e/ + /s/ (ç) + /ã/ + /w/ = 6 fonemas. A diferença entre número
              de letras e número de fonemas é um ponto clássico de fonologia.
            </p>
          }
        />

        <Exercise
          level="Contextualizado"
          title="4. Acordo Ortográfico em Contexto"
          statement={
            <p>
              Um estudante escreveu em sua redação: "A <em>idéia</em> era
              simples, mas a <em>assembléia</em> não a aprovou." Considerando o
              Acordo Ortográfico de 2009, a grafia correta dessas palavras é:
            </p>
          }
          options={[
            {
              letter: "a",
              text: "idéia e assembléia (grafias ainda válidas).",
            },
            {
              letter: "b",
              text: "ideia e assembleia (sem acento).",
              correct: true,
            },
            {
              letter: "c",
              text: "ideia e assembléia (apenas a primeira muda).",
            },
            {
              letter: "d",
              text: "idéia e assembleia (apenas a segunda muda).",
            },
          ]}
          resolution={
            <p>
              O Acordo Ortográfico de 2009 eliminou o acento agudo nos ditongos
              abertos "ei" e "oi" em palavras paroxítonas. Tanto "idéia" quanto
              "assembléia" são paroxítonas com ditongo "ei" — ambas perderam o
              acento, passando a "ideia" e "assembleia". O mesmo vale para
              "plateia", "europeia", "heroico", etc.
            </p>
          }
        />

        <Exercise
          level="Contextualizado"
          title="5. Gramática Normativa e Preconceito Linguístico"
          statement={
            <p>
              Um texto acadêmico afirma: "A gramática normativa não descreve a
              língua como ela é de fato falada; ela prescreve um padrão de
              prestígio social, que historicamente excluiu variedades populares
              e regionais." Com base nos conceitos de gramática descritiva,
              normativa e internalizada, essa afirmação:
            </p>
          }
          options={[
            {
              letter: "a",
              text: "está errada, pois a gramática normativa registra todos os usos linguísticos.",
            },
            {
              letter: "b",
              text: "está parcialmente certa: a normativa descreve e prescreve ao mesmo tempo.",
            },
            {
              letter: "c",
              text: "está correta: a gramática normativa prescreve o padrão culto, enquanto a descritiva registra os usos reais sem hierarquia de valor.",
              correct: true,
            },
            {
              letter: "d",
              text: "está errada, pois toda variedade linguística é normativa por natureza.",
            },
          ]}
          resolution={
            <p>
              A afirmação está correta do ponto de vista da Linguística moderna.
              A <strong>gramática normativa</strong> parte de uma variedade de
              prestígio (geralmente a língua literária ou culta urbana) e a
              estabelece como padrão, rotulando outros usos como "erros". A{" "}
              <strong>gramática descritiva</strong>, por sua vez, registra como
              a língua é efetivamente usada por seus falantes, reconhecendo que
              todas as variedades — regionais, sociais, históricas — possuem
              gramática própria e são igualmente sistemáticas. A gramática
              internalizada é o conhecimento inconsciente que qualquer falante
              nativo possui, independentemente de escolaridade.
            </p>
          }
        />
      </section>
    </article>
  );
}
