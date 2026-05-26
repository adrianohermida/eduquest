/**
 * GEO CAP6 STAGE 02 — Crescimento Populacional
 * BNCC: EF07GE05 | Tópico 2
 */

const GEO_CAP6_S02 = {
  id: 'geo_cap6_s02',
  title: 'Crescimento Populacional',
  icon: '📈',
  difficulty: 'easy',
  estimatedTime: 13,

  learningObjectives: [
    'Distinguir taxa de natalidade, mortalidade e crescimento vegetativo',
    'Explicar a transição demográfica e suas etapas',
    'Interpretar a projeção do IBGE para o pico populacional brasileiro (~228M em 2042)',
    'Relacionar o crescimento populacional a fatores sociais e econômicos',
    'Analisar os desafios do envelhecimento para a sociedade brasileira'
  ],

  summary: {
    readTime: 4,
    content: [
      {
        icon: '📈',
        title: 'Como o Brasil está crescendo — ou desacelerando',
        text: 'O Brasil foi um dos países de crescimento mais rápido do século XX.\nHoje, esse crescimento está freando — mas ainda não parou.\n\nTrês indicadores explicam o ritmo:\n\n• NATALIDADE: número de nascimentos por 1.000 habitantes/ano\n• MORTALIDADE: número de mortes por 1.000 habitantes/ano\n• CRESCIMENTO VEGETATIVO (natural) = Natalidade − Mortalidade\n\nSe nascimentos > mortes → a população cresce\nSe mortes > nascimentos → a população diminui\n\n🔑 Projeção do IBGE: o Brasil atingirá seu pico em ~228 milhões de habitantes em 2042. Depois disso, a população começa a declinar.'
      },
      {
        icon: '🔄',
        title: 'Transição Demográfica — a jornada do Brasil',
        text: 'A transição demográfica tem 4 fases:\n\n1. PRÉ-TRANSIÇÃO: alta natalidade + alta mortalidade → população estável e pequena\n2. INÍCIO: natalidade alta + mortalidade cai → crescimento acelerado (Brasil: séc. XX)\n3. INTERMEDIÁRIA: natalidade cai + mortalidade baixa → crescimento mais lento\n4. PÓS-TRANSIÇÃO: natalidade baixa + mortalidade baixa → crescimento muito lento ou declínio\n\nO Brasil está na fase 3 → caminha para a fase 4.\nA taxa de fertilidade caiu de 6,2 filhos/mulher (1960) para ~1,7 (hoje).\n\n🔑 Com apenas 1,7 filhos/mulher, o Brasil está abaixo da taxa de reposição (2,1). A população irá envelhecer e depois diminuir.'
      },
      {
        icon: '🌡️',
        title: 'Por que as pessoas têm menos filhos?',
        text: 'Não é mistério — são cinco razões principais:\n\n1. EDUCAÇÃO FEMININA: mulheres mais escolarizadas planejam a família\n2. URBANIZAÇÃO: na cidade, filho é custo, não mão de obra agrícola\n3. ACESSO A MÉTODOS CONTRACEPTIVOS: facilitados a partir dos anos 1970\n4. INGRESSO DA MULHER NO MERCADO DE TRABALHO: carreira mudou o tempo de maternidade\n5. MELHORA DO SANEAMENTO E SAÚDE: menos mortalidade infantil = menos filhos "de reserva"\n\n📊 No campo, as famílias eram maiores: filho = trabalhador.\nNa cidade, filho = despesa com escola, saúde, lazer.\n\n🔑 Desenvolvimento social e econômico reduz a natalidade. Isso aconteceu no Brasil e em todos os países que se industrializaram.'
      }
    ],

    flashcards: [
      { q: 'O que é crescimento vegetativo (natural)?',       a: 'Natalidade − Mortalidade. Crescimento positivo = mais nascimentos que mortes.' },
      { q: 'Qual é a projeção do IBGE para o pico populacional do Brasil?', a: '~228 milhões de hab. em 2042. Após isso, declínio.' },
      { q: 'Qual é a taxa de fertilidade atual do Brasil?',   a: '~1,7 filhos por mulher — abaixo da taxa de reposição (2,1).' },
      { q: 'O que é transição demográfica?',                  a: 'Processo histórico de queda progressiva da natalidade e mortalidade. Passa de população jovem para envelhecida.' },
      { q: 'Qual era a fertilidade brasileira em 1960?',      a: '6,2 filhos por mulher — hoje é 1,7. Queda de quase 4 filhos/mulher em 60 anos.' },
      { q: 'O que é taxa de reposição populacional?',         a: '2,1 filhos/mulher — o mínimo para manter a população estável a longo prazo.' }
    ],

    mnemonics: [
      { trigger: 'Crescimento Vegetativo',       memory: '"CV = Nasce − Morre. Nasce mais? Cresce. Morre mais? Encolhe. Simples como árvore."' },
      { trigger: 'Taxa de reposição = 2,1',      memory: '"Dois filhos substituem os pais. O 0,1 extra compensa quem não tem filhos. Abaixo de 2,1 = futuro menor."' },
      { trigger: 'Por que menos filhos na cidade', memory: '"EUAMM = Educação, Urbanização, Anticoncepcional, Mercado de trabalho, Melhora da saúde. 5 razões."' }
    ],

    miniReview: [
      { q: 'Por que o Brasil terá queda populacional após 2042?',
        a: 'Com fertilidade de 1,7 (abaixo de 2,1), cada geração é menor que a anterior. Depois do pico de ~228M, as mortes superarão os nascimentos — a população começa a encolher.' },
      { q: 'Qual a diferença entre mortalidade geral e mortalidade infantil?',
        a: 'Mortalidade geral = mortes em todos os grupos etários por 1.000 hab. Mortalidade infantil = mortes de crianças antes de 1 ano por 1.000 nascidos vivos — indicador sensível de qualidade de vida.' }
    ]
  },

  warmup: [
    {
      prompt: 'Se a taxa de natalidade é 18‰ e a de mortalidade é 7‰, o crescimento vegetativo é de:',
      options: [
        { text: '25‰',  correct: false },
        { text: '11‰',  correct: true  },
        { text: '7‰',   correct: false },
        { text: '-11‰', correct: false }
      ],
      explanation: 'Crescimento vegetativo = Natalidade − Mortalidade = 18 − 7 = 11‰. Isso significa que para cada 1.000 habitantes, a população cresce 11 pessoas por ano — crescimento moderado, parecido com o Brasil atual.'
    },
    {
      prompt: 'Qual é a taxa de fertilidade mínima para manter a população estável a longo prazo?',
      options: [
        { text: '1,0 filho/mulher',  correct: false },
        { text: '1,7 filhos/mulher', correct: false },
        { text: '2,1 filhos/mulher', correct: true  },
        { text: '3,0 filhos/mulher', correct: false }
      ],
      explanation: 'A taxa de reposição é 2,1 filhos/mulher: dois filhos substituem os pais, e o 0,1 extra compensa mortalidade juvenil e quem não tem filhos. O Brasil (1,7) está abaixo disso — a população irá declinar após o pico de 2042.'
    },
    {
      prompt: 'Em qual fase da transição demográfica o Brasil se encontra atualmente?',
      options: [
        { text: 'Pré-transição (alta natalidade + alta mortalidade)',                    correct: false },
        { text: 'Início (natalidade alta, mortalidade caindo)',                          correct: false },
        { text: 'Intermediária/avançada (natalidade baixa, mortalidade também baixa)',  correct: true  },
        { text: 'Estabilidade total sem qualquer crescimento',                          correct: false }
      ],
      explanation: 'O Brasil está na fase intermediária-avançada: natalidade caiu muito (de 6,2 para 1,7 filhos/mulher), mortalidade também é baixa. Crescimento vegetativo ainda existe, mas é muito pequeno e tende a zero.'
    }
  ],

  guidedPractice: [
    {
      prompt: '🔍 DICA: Crescimento = Natalidade − Mortalidade. Se der negativo, a população diminui.\n\nUm país tem natalidade de 9‰ e mortalidade de 12‰. O que acontece com sua população?',
      options: [
        { text: 'Cresce, pois ainda há nascimentos',                        correct: false },
        { text: 'Diminui, pois morrem mais do que nascem (−3‰)',           correct: true  },
        { text: 'Fica estável, pois a diferença é pequena',                 correct: false },
        { text: 'Cresce pela imigração automática que compensa o deficit',  correct: false }
      ],
      explanation: 'Crescimento vegetativo = 9 − 12 = −3‰. Crescimento negativo = mais mortes que nascimentos. A população encolhe — situação atual de vários países europeus. O Brasil ainda não chegou lá, mas caminha para isso após 2042.'
    },
    {
      prompt: '🔍 DICA: Pense nos 5 fatores que reduziram a natalidade no Brasil.\n\nPor que a urbanização reduz a natalidade?',
      options: [
        { text: 'Porque o ar urbano afeta a fertilidade biologicamente',                         correct: false },
        { text: 'Na cidade, filho é custo (escola, saúde, lazer) — no campo, filho é mão de obra', correct: true  },
        { text: 'Porque leis urbanas proíbem famílias grandes',                                  correct: false },
        { text: 'Porque cidades têm menos espaço físico para famílias numerosas',                correct: false }
      ],
      explanation: 'No campo, filho trabalha desde cedo: ajuda na roça, cuida dos animais. Na cidade, filho estuda até os 20 anos, precisa de escola particular, de saúde especializada, de lazer. O custo muda radicalmente — e com ele, o número de filhos desejados.'
    }
  ],

  questions: [
    {
      prompt: 'Qual é o principal fator que explica a queda da natalidade no Brasil nas últimas décadas?',
      options: [
        { text: 'Declínio da qualidade do solo agrícola',                                          correct: false },
        { text: 'Urbanização, educação feminina e acesso a métodos contraceptivos',                correct: true  },
        { text: 'Redução da imigração estrangeira',                                               correct: false },
        { text: 'Políticas governamentais de controle de natalidade obrigatório',                  correct: false }
      ],
      explanation: 'A queda da natalidade brasileira se deve à combinação de: urbanização (filho = custo), educação feminina (planejamento familiar), acesso a contraceptivos (pós-1970) e ingresso da mulher no mercado de trabalho. Não houve política coercitiva de controle — foi uma mudança social espontânea.'
    },
    {
      prompt: 'Segundo projeção do IBGE, em que ano o Brasil atingirá seu pico populacional?',
      options: [
        { text: '2030', correct: false },
        { text: '2042', correct: true  },
        { text: '2060', correct: false },
        { text: '2100', correct: false }
      ],
      explanation: 'O IBGE projeta que o Brasil atingirá ~228 milhões de habitantes por volta de 2042. Após isso, com fertilidade abaixo da reposição (1,7 vs. 2,1), a população começará a declinar — um desafio enorme para o sistema previdenciário e de saúde.'
    },
    {
      prompt: 'A mortalidade infantil no Brasil caiu significativamente nas últimas décadas. Qual combinação de fatores explica isso?',
      options: [
        { text: 'Redução do calor e melhora do clima nas regiões Norte e Nordeste',                          correct: false },
        { text: 'Expansão do saneamento básico, vacinação, acesso à saúde e educação das mães',              correct: true  },
        { text: 'Queda da natalidade — menos bebês = menor taxa de mortalidade infantil automaticamente',    correct: false },
        { text: 'Proibição de trabalho infantil que reduziu acidentes com crianças',                         correct: false }
      ],
      explanation: 'A mortalidade infantil caiu de ~120 por mil (1960) para menos de 15 por mil (2020) pelo avanço do saneamento, vacinação universal (SUS), agentes comunitários de saúde, educação das mães sobre higiene e nutrição, e políticas sociais como o Bolsa Família.'
    },
    {
      prompt: 'O que caracteriza a etapa "pós-transição demográfica"?',
      options: [
        { text: 'Alta natalidade e alta mortalidade — população jovem e estável',                          correct: false },
        { text: 'Baixa natalidade e baixa mortalidade — crescimento vegetativo próximo de zero ou negativo', correct: true  },
        { text: 'Natalidade em queda livre e mortalidade crescente',                                       correct: false },
        { text: 'Estabilização total da população sem qualquer variação etária',                           correct: false }
      ],
      explanation: 'Na pós-transição: natalidade muito baixa (abaixo de 2,1 filhos/mulher) + mortalidade também baixa (expectativa de vida alta). O resultado é crescimento vegetativo mínimo ou negativo. Países europeus já vivem isso; o Brasil se aproxima.'
    },
    {
      prompt: 'Por que a taxa de fertilidade caiu mais rápido nas cidades do que no campo brasileiro?',
      options: [
        { text: 'Porque o governo distribuiu contraceptivos apenas nas cidades',                         correct: false },
        { text: 'Porque na cidade filho tem custo alto; no campo, filho é força de trabalho doméstico',  correct: true  },
        { text: 'Porque o clima urbano reduz a taxa de fertilidade biologicamente',                      correct: false },
        { text: 'Porque nas cidades as mulheres trabalham mais horas e têm menos energia para filhos',   correct: false }
      ],
      explanation: 'A lógica econômica é poderosa: no campo, filho participa da produção desde cedo. Na cidade, filho é despesa — escola, alimentação, lazer, saúde. A mudança no contexto econômico da maternidade explica por que a natalidade caiu mais rápido nas áreas urbanas.'
    },
    {
      prompt: 'Qual impacto do envelhecimento populacional sobre o sistema previdenciário?',
      options: [
        { text: 'Mais idosos = mais contribuintes = mais recursos para o INSS',           correct: false },
        { text: 'Mais idosos aposentados e menos jovens contribuindo = deficit previdenciário', correct: true  },
        { text: 'O envelhecimento não afeta a Previdência pois idosos pagam impostos',    correct: false },
        { text: 'Menos jovens = menos despesas com educação, compensando os custos',      correct: false }
      ],
      explanation: 'O envelhecimento cria a "crise do contrato geracional": menos jovens no mercado de trabalho contribuem para pagar a aposentadoria de mais idosos. Com fertilidade de 1,7, cada vez haverá menos contribuintes para um número crescente de beneficiários — pressão intensa sobre o INSS e sistema de saúde.'
    },
    {
      prompt: 'Qual a diferença entre imigração e crescimento vegetativo como fontes de aumento populacional?',
      options: [
        { text: 'São idênticas em impacto e não há diferença conceitual',                                      correct: false },
        { text: 'Crescimento vegetativo = nascimentos − mortes (interno); imigração = entrada de pessoas de fora', correct: true  },
        { text: 'Imigração só ocorre entre países; crescimento vegetativo é exclusivo de áreas rurais',        correct: false },
        { text: 'Crescimento vegetativo inclui imigração; imigração é apenas para o crescimento urbano',       correct: false }
      ],
      explanation: 'Crescimento vegetativo = saldo natural (nascimentos − mortes) — depende da dinâmica interna. Imigração = entrada líquida de pessoas de outro país — depende de fatores externos. Para países com fertilidade baixa como o Brasil futuro, a imigração pode compensar o declínio vegetativo.'
    },
    {
      prompt: 'A queda da mortalidade no Brasil, sem queda equivalente da natalidade, gerou nos anos 1950–1970:',
      options: [
        { text: 'Estagnação da população',                          correct: false },
        { text: 'Explosão demográfica (crescimento acelerado)',      correct: true  },
        { text: 'Declínio imediato da população',                   correct: false },
        { text: 'Migração em massa para a Europa',                  correct: false }
      ],
      explanation: 'Essa é a fase 2 da transição demográfica: mortalidade cai (medicina, vacinas, saneamento) mas natalidade continua alta. O resultado é explosão demográfica — a população dobra ou triplica em poucas gerações. Foi o "baby boom" brasileiro nos anos 1950-70.'
    },
    {
      prompt: 'Qual conjunto de países ilustra melhor os estágios diferentes da transição demográfica?',
      options: [
        { text: 'EUA e Alemanha — ambos na fase inicial com alta natalidade',                           correct: false },
        { text: 'Níger (alta natalidade) vs. Japão (natalidade muito baixa) vs. Brasil (fase intermediária)', correct: true  },
        { text: 'China e Índia — ambos com política de filho único',                                    correct: false },
        { text: 'Brasil e Rússia — ambos com crescimento negativo e envelhecimento severo',             correct: false }
      ],
      explanation: 'Níger tem fertilidade de ~6,9 (pré-transição). Japão tem ~1,2 (pós-transição, envelhecimento severo). Brasil tem ~1,7 (fase avançada). Esse contraste ilustra os diferentes momentos do processo de transição demográfica ao redor do mundo.'
    },
    {
      prompt: '(VESTIBULAR) "O Brasil não deve comemorar a queda da natalidade sem analisar seus custos sociais." Qual argumento sustenta essa afirmação?',
      options: [
        { text: 'Menos nascimentos = menos consumidores = recessão automática',                                         correct: false },
        { text: 'Queda da natalidade acelera o envelhecimento, aumentando custos de saúde e pressionando a Previdência', correct: true  },
        { text: 'Natalidade baixa gera desemprego pois há menos jovens para as fábricas',                               correct: false },
        { text: 'A queda da natalidade é sempre voluntária e não tem custos coletivos',                                 correct: false }
      ],
      explanation: 'A queda da natalidade traz ganhos (mais recursos por criança, mais mulheres no mercado) mas também custos: envelhecimento acelerado, pressão sobre o INSS (menos contribuintes, mais beneficiários), demanda crescente por serviços de saúde para idosos e risco de declínio da força de trabalho. A análise equilibrada enxerga os dois lados.'
    }
  ],

  adaptiveReview: [
    {
      prompt: 'DIFÍCIL: Se o Brasil atingir crescimento vegetativo zero em 2042, mas receber 500.000 imigrantes/ano, a população total irá:',
      options: [
        { text: 'Declinar, pois crescimento zero significa população negativa',         correct: false },
        { text: 'Crescer ligeiramente, pois a imigração líquida adiciona 500.000/ano',  correct: true  },
        { text: 'Ficar estável em exatamente 228 milhões para sempre',                 correct: false },
        { text: 'Declinar, pois imigrantes aumentam a mortalidade',                    correct: false }
      ],
      explanation: 'Crescimento total = crescimento vegetativo + saldo migratório. Com crescimento vegetativo = 0 e imigração de +500.000/ano, a população cresce em 500.000 pessoas/ano. A imigração pode ser uma estratégia deliberada para compensar o envelhecimento — como fazem Alemanha, Canadá e Austrália hoje.'
    },
    {
      prompt: 'DIFÍCIL: Analise as afirmativas sobre transição demográfica no Brasil:\nI. A queda da natalidade foi acompanhada de políticas estatais coercitivas de controle de natalidade.\nII. A fertilidade atual (1,7) é suficiente para manter a população estável a longo prazo.\nIII. O "bônus demográfico" ocorre quando a PEA (trabalhadores) é maior que a população dependente.\nIV. O envelhecimento gera pressão sobre previdência, saúde e cuidados de longa duração.\nEstão corretas:',
      options: [
        { text: 'I e II',   correct: false },
        { text: 'III e IV', correct: true  },
        { text: 'I, II e III', correct: false },
        { text: 'II, III e IV', correct: false }
      ],
      explanation: 'I é FALSA: a queda foi voluntária, não coercitiva. II é FALSA: 1,7 está abaixo da reposição (2,1). III é VERDADEIRA: bônus demográfico = muitos adultos ativos, poucos dependentes = janela de oportunidade econômica. IV é VERDADEIRA: mais idosos = mais custos com saúde, pensões e cuidados. Corretas: III e IV.'
    }
  ],

  rewards: { xp: 125, gems: 12, badge: '📈 Analista do Crescimento' },
  completionMessage: '📈 Você domina a dinâmica do crescimento populacional! Sabe por que o Brasil vai ter menos gente no futuro — e o que isso significa.',
  nextStage: 'geo_cap6_s03'
};

window.GEO_CAP6_S02 = GEO_CAP6_S02;
