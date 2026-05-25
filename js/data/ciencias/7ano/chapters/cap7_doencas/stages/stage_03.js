window.STAGE_03 = STAGE_03;
const STAGE_03 = {

  id: 'stage_03',

  title: 'Doenças Bacterianas e Saneamento',

  icon: '🚰',

  difficulty: 'medium',

  estimatedTime: 50,

  learningObjectives: [
    'Compreender doenças bacterianas importantes',
    'Entender transmissão da leptospirose',
    'Reconhecer sintomas do tétano e cólera',
    'Compreender importância do saneamento básico',
    'Relacionar higiene e prevenção de doenças',
    'Entender resistência bacteriana'
  ],

  skills: [
    'bacteriologia',
    'saneamento',
    'saude_publica',
    'prevencao',
    'epidemiologia',
    'higiene'
  ],

  rewards: {
    xp: 300,
    badge: 'Guardião da Saúde Pública'
  },

  adaptiveRules: {
    failTwice: 'show_extra_review',
    failThreeTimes: 'unlock_visual_support',
    scoreAbove90: 'unlock_stage_04'
  },

  nextStage: 'stage_04',

  summary: {

    readTime: 90,

    content: [

      {
        icon: '🦠',
        title: 'Doenças Bacterianas',
        text: 'Bactérias podem causar doenças graves, mas muitas são preveníveis por vacinação, higiene e saneamento.'
      },

      {
        icon: '🚰',
        title: 'Saneamento Básico',
        text: 'Água tratada, coleta de esgoto e drenagem urbana reduzem drasticamente doenças infecciosas.'
      },

      {
        icon: '🐀',
        title: 'Leptospirose',
        text: 'Transmitida principalmente pela urina de ratos presente em água contaminada.'
      },

      {
        icon: '💊',
        title: 'Antibióticos',
        text: 'O uso inadequado de antibióticos favorece resistência bacteriana.'
      }

    ],

    flashcards: [

      {
        q: 'Qual bactéria causa o tétano?',
        a: 'Clostridium tetani.'
      },

      {
        q: 'Como ocorre a leptospirose?',
        a: 'Contato com água contaminada por urina de ratos.'
      },

      {
        q: 'O que é saneamento básico?',
        a: 'Infraestrutura de água, esgoto e drenagem.'
      }

    ],

    miniReview: [

      {
        q: 'Leptospirose está relacionada a enchentes?',
        a: 'Sim'
      },

      {
        q: 'Antibióticos funcionam contra bactérias?',
        a: 'Sim'
      },

      {
        q: 'Saneamento reduz doenças?',
        a: 'Sim'
      }

    ],

    visualMemoryHooks: [
      '🐀 Ratos = leptospirose',
      '🚰 Água tratada = prevenção',
      '💊 Antibiótico ≠ antiviral',
      '🧼 Higiene = barreira contra infecções'
    ]
  },

  questions: [

    {
      id: 81,
      type: 'select',
      difficulty: 'easy',
      category: 'leptospirose',
      theme: 'transmissão',

      prompt: 'Leptospirose é transmitida principalmente por:',

      options: [
        { text: 'Picada de mosquito', correct: false },
        { text: 'Água contaminada por urina de ratos', correct: true },
        { text: 'Ar condicionado', correct: false },
        { text: 'Comida queimada', correct: false }
      ],

      explanation: 'A bactéria entra por pele ou mucosas em contato com água contaminada.'
    },

    {
      id: 82,
      type: 'select',
      difficulty: 'easy',
      category: 'cólera',
      theme: 'sintoma',

      prompt: 'Cólera causa principalmente:',

      options: [
        { text: 'Tosse intensa', correct: false },
        { text: 'Diarreia aquosa intensa', correct: true },
        { text: 'Dor de cabeça', correct: false },
        { text: 'Manchas vermelhas', correct: false }
      ],

      explanation: 'A cólera causa desidratação severa por perda intensa de líquidos.'
    },

    {
      id: 83,
      type: 'select',
      difficulty: 'easy',
      category: 'tuberculose',
      theme: 'alvo',

      prompt: 'Tuberculose afeta principalmente:',

      options: [
        { text: 'Fígado', correct: false },
        { text: 'Pulmões', correct: true },
        { text: 'Coração', correct: false },
        { text: 'Pele', correct: false }
      ],

      explanation: 'A forma pulmonar é a mais comum.'
    },

    {
      id: 84,
      type: 'select',
      difficulty: 'easy',
      category: 'tétano',
      theme: 'entrada',

      prompt: 'Tétano entra no corpo por:',

      options: [
        { text: 'Ar contaminado', correct: false },
        { text: 'Ferimentos contaminados', correct: true },
        { text: 'Mosquitos', correct: false },
        { text: 'Água potável', correct: false }
      ],

      explanation: 'Esporos entram por cortes e ferimentos.'
    },

    {
      id: 85,
      type: 'select',
      difficulty: 'easy',
      category: 'hanseníase',
      theme: 'agente',

      prompt: 'Hanseníase é causada por:',

      options: [
        { text: 'Vírus', correct: false },
        { text: 'Mycobacterium leprae', correct: true },
        { text: 'Fungo', correct: false },
        { text: 'Protozoário', correct: false }
      ],

      explanation: 'Hanseníase é uma doença bacteriana.'
    },

    {
      id: 86,
      type: 'select',
      difficulty: 'easy',
      category: 'saneamento',
      theme: 'definição',

      prompt: 'Saneamento básico inclui:',

      options: [
        { text: 'Apenas coleta de lixo', correct: false },
        { text: 'Água tratada e esgoto', correct: true },
        { text: 'Somente hospitais', correct: false },
        { text: 'Vacinação', correct: false }
      ],

      explanation: 'Saneamento envolve infraestrutura de saúde pública.'
    },

    {
      id: 87,
      type: 'select',
      difficulty: 'medium',
      category: 'leptospirose',
      theme: 'enchente',

      prompt: 'Enchentes aumentam risco de:',

      options: [
        { text: 'Gripe', correct: false },
        { text: 'Leptospirose', correct: true },
        { text: 'Catapora', correct: false },
        { text: 'Zika', correct: false }
      ],

      explanation: 'Água de enchente mistura urina de ratos e esgoto.'
    },

    {
      id: 88,
      type: 'select',
      difficulty: 'medium',
      category: 'cólera',
      theme: 'prevenção',

      prompt: 'Cólera é prevenida principalmente por:',

      options: [
        { text: 'Água tratada e higiene', correct: true },
        { text: 'Vacina BCG', correct: false },
        { text: 'Lockdown', correct: false },
        { text: 'Antibióticos preventivos', correct: false }
      ],

      explanation: 'Água segura e saneamento interrompem transmissão.'
    },

    {
      id: 89,
      type: 'select',
      difficulty: 'medium',
      category: 'vacinas',
      theme: 'bcg',

      prompt: 'A vacina BCG protege contra:',

      options: [
        { text: 'Tétano', correct: false },
        { text: 'Formas graves da tuberculose', correct: true },
        { text: 'Dengue', correct: false },
        { text: 'Cólera', correct: false }
      ],

      explanation: 'BCG previne formas graves de tuberculose.'
    },

    {
      id: 90,
      type: 'select',
      difficulty: 'medium',
      category: 'tétano',
      theme: 'sintoma',

      prompt: 'Sintoma típico do tétano:',

      options: [
        { text: 'Diarreia intensa', correct: false },
        { text: 'Rigidez muscular', correct: true },
        { text: 'Tosse verde', correct: false },
        { text: 'Febre baixa', correct: false }
      ],

      explanation: 'O tétano provoca espasmos musculares.'
    },

    {
      id: 91,
      type: 'select',
      difficulty: 'medium',
      category: 'hanseníase',
      theme: 'transmissão',

      prompt: 'Hanseníase transmite-se principalmente por:',

      options: [
        { text: 'Insetos', correct: false },
        { text: 'Contato respiratório prolongado', correct: true },
        { text: 'Piscinas', correct: false },
        { text: 'Relação sexual', correct: false }
      ],

      explanation: 'O contato prolongado é necessário.'
    },

    {
      id: 92,
      type: 'select',
      difficulty: 'medium',
      category: 'saneamento',
      theme: 'impacto',

      prompt: 'Saneamento precário favorece:',

      options: [
        { text: 'Doenças crônicas', correct: false },
        { text: 'Doenças de veiculação hídrica', correct: true },
        { text: 'Câncer de pele', correct: false },
        { text: 'Alergias sazonais', correct: false }
      ],

      explanation: 'Água contaminada aumenta doenças infecciosas.'
    },

    {
      id: 93,
      type: 'select',
      difficulty: 'medium',
      category: 'água',
      theme: 'tratamento',

      prompt: 'Água tratada passa por:',

      options: [
        { text: 'Fervura caseira apenas', correct: false },
        { text: 'Cloração e filtração', correct: true },
        { text: 'Nenhum processo', correct: false },
        { text: 'Somente exposição solar', correct: false }
      ],

      explanation: 'ETAs realizam tratamento da água.'
    },

    {
      id: 94,
      type: 'select',
      difficulty: 'medium',
      category: 'esgoto',
      theme: 'contaminação',

      prompt: 'Esgoto sem tratamento contamina:',

      options: [
        { text: 'Somente o ar', correct: false },
        { text: 'Solo e rios', correct: true },
        { text: 'Rochas', correct: false },
        { text: 'Nuvens', correct: false }
      ],

      explanation: 'Patógenos retornam ao ambiente.'
    },

    {
      id: 95,
      type: 'select',
      difficulty: 'medium',
      category: 'lixo',
      theme: 'vetores',

      prompt: 'Lixo acumulado atrai:',

      options: [
        { text: 'Animais silvestres raros', correct: false },
        { text: 'Ratos, baratas e moscas', correct: true },
        { text: 'Peixes', correct: false },
        { text: 'Pássaros migratórios', correct: false }
      ],

      explanation: 'Vetores urbanos aumentam doenças.'
    },

    {
      id: 96,
      type: 'select',
      difficulty: 'medium',
      category: 'pneumonia',
      theme: 'tratamento',

      prompt: 'Pneumonia bacteriana é tratada com:',

      options: [
        { text: 'Antiviral', correct: false },
        { text: 'Antibiótico', correct: true },
        { text: 'Soro', correct: false },
        { text: 'Antifúngico', correct: false }
      ],

      explanation: 'Antibióticos combatem bactérias.'
    },

    {
      id: 97,
      type: 'select',
      difficulty: 'medium',
      category: 'fossa',
      theme: 'alternativa',

      prompt: 'Fossa séptica evita:',

      options: [
        { text: 'Doenças respiratórias', correct: false },
        { text: 'Contaminação do solo e lençol freático', correct: true },
        { text: 'Alergias', correct: false },
        { text: 'Poluição sonora', correct: false }
      ],

      explanation: 'Fossas evitam contaminação ambiental.'
    },

    {
      id: 98,
      type: 'select',
      difficulty: 'medium',
      category: 'higiene',
      theme: 'hipoclorito',

      prompt: 'Hipoclorito de sódio serve para:',

      options: [
        { text: 'Desinfetar alimentos', correct: true },
        { text: 'Colorir vegetais', correct: false },
        { text: 'Substituir vacinas', correct: false },
        { text: 'Gerar antibióticos', correct: false }
      ],

      explanation: 'Hipoclorito elimina microrganismos.'
    }

  ],

  completion: {

    title: '🎉 Etapa 3 Finalizada!',

    message: 'Você concluiu a etapa sobre Doenças Bacterianas e Saneamento.',

    unlocked: [
      'Saneamento básico',
      'Doenças bacterianas',
      'Leptospirose',
      'Tétano',
      'Uso correto de antibióticos'
    ],

    nextButton: {
      label: 'Ir para Etapa 4 →',
      target: 'stage_04'
    }
  },

  analytics: {

    masteryThreshold: 0.82,

    minimumCorrectAnswers: 75,

    trackResponseTime: true,

    spacedReviewEnabled: true
  }
},

window.STAGE_03 = STAGE_03;