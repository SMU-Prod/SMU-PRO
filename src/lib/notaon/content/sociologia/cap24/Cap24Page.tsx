"use client";
import { ExerciseCard as Exercise } from "@/lib/notaon/components/ExerciseCard";
export default function Cap24Page() {
  return (
    <article className="lesson-landing">
      <section className="lesson-hero">
        <div>
          <span className="lesson-badge">Sociologia • Capítulo 24</span>
          <h1>Precarização do Trabalho, Economia Digital e Plataformas</h1>
          <p>
            Ser seu próprio chefe parece uma conquista — mas quando o "empreendedor" não
            tem férias, FGTS nem aposentadoria garantida, trata-se de precarização
            disfarçada de liberdade. A <em>uberização</em> do trabalho é um dos fenômenos
            mais importantes para compreender a sociedade brasileira contemporânea.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Precarização</span>
        <h2>1. O Que é Precarização do Trabalho</h2>
        <p>
          A <strong>precarização do trabalho</strong> refere-se ao processo pelo qual as
          condições de emprego tornam-se mais instáveis, com menor proteção social, menor
          remuneração e menor poder de negociação dos trabalhadores. Ela se manifesta em
          diferentes formas:
        </p>
        <ul>
          <li>
            <strong>Informalidade:</strong> trabalho sem carteira assinada, sem contribuição
            previdenciária, sem proteção contra demissão arbitrária. No Brasil, cerca de 40%
            dos trabalhadores estão na informalidade (IBGE, 2023).
          </li>
          <li>
            <strong>Terceirização:</strong> empresas contratam outras empresas para realizar
            atividades antes feitas por empregados diretos, transferindo riscos e reduzindo
            benefícios. A Reforma Trabalhista de 2017 (Lei 13.467) ampliou a terceirização
            irrestrita no Brasil.
          </li>
          <li>
            <strong>Contratos atípicos:</strong> contratos por tempo determinado, intermitentes
            (trabalho quando chamado, pago por hora) e contratos de zero hora (sem garantia
            mínima de horas, comuns no Reino Unido).
          </li>
          <li>
            <strong>Pejotização:</strong> empresas exigem que o trabalhador abra uma Pessoa
            Jurídica (PJ) para prestação de serviços, eliminando vínculo empregatício e
            os direitos a ele associados.
          </li>
        </ul>

        <div className="lesson-highlight">
          <h3>Contexto histórico</h3>
          <p>
            A precarização se intensifica a partir dos anos 1970–1980, com a crise do
            fordismo e a adoção do <strong>toyotismo</strong> e do <strong>neoliberalismo</strong>.
            O Estado de Bem-Estar Social (Welfare State) entra em declínio, e a flexibilização
            das relações de trabalho é apresentada como condição de competitividade. O sociólogo
            Robert Castel chamou esse processo de <em>desfiliação</em>: o enfraquecimento dos
            laços de proteção social que integravam o trabalhador à sociedade.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Uberização</span>
        <h2>2. Uberização: Trabalho de Plataforma no Brasil</h2>
        <p>
          O termo <strong>uberização</strong> deriva da empresa Uber e designa um modelo em
          que plataformas digitais intermediam a relação entre prestadores de serviço e
          clientes, classificando os trabalhadores como "parceiros" autônomos — e não
          empregados.
        </p>
        <p>
          Características do trabalho de plataforma:
        </p>

        <div className="lesson-grid">
          <div className="lesson-card">
            <span>📱</span>
            <h3>Gestão por algoritmo</h3>
            <p>
              O algoritmo da plataforma define quais serviços o trabalhador recebe,
              avalia seu desempenho via notas e pode desativá-lo sem direito a defesa
              ou indenização.
            </p>
          </div>
          <div className="lesson-card">
            <span>🧾</span>
            <h3>"Empreendedor" sem direitos</h3>
            <p>
              Classificado como autônomo, o trabalhador arca com os custos do trabalho
              (combustível, manutenção, celular) sem receber férias, 13º salário, FGTS
              ou seguro-desemprego.
            </p>
          </div>
          <div className="lesson-card">
            <span>⏱️</span>
            <h3>Jornada invisível</h3>
            <p>
              Muitos entregadores e motoristas trabalham 10 a 14 horas por dia para
              atingir renda mínima. O tempo de espera por pedidos não é remunerado.
            </p>
          </div>
          <div className="lesson-card">
            <span>📉</span>
            <h3>Concorrência entre iguais</h3>
            <p>
              A proliferação de trabalhadores na plataforma deprime os preços pagos por
              corrida ou entrega — o aumento da oferta de mão de obra derruba a renda
              individual.
            </p>
          </div>
        </div>

        <p>
          No Brasil, estima-se que cerca de <strong>1,7 milhão de pessoas</strong> trabalhavam
          como motoristas de aplicativo e mais de <strong>1,5 milhão como entregadores</strong>
          em 2022 (IBGE/PNAD). A pesquisa "Perfil dos Entregadores" (Ipea, 2021) revelou
          que 79% dos entregadores de aplicativo são homens negros, com renda média de
          R$ 936/mês — abaixo do salário mínimo vigente à época.
        </p>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Gig Economy</span>
        <h2>3. Gig Economy: Liberdade ou Insegurança?</h2>
        <p>
          A <em><strong>gig economy</strong></em> (economia de bicos) é apresentada por seus
          defensores como sinônimo de flexibilidade, autonomia e empreendedorismo. Críticos,
          porém, apontam para a transferência de riscos do capital para o trabalhador:
        </p>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Dimensão</th>
                <th>Trabalho formal (CLT)</th>
                <th>Trabalho de plataforma (gig)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Salário mínimo</strong></td>
                <td>Garantido por lei</td>
                <td>Não garantido — depende da demanda</td>
              </tr>
              <tr>
                <td><strong>Férias remuneradas</strong></td>
                <td>30 dias + 1/3 extra</td>
                <td>Não existem</td>
              </tr>
              <tr>
                <td><strong>13º salário</strong></td>
                <td>Obrigatório</td>
                <td>Não existe</td>
              </tr>
              <tr>
                <td><strong>FGTS</strong></td>
                <td>8% do salário depositado mensalmente</td>
                <td>Não existe</td>
              </tr>
              <tr>
                <td><strong>Previdência social</strong></td>
                <td>Contribuição do empregador e empregado</td>
                <td>Contribuição exclusiva do trabalhador (se contribuir)</td>
              </tr>
              <tr>
                <td><strong>Demissão</strong></td>
                <td>Aviso prévio, multa de 40% do FGTS</td>
                <td>"Desativação" unilateral pelo algoritmo, sem aviso</td>
              </tr>
              <tr>
                <td><strong>Acidente de trabalho</strong></td>
                <td>Seguro pelo INSS (SAT)</td>
                <td>Risco integral do trabalhador</td>
              </tr>
              <tr>
                <td><strong>Jornada máxima</strong></td>
                <td>8h/dia, 44h/semana (CLT)</td>
                <td>Sem limite — determinada pelo próprio trabalhador</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Regulação</span>
        <h2>4. A Regulação do Trabalho de Plataforma</h2>
        <p>
          A questão da regulação dos trabalhadores de plataforma é um dos debates mais
          importantes do direito do trabalho contemporâneo. Diferentes países adotam
          abordagens distintas:
        </p>
        <ul>
          <li>
            <strong>Reino Unido (2021):</strong> a Suprema Corte britânica decidiu que
            motoristas da Uber são <em>workers</em> (categoria intermediária entre empregado
            e autônomo), com direito a salário mínimo, férias e previdência.
          </li>
          <li>
            <strong>União Europeia (2024):</strong> Diretiva de Trabalho em Plataformas
            estabelece a presunção de vínculo empregatício para trabalhadores de plataforma,
            invertendo o ônus da prova: cabe à empresa provar que o trabalhador é autônomo.
          </li>
          <li>
            <strong>Califórnia (EUA):</strong> a Proposta 22 (2020), financiada por Uber
            e Lyft com US$ 200 milhões, manteve os motoristas como autônomos — demonstrando
            o poder político das plataformas.
          </li>
          <li>
            <strong>Brasil:</strong> o Tribunal Superior do Trabalho (TST) tem oscilado:
            algumas turmas reconhecem vínculo empregatício de motoristas de aplicativo;
            outras, não. Em 2023, o governo enviou ao Congresso proposta de regulação
            (PL 3.748/2023) que prevê contribuição previdenciária e renda mínima por hora,
            mas sem reconhecimento de vínculo CLT.
          </li>
        </ul>

        <div className="lesson-highlight">
          <h3>O debate sociológico</h3>
          <p>
            Para Ricardo Antunes (<em>O Privilégio da Servidão</em>, 2018), a uberização
            representa a face mais visível de uma nova morfologia do trabalho: mais fragmentado,
            mais precarizado, mas também mais difuso — o que dificulta a organização coletiva
            dos trabalhadores e o fortalecimento dos sindicatos.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Neoliberalismo</span>
        <h2>5. O Neoliberalismo e a Flexibilização do Trabalho</h2>
        <p>
          A precarização contemporânea do trabalho tem raízes na <strong>virada neoliberal</strong>
          dos anos 1970–1980. Após a crise do petróleo (1973) e o colapso do fordismo,
          economistas da Escola de Chicago (Milton Friedman) e políticos como
          <strong> Margaret Thatcher</strong> (Reino Unido, 1979) e <strong>Ronald Reagan</strong>
          (EUA, 1981) implantaram uma agenda de desregulamentação dos mercados, privatizações
          de empresas estatais, enfraquecimento dos sindicatos e corte nos gastos sociais.
          A premissa era que o mercado livre seria mais eficiente do que o Estado na alocação
          de recursos — incluindo o trabalho.
        </p>
        <p>
          O neoliberalismo transformou o <strong>trabalho em "fator de produção"</strong>
          a ser flexibilizado: salários devem responder à oferta e demanda; proteções
          trabalhistas são "rigidezes" que impedem o crescimento; o trabalhador deve se
          tornar um <em>empreendedor de si mesmo</em>, responsável por sua própria
          qualificação, saúde e aposentadoria. Essa lógica está na base intelectual da
          uberização e da gig economy.
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>País</th>
                <th>Reforma neoliberal trabalhista</th>
                <th>Ano</th>
                <th>Impacto principal</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Reino Unido</td>
                <td>Restrição ao direito de greve; privatização de estatais</td>
                <td>1980–84</td>
                <td>Derrota dos sindicatos mineiros; enfraquecimento da esquerda trabalhista</td>
              </tr>
              <tr>
                <td>EUA</td>
                <td>Demissão de 11.000 controladores de voo grevistas (PATCO)</td>
                <td>1981</td>
                <td>Sinal simbólico do governo contra os sindicatos; queda na sindicalização</td>
              </tr>
              <tr>
                <td>França</td>
                <td>Loi Travail (reforma trabalhista)</td>
                <td>2016</td>
                <td>Flexibilização de jornada e negociações por empresa</td>
              </tr>
              <tr>
                <td>Brasil</td>
                <td>Reforma Trabalhista (Lei 13.467/2017)</td>
                <td>2017</td>
                <td>Prevalência do negociado sobre legislado; terceirização irrestrita; contrato intermitente</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Reforma Trabalhista</span>
        <h2>6. A Reforma Trabalhista de 2017 no Brasil</h2>
        <p>
          A <strong>Lei 13.467/2017</strong> foi a mais ampla reforma da legislação trabalhista
          brasileira desde a CLT de 1943. Aprovada no governo Michel Temer, em contexto
          de crise econômica e desemprego elevado, a reforma alterou mais de 100 artigos da
          CLT com o argumento de modernizar as relações de trabalho e reduzir o custo de
          contratação. Seus defensores afirmam que ela cria empregos; seus críticos apontam
          que ela precariza e retira direitos conquistados ao longo de décadas.
        </p>
        <p>
          A principal mudança conceitual foi a <strong>prevalência do negociado sobre o
          legislado</strong>: acordos coletivos entre empresas e sindicatos podem estabelecer
          condições inferiores ao patamar mínimo da CLT em várias matérias (jornada, banco
          de horas, participação nos lucros). Isso inverte a lógica histórica do direito
          trabalhista brasileiro, que era protecionista.
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Tema</th>
                <th>Antes da Reforma (CLT)</th>
                <th>Depois da Reforma (Lei 13.467/2017)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Terceirização</td>
                <td>Permitida apenas em atividades-meio (não-core)</td>
                <td>Permitida em qualquer atividade, inclusive atividade-fim</td>
              </tr>
              <tr>
                <td>Contrato intermitente</td>
                <td>Não existia</td>
                <td>Trabalhador convocado quando necessário; pago pelas horas trabalhadas</td>
              </tr>
              <tr>
                <td>Teletrabalho (home office)</td>
                <td>Não regulamentado</td>
                <td>Regulamentado; não conta horas extras por padrão</td>
              </tr>
              <tr>
                <td>Jornada 12x36</td>
                <td>Dependia de acordo coletivo + aprovação judicial</td>
                <td>Permitida por acordo individual entre empregado e empregador</td>
              </tr>
              <tr>
                <td>Contribuição sindical</td>
                <td>Obrigatória (desconto em folha)</td>
                <td>Facultativa (redução drástica da receita dos sindicatos)</td>
              </tr>
              <tr>
                <td>Negociação coletiva</td>
                <td>Limitada ao piso legal da CLT</td>
                <td>Pode reduzir direitos previstos na CLT em matérias autorizadas</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="lesson-highlight">
          <h3>Críticas e defesas da Reforma</h3>
          <p>
            <strong>Defesa:</strong> reduz o custo de contratação formal, incentiva empresas
            a contratar ao invés de recorrer a trabalhadores informais, moderniza relações
            arcaicas e permite mais flexibilidade para trabalhadores que desejam horários
            não convencionais.<br /><br />
            <strong>Crítica:</strong> enfraquece os sindicatos (sem contribuição obrigatória),
            reduz o piso de proteção dos trabalhadores, expande a precarização via contrato
            intermitente e terceirização irrestrita, e privilegia quem já tem poder de
            negociação (empresas) em detrimento de quem não tem (trabalhadores individuais).
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Interseccionalidade no Trabalho</span>
        <h2>7. Gênero, Raça e Precarização</h2>
        <p>
          A precarização do trabalho não afeta todos os grupos igualmente. Os dados mostram
          que mulheres, especialmente mulheres negras, estão sobre-representadas nos setores
          mais precários da economia brasileira: trabalho doméstico (92% mulheres, 65% negras),
          plataformas de cuidado e limpeza, e empregos informais de baixa remuneração.
          O conceito de <strong>interseccionalidade</strong> (Kimberlé Crenshaw) explica como
          gênero e raça se combinam para produzir desvantagens acumuladas no mercado de trabalho.
        </p>
        <p>
          O conceito de <strong>"piso pegajoso"</strong> (sticky floor) descreve como mulheres
          e pessoas negras ficam "presas" nos postos de trabalho mais precários e mal
          remunerados, sem conseguir ascender. É o complemento ao "teto de vidro" (glass
          ceiling), que impede a ascensão a cargos de liderança. Juntos, esses fenômenos
          revelam como a estrutura do mercado de trabalho reproduz e aprofunda desigualdades
          de gênero e raça.
        </p>
        <figure className="lesson-figure">
          <svg viewBox="0 0 500 220" width="500" height="220" aria-label="Pirâmide de precarização por raça e gênero">
            <polygon points="250,10 50,210 450,210" fill="#f3f4f6" stroke="#9ca3af" strokeWidth={1.5} />
            <rect x={100} y={150} width={300} height={60} fill="#fca5a5" fillOpacity={0.6} />
            <text x={250} y={178} textAnchor="middle" fontSize={11} fontWeight={700} fill="#7f1d1d">Trabalho mais precário</text>
            <text x={250} y={194} textAnchor="middle" fontSize={10} fill="#7f1d1d">Doméstico, plataformas, informal — maioria mulheres negras</text>
            <rect x={140} y={95} width={220} height={55} fill="#fbbf24" fillOpacity={0.6} />
            <text x={250} y={118} textAnchor="middle" fontSize={11} fontWeight={700} fill="#78350f">Trabalho precário médio</text>
            <text x={250} y={134} textAnchor="middle" fontSize={10} fill="#78350f">Terceirizados, intermitentes — sobrerrepresentação negra</text>
            <rect x={180} y={48} width={140} height={47} fill="#86efac" fillOpacity={0.6} />
            <text x={250} y={68} textAnchor="middle" fontSize={11} fontWeight={700} fill="#14532d">Trabalho protegido (CLT)</text>
            <text x={250} y={84} textAnchor="middle" fontSize={10} fill="#14532d">Sobrerrepresentação branca e masculina</text>
            <text x={250} y={215} textAnchor="middle" fontSize={11} fontStyle="italic" fill="#6b7280">A base da pirâmide é mais ampla e concentra os mais vulneráveis</text>
          </svg>
          <figcaption>A precarização se distribui desigualmente: raça e gênero determinam a posição na pirâmide do trabalho.</figcaption>
        </figure>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Grupo</th>
                <th>Rendimento médio mensal (IBGE, 2022)</th>
                <th>Taxa de informalidade</th>
                <th>Setor mais comum</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Homens brancos</td>
                <td>R$ 3.139</td>
                <td>~32%</td>
                <td>Indústria, construção, serviços formais</td>
              </tr>
              <tr>
                <td>Mulheres brancas</td>
                <td>R$ 2.380</td>
                <td>~36%</td>
                <td>Serviços, comércio, educação</td>
              </tr>
              <tr>
                <td>Homens negros</td>
                <td>R$ 1.784</td>
                <td>~46%</td>
                <td>Construção civil, serviços gerais, transporte</td>
              </tr>
              <tr>
                <td>Mulheres negras</td>
                <td>R$ 1.358</td>
                <td>~50%</td>
                <td>Trabalho doméstico, serviços de limpeza, cuidado</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Alternativas</span>
        <h2>8. Economia Solidária e Alternativas ao Trabalho Precário</h2>
        <p>
          Diante da precarização crescente, trabalhadores e pesquisadores propõem alternativas
          baseadas na <strong>economia solidária</strong>: um conjunto de iniciativas econômicas
          que privilegiam a autogestão, a cooperação e a distribuição igualitária dos resultados,
          em contraste com a lógica do lucro privado. O economista <strong>Paul Singer</strong>
          (1932–2018), secretário nacional de economia solidária do governo Lula (2003–2007),
          foi o principal teórico brasileiro do campo.
        </p>
        <p>
          No campo do trabalho digital, surgiram experiências de <strong>cooperativas de
          trabalhadores de plataforma</strong>: entregadores e motoristas que se organizam
          coletivamente para criar seus próprios aplicativos, eliminando o intermediário
          corporativo. No Brasil, a cooperativa <strong>Motolink</strong> e outras iniciativas
          de entregadores surgiram como resposta à exploração das grandes plataformas,
          especialmente após as "Breques dos Apps" de 2020 e 2021.
        </p>
        <div className="lesson-grid">
          <div className="lesson-card">
            <span>🤝</span>
            <h3>Cooperativas de trabalhadores</h3>
            <p>Empresas de propriedade coletiva dos trabalhadores. Lucros distribuídos igualmente. Decisões por voto. No Brasil: cooperativas de catadores de recicláveis, agricultores familiares (MST), técnicos de TI.</p>
          </div>
          <div className="lesson-card">
            <span>🌱</span>
            <h3>Economia solidária</h3>
            <p>Empreendimentos baseados em solidariedade, autogestão e democracia. Inclui cooperativas, associações, clubes de troca, bancos comunitários. Princípio: trabalho antes do capital.</p>
          </div>
          <div className="lesson-card">
            <span>📱</span>
            <h3>Plataformas cooperativas</h3>
            <p>Alternativas às grandes plataformas: aplicativos de entrega, transporte e serviços domésticos pertencentes aos próprios trabalhadores. Distribuem a renda sem o corte das corporações.</p>
          </div>
          <div className="lesson-card">
            <span>🏛️</span>
            <h3>Regulação como alternativa</h3>
            <p>A regulação estatal é outra via: leis que obrigam plataformas a reconhecer vínculo, pagar previdência e garantir renda mínima — sem eliminar a flexibilidade.</p>
          </div>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Trabalho Doméstico</span>
        <h2>9. Trabalho Doméstico e a PEC das Domésticas</h2>
        <p>
          O trabalho doméstico remunerado é um dos mais antigos e persistentes casos de
          precarização no Brasil. Durante décadas, as trabalhadoras domésticas — maioria
          mulheres, maioria negras, muitas sem carteira assinada — tiveram acesso a apenas
          alguns dos direitos da CLT, herança da Consolidação das Leis do Trabalho de 1943,
          que as excluiu do conjunto de proteções trabalhistas pela lógica colonial de que
          o trabalho de cuidado era "coisa de mulher" e não "trabalho de verdade".
        </p>
        <p>
          A <strong>Emenda Constitucional 72/2013</strong> (PEC das Domésticas), aprovada
          pelo Congresso com grande apoio popular, estendeu às trabalhadoras domésticas
          os mesmos direitos dos trabalhadores formais: FGTS obrigatório, seguro-desemprego,
          hora extra, adicional noturno e insalubridade. A regulamentação foi completada
          pela <strong>Lei Complementar 150/2015</strong>, que definiu os detalhes da
          implementação. O impacto foi significativo: milhões de trabalhadoras tiveram acesso
          a direitos negados por quase um século.
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Direito</th>
                <th>Antes da EC 72/2013</th>
                <th>Depois da EC 72/2013</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>FGTS</td>
                <td>Facultativo (dependia do empregador depositar)</td>
                <td>Obrigatório (8% do salário)</td>
              </tr>
              <tr>
                <td>Seguro-desemprego</td>
                <td>Não existia para domésticas</td>
                <td>Garantido (3 a 5 parcelas)</td>
              </tr>
              <tr>
                <td>Hora extra</td>
                <td>Não reconhecida</td>
                <td>Obrigatória com adicional de 50%</td>
              </tr>
              <tr>
                <td>Adicional noturno</td>
                <td>Não existia</td>
                <td>20% sobre o salário após as 22h</td>
              </tr>
              <tr>
                <td>Adicional de insalubridade</td>
                <td>Não aplicável</td>
                <td>Garantido em condições insalubres</td>
              </tr>
              <tr>
                <td>Limite de jornada</td>
                <td>44h semanais (mas sem fiscalização)</td>
                <td>44h semanais com horas extras pagas</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="lesson-highlight">
          <h3>Dados do setor (IBGE, 2022)</h3>
          <p>
            O trabalho doméstico no Brasil emprega cerca de <strong>5,8 milhões de pessoas</strong>,
            das quais 92% são mulheres e aproximadamente 65% são negras. Mesmo após a EC 72,
            apenas cerca de 25% das trabalhadoras domésticas possuíam carteira assinada em 2022 —
            revelando que a legislação sozinha não elimina a informalidade estrutural de um setor
            marcado por relações de trabalho altamente personalizadas e resistência de empregadores
            ao cumprimento das leis.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Para o ENEM</span>
        <h2>10. Precarização do Trabalho no ENEM: Conceitos e Questões</h2>
        <p>
          O tema da precarização aparece no ENEM principalmente por meio de textos que descrevem
          situações de trabalho informal, uberização ou perda de direitos, pedindo identificação
          do conceito sociológico correspondente. Os erros mais comuns são confundir
          <em> uberização</em> com empreendedorismo genuíno, e não relacionar a precarização
          com o conceito de <em>desfiliação</em> de Castel.
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Conceito</th>
                <th>Definição resumida</th>
                <th>Exemplo concreto</th>
                <th>Conceito sociológico relacionado</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Precarização</strong></td>
                <td>Deterioração das condições de trabalho: menor estabilidade, renda e proteção</td>
                <td>Crescimento do trabalho informal nos anos 1990</td>
                <td>Desfiliação (Castel), toyotismo</td>
              </tr>
              <tr>
                <td><strong>Terceirização</strong></td>
                <td>Contratação de empresa intermediária para realizar serviços</td>
                <td>Empresa contrata outra para serviço de limpeza</td>
                <td>Toyotismo, flexibilização, cadeia de valor</td>
              </tr>
              <tr>
                <td><strong>Pejotização</strong></td>
                <td>Exigir que trabalhador abra PJ para eliminar vínculo empregatício</td>
                <td>Jornalista contratado como "MEI" pela empresa</td>
                <td>Precarização, informalidade disfarçada</td>
              </tr>
              <tr>
                <td><strong>Uberização</strong></td>
                <td>Trabalho mediado por plataforma digital; trabalhador classificado como autônomo</td>
                <td>Motoristas Uber, entregadores iFood</td>
                <td>Gig economy, desfiliação, precarização</td>
              </tr>
              <tr>
                <td><strong>Gig economy</strong></td>
                <td>Economia baseada em "bicos" e contratos de curto prazo sem proteção social</td>
                <td>Freelancers de TI, designers por projeto</td>
                <td>Toyotismo pós-industrial, desfiliação</td>
              </tr>
              <tr>
                <td><strong>Desfiliação (Castel)</strong></td>
                <td>Ruptura dos laços de proteção social que o trabalho estável fornecia</td>
                <td>Desempregado de longa duração sem rede de apoio</td>
                <td>Exclusão social, vulnerabilidade, anomia</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="lesson-highlight">
          <h3>Os 3 pontos mais cobrados pelo ENEM sobre precarização</h3>
          <p>
            1. <strong>Uberização ≠ autonomia real:</strong> a crítica central é que a suposta
            liberdade do trabalhador de plataforma mascara transferência de riscos do capital
            ao trabalhador.<br />
            2. <strong>Desfiliação de Castel:</strong> a precarização não é apenas econômica —
            ela rompe vínculos sociais, identitários e de proteção que o trabalho estável
            fornecia.<br />
            3. <strong>Interseccionalidade e precarização:</strong> raça e gênero determinam
            quem ocupa os postos mais precários — mulheres negras são as mais atingidas.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <h2>Exercícios</h2>

        <Exercise
          level="Básico"
          title="Precarização do trabalho — conceito"
          statement={
            <p>
              A "pejotização" é uma das formas de precarização do trabalho contemporâneo.
              Ela consiste em:
            </p>
          }
          options={[
            { letter: "A", text: <>A contratação de trabalhadores por tempo determinado com todos os direitos CLT</> },
            { letter: "B", text: <>A obrigação de o trabalhador abrir uma Pessoa Jurídica, eliminando o vínculo empregatício e os direitos trabalhistas</>, correct: true },
            { letter: "C", text: <>A ampliação do quadro de funcionários públicos por concurso</> },
            { letter: "D", text: <>A participação dos trabalhadores nos lucros e resultados da empresa</> },
            { letter: "E", text: <>O pagamento de salário acima do mercado para reter talentos</> },
          ]}
          resolution={
            <p>
              Na <strong>pejotização</strong>, a empresa exige que o trabalhador constitua
              uma PJ para prestar serviços, eliminando formalmente o vínculo empregatício
              e, com ele, os direitos trabalhistas (férias, FGTS, 13º, etc.). É uma forma
              de burlar a legislação trabalhista.
            </p>
          }
        />

        <Exercise
          level="Intermediário"
          title="Uberização e autonomia"
          statement={
            <p>
              A "uberização" do trabalho é frequentemente apresentada pelas plataformas
              como sinônimo de autonomia e empreendedorismo. A crítica sociológica a
              essa concepção aponta que:
            </p>
          }
          options={[
            { letter: "A", text: <>Os trabalhadores de plataforma ganham significativamente mais do que os empregados formais</> },
            { letter: "B", text: <>A autonomia real existe, pois o trabalhador decide sua jornada sem nenhuma subordinação</> },
            { letter: "C", text: <>A pretensiosa autonomia mascara a transferência dos riscos da produção para o trabalhador, sem os direitos do vínculo formal</>, correct: true },
            { letter: "D", text: <>A gig economy representa a superação das relações de exploração capitalista pelo empreendedorismo individual</> },
            { letter: "E", text: <>O trabalho por plataforma elimina a desigualdade entre trabalhadores de diferentes raças e gêneros</> },
          ]}
          resolution={
            <p>
              A crítica central é que a suposta "liberdade" do trabalhador de plataforma
              é ilusória: ele suporta todos os custos (combustível, manutenção, saúde)
              e todos os riscos (acidentes, variações de demanda) sem nenhuma proteção
              social. Isso é <strong>transferência de risco do capital para o trabalhador</strong>,
              não autonomia.
            </p>
          }
        />

        <Exercise
          level="Intermediário"
          title="Trabalho de plataforma e direitos"
          statement={
            <p>
              Comparando o trabalho formal (CLT) com o trabalho de plataforma, é
              INCORRETO afirmar que:
            </p>
          }
          options={[
            { letter: "A", text: <>O trabalhador formal tem direito a férias remuneradas; o de plataforma, não</> },
            { letter: "B", text: <>O trabalhador de plataforma contribui sozinho para a previdência, quando o faz</> },
            { letter: "C", text: <>O trabalhador de plataforma tem jornada máxima legal estabelecida, assim como o celetista</>, correct: true },
            { letter: "D", text: <>O trabalhador formal tem FGTS depositado pelo empregador; o de plataforma, não</> },
            { letter: "E", text: <>A "desativação" do trabalhador de plataforma pode ocorrer sem aviso prévio ou indenização</> },
          ]}
          resolution={
            <p>
              O trabalhador de plataforma <strong>não tem jornada máxima estabelecida</strong> em
              lei — trabalha quantas horas quiser ou precisar. Apenas o trabalhador CLT tem
              a jornada de 8h/dia e 44h/semana garantidas legalmente. A afirmativa C é
              incorreta e, portanto, é a resposta certa da questão.
            </p>
          }
        />

        <Exercise
          level="Avançado"
          title="Robert Castel e a desfiliação social"
          statement={
            <p>
              O sociólogo Robert Castel utilizou o conceito de "desfiliação" para
              descrever um processo social relacionado ao trabalho contemporâneo.
              Esse conceito se refere a:
            </p>
          }
          options={[
            { letter: "A", text: <>A saída voluntária de trabalhadores do mercado formal para se tornarem empreendedores</> },
            { letter: "B", text: <>O enfraquecimento dos laços de proteção social e inserção que o trabalho estável proporcionava ao indivíduo</>, correct: true },
            { letter: "C", text: <>A filiação de trabalhadores a sindicatos e movimentos sociais</> },
            { letter: "D", text: <>O processo de aposentadoria e saída do mercado de trabalho por idade</> },
            { letter: "E", text: <>A migração de trabalhadores do campo para a cidade em busca de emprego industrial</> },
          ]}
          resolution={
            <p>
              Para Castel, o trabalho estável não fornece apenas renda, mas também{" "}
              <strong>proteção social, identidade, pertencimento e inserção na vida coletiva</strong>.
              A precarização e a informalidade enfraquecem esses laços, gerando zonas de
              vulnerabilidade e <em>desfiliação</em> — exclusão progressiva da vida social
              integrada.
            </p>
          }
        />

        <Exercise
          level="Contextualizado"
          title="Perfil dos entregadores de aplicativo no Brasil"
          statement={
            <p>
              <em>"Pesquisa do Ipea (2021) revelou que 79% dos entregadores de aplicativo
              no Brasil são homens negros, com renda média de R$ 936 mensais — abaixo
              do salário mínimo. Trabalham em média 7,6 horas por dia, sem proteção
              previdenciária nem cobertura em caso de acidente."</em>
              <br /><br />
              Os dados acima evidenciam que a precarização do trabalho de plataforma no
              Brasil articula-se com:
            </p>
          }
          options={[
            { letter: "A", text: <>A democratização das oportunidades de trabalho para grupos historicamente excluídos</> },
            { letter: "B", text: <>A superação das desigualdades de raça e gênero pelo empreendedorismo digital</> },
            { letter: "C", text: <>A intersecção entre desigualdade racial, vulnerabilidade socioeconômica e ausência de proteção trabalhista</>, correct: true },
            { letter: "D", text: <>A comprovação de que trabalhadores negros preferem o trabalho informal por maior autonomia</> },
            { letter: "E", text: <>A eficiência do mercado em alocar cada trabalhador na função mais adequada ao seu perfil</> },
          ]}
          resolution={
            <p>
              Os dados evidenciam a <strong>interseccionalidade</strong> entre raça e classe:
              trabalhadores negros, historicamente excluídos do mercado formal por racismo
              estrutural, estão sobre-representados nas ocupações mais precárias da gig
              economy. A uberização não democratiza oportunidades — reproduz e aprofunda
              desigualdades preexistentes.
            </p>
          }
        />
      </section>
    </article>
  );
}
