/**
 * GEO STAGE 01 — Localização do Brasil
 */

const GEO_S01 = {
  id: 'geo_s01',
  title: 'Localização do Brasil',
  icon: '🗺️',
  difficulty: 'easy',
  estimatedTime: 10,

  learningObjectives: [
    'Localizar o Brasil no mapa-múndi usando coordenadas geográficas',
    'Identificar os países e oceanos que fazem fronteira com o Brasil',
    'Reconhecer os hemisférios em que o Brasil está situado',
    'Entender a posição estratégica do Brasil na América do Sul',
    'Conhecer os dados gerais sobre área, costa e posição'
  ],

  summary: {
    readTime: 3,
    content: [
      {
        icon: '🌎',
        title: 'O Brasil no Mundo',
        text: 'O Brasil é o maior país da América do Sul e o 5º maior do mundo:\n\n• Área: 8,5 milhões de km² (maior que toda a Europa)\n• Extensão litorânea: 7.400 km de costa atlântica\n• Capital: Brasília (fundada em 1960)\n• Fusos horários: 4 (de UTC-2 a UTC-5)\n\nPosição geográfica:\n• Localizado na América do Sul, América Latina\n• Faz fronteira com 10 dos 12 países sul-americanos\n• Fronteiras terrestres: ~16.000 km\n• EXCEÇÕES: Equador e Chile não fazem fronteira com o Brasil'
      },
      {
        icon: '📍',
        title: 'Hemisférios e Coordenadas',
        text: 'O Brasil está localizado em 4 hemisférios simultaneamente:\n• Hemisfério Sul (maior parte)\n• Hemisfério Norte (pequena parte — estados de RR, AP, AM, PA)\n• Hemisfério Ocidental (todo o país — a leste do meridiano de Greenwich)\n• Hemisfério Oriental (uma pequena porção a leste do ponto mais a leste)\n\nLinhas imaginárias que cortam o Brasil:\n• Linha do Equador: corta o Amapá e o Amazonas\n• Trópico de Capricórnio: corta SP, PR, SC, MS, MT\n\n🔑 O Brasil é o único país do mundo cortado tanto pela Linha do Equador quanto pelo Trópico de Capricórnio.'
      },
      {
        icon: '🗺️',
        title: 'Fronteiras e Vizinhos',
        text: 'Fronteiras terrestres do Brasil:\n\n• Norte: Venezuela, Guiana, Suriname, Guiana Francesa, Colômbia\n• Oeste: Peru, Bolívia\n• Sudoeste: Paraguai, Argentina\n• Sul: Uruguai\n\n⚠️ NÃO fazem fronteira com o Brasil:\n• Equador — separado pela Colômbia e Peru\n• Chile — separado pela Argentina e Bolívia\n\n🔑 Com 10 países vizinhos, o Brasil tem a maior rede de fronteiras da América do Sul — vantagem estratégica para o comércio continental.'
      }
    ],

    flashcards: [
      { q: 'Qual a área do Brasil?',            a: '8,5 milhões de km² — 5º maior país do mundo.' },
      { q: 'Quais linhas imaginárias cortam o Brasil?', a: 'Linha do Equador e Trópico de Capricórnio.' },
      { q: 'Quantos países fazem fronteira com o Brasil?', a: '10 países (exceto Equador e Chile).' },
      { q: 'Em quais hemisférios está o Brasil?', a: 'Principalmente Sul e Ocidental; pequena parte no Norte.' },
      { q: 'Qual é a extensão da costa brasileira?', a: '7.400 km de costa atlântica.' }
    ],

    mnemonics: [
      { trigger: 'Países sem fronteira', memory: '"EQUADOR e CHILE ficam de fora. Equador está atrás da Colômbia; Chile atrás da Argentina."' },
      { trigger: 'Hemisférios do Brasil', memory: '"Brasil: Sul + Ocidental (maioria). Norte + Leste (pontinha). 4 hemisférios, 1 país."' }
    ],

    miniReview: [
      { q: 'Por que o Brasil está em 4 hemisférios?',            a: 'A Linha do Equador cruza o Norte do Brasil, dividindo Norte/Sul. Todo o Brasil fica a oeste de Greenwich (Ocidental).' },
      { q: 'Qual país da América do Sul não faz fronteira com o Brasil?', a: 'Equador e Chile — são os únicos dois que não fazem fronteira.' }
    ]
  },

  warmup: [
    {
      prompt: 'O Brasil é o _____ maior país do mundo em extensão territorial:',
      options: [
        { text: '3º',  correct: false },
        { text: '4º',  correct: false },
        { text: '5º',  correct: true  },
        { text: '7º',  correct: false }
      ],
      explanation: 'Com 8,5 milhões de km², o Brasil é o 5º maior país do mundo (atrás de Rússia, Canadá, EUA e China).'
    },
    {
      prompt: 'Quais países sul-americanos NÃO fazem fronteira com o Brasil?',
      options: [
        { text: 'Peru e Bolívia',         correct: false },
        { text: 'Equador e Chile',        correct: true  },
        { text: 'Venezuela e Suriname',   correct: false },
        { text: 'Argentina e Uruguai',    correct: false }
      ],
      explanation: 'Equador e Chile são os únicos 2 países da América do Sul sem fronteira com o Brasil. O Chile fica separado pela Argentina/Bolívia; o Equador pela Colômbia/Peru.'
    },
    {
      prompt: 'A Linha do Equador corta quais estados brasileiros?',
      options: [
        { text: 'Bahia e Minas Gerais',   correct: false },
        { text: 'Amapá e Amazonas',       correct: true  },
        { text: 'Pará e Maranhão',        correct: false },
        { text: 'Roraima e Tocantins',    correct: false }
      ],
      explanation: 'A Linha do Equador entra no Brasil pelo Amapá e atravessa o estado do Amazonas — a cidade de Macapá está exatamente sobre ela.'
    }
  ],

  guidedPractice: [
    {
      prompt: '🔍 DICA: O Trópico de Capricórnio também corta o Brasil.\n\nQuais estados brasileiros o Trópico de Capricórnio atravessa?',
      options: [
        { text: 'Bahia, Sergipe e Alagoas',                             correct: false },
        { text: 'São Paulo, Paraná, Santa Catarina, Mato Grosso do Sul e Mato Grosso', correct: true },
        { text: 'Rio de Janeiro, Espírito Santo e Minas Gerais',         correct: false },
        { text: 'Pará, Tocantins e Goiás',                              correct: false }
      ],
      explanation: 'O Trópico de Capricórnio (23°26\'S) corta o Brasil pela faixa central: SP, PR, SC, MS e MT — passando por cidades como São Paulo e Curitiba.'
    },
    {
      prompt: '🔍 DICA: O Brasil faz fronteira com 10 países.\n\nQuais são os 5 países que fazem fronteira com o Brasil ao norte?',
      options: [
        { text: 'Peru, Bolívia, Paraguai, Argentina, Uruguai',                      correct: false },
        { text: 'Venezuela, Guiana, Suriname, Guiana Francesa, Colômbia',           correct: true  },
        { text: 'Venezuela, Peru, Colômbia, Equador, Chile',                        correct: false },
        { text: 'Guiana, Suriname, Bolívia, Venezuela, Uruguai',                    correct: false }
      ],
      explanation: 'Ao norte do Brasil: Venezuela, Guiana, Suriname, Guiana Francesa (território francês) e Colômbia. São 5 países/territórios na fronteira norte.'
    }
  ],

  questions: [
    {
      prompt: 'Em qual continente o Brasil está localizado?',
      options: [
        { text: 'América Central',  correct: false },
        { text: 'América do Sul',   correct: true  },
        { text: 'América do Norte', correct: false },
        { text: 'América Latina',   correct: false }
      ],
      explanation: 'O Brasil está na América do Sul — a maior subdivisão da América Latina. Ocupa cerca de 47% da área total da América do Sul.'
    },
    {
      prompt: 'Quantos fusos horários o Brasil possui?',
      options: [
        { text: '2',  correct: false },
        { text: '3',  correct: false },
        { text: '4',  correct: true  },
        { text: '5',  correct: false }
      ],
      explanation: 'O Brasil tem 4 fusos horários: UTC-2 (ilhas oceânicas), UTC-3 (maior parte do país), UTC-4 (alguns estados e MT) e UTC-5 (Acre e extremo oeste do Amazonas).'
    },
    {
      prompt: 'O Brasil é cortado por duas linhas imaginárias. Isso significa que:',
      options: [
        { text: 'O Brasil tem dois invernos por ano',                              correct: false },
        { text: 'Parte do Brasil está na Zona Tropical e parte na Zona Temperada', correct: true  },
        { text: 'O Brasil fica dividido entre dois hemisférios leste/oeste',       correct: false },
        { text: 'O Brasil tem dois climas opostos simultaneamente',                correct: false }
      ],
      explanation: 'Linha do Equador = Zona Equatorial (calor intenso e chuvas); Trópico de Capricórnio = divide Zona Tropical e Temperada. O Brasil abrange zonas climáticas muito diversas.'
    },
    {
      prompt: 'Qual oceano banha a costa brasileira?',
      options: [
        { text: 'Oceano Pacífico',    correct: false },
        { text: 'Oceano Atlântico',   correct: true  },
        { text: 'Oceano Índico',      correct: false },
        { text: 'Mar do Caribe',      correct: false }
      ],
      explanation: 'O Brasil tem apenas costa atlântica — 7.400 km de litoral no Oceano Atlântico. O Oceano Pacífico banha a costa oeste da América do Sul (Peru, Chile, Equador).'
    },
    {
      prompt: 'Qual é a capital do Brasil?',
      options: [
        { text: 'São Paulo',  correct: false },
        { text: 'Rio de Janeiro', correct: false },
        { text: 'Brasília',   correct: true  },
        { text: 'Salvador',   correct: false }
      ],
      explanation: 'Brasília é a capital federal desde 1960, quando substituiu o Rio de Janeiro. Foi construída do zero no planalto central — projeto de Lúcio Costa e Oscar Niemeyer.'
    },
    {
      prompt: 'A posição do Brasil "entre os trópicos" tem como principal consequência:',
      options: [
        { text: 'O Brasil recebe pouca chuva por estar próximo ao equador',          correct: false },
        { text: 'Clima predominantemente quente e com grandes reservas de biodiversidade', correct: true  },
        { text: 'Invernos rigorosos com neve em grande parte do território',         correct: false },
        { text: 'Ausência de estações do ano em todo o território',                  correct: false }
      ],
      explanation: 'A posição tropical garante ao Brasil alta incidência solar e calor — condições ideais para a megadiversidade biológica (Amazônia, Cerrado, Mata Atlântica, Pantanal).'
    },
    {
      prompt: 'O Brasil faz fronteira com a Guiana Francesa, que é:',
      options: [
        { text: 'Um país independente membro da ONU',                               correct: false },
        { text: 'Um território ultramarino da França — parte da União Europeia',    correct: true  },
        { text: 'Uma colônia inglesa com autonomia regional',                       correct: false },
        { text: 'Um estado associado ao Brasil após a independência',               correct: false }
      ],
      explanation: 'A Guiana Francesa (Guyane) é um departamento/região ultramarino da França — de jure território europeu no continente sul-americano. Usa o euro e tem representação no Parlamento francês.'
    },
    {
      prompt: 'O ponto mais ao norte do Brasil fica no estado de:',
      options: [
        { text: 'Amapá',    correct: false },
        { text: 'Roraima',  correct: true  },
        { text: 'Amazonas', correct: false },
        { text: 'Pará',     correct: false }
      ],
      explanation: 'O Monte Caburaí, em Roraima, é o ponto mais setentrional (norte) do Brasil — 5°16\'N. Fica acima da linha do Equador, no hemisfério norte.'
    },
    {
      prompt: 'Por que a posição geográfica do Brasil é considerada vantajosa para o comércio?',
      options: [
        { text: 'Por ter acesso ao Oceano Pacífico, a mais movimentada rota comercial',              correct: false },
        { text: 'Por ter fronteiras com 10 países e litoral atlântico extenso — acesso terrestre e marítimo', correct: true  },
        { text: 'Por ser o único país localizado entre os dois grandes oceanos',                      correct: false },
        { text: 'Por estar no centro geográfico do planeta',                                          correct: false }
      ],
      explanation: 'O Brasil combina: 10 fronteiras terrestres (acesso ao mercado sul-americano) + 7.400 km de litoral atlântico (acesso aos mercados da Europa, África e EUA). Posição privilegiada para o comércio global.'
    },
    {
      prompt: 'Qual é a extensão aproximada da fronteira terrestre brasileira?',
      options: [
        { text: '5.000 km',   correct: false },
        { text: '9.000 km',   correct: false },
        { text: '16.000 km',  correct: true  },
        { text: '22.000 km',  correct: false }
      ],
      explanation: 'O Brasil tem cerca de 16.000 km de fronteiras terrestres com 10 países — uma das maiores redes de fronteiras do mundo, maior que toda a extensão da Europa de leste a oeste.'
    }
  ],

  adaptiveReview: [
    {
      prompt: 'DIFÍCIL: Por que Brasília foi construída no interior do Brasil (Planalto Central) e não no litoral?',
      options: [
        { text: 'Porque o litoral estava muito poluído nos anos 1950',                              correct: false },
        { text: 'Para desenvolver o interior, integrar o território nacional e reduzir a dependência do litoral', correct: true  },
        { text: 'Porque o governo militar exigia uma capital longe do mar por segurança',           correct: false },
        { text: 'Porque Juscelino Kubitschek era de Minas Gerais e queria a capital próxima',       correct: false }
      ],
      explanation: 'A mudança da capital para o interior (1960, governo JK) tinha objetivos claros: 1) integrar o Centro-Oeste ao restante do país; 2) atrair desenvolvimento para regiões "vazias"; 3) reduzir a vulnerabilidade de uma capital costeira; 4) criar um símbolo modernizador para o Brasil.'
    }
  ],

  rewards: { xp: 110, gems: 11, badge: '🗺️ Explorador do Brasil' },
  completionMessage: '🗺️ Você localizou o Brasil no mapa com precisão!',
  nextStage: 'geo_s02'
};

window.GEO_S01 = GEO_S01;
