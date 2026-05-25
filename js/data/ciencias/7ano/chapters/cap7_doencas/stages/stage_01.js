const STAGE_01 = {
  id: 'stage_01',
  title: 'Imunidade e Vacinas',
  icon: '🛡️',
  difficulty: 'easy',
  estimatedTime: 20, // minutos
  
  summary: {
    readTime: 45, // segundos
    content: [
      {
        icon: '🦠',
        title: 'Defesas do Corpo',
        text: 'Anticorpos são proteínas produzidas pelo sistema imune que atuam como soldados contra invasores. Quando um microrganismo entra no corpo, os anticorpos se ligam a ele e ajudam a destruí-lo.'
      },
      {
        icon: '💉',
        title: 'Vacina vs Soro',
        text: '💡 Vacina = PREVENÇÃO: estimula o corpo a produzir anticorpos. Proteção duradoura.\n\n🧪 Soro = TRATAMENTO: contém anticorpos prontos. Ação rápida e temporária.'
      },
      {
        icon: '🌍',
        title: 'Epidemia, Endemia e Pandemia',
        text: '📈 Epidemia = aumento rápido de casos em uma região.\n📍 Endemia = doença constante em determinada região.\n🌐 Pandemia = doença espalhada pelo planeta inteiro (PAN = todos).'
      }
    ],
    flashcards: [
      { q: 'O que são anticorpos?', a: 'Proteínas produzidas pelo sistema imune para combater microrganismos invasores.' },
      { q: 'Qual a diferença entre vacina e soro?', a: 'Vacina previne (estimula produção). Soro trata (anticorpos prontos).' },
      { q: 'O que define uma pandemia?', a: 'Doença espalhada pelo planeta inteiro.' }
    ],
    miniReview: [
      { q: 'Vacina serve para prevenir ou tratar?', a: 'Prevenir' },
      { q: 'Soro contém anticorpos prontos ou estimula produção?', a: 'Contém anticorpos prontos' },
      { q: 'PANdemia significa doença em quantos lugares?', a: 'No planeta inteiro' }
    ]
  },
  
  questions: [
    {
      id: 1,
      type: 'select',
      difficulty: 'easy',
      prompt: 'Anticorpos são:',
      options: [
        { text: 'Proteínas de defesa produzidas pelo sistema imune', correct: true },
        { text: 'Vírus enfraquecidos usados em vacinas', correct: false },
        { text: 'Bactérias benéficas do intestino', correct: false },
        { text: 'Minerais essenciais da alimentação', correct: false }
      ],
      explanation: 'Anticorpos são proteínas do sistema imune que se ligam a microrganismos e ajudam a destruí-los.'
    },
    {
      id: 2,
      type: 'binary',
      difficulty: 'easy',
      prompt: 'A vacina serve para TRATAR doenças agudas?',
      correct: false,
      explanation: 'Vacinas são para PREVENIR. O Soro é para tratar.'
    },
    {
      id: 3,
      type: 'fill',
      difficulty: 'easy',
      prompt: 'Complete: O soro terapêutico contém ______.',
      options: [
        { text: 'Anticorpos prontos', correct: true },
        { text: 'Antibióticos', correct: false },
        { text: 'Vírus vivos', correct: false }
      ],
      explanation: 'O soro fornece anticorpos prontos para ação imediata.'
    }
  ]
};