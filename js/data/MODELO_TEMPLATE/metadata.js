// METADATA TEMPLATE
const METADATA_TEMPLATE = {
  id: 'capX_titulo',
  title: 'Capítulo X: Título do Capítulo',
  icon: '📚',
  color: '#10b981',
  description: 'Descrição do capítulo',
  totalStages: 4,
  estimatedTime: '3-4 horas'
};

// SUMMARY TEMPLATE
const SUMMARY_TEMPLATE = {
  introduction: {
    title: '📖 Introdução',
    content: 'Texto introdutório...',
    keyPoints: ['Ponto 1', 'Ponto 2']
  },
  sections: [
    {
      id: 'secao1',
      title: '1. Título da Seção',
      icon: '📌',
      content: 'Conteúdo completo...',
      table: {
        headers: ['Coluna 1', 'Coluna 2'],
        rows: [['Dado 1', 'Dado 2']]
      }
    }
  ],
  macetes: [
    { text: '"Macete 1"', icon: '💡' }
  ],
  prioridades: ['Tópico 1', 'Tópico 2']
};

// STAGE TEMPLATE
const STAGE_TEMPLATE = {
  id: 'stage_01',
  title: 'Título da Etapa',
  icon: '🎯',
  difficulty: 'easy', // easy, medium, hard
  estimatedTime: 20,
  
  summary: {
    readTime: 45,
    content: [
      { icon: '📌', title: 'Tópico', text: 'Texto...' }
    ],
    flashcards: [
      { q: 'Pergunta?', a: 'Resposta' }
    ],
    miniReview: [
      { q: 'Pergunta rápida?', a: 'Resposta' }
    ]
  },
  
  questions: [
    {
      id: 1,
      type: 'select', // select, binary, fill
      difficulty: 'easy',
      prompt: 'Pergunta?',
      options: [
        { text: 'Opção A', correct: true },
        { text: 'Opção B', correct: false }
      ],
      explanation: 'Explicação da resposta.'
    }
  ]
};