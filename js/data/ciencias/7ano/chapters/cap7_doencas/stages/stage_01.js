const STAGE_01 = {
  id: 'stage_01',

  title: 'Imunidade e Vacinas',

  icon: '🛡️',

  difficulty: 'easy',

  estimatedTime: 35,

  learningObjectives: [
    'Compreender o funcionamento do sistema imunológico',
    'Diferenciar vacina e soro terapêutico',
    'Entender epidemia, endemia e pandemia',
    'Compreender imunidade coletiva',
    'Identificar fake news em saúde',
    'Reconhecer importância da vacinação',
    'Entender prevenção de doenças virais'
  ],

  skills: [
    'imunologia_basica',
    'vacinacao',
    'epidemiologia',
    'saude_publica',
    'pensamento_critico',
    'prevencao'
  ],

  rewards: {
    xp: 150,
    badge: 'Guardião da Imunidade'
  },

  adaptiveRules: {
    failTwice: 'show_extra_review',
    failThreeTimes: 'unlock_reinforcement_mode',
    scoreAbove90: 'unlock_stage_02'
  },

  nextStage: 'stage_02',

  summary: {
    readTime: 60,

    content: [
      {
        icon: '🦠',
        title: 'Anticorpos',
        text: 'Anticorpos são proteínas produzidas pelo sistema imunológico para combater agentes invasores.'
      },

      {
        icon: '💉',
        title: 'Vacina vs Soro',
        text: '💡 Vacina previne doenças estimulando a produção de anticorpos.\n\n🧪 Soro contém anticorpos prontos para ação imediata.'
      },

      {
        icon: '🌍',
        title: 'Pandemia',
        text: 'Pandemia é uma doença disseminada globalmente.'
      },

      {
        icon: '🛡️',
        title: 'Imunidade Coletiva',
        text: 'Quando grande parte da população está vacinada, a circulação do agente infeccioso diminui.'
      }
    ],

    flashcards: [
      {
        q: 'O que são anticorpos?',
        a: 'Proteínas produzidas pelo sistema imunológico para combater invasores.'
      },

      {
        q: 'Qual a diferença entre vacina e soro?',
        a: 'Vacina previne. Soro fornece anticorpos prontos.'
      },

      {
        q: 'O que é pandemia?',
        a: 'Doença espalhada globalmente.'
      }
    ],

    miniReview: [
      {
        q: 'Vacina previne ou trata?',
        a: 'Previne'
      },

      {
        q: 'Soro possui anticorpos prontos?',
        a: 'Sim'
      },

      {
        q: 'Pandemia ocorre em escala global?',
        a: 'Sim'
      }
    ],

    visualMemoryHooks: [
      '🛡️ Anticorpos = soldados',
      '💉 Vacina = treinamento',
      '🧪 Soro = socorro imediato',
      '🌐 PANdemia = planeta inteiro'
    ]
  },

  questions: [

    {
      id: 1,
      type: 'select',
      difficulty: 'easy',
      category: 'conceitos',
      theme: 'anticorpos',

      prompt: 'Anticorpos são:',

      options: [
        { text: 'Proteínas de defesa produzidas pelo sistema imune', correct: true },
        { text: 'Vírus enfraquecidos usados em vacinas', correct: false },
        { text: 'Bactérias boas do intestino', correct: false },
        { text: 'Minerais essenciais da alimentação', correct: false }
      ],

      explanation: 'Anticorpos são proteínas do sistema imune que se ligam a microrganismos invasores e ajudam a destruí-los.'
    },

    {
      id: 2,
      type: 'select',
      difficulty: 'easy',
      category: 'vacinas',
      theme: 'prevenção',

      prompt: 'A vacina serve principalmente para:',

      options: [
        { text: 'Tratar doenças já instaladas', correct: false },
        { text: 'Prevenir doenças antes do contágio', correct: true },
        { text: 'Substituir antibióticos', correct: false },
        { text: 'Curar ferimentos na pele', correct: false }
      ],

      explanation: 'Vacinas são preventivas. Estimulam o corpo a produzir anticorpos e memória imunológica.'
    },

    {
      id: 3,
      type: 'select',
      difficulty: 'easy',
      category: 'soro',
      theme: 'tratamento',

      prompt: 'O soro terapêutico contém:',

      options: [
        { text: 'Anticorpos prontos para ação imediata', correct: true },
        { text: 'Vírus vivos atenuados', correct: false },
        { text: 'Antibióticos de amplo espectro', correct: false },
        { text: 'Hormônios estimulantes', correct: false }
      ],

      explanation: 'Soros possuem anticorpos prontos, indicados para tratamento pós-exposição.'
    },

    {
      id: 4,
      type: 'select',
      difficulty: 'easy',
      category: 'epidemiologia',
      theme: 'definições',

      prompt: 'Aumento rápido de casos de uma doença em uma região define:',

      options: [
        { text: 'Pandemia', correct: false },
        { text: 'Endemia', correct: false },
        { text: 'Epidemia', correct: true },
        { text: 'Imunidade coletiva', correct: false }
      ],

      explanation: 'Epidemia é um aumento rápido e localizado de casos.'
    },

    {
      id: 5,
      type: 'select',
      difficulty: 'easy',
      category: 'epidemiologia',
      theme: 'definições',

      prompt: 'Doença constante em uma região é chamada de:',

      options: [
        { text: 'Endemia', correct: true },
        { text: 'Epidemia', correct: false },
        { text: 'Pandemia', correct: false },
        { text: 'Surto isolado', correct: false }
      ],

      explanation: 'Endemia é a presença contínua de uma doença em determinada região.'
    },

    {
      id: 6,
      type: 'select',
      difficulty: 'easy',
      category: 'epidemiologia',
      theme: 'pandemia',

      prompt: 'O prefixo PAN em pandemia significa:',

      options: [
        { text: 'Região específica', correct: false },
        { text: 'Mundo inteiro', correct: true },
        { text: 'Apenas animais', correct: false },
        { text: 'Clima quente', correct: false }
      ],

      explanation: 'PAN significa totalidade/global.'
    },

    {
      id: 7,
      type: 'select',
      difficulty: 'medium',
      category: 'vacinas',
      theme: 'imunidade_coletiva',

      prompt: 'Qual afirmação sobre vacinas é verdadeira?',

      options: [
        { text: 'Causam a doença', correct: false },
        { text: 'Substituem higiene', correct: false },
        { text: 'Protegem apenas vacinados', correct: false },
        { text: 'Reduzem circulação do patógeno', correct: true }
      ],

      explanation: 'Vacinação em massa reduz a transmissão.'
    },

    {
      id: 8,
      type: 'select',
      difficulty: 'medium',
      category: 'soro',
      theme: 'aplicação',

      prompt: 'Pessoa picada por cobra peçonhenta deve receber:',

      options: [
        { text: 'Vacina preventiva', correct: false },
        { text: 'Soro antiofídico', correct: true },
        { text: 'Antibiótico', correct: false },
        { text: 'Anti-inflamatório', correct: false }
      ],

      explanation: 'Soro neutraliza rapidamente a peçonha.'
    },

    {
      id: 9,
      type: 'select',
      difficulty: 'medium',
      category: 'fake_news',
      theme: 'desinformação',

      prompt: 'Fake news em saúde geralmente NÃO possui:',

      options: [
        { text: 'Sensacionalismo', correct: false },
        { text: 'Promessas milagrosas', correct: false },
        { text: 'Fontes científicas verificáveis', correct: true },
        { text: 'Apelo emocional', correct: false }
      ],

      explanation: 'Fake news normalmente não possuem base científica.'
    },

    {
      id: 10,
      type: 'select',
      difficulty: 'medium',
      category: 'imunidade',
      theme: 'comparação',

      prompt: 'Comparando doença natural e vacina:',

      options: [
        { text: 'Doença natural é sempre melhor', correct: false },
        { text: 'Vacina gera proteção mais segura', correct: true },
        { text: 'São iguais', correct: false },
        { text: 'Vacina é mais perigosa', correct: false }
      ],

      explanation: 'Vacinas simulam proteção sem riscos da doença.'
    },

    {
      id: 11,
      type: 'select',
      difficulty: 'medium',
      category: 'antibióticos',
      theme: 'especificidade',

      prompt: 'Antibióticos NÃO funcionam contra:',

      options: [
        { text: 'Bactérias', correct: false },
        { text: 'Vírus', correct: true },
        { text: 'Protozoários', correct: false },
        { text: 'Fungos', correct: false }
      ],

      explanation: 'Antibióticos atuam contra bactérias.'
    },

    {
      id: 12,
      type: 'select',
      difficulty: 'medium',
      category: 'saúde_pública',
      theme: 'sus',

      prompt: 'O SUS oferece vacinas gratuitamente porque:',

      options: [
        { text: 'Saúde preventiva é direito constitucional', correct: true },
        { text: 'Gera lucro', correct: false },
        { text: 'É experimento', correct: false },
        { text: 'Substitui médicos', correct: false }
      ],

      explanation: 'Vacinação coletiva é política pública.'
    }

  ],

  completion: {

    title: '🎉 Etapa Concluída!',

    message: 'Parabéns! Você concluiu a Etapa 1: Imunidade e Vacinas.',

    unlocked: [
      'Imunidade coletiva',
      'Diferença entre vacina e soro',
      'Conceitos epidemiológicos',
      'Combate à fake news'
    ],

    nextButton: {
      label: 'Ir para Etapa 2 →',
      target: 'stage_02'
    }
  },

  analytics: {
    masteryThreshold: 0.8,
    minimumCorrectAnswers: 70,
    trackResponseTime: true,
    spacedReviewEnabled: true
  }
},

if (typeof window !== 'undefined') {
  window.STAGE_01 = STAGE_01;
  if (window.DataLoader) {
    window.DataLoader.registerStage('cap7_doencas', 1, STAGE_01);
  }
}