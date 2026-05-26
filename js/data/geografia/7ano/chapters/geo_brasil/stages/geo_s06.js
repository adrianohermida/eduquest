/**
 * GEO STAGE 06 — Economia Brasileira
 */

const GEO_S06 = {
  id: 'geo_s06',
  title: 'Economia Brasileira',
  icon: '💰',
  difficulty: 'hard',
  estimatedTime: 14,

  learningObjectives: [
    'Conhecer os setores da economia brasileira (primário, secundário, terciário)',
    'Identificar os principais produtos de exportação do Brasil',
    'Entender o papel do agronegócio na economia brasileira',
    'Reconhecer os desafios econômicos do Brasil',
    'Conectar economia, território e recursos naturais'
  ],

  summary: {
    readTime: 3,
    content: [
      {
        icon: '💰',
        title: 'O Brasil na Economia Mundial',
        text: 'O Brasil é a maior economia da América Latina:\n\n• PIB: ~1,9 trilhão de dólares (2023) — 9ª maior economia do mundo\n• PIB per capita: ~9.600 dólares — média-baixa para o tamanho da economia\n\nSetores econômicos:\n• Primário (agropecuária): 6,5% do PIB, mas 25% das exportações\n• Secundário (indústria): 22% do PIB\n• Terciário (serviços): 71% do PIB\n\n🔑 O PARADOXO BRASILEIRO: 9ª maior economia do mundo, mas com enorme desigualdade — desenvolvimento econômico sem desenvolvimento social proporcional.'
      },
      {
        icon: '🌾',
        title: 'Agronegócio: O Motor das Exportações',
        text: 'O Brasil é um gigante agrícola mundial:\n\n• 1º exportador mundial: soja, café, açúcar, suco de laranja, carne bovina e suína\n• 2º exportador: frango, milho, algodão, celulose\n• Principal destino das exportações: China (27%), EUA, Holanda, Argentina\n\nA Revolução Verde no Cerrado (1970s-atual):\n• A EMBRAPA adaptou variedades de soja ao clima tropical\n• O Cerrado virou o principal "celeiro" do Brasil\n• MT e GO lideram a produção agrícola\n\n🔑 O agronegócio responde por ~25% do PIB total (direta e indiretamente) — é o setor mais robusto da economia brasileira.'
      },
      {
        icon: '🏭',
        title: 'Indústria, Energia e Serviços',
        text: 'Indústria:\n• Polo industrial do ABC paulista (automóveis)\n• Siderurgia: MG (Arcelormittal) e outros\n• Petroquímica: BA e RJ\n• Aeronáutica: Embraer (SP) — 3ª maior fabricante de aviões do mundo\n\nEnergia:\n• 65% hidrelétrica (Itaipu, Belo Monte, Tucuruí)\n• 14% eólica (Nordeste — maior parque eólico onshore da América do Sul)\n• Pré-sal: reservas gigantescas no fundo do Atlântico\n\nServiços:\n• Maior setor — inclui comércio, financeiro, saúde, educação, tecnologia\n• São Paulo: principal centro financeiro da América Latina\n\n⚠️ DESAFIO: "Doença holandesa" — commodities valorizam o real, tornando a indústria menos competitiva.'
      }
    ],

    flashcards: [
      { q: 'Qual o PIB aproximado do Brasil?',          a: '~1,9 trilhão de dólares — 9ª maior economia do mundo.' },
      { q: 'O que o Brasil exporta mais?',              a: 'Soja (1º mundial), café, açúcar, suco de laranja, carnes.' },
      { q: 'O que é o pré-sal?',                       a: 'Camada de petróleo abaixo do sal no fundo do Oceano Atlântico — descoberto em 2006.' },
      { q: 'O que é a EMBRAPA?',                       a: 'Empresa Brasileira de Pesquisa Agropecuária — desenvolveu a soja para o clima tropical.' },
      { q: 'Qual a empresa aeronáutica brasileira de destaque?', a: 'Embraer — 3ª maior fabricante de aviões do mundo.' }
    ],

    mnemonics: [
      { trigger: 'Principais exportações do Brasil', memory: '"SOJA-CARNE-CAFÉ-AÇÚCAR-FERRO = os 5 pilares das exportações brasileiras."' },
      { trigger: 'Matriz energética',               memory: '"65% HÍDRICA + 14% EÓLICA = 79% renovável. Brasil tem uma das matrizes mais limpas do mundo."' }
    ],

    miniReview: [
      { q: 'Por que o Cerrado é tão importante para a economia?', a: 'É onde se produz a maior parte da soja, milho e gado do Brasil — graças à EMBRAPA que adaptou culturas tropicais.' },
      { q: 'O que é o "paradoxo brasileiro" economicamente?',     a: '9ª maior economia, mas com desigualdade altíssima (Gini >0,5) e IDH médio (77º no mundo).' }
    ]
  },

  warmup: [
    {
      prompt: 'O Brasil é o maior exportador mundial de:',
      options: [
        { text: 'Petróleo e gás natural',                          correct: false },
        { text: 'Soja, açúcar, café e suco de laranja',           correct: true  },
        { text: 'Ouro e pedras preciosas',                         correct: false },
        { text: 'Automóveis e eletrônicos',                        correct: false }
      ],
      explanation: 'O Brasil lidera as exportações mundiais de soja, açúcar, café, suco de laranja (concentrado) e carne bovina. A agricultura tropical brasileira é imbatível em escala.'
    },
    {
      prompt: 'A principal fonte de energia elétrica do Brasil é:',
      options: [
        { text: 'Nuclear',      correct: false },
        { text: 'Termelétrica', correct: false },
        { text: 'Hidrelétrica', correct: true  },
        { text: 'Solar',        correct: false }
      ],
      explanation: 'Cerca de 65% da eletricidade brasileira vem de hidrelétricas — aproveitando a enorme rede hídrica com desníveis. Itaipu (PR), Belo Monte (PA) e Tucuruí (PA) são as maiores.'
    },
    {
      prompt: 'A empresa brasileira EMBRAPA é conhecida por:',
      options: [
        { text: 'Ser a maior produtora de petróleo do Brasil',                       correct: false },
        { text: 'Desenvolver tecnologia agropecuária que adaptou a soja ao clima tropical', correct: true  },
        { text: 'Administrar as exportações de minério de ferro',                    correct: false },
        { text: 'Fabricar aviões para a Força Aérea Brasileira',                     correct: false }
      ],
      explanation: 'A EMBRAPA (fundada em 1973) é responsável pelo milagre agrícola brasileiro: adaptou variedades de soja ao clima e solo do Cerrado tropical — transformando terras "inaproveitáveis" no maior celeiro do mundo.'
    }
  ],

  guidedPractice: [
    {
      prompt: '🔍 DICA: O pré-sal foi uma das maiores descobertas de petróleo do mundo.\n\nPor que o pré-sal é tecnologicamente desafiador de explorar?',
      options: [
        { text: 'Porque fica em regiões de conflito com países vizinhos',                  correct: false },
        { text: 'Porque o petróleo fica a 7km de profundidade — abaixo de rochas, água e uma camada de sal', correct: true  },
        { text: 'Porque o petróleo do pré-sal é de qualidade inferior',                    correct: false },
        { text: 'Porque a camada de sal é radioativa e impede o acesso',                   correct: false }
      ],
      explanation: 'O petróleo do pré-sal fica ~300km mar adentro, abaixo de ~2km de água, ~4km de rocha e ~2km de sal. Total: ~8km de profundidade. A Petrobras desenvolveu tecnologia própria para explorar — tornando-se líder mundial em águas profundas.'
    },
    {
      prompt: '🔍 DICA: O Brasil tem uma matriz energética "limpa" comparada a outros países.\n\nPor que a matriz energética renovável é uma vantagem econômica para o Brasil?',
      options: [
        { text: 'Porque a energia renovável gera mais empregos que a energia fóssil',       correct: false },
        { text: 'Energia mais barata + menor dependência de petróleo importado + menor emissão de CO2', correct: true  },
        { text: 'Porque o Brasil pode exportar energia elétrica para os EUA',               correct: false },
        { text: 'Porque a energia solar tem custo zero após a instalação',                  correct: false }
      ],
      explanation: 'Vantagens da matriz renovável brasileira: 1) energia hidrelétrica é barata após a construção; 2) menor dependência de petróleo importado (segurança energética); 3) menores emissões = credenciais verdes para exportações; 4) posicionamento favorável na transição energética global.'
    }
  ],

  questions: [
    {
      prompt: 'O que significa dizer que o Brasil tem uma economia "commodities-dependente"?',
      options: [
        { text: 'Que o Brasil não tem indústria — só agricultura',                          correct: false },
        { text: 'Que grande parte das exportações são produtos primários (soja, petróleo, minério) com baixo valor agregado', correct: true  },
        { text: 'Que o Brasil importa mais commodities do que exporta',                      correct: false },
        { text: 'Que o governo controla o preço de todas as mercadorias',                   correct: false }
      ],
      explanation: 'Dependência de commodities significa que as exportações são dominadas por produtos primários (soja, carne, minério, petróleo) — de preço volátil no mercado internacional. Quando os preços caem, a economia sofre. Contraposição: economias de alto valor agregado (eletrônicos, farmácia, software).'
    },
    {
      prompt: 'A "Embraer" (empresa aeronáutica brasileira) é conhecida mundialmente por:',
      options: [
        { text: 'Produzir aviões militares de combate de última geração',                   correct: false },
        { text: 'Ser a 3ª maior fabricante de aviões comerciais do mundo (jatos regionais)', correct: true  },
        { text: 'Desenvolver tecnologia de foguetes para a corrida espacial',               correct: false },
        { text: 'Fabricar helicópteros para o mercado sul-americano',                       correct: false }
      ],
      explanation: 'A Embraer (fundada em 1969 em São José dos Campos/SP) é a 3ª maior fabricante de aviões do mundo — especializada em jatos regionais (70-150 lugares). Exporta para mais de 50 países.'
    },
    {
      prompt: 'A "Revolução da Soja" no Cerrado brasileiro (1970s-90s) foi possível principalmente graças a:',
      options: [
        { text: 'Imigrantes sul-americanos que trouxeram a soja da Argentina',              correct: false },
        { text: 'Pesquisas da EMBRAPA que criaram variedades adaptadas ao calor e acidez do Cerrado', correct: true  },
        { text: 'Inundações do Pantanal que enriqueceram o solo do Cerrado',                correct: false },
        { text: 'Incentivos da China que financiou a expansão da soja brasileira',          correct: false }
      ],
      explanation: 'O Cerrado tem solo ácido e latitude tropical — incompatível com a soja original (temperada). A EMBRAPA desenvolveu variedades de soja resistentes ao calor e corrigiu o solo com calcário. Transformação de "terras inaproveitáveis" em maior fronteira agrícola do mundo.'
    },
    {
      prompt: 'A maior parte do PIB brasileiro vem do setor:',
      options: [
        { text: 'Primário (agropecuária)',   correct: false },
        { text: 'Secundário (indústria)',    correct: false },
        { text: 'Terciário (serviços)',      correct: true  },
        { text: 'Extração mineral',         correct: false }
      ],
      explanation: 'O setor terciário (serviços: comércio, finanças, saúde, educação, tecnologia, turismo) representa cerca de 71% do PIB brasileiro — tendência global nas economias desenvolvidas e em desenvolvimento.'
    },
    {
      prompt: 'A "Petrobras" é importante para a economia brasileira porque:',
      options: [
        { text: 'É a única empresa que pode explorar petróleo no Brasil',                  correct: false },
        { text: 'É uma das maiores empresas do mundo em valor de mercado e domina o pré-sal', correct: true  },
        { text: 'É pública e distribui toda a renda do petróleo para os estados',          correct: false },
        { text: 'Refina todo o petróleo importado pelo Brasil',                             correct: false }
      ],
      explanation: 'A Petrobras (fundada em 1953) é uma das 20 maiores empresas do mundo — lidera a exploração do pré-sal com tecnologia própria. Em 2023, foi a empresa mais lucrativa da América Latina.'
    },
    {
      prompt: 'O polo industrial do "ABC paulista" é famoso pela produção de:',
      options: [
        { text: 'Aviões e componentes aeronáuticos',                                       correct: false },
        { text: 'Automóveis — sede das principais montadoras instaladas no Brasil',         correct: true  },
        { text: 'Aço e produtos siderúrgicos',                                             correct: false },
        { text: 'Computadores e eletrônicos de consumo',                                   correct: false }
      ],
      explanation: 'O ABC paulista (Santo André, São Bernardo do Campo, São Caetano do Sul) é o coração da indústria automobilística brasileira — sede de montadoras como Volkswagen, Ford, GM, Mercedes, Scania. Surgiu nos anos 1950-60 com a política de industrialização de JK.'
    },
    {
      prompt: 'Qual estado é o maior produtor de minério de ferro do Brasil?',
      options: [
        { text: 'São Paulo',      correct: false },
        { text: 'Pará',           correct: false },
        { text: 'Minas Gerais',   correct: true  },
        { text: 'Goiás',          correct: false }
      ],
      explanation: 'Minas Gerais tem o Quadrilátero Ferrífero — a maior reserva de minério de ferro do Brasil. A Vale (antiga CVRD), sediada em MG, é a maior mineradora do mundo. O Pará tem Carajás (também da Vale) — a segunda maior mina.'
    },
    {
      prompt: 'A produção de energia eólica no Brasil está concentrada principalmente no:',
      options: [
        { text: 'Sudeste — por ter mais tecnologia',                                       correct: false },
        { text: 'Nordeste — por ter ventos constantes do Alísios',                         correct: true  },
        { text: 'Sul — por ter clima subtropical mais frio e ventoso',                     correct: false },
        { text: 'Norte — pelos ventos amazônicos',                                         correct: false }
      ],
      explanation: 'O Nordeste tem ventos constantes dos alísios o ano todo — condição ideal para turbinas eólicas. Ceará, Rio Grande do Norte e Bahia lideram a produção eólica brasileira. O Brasil tem o maior parque eólico onshore da América do Sul.'
    },
    {
      prompt: 'A China é o principal destino das exportações brasileiras porque:',
      options: [
        { text: 'O Brasil e a China têm um acordo de livre comércio bilateral',             correct: false },
        { text: 'A China é a maior fábrica do mundo e precisa de commodities (soja, minério, petróleo) que o Brasil produz', correct: true  },
        { text: 'Brasileiros imigraram em massa para a China nos anos 2000',                correct: false },
        { text: 'A China financiou a construção de todas as usinas hidrelétricas brasileiras', correct: false }
      ],
      explanation: 'A China é o maior importador de commodities do mundo — precisa de soja para alimentar bilhões de pessoas, minério de ferro para sua siderurgia, petróleo para energia. O Brasil é o maior fornecedor de vários desses produtos. Hoje, ~27% das exportações brasileiras vão para a China.'
    },
    {
      prompt: 'O que é a "desindustrialização prematura" do Brasil?',
      options: [
        { text: 'O processo pelo qual as fábricas brasileiras se tornaram robotizadas',    correct: false },
        { text: 'A redução da participação industrial no PIB antes de o Brasil atingir renda per capita de país desenvolvido', correct: true  },
        { text: 'O fechamento de indústrias para dar lugar a serviços de alta tecnologia', correct: false },
        { text: 'A exportação de maquinário industrial para a China nos anos 2000',        correct: false }
      ],
      explanation: 'Países desenvolvidos desindustrializam DEPOIS de atingir alto PIB per capita (EUA, Alemanha). O Brasil desindustrializou "prematuramente" — a indústria encolheu de 35% para ~22% do PIB enquanto o país ainda é de renda média. Resultado: menos inovação, menos empregos qualificados, mais dependência de commodities.'
    }
  ],

  adaptiveReview: [
    {
      prompt: 'DIFÍCIL: O que é a "doença holandesa" e como ela afeta o Brasil?',
      options: [
        { text: 'É uma doença das plantações de soja que destrói a safra brasileira',      correct: false },
        { text: 'É quando a riqueza em commodities aprecia a moeda, prejudicando a indústria exportadora e tornando importações mais baratas', correct: true  },
        { text: 'É um fenômeno climático que causa seca nas regiões produtoras de grãos',  correct: false },
        { text: 'É a dependência excessiva de investimentos holandeses no agronegócio',    correct: false }
      ],
      explanation: 'A "doença holandesa" (descoberta na Holanda quando gás natural elevou o guilder): grandes exportações de commodities → dólares entram → real se valoriza → produtos brasileiros ficam caros no exterior → indústria perde competitividade → desindustrialização. O Brasil sofre esse fenômeno com soja, petróleo e minério.'
    }
  ],

  rewards: { xp: 150, gems: 15, badge: '💰 Economista Geógrafo' },
  completionMessage: '💰 Você domina a economia brasileira — do agronegócio ao pré-sal!',
  nextStage: 'geo_sboss'
};

window.GEO_S06 = GEO_S06;
