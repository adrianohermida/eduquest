/**
 * MAT STAGE 04 — Decimais e Porcentagem
 */

const MAT_S04 = {
  id: 'mat_s04',
  title: 'Decimais e Porcentagem',
  icon: '💯',
  difficulty: 'medium',
  estimatedTime: 15,

  learningObjectives: [
    'Converter frações em decimais e vice-versa',
    'Entender porcentagem como fração de 100',
    'Calcular porcentagem de um valor',
    'Aplicar porcentagens em problemas do cotidiano',
    'Reconhecer porcentagens comuns: 10%, 25%, 50%, 75%'
  ],

  summary: {
    readTime: 4,
    content: [
      {
        icon: '🔄',
        title: 'Fração ↔ Decimal',
        text: 'Fração → Decimal: divida o numerador pelo denominador\n1/4 = 1÷4 = 0,25\n3/8 = 3÷8 = 0,375\n\nDecimal → Fração: use o denominador como potência de 10\n0,3 = 3/10\n0,75 = 75/100 = 3/4\n0,125 = 125/1000 = 1/8'
      },
      {
        icon: '💯',
        title: 'Porcentagem = Fração de 100',
        text: 'Porcentagem (%) significa "por cem":\n\n25% = 25/100 = 0,25 = 1/4\n50% = 50/100 = 0,5 = 1/2\n10% = 10/100 = 0,1\n1% = 1/100 = 0,01\n\n🔑 Para calcular X% de N: multiplique N por X/100'
      },
      {
        icon: '🛒',
        title: 'Porcentagem no Cotidiano',
        text: 'Exemplos práticos:\n\n10% de R$50 = R$5 (divida por 10!)\n25% de R$80 = R$20 (divida por 4!)\n50% de qualquer número = metade\n\n🧮 Truque: 15% = 10% + 5%. Calcule os dois e some!'
      }
    ],

    flashcards: [
      { q: '1/4 em decimal = ?',     a: '0,25' },
      { q: '0,6 em fração = ?',      a: '6/10 = 3/5' },
      { q: '25% em fração = ?',      a: '25/100 = 1/4' },
      { q: '10% de 80 = ?',          a: '8' },
      { q: 'Como calcular 30% de N?',a: 'N × 30/100 = N × 0,3' }
    ],

    mnemonics: [
      { trigger: 'Porcentagem',    memory: '"Por cento = de cada 100. 25% = 25 de cada 100."' },
      { trigger: '10% fácil',     memory: '"10% = divide por 10. 10% de 70 = 7."' },
      { trigger: '50% = metade',  memory: '"50% = 1/2 = metade. Sempre!"' }
    ],

    miniReview: [
      { q: '3/5 em decimal?',   a: '3÷5 = 0,6' },
      { q: '0,4 em fração?',    a: '4/10 = 2/5' },
      { q: '20% de 150?',       a: '150 × 0,20 = 30' }
    ]
  },

  warmup: [
    {
      prompt: '50% equivale a qual fração?',
      options: [
        { text: '1/4', correct: false },
        { text: '1/2', correct: true  },
        { text: '5/1', correct: false },
        { text: '2/1', correct: false }
      ],
      explanation: '50% = 50/100 = 1/2.'
    },
    {
      prompt: '0,75 em fração simplificada é:',
      options: [
        { text: '7/5',  correct: false },
        { text: '3/4',  correct: true  },
        { text: '75/10',correct: false },
        { text: '1/4',  correct: false }
      ],
      explanation: '0,75 = 75/100 = 3/4 (÷25).'
    },
    {
      prompt: '10% de 90 = ?',
      options: [
        { text: '9',  correct: true  },
        { text: '19', correct: false },
        { text: '90', correct: false },
        { text: '1',  correct: false }
      ],
      explanation: '10% = divide por 10. 90÷10 = 9.'
    }
  ],

  guidedPractice: [
    {
      prompt: '🔍 DICA: Para converter fração em decimal, divida o numerador pelo denominador.\n\n3/4 em decimal = ?',
      options: [
        { text: '0,34', correct: false },
        { text: '0,75', correct: true  },
        { text: '0,43', correct: false },
        { text: '4,3',  correct: false }
      ],
      explanation: '3 ÷ 4 = 0,75.'
    },
    {
      prompt: '🔍 DICA: % = ÷100, depois × valor.\n\n25% de R$ 200 = ?',
      options: [
        { text: 'R$ 25',  correct: false },
        { text: 'R$ 50',  correct: true  },
        { text: 'R$ 75',  correct: false },
        { text: 'R$ 100', correct: false }
      ],
      explanation: '25% = 1/4. 200 ÷ 4 = 50.'
    }
  ],

  questions: [
    {
      prompt: '1/5 em decimal é:',
      options: [
        { text: '0,5',  correct: false },
        { text: '0,2',  correct: true  },
        { text: '0,15', correct: false },
        { text: '1,5',  correct: false }
      ],
      explanation: '1÷5 = 0,2.'
    },
    {
      prompt: '0,125 em fração é:',
      options: [
        { text: '1/4',  correct: false },
        { text: '1/8',  correct: true  },
        { text: '1/12', correct: false },
        { text: '5/8',  correct: false }
      ],
      explanation: '0,125 = 125/1000 = 1/8 (÷125).'
    },
    {
      prompt: '75% de 80 = ?',
      options: [
        { text: '60',  correct: true  },
        { text: '75',  correct: false },
        { text: '40',  correct: false },
        { text: '20',  correct: false }
      ],
      explanation: '75% = 3/4. 80×3/4 = 60.'
    },
    {
      prompt: 'Um produto custava R$120 e teve 30% de desconto. O desconto foi de:',
      options: [
        { text: 'R$ 30',  correct: false },
        { text: 'R$ 36',  correct: true  },
        { text: '30% = 0,3 × 120 = 36', correct: false },
        { text: 'R$ 84',  correct: false }
      ],
      explanation: '30% de 120 = 0,3 × 120 = 36.'
    },
    {
      prompt: 'Qual é 15% de 200?',
      options: [
        { text: '15',  correct: false },
        { text: '30',  correct: true  },
        { text: '25',  correct: false },
        { text: '20',  correct: false }
      ],
      explanation: '10% de 200=20, 5% de 200=10. 15% = 20+10 = 30.'
    },
    {
      prompt: '2/5 em porcentagem é:',
      options: [
        { text: '25%', correct: false },
        { text: '40%', correct: true  },
        { text: '20%', correct: false },
        { text: '45%', correct: false }
      ],
      explanation: '2/5 = 0,4 = 40/100 = 40%.'
    },
    {
      prompt: 'Numa turma de 40 alunos, 35% foram na excursão. Quantos foram?',
      options: [
        { text: '14',  correct: true  },
        { text: '35',  correct: false },
        { text: '16',  correct: false },
        { text: '10',  correct: false }
      ],
      explanation: '35% de 40 = 0,35 × 40 = 14 alunos.'
    },
    {
      prompt: 'R$ 15 é que % de R$ 60?',
      options: [
        { text: '20%', correct: false },
        { text: '25%', correct: true  },
        { text: '15%', correct: false },
        { text: '40%', correct: false }
      ],
      explanation: '15/60 = 1/4 = 25%.'
    },
    {
      prompt: '0,001 em porcentagem é:',
      options: [
        { text: '1%',    correct: false },
        { text: '0,1%',  correct: true  },
        { text: '10%',   correct: false },
        { text: '0,01%', correct: false }
      ],
      explanation: '0,001 = 0,1/100 = 0,1%.'
    },
    {
      prompt: 'Um celular que custava R$ 800 teve aumento de 5%. Qual o novo preço?',
      options: [
        { text: 'R$ 840', correct: true  },
        { text: 'R$ 860', correct: false },
        { text: 'R$ 900', correct: false },
        { text: 'R$ 805', correct: false }
      ],
      explanation: '5% de 800 = 40. Novo preço: 800 + 40 = R$840.'
    }
  ],

  adaptiveReview: [
    {
      prompt: 'DIFÍCIL: Após desconto de 20%, um produto ficou em R$240. Qual era o preço original?',
      options: [
        { text: 'R$ 288', correct: false },
        { text: 'R$ 300', correct: true  },
        { text: 'R$ 260', correct: false },
        { text: 'R$ 320', correct: false }
      ],
      explanation: '240 = 80% do original. Original = 240 ÷ 0,8 = R$300.'
    }
  ],

  rewards: { xp: 160, gems: 16, badge: '💯 Mestre do %' },
  completionMessage: '💯 Você entende decimais e porcentagens melhor que muitos adultos!',
  nextStage: 'mat_s05'
};

window.MAT_S04 = MAT_S04;
