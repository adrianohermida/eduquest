/**
 * MAT STAGE 02 — Soma e Subtração de Frações
 */

const MAT_S02 = {
  id: 'mat_s02',
  title: 'Soma e Subtração de Frações',
  icon: '➕',
  difficulty: 'easy',
  estimatedTime: 15,

  learningObjectives: [
    'Somar frações com mesmo denominador',
    'Encontrar o MMC para frações com denominadores diferentes',
    'Subtrair frações com e sem mesmo denominador',
    'Simplificar frações resultantes',
    'Operar com números mistos'
  ],

  summary: {
    readTime: 5,
    content: [
      {
        icon: '✅',
        title: 'Mesmo Denominador — Fácil!',
        text: 'Quando os denominadores são iguais, some ou subtraia apenas os numeradores:\n\n2/7 + 3/7 = 5/7\n8/9 − 3/9 = 5/9\n\n🔑 O denominador NÃO muda — ele diz "o tamanho das partes".'
      },
      {
        icon: '🔧',
        title: 'Denominadores Diferentes — Use o MMC!',
        text: 'Passo a passo:\n1. Calcule o MMC dos denominadores\n2. Transforme cada fração equivalente com o MMC\n3. Some ou subtraia os numeradores\n\nExemplo: 1/4 + 1/6\nMMC(4,6) = 12\n1/4 = 3/12 · 1/6 = 2/12\n3/12 + 2/12 = 5/12'
      },
      {
        icon: '✂️',
        title: 'Simplificar o Resultado',
        text: 'Sempre simplifique a fração final dividindo pelo MDC:\n\n6/12 → MDC(6,12)=6 → 6÷6 / 12÷6 = 1/2\n\n💡 Macete: divida numerador e denominador pelo mesmo número até não dar mais.'
      },
      {
        icon: '🔀',
        title: 'Números Mistos',
        text: 'Número misto = inteiro + fração (ex: 2 e 1/3)\n\nPara operar: converta para fração imprópria primeiro!\n2 e 1/3 = (2×3 + 1)/3 = 7/3\n\nDepois opere normalmente.'
      }
    ],

    flashcards: [
      { q: 'Como somar 2/5 + 1/5?',          a: '(2+1)/5 = 3/5. Mesmo denominador: some numeradores.' },
      { q: 'Como somar 1/3 + 1/4?',          a: 'MMC(3,4)=12. 4/12+3/12 = 7/12.' },
      { q: 'O que é MMC?',                   a: 'Mínimo Múltiplo Comum — menor número divisível por ambos.' },
      { q: 'Como simplificar 6/8?',          a: 'MDC(6,8)=2. 6÷2 / 8÷2 = 3/4.' },
      { q: '2 e 3/4 como fração imprópria?', a: '(2×4+3)/4 = 11/4.' }
    ],

    mnemonics: [
      { trigger: 'Mesmo denominador',  memory: '"Partes do mesmo tamanho → some só as quantidades (numeradores)!"' },
      { trigger: 'MMC',                memory: '"Múltiplo Mais Comum — o primeiro número que ambos dividem."' },
      { trigger: 'Número misto',       memory: '"Converta antes! Inteiro × denominador + numerador, sobre o denominador."' }
    ],

    miniReview: [
      { q: '3/8 + 2/8 = ?',   a: '5/8.' },
      { q: '1/2 + 1/3 = ?',   a: 'MMC=6: 3/6 + 2/6 = 5/6.' },
      { q: '5/6 − 1/3 = ?',   a: '5/6 − 2/6 = 3/6 = 1/2.' }
    ]
  },

  warmup: [
    {
      prompt: '1/5 + 2/5 = ?',
      options: [
        { text: '3/10', correct: false },
        { text: '3/5',  correct: true  },
        { text: '2/5',  correct: false },
        { text: '3/25', correct: false }
      ],
      explanation: 'Mesmo denominador: some os numeradores. 1+2=3, denominador 5.'
    },
    {
      prompt: 'Para somar 1/4 + 1/3, qual é o denominador comum?',
      options: [
        { text: '7',   correct: false },
        { text: '12',  correct: true  },
        { text: '6',   correct: false },
        { text: '4',   correct: false }
      ],
      explanation: 'MMC(4,3) = 12. É o menor múltiplo comum de 4 e 3.'
    },
    {
      prompt: '6/8 simplificado é:',
      options: [
        { text: '3/4',  correct: true  },
        { text: '6/4',  correct: false },
        { text: '2/3',  correct: false },
        { text: '3/8',  correct: false }
      ],
      explanation: 'MDC(6,8) = 2. 6÷2=3, 8÷2=4 → 3/4.'
    }
  ],

  guidedPractice: [
    {
      prompt: '🔍 DICA: 1/2 + 1/4 — MMC(2,4)=4. Transforme 1/2 em quartos.\n\n1/2 + 1/4 = ?',
      options: [
        { text: '2/6', correct: false },
        { text: '3/4', correct: true  },
        { text: '1/4', correct: false },
        { text: '2/4', correct: false }
      ],
      explanation: '1/2 = 2/4. Então 2/4 + 1/4 = 3/4.'
    },
    {
      prompt: '🔍 DICA: Subtrair frações diferentes — encontre o MMC primeiro.\n\n3/4 − 1/3 = ?',
      options: [
        { text: '2/1',   correct: false },
        { text: '5/12',  correct: true  },
        { text: '2/12',  correct: false },
        { text: '8/12',  correct: false }
      ],
      explanation: 'MMC(4,3)=12. 9/12 − 4/12 = 5/12.'
    }
  ],

  questions: [
    {
      prompt: '3/7 + 2/7 = ?',
      options: [
        { text: '5/7',  correct: true  },
        { text: '5/14', correct: false },
        { text: '6/7',  correct: false },
        { text: '1/7',  correct: false }
      ],
      explanation: 'Mesmo denominador: 3+2=5, mantém 7.'
    },
    {
      prompt: '1/2 + 1/3 = ?',
      options: [
        { text: '2/5',  correct: false },
        { text: '5/6',  correct: true  },
        { text: '1/6',  correct: false },
        { text: '2/6',  correct: false }
      ],
      explanation: 'MMC(2,3)=6. 3/6 + 2/6 = 5/6.'
    },
    {
      prompt: '7/8 − 3/8 = ?',
      options: [
        { text: '4/8 = 1/2', correct: true  },
        { text: '10/8',      correct: false },
        { text: '4/16',      correct: false },
        { text: '3/8',       correct: false }
      ],
      explanation: '7−3=4, denominador 8. 4/8 = 1/2 simplificando.'
    },
    {
      prompt: '1/4 + 2/3 = ?',
      options: [
        { text: '3/7',   correct: false },
        { text: '11/12', correct: true  },
        { text: '3/12',  correct: false },
        { text: '8/12',  correct: false }
      ],
      explanation: 'MMC(4,3)=12. 3/12 + 8/12 = 11/12.'
    },
    {
      prompt: '5/6 − 1/4 = ?',
      options: [
        { text: '4/2',   correct: false },
        { text: '7/12',  correct: true  },
        { text: '4/10',  correct: false },
        { text: '9/12',  correct: false }
      ],
      explanation: 'MMC(6,4)=12. 10/12 − 3/12 = 7/12.'
    },
    {
      prompt: '2 e 1/3 como fração imprópria é:',
      options: [
        { text: '3/3',  correct: false },
        { text: '5/3',  correct: false },
        { text: '7/3',  correct: true  },
        { text: '6/3',  correct: false }
      ],
      explanation: '2×3 + 1 = 7. Portanto 7/3.'
    },
    {
      prompt: '1 e 1/2 + 1 e 1/2 = ?',
      options: [
        { text: '2 e 2/4', correct: false },
        { text: '3',       correct: true  },
        { text: '2 e 1/2', correct: false },
        { text: '4',       correct: false }
      ],
      explanation: '3/2 + 3/2 = 6/2 = 3.'
    },
    {
      prompt: 'Simplificado ao máximo, 12/18 = ?',
      options: [
        { text: '6/9', correct: false },
        { text: '2/3', correct: true  },
        { text: '4/6', correct: false },
        { text: '3/4', correct: false }
      ],
      explanation: 'MDC(12,18)=6. 12÷6=2, 18÷6=3 → 2/3.'
    },
    {
      prompt: 'Pedro comeu 1/4 de uma pizza e João comeu 1/3. Juntos comeram:',
      options: [
        { text: '2/7',   correct: false },
        { text: '7/12',  correct: true  },
        { text: '4/12',  correct: false },
        { text: '1/2',   correct: false }
      ],
      explanation: 'MMC(4,3)=12. 3/12 + 4/12 = 7/12 da pizza.'
    },
    {
      prompt: 'Numa receita pede 3/4 xícara, mas você já colocou 1/2. Quanto falta?',
      options: [
        { text: '1/4',  correct: true  },
        { text: '1/2',  correct: false },
        { text: '1/8',  correct: false },
        { text: '2/4',  correct: false }
      ],
      explanation: '3/4 − 1/2 = 3/4 − 2/4 = 1/4.'
    }
  ],

  adaptiveReview: [
    {
      prompt: 'DIFÍCIL: 2/3 + 5/4 − 1/6 = ?',
      options: [
        { text: '5/4',   correct: false },
        { text: '15/12', correct: false },
        { text: '7/4',   correct: true  },
        { text: '9/12',  correct: false }
      ],
      explanation: 'MMC(3,4,6)=12. 8/12 + 15/12 − 2/12 = 21/12 = 7/4.'
    }
  ],

  rewards: { xp: 140, gems: 14, badge: '➕ Somador de Frações' },
  completionMessage: '➕ Excelente! Você domina soma e subtração de frações!',
  nextStage: 'mat_s03'
};

window.MAT_S02 = MAT_S02;
