/**
 * CAP8 STAGE 02 — Sistema Circulatório
 * Coração, vasos e circulação sanguínea
 */

const CAP8_S02 = {
  id: 'cap8_s02',
  title: 'Sistema Circulatório',
  icon: '🫀',
  difficulty: 'easy',
  estimatedTime: 13,

  learningObjectives: [
    'Identificar as câmaras do coração e sua função',
    'Distinguir circulação pulmonar de sistêmica',
    'Diferenciar artérias, veias e capilares',
    'Compreender os componentes do sangue',
    'Entender os grupos sanguíneos ABO e Rh'
  ],

  summary: {
    readTime: 5,
    content: [
      {
        icon: '🫀',
        title: 'O Coração — 4 Câmaras',
        text: 'O coração tem 4 câmaras:\n• Átrio Direito (AD) → recebe sangue venoso dos pulmões\n• Ventrículo Direito (VD) → bombeia para os pulmões\n• Átrio Esquerdo (AE) → recebe sangue oxigenado dos pulmões\n• Ventrículo Esquerdo (VE) → bombeia para o corpo\n\n💡 Macete: "Átrios Aceitam, Ventrículos Vetam (expulsam)"'
      },
      {
        icon: '🔄',
        title: 'Circulação Pulmonar vs Sistêmica',
        text: 'PULMONAR (pequena circulação):\nCoração → Pulmões → Coração\nSangue ganha O₂ e perde CO₂\n\nSISTÊMICA (grande circulação):\nCoração → Corpo (tecidos) → Coração\nSangue entrega O₂ e nutrientes, recolhe CO₂\n\n⚡ O VE é maior e mais forte pois bombeia para o corpo todo!'
      },
      {
        icon: '🩸',
        title: 'Vasos Sanguíneos',
        text: 'ARTÉRIAS: levam sangue do coração; parede espessa; pulsam\nVEIAS: trazem sangue ao coração; têm válvulas; não pulsam\nCAPILARES: microvasos onde ocorre a troca entre sangue e células\n\n⚠️ Exceção: Artéria pulmonar leva sangue venoso (escuro) e Veia pulmonar traz sangue arterial (oxigenado)!'
      },
      {
        icon: '🔬',
        title: 'Componentes do Sangue',
        text: 'O sangue é composto por:\n• Plasma (55%): parte líquida, transporta nutrientes, hormônios\n• Glóbulos Vermelhos/Hemácias (44%): transportam O₂ via hemoglobina\n• Glóbulos Brancos/Leucócitos (<1%): defesa imunológica\n• Plaquetas (<1%): coagulação sanguínea\n\nHemoglobina com O₂ = vermelho vivo | sem O₂ = vermelho escuro'
      },
      {
        icon: '🅰️',
        title: 'Grupos Sanguíneos ABO e Rh',
        text: 'Sistema ABO:\n• Tipo A: antígeno A nas hemácias\n• Tipo B: antígeno B\n• Tipo AB: A e B (receptor universal)\n• Tipo O: nenhum antígeno (doador universal)\n\nSistema Rh:\n• Rh+ (positivo): tem fator Rh\n• Rh- (negativo): não tem fator Rh\n\nO- é doador universal; AB+ é receptor universal'
      }
    ],

    flashcards: [
      { q: 'Quantas câmaras tem o coração humano?',        a: '4: átrio direito, ventrículo direito, átrio esquerdo, ventrículo esquerdo.' },
      { q: 'Qual câmara bombeia sangue para o corpo?',     a: 'Ventrículo esquerdo (VE) — a mais musculosa.' },
      { q: 'Qual a diferença entre artéria e veia?',       a: 'Artéria leva do coração; veia traz ao coração. Artéria tem parede mais espessa.' },
      { q: 'O que transporta a hemoglobina?',              a: 'Oxigênio (O₂) nas hemácias (glóbulos vermelhos).' },
      { q: 'Quem é o doador universal de sangue?',         a: 'Tipo O negativo (O-).' },
      { q: 'O que são plaquetas?',                         a: 'Fragmentos celulares que atuam na coagulação sanguínea.' }
    ],

    mnemonics: [
      { trigger: 'Câmaras do coração', memory: '"AD VD AE VE — Antes Depois, Após Vem Esquerdo": Átrio Direito → Ventrículo Direito → Átrio Esquerdo → Ventrículo Esquerdo' },
      { trigger: 'Artéria vs Veia',    memory: '"Artéria = A de Afasta (do coração); Veia = V de Volta (ao coração)"' },
      { trigger: 'Doador universal',   memory: '"O negativo = O menos nada = doa para todos"' }
    ],

    miniReview: [
      { q: 'Por que o ventrículo esquerdo é mais espesso que o direito?',  a: 'Precisa bombear sangue para todo o corpo (maior distância e resistência).' },
      { q: 'Em que estrutura ocorre a troca de gases e nutrientes?',        a: 'Nos capilares sanguíneos.' },
      { q: 'Qual componente do sangue combate infecções?',                  a: 'Glóbulos brancos (leucócitos).' }
    ]
  },

  warmup: [
    {
      prompt: 'O coração humano tem quantas câmaras?',
      options: [
        { text: '2', correct: false },
        { text: '3', correct: false },
        { text: '4', correct: true  },
        { text: '6', correct: false }
      ],
      explanation: '4 câmaras: 2 átrios (recebem sangue) e 2 ventrículos (bombeiam sangue).'
    },
    {
      prompt: 'A circulação que leva sangue do coração aos pulmões é chamada:',
      options: [
        { text: 'Circulação sistêmica',  correct: false },
        { text: 'Circulação pulmonar',   correct: true  },
        { text: 'Circulação portal',     correct: false },
        { text: 'Circulação linfática',  correct: false }
      ],
      explanation: 'Circulação pulmonar (pequena): coração → pulmões → coração, para oxigenar o sangue.'
    },
    {
      prompt: 'Qual componente do sangue é responsável pelo transporte de oxigênio?',
      options: [
        { text: 'Plasma',          correct: false },
        { text: 'Leucócitos',      correct: false },
        { text: 'Hemácias',        correct: true  },
        { text: 'Plaquetas',       correct: false }
      ],
      explanation: 'Hemácias (glóbulos vermelhos) contêm hemoglobina, que se liga ao O₂ nos pulmões e o libera nos tecidos.'
    }
  ],

  guidedPractice: [
    {
      prompt: '🔍 DICA: Artérias têm paredes mais espessas pois suportam maior pressão.\n\nQual vaso LEVA sangue do coração para o corpo?',
      options: [
        { text: 'Veias',       correct: false },
        { text: 'Capilares',   correct: false },
        { text: 'Artérias',    correct: true  },
        { text: 'Linfáticos',  correct: false }
      ],
      explanation: 'Artérias: do coração para os órgãos. Veias: dos órgãos de volta ao coração. Capilares: troca nos tecidos.'
    },
    {
      prompt: '🔍 DICA: Os grupos sanguíneos dependem dos antígenos nas hemácias.\n\nO grupo sanguíneo O negativo pode doar para:',
      options: [
        { text: 'Apenas tipo O',         correct: false },
        { text: 'Apenas tipo O e A',      correct: false },
        { text: 'Qualquer tipo sanguíneo',correct: true  },
        { text: 'Apenas Rh positivo',     correct: false }
      ],
      explanation: 'O- é o doador universal: não tem antígenos A, B nem fator Rh — pode ser recebido por qualquer pessoa.'
    }
  ],

  questions: [
    {
      prompt: 'O átrio direito recebe sangue de:',
      options: [
        { text: 'Artéria pulmonar',       correct: false },
        { text: 'Veias cavas (superior e inferior)', correct: true },
        { text: 'Veias pulmonares',        correct: false },
        { text: 'Aorta',                   correct: false }
      ],
      explanation: 'As veias cavas trazem sangue venoso (rico em CO₂) do corpo para o átrio direito.'
    },
    {
      prompt: 'A artéria pulmonar é uma exceção porque:',
      options: [
        { text: 'Transporta sangue arterial (oxigenado)',             correct: false },
        { text: 'Transporta sangue venoso (pouco O₂) saindo do coração', correct: true },
        { text: 'É uma veia disfarçada',                              correct: false },
        { text: 'Vai do pulmão ao coração',                           correct: false }
      ],
      explanation: 'Artéria = leva do coração; pulmonar = leva ao pulmão. Mas o sangue que leva ainda não foi oxigenado!'
    },
    {
      prompt: 'A pressão arterial sistólica (máxima) corresponde ao momento em que:',
      options: [
        { text: 'O coração relaxa (diástole)',      correct: false },
        { text: 'O coração se contrai (sístole)',   correct: true },
        { text: 'O sangue chega ao pulmão',         correct: false },
        { text: 'As válvulas se fecham',            correct: false }
      ],
      explanation: 'Sístole = contração ventricular → ejeção de sangue → pressão máxima nas artérias.'
    },
    {
      prompt: 'Uma pessoa com tipo sanguíneo AB pode receber:',
      options: [
        { text: 'Apenas tipo AB',      correct: false },
        { text: 'Tipos A, B ou AB',    correct: false },
        { text: 'Qualquer tipo ABO',   correct: true  },
        { text: 'Apenas tipo O',       correct: false }
      ],
      explanation: 'AB não tem anticorpos anti-A nem anti-B → aceita sangue de qualquer tipo ABO (receptor universal do ABO).'
    },
    {
      prompt: 'Os glóbulos brancos (leucócitos) são responsáveis por:',
      options: [
        { text: 'Transportar oxigênio',              correct: false },
        { text: 'Coagulação do sangue',              correct: false },
        { text: 'Defesa imunológica do organismo',   correct: true  },
        { text: 'Manter a viscosidade do plasma',    correct: false }
      ],
      explanation: 'Leucócitos reconhecem e destroem agentes patogênicos (vírus, bactérias, células tumorais).'
    },
    {
      prompt: 'O que é hemoglobina?',
      options: [
        { text: 'Enzima digestiva do fígado',                      correct: false },
        { text: 'Proteína das hemácias que transporta O₂',        correct: true  },
        { text: 'Hormônio produzido pelo pâncreas',               correct: false },
        { text: 'Componente do plasma responsável por coagulação', correct: false }
      ],
      explanation: 'Hemoglobina é a proteína nas hemácias que se liga ao O₂ nos pulmões e o libera nos tecidos.'
    },
    {
      prompt: 'O ventrículo esquerdo tem parede mais espessa que o direito porque:',
      options: [
        { text: 'Precisa bombear sangue para os pulmões',               correct: false },
        { text: 'Precisa bombar sangue para todo o corpo com maior pressão', correct: true },
        { text: 'Recebe mais sangue que o direito',                     correct: false },
        { text: 'É o primeiro ventrículo a se desenvolver',             correct: false }
      ],
      explanation: 'A grande circulação (corpo) exige maior pressão → VE mais musculoso que o VD (pulmões são mais próximos).'
    },
    {
      prompt: 'As plaquetas são essenciais para:',
      options: [
        { text: 'Combater vírus',           correct: false },
        { text: 'Coagulação do sangue',     correct: true  },
        { text: 'Transportar CO₂',          correct: false },
        { text: 'Produzir anticorpos',      correct: false }
      ],
      explanation: 'Plaquetas (trombócitos) se agregam no local de lesão e ativam a cascata de coagulação para estancar sangramentos.'
    },
    {
      prompt: 'A troca de gases (O₂ e CO₂) entre sangue e células ocorre nos:',
      options: [
        { text: 'Átrios',       correct: false },
        { text: 'Artérias',     correct: false },
        { text: 'Capilares',    correct: true  },
        { text: 'Veias',        correct: false }
      ],
      explanation: 'Os capilares têm parede de apenas 1 célula de espessura — ideal para difusão de gases e nutrientes.'
    },
    {
      prompt: 'A anemia ferropriva acontece quando há falta de ferro. Isso afeta diretamente:',
      options: [
        { text: 'A produção de plaquetas',      correct: false },
        { text: 'A síntese de hemoglobina e transporte de O₂', correct: true },
        { text: 'A coagulação sanguínea',       correct: false },
        { text: 'A quantidade de plasma',       correct: false }
      ],
      explanation: 'O ferro é essencial para a hemoglobina. Sem ferro, menos hemoglobina → menos O₂ transportado → cansaço, palidez.'
    }
  ],

  adaptiveReview: [
    {
      prompt: 'DIFÍCIL: Uma pessoa Rh- grávida de feto Rh+ pode desenvolver eritroblastose fetal na 2ª gestação. Por quê?',
      options: [
        { text: 'O feto ataca a mãe com anticorpos anti-Rh',                            correct: false },
        { text: 'Na 1ª gestação a mãe produz anti-Rh; na 2ª esses anticorpos atacam o feto', correct: true },
        { text: 'O Rh+ é dominante e destrói células Rh-',                              correct: false },
        { text: 'Ambos têm tipos ABO incompatíveis',                                    correct: false }
      ],
      explanation: 'Na 1ª gestação Rh+, a mãe Rh- se sensibiliza. Na 2ª gestação, os anticorpos IgG atravessam a placenta e atacam as hemácias do feto Rh+.'
    },
    {
      prompt: 'DIFÍCIL: Por que atletas de resistência têm maior concentração de hemácias (policitemia fisiológica)?',
      options: [
        { text: 'O exercício diminui o volume plasmático permanentemente',                correct: false },
        { text: 'O estímulo hipóxico crônico induz maior produção de eritropoietina (EPO)', correct: true },
        { text: 'O coração produz mais plaquetas em resposta ao esforço',                correct: false },
        { text: 'A adrenalina aumenta a viscosidade do sangue diretamente',              correct: false }
      ],
      explanation: 'Em altitudes ou exercício intenso, a EPO estimula a medula óssea a produzir mais hemácias para melhor oxigenação.'
    }
  ],

  rewards: { xp: 140, gems: 14, badge: '🫀 Guardião Circulatório' },
  completionMessage: '🫀 Sistema Circulatório dominado! Seu coração bate forte de orgulho. Próximo: Sistema Respiratório!',
  nextStage: 'cap8_s03'
};

window.CAP8_S02 = CAP8_S02;
