const STAGE_05 = {

  id: 'stage_05',

  title: 'Simulado Oficial e Revisão Estratégica',

  icon: '🎯',

  difficulty: 'hard',

  estimatedTime: 60,

  learningObjectives: [
    'Aplicar conhecimentos em cenários reais',
    'Interpretar situações epidemiológicas',
    'Resolver questões contextualizadas',
    'Revisar prevenção de doenças transmissíveis',
    'Reconhecer fake news em saúde',
    'Consolidar conhecimentos do capítulo'
  ],

  skills: [
    'interpretação',
    'epidemiologia',
    'pensamento_critico',
    'prevenção',
    'saude_publica',
    'análise_contextual'
  ],

  rewards: {
    xp: 500,
    badge: 'Campeão do Simulado Oficial'
  },

  adaptiveRules: {
    failTwice: 'show_targeted_revision',
    failThreeTimes: 'unlock_guided_mode',
    scoreAbove90: 'unlock_master_certificate'
  },

  nextStage: null,

  summary: {

    readTime: 120,

    content: [

      {
        icon: '🎯',
        title: 'Aplicação Prática',
        text: 'Nesta etapa você aplicará todos os conhecimentos adquiridos em situações reais e questões contextualizadas.'
      },

      {
        icon: '🧠',
        title: 'Interpretação',
        text: 'O foco agora é interpretar cenários epidemiológicos e reconhecer padrões de prevenção.'
      },

      {
        icon: '📰',
        title: 'Pensamento Crítico',
        text: 'Identificar fake news e compreender evidências científicas são habilidades essenciais.'
      },

      {
        icon: '🌎',
        title: 'Saúde Coletiva',
        text: 'A prevenção depende de ações individuais, comunitárias e políticas públicas.'
      }

    ],

    flashcards: [

      {
        q: 'Leptospirose está relacionada a quê?',
        a: 'Contato com água contaminada por urina de ratos.'
      },

      {
        q: 'Antibióticos funcionam contra gripe?',
        a: 'Não.'
      },

      {
        q: 'Qual mosquito transmite dengue?',
        a: 'Aedes aegypti.'
      }

    ],

    miniReview: [

      {
        q: 'Vacinação coletiva reduz transmissão?',
        a: 'Sim'
      },

      {
        q: 'Fake news prejudicam saúde pública?',
        a: 'Sim'
      },

      {
        q: 'Saneamento reduz doenças?',
        a: 'Sim'
      }

    ],

    visualMemoryHooks: [
      '🎯 Simulado = aplicação prática',
      '📰 Fake news = risco coletivo',
      '💉 Vacina = proteção comunitária',
      '🚰 Saneamento = prevenção estrutural'
    ]
  },

  questions: [

    {
      id: 151,
      type: 'select',
      difficulty: 'medium',
      category: 'interpretação',
      theme: 'leptospirose_enchente',

      prompt: 'Após enchentes, aumentaram casos relacionados à água contaminada por urina de ratos. A doença mais associada é:',

      options: [
        { text: 'Dengue', correct: false },
        { text: 'Covid-19', correct: false },
        { text: 'Leptospirose', correct: true },
        { text: 'Sarampo', correct: false },
        { text: 'Catapora', correct: false }
      ],

      explanation: 'Leptospirose está associada a enchentes e contato com água contaminada.'
    },

    {
      id: 152,
      type: 'select',
      difficulty: 'easy',
      category: 'epidemiologia',
      theme: 'epidemia',

      prompt: 'Aumento rápido de casos em apenas uma região caracteriza:',

      options: [
        { text: 'Pandemia', correct: false },
        { text: 'Mutação', correct: false },
        { text: 'Endemia mundial', correct: false },
        { text: 'Epidemia', correct: true },
        { text: 'Imunização', correct: false }
      ],

      explanation: 'Epidemia é aumento localizado e rápido de casos.'
    },

    {
      id: 153,
      type: 'select',
      difficulty: 'easy',
      category: 'dengue',
      theme: 'prevenção_vetor',

      prompt: 'Eliminar água parada combate dengue porque:',

      options: [
        { text: 'Elimina o vírus', correct: false },
        { text: 'Impede reprodução do mosquito', correct: true },
        { text: 'Mata bactérias', correct: false },
        { text: 'Substitui vacinas', correct: false },
        { text: 'Reduz poluição', correct: false }
      ],

      explanation: 'O Aedes aegypti utiliza água parada para reprodução.'
    },

    {
      id: 154,
      type: 'select',
      difficulty: 'easy',
      category: 'raiva',
      theme: 'emergência',

      prompt: 'Pessoa mordida por cão suspeito de raiva deve:',

      options: [
        { text: 'Esperar sintomas', correct: false },
        { text: 'Tomar antibióticos em casa', correct: false },
        { text: 'Procurar atendimento médico imediato', correct: true },
        { text: 'Apenas lavar o local', correct: false },
        { text: 'Ignorar o ferimento', correct: false }
      ],

      explanation: 'A profilaxia pós-exposição salva vidas.'
    },

    {
      id: 155,
      type: 'select',
      difficulty: 'easy',
      category: 'fake_news',
      theme: 'identificação',

      prompt: 'Mensagem afirmando que vacina altera DNA humano provavelmente é:',

      options: [
        { text: 'Pesquisa validada', correct: false },
        { text: 'Consenso médico', correct: false },
        { text: 'Fake news', correct: true },
        { text: 'Campanha oficial', correct: false },
        { text: 'Publicidade hospitalar', correct: false }
      ],

      explanation: 'Vacinas não alteram DNA humano.'
    },

    {
      id: 156,
      type: 'select',
      difficulty: 'medium',
      category: 'vacinas',
      theme: 'imunidade_coletiva',

      prompt: 'Uma vantagem da vacinação coletiva é:',

      options: [
        { text: 'Eliminar totalmente doenças', correct: false },
        { text: 'Proteger apenas vacinados', correct: false },
        { text: 'Reduzir circulação do agente infeccioso', correct: true },
        { text: 'Substituir higiene', correct: false },
        { text: 'Eliminar médicos', correct: false }
      ],

      explanation: 'Imunidade coletiva reduz transmissão.'
    },

    {
      id: 157,
      type: 'select',
      difficulty: 'easy',
      category: 'dengue',
      theme: 'sintomas',

      prompt: 'Febre alta, dores no corpo e manchas vermelhas após picada de mosquito sugerem:',

      options: [
        { text: 'Tuberculose', correct: false },
        { text: 'Hanseníase', correct: false },
        { text: 'Dengue', correct: true },
        { text: 'Tétano', correct: false },
        { text: 'Cólera', correct: false }
      ],

      explanation: 'Esses são sintomas clássicos de dengue.'
    },

    {
      id: 158,
      type: 'select',
      difficulty: 'easy',
      category: 'antibióticos',
      theme: 'especificidade',

      prompt: 'A frase “antibióticos tratam gripe” está:',

      options: [
        { text: 'Correta', correct: false },
        { text: 'Correta apenas em crianças', correct: false },
        { text: 'Incorreta, gripe é viral', correct: true },
        { text: 'Correta apenas em idosos', correct: false },
        { text: 'Correta em casos graves', correct: false }
      ],

      explanation: 'Antibióticos não atuam contra vírus.'
    },

    {
      id: 159,
      type: 'select',
      difficulty: 'easy',
      category: 'saneamento',
      theme: 'impacto',

      prompt: 'Falta de saneamento aumenta risco de:',

      options: [
        { text: 'Prevenção de epidemias', correct: false },
        { text: 'Doenças transmissíveis', correct: true },
        { text: 'Imunidade coletiva', correct: false },
        { text: 'Redução de infecções', correct: false },
        { text: 'Eliminação de bactérias', correct: false }
      ],

      explanation: 'Saneamento inadequado favorece doenças.'
    },

    {
      id: 160,
      type: 'select',
      difficulty: 'medium',
      category: 'síntese',
      theme: 'afirmativas',

      prompt: 'Quais afirmativas estão corretas? I-Vacinas previnem doenças. II-Aedes transmite dengue. III-Saneamento previne doenças. IV-Antibióticos funcionam contra vírus.',

      options: [
        { text: 'Apenas I e II', correct: false },
        { text: 'Apenas III e IV', correct: false },
        { text: 'Apenas I, II e III', correct: true },
        { text: 'Apenas IV', correct: false },
        { text: 'Todas', correct: false }
      ],

      explanation: 'Antibióticos não funcionam contra vírus.'
    }

  ],

  completion: {

    title: '🏆 Simulado Oficial Concluído!',

    message: 'Parabéns! Você finalizou todas as etapas do capítulo e concluiu o Simulado Oficial.',

    unlocked: [
      'Interpretação epidemiológica avançada',
      'Análise crítica em saúde pública',
      'Combate à desinformação',
      'Síntese de conhecimentos',
      'Certificação final'
    ],

    certificate: {
      enabled: true,
      title: 'Especialista em Doenças Transmissíveis e Saúde Pública'
    }
  },

  analytics: {

    masteryThreshold: 0.9,

    minimumCorrectAnswers: 85,

    trackResponseTime: true,

    spacedReviewEnabled: true,

    generateFinalReport: true
  }
};

export default STAGE_05;