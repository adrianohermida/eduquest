/**
 * STAGE 08 — Leptospirose e Cólera
 * Doenças da água e do saneamento precário
 */

const STAGE_08 = {
  id: 'stage_08',
  title: 'Leptospirose e Cólera',
  icon: '💧',
  difficulty: 'medium',
  estimatedTime: 13,

  learningObjectives: [
    'Compreender como a leptospirose é transmitida pela urina de ratos',
    'Entender o papel da enchente na transmissão da leptospirose',
    'Conhecer o agente e a transmissão da cólera',
    'Identificar medidas de prevenção baseadas em saneamento',
    'Diferenciar o mecanismo de dano da leptospirose e da cólera'
  ],

  summary: {
    readTime: 4,
    content: [
      {
        icon: '🐀',
        title: 'Leptospirose: A Doença das Enchentes',
        text: 'Agente: bactéria Leptospira interrogans\n\nTransmissão:\n• Contato com água ou lama contaminada pela URINA DE RATOS\n• Comum em enchentes — água mistura urina de esgoto + urina de rato\n• Bactéria entra pelo nariz, olhos, boca ou feridas na pele\n\n⚠️ Sintomas: febre, dor muscular (especialmente panturrilha), dor de cabeça.\nFormas graves: Síndrome de Weil — icterícia + insuficiência renal + hemorragia'
      },
      {
        icon: '🌊',
        title: 'Por Que Enchentes Aumentam a Leptospirose?',
        text: 'Ratos vivem em esgotos e próximo a lixo. Quando chove muito:\n\n1. Água do esgoto invade ruas\n2. Ratos sobem das galerias\n3. Urina dos ratos se mistura à água da enchente\n4. Pessoas caminham descalças nessa água\n\n✅ Prevenção:\n• Nunca entrar em água de enchente\n• Usar botas e luvas\n• Lavar feridas com água e sabão\n• Controlar população de ratos (deratização)'
      },
      {
        icon: '🦠',
        title: 'Cólera: Diarreia que Mata',
        text: 'Agente: bactéria Vibrio cholerae\n\nTransmissão: água ou alimentos contaminados por fezes humanas (fecal-oral)\n\nSintoma característico:\n• Diarreia aquosa intensa — "água de arroz"\n• Vômitos\n• Desidratação grave e rápida → pode matar em horas\n\n⚠️ A bactéria produz uma toxina que faz as células intestinais liberar água — daí a diarreia massiva.'
      },
      {
        icon: '🚰',
        title: 'Por Que Saneamento Previne a Cólera?',
        text: 'A cólera se espalha pelo ciclo fecal-oral:\nFezes contaminadas → água/alimento → outra pessoa\n\nSaneamento quebra esse ciclo:\n✅ Tratamento de esgoto: fezes não chegam à água\n✅ Água tratada com cloro: mata o Vibrio cholerae\n✅ Higiene das mãos: impede contaminação de alimentos\n\nHistória: John Snow (1854) mapeou casos de cólera em Londres e descobriu que a bomba d\'água contaminada era a fonte — nasceu a epidemiologia moderna!'
      },
      {
        icon: '💊',
        title: 'Tratamento: A Reidratação Salva Vidas',
        text: 'Na cólera e leptospirose, o tratamento precoce é fundamental:\n\nCólera:\n• Soro de reidratação oral (SRO): água + sal + açúcar\n• Antibióticos para reduzir duração da doença\n• Hospitalização em casos graves (reidratação venosa)\n\nLeptospirose:\n• Antibióticos (penicilina, doxiciclina)\n• Suporte renal em casos de Síndrome de Weil\n\n💡 Macete: Na cólera, o maior perigo é a DESIDRATAÇÃO — a toxina não mata diretamente, a perda de água sim!'
      }
    ],

    flashcards: [
      { q: 'Qual a bactéria da leptospirose?',          a: 'Leptospira interrogans.' },
      { q: 'Como a leptospirose é transmitida?',         a: 'Contato com água/lama contaminada pela urina de ratos.' },
      { q: 'Qual a bactéria da cólera?',                 a: 'Vibrio cholerae.' },
      { q: 'Como a cólera é transmitida?',               a: 'Via fecal-oral: água ou alimentos contaminados por fezes.' },
      { q: 'Sintoma característico da cólera:',         a: 'Diarreia aquosa intensa ("água de arroz") com desidratação rápida.' },
      { q: 'O que é a Síndrome de Weil?',                a: 'Forma grave da leptospirose: icterícia + insuficiência renal + hemorragia.' },
      { q: 'Por que enchentes aumentam leptospirose?',  a: 'Urina de ratos do esgoto se mistura à água, contaminando o ambiente.' },
      { q: 'Como John Snow contribuiu para a epidemiologia?', a: 'Mapeou casos de cólera em 1854 e identificou a bomba d\'água contaminada como fonte.' }
    ],

    mnemonics: [
      { trigger: 'Leptospirose',      memory: '"Leptos = fino (bactéria em forma de espiral fina). Lepto + enchente + rato + urina = Leptospirose"' },
      { trigger: 'Cólera transmissão', memory: '"Fezes → Água → Boca → Diarreia. O ciclo FECAL-ORAL que o saneamento quebra!"' },
      { trigger: 'Síndrome de Weil',  memory: '"Weil = Muito Ill (doente). Rim falha + Fígado amarelo + Sangramento"' },
      { trigger: 'SRO cólera',        memory: '"Água + Sal + Açúcar = SRO. A mistura mais simples que salva vidas!"' }
    ],

    miniReview: [
      { q: 'Como a leptospirose é transmitida?',   a: 'Contato com água/lama contaminada pela urina de ratos.' },
      { q: 'O que caracteriza a diarreia da cólera?', a: 'Aquosa e intensa ("água de arroz") — desidratação rápida.' },
      { q: 'O saneamento previne a cólera como?', a: 'Tratamento de esgoto e água interrompe o ciclo fecal-oral.' },
      { q: 'Qual o maior perigo da cólera?',       a: 'A desidratação grave e rápida — pode matar em horas.' }
    ]
  },

  warmup: [
    {
      prompt: 'A leptospirose é transmitida principalmente por:',
      options: [
        { text: 'Contato com água contaminada pela urina de ratos', correct: true  },
        { text: 'Picada de mosquito infectado',                      correct: false },
        { text: 'Inalação de ar contaminado',                        correct: false },
        { text: 'Consumo de carne mal cozida',                       correct: false }
      ],
      explanation: 'A Leptospira penetra através da pele (feridas, mucosas) ao contato com água/lama contaminada por urina de ratos.'
    },
    {
      prompt: 'A cólera é transmitida por via:',
      options: [
        { text: 'Fecal-oral (água/alimento contaminado por fezes)',  correct: true  },
        { text: 'Respiratória (aerossóis e gotículas)',               correct: false },
        { text: 'Vetorial (mosquito ou carrapato)',                   correct: false },
        { text: 'Sexual (contato direto)',                            correct: false }
      ],
      explanation: 'O Vibrio cholerae é ingerido via água ou alimentos contaminados por fezes humanas.'
    },
    {
      prompt: 'O principal perigo imediato da cólera é:',
      options: [
        { text: 'Desidratação grave e rápida',         correct: true  },
        { text: 'Febre altíssima (acima de 42°C)',      correct: false },
        { text: 'Insuficiência renal progressiva',     correct: false },
        { text: 'Hemorragia interna',                  correct: false }
      ],
      explanation: 'A toxina do Vibrio causa diarreia aquosa massiva — perda de litros de líquido em horas.'
    }
  ],

  guidedPractice: [
    {
      prompt: '🔍 DICA: Lembre que na enchente, a água do esgoto sobe e os ratos também.\n\nQuando há enchente, o risco de leptospirose aumenta porque:',
      options: [
        { text: 'A urina de ratos do esgoto contamina toda a água da enchente', correct: true  },
        { text: 'Os mosquitos se reproduzem mais na água parada',               correct: false },
        { text: 'A água fria facilita a sobrevivência da bactéria',            correct: false },
        { text: 'As pessoas ficam estressadas e imunodeprimidas',              correct: false }
      ],
      explanation: 'Enchentes misturam água de esgoto (com urina de ratos) com ruas — criando ambiente altamente contaminado.'
    },
    {
      prompt: '🔍 DICA: John Snow não era personagem de série — era epidemiologista! Em 1854, mapeou casos de cólera.\n\nO que John Snow descobriu em 1854?',
      options: [
        { text: 'Uma bomba d\'água contaminada era a fonte do surto de cólera em Londres', correct: true  },
        { text: 'O Vibrio cholerae ao microscópio',                                         correct: false },
        { text: 'Que a cólera era transmitida por mosquitos',                               correct: false },
        { text: 'A vacina contra a cólera',                                                 correct: false }
      ],
      explanation: 'Snow mapeou casos em mapa e identificou a bomba d\'água da Broad Street — fundou a epidemiologia moderna.'
    }
  ],

  questions: [
    {
      prompt: 'A bactéria causadora da leptospirose é:',
      options: [
        { text: 'Leptospira interrogans', correct: true  },
        { text: 'Vibrio cholerae',        correct: false },
        { text: 'Clostridium tetani',     correct: false },
        { text: 'Mycobacterium leprae',   correct: false }
      ],
      explanation: 'Leptospira interrogans é a bactéria responsável pela leptospirose — em forma de espiral fina.'
    },
    {
      prompt: 'A leptospirose penetra no organismo principalmente por:',
      options: [
        { text: 'Pele com feridas ou mucosas (nariz, olhos) em contato com água contaminada', correct: true  },
        { text: 'Picada do mosquito Culex',                                                    correct: false },
        { text: 'Ingestão de carne de rato',                                                  correct: false },
        { text: 'Inalação de aerossóis contaminados',                                        correct: false }
      ],
      explanation: 'A Leptospira entra por mucosas ou feridas — por isso andar descalço em enchentes é tão perigoso.'
    },
    {
      prompt: 'A Síndrome de Weil é a forma GRAVE da leptospirose. Ela se caracteriza por:',
      options: [
        { text: 'Icterícia + insuficiência renal + hemorragia',     correct: true  },
        { text: 'Diarreia aquosa + desidratação grave',              correct: false },
        { text: 'Paralisia flácida + comprometimento neurológico',  correct: false },
        { text: 'Febre hemorrágica + manchas na pele',              correct: false }
      ],
      explanation: 'A Síndrome de Weil afeta fígado (icterícia), rins e causa tendência hemorrágica — mortalidade de 5-40%.'
    },
    {
      prompt: 'A diarreia característica da cólera é descrita como:',
      options: [
        { text: '"Água de arroz" — aquosa, volumosa e sem sangue', correct: true  },
        { text: 'Sanguinolenta com muco',                          correct: false },
        { text: 'Pastosa com odor fétido intenso',                 correct: false },
        { text: 'Espumosa com gordura visível',                    correct: false }
      ],
      explanation: 'A toxina colérica estimula secreção maciça de água e eletrólitos — diarreia aguada, sem sangue.'
    },
    {
      prompt: 'O saneamento básico previne a cólera porque:',
      options: [
        { text: 'Interrompe o ciclo fecal-oral ao tratar água e esgoto',       correct: true  },
        { text: 'Elimina os mosquitos que transmitem a bactéria',               correct: false },
        { text: 'Fornece antibióticos à população via água tratada',            correct: false },
        { text: 'Aumenta a imunidade coletiva por exposição controlada',       correct: false }
      ],
      explanation: 'Sem esgoto tratado, fezes contaminam água. Sem água tratada, Vibrio chega às pessoas — ciclo fecal-oral.'
    },
    {
      prompt: 'John Snow ficou famoso na história da medicina por:',
      options: [
        { text: 'Mapear casos de cólera e identificar a bomba d\'água contaminada como fonte em 1854', correct: true  },
        { text: 'Descobrir o Vibrio cholerae ao microscópio',                                          correct: false },
        { text: 'Criar a primeira vacina contra a cólera',                                             correct: false },
        { text: 'Demonstrar que a cólera era transmitida por mosquitos',                               correct: false }
      ],
      explanation: 'John Snow usou mapeamento geográfico para identificar a bomba d\'água da Broad Street — fundou a epidemiologia moderna.'
    },
    {
      prompt: 'O tratamento da cólera prioriza:',
      options: [
        { text: 'Reidratação oral ou venosa (SRO) + antibióticos',  correct: true  },
        { text: 'Antibióticos de amplo espectro por via intramuscular', correct: false },
        { text: 'Antidiarreicos para bloquear a diarreia imediatamente', correct: false },
        { text: 'Internação em UTI com suporte renal imediato',         correct: false }
      ],
      explanation: 'A reidratação é a prioridade absoluta — o SRO (água + sal + açúcar) salva vidas. Antibióticos reduzem a duração.'
    },
    {
      prompt: 'Para prevenir leptospirose durante enchentes, a medida mais importante é:',
      options: [
        { text: 'Não caminhar na água da enchente; se necessário, usar botas e luvas', correct: true  },
        { text: 'Tomar antibióticos preventivos diariamente',                           correct: false },
        { text: 'Vacinar toda a população antes do período chuvoso',                   correct: false },
        { text: 'Usar repelente de mosquitos',                                          correct: false }
      ],
      explanation: 'A maior proteção é evitar o contato com a água da enchente — principal via de transmissão da Leptospira.'
    },
    {
      prompt: 'O principal reservatório urbano da leptospirose é o:',
      options: [
        { text: 'Rato (principalmente o rato de esgoto, Rattus norvegicus)', correct: true  },
        { text: 'Cão doméstico',                                              correct: false },
        { text: 'Mosquito Aedes aegypti',                                     correct: false },
        { text: 'Água da chuva limpa',                                        correct: false }
      ],
      explanation: 'O rato é portador assintomático da Leptospira — libera bactérias na urina sem ficar doente.'
    },
    {
      prompt: 'A cólera foi praticamente eliminada de países com bom saneamento porque:',
      options: [
        { text: 'Água tratada e esgoto adequado impedem a transmissão fecal-oral', correct: true  },
        { text: 'Esses países vacinaram 100% da população',                         correct: false },
        { text: 'O Vibrio cholerae não sobrevive em climas frios',                  correct: false },
        { text: 'A antibioticoterapia preventiva foi adotada',                      correct: false }
      ],
      explanation: 'Países com saneamento universal raramente têm epidemias de cólera — a infraestrutura quebra o ciclo fecal-oral.'
    }
  ],

  adaptiveReview: [
    {
      prompt: 'DIFÍCIL: Por que os ratos são portadores da leptospirose sem ficarem doentes?',
      options: [
        { text: 'Os ratos desenvolveram imunidade ao longo de milhares de anos de coevolução com a Leptospira', correct: true  },
        { text: 'Os ratos excretam a bactéria antes que ela cause sintomas',                                    correct: false },
        { text: 'A Leptospira nos ratos é uma cepa diferente, menos virulenta',                                correct: false },
        { text: 'Ratos também ficam doentes — apenas os jovens são portadores',                                correct: false }
      ],
      explanation: 'Coevolução: ratos e Leptospira vivem em equilíbrio. Para o humano, a bactéria é oportunista e patogênica.'
    },
    {
      prompt: 'DIFÍCIL: A toxina colérica (CT) age nas células intestinais. Qual o mecanismo molecular?',
      options: [
        { text: 'Ativa adenilato ciclase permanentemente → cAMP aumentado → secreção excessiva de Cl⁻ e H₂O', correct: true  },
        { text: 'Destrói as vilosidades intestinais diretamente',                                               correct: false },
        { text: 'Bloqueia a absorção de glicose no intestino delgado',                                         correct: false },
        { text: 'Aumenta a motilidade intestinal por ativação do sistema nervoso entérico',                    correct: false }
      ],
      explanation: 'A CT ativa irreversivelmente a adenilato ciclase — cAMP sobe → secreção maciça de cloreto e água para o lúmen intestinal.'
    }
  ],

  rewards: {
    xp:    185,
    gems:  19,
    badge: '💧 Guardião da Água Limpa'
  },

  completionMessage: '💧 Muito bem! Você entende como a água contamina e como o saneamento protege. Água limpa = vida!',
  nextStage: 'stage_09'
};

window.STAGE_08 = STAGE_08;
