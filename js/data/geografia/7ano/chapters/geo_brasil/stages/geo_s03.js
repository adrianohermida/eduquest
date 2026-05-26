/**
 * GEO STAGE 03 — Clima e Vegetação
 */

const GEO_S03 = {
  id: 'geo_s03',
  title: 'Clima e Vegetação',
  icon: '🌿',
  difficulty: 'medium',
  estimatedTime: 12,

  learningObjectives: [
    'Identificar os principais climas do Brasil e suas características',
    'Reconhecer os biomas brasileiros e sua localização',
    'Entender a relação entre clima, vegetação e biodiversidade',
    'Compreender a importância dos biomas para o equilíbrio ambiental',
    'Conhecer as ameaças ao desmatamento dos biomas'
  ],

  summary: {
    readTime: 3,
    content: [
      {
        icon: '🌡️',
        title: 'Climas do Brasil',
        text: 'O Brasil tem grande variedade climática:\n\nClima Equatorial:\n• Amazônia — quente e úmido o ano todo, sem estação seca\n• Temperatura: 24-27°C; chuvas: 2.000-3.000 mm/ano\n\nClima Tropical:\n• A maior parte do Brasil — duas estações (seca/chuvas)\n• Verão chuvoso, inverno seco\n\nClima Semiárido (Tropical Seco):\n• Sertão nordestino — chuvas irregulares e escassas (<800mm)\n• Temperatura alta (>27°C), evaporação intensa\n\nClima Subtropical:\n• Sul do Brasil (abaixo do Trópico de Capricórnio)\n• Quatro estações bem definidas, geadas, neve possível (RS, SC)\n\n🔑 O Brasil não tem deserto, mas tem o Semiárido — muito seco mas não classificado como deserto (tem vegetação).'
      },
      {
        icon: '🌳',
        title: 'Biomas Brasileiros',
        text: 'O Brasil abriga 6 grandes biomas:\n\n🌿 Amazônia (49%): maior floresta tropical do mundo; ~30.000 espécies vegetais\n🌾 Cerrado (23%): savana tropical — "berço das águas" — nasce 8 das 12 bacias hidrográficas\n🌵 Caatinga (11%): único bioma exclusivamente brasileiro; adaptado à seca\n🌊 Mata Atlântica (13% original, <12% restante): litoral; altíssima biodiversidade\n🌿 Pampa (2%): Sul gaúcho; campos temperados, pecuária\n🐊 Pantanal (2%): planície alagável; maior concentração faunística\n\n🔑 A Mata Atlântica foi reduzida de 15% do território para menos de 12% do original — 88% destruído em 500 anos.'
      },
      {
        icon: '⚠️',
        title: 'Desmatamento e Crise Climática',
        text: 'Situação dos biomas brasileiros:\n\n🔴 CRÍTICO: Mata Atlântica (<12% original), Cerrado (~50% desmatado)\n🟡 AMEAÇADO: Amazônia (~20% desmatado — "ponto de não-retorno" em ~25%)\n\nPrincipais causas do desmatamento:\n• Agropecuária (soja, gado) — maior causa na Amazônia\n• Especulação fundiária\n• Extração ilegal de madeira\n• Queimadas\n\nImpactos do desmatamento:\n• Perda de biodiversidade irreversível\n• Alteração do "ciclo da água" (chuvas)\n• Contribuição para o aquecimento global\n• Desertificação do semiárido\n\n🔑 Os "rios voadores" amazônicos — correntes de vapor de água — irrigam o Sudeste e Centro-Oeste. Desmatar a Amazônia afeta as chuvas de São Paulo e Brasília.'
      }
    ],

    flashcards: [
      { q: 'Qual bioma ocupa a maior área do Brasil?',    a: 'Amazônia — ~49% do território.' },
      { q: 'Qual bioma é exclusivamente brasileiro?',     a: 'Caatinga — único bioma 100% dentro do Brasil.' },
      { q: 'O que é o "Cerrado"?',                       a: 'Savana tropical — "berço das águas" do Brasil, nasce 8 das 12 bacias.' },
      { q: 'Qual é o clima do Sertão nordestino?',       a: 'Semiárido — quente, seco, chuvas irregulares (<800mm/ano).' },
      { q: 'Qual bioma foi mais destruído no Brasil?',   a: 'Mata Atlântica — menos de 12% do original restante.' }
    ],

    mnemonics: [
      { trigger: '6 biomas do Brasil',    memory: '"AMA-CE-CA-MA-PA-PA: AMAzônia, CErrado, CAatinga, MAta Atlântica, PAntanal, PAampa."' },
      { trigger: 'Caatinga exclusiva',    memory: '"CAATINGA = tupi = \"mata branca\". ÚNICO bioma 100% brasileiro — não existe em nenhum outro país."' }
    ],

    miniReview: [
      { q: 'Por que o Cerrado é chamado "berço das águas"?', a: 'Dele nascem 8 das 12 principais bacias hidrográficas brasileiras — suas nascentes abastecem rios que percorrem o país inteiro.' },
      { q: 'Por que desmatar a Amazônia afeta São Paulo?',   a: 'Os "rios voadores" — vapor d\'água liberado pela floresta — irrigam o Centro-Oeste e Sudeste. Sem a floresta, as chuvas diminuem em SP, PR e MS.' }
    ]
  },

  warmup: [
    {
      prompt: 'O único bioma exclusivamente brasileiro (que não existe em outros países) é:',
      options: [
        { text: 'Amazônia',        correct: false },
        { text: 'Caatinga',        correct: true  },
        { text: 'Cerrado',         correct: false },
        { text: 'Mata Atlântica',  correct: false }
      ],
      explanation: 'A Caatinga (tupi: "mata branca") é o único bioma 100% dentro do território brasileiro — não existe em nenhum outro país. Ocupa 11% do Brasil, no Nordeste semiárido.'
    },
    {
      prompt: 'O clima do Sul do Brasil (abaixo do Trópico de Capricórnio) é classificado como:',
      options: [
        { text: 'Tropical',    correct: false },
        { text: 'Equatorial',  correct: false },
        { text: 'Subtropical', correct: true  },
        { text: 'Semiárido',   correct: false }
      ],
      explanation: 'O Sul do Brasil (RS, SC, PR) tem clima subtropical — quatro estações bem definidas, geadas no inverno, e neve é possível na Serra Gaúcha e Serra Catarinense.'
    },
    {
      prompt: 'O bioma brasileiro chamado "berço das águas" é:',
      options: [
        { text: 'Amazônia',   correct: false },
        { text: 'Pantanal',   correct: false },
        { text: 'Cerrado',    correct: true  },
        { text: 'Pampa',      correct: false }
      ],
      explanation: 'O Cerrado é chamado "berço das águas" porque suas nascentes alimentam 8 das 12 principais bacias hidrográficas brasileiras — inclui nascentes do Araguaia, Tocantins, São Francisco e afluentes do Amazonas.'
    }
  ],

  guidedPractice: [
    {
      prompt: '🔍 DICA: O semiárido nordestino tem uma vegetação adaptada à seca.\n\nQuais características da Caatinga demonstram adaptação ao clima seco?',
      options: [
        { text: 'Árvores altíssimas com folhas permanentes para capturar mais luz solar',          correct: false },
        { text: 'Árvores baixas com folhas caducas, raízes profundas e cactos — economizam água', correct: true  },
        { text: 'Plantas carnívoras que absorvem água de insetos no solo',                          correct: false },
        { text: 'Florestas densas que criam seu próprio microclima úmido',                         correct: false }
      ],
      explanation: 'As plantas da Caatinga são "xerófilas" (adaptadas à seca): folhas que caem na seca para reduzir evapotranspiração, raízes extensas para buscar água no subsolo, caules que armazenam água (cactos, mandacaru, xique-xique).'
    },
    {
      prompt: '🔍 DICA: A Mata Atlântica foi o primeiro bioma a ser devastado no Brasil.\n\nPor que a Mata Atlântica foi tão destruída?',
      options: [
        { text: 'Por incêndios naturais causados por raios',                               correct: false },
        { text: 'Por coincidir com o litoral — exatamente onde a colonização e as cidades cresceram', correct: true  },
        { text: 'Porque tinha madeira de qualidade inferior e foi abandonada',             correct: false },
        { text: 'Porque o governo colonial proibiu sua conservação por razões estratégicas', correct: false }
      ],
      explanation: 'A Mata Atlântica cobria o litoral — exatamente onde os portugueses chegaram e as cidades cresceram: São Paulo, Rio de Janeiro, Salvador, Recife, Porto Alegre. 500 anos de urbanização e agricultura destruíram 88% do bioma.'
    }
  ],

  questions: [
    {
      prompt: 'Qual é a porcentagem aproximada do território brasileiro coberta pela Amazônia?',
      options: [
        { text: '30%',  correct: false },
        { text: '39%',  correct: false },
        { text: '49%',  correct: true  },
        { text: '60%',  correct: false }
      ],
      explanation: 'A Floresta Amazônica cobre cerca de 49% do território brasileiro — um pouco menos da metade do país é Amazônia.'
    },
    {
      prompt: 'O fenômeno dos "rios voadores" significa que:',
      options: [
        { text: 'O Rio Amazonas muda de curso sazonalmente',                               correct: false },
        { text: 'A Amazônia libera vapor de água que viaja como corrente aérea irrigando outras regiões', correct: true  },
        { text: 'Os rios amazônicos têm correntezas tão fortes que parecem voar',          correct: false },
        { text: 'Existem rios subterrâneos que emergem nas chapadas centrais',             correct: false }
      ],
      explanation: 'A floresta amazônica transpira trilhões de litros de água por dia — esse vapor forma "rios aéreos" que viajam para o sul, gerando chuvas no Sudeste, Centro-Oeste e Sul. Sem a Amazônia, essas regiões ficariam muito mais secas.'
    },
    {
      prompt: 'Qual estado brasileiro é famoso pela ocorrência de neve no inverno?',
      options: [
        { text: 'Pará',             correct: false },
        { text: 'Minas Gerais',     correct: false },
        { text: 'Santa Catarina',   correct: true  },
        { text: 'Mato Grosso',      correct: false }
      ],
      explanation: 'Santa Catarina (e o Rio Grande do Sul) têm as maiores probabilidades de neve no Brasil — especialmente nas serras (Urubici, São Joaquim em SC). Ocorre quando massas de ar polar chegam às altitudes elevadas.'
    },
    {
      prompt: 'O semiárido nordestino é caracterizado por:',
      options: [
        { text: 'Altas temperaturas com chuvas regulares o ano todo',                      correct: false },
        { text: 'Altas temperaturas, baixa umidade e chuvas escassas e irregulares',       correct: true  },
        { text: 'Temperaturas baixas e solos áridos sem vegetação',                        correct: false },
        { text: 'Secas no verão e chuvas abundantes no inverno',                           correct: false }
      ],
      explanation: 'O Semiárido nordestino (onde vive a Caatinga) tem: temperatura média de 27°C, precipitação <800mm/ano, irregular (pode chover tudo em 2 meses e nada nos outros 10), evaporação maior que a precipitação.'
    },
    {
      prompt: 'O bioma Pampa está localizado em qual estado brasileiro?',
      options: [
        { text: 'Paraná',            correct: false },
        { text: 'Santa Catarina',    correct: false },
        { text: 'Rio Grande do Sul', correct: true  },
        { text: 'Mato Grosso do Sul',correct: false }
      ],
      explanation: 'O Pampa (campos sulinos) ocupa 63% do Rio Grande do Sul — os campos temperados que se estendem pelo Uruguai e Argentina. Caracterizado por campinas, pecuária extensiva e clima subtropical.'
    },
    {
      prompt: 'Por que o Cerrado está sendo considerado em "colapso ambiental"?',
      options: [
        { text: 'Está sendo inundado pela expansão dos rios amazônicos',                  correct: false },
        { text: 'Mais de 50% já foi convertido em pastagens e lavouras de soja',          correct: true  },
        { text: 'A desertificação transformou 40% do Cerrado em paisagem desértica',      correct: false },
        { text: 'O aquecimento global extinguiu toda a fauna nativa do bioma',            correct: false }
      ],
      explanation: 'O Cerrado foi o bioma mais devastado relativamente: mais de 50% já foi convertido para agropecuária (soja, cana, gado). Como é o "berço das águas", seu desmatamento ameaça as bacias hidrográficas de todo o Brasil.'
    },
    {
      prompt: 'Qual característica distingue o clima equatorial do clima tropical?',
      options: [
        { text: 'No equatorial, as temperaturas são mais baixas',                          correct: false },
        { text: 'O equatorial não tem estação seca definida; o tropical tem verão chuvoso e inverno seco', correct: true  },
        { text: 'O tropical tem temperaturas mais altas que o equatorial',                 correct: false },
        { text: 'No equatorial, as chuvas são apenas no inverno',                          correct: false }
      ],
      explanation: 'Clima equatorial: chuvas abundantes e regulares O ANO TODO (>2.000mm, sem estação seca). Clima tropical: chuvas concentradas no verão, inverno SECO — dois períodos bem distintos.'
    },
    {
      prompt: 'A biodiversidade da Mata Atlântica é considerada excepcional porque:',
      options: [
        { text: 'É o bioma mais antigo do mundo em termos evolutivos',                     correct: false },
        { text: 'Tem altíssimo índice de endemismo — espécies que existem só ali',         correct: true  },
        { text: 'É o único bioma com espécies de todos os continentes',                    correct: false },
        { text: 'Tem o maior número de árvores por hectare no mundo',                      correct: false }
      ],
      explanation: 'A Mata Atlântica é um "hotspot" de biodiversidade: apesar de ter menos de 12% de seu tamanho original, ainda abriga 70% das espécies ameaçadas do Brasil e altíssimo endemismo (espécies que não existem em nenhum outro lugar).'
    },
    {
      prompt: 'A "CERRADO" é frequentemente chamado de "savana brasileira" porque:',
      options: [
        { text: 'Tem paisagem similar às savanas africanas — campos com árvores esparsas', correct: true  },
        { text: 'Foi colonizado pelos mesmos povos que habitavam as savanas africanas',    correct: false },
        { text: 'Tem o mesmo clima e temperatura da savana da África subsaariana',         correct: false },
        { text: 'As plantas do Cerrado são geneticamente iguais às das savanas africanas', correct: false }
      ],
      explanation: 'O Cerrado é uma savana tropical — campos abertos com árvores esparsas de troncos tortos e casca espessa. Visualmente parecido com as savanas africanas, mas com biodiversidade totalmente diferente (e muito maior).'
    },
    {
      prompt: 'Qual é a principal causa de desmatamento na Amazônia brasileira?',
      options: [
        { text: 'Extração de madeira para exportação',                                     correct: false },
        { text: 'Expansão da pecuária bovina e da agricultura (especialmente soja)',       correct: true  },
        { text: 'Construção de rodovias e ferrovias',                                      correct: false },
        { text: 'Urbanização acelerada das cidades amazônicas',                            correct: false }
      ],
      explanation: 'A pecuária extensiva (gado) e a agricultura (soja, milho) são responsáveis por cerca de 80% do desmatamento amazônico — florestas são derrubadas e queimadas para criar pasto ou plantações.'
    }
  ],

  adaptiveReview: [
    {
      prompt: 'DIFÍCIL: Por que o desmatamento da Amazônia pode atingir um "ponto de não-retorno" e o que isso significa?',
      options: [
        { text: 'A partir de certo ponto, a floresta não consegue mais se regenerar e pode virar savana permanentemente', correct: true  },
        { text: 'Após 25% desmatado, a lei brasileira proíbe qualquer novo desmatamento',  correct: false },
        { text: 'O ponto de não-retorno significa que não haverá mais madeira para explorar', correct: false },
        { text: 'A partir desse ponto, o governo é obrigado a replant toda a área',        correct: false }
      ],
      explanation: 'Cientistas estimam que quando ~25% da Amazônia for desmatado, a floresta perde capacidade de gerar sua própria chuva (os "rios voadores" enfraquecem) → menos chuva → mais seca → mais morte de árvores → mais desmatamento. Um ciclo irreversível que poderia transformar partes da Amazônia em savana permanente — com impactos no clima de toda a América do Sul.'
    }
  ],

  rewards: { xp: 130, gems: 13, badge: '🌿 Guardião dos Biomas' },
  completionMessage: '🌿 Você domina os climas e biomas do Brasil!',
  nextStage: 'geo_s04'
};

window.GEO_S03 = GEO_S03;
