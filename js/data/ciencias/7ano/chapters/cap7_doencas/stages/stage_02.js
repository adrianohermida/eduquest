const STAGE_02 = {

  id: 'stage_02',

  title: 'Doenças Virais',

  icon: '🦠',

  difficulty: 'medium',

  estimatedTime: 45,

  learningObjectives: [
    'Identificar principais doenças virais',
    'Compreender formas de transmissão',
    'Entender prevenção de arboviroses',
    'Reconhecer sinais de gravidade',
    'Diferenciar doenças virais e bacterianas',
    'Compreender vacinação e saúde pública'
  ],

  skills: [
    'virologia',
    'arboviroses',
    'covid19',
    'epidemiologia',
    'diagnostico',
    'saude_publica'
  ],

  rewards: {
    xp: 250,
    badge: 'Especialista em Viroses'
  },

  adaptiveRules: {
    failTwice: 'show_extra_review',
    failThreeTimes: 'unlock_visual_revision',
    scoreAbove90: 'unlock_stage_03'
  },

  nextStage: 'stage_03',

  summary: {

    readTime: 75,

    content: [

      {
        icon: '🦠',
        title: 'Doenças Virais',
        text: 'Vírus dependem das células humanas para se reproduzir. Muitas doenças importantes são causadas por vírus.'
      },

      {
        icon: '🦟',
        title: 'Arboviroses',
        text: 'Dengue, Zika e Chikungunya são transmitidas principalmente pelo mosquito Aedes aegypti.'
      },

      {
        icon: '😷',
        title: 'Covid-19',
        text: 'A Covid-19 é transmitida principalmente por gotículas e aerossóis respiratórios.'
      },

      {
        icon: '💉',
        title: 'Vacinação',
        text: 'Vacinas reduzem casos graves, mortes e circulação de doenças virais.'
      }

    ],

    flashcards: [

      {
        q: 'Qual mosquito transmite dengue?',
        a: 'Aedes aegypti.'
      },

      {
        q: 'Covid-19 é causada por qual vírus?',
        a: 'SARS-CoV-2.'
      },

      {
        q: 'O que é aerossol?',
        a: 'Partículas microscópicas suspensas no ar.'
      }

    ],

    miniReview: [

      {
        q: 'Dengue é transmitida por mosquito?',
        a: 'Sim'
      },

      {
        q: 'Covid-19 pode ser transmitida pelo ar?',
        a: 'Sim'
      },

      {
        q: 'Vacinas ajudam a prevenir doenças graves?',
        a: 'Sim'
      }

    ],

    visualMemoryHooks: [
      '🦟 Aedes = dengue, zika e chikungunya',
      '😷 Máscara = barreira respiratória',
      '💉 Vacina = proteção coletiva',
      '🦠 Vírus dependem de células'
    ]
  },

  questions: [

    {
      id: 41,
      type: 'select',
      difficulty: 'easy',
      category: 'covid19',
      theme: 'agente',

      prompt: 'O SARS-CoV-2 causa qual doença?',

      options: [
        { text: 'Gripe sazonal', correct: false },
        { text: 'Covid-19', correct: true },
        { text: 'Dengue hemorrágica', correct: false },
        { text: 'Tétano generalizado', correct: false }
      ],

      explanation: 'SARS-CoV-2 é o coronavírus responsável pela Covid-19.'
    },

    {
      id: 42,
      type: 'select',
      difficulty: 'easy',
      category: 'dengue',
      theme: 'vetor',

      prompt: 'A dengue é transmitida principalmente por:',

      options: [
        { text: 'Água contaminada', correct: false },
        { text: 'Mosquito Aedes aegypti', correct: true },
        { text: 'Contato físico', correct: false },
        { text: 'Aerossóis', correct: false }
      ],

      explanation: 'O Aedes aegypti é o principal vetor da dengue.'
    },

    {
      id: 43,
      type: 'select',
      difficulty: 'easy',
      category: 'zika',
      theme: 'complicações',

      prompt: 'Zika em gestantes pode causar:',

      options: [
        { text: 'Paralisia cerebral adquirida', correct: false },
        { text: 'Microcefalia fetal', correct: true },
        { text: 'Diabetes congênito', correct: false },
        { text: 'Catarata isolada', correct: false }
      ],

      explanation: 'O vírus Zika pode causar síndrome congênita.'
    },

    {
      id: 44,
      type: 'select',
      difficulty: 'easy',
      category: 'chikungunya',
      theme: 'sintomas',

      prompt: 'Chikungunya caracteriza-se por:',

      options: [
        { text: 'Tosse intensa', correct: false },
        { text: 'Dores articulares intensas', correct: true },
        { text: 'Diarreia sanguinolenta', correct: false },
        { text: 'Manchas roxas', correct: false }
      ],

      explanation: 'Artralgias intensas são típicas da Chikungunya.'
    },

    {
      id: 45,
      type: 'select',
      difficulty: 'easy',
      category: 'febre_amarela',
      theme: 'urbana',

      prompt: 'A febre amarela urbana no Brasil:',

      options: [
        { text: 'É endêmica em todo país', correct: false },
        { text: 'Foi erradicada em 1942', correct: true },
        { text: 'Existe apenas no Nordeste', correct: false },
        { text: 'É leve e sem risco', correct: false }
      ],

      explanation: 'A forma urbana foi erradicada no Brasil.'
    },

    {
      id: 46,
      type: 'select',
      difficulty: 'easy',
      category: 'febre_amarela',
      theme: 'macacos',

      prompt: 'Na febre amarela silvestre, os macacos são:',

      options: [
        { text: 'Responsáveis pela transmissão', correct: false },
        { text: 'Vítimas e sentinelas epidemiológicas', correct: true },
        { text: 'Vetores ativos', correct: false },
        { text: 'Imunes à doença', correct: false }
      ],

      explanation: 'Macacos alertam para circulação viral.'
    },

    {
      id: 47,
      type: 'select',
      difficulty: 'medium',
      category: 'covid19',
      theme: 'transmissão',

      prompt: 'A Covid-19 espalha-se principalmente por:',

      options: [
        { text: 'Contato de pele', correct: false },
        { text: 'Gotículas e aerossóis', correct: true },
        { text: 'Alimentos crus', correct: false },
        { text: 'Mosquitos', correct: false }
      ],

      explanation: 'A principal transmissão é respiratória.'
    },

    {
      id: 48,
      type: 'select',
      difficulty: 'medium',
      category: 'covid19',
      theme: 'prevenção',

      prompt: 'A melhor estratégia de prevenção da Covid-19 combina:',

      options: [
        { text: 'Somente álcool gel', correct: false },
        { text: 'Máscara + vacina + ventilação', correct: true },
        { text: 'Isolamento permanente', correct: false },
        { text: 'Apenas vacinação', correct: false }
      ],

      explanation: 'Medidas combinadas reduzem drasticamente a transmissão.'
    },

    {
      id: 49,
      type: 'select',
      difficulty: 'medium',
      category: 'diagnóstico',
      theme: 'pcr',

      prompt: 'O teste PCR detecta:',

      options: [
        { text: 'Anticorpos', correct: false },
        { text: 'RNA viral', correct: true },
        { text: 'Bactérias', correct: false },
        { text: 'Leucócitos', correct: false }
      ],

      explanation: 'PCR identifica o material genético viral.'
    },

    {
      id: 50,
      type: 'select',
      difficulty: 'medium',
      category: 'diagnóstico',
      theme: 'sorologia',

      prompt: 'A sorologia detecta:',

      options: [
        { text: 'Vírus vivo', correct: false },
        { text: 'Anticorpos IgG e IgM', correct: true },
        { text: 'RNA viral', correct: false },
        { text: 'Sintomas clínicos', correct: false }
      ],

      explanation: 'Sorologia identifica resposta imunológica.'
    },

    {
      id: 51,
      type: 'select',
      difficulty: 'medium',
      category: 'saúde_pública',
      theme: 'lockdown',

      prompt: 'O lockdown visa principalmente:',

      options: [
        { text: 'Aumentar turismo', correct: false },
        { text: 'Evitar colapso hospitalar', correct: true },
        { text: 'Fechar escolas permanentemente', correct: false },
        { text: 'Substituir vacinas', correct: false }
      ],

      explanation: 'Lockdown reduz velocidade de transmissão.'
    },

    {
      id: 52,
      type: 'select',
      difficulty: 'medium',
      category: 'dengue',
      theme: 'criadouro',

      prompt: 'O Aedes aegypti se reproduz em:',

      options: [
        { text: 'Rios correntes', correct: false },
        { text: 'Água parada', correct: true },
        { text: 'Florestas profundas', correct: false },
        { text: 'Areia seca', correct: false }
      ],

      explanation: 'Eliminar água parada é essencial.'
    }

  ],

  completion: {

    title: '🎉 Etapa 2 Finalizada!',

    message: 'Você concluiu a etapa sobre Doenças Virais.',

    unlocked: [
      'Arboviroses',
      'Covid-19',
      'Transmissão viral',
      'Diagnóstico molecular',
      'Vacinação preventiva'
    ],

    nextButton: {
      label: 'Ir para Etapa 3 →',
      target: 'stage_03'
    }
  },

  analytics: {

    masteryThreshold: 0.8,

    minimumCorrectAnswers: 75,

    trackResponseTime: true,

    spacedReviewEnabled: true
  }
},

window.STAGE_02 = STAGE_02;
}