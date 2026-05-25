const STAGE_04 = {

  id: 'stage_04',

  title: 'Revisão Final e Interpretação',

  icon: '📚',

  difficulty: 'hard',

  estimatedTime: 55,

  learningObjectives: [
    'Revisar conceitos fundamentais de imunologia',
    'Interpretar cenários epidemiológicos',
    'Diferenciar doenças virais e bacterianas',
    'Aplicar pensamento crítico em saúde pública',
    'Reconhecer fake news e desinformação',
    'Integrar prevenção, vacinação e saneamento'
  ],

  skills: [
    'interpretação',
    'epidemiologia',
    'pensamento_critico',
    'saude_publica',
    'imunologia',
    'prevenção_integrada'
  ],

  rewards: {
    xp: 400,
    badge: 'Mestre da Saúde Pública'
  },

  adaptiveRules: {
    failTwice: 'show_master_review',
    failThreeTimes: 'unlock_guided_revision',
    scoreAbove90: 'unlock_final_certificate'
  },

  nextStage: null,

  summary: {

    readTime: 120,

    content: [

      {
        icon: '🧠',
        title: 'Revisão Integrada',
        text: 'A saúde pública depende da integração entre vacinação, saneamento, higiene, educação e prevenção coletiva.'
      },

      {
        icon: '📰',
        title: 'Fake News',
        text: 'Desinformação em saúde reduz vacinação, aumenta doenças evitáveis e prejudica campanhas públicas.'
      },

      {
        icon: '🌎',
        title: 'Saúde Coletiva',
        text: 'Doenças transmissíveis são controladas com ações comunitárias e políticas públicas.'
      },

      {
        icon: '🛡️',
        title: 'Prevenção',
        text: 'Vacinas, higiene, saneamento e educação em saúde formam barreiras complementares.'
      }

    ],

    flashcards: [

      {
        q: 'Vacina previne ou trata?',
        a: 'Previne.'
      },

      {
        q: 'Antibiótico funciona contra vírus?',
        a: 'Não.'
      },

      {
        q: 'Qual mosquito transmite dengue?',
        a: 'Aedes aegypti.'
      }

    ],

    miniReview: [

      {
        q: 'Fake news podem prejudicar campanhas de vacinação?',
        a: 'Sim'
      },

      {
        q: 'Saneamento reduz doenças?',
        a: 'Sim'
      },

      {
        q: 'Imunidade coletiva protege vulneráveis?',
        a: 'Sim'
      }

    ],

    visualMemoryHooks: [
      '📰 Fake news = perigo coletivo',
      '💉 Vacina = proteção social',
      '🚰 Saneamento = prevenção estrutural',
      '🧼 Higiene = defesa diária'
    ]
  },

  questions: [

    {
      id: 116,
      type: 'select',
      difficulty: 'easy',
      category: 'antibióticos',
      theme: 'especificidade',

      prompt: 'Antibiótico cura gripe?',

      options: [
        { text: 'Sim, sempre', correct: false },
        { text: 'Não, gripe é viral', correct: true },
        { text: 'Depende da cepa', correct: false },
        { text: 'Só em crianças', correct: false }
      ],

      explanation: 'Antibióticos não funcionam contra vírus.'
    },

    {
      id: 117,
      type: 'select',
      difficulty: 'easy',
      category: 'febre_amarela',
      theme: 'mito',

      prompt: 'Macacos transmitem febre amarela para humanos?',

      options: [
        { text: 'Sim', correct: false },
        { text: 'Não, mosquitos transmitem', correct: true },
        { text: 'Só bugios transmitem', correct: false },
        { text: 'Só saguis transmitem', correct: false }
      ],

      explanation: 'Macacos são vítimas e sentinelas epidemiológicas.'
    },

    {
      id: 118,
      type: 'select',
      difficulty: 'easy',
      category: 'higiene',
      theme: 'mãos',

      prompt: 'Lavar as mãos previne:',

      options: [
        { text: 'Só gripe', correct: false },
        { text: 'Várias doenças', correct: true },
        { text: 'Nenhuma doença', correct: false },
        { text: 'Apenas alergias', correct: false }
      ],

      explanation: 'Higienização das mãos reduz múltiplas infecções.'
    },

    {
      id: 119,
      type: 'select',
      difficulty: 'easy',
      category: 'dengue',
      theme: 'criadouro',

      prompt: 'Água parada favorece:',

      options: [
        { text: 'Tuberculose', correct: false },
        { text: 'Mosquito Aedes aegypti', correct: true },
        { text: 'Hanseníase', correct: false },
        { text: 'Cólera', correct: false }
      ],

      explanation: 'Água parada cria ambiente ideal para o mosquito.'
    },

    {
      id: 120,
      type: 'select',
      difficulty: 'easy',
      category: 'fake_news',
      theme: 'característica',

      prompt: 'Fake news geralmente:',

      options: [
        { text: 'Usa fontes verificáveis', correct: false },
        { text: 'Usa sensacionalismo', correct: true },
        { text: 'É técnica e científica', correct: false },
        { text: 'Demora para circular', correct: false }
      ],

      explanation: 'Fake news exploram medo e urgência.'
    },

    {
      id: 121,
      type: 'select',
      difficulty: 'medium',
      category: 'interpretação',
      theme: 'cenário',

      prompt: 'Alta dengue e baixa cólera indicam:',

      options: [
        { text: 'Falta de água tratada', correct: false },
        { text: 'Problema com água parada e vetores urbanos', correct: true },
        { text: 'Somente clima tropical', correct: false },
        { text: 'Somente pobreza', correct: false }
      ],

      explanation: 'Dengue relaciona-se ao Aedes aegypti.'
    },

    {
      id: 122,
      type: 'select',
      difficulty: 'medium',
      category: 'prevenção',
      theme: 'zoonose',

      prompt: 'Vacinar animais previne principalmente:',

      options: [
        { text: 'Dengue', correct: false },
        { text: 'Raiva', correct: true },
        { text: 'Cólera', correct: false },
        { text: 'Malária', correct: false }
      ],

      explanation: 'Vacinação animal interrompe transmissão da raiva.'
    },

    {
      id: 123,
      type: 'select',
      difficulty: 'medium',
      category: 'leptospirose',
      theme: 'prevenção',

      prompt: 'Qual medida NÃO previne leptospirose diretamente?',

      options: [
        { text: 'Eliminar água parada', correct: true },
        { text: 'Usar botas em enchentes', correct: false },
        { text: 'Controle de ratos', correct: false },
        { text: 'Evitar água contaminada', correct: false }
      ],

      explanation: 'Eliminar água parada previne dengue.'
    },

    {
      id: 124,
      type: 'select',
      difficulty: 'medium',
      category: 'epidemiologia',
      theme: 'diferença',

      prompt: 'O que diferencia epidemia de endemia?',

      options: [
        { text: 'Padrão temporal e geográfico', correct: true },
        { text: 'Agente causal', correct: false },
        { text: 'Tratamento', correct: false },
        { text: 'Faixa etária', correct: false }
      ],

      explanation: 'Epidemia é aumento súbito; endemia é constante.'
    },

    {
      id: 125,
      type: 'select',
      difficulty: 'medium',
      category: 'soro',
      theme: 'indicação',

      prompt: 'Soro é indicado quando:',

      options: [
        { text: 'Precisa de prevenção futura', correct: false },
        { text: 'Há necessidade de ação imediata', correct: true },
        { text: 'Para gripe leve', correct: false },
        { text: 'Para vacinação', correct: false }
      ],

      explanation: 'Soro fornece anticorpos prontos.'
    },

    {
      id: 126,
      type: 'select',
      difficulty: 'medium',
      category: 'febre_amarela',
      theme: 'sentinela',

      prompt: 'Macacos morrem de febre amarela porque:',

      options: [
        { text: 'São imunes', correct: false },
        { text: 'São sensíveis ao vírus', correct: true },
        { text: 'São vetores', correct: false },
        { text: 'Comem mosquitos', correct: false }
      ],

      explanation: 'Funcionam como sentinelas epidemiológicas.'
    },

    {
      id: 127,
      type: 'select',
      difficulty: 'medium',
      category: 'saneamento',
      theme: 'impacto',

      prompt: 'Saneamento básico:',

      options: [
        { text: 'Evita apenas doenças bacterianas', correct: false },
        { text: 'Reduz múltiplas doenças', correct: true },
        { text: 'Só é útil em cidades grandes', correct: false },
        { text: 'Não afeta saúde', correct: false }
      ],

      explanation: 'Saneamento melhora saúde coletiva.'
    },

    {
      id: 128,
      type: 'select',
      difficulty: 'medium',
      category: 'vetores',
      theme: 'especificidade',

      prompt: 'Aedes aegypti NÃO transmite:',

      options: [
        { text: 'Dengue', correct: false },
        { text: 'Zika', correct: false },
        { text: 'Malária', correct: true },
        { text: 'Chikungunya', correct: false }
      ],

      explanation: 'Malária é transmitida pelo mosquito Anopheles.'
    },

    {
      id: 129,
      type: 'select',
      difficulty: 'medium',
      category: 'higiene',
      theme: 'vinagre',

      prompt: 'Vinagre na higienização de alimentos:',

      options: [
        { text: 'É mais eficaz que cloro', correct: false },
        { text: 'Tem ação limitada', correct: true },
        { text: 'É proibido', correct: false },
        { text: 'Substitui hipoclorito', correct: false }
      ],

      explanation: 'Hipoclorito é mais eficaz contra microrganismos.'
    },

    {
      id: 130,
      type: 'select',
      difficulty: 'medium',
      category: 'vacinas',
      theme: 'especificidade',

      prompt: 'A tríplice viral NÃO protege contra:',

      options: [
        { text: 'Caxumba', correct: false },
        { text: 'Sarampo', correct: false },
        { text: 'Rubéola', correct: false },
        { text: 'Dengue', correct: true }
      ],

      explanation: 'Tríplice viral protege sarampo, caxumba e rubéola.'
    }

  ],

  completion: {

    title: '🏆 Curso Finalizado!',

    message: 'Parabéns! Você concluiu todas as etapas do capítulo.',

    unlocked: [
      'Interpretação epidemiológica',
      'Combate à fake news',
      'Prevenção integrada',
      'Saúde coletiva',
      'Raciocínio crítico em saúde pública'
    ],

    certificate: {
      enabled: true,
      title: 'Especialista em Prevenção e Saúde Pública'
    }
  },

  analytics: {

    masteryThreshold: 0.85,

    minimumCorrectAnswers: 80,

    trackResponseTime: true,

    spacedReviewEnabled: true,

    generateFinalReport: true
  }
};

if (typeof window !== 'undefined') {
  window.STAGE_04 = STAGE_04;
}
if (window.DataLoader) {
  window.DataLoader.registerStage('cap7_doencas', 4, STAGE_04);
}