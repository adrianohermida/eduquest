const STAGE_02 = {
  id: 'stage_02',
  title: 'Doenças Virais',
  icon: '🦠',
  difficulty: 'medium',
  estimatedTime: 25,
  
  summary: {
    readTime: 60,
    content: [
      {
        icon: '🦟',
        title: 'Transmissão Vetorial',
        text: 'Aedes aegypti transmite Dengue, Zika e Chikungunya. Ele é VETOR, não a causa. Eliminar água parada (pneus, garrafas, vasos) é a principal prevenção.'
      },
      {
        icon: '🌬️',
        title: 'Transmissão Respiratória',
        text: 'Gripe, Covid-19, Sarampo: espalham-se por gotículas/aerossóis. Máscara, distância e ventilação reduzem riscos.'
      }
    ],
    flashcards: [
      { q: 'Qual o vetor da Dengue?', a: 'Mosquito Aedes aegypti' },
      { q: 'Zika e gravidez: qual o risco?', a: 'Microcefalia no bebê' }
    ]
  },
  
  questions: [
    {
      id: 38,
      type: 'select',
      difficulty: 'easy',
      prompt: 'O SARS-CoV-2 causa qual doença?',
      options: [
        { text: 'Gripe sazonal', correct: false },
        { text: 'Covid-19', correct: true },
        { text: 'Dengue hemorrágica', correct: false },
        { text: 'Tétano', correct: false }
      ],
      explanation: 'Vírus da família Coronaviridae, identificado em 2019.'
    }
  ]
};