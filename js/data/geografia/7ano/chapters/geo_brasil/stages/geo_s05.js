/**
 * GEO STAGE 05 — População Brasileira
 */

const GEO_S05 = {
  id: 'geo_s05',
  title: 'População Brasileira',
  icon: '👥',
  difficulty: 'medium',
  estimatedTime: 12,

  learningObjectives: [
    'Conhecer os dados populacionais do Brasil (tamanho, crescimento)',
    'Entender a formação étnica do povo brasileiro',
    'Identificar os movimentos migratórios históricos e atuais',
    'Compreender a urbanização brasileira e seus desafios',
    'Reconhecer as desigualdades sociais na distribuição populacional'
  ],

  summary: {
    readTime: 3,
    content: [
      {
        icon: '👥',
        title: 'O Povo Brasileiro',
        text: 'O Brasil é o 7º país mais populoso do mundo:\n\n• População: ~215 milhões (Censo 2022)\n• Crescimento: desacelerou — taxa de fecundidade caiu de 6 filhos (1960) para 1,7 (2022)\n• Distribuição: desigual — 84% vive em cidades (urbanização)\n\nFormação étnica:\n• Resultado da miscigenação de 3 matrizes:\n  - Povos Indígenas (originários — 1.500+)\n  - Africanos (escravidão — 10 milhões trazidos ao Brasil)\n  - Europeus (colonização — portugueses, depois alemães, italianos, espanhóis, etc.)\n\n• + Imigrantes do séc. XX: japoneses, sírios, libaneses, coreanos\n\n🔑 O Brasil é a maior "nação mestiça" do mundo — o IBGE usa categorias: branca, parda, preta, amarela, indígena.'
      },
      {
        icon: '🏙️',
        title: 'Urbanização e Metrópoles',
        text: 'O Brasil urbano:\n• 1940: 31% população urbana\n• 1970: 56% (virada rural→urbano)\n• 2022: 87% população urbana\n\nMaiores metrópoles:\n• São Paulo: ~12 mi (cidade) / 22 mi (RM)\n• Rio de Janeiro: ~7 mi / 13 mi\n• Belo Horizonte: ~2,5 mi / 6 mi\n• Fortaleza, Salvador, Manaus, Curitiba\n\nProblemas urbanos:\n• Favelas / habitação precária\n• Trânsito caótico\n• Saneamento básico deficiente\n• Violência urbana\n• Periferização — pobres nas margens'
      },
      {
        icon: '🚶',
        title: 'Migrações Internas',
        text: 'Movimentos migratórios históricos no Brasil:\n\n• Êxodo rural (séc. XX): campo → cidade, especialmente SP e RJ\n• Retirantes nordestinos: seca → Sudeste (anos 1940-1980)\n• Colonização do Centro-Oeste e Norte: governo incentivou migração para "vazio demográfico" (1960-1990)\n• Migração Sul → Norte: gaúchos e paranaenses para MT, PA (agronegócio)\n\nMigração internacional recente:\n• Haitianos (após terremoto 2010)\n• Venezuelanos (crise 2017-atual) — maior fluxo de refugiados das Américas\n• Retorno de brasileiros do exterior\n\n🔑 O Brasil tem hoje mais de 700 povos indígenas, com ~1 milhão de pessoas — 0,5% da população.'
      }
    ],

    flashcards: [
      { q: 'Qual a população do Brasil (Censo 2022)?', a: '~215 milhões — 7º mais populoso do mundo.' },
      { q: 'Qual a taxa de urbanização do Brasil?',   a: '~87% (maioria vive em cidades).' },
      { q: 'Quais são as 3 matrizes étnicas do Brasil?', a: 'Indígena + Africana + Europeia.' },
      { q: 'O que foi o êxodo rural?',               a: 'Migração em massa do campo para as cidades no séc. XX.' },
      { q: 'Qual o maior fluxo de refugiados das Américas?', a: 'Venezuelanos no Brasil — desde a crise de 2017.' }
    ],

    mnemonics: [
      { trigger: 'Formação étnica',     memory: '"IND + AFR + EUR = BRASIL. Indígenas + Africanos + Europeus = povo brasileiro."' },
      { trigger: 'Urbanização Brasil',  memory: '"1940: 31% urbano. 1970: VIRADA (56%). 2022: 87%. O Brasil foi do campo para a cidade em 80 anos."' }
    ],

    miniReview: [
      { q: 'Por que o crescimento populacional do Brasil desacelerou?', a: 'Urbanização, maior acesso à educação, ingresso das mulheres no mercado de trabalho e métodos contraceptivos reduziram a taxa de fecundidade.' },
      { q: 'O que é o êxodo rural e quais foram suas consequências?', a: 'Migração do campo para as cidades — criou grandes metrópoles mas também favelas, deficit habitacional e problemas urbanos.' }
    ]
  },

  warmup: [
    {
      prompt: 'O Brasil é o _____ país mais populoso do mundo:',
      options: [
        { text: '5º', correct: false },
        { text: '6º', correct: false },
        { text: '7º', correct: true  },
        { text: '9º', correct: false }
      ],
      explanation: 'Com ~215 milhões (Censo 2022), o Brasil é o 7º mais populoso: atrás de China, Índia, EUA, Indonésia, Paquistão e Nigéria.'
    },
    {
      prompt: 'A formação do povo brasileiro resulta da mistura de:',
      options: [
        { text: 'Europeus e asiáticos apenas',                           correct: false },
        { text: 'Povos indígenas, africanos e europeus principalmente',  correct: true  },
        { text: 'Apenas imigrantes europeus de várias nações',           correct: false },
        { text: 'Africanos e europeus, sem participação indígena',       correct: false }
      ],
      explanation: 'O povo brasileiro é fruto da miscigenação das 3 grandes matrizes: indígena (originários), africana (escravidão) e europeia (colonização portuguesa + imigração posterior).'
    },
    {
      prompt: 'O "êxodo rural" brasileiro foi um movimento de:',
      options: [
        { text: 'Brasileiros emigrando para a Europa em busca de trabalho',              correct: false },
        { text: 'Migração em massa do campo para as cidades, especialmente no séc. XX', correct: true  },
        { text: 'Nordestinos migrando para o Sul do Brasil em busca de clima melhor',    correct: false },
        { text: 'Indígenas saindo das reservas para as cidades',                         correct: false }
      ],
      explanation: 'O êxodo rural (1940-1980) foi a maior migração interna do Brasil: milhões de trabalhadores rurais saíram do campo (especialmente do Nordeste e MG) para as cidades industriais do Sudeste.'
    }
  ],

  guidedPractice: [
    {
      prompt: '🔍 DICA: O Brasil passou de 31% urbano (1940) para 87% (2022).\n\nQuais foram as principais causas da rápida urbanização brasileira?',
      options: [
        { text: 'O governo proibiu a vida rural e obrigou a mudança para as cidades',             correct: false },
        { text: 'Industrialização + mecanização da agricultura + esperança de melhores salários e serviços nas cidades', correct: true  },
        { text: 'As secas nordestinas foram tão severas que toda a população rural abandonou o campo', correct: false },
        { text: 'A imigração estrangeira foi toda canalizada para as cidades industriais',        correct: false }
      ],
      explanation: 'A urbanização acelerada teve 3 motores: 1) industrialização das cidades (SP principalmente) criou empregos; 2) mecanização da agricultura expulsou trabalhadores rurais; 3) cidades ofereciam saúde, educação e infraestrutura que o campo não tinha.'
    },
    {
      prompt: '🔍 DICA: A crise venezuelana criou o maior fluxo de refugiados das Américas.\n\nPor que tantos venezuelanos foram especificamente para o Brasil?',
      options: [
        { text: 'Por causa da fronteira terrestre e do idioma semelhante',                           correct: false },
        { text: 'Pela fronteira terrestre direta (Roraima) e pela política de acolhimento do Brasil',correct: true  },
        { text: 'Porque o Brasil prometeu passaportes a todos os venezuelanos',                      correct: false },
        { text: 'Porque o Brasil tem a maior quantidade de venezuelanos já residentes',              correct: false }
      ],
      explanation: 'A fronteira Brasil-Venezuela (em Roraima) é a mais direta. O Brasil adotou políticas de acolhimento (Operação Acolhida, interiorização) — os venezuelanos chegam por Boa Vista/RR e são redistribuídos por todo o país.'
    }
  ],

  questions: [
    {
      prompt: 'Aproximadamente quantos africanos foram trazidos ao Brasil como escravizados?',
      options: [
        { text: '1 milhão',   correct: false },
        { text: '5 milhões',  correct: false },
        { text: '10 milhões', correct: true  },
        { text: '20 milhões', correct: false }
      ],
      explanation: 'Estima-se que ~10 milhões de africanos foram trazidos ao Brasil entre os sécs. XVI e XIX — o maior fluxo de escravizados do mundo. O Brasil recebeu mais africanos que qualquer outro país da América.'
    },
    {
      prompt: 'A "periferização" das cidades brasileiras é:',
      options: [
        { text: 'O processo de construção de parques nas periferias das cidades',             correct: false },
        { text: 'O fenômeno em que a população pobre é empurrada para as margens das cidades, longe de serviços', correct: true  },
        { text: 'A política de criação de cidades-satélite ao redor das capitais',           correct: false },
        { text: 'O crescimento industrial nas regiões periféricas do Brasil',                 correct: false }
      ],
      explanation: 'A periferização é a concentração da população de baixa renda nas bordas das metrópoles — longe dos empregos, serviços e infraestrutura. Resultado da especulação imobiliária que eleva os preços nos centros.'
    },
    {
      prompt: 'O Censo 2022 revelou que o grupo étnico mais numeroso no Brasil é:',
      options: [
        { text: 'Brancos',  correct: false },
        { text: 'Pardos',   correct: true  },
        { text: 'Pretos',   correct: false },
        { text: 'Indígenas', correct: false }
      ],
      explanation: 'Pelo Censo 2022, pela primeira vez, pardos (45,3%) superaram brancos (43,5%) como maior grupo autodeclarado. Pretos representam ~10,2%, amarelos ~1% e indígenas ~0,6%.'
    },
    {
      prompt: 'Quantos povos indígenas existem no Brasil atualmente?',
      options: [
        { text: 'Menos de 100',       correct: false },
        { text: 'Aproximadamente 700',correct: true  },
        { text: 'Mais de 2.000',      correct: false },
        { text: 'Apenas 50 reconhecidos', correct: false }
      ],
      explanation: 'O Brasil tem hoje mais de 700 povos indígenas reconhecidos, com ~1 milhão de pessoas. Falam mais de 180 línguas diferentes — uma diversidade linguística enorme concentrada principalmente na Amazônia.'
    },
    {
      prompt: 'O que explica a concentração da população brasileira na faixa litorânea?',
      options: [
        { text: 'O clima do litoral é mais fresco e saudável que o interior',                correct: false },
        { text: 'Razões históricas: a colonização começou pelo litoral onde os portos e cidades cresceram primeiro', correct: true  },
        { text: 'O governo proibiu a ocupação do interior por razões militares',             correct: false },
        { text: 'O interior não tem recursos naturais para sustentar populações',            correct: false }
      ],
      explanation: 'A distribuição costeira da população é herança colonial: os portugueses chegaram pelo mar, construíram cidades portuárias (Salvador, Recife, Rio, São Paulo). Essas cidades cresceram durante séculos — o interior foi ocupado mais tarde e mais lentamente.'
    },
    {
      prompt: 'Os "retirantes" nordestinos (sécs. XIX-XX) migravam principalmente por causa:',
      options: [
        { text: 'De conflitos armados entre os estados nordestinos',                        correct: false },
        { text: 'Das secas prolongadas que destruíam colheitas e o sustento familiar',      correct: true  },
        { text: 'De uma política do governo que pagava para quem fosse para São Paulo',     correct: false },
        { text: 'Da abolição da escravidão que eliminou empregos nas usinas de cana',       correct: false }
      ],
      explanation: 'As grandes secas (1877, 1915, 1931, 1958, 1979-83) forçaram massas a abandonar o sertão nordestino — um fenômeno retratado por Graciliano Ramos em "Vidas Secas" e por Candido Portinari no famoso quadro "Retirantes".'
    },
    {
      prompt: 'A imigração japonesa para o Brasil (a partir de 1908) concentrou-se principalmente em:',
      options: [
        { text: 'Rio Grande do Sul, para trabalhar nas vinícolas',                          correct: false },
        { text: 'São Paulo, como substitutos dos trabalhadores escravizados na cafeicultura', correct: true  },
        { text: 'Amazonas, para trabalhar nos seringais',                                   correct: false },
        { text: 'Pernambuco, para trabalhar nas usinas de açúcar',                          correct: false }
      ],
      explanation: 'Os primeiros imigrantes japoneses chegaram em 1908 para trabalhar nas fazendas de café de São Paulo — após a abolição da escravidão (1888), os fazendeiros precisavam de trabalhadores. Hoje o Brasil tem a maior comunidade japonesa fora do Japão.'
    },
    {
      prompt: 'O que é a "taxa de fecundidade" e qual a tendência no Brasil?',
      options: [
        { text: 'Número de homens por mulher — está aumentando no Brasil',                  correct: false },
        { text: 'Número médio de filhos por mulher — caiu de ~6 (1960) para ~1,7 (2022)',  correct: true  },
        { text: 'Percentual de crescimento populacional anual — estável em 2%',             correct: false },
        { text: 'Taxa de mortalidade infantil — diminuiu significativamente',               correct: false }
      ],
      explanation: 'A taxa de fecundidade brasileira caiu drasticamente — de ~6 filhos por mulher (1960) para ~1,7 (2022), abaixo da taxa de reposição (2,1). Causas: urbanização, educação feminina, acesso a contraceptivos e mercado de trabalho.'
    },
    {
      prompt: 'O censo do IBGE (Instituto Brasileiro de Geografia e Estatística) é importante porque:',
      options: [
        { text: 'Determina o valor do salário mínimo anualmente',                           correct: false },
        { text: 'Levanta dados de toda a população para planejar políticas públicas',       correct: true  },
        { text: 'Cria os mapas oficiais das cidades brasileiras',                            correct: false },
        { text: 'Administra o sistema de carteiras de identidade do Brasil',                 correct: false }
      ],
      explanation: 'O Censo IBGE (realizado a cada ~10 anos) conta e caracteriza toda a população — dados de educação, renda, raça, saúde, habitação. Esses dados guiam políticas públicas: onde construir escola, hospital, onde alocar recursos.'
    },
    {
      prompt: 'A desigualdade social no Brasil é medida principalmente pelo:',
      options: [
        { text: 'PIB per capita — divide a riqueza total pelo número de habitantes',        correct: false },
        { text: 'Índice de Gini — mede a concentração de renda (0 = igualdade, 1 = máxima desigualdade)', correct: true  },
        { text: 'IDH — que inclui saúde, educação e renda',                                correct: false },
        { text: 'Taxa de desemprego — quanto maior, mais desigual a sociedade',             correct: false }
      ],
      explanation: 'O Índice de Gini mede a desigualdade de renda: 0 = todos têm a mesma renda; 1 = uma pessoa tem tudo. O Brasil historicamente tem Gini >0,5 — um dos mais altos do mundo, mas em queda nos últimos 20 anos com políticas sociais.'
    }
  ],

  adaptiveReview: [
    {
      prompt: 'DIFÍCIL: Por que o Brasil, apesar de diversidade étnica enorme, ainda tem desigualdade racial expressiva?',
      options: [
        { text: 'Porque as diferenças étnicas não existem — a desigualdade é apenas econômica',  correct: false },
        { text: 'A escravidão criou estruturas de exclusão que persistem: negros e pardos têm menor acesso a educação, renda e poder — mesmo 136 anos após a abolição', correct: true  },
        { text: 'Porque os imigrantes europeus são culturalmente mais capacitados para o mercado de trabalho', correct: false },
        { text: 'Porque o Brasil não tem políticas de igualdade racial — o governo nunca tentou resolver', correct: false }
      ],
      explanation: 'A abolição da escravidão (1888) foi formal — sem políticas de integração (terra, educação, capital). A estrutura escravocrata criou desigualdade racial que se perpetua: negros e pardos têm menor escolaridade, menor renda e menor representação nos espaços de poder. As cotas raciais (2012) são a principal política de correção histórica.'
    }
  ],

  rewards: { xp: 130, gems: 13, badge: '👥 Analista Social' },
  completionMessage: '👥 Você entende o povo brasileiro — da miscigenação à urbanização!',
  nextStage: 'geo_s06'
};

window.GEO_S05 = GEO_S05;
