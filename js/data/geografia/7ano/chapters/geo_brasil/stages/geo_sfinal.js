/**
 * GEO FINAL STAGE — Exame Final: Brasil
 */

const GEO_SFINAL = {
  id: 'geo_sfinal',
  title: 'Exame Final — Brasil',
  icon: '🎓',
  difficulty: 'hard',
  estimatedTime: 20,
  isFinal: true,

  learningObjectives: [
    'Demonstrar domínio completo da geografia do Brasil',
    'Aplicar conhecimento em questões de vestibular/ENEM',
    'Conectar aspectos físicos, humanos e econômicos do Brasil',
    'Avaliar situações geográficas do cotidiano brasileiro',
    'Consolidar aprendizado para avaliações acadêmicas'
  ],

  summary: {
    readTime: 2,
    content: [
      {
        icon: '🎓',
        title: 'Exame Final de Geografia do Brasil',
        text: 'Você chegou ao Exame Final!\n\nEste exame cobre TODOS os 6 estágios:\n• Localização (S01)\n• Relevo e Hidrografia (S02)\n• Clima e Vegetação (S03)\n• Regiões (S04)\n• População (S05)\n• Economia (S06)\n\n🔑 As questões são no nível de vestibular e ENEM — exigem análise e síntese, não apenas memorização.\n\n⚡ Conquiste o certificado completo de Geografia do Brasil!'
      },
      {
        icon: '📋',
        title: 'Revisão Final Expressa',
        text: '5 dados fundamentais do Brasil:\n\n1. TERRITÓRIO: 8,5 mi km², 5º do mundo, 10 fronteiras, 7.400 km de costa atlântica\n2. BIOMAS: 6 biomas (Amazônia 49%, Cerrado 23%, Caatinga 11%, Mata Atlântica, Pantanal, Pampa)\n3. POPULAÇÃO: 215 mi, 87% urbana, 3 matrizes (indígena/africana/europeia)\n4. REGIÕES: Norte (maior área), Sudeste (maior PIB), Sul (maior IDH), Nordeste (mais populoso no Norte/NE)\n5. ECONOMIA: 9ª PIB mundial, 1º exportador de soja, pré-sal, energia 65% hidrelétrica'
      }
    ],

    flashcards: [
      { q: 'Área do Brasil + ranking mundial?',          a: '8,5 mi km² — 5º maior do mundo.' },
      { q: 'Bioma exclusivamente brasileiro?',           a: 'Caatinga.' },
      { q: 'Rio da Integração Nacional?',                a: 'Rio São Francisco — único perene do semiárido.' },
      { q: 'Maior exportação brasileira?',               a: 'Soja (1º exportador mundial).' },
      { q: 'Capital federal + quando foi inaugurada?',   a: 'Brasília — 21 de abril de 1960.' }
    ],

    mnemonics: [
      { trigger: 'Brasil em 5 números', memory: '"8,5mi km² | 215mi hab | 87% urbano | 9º PIB | 10 fronteiras = O Brasil em 5 números."' }
    ],

    miniReview: [
      { q: 'Quais 2 países não fazem fronteira com o Brasil?', a: 'Equador e Chile.' },
      { q: 'Qual a sequência das regiões do maior para menor PIB?', a: 'Sudeste > Sul > Nordeste > Centro-Oeste > Norte (por PIB total).' }
    ]
  },

  warmup: [
    {
      prompt: '📋 EXAME: Qual é a área aproximada do Brasil?',
      options: [
        { text: '3,5 milhões de km²', correct: false },
        { text: '5,8 milhões de km²', correct: false },
        { text: '8,5 milhões de km²', correct: true  },
        { text: '12 milhões de km²',  correct: false }
      ],
      explanation: 'O Brasil tem 8.510.345 km² — tornando-o o 5º maior país do mundo, maior que toda a Europa.'
    },
    {
      prompt: '📋 EXAME: Qual linha imaginária passa pela cidade de Macapá (AP)?',
      options: [
        { text: 'Trópico de Capricórnio',  correct: false },
        { text: 'Linha do Equador',        correct: true  },
        { text: 'Meridiano de Greenwich',  correct: false },
        { text: 'Círculo Polar Ártico',    correct: false }
      ],
      explanation: 'Macapá (capital do Amapá) está quase exatamente sobre a Linha do Equador — inclusive tem uma estátua comemorando isso no centro da cidade (o "Marco Zero do Equador").'
    },
    {
      prompt: '📋 EXAME: Qual é o principal produto de exportação do Brasil atualmente?',
      options: [
        { text: 'Café',         correct: false },
        { text: 'Soja',         correct: true  },
        { text: 'Minério de ferro', correct: false },
        { text: 'Açúcar',       correct: false }
      ],
      explanation: 'A soja é a principal exportação brasileira — o Brasil é o maior exportador mundial. MT e GO são os maiores produtores. A China é a principal compradora.'
    }
  ],

  guidedPractice: [
    {
      prompt: '📋 EXAME ANALÍTICO: "O Brasil tem 12% da água doce do mundo, mas enfrenta crises de abastecimento em várias regiões." Explique esse paradoxo:',
      options: [
        { text: 'A crise de água é causada por mau gerenciamento — o Brasil desperdiça toda a água',correct: false },
        { text: 'A água está concentrada na Amazônia; o Nordeste (28% da pop.) tem apenas 3% dos recursos hídricos', correct: true  },
        { text: 'O Brasil exporta água para outros países, causando escassez interna',              correct: false },
        { text: 'O aquecimento global já secou os principais rios do Brasil',                       correct: false }
      ],
      explanation: 'Paradoxo hídrico: abundância global + má distribuição territorial. 70% da água fica na Amazônia (5% da população). O semiárido nordestino tem 28% da população mas <3% da água. A Transposição do São Francisco é a principal solução parcial para redistribuir água para o sertão.'
    },
    {
      prompt: '📋 EXAME ANALÍTICO: Por que o Cerrado é considerado o bioma mais estratégico do Brasil?',
      options: [
        { text: 'Por ter a maior biodiversidade de todos os biomas brasileiros',                    correct: false },
        { text: 'Por ser o "berço das águas" — abriga nascentes de quase todas as bacias hidrográficas brasileiras', correct: true  },
        { text: 'Por ser o maior produtor de oxigênio do planeta',                                  correct: false },
        { text: 'Por ser o único bioma que não foi afetado pelo desmatamento',                      correct: false }
      ],
      explanation: 'O Cerrado é estratégico por ser o "berço das águas": suas chapadas e veredas abrigam nascentes que alimentam 8 das 12 principais bacias hidrográficas. Isso inclui fontes do São Francisco (Nordeste), Araguaia/Tocantins (Norte), Alto Paraná (Sul) e afluentes amazônicos. Desmatá-lo é comprometer a água de todo o Brasil.'
    }
  ],

  questions: [
    {
      prompt: '📋 A Serra do Mar (litoral SE/S) é importante geograficamente porque:',
      options: [
        { text: 'É a maior cadeia montanhosa do Brasil — mais alta que os Andes',                  correct: false },
        { text: 'Cria chuvas orográficas no litoral e separa a costa estreita do planalto interior', correct: true  },
        { text: 'Faz fronteira entre o Brasil e a Argentina ao sul',                               correct: false },
        { text: 'É onde nasce o Rio São Francisco',                                                correct: false }
      ],
      explanation: 'A Serra do Mar: 1) bloqueia ventos úmidos do Atlântico → chuvas orográficas abundantes no litoral (Santos, Florianópolis têm alto índice pluviométrico); 2) separa a faixa litorânea estreita do Planalto Atlântico. Influencia clima, ocupação e comunicação costeira.'
    },
    {
      prompt: '📋 (ENEM-estilo) A frase "Stadtluft macht frei" ("o ar da cidade liberta") poderia ser aplicada ao Brasil para descrever:',
      options: [
        { text: 'A poluição do ar nas cidades industriais que causa doenças respiratórias',         correct: false },
        { text: 'O êxodo rural — a esperança de vida melhor nas cidades que atraiu milhões do campo', correct: true  },
        { text: 'A liberdade religiosa que as cidades brasileiras oferecem em contraste com o campo', correct: false },
        { text: 'A sensação de liberdade que o litoral brasileiro proporciona aos turistas',         correct: false }
      ],
      explanation: 'A frase medieval ("o ar da cidade liberta") se aplica metaforicamente ao êxodo rural brasileiro: trabalhadores rurais migraram para as cidades buscando liberdade econômica, empregos industriais e acesso a serviços. O "ar" das cidades representava oportunidade — mesmo que a realidade fosse frequentemente favelas e subemprego.'
    },
    {
      prompt: '📋 A Zona Franca de Manaus é um exemplo de política de desenvolvimento regional porque:',
      options: [
        { text: 'Protegeu a Amazônia do desmatamento ao proibir atividades extrativistas',          correct: false },
        { text: 'Criou um polo industrial no coração da Amazônia com incentivos fiscais, gerando emprego e renda', correct: true  },
        { text: 'Distribuiu terras amazônicas para famílias de trabalhadores sem-terra',            correct: false },
        { text: 'Construiu Brasília dentro da Amazônia para integrar a região',                     correct: false }
      ],
      explanation: 'A Zona Franca de Manaus (1967) é um caso exitoso de desenvolvimento regional: incentivos fiscais atraíram indústrias para uma cidade isolada na Amazônia. Hoje Manaus tem ~2 mi hab. e polo de eletroeletrônicos, motocicletas e bens de consumo — criando emprego sem desmatamento intenso.'
    },
    {
      prompt: '📋 O Brasil é considerado "megadiverso" porque:',
      options: [
        { text: 'Tem mais de 200 partidos políticos registrados',                                   correct: false },
        { text: 'Abriga ~15% de todas as espécies do planeta — maior biodiversidade do mundo',      correct: true  },
        { text: 'Tem a maior variedade de climas dentre todos os países do mundo',                  correct: false },
        { text: 'É o único país com 6 biomas diferentes em seu território',                         correct: false }
      ],
      explanation: 'O Brasil é o país com maior biodiversidade do mundo — ~15% de todas as espécies. Isso resulta de: posição tropical, variedade de biomas, clima diverso, enorme área territorial. O Brasil lidera em espécies de plantas, anfíbios, mamíferos e aves.'
    },
    {
      prompt: '📋 O fenômeno "La Niña" afeta o Brasil principalmente porque:',
      options: [
        { text: 'Aumenta a temperatura oceânica e causa tempestades no litoral',                    correct: false },
        { text: 'Intensifica as secas no Nordeste e aumenta chuvas no Sul',                         correct: true  },
        { text: 'Provoca seca no Sul e chuvas excessivas na Amazônia',                              correct: false },
        { text: 'La Niña não afeta o Brasil — só El Niño é relevante',                             correct: false }
      ],
      explanation: 'La Niña (resfriamento anormal do Pacífico): tende a intensificar as secas no Nordeste brasileiro (ciclicamente) e aumentar as chuvas/inundações no Sul (Rio Grande do Sul). El Niño tem efeito oposto: chuvas no NE e seca no Sul — o ciclo ENSO influencia fortemente o clima brasileiro.'
    },
    {
      prompt: '📋 A população indígena no Brasil hoje representa aproximadamente:',
      options: [
        { text: '10% da população — grupos majoritários em várias regiões', correct: false },
        { text: 'Menos de 1% — ~1 milhão de pessoas em 700 povos',          correct: true  },
        { text: '5% — presença significativa em todos os estados',           correct: false },
        { text: 'Menos de 100.000 pessoas — estão quase extintos',           correct: false }
      ],
      explanation: 'Os povos indígenas representam ~0,6% da população brasileira — cerca de 1 milhão de pessoas em mais de 700 povos e 180 línguas. Concentrados principalmente na Amazônia, mas com presença em todos os estados. Seu território (TIs) cobre ~14% do Brasil.'
    },
    {
      prompt: '📋 Por que o Brasil tem potencial enorme em energia solar, mas ainda a usa pouco?',
      options: [
        { text: 'Porque a energia solar é proibida pelo governo brasileiro por razões ambientais', correct: false },
        { text: 'Porque historicamente a energia hidrelétrica foi barata e abundante, reduzindo o incentivo para diversificar', correct: true  },
        { text: 'Porque o Brasil está na zona de sombra — recebe poucos raios solares',            correct: false },
        { text: 'Porque a tecnologia solar ainda não está disponível no Brasil',                   correct: false }
      ],
      explanation: 'O Brasil tem uma das maiores irradiações solares do mundo (especialmente Nordeste/Cerrado). Mas a energia hidrelétrica foi historicamente barata — não havia urgência de diversificar. Com as secas e o custo da energia, o solar cresceu rapidamente nos anos 2020 e já supera 12% da geração.'
    },
    {
      prompt: '📋 O "Corredor Nordeste" de energia eólica é estratégico porque:',
      options: [
        { text: 'O Nordeste tem os terrenos mais planos do Brasil, ideais para turbinas',          correct: false },
        { text: 'Os ventos alísios sopram constantes o ano todo no litoral nordestino',            correct: true  },
        { text: 'O governo concentrou todos os subsídios de energia no Nordeste',                  correct: false },
        { text: 'A proximidade com a África facilita a exportação de energia eólica',              correct: false }
      ],
      explanation: 'Os ventos alísios (vindos do Atlântico) sopram de NE para SW com velocidade e constância excepcionais no litoral nordestino — condição ideal para turbinas eólicas. O Nordeste produz ~15% da energia elétrica do Brasil com eólica, reduzindo a dependência das hidrelétricas.'
    },
    {
      prompt: '📋 (Questão ENEM) Leia: "O Brasil ocupa o 9º lugar no PIB mundial, mas o 77º lugar no IDH." Essa diferença indica:',
      options: [
        { text: 'Que o IDH é uma medida menos precisa que o PIB',                                  correct: false },
        { text: 'Que o crescimento econômico não se traduziu em distribuição equitativa de saúde, educação e renda', correct: true  },
        { text: 'Que o IDH brasileiro está melhorando mais rápido que o PIB',                      correct: false },
        { text: 'Que o Brasil tem PIB alto por ser grande, não por ser produtivo',                 correct: false }
      ],
      explanation: 'Essa diferença (9º PIB / 77º IDH) é a expressão quantitativa do "paradoxo brasileiro": grande riqueza total, mas distribuída de forma desigual. O IDH mede saúde (expectativa de vida), educação (anos de estudo) e renda per capita — indica que a riqueza não chegou igualmente a todos os brasileiros.'
    },
    {
      prompt: '📋 Qual é o principal fator que explica a baixa densidade demográfica da Região Norte?',
      options: [
        { text: 'O governo proibiu a migração para a Amazônia por razões ambientais',              correct: false },
        { text: 'A densa floresta, o isolamento geográfico e a ausência histórica de infraestrutura', correct: true  },
        { text: 'O clima equatorial úmido impossibilita a vida humana na região',                  correct: false },
        { text: 'A malária eliminou a maior parte da população da Amazônia no séc. XX',            correct: false }
      ],
      explanation: 'A baixa densidade da Amazônia resulta de: 1) floresta densa dificultou ocupação colonial; 2) ausência de infraestrutura (rodovias, portos, ferrovias) até recentemente; 3) isolamento geográfico de rios e florestas; 4) ausência de atividade econômica em larga escala até o século XX. Não é clima — é história e infraestrutura.'
    }
  ],

  adaptiveReview: [
    {
      prompt: 'ENEM/VESTIBULAR: "O Brasil é uma potência ambiental dormindo sobre uma bomba econômica." Essa afirmação pode ser interpretada como:',
      options: [
        { text: 'O Brasil tem petróleo sob o Cerrado que pode explodir a qualquer momento',        correct: false },
        { text: 'O Brasil tem enorme riqueza ambiental (água, biomas, biodiversidade) que o crescimento econômico está destruindo — podendo eliminar a base de sua própria prosperidade', correct: true  },
        { text: 'O Brasil é tão rico em recursos que pode desafilar todos os países do mundo',     correct: false },
        { text: 'A crise econômica do Brasil vai destruir o meio ambiente por falta de recursos para preservação', correct: false }
      ],
      explanation: 'A "bomba econômica" é o modelo de desenvolvimento baseado em desmatamento de biomas que são fundamentais para o próprio desenvolvimento: o Cerrado produz água para a soja, a Amazônia regula o clima que permite a agricultura. Destruir os biomas para crescer economicamente é minar a fundação do crescimento futuro — como vender as paredes da própria casa para pagar o aluguel.'
    }
  ],

  rewards: { xp: 250, gems: 25, badge: '🎓 Mestre da Geografia do Brasil' },
  completionMessage: '🎓 PARABÉNS! Você domina completamente a Geografia do Brasil — você é um Geógrafo de verdade!',
  nextStage: null
};

window.GEO_SFINAL = GEO_SFINAL;
