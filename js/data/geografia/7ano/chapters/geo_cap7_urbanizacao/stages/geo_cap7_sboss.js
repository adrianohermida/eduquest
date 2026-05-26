/**
 * GEO CAP7 BOSS — O Urbanista do Caos
 * Integra todos os 4 tópicos do Cap. 7
 */

const GEO_CAP7_SBOSS = {
  id: 'geo_cap7_sboss',
  title: 'O Urbanista do Caos',
  icon: '🌆',
  difficulty: 'hard',
  estimatedTime: 18,

  learningObjectives: [
    'Integrar urbanização, migrações temporárias, xenofobia e projeções em análises complexas',
    'Resolver questões de nível vestibular com múltiplos conceitos do capítulo',
    'Identificar relações de causa e efeito entre fenômenos urbanos e populacionais',
    'Analisar políticas públicas com critérios técnicos e éticos',
    'Aplicar os conceitos do capítulo a situações-problema inéditas'
  ],

  summary: {
    readTime: 3,
    content: [
      {
        icon: '🌆',
        title: 'O Urbanista do Caos — o desafio final!',
        text: 'O Urbanista do Caos governa cidades impossíveis.\nEle transforma bairros em labirintos de questões difíceis.\n\nPara vencê-lo, você precisa dominar:\n✅ Urbanização e hierarquia de cidades\n✅ Segregação socioespacial e gentrificação\n✅ Migração pendular e sazonal\n✅ Xenofobia e direitos dos migrantes\n✅ Projeções populacionais e ODS\n\nO desafio: questões que cruzam dois ou mais temas.\nUma errada não te derrota. Todas acertadas = você venceu o Caos!\n\n⚠️ Atenção especial para os "falsos" e "não é".'
      },
      {
        icon: '🔑',
        title: 'Revisão relâmpago — conceitos do Cap. 7',
        text: 'Urbanização:\n• Brasil: 36% (1950) → 87% (2020)\n• Macrocefalia, conurbação, gentrificação\n• Segregação socioespacial = desigualdade no espaço\n\nMigrações Temporárias:\n• Pendular: diário, sem mudar de endereço\n• Sazonal: safra/turismo, temporário\n• Cidade dormitório = dorme lá, trabalha aqui\n• Boias-frias = sazonais da agropecuária\n\nXenofobia e Direitos:\n• Art. 13 DUDH = direito de migrar\n• ACNUR = proteção internacional\n• Xenofobia interna: nordestinos, indígenas\n• Transculturalidade = mistura enriquece\n\nProjeções:\n• Pico: ~228M em 2042\n• ODS 11 = cidades sustentáveis\n• Imigração pode compensar envelhecimento'
      }
    ],

    flashcards: [
      { q: 'O que é segregação socioespacial?',   a: 'Divisão da cidade por renda/acesso a serviços. Ricos no centro/bairros nobres; pobres na periferia.' },
      { q: 'O que é migração pendular?',          a: 'Deslocamento diário sem mudar de endereço. Sintoma da desigualdade habitacional urbana.' },
      { q: 'Qual o artigo da DUDH sobre migração?', a: 'Artigo 13 — direito de sair de qualquer país e a ele regressar.' },
      { q: 'Pico populacional do Brasil?',        a: '~228M em 2042 (IBGE).' },
      { q: 'O que é gentrificação?',              a: 'Valorização de bairro popular que expulsa moradores originais de baixa renda.' }
    ],

    mnemonics: [
      { trigger: 'Cap. 7 completo', memory: '"UMXP = Urbanização + Migração temp. + Xenofobia + Projeções. Quatro batalhas, uma vitória."' }
    ],

    miniReview: [
      { q: 'Como urbanização e xenofobia se conectam?', a: 'O êxodo rural trouxe migrantes para as cidades, onde disputaram empregos e habitação com a população local. Nesse contexto de competição e diferença cultural, a xenofobia interna cresceu — nordestinos foram estigmatizados no Sudeste.' },
      { q: 'Como pendularismo e segregação se conectam?', a: 'A segregação (pobres na periferia) gera o pendularismo (percorrer longas distâncias para trabalhar no centro). São dois lados da mesma moeda: a cidade desigual produz o trabalhador que dorme longe do trabalho.' }
    ]
  },

  warmup: [
    {
      prompt: 'Uma cidade tem 3M de habitantes, é polo de serviços para toda uma região e tem funções nacionais. Na hierarquia urbana, é classificada como:',
      options: [
        { text: 'Cidade pequena', correct: false },
        { text: 'Metrópole',      correct: true  },
        { text: 'Megalópole',     correct: false },
        { text: 'Cidade média',   correct: false }
      ],
      explanation: 'Metrópole = grande cidade com funções regionais ou nacionais, polo de serviços para uma área extensa. Com 3M e funções nacionais, está claramente na categoria metrópole. Megalópole seria um eixo de metrópoles unidas.'
    },
    {
      prompt: 'O Artigo 13 da Declaração Universal dos Direitos Humanos garante:',
      options: [
        { text: 'O direito ao trabalho em qualquer país',                                   correct: false },
        { text: 'O direito de sair de qualquer país e a ele regressar',                    correct: true  },
        { text: 'O direito de voto em eleições internacionais',                            correct: false },
        { text: 'A proibição de fronteiras entre países democráticos',                     correct: false }
      ],
      explanation: 'Art. 13 DUDH: liberdade de circulação e residência. "Toda pessoa tem o direito de deixar qualquer país, inclusive o próprio, e a ele regressar." É a base do direito internacional dos migrantes — reconhece mobilidade como direito humano universal.'
    },
    {
      prompt: 'O pico populacional do Brasil (~228M em 2042) será seguido de:',
      options: [
        { text: 'Novo crescimento exponencial por imigração',              correct: false },
        { text: 'Declínio gradual, pois a fertilidade (1,7) está abaixo da reposição', correct: true  },
        { text: 'Estabilização permanente em exatamente 228M',            correct: false },
        { text: 'Crescimento contínuo pois o Brasil é jovem',             correct: false }
      ],
      explanation: 'Com fertilidade de 1,7 (< 2,1 de reposição), cada geração é menor. Após o pico, as mortes superam os nascimentos. Sem imigração estruturada para compensar, a população declina gradualmente. Em 2100, as projeções apontam para ~185M se as tendências atuais se mantiverem.'
    }
  ],

  guidedPractice: [
    {
      prompt: '🔍 DICA: Cruze urbanização + xenofobia.\n\nO crescimento das cidades gerou, historicamente, preconceito interno contra migrantes nordestinos no Sudeste por quê?',
      options: [
        { text: 'Por razões genéticas e culturais que tornam nordestinos menos adaptáveis',              correct: false },
        { text: 'Pela disputa por empregos escassos + diferenças culturais + narrativas midiáticas excludentes', correct: true  },
        { text: 'Por política deliberada do governo para segregar regiões',                             correct: false },
        { text: 'Pelo excesso de nordestinos que chegaram de forma desorganizada',                       correct: false }
      ],
      explanation: 'Xenofobia interna nasce de três combinações: (1) Disputa por emprego — com milhões chegando, o mercado de trabalho ficou tenso; (2) Diferença cultural — sotaque, tradições e costumes diferentes foram usados para estigmatizar; (3) Mídia — reforçou estereótipos negativos. Não há determinação genética ou cultural intrínseca — é construção social em contexto de competição e desigualdade.'
    },
    {
      prompt: '🔍 DICA: Conecte projeções + imigração + ODS.\n\nSe o Brasil quiser cumprir o ODS 11 (cidades sustentáveis) enquanto enfrenta o envelhecimento, qual combinação de políticas é mais alinhada?',
      options: [
        { text: 'Construir mais estacionamentos e rodovias para atender o crescimento',                  correct: false },
        { text: 'Transporte público de qualidade + moradia popular central + atração de imigrantes jovens qualificados', correct: true  },
        { text: 'Reduzir o crescimento urbano proibindo novas construções em metrópoles',               correct: false },
        { text: 'Investir apenas em cidades pequenas e abandonar as metrópoles',                         correct: false }
      ],
      explanation: 'ODS 11 + envelhecimento: transporte público reduz emissões e mobilidade dos idosos; moradia central reduz pendularismo e facilita acesso a serviços para quem envelhece; imigrantes jovens ampliam a PEA e ajudam a financiar o sistema. É uma política integrada que enfrenta três desafios ao mesmo tempo — sustentabilidade urbana, mobilidade e sustentabilidade fiscal.'
    }
  ],

  questions: [
    {
      prompt: 'Qual das alternativas melhor descreve o ciclo vicioso da segregação socioespacial?',
      options: [
        { text: 'Mais riqueza → melhor infraestrutura → mais gente → mais diversidade',                             correct: false },
        { text: 'Especulação imobiliária → periferia para pobres → pendularismo → menos tempo para família → menos renda → mais periferia', correct: true  },
        { text: 'Crescimento urbano → mais empregos → redução da pobreza → menor segregação',                      correct: false },
        { text: 'Gentrificação → mais moradores → mais impostos → melhor infraestrutura para todos',               correct: false }
      ],
      explanation: 'O ciclo vicioso: especulação encarece o centro → pobres vão para periferia → percorrem horas no transporte → menos tempo/energia → menor produtividade e renda → ficam presos na periferia. A gentrificação pode reforçar o ciclo ao valorizar novamente bairros populares e re-expulsar quem já havia sido deslocado.'
    },
    {
      prompt: 'Um trabalhador sazonal que colhe café em SP por 4 meses e volta à sua cidade natal no interior de MG é, nesse ciclo, um:',
      options: [
        { text: 'Migrante definitivo que retornou ao campo',                          correct: false },
        { text: 'Migrante sazonal que usa mobilidade como estratégia de renda',      correct: true  },
        { text: 'Migrante pendular que cruzou fronteira estadual',                   correct: false },
        { text: 'Retirante que abandonou definitivamente a cidade',                  correct: false }
      ],
      explanation: 'Sazonal: vai durante a safra (4 meses), volta na entressafra. Estratégia: complementa a renda da família sem abandonar a origem. Não é pendular (não é diário) nem êxodo (não é definitivo). É o ciclo racional de quem usa a mobilidade como ferramenta de sobrevivência econômica.'
    },
    {
      prompt: 'Por que políticas de integração de migrantes são consideradas investimento, não apenas gasto?',
      options: [
        { text: 'Porque os migrantes devolvem os recursos investidos ao país de origem',                  correct: false },
        { text: 'Porque migrantes integrados trabalham formalmente, pagam impostos e contribuem para o crescimento', correct: true  },
        { text: 'Porque a integração reduz os custos de segurança nas fronteiras',                        correct: false },
        { text: 'Porque os doadores internacionais financiam as políticas de integração',                 correct: false }
      ],
      explanation: 'Migrante com documento → trabalha formalmente → paga INSS, IR, ISS → contribui para arrecadação. Migrante com diploma reconhecido → trabalha na área → maior produtividade + impostos mais altos. Migrante integrado → consome → movimenta a economia local. Cada R$1 investido em integração retorna multiplicado em arrecadação e produtividade. É investimento com retorno mensurável.'
    },
    {
      prompt: 'Qual o principal motivo pelo qual o home office reduziu o pendularismo APENAS em certos setores?',
      options: [
        { text: 'Porque trabalhadores de baixa renda não têm computador',                               correct: false },
        { text: 'Porque trabalhos que exigem presença física (saúde, construção, comércio) não podem ser remotos', correct: true  },
        { text: 'Porque o governo proibiu home office em setores estratégicos',                         correct: false },
        { text: 'Porque trabalhadores remotos passaram a morar mais longe, aumentando o pendularismo',  correct: false }
      ],
      explanation: 'Home office só funciona onde o trabalho é digital e não requer presença física. Médico não opera por videoconferência. Pedreiro não constrói de casa. Caixa de supermercado não pode atender online. Cerca de 70% dos empregos brasileiros requerem presença. A pandemia expandiu o remoto para 30% dos cargos — e voltou para 20–25% depois. O pendularismo da maioria dos trabalhadores de baixa renda não mudou.'
    },
    {
      prompt: 'A ONU criou o ACNUR especificamente para:',
      options: [
        { text: 'Regular o comércio internacional de migrantes qualificados',                           correct: false },
        { text: 'Proteger refugiados, apátridas e migrantes forçados em situação de vulnerabilidade',  correct: true  },
        { text: 'Construir muros fronteiriços entre países com alto fluxo migratório',                  correct: false },
        { text: 'Distribuir passaportes de emergência para turistas desaparecidos',                     correct: false }
      ],
      explanation: 'ACNUR (Alto Comissariado da ONU para Refugiados, 1950): protege quem foge de perseguição, guerra, desastre natural ou violação grave de direitos. Mandato: garantir que ninguém seja devolvido a local de perigo (non-refoulement), facilitar regularização, promover integração ou, se possível, retorno voluntário seguro.'
    },
    {
      prompt: 'A gentrificação e a segregação socioespacial são dois lados do mesmo processo. Como?',
      options: [
        { text: 'São fenômenos opostos — um reduz o que o outro cria',                                  correct: false },
        { text: 'A gentrificação desloca pobres de bairros valorizados, aprofundando a segregação ao empurrá-los para zonas mais distantes', correct: true  },
        { text: 'São idênticos — a gentrificação é o nome popular da segregação',                       correct: false },
        { text: 'Só ocorrem juntos em países europeus, não no Brasil',                                  correct: false }
      ],
      explanation: 'A gentrificação move os pobres para mais longe do centro. A segregação é a condição de estar longe. Um alimenta o outro: a cidade central se valoriza (gentrificação) → quem não pode pagar vai para periferia mais distante (segregação) → agrava o pendularismo. São processos distintos mas encadeados na produção e reprodução da desigualdade urbana.'
    },
    {
      prompt: 'Analise: "A falta de moradia acessível nas cidades é um problema de mercado, não de direitos." Qual perspectiva geográfica contradiz essa afirmação?',
      options: [
        { text: 'A perspectiva geoeconômica, que vê o mercado como único regulador eficiente',         correct: false },
        { text: 'A perspectiva da Geografia Social: moradia é direito fundamental e o Estado deve regulá-la para evitar exclusão', correct: true  },
        { text: 'A perspectiva ambiental, que foca apenas no impacto da urbanização na natureza',      correct: false },
        { text: 'A perspectiva histórica, que vê a habitação como herança colonial imutável',          correct: false }
      ],
      explanation: 'A Geografia Social argumenta que o espaço urbano é arena de poder: o mercado imobiliário produz exclusão quando não regulado. A moradia é reconhecida como direito humano pela DUDH (Art. 25) e pela CF/88. O Estado tem papel regulador indispensável: zoneamento inclusivo, habitação popular, aluguel social. Deixar a moradia exclusivamente ao mercado resulta na segregação que observamos nas cidades brasileiras.'
    },
    {
      prompt: 'Se o Brasil atrair 1 milhão de refugiados sírios qualificados nos próximos 10 anos, o impacto demográfico mais relevante seria:',
      options: [
        { text: 'Aumento da densidade demográfica nas regiões de fronteira Norte',                      correct: false },
        { text: 'Ampliação da PEA com adultos em idade produtiva e diversificação do mercado de trabalho', correct: true  },
        { text: 'Redução da taxa de natalidade nacional pela menor fertilidade dos sírios',             correct: false },
        { text: 'Aumento do índice de envelhecimento por causa dos sírios mais velhos',                 correct: false }
      ],
      explanation: 'Refugiados sírios são majoritariamente adultos jovens em idade produtiva (PEA). 1M em 10 anos = ampliação da base contribuinte, diversificação profissional (médicos, engenheiros, comerciantes sírios têm excelente capital humano), e potencial de inovação. O impacto demográfico mais relevante é a injeção de mão de obra jovem e qualificada — exatamente o que o Brasil precisará quando sua PEA encolher.'
    },
    {
      prompt: '(VESTIBULAR) Analise as afirmativas:\nI. A urbanização brasileira foi mais intensa entre 1950 e 1990.\nII. A migração pendular é fenômeno típico de países desenvolvidos apenas.\nIII. Políticas de acolhimento a migrantes beneficiam apenas os migrantes.\nIV. A queda da natalidade acelerará o envelhecimento após 2042.\nQuais estão INCORRETAS?',
      options: [
        { text: 'I e IV',    correct: false },
        { text: 'II e III',  correct: true  },
        { text: 'I e III',   correct: false },
        { text: 'III e IV',  correct: false }
      ],
      explanation: 'I: CORRETA — urbanização acelerada entre 1950 e 1990. IV: CORRETA — fertilidade 1,7 garantirá envelhecimento acelerado pós-2042. II: INCORRETA — pendularismo é fenômeno de urbanização acelerada, mais intenso em países em desenvolvimento como Brasil. III: INCORRETA — integração de migrantes gera arrecadação, produtividade e coesão social para todos. Incorretas: II e III.'
    },
    {
      prompt: '(VESTIBULAR) Um pesquisador compara a política de mobilidade urbana de duas cidades: A (prioriza carro particular, estacionamentos, rodovias) e B (prioriza ônibus, metrô, ciclovias, integração tarifária). Qual impacto mais relevante sobre a segregação socioespacial?',
      options: [
        { text: 'Cidade A reduz segregação pois mais carros = mais mobilidade para todos',                  correct: false },
        { text: 'Cidade B reduz segregação pois transporte coletivo de qualidade democratiza o acesso ao espaço urbano', correct: true  },
        { text: 'Ambas têm o mesmo impacto sobre segregação — transporte é neutro politicamente',          correct: false },
        { text: 'Cidade A reduz segregação pois facilita que periféricos comprem carros',                  correct: false }
      ],
      explanation: 'Cidade A (carro): beneficia quem tem carro → classe média e alta. Trabalhadores de baixa renda ficam no ônibus lento que divide espaço com o carro. A segregação se aprofunda. Cidade B (coletivo): ônibus rápido + tarifa acessível + integração → trabalhador da periferia acessa o centro com mais rapidez e menos custo. Transporte público de qualidade é política redistributiva — democratiza o direito à cidade.'
    }
  ],

  adaptiveReview: [
    {
      prompt: 'BOSS FINAL: Um município aprova um plano diretor que (a) cria zonas de habitação popular no centro, (b) integra tarifas de transporte com a metrópole vizinha, (c) cria centro de integração para migrantes e (d) oferece desconto no IPTU para imóveis mistos (residencial + comércio). Qual análise geográfica é mais completa?',
      options: [
        { text: 'O plano é assistencialista e depende de subsídios insustentáveis',                     correct: false },
        { text: 'O plano ataca simultaneamente segregação, pendularismo, xenofobia e especulação — é exemplo de política urbana integrada', correct: true  },
        { text: 'O plano vai atrair muitos migrantes e sobrecarregar os serviços',                      correct: false },
        { text: 'O plano é interessante mas só funcionaria em cidades de 500 mil hab. no mínimo',       correct: false }
      ],
      explanation: '(a) Habitação popular no centro = ataca a segregação (pobres não precisam ir para periferia). (b) Integração tarifária = reduz custo do pendularismo. (c) Centro para migrantes = combate xenofobia e integra os que chegam. (d) Imóveis mistos = ativa a caminhabilidade e reduz distâncias. O plano aborda 4 dos principais problemas do Cap. 7 de forma integrada — é o conceito de cidade sustentável e inclusiva em ação.'
    },
    {
      prompt: 'BOSS FINAL: Por que a xenofobia interna contra nordestinos no Brasil é classificada como "xenofobia" e não simplesmente como "preconceito regional"?',
      options: [
        { text: 'Porque envolve diferenças de idioma entre o Nordeste e o Sudeste',                  correct: false },
        { text: 'Porque a lógica é a mesma da xenofobia externa: rejeição do "outro" percebido como ameaça por origem geográfica — a fronteira é estadual, não nacional, mas o mecanismo é idêntico', correct: true  },
        { text: 'Porque o Nordeste é juridicamente considerado um país separado',                    correct: false },
        { text: 'Porque a ONU classificou o preconceito contra nordestinos como xenofobia em 2010', correct: false }
      ],
      explanation: 'O livro usa "xenofobia interna" porque o mecanismo psicossocial é o mesmo da xenofobia entre países: (1) o "outro" vem de fora (de outra região), (2) é percebido como "diferente" e "ameaça" (sotaque, costumes, disputa por emprego), (3) é alvo de estereótipos negativos construídos socialmente. A fronteira é estadual, não nacional, mas o preconceito funciona pelo mesmo princípio de rejeição do forasteiro — por isso o termo é conceitualmente válido e pedagogicamente poderoso.'
    }
  ],

  rewards: { xp: 200, gems: 20, badge: '🌆 Vencedor do Urbanista do Caos' },
  completionMessage: '🌆 Você domou o Caos Urbano! Nenhuma questão de cidade, migração ou direitos te derruba mais. O exame final aguarda!',
  nextStage: 'geo_cap7_sfinal'
};

window.GEO_CAP7_SBOSS = GEO_CAP7_SBOSS;
