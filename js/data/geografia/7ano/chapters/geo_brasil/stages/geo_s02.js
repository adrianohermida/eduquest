/**
 * GEO STAGE 02 — Relevo e Hidrografia
 */

const GEO_S02 = {
  id: 'geo_s02',
  title: 'Relevo e Hidrografia',
  icon: '⛰️',
  difficulty: 'easy',
  estimatedTime: 12,

  learningObjectives: [
    'Identificar as principais formas de relevo brasileiro',
    'Conhecer as maiores bacias hidrográficas do Brasil',
    'Compreender a importância dos rios para o desenvolvimento brasileiro',
    'Reconhecer o Pantanal como maior área úmida do planeta',
    'Entender a relação entre relevo e distribuição da população'
  ],

  summary: {
    readTime: 3,
    content: [
      {
        icon: '⛰️',
        title: 'Relevo Brasileiro',
        text: 'O Brasil não tem montanhas muito altas — predominam planaltos e planícies:\n\nPrincipais formas de relevo:\n• Planície Amazônica — maior planície tropical do mundo\n• Planalto Brasileiro (Central) — ocupa a maior parte do território\n• Planalto da Borborema — Nordeste\n• Planalto Atlântico — litoral leste\n• Planície do Pantanal — maior área úmida do planeta\n\nPontos mais altos:\n• Pico da Neblina (AM): 2.994 m — ponto mais alto do Brasil\n• Pico 31 de Março (AM): 2.974 m\n\n🔑 Ao contrário de outros países da América do Sul (Peru, Chile), o Brasil não tem cordilheiras — o relevo é suave e antigo.'
      },
      {
        icon: '🌊',
        title: 'Bacias Hidrográficas',
        text: 'O Brasil tem a maior rede hidrográfica do mundo em volume d\'água:\n\nBacia Amazônica:\n• A maior bacia hidrográfica do mundo\n• Rio Amazonas: 2º maior em extensão, 1º em vazão\n• Drena 45% do território brasileiro\n\nBacia do Paraná-Prata:\n• Rio Paraná: importante para energia (Itaipu)\n• Bacia compartilhada com Argentina, Paraguai, Uruguai, Bolívia\n\nBacia do São Francisco:\n• "Rio da Integração Nacional"\n• Nasce em MG, desemboca entre SE e AL\n• Fundamental para o Nordeste semiárido\n\n🔑 O Brasil responde por ~12% da água doce superficial do planeta.'
      },
      {
        icon: '🌿',
        title: 'O Pantanal',
        text: 'O Pantanal é a maior planície alagável do mundo:\n\n• Localização: Mato Grosso e Mato Grosso do Sul (Brasil) + Bolívia e Paraguai\n• Área: ~150.000 km² no Brasil (200.000 km² no total)\n• Patrimônio da Humanidade UNESCO (1999)\n\nCaracterísticas únicas:\n• Inunda sazonalmente (novembro a março)\n• Abriga 4.700 espécies de plantas, 656 de aves, 325 de peixes\n• Maior concentração de jacarés do mundo\n• Maior população selvagem de onças-pintadas do mundo\n\n🔑 Ameaças: queimadas, desmatamento do entorno, agrotóxicos, caça ilegal.'
      }
    ],

    flashcards: [
      { q: 'Qual é o ponto mais alto do Brasil?',      a: 'Pico da Neblina (AM) — 2.994 metros.' },
      { q: 'Qual é a maior bacia hidrográfica do mundo?', a: 'Bacia Amazônica — drena 45% do Brasil.' },
      { q: 'O que é o Pantanal?',                      a: 'Maior planície alagável do planeta — Patrimônio da Humanidade (UNESCO, 1999).' },
      { q: 'Qual o rio mais importante do Nordeste?',  a: 'Rio São Francisco — "Rio da Integração Nacional".' },
      { q: 'Qual usina hidrelétrica fica no Rio Paraná?', a: 'Usina de Itaipu — entre Brasil e Paraguai.' }
    ],

    mnemonics: [
      { trigger: 'Bacias principais',  memory: '"AMA (Amazônica) + PRATA (Paraná) + FRAN (São Francisco) = os 3 grandes sistemas hídricos do Brasil."' },
      { trigger: 'São Francisco',      memory: '"NASCE em MG, percorre BA, PE, AL, SE — RIO DA INTEGRAÇÃO. Único que atravessa o semiárido."' }
    ],

    miniReview: [
      { q: 'Por que o Rio São Francisco é chamado "Rio da Integração Nacional"?', a: 'Percorre 5 estados do Nordeste e Sudeste, conectando regiões secas ao mar — vital para irrigação e transporte no semiárido.' },
      { q: 'Por que o Brasil tem tanta água doce?', a: 'Posição tropical + bacia amazônica enorme + chuvas abundantes = 12% da água doce do planeta.' }
    ]
  },

  warmup: [
    {
      prompt: 'O ponto mais alto do Brasil é:',
      options: [
        { text: 'Pico do Itambé (MG)',    correct: false },
        { text: 'Pico da Neblina (AM)',    correct: true  },
        { text: 'Serra do Caparaó (ES)',   correct: false },
        { text: 'Chapada Diamantina (BA)', correct: false }
      ],
      explanation: 'O Pico da Neblina (2.994 m), no Amazonas, na fronteira com a Venezuela, é o ponto mais alto do Brasil.'
    },
    {
      prompt: 'A maior bacia hidrográfica do mundo em volume de água é:',
      options: [
        { text: 'Bacia do Rio Nilo',      correct: false },
        { text: 'Bacia Amazônica',        correct: true  },
        { text: 'Bacia do Rio Congo',     correct: false },
        { text: 'Bacia do Mississippi',   correct: false }
      ],
      explanation: 'A Bacia Amazônica é a maior do mundo em volume d\'água e a segunda em extensão (atrás do Nilo em extensão, mas infinitamente maior em vazão).'
    },
    {
      prompt: 'O Pantanal está localizado principalmente nos estados de:',
      options: [
        { text: 'Pará e Amazonas',                      correct: false },
        { text: 'Mato Grosso e Mato Grosso do Sul',     correct: true  },
        { text: 'Tocantins e Goiás',                    correct: false },
        { text: 'Bahia e Minas Gerais',                 correct: false }
      ],
      explanation: 'O Pantanal brasileiro ocupa MT e MS, com extensões para Bolívia e Paraguai. É a maior área úmida do planeta — Patrimônio da Humanidade desde 1999.'
    }
  ],

  guidedPractice: [
    {
      prompt: '🔍 DICA: O Rio São Francisco tem papel único no Brasil.\n\nPor que o Rio São Francisco é vital para o Nordeste brasileiro?',
      options: [
        { text: 'Por ser o único rio navegável do Brasil',                              correct: false },
        { text: 'Por ser perene (não seca) e atravessar o semiárido, permitindo irrigação', correct: true  },
        { text: 'Por desembocar no Oceano Atlântico e facilitar o comércio exterior',  correct: false },
        { text: 'Por ter as maiores cachoeiras do Brasil, gerando energia elétrica',   correct: false }
      ],
      explanation: 'No semiárido nordestino, a seca é crônica — o São Francisco é perene (nunca seca) e cruza a região, sendo a principal fonte de irrigação, abastecimento e a razão de cidades prosperarem no sertão.'
    },
    {
      prompt: '🔍 DICA: O relevo influencia onde as pessoas vivem.\n\nPor que a maior parte da população brasileira vive no litoral e nas bordas do planalto atlântico?',
      options: [
        { text: 'Porque o interior é proibido por lei',                                 correct: false },
        { text: 'Por razões históricas (colonização pelo litoral) + clima mais ameno nas encostas', correct: true  },
        { text: 'Porque o interior não tem água e é totalmente deserto',                correct: false },
        { text: 'Porque a Serra do Mar impede qualquer migração para o interior',       correct: false }
      ],
      explanation: 'A colonização brasileira começou pelo litoral (séculos XVI-XVII) — cidades costeiras cresceram primeiro. As bordas do planalto atlântico têm clima mais fresco e úmido, favorecendo a agricultura. O interior foi ocupado mais lentamente.'
    }
  ],

  questions: [
    {
      prompt: 'Qual percentual do território brasileiro é drenado pela Bacia Amazônica?',
      options: [
        { text: '25%',  correct: false },
        { text: '35%',  correct: false },
        { text: '45%',  correct: true  },
        { text: '60%',  correct: false }
      ],
      explanation: 'A Bacia Amazônica drena aproximadamente 45% do território brasileiro — a maior bacia hidrográfica do mundo em área e volume de água.'
    },
    {
      prompt: 'A usina hidrelétrica de Itaipu, uma das maiores do mundo, está no rio:',
      options: [
        { text: 'Rio Amazonas',        correct: false },
        { text: 'Rio São Francisco',   correct: false },
        { text: 'Rio Paraná',          correct: true  },
        { text: 'Rio Tocantins',       correct: false }
      ],
      explanation: 'Itaipu Binacional fica no Rio Paraná, na fronteira entre Brasil e Paraguai. Foi a maior hidrelétrica do mundo em capacidade até a inauguração da Três Gargantas (China).'
    },
    {
      prompt: 'A Serra do Mar é um acidente geográfico que:',
      options: [
        { text: 'Separa o Brasil da Argentina',                                           correct: false },
        { text: 'Forma uma escarpa entre o litoral e o planalto no Sul/Sudeste brasileiro', correct: true  },
        { text: 'É a cadeia montanhosa mais alta da América do Sul',                      correct: false },
        { text: 'Fica na divisa entre o Nordeste e o Norte do Brasil',                    correct: false }
      ],
      explanation: 'A Serra do Mar corre paralela ao litoral Sul/Sudeste — cria uma escarpa abrupta entre a faixa costeira estreita e o Planalto Atlântico. Causa chuvas orográficas abundantes na vertente marítima.'
    },
    {
      prompt: 'O Pantanal é considerado Patrimônio da Humanidade pela UNESCO principalmente por:',
      options: [
        { text: 'Ter as maiores reservas de petróleo da América do Sul',                  correct: false },
        { text: 'Ser a maior área úmida do planeta com biodiversidade excepcional',       correct: true  },
        { text: 'Ser o local de origem da civilização tupinambá',                         correct: false },
        { text: 'Ter os maiores depósitos de minério de ferro do Brasil',                 correct: false }
      ],
      explanation: 'O Pantanal (reconhecido em 1999) é o maior Patrimônio Natural da humanidade em biodiversidade de área úmida: 4.700 espécies de plantas, concentração única de onças-pintadas, jacarés e aves.'
    },
    {
      prompt: 'O Rio Amazonas se destaca mundialmente por ser:',
      options: [
        { text: 'O mais longo do mundo',                     correct: false },
        { text: 'O de maior vazão (volume de água) do mundo', correct: true  },
        { text: 'O mais profundo do mundo',                   correct: false },
        { text: 'O único que deságua no oceano de ambos os lados', correct: false }
      ],
      explanation: 'O Amazonas é o 1º em vazão (volume de água) — sozinho corresponde a ~20% de toda a água doce que vai para os oceanos. Em comprimento, é o 2º (atrás do Nilo por pequena margem — ainda há controvérsia).'
    },
    {
      prompt: 'A "Chapada Diamantina" (BA) é um exemplo de qual forma de relevo?',
      options: [
        { text: 'Planície fluvial',    correct: false },
        { text: 'Planalto sedimentar', correct: true  },
        { text: 'Depressão absoluta',  correct: false },
        { text: 'Delta fluvial',       correct: false }
      ],
      explanation: 'A Chapada Diamantina é um planalto (área elevada com topo plano) de origem sedimentar — formou-se pelo soerguimento de camadas de rochas sedimentares ao longo de milhões de anos.'
    },
    {
      prompt: 'Por que o Brasil tem potencial hidrelétrico enorme?',
      options: [
        { text: 'Por ter a maior altitude média do mundo',                                correct: false },
        { text: 'Pela combinação de grande volume de chuvas + rios com desníveis (quedas)', correct: true  },
        { text: 'Porque os rios brasileiros têm águas mais rápidas que em outros países', correct: false },
        { text: 'Por ter mais rios que qualquer outro país do mundo',                     correct: false }
      ],
      explanation: 'Potencial hidrelétrico = volume de água + desnível. O Brasil tem: chuvas abundantes (volume) + bordas do Planalto Atlântico onde os rios descem para o mar (desnível). Resultado: ~65% da eletricidade brasileira vem de hidrelétricas.'
    },
    {
      prompt: 'A Depressão do São Francisco é uma forma de relevo que ocorre:',
      options: [
        { text: 'Na bacia do Rio Amazonas',                                               correct: false },
        { text: 'Ao longo do vale do Rio São Francisco, abaixo do nível do planalto', correct: true  },
        { text: 'No litoral nordestino, abaixo do nível do mar',                          correct: false },
        { text: 'No interior do Mato Grosso do Sul',                                      correct: false }
      ],
      explanation: 'A Depressão do São Francisco é uma área rebaixada (below the plateau) que acompanha o vale do Rio São Francisco — criada pela erosão fluvial ao longo de milhões de anos.'
    },
    {
      prompt: 'Qual é a principal ameaça ambiental ao Pantanal?',
      options: [
        { text: 'Terremotos frequentes que modificam o leito dos rios',                   correct: false },
        { text: 'Desmatamento da bacia de captação, agrotóxicos e queimadas',             correct: true  },
        { text: 'O excesso de chuvas que está transformando o Pantanal em lago',          correct: false },
        { text: 'A mineração de nióbio que contamina os rios pantaneiros',                correct: false }
      ],
      explanation: 'O Pantanal é ameaçado por: desmatamento das chapadas ao redor (que abastece seus rios), agrotóxicos do agronegócio da soja e gado, e queimadas intensas — que nos últimos anos destruíram milhões de hectares.'
    },
    {
      prompt: 'O projeto "Transposição do Rio São Francisco" tem como objetivo:',
      options: [
        { text: 'Mudar o curso do Rio São Francisco para abastecer Brasília',             correct: false },
        { text: 'Levar água do São Francisco para rios intermitentes do semiárido nordestino', correct: true  },
        { text: 'Criar uma hidrelétrica no baixo São Francisco para gerar energia',       correct: false },
        { text: 'Conectar o São Francisco ao Rio Amazonas por um canal',                  correct: false }
      ],
      explanation: 'A Transposição do São Francisco (PISF) leva água do Rio São Francisco para rios intermitentes (que secam) do semiárido do CE, RN, PB e PE — garantindo acesso à água em regiões assoladas pela seca.'
    }
  ],

  adaptiveReview: [
    {
      prompt: 'DIFÍCIL: Por que o Brasil, com 12% da água doce do planeta, ainda tem regiões com seca severa?',
      options: [
        { text: 'Porque o governo não investe em infraestrutura hídrica',                 correct: false },
        { text: 'Porque a água está mal distribuída — concentrada na Amazônia, longe das regiões áridas', correct: true  },
        { text: 'Porque os rios brasileiros poluem a água antes de chegar ao semiárido',  correct: false },
        { text: 'Porque o Brasil exporta muita água para países vizinhos',                correct: false }
      ],
      explanation: 'O paradoxo hídrico brasileiro: ~70% da água doce está na Amazônia, onde vive apenas ~5% da população. O Nordeste semiárido tem 28% da população mas apenas ~3% da água. Distribuição desigual de um recurso abundante — problema de infraestrutura e território, não de escassez absoluta.'
    }
  ],

  rewards: { xp: 120, gems: 12, badge: '⛰️ Geógrafo do Relevo' },
  completionMessage: '⛰️ Você domina o relevo e os rios do Brasil!',
  nextStage: 'geo_s03'
};

window.GEO_S02 = GEO_S02;
