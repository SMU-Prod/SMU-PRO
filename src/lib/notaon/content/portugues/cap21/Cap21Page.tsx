"use client";
import { ExerciseCard as Exercise } from "@/lib/notaon/components/ExerciseCard";
export default function Cap21Page() {
  return (
    <article className="lesson-landing">
      <section className="lesson-hero">
        <div>
          <span className="lesson-badge">Português • Capítulo 21</span>
          <h1>Regência Verbal e Nominal</h1>
          <p>
            Regência é a relação de dependência gramatical entre uma palavra <strong>regente</strong> — verbo
            ou nome — e seu complemento. Dominar essa relação significa escolher corretamente as
            preposições, compreender mudanças de sentido e acertar as questões de norma culta que
            o ENEM apresenta com alta frequência.
          </p>
        </div>
      </section>

      {/* ─── Seção 1 ─── */}
      <section className="lesson-section">
        <span className="section-kicker">Fundamentos</span>
        <h2>1. O que é Regência?</h2>
        <p>
          Em gramática, <strong>regência</strong> é a relação de subordinação que uma palavra impõe
          sobre outra. A palavra que impõe a relação chama-se <em>regente</em>; a que é subordinada,
          <em>regido</em>. Quando a palavra regente é um <strong>verbo</strong>, falamos em
          <em>regência verbal</em>; quando é um <strong>nome</strong> (substantivo, adjetivo ou
          advérbio), falamos em <em>regência nominal</em>.
        </p>
        <p>
          O nó central da regência é a <strong>preposição</strong>: é ela que conecta regente e
          regido. Usar a preposição errada (ou omiti-la indevidamente) viola a norma culta e é
          exatamente o tipo de erro que o ENEM cobra em questões de adequação linguística e
          reescrita de frases.
        </p>

        <div className="lesson-grid">
          <div className="lesson-card">
            <span>🔗</span>
            <h3>Verbo regente</h3>
            <p>
              Determina se seu complemento (objeto) é introduzido ou não por preposição. Ex.:
              <em> "Aspirou o pó"</em> — sem prep.; <em>"Aspiro à carreira jurídica"</em> — com
              prep.
            </p>
          </div>
          <div className="lesson-card">
            <span>🏷️</span>
            <h3>Nome regente</h3>
            <p>
              Substantivos, adjetivos e advérbios também exigem complementos preposicionados. Ex.:
              <em> "capaz de vencer"</em>, <em>"ansioso por notícias"</em>.
            </p>
          </div>
          <div className="lesson-card">
            <span>⚠️</span>
            <h3>Mudança de sentido</h3>
            <p>
              Vários verbos possuem <strong>duas regências</strong>, cada uma gerando um
              significado distinto. Reconhecer essa dualidade é essencial para interpretar e
              reescrever textos corretamente.
            </p>
          </div>
          <div className="lesson-card">
            <span>📝</span>
            <h3>Crase associada</h3>
            <p>
              A crase ocorre quando a regência exige a preposição <em>a</em> diante de palavra
              feminina que aceita artigo. Regência e crase são inseparáveis.
            </p>
          </div>
        </div>

        <div className="lesson-highlight">
          <strong>Dica ENEM:</strong> O ENEM raramente pergunta a nomenclatura "transitivo direto"
          ou "indireto". Em vez disso, apresenta uma frase e pede para identificar qual versão
          reescrita está <em>correta</em> ou é <em>equivalente em sentido</em>. Conhecer a
          regência é a chave para essas questões.
        </div>
      </section>

      {/* ─── Seção 2 ─── */}
      <section className="lesson-section">
        <span className="section-kicker">Visão geral</span>
        <h2>2. Mapa da Regência Verbal</h2>
        <p>
          O fluxograma abaixo mostra como classificar a regência de qualquer verbo: verifique se
          ele exige complemento e se esse complemento é precedido ou não por preposição.
        </p>

        <figure className="lesson-figure">
          <svg
            viewBox="0 0 760 320"
            width="760"
            height="320"
            aria-label="Fluxograma de classificação da regência verbal: verbo exige complemento? Não → intransitivo; Sim → com preposição? Não → transitivo direto; Sim → transitivo indireto"
          >
            {/* fundo */}
            <rect width="760" height="320" rx="12" fill="#f8fafc" />

            {/* nó inicial */}
            <rect x="290" y="20" width="180" height="50" rx="8" fill="#6366f1" />
            <text x="380" y="50" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold">
              VERBO
            </text>

            {/* seta para baixo */}
            <line x1="380" y1="70" x2="380" y2="110" stroke="#6366f1" strokeWidth="2" />
            <polygon points="380,118 374,104 386,104" fill="#6366f1" />

            {/* diamante: exige complemento? */}
            <polygon points="380,118 470,168 380,218 290,168" fill="#e0e7ff" stroke="#6366f1" strokeWidth="2" />
            <text x="380" y="163" textAnchor="middle" fill="#3730a3" fontSize="12" fontWeight="bold">
              Exige
            </text>
            <text x="380" y="178" textAnchor="middle" fill="#3730a3" fontSize="12" fontWeight="bold">
              complemento?
            </text>

            {/* ramo NÃO → esquerda */}
            <line x1="290" y1="168" x2="120" y2="168" stroke="#94a3b8" strokeWidth="2" />
            <polygon points="112,168 126,162 126,174" fill="#94a3b8" />
            <text x="205" y="158" textAnchor="middle" fill="#64748b" fontSize="11">
              NÃO
            </text>
            <rect x="20" y="143" width="140" height="50" rx="8" fill="#f1f5f9" stroke="#94a3b8" strokeWidth="1.5" />
            <text x="90" y="168" textAnchor="middle" fill="#475569" fontSize="12" fontWeight="bold">
              Intransitivo
            </text>
            <text x="90" y="183" textAnchor="middle" fill="#64748b" fontSize="10">
              Ex.: "Ela chegou."
            </text>

            {/* ramo SIM → baixo */}
            <line x1="380" y1="218" x2="380" y2="256" stroke="#6366f1" strokeWidth="2" />
            <polygon points="380,264 374,250 386,250" fill="#6366f1" />
            <text x="395" y="244" fill="#6366f1" fontSize="11">
              SIM
            </text>

            {/* diamante: com preposição? */}
            <polygon points="380,264 470,294 380,318 290,294" fill="#e0e7ff" stroke="#6366f1" strokeWidth="2" />
            <text x="380" y="289" textAnchor="middle" fill="#3730a3" fontSize="11" fontWeight="bold">
              Com preposição?
            </text>

            {/* ramo NÃO direito → TD */}
            <line x1="470" y1="294" x2="590" y2="260" stroke="#10b981" strokeWidth="2" />
            <polygon points="598,257 584,260 590,272" fill="#10b981" />
            <text x="535" y="269" textAnchor="middle" fill="#065f46" fontSize="10">
              NÃO
            </text>
            <rect x="598" y="235" width="150" height="50" rx="8" fill="#d1fae5" stroke="#10b981" strokeWidth="1.5" />
            <text x="673" y="258" textAnchor="middle" fill="#065f46" fontSize="12" fontWeight="bold">
              Trans. Direto
            </text>
            <text x="673" y="273" textAnchor="middle" fill="#065f46" fontSize="10">
              Ex.: "Vi o filme."
            </text>

            {/* ramo SIM esquerdo → TI */}
            <line x1="290" y1="294" x2="170" y2="260" stroke="#f59e0b" strokeWidth="2" />
            <polygon points="162,257 170,270 176,258" fill="#f59e0b" />
            <text x="222" y="269" textAnchor="middle" fill="#92400e" fontSize="10">
              SIM
            </text>
            <rect x="12" y="235" width="150" height="50" rx="8" fill="#fef3c7" stroke="#f59e0b" strokeWidth="1.5" />
            <text x="87" y="258" textAnchor="middle" fill="#92400e" fontSize="12" fontWeight="bold">
              Trans. Indireto
            </text>
            <text x="87" y="273" textAnchor="middle" fill="#92400e" fontSize="10">
              Ex.: "Gostei do filme."
            </text>
          </svg>
          <figcaption>Fluxograma: como classificar a regência verbal de qualquer verbo.</figcaption>
        </figure>

        <div className="math-block">
          <h3>Verbos transitivos diretos e indiretos (bitransitivos)</h3>
          <p>
            Alguns verbos aceitam simultaneamente objeto direto (sem prep.) e objeto indireto (com
            prep.), chamando-se <em>transitivos diretos e indiretos</em> ou <em>bitransitivos</em>.
            Exemplo: <strong>"Dei um presente ao amigo"</strong> — <em>um presente</em> = OD;
            <em> ao amigo</em> = OI (preposição <em>a</em>).
          </p>
        </div>
      </section>

      {/* ─── Seção 3 ─── */}
      <section className="lesson-section">
        <span className="section-kicker">Regência verbal</span>
        <h2>3. Verbos com Dupla Regência e Mudança de Sentido</h2>
        <p>
          A dupla regência é o ponto mais cobrado no ENEM. Cada par de frases abaixo demonstra
          como a presença ou ausência de preposição modifica completamente o significado.
        </p>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Verbo</th>
                <th>Sem preposição (VTD)</th>
                <th>Com preposição (VTI)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Aspirar</strong></td>
                <td>Aspirar o ar / inspirar, sugar<br /><em>"O aparelho aspira a poeira."</em></td>
                <td>Aspirar <em>a</em> = almejar, desejar<br /><em>"Aspiro a uma vida tranquila."</em></td>
              </tr>
              <tr>
                <td><strong>Assistir</strong></td>
                <td>Assistir alguém = prestar assistência, socorrer<br /><em>"O médico assistiu o doente."</em></td>
                <td>Assistir <em>a</em> = presenciar, ver<br /><em>"Assisti ao documentário."</em></td>
              </tr>
              <tr>
                <td><strong>Visar</strong></td>
                <td>Visar algo = pôr visto, mirar (com arma)<br /><em>"Visou o alvo."</em></td>
                <td>Visar <em>a</em> = ter como objetivo<br /><em>"A lei visa ao bem comum."</em></td>
              </tr>
              <tr>
                <td><strong>Querer</strong></td>
                <td>Querer algo = desejar, querer bem (popular)<br /><em>"Quero paz."</em></td>
                <td>Querer <em>a</em> = ter afeição, estimar<br /><em>"Quero muito a meu cão."</em></td>
              </tr>
              <tr>
                <td><strong>Implicar</strong></td>
                <td>Implicar algo = acarretar, ter como consequência<br /><em>"A greve implica prejuízo."</em></td>
                <td>Implicar <em>em</em> = envolver-se, meter-se<br /><em>"Ele implicou em confusões."</em></td>
              </tr>
              <tr>
                <td><strong>Proceder</strong></td>
                <td>Proceder <em>a</em> = realizar, efetuar<br /><em>"Procedem-se às investigações."</em></td>
                <td>Proceder <em>de</em> = originar-se<br /><em>"Ele procede de família humilde."</em></td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="lesson-highlight">
          <strong>Atenção ENEM:</strong> Em questões de reescrita, verifique sempre se a troca de
          preposição altera o sentido. "A lei visa o bem comum" (pôr visto?) é diferente de "A lei
          visa <em>ao</em> bem comum" (tem como objetivo). O exame adora esse armadilha.
        </div>
      </section>

      {/* ─── Seção 4 ─── */}
      <section className="lesson-section">
        <span className="section-kicker">Verbos difíceis</span>
        <h2>4. Verbos que Causam Mais Erros no ENEM</h2>
        <p>
          Alguns verbos possuem regência contraintuitiva — o uso popular conflita com a norma culta.
          Veja os principais:
        </p>

        <div className="lesson-grid">
          <div className="lesson-card">
            <span>🚶</span>
            <h3>Chegar / Ir</h3>
            <p>
              Na norma culta: <em>"Cheguei <strong>a</strong> São Paulo"</em> ou <em>"Cheguei
              <strong>para</strong> São Paulo"</em> (indicando destino / finalidade). O uso informal
              "chegar em" é aceito em contextos coloquiais, mas o ENEM cobra a norma formal.
            </p>
          </div>
          <div className="lesson-card">
            <span>📣</span>
            <h3>Obedecer / Desobedecer</h3>
            <p>
              Transitivos <strong>indiretos</strong>: exigem preposição <em>a</em>. Correto:
              <em>"Obedecemos <strong>às</strong> regras"</em>. Errado (popular): "Obedecemos as
              regras" (sem crase).
            </p>
          </div>
          <div className="lesson-card">
            <span>💛</span>
            <h3>Preferir</h3>
            <p>
              Exige preposição <em>a</em> para o segundo termo: <em>"Prefiro teatro <strong>a</strong>
              cinema"</em>. Jamais use "do que": "prefiro teatro <strong>do que</strong> cinema" é
              erro grave na norma padrão.
            </p>
          </div>
          <div className="lesson-card">
            <span>🙏</span>
            <h3>Perdoar</h3>
            <p>
              Perdoar <strong>pessoa</strong> = objeto indireto: <em>"Perdoei <strong>ao</strong>
              inimigo"</em>. Perdoar <strong>coisa</strong> = objeto direto: <em>"Perdoei o
              erro"</em>. A natureza do complemento muda a regência.
            </p>
          </div>
          <div className="lesson-card">
            <span>💰</span>
            <h3>Pagar / Agradecer</h3>
            <p>
              Pessoa = objeto indireto: <em>"Paguei <strong>ao</strong> funcionário"</em> /
              <em>"Agradeci <strong>ao</strong> professor"</em>. Coisa = objeto direto: <em>"Paguei
              a conta"</em> / <em>"Agradeci o favor"</em>.
            </p>
          </div>
          <div className="lesson-card">
            <span>💑</span>
            <h3>Namorar</h3>
            <p>
              Transitivo <strong>direto</strong> na norma culta: <em>"Ela namora <strong>o</strong>
              João"</em>. O uso popular "namorar <strong>com</strong> alguém" é coloquial e não deve
              ser empregado na redação formal.
            </p>
          </div>
          <div className="lesson-card">
            <span>🧠</span>
            <h3>Lembrar / Esquecer</h3>
            <p>
              Sem preposição = OD: <em>"Lembro o compromisso"</em>. Com preposição <em>de</em> = OI
              (uso pronominal): <em>"Lembro-me <strong>do</strong> compromisso"</em>. Ambas
              corretas; mudam a estrutura sintática.
            </p>
          </div>
          <div className="lesson-card">
            <span>📍</span>
            <h3>Responder</h3>
            <p>
              Responder <em>a</em> algo / alguém: <em>"Respondeu <strong>à</strong> pergunta"</em>.
              Aceita-se OD em contextos específicos (responder um ofício), mas a regência padrão
              pede preposição <em>a</em>.
            </p>
          </div>
        </div>

        <div className="math-block">
          <h3>Macete para "pagar" e "agradecer"</h3>
          <p>
            Pergunte-se: <em>quem recebe a ação é gente?</em> Se sim, use preposição <em>a</em>
            (OI). Se é coisa ou abstrato, use sem preposição (OD). "Paguei <strong>ao</strong>
            entregador" (gente = OI) · "Paguei <strong>a</strong> conta" (coisa = OD).
          </p>
        </div>
      </section>

      {/* ─── Seção 5 ─── */}
      <section className="lesson-section">
        <span className="section-kicker">Timeline dos verbos</span>
        <h2>5. Linha do Tempo: Verbos Mais Cobrados no ENEM</h2>
        <p>
          O diagrama a seguir organiza os principais verbos de dupla regência em uma linha visual,
          mostrando o contraste entre uso popular e norma culta.
        </p>

        <figure className="lesson-figure">
          <svg
            viewBox="0 0 760 400"
            width="760"
            height="400"
            aria-label="Diagrama comparando o uso popular e a norma culta dos verbos aspirar, assistir, visar, preferir, obedecer, namorar"
          >
            <rect width="760" height="400" rx="12" fill="#f8fafc" />

            {/* cabeçalho colunas */}
            <rect x="10" y="10" width="220" height="36" rx="6" fill="#6366f1" />
            <text x="120" y="33" textAnchor="middle" fill="white" fontSize="13" fontWeight="bold">Verbo</text>

            <rect x="240" y="10" width="240" height="36" rx="6" fill="#dc2626" />
            <text x="360" y="33" textAnchor="middle" fill="white" fontSize="13" fontWeight="bold">❌ Uso popular (evitar no ENEM)</text>

            <rect x="490" y="10" width="260" height="36" rx="6" fill="#16a34a" />
            <text x="620" y="33" textAnchor="middle" fill="white" fontSize="13" fontWeight="bold">✅ Norma culta</text>

            {/* linhas de dados */}
            {[
              ["Aspirar", "Aspiro o cargo.", "Aspiro ao cargo."],
              ["Assistir", "Assisti o filme.", "Assisti ao filme."],
              ["Visar", "A lei visa o bem.", "A lei visa ao bem."],
              ["Preferir", "Prefiro teatro do que cinema.", "Prefiro teatro a cinema."],
              ["Obedecer", "Obedecemos as leis.", "Obedecemos às leis."],
              ["Namorar", "Ela namora com ele.", "Ela namora ele."],
            ].map(([verbo, errado, certo], i) => {
              const y = 56 + i * 57;
              const bg = i % 2 === 0 ? "#f1f5f9" : "#ffffff";
              return (
                <g key={verbo}>
                  <rect x="10" y={y} width="220" height="50" rx="4" fill={bg} stroke="#e2e8f0" />
                  <text x="120" y={y + 20} textAnchor="middle" fill="#1e293b" fontSize="12" fontWeight="bold">{verbo}</text>

                  <rect x="240" y={y} width="240" height="50" rx="4" fill="#fee2e2" stroke="#fca5a5" />
                  <text x="360" y={y + 20} textAnchor="middle" fill="#991b1b" fontSize="11">{errado}</text>

                  <rect x="490" y={y} width="260" height="50" rx="4" fill="#dcfce7" stroke="#86efac" />
                  <text x="620" y={y + 20} textAnchor="middle" fill="#14532d" fontSize="11">{certo}</text>
                </g>
              );
            })}
          </svg>
          <figcaption>Tabela visual: uso popular × norma culta nos verbos mais cobrados.</figcaption>
        </figure>
      </section>

      {/* ─── Seção 6 ─── */}
      <section className="lesson-section">
        <span className="section-kicker">Regência nominal</span>
        <h2>6. Regência Nominal: Adjetivos e Substantivos com Preposição Fixa</h2>
        <p>
          Na <strong>regência nominal</strong>, são os <em>nomes</em> (adjetivos e substantivos)
          que determinam qual preposição deve introduzir seu complemento. Diferentemente dos verbos,
          o nome não muda de sentido com a troca de preposição — simplesmente fica errado ou correto.
        </p>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Nome (adjetivo / substantivo)</th>
                <th>Preposição exigida</th>
                <th>Exemplo correto</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Acessível / Inacessível</strong></td>
                <td><em>a</em></td>
                <td>"O museu é acessível <em>a</em> todos."</td>
              </tr>
              <tr>
                <td><strong>Ansioso</strong></td>
                <td><em>por</em> / <em>de</em></td>
                <td>"Estou ansioso <em>por</em> notícias."</td>
              </tr>
              <tr>
                <td><strong>Capaz / Incapaz</strong></td>
                <td><em>de</em></td>
                <td>"Ela é capaz <em>de</em> vencer."</td>
              </tr>
              <tr>
                <td><strong>Diferente</strong></td>
                <td><em>de</em></td>
                <td>"Este método é diferente <em>do</em> outro."</td>
              </tr>
              <tr>
                <td><strong>Hábil</strong></td>
                <td><em>em</em></td>
                <td>"Ele é hábil <em>em</em> negociações."</td>
              </tr>
              <tr>
                <td><strong>Propenso</strong></td>
                <td><em>a</em></td>
                <td>"Ela é propensa <em>a</em> exageros."</td>
              </tr>
              <tr>
                <td><strong>Saudade</strong></td>
                <td><em>de</em></td>
                <td>"Tenho saudade <em>do</em> Brasil."</td>
              </tr>
              <tr>
                <td><strong>Orgulhoso</strong></td>
                <td><em>de</em></td>
                <td>"Estou orgulhoso <em>de</em> você."</td>
              </tr>
              <tr>
                <td><strong>Compatível</strong></td>
                <td><em>com</em></td>
                <td>"O plano é compatível <em>com</em> os recursos."</td>
              </tr>
              <tr>
                <td><strong>Relacionado</strong></td>
                <td><em>com / a</em></td>
                <td>"O problema está relacionado <em>com</em> a falta de gestão."</td>
              </tr>
              <tr>
                <td><strong>Favorável / Desfavorável</strong></td>
                <td><em>a</em></td>
                <td>"Somos favoráveis <em>à</em> reforma."</td>
              </tr>
              <tr>
                <td><strong>Necessário</strong></td>
                <td><em>a</em></td>
                <td>"O esforço é necessário <em>ao</em> sucesso."</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="lesson-highlight">
          <strong>Estratégia de memorização:</strong> Para adjetivos, pergunte-se com qual
          preposição o substantivo equivalente costuma aparecer. <em>Orgulho de → orgulhoso de</em>;
          <em> ansiedade por → ansioso por</em>; <em>compatibilidade com → compatível com</em>.
          A família lexical ajuda a fixar a regência.
        </div>
      </section>

      {/* ─── Seção 7 ─── */}
      <section className="lesson-section">
        <span className="section-kicker">Crase e regência</span>
        <h2>7. Regência e Crase: Uma Relação Inseparável</h2>
        <p>
          A crase (acento grave `À`) ocorre na fusão da <strong>preposição <em>a</em></strong> com
          o <strong>artigo definido feminino <em>a</em></strong>. Para que essa fusão aconteça, é
          imprescindível que a regência — verbal ou nominal — exija a preposição <em>a</em>.
        </p>

        <div className="math-block">
          <h3>Passo a passo para decidir sobre a crase</h3>
          <p>
            1. Identifique a palavra regente (verbo ou nome) e sua regência obrigatória.<br />
            2. Verifique se a regência exige a preposição <em>a</em>.<br />
            3. Verifique se a palavra seguinte é feminina e aceita artigo definido.<br />
            4. Se ambas as condições forem verdadeiras → <strong>use crase</strong>.<br /><br />
            Exemplo: <em>"Aspiro <strong>à</strong> liderança"</em> → verbo <em>aspirar a</em>
            + substantivo feminino <em>liderança</em> com artigo → crase obrigatória.
          </p>
        </div>

        <div className="lesson-grid">
          <div className="lesson-card">
            <span>✅</span>
            <h3>Com crase</h3>
            <p>
              "Assisti <em>à</em> peça." (assistir <em>a</em> + artigo feminino)<br />
              "Cheguei <em>à</em> cidade." (chegar <em>a</em> + artigo feminino)<br />
              "Somos favoráveis <em>à</em> proposta." (favorável <em>a</em> + artigo feminino)
            </p>
          </div>
          <div className="lesson-card">
            <span>❌</span>
            <h3>Sem crase</h3>
            <p>
              "Assisti <em>ao</em> espetáculo." (masculino: <em>a + o</em> = ao)<br />
              "Aspiro <em>a</em> um cargo." (artigo indefinido: não há fusão)<br />
              "Gostei <em>de</em> você." (regência pede <em>de</em>, não <em>a</em>)
            </p>
          </div>
        </div>

        <div className="lesson-highlight">
          <strong>Verbos que exigem <em>a</em> e geram crase frequente:</strong> assistir a, aspirar a,
          chegar a, ir a, visar a, obedecer a, referir-se a, responder a, propender a, tender a,
          recorrer a, aludir a. Memorize este grupo e metade das questões de crase se resolvem
          sozinhas.
        </div>
      </section>

      {/* ─── Seção 8 ─── */}
      <section className="lesson-section">
        <span className="section-kicker">Casos especiais</span>
        <h2>8. Verbos Frequentemente Confundidos no ENEM</h2>
        <p>
          Além dos já vistos, outros verbos merecem atenção especial por apresentarem nuances que
          o ENEM explora em questões de reescrita e equivalência semântica.
        </p>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Verbo</th>
                <th>Regência correta</th>
                <th>Erro comum</th>
                <th>Observação</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Preferir</strong></td>
                <td>"Prefiro A <em>a</em> B"</td>
                <td>"Prefiro A <em>do que</em> B"</td>
                <td>"Do que" é influência de "mais que/mais do que". Proibido na norma padrão.</td>
              </tr>
              <tr>
                <td><strong>Implicar</strong> (acarretar)</td>
                <td>VTD: "implica risco"</td>
                <td>"implica <em>em</em> risco"</td>
                <td>Quando significa "acarretar", é VTD. Com <em>em</em> significa "envolver-se".</td>
              </tr>
              <tr>
                <td><strong>Proceder</strong></td>
                <td>"proceder <em>a</em>" ou "proceder <em>de</em>"</td>
                <td>"proceder" isolado sem preposição correta</td>
                <td><em>a</em> = realizar; <em>de</em> = originar-se. Sentidos opostos!</td>
              </tr>
              <tr>
                <td><strong>Lembrar-se</strong></td>
                <td>"lembrar-se <em>de</em>"</td>
                <td>"lembrar de" sem pronome</td>
                <td>Com pronome reflexivo exige <em>de</em>; sem pronome, é VTD: "lembro o fato".</td>
              </tr>
              <tr>
                <td><strong>Esquecer-se</strong></td>
                <td>"esquecer-se <em>de</em>"</td>
                <td>"esqueci de fazer" (certo no reg. pron.; "esqueci de" sem pronome = erro)</td>
                <td>Sem pronome: "Esqueci o nome." Com pronome: "Esqueci-me do nome."</td>
              </tr>
              <tr>
                <td><strong>Simpatizar / Antipatizar</strong></td>
                <td>"simpatizar <em>com</em>"</td>
                <td>"simpatizar a"</td>
                <td>Exigem preposição <em>com</em>. "Simpatizei com o candidato."</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="lesson-highlight">
          <strong>Dica para "preferir":</strong> Lembre-se que <em>preferir</em> já carrega em
          si a ideia de "mais" — por isso "prefiro mais A do que B" é pleonástico e errado.
          Use apenas: "Prefiro A a B."
        </div>
      </section>

      {/* ─── Seção 9 ─── */}
      <section className="lesson-section">
        <span className="section-kicker">Aplicação textual</span>
        <h2>9. Regência em Textos: Leitura e Reescrita</h2>
        <p>
          O ENEM não cobra regência de forma isolada — ela aparece <em>dentro de textos</em>. Saber
          reconhecer se a troca de preposição altera o sentido (ou mantém a equivalência) é a
          habilidade avaliada.
        </p>

        <div className="math-block">
          <h3>Exemplo de questão de reescrita</h3>
          <p>
            Texto original: <em>"O médico assistiu ao paciente durante toda a noite."</em><br /><br />
            Reescrita A: "O médico viu o paciente durante toda a noite." → <strong>muda o sentido</strong>
            (assistir = prestar cuidados; ver = perceber visualmente).<br /><br />
            Reescrita B: "O médico prestou assistência ao paciente durante toda a noite." →
            <strong>mantém o sentido</strong>, pois "assistir a alguém" = prestar assistência.<br /><br />
            Conclusão: "assistir" sem preposição = ajudar; com preposição <em>a</em> = presenciar
            OU (quando o objeto é pessoa) = prestar assistência. O contexto desambigua.
          </p>
        </div>

        <div className="lesson-grid">
          <div className="lesson-card">
            <span>🔍</span>
            <h3>Passo 1: Identifique o verbo</h3>
            <p>
              Localize o verbo principal da oração e verifique se há ou não preposição introduzindo
              o complemento.
            </p>
          </div>
          <div className="lesson-card">
            <span>🗂️</span>
            <h3>Passo 2: Consulte a regência</h3>
            <p>
              Com base na preposição presente (ou ausente), determine o sentido ativado — ajuda a
              escolher a paráfrase correta.
            </p>
          </div>
          <div className="lesson-card">
            <span>⚖️</span>
            <h3>Passo 3: Compare as alternativas</h3>
            <p>
              Nas questões de equivalência, elimine opções que alterem o sentido ou violem a norma
              culta. A regência será o critério decisivo.
            </p>
          </div>
          <div className="lesson-card">
            <span>📌</span>
            <h3>Passo 4: Atenção à crase</h3>
            <p>
              Se a reescrita mantiver verbo de regência <em>a</em> seguido de substantivo feminino
              com artigo, a crase é obrigatória na versão culta.
            </p>
          </div>
        </div>
      </section>

      {/* ─── Seção 10 ─── */}
      <section className="lesson-section">
        <span className="section-kicker">Consolidação</span>
        <h2>10. Mapa Mental: Regência Verbal e Nominal</h2>
        <p>
          O diagrama abaixo organiza visualmente todos os grupos de regência estudados,
          facilitando a revisão rápida antes da prova.
        </p>

        <figure className="lesson-figure">
          <svg
            viewBox="0 0 760 420"
            width="760"
            height="420"
            aria-label="Mapa mental de regência verbal e nominal com ramificações para verbos de dupla regência, regência nominal e relação com a crase"
          >
            <rect width="760" height="420" rx="12" fill="#f8fafc" />

            {/* núcleo central */}
            <ellipse cx="380" cy="210" rx="100" ry="45" fill="#6366f1" />
            <text x="380" y="205" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold">REGÊNCIA</text>
            <text x="380" y="222" textAnchor="middle" fill="#c7d2fe" fontSize="11">verbal · nominal</text>

            {/* ramo: dupla regência */}
            <line x1="280" y1="195" x2="145" y2="120" stroke="#6366f1" strokeWidth="2" strokeDasharray="4" />
            <ellipse cx="105" cy="105" rx="95" ry="38" fill="#818cf8" />
            <text x="105" y="100" textAnchor="middle" fill="white" fontSize="11" fontWeight="bold">Dupla Regência</text>
            <text x="105" y="116" textAnchor="middle" fill="#e0e7ff" fontSize="10">aspirar, assistir, visar…</text>

            {/* ramo: regência nominal */}
            <line x1="280" y1="230" x2="140" y2="310" stroke="#6366f1" strokeWidth="2" strokeDasharray="4" />
            <ellipse cx="100" cy="325" rx="95" ry="38" fill="#818cf8" />
            <text x="100" y="320" textAnchor="middle" fill="white" fontSize="11" fontWeight="bold">Regência Nominal</text>
            <text x="100" y="336" textAnchor="middle" fill="#e0e7ff" fontSize="10">capaz de, ansioso por…</text>

            {/* ramo: crase */}
            <line x1="480" y1="195" x2="615" y2="120" stroke="#6366f1" strokeWidth="2" strokeDasharray="4" />
            <ellipse cx="655" cy="105" rx="95" ry="38" fill="#a78bfa" />
            <text x="655" y="100" textAnchor="middle" fill="white" fontSize="11" fontWeight="bold">Crase Associada</text>
            <text x="655" y="116" textAnchor="middle" fill="#ede9fe" fontSize="10">reg. a + art. fem.</text>

            {/* ramo: preferir / namorar */}
            <line x1="480" y1="230" x2="615" y2="310" stroke="#6366f1" strokeWidth="2" strokeDasharray="4" />
            <ellipse cx="655" cy="325" rx="95" ry="38" fill="#a78bfa" />
            <text x="655" y="320" textAnchor="middle" fill="white" fontSize="11" fontWeight="bold">Erros Frequentes</text>
            <text x="655" y="336" textAnchor="middle" fill="#ede9fe" fontSize="10">preferir a, namorar (sem com)</text>

            {/* ramo inferior: pagar / perdoar */}
            <line x1="380" y1="255" x2="380" y2="345" stroke="#6366f1" strokeWidth="2" strokeDasharray="4" />
            <ellipse cx="380" cy="370" rx="110" ry="38" fill="#c4b5fd" />
            <text x="380" y="365" textAnchor="middle" fill="#3730a3" fontSize="11" fontWeight="bold">Pessoa × Coisa</text>
            <text x="380" y="381" textAnchor="middle" fill="#4c1d95" fontSize="10">pagar, perdoar, agradecer</text>
          </svg>
          <figcaption>Mapa mental: grupos de regência verbal e nominal mais cobrados no ENEM.</figcaption>
        </figure>

        <div className="lesson-highlight">
          <strong>Resumo para a prova:</strong>
          <ul>
            <li><em>Aspirar a</em> = almejar · <em>Aspirar</em> (sem prep.) = sugar/inalar</li>
            <li><em>Assistir a</em> = ver/presenciar · <em>Assistir</em> (sem prep.) = socorrer</li>
            <li><em>Visar a</em> = objetivar · <em>Visar</em> (sem prep.) = pôr visto, mirar</li>
            <li><em>Preferir A a B</em> (nunca "do que")</li>
            <li><em>Obedecer/Desobedecer a</em> — sempre com preposição</li>
            <li><em>Pagar/Agradecer</em>: pessoa = OI (com <em>a</em>); coisa = OD (sem prep.)</li>
            <li><em>Namorar</em> = VTD (sem "com") · <em>Implicar</em> = VTD quando "acarretar"</li>
            <li>Regência nominal: capaz <em>de</em>, ansioso <em>por</em>, hábil <em>em</em>, compatível <em>com</em></li>
            <li>Toda regência com <em>a</em> + substantivo feminino articulado → crase obrigatória</li>
          </ul>
        </div>
      </section>

      {/* ─── Exercícios ─── */}
      <section className="lesson-section">
        <span className="section-kicker">Exercícios</span>
        <h2>Questões Comentadas</h2>

        <Exercise
          level="Básico"
          title="1. Regência do verbo obedecer"
          statement={
            <p>
              Assinale a alternativa que apresenta a frase em conformidade com a norma culta da
              língua portuguesa quanto à regência do verbo <strong>obedecer</strong>:
            </p>
          }
          options={[
            { letter: "a", text: "Os alunos obedeceram as instruções da professora." },
            { letter: "b", text: "Os alunos obedeceram com as instruções da professora." },
            { letter: "c", text: "Os alunos obedeceram às instruções da professora.", correct: true },
            { letter: "d", text: "Os alunos obedeceram para as instruções da professora." },
          ]}
          resolution={
            <p>
              O verbo <strong>obedecer</strong> é transitivo indireto e exige a preposição{" "}
              <em>a</em>. Como <em>instruções</em> é um substantivo feminino plural precedido de
              artigo definido, a preposição <em>a</em> se funde com o artigo <em>as</em>, formando
              a contração <em>às</em> (com crase). A alternativa correta é a letra C.
            </p>
          }
        />

        <Exercise
          level="Intermediário"
          title="2. Dupla regência do verbo aspirar"
          statement={
            <p>
              Analise os dois enunciados abaixo e indique a afirmação correta sobre a regência do
              verbo <strong>aspirar</strong>:<br />
              I. "O técnico <em>aspirou o pó</em> da máquina."<br />
              II. "A jovem <em>aspira a uma carreira</em> internacional."
            </p>
          }
          options={[
            { letter: "a", text: "Em I, o verbo aspirar significa almejar e é transitivo indireto." },
            { letter: "b", text: "Em II, a preposição a é incorreta; o certo seria aspirar em." },
            {
              letter: "c",
              text: "Em I, aspirar significa sugar/inalar (VTD); em II, significa almejar (VTI com preposição a).",
              correct: true,
            },
            { letter: "d", text: "Nos dois casos, aspirar tem o mesmo sentido e a mesma regência." },
          ]}
          resolution={
            <p>
              O verbo <strong>aspirar</strong> possui duas regências com sentidos distintos. Sem
              preposição (VTD), significa <em>sugar, inalar</em>: "aspirou o pó" = sugou o pó.
              Com a preposição <em>a</em> (VTI), significa <em>almejar, desejar</em>: "aspira a
              uma carreira" = almeja uma carreira. A alternativa C descreve corretamente essa
              dualidade.
            </p>
          }
        />

        <Exercise
          level="Avançado"
          title="3. Regência de preferir e norma padrão"
          statement={
            <p>
              Em qual das alternativas o verbo <strong>preferir</strong> está empregado de acordo
              com a norma culta da língua portuguesa?
            </p>
          }
          options={[
            { letter: "a", text: "Prefiro ler do que assistir televisão." },
            { letter: "b", text: "Prefiro mais ler do que assistir televisão." },
            { letter: "c", text: "Prefiro ler a assistir televisão.", correct: true },
            { letter: "d", text: "Prefiro ler em vez de assistir televisão." },
          ]}
          resolution={
            <p>
              O verbo <strong>preferir</strong> exige a preposição <em>a</em> para introduzir o
              segundo termo da comparação: "prefiro A <em>a</em> B". As construções com{" "}
              <em>do que</em> ou <em>mais... do que</em> são vulgarismos resultantes da influência
              de "mais que/mais do que" e devem ser evitadas na norma padrão. A alternativa D usa
              "em vez de", que é aceitável informalmente, mas a única opção em total conformidade
              com a norma culta é a letra C.
            </p>
          }
        />

        <Exercise
          level="Contextualizado"
          title="4. Regência e sentido em contexto jornalístico"
          statement={
            <p>
              Leia o trecho abaixo, extraído de uma reportagem:<br /><br />
              <em>"A nova legislação visa ao combate da sonegação fiscal e implica mudanças
              profundas na estrutura tributária do país."</em><br /><br />
              Sobre os verbos destacados, é correto afirmar:
            </p>
          }
          options={[
            {
              letter: "a",
              text: "\"Visa ao\" está errado; o correto seria \"visa o\" pois o verbo visar não admite preposição.",
            },
            {
              letter: "b",
              text: "\"Implica mudanças\" está errado; o correto seria \"implica em mudanças\".",
            },
            {
              letter: "c",
              text: "\"Visa ao\" está correto (visar a = objetivar) e \"implica mudanças\" está correto (implicar = acarretar, VTD).",
              correct: true,
            },
            {
              letter: "d",
              text: "Ambos os verbos estão errados conforme a norma culta vigente.",
            },
          ]}
          resolution={
            <p>
              O trecho está perfeitamente correto. <strong>Visar a</strong> significa <em>ter como
              objetivo</em>, sendo VTI que exige a preposição <em>a</em> — daí "visa <em>ao</em>
              combate" (a + o). <strong>Implicar</strong> no sentido de <em>acarretar, ter como
              consequência</em> é VTD e não admite preposição <em>em</em>: "implica mudanças"
              (não "implica em mudanças"). Ambas as construções seguem rigorosamente a norma culta.
            </p>
          }
        />

        <Exercise
          level="Contextualizado"
          title="5. Regência nominal e crase em contexto"
          statement={
            <p>
              Um candidato ao ENEM escreveu em sua redação:<br /><br />
              <em>"A população está ansiosa com as reformas e favorável às mudanças que sejam
              compatíveis à realidade social do país."</em><br /><br />
              Identifique o erro de regência nominal presente no trecho:
            </p>
          }
          options={[
            { letter: "a", text: "\"ansiosa com\" deveria ser \"ansiosa por\" (ou \"ansiosa de\").", correct: true },
            { letter: "b", text: "\"favorável às\" deveria ser \"favorável com\"." },
            { letter: "c", text: "\"compatíveis à\" deveria ser \"compatíveis de\"." },
            { letter: "d", text: "Não há erros; todas as regências nominais estão corretas." },
          ]}
          resolution={
            <p>
              O erro está em <strong>"ansiosa com as reformas"</strong>. O adjetivo{" "}
              <em>ansioso/ansiosa</em> exige a preposição <em>por</em> (ou eventualmente <em>de</em>
              em contextos específicos): "ansiosa <strong>por</strong> reformas". As demais
              regências estão corretas: <em>favorável a</em> (→ "favorável às") e <em>compatível
              com</em> são as preposições exigidas por esses adjetivos. Note que "compatíveis
              <em>à</em> realidade" também está correto — <em>compatível com</em> é o padrão, mas
              "compatível a" é aceito; o problema central é "ansiosa com".
            </p>
          }
        />
      </section>
    </article>
  );
}
