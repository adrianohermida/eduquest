/**
 * MAT STAGE 03 — Multiplicação e Divisão de Frações
 */

const MAT_S03 = {
  id: 'mat_s03',
  title: 'Multiplicação e Divisão',
  icon: '✖️',
  difficulty: 'medium',
  estimatedTime: 15,

  learningObjectives: [
    'Multiplicar frações pelo método numerador × numerador',
    'Simplificar frações antes de multiplicar (simplificação cruzada)',
    'Dividir frações pelo método "inverta e multiplique"',
    'Calcular frações de um número inteiro',
    'Resolver problemas cotidianos com operações de frações'
  ],

  summary: {
    readTime: 4,
    content: [
      {
        icon: '✖️',
        title: 'Multiplicação — Simples!',
        text: 'Multiplique numerador com numerador e denominador com denominador:\n\n2/3 × 3/4 = (2×3)/(3×4) = 6/12 = 1/2\n\n✂️ SIMPLIFICAÇÃO CRUZADA: antes de multiplicar, simplifique em cruz:\n2/3 × 3/4 → risque 3 (3 e 3) → 2/1 × 1/4 = 2/4 = 1/2'
      },
      {
        icon: '÷',
        title: 'Divisão — Inverta e Multiplique!',
        text: 'Para dividir, INVERTA a segunda fração (divisor) e multiplique:\n\n2/3 ÷ 4/5 = 2/3 × 5/4 = 10/12 = 5/6\n\n🔑 Macete: "KFC — Keep, Flip, Change" (mantém, inverte, multiplica)'
      },
      {
        icon: '🍕',
        title: 'Fração DE um número',
        text: '"De" significa multiplicação!\n\n3/4 de 20 = 3/4 × 20 = 60/4 = 15\n\n1/2 de 40 = 20\n2/3 de 30 = 20\n\n💡 Fácil: divida pelo denominador, multiplique pelo numerador!'
      }
    ],

    flashcards: [
      { q: '1/2 × 2/3 = ?',     a: '2/6 = 1/3.' },
      { q: '3/4 ÷ 1/2 = ?',     a: '3/4 × 2/1 = 6/4 = 3/2.' },
      { q: '2/3 de 15 = ?',     a: '(15÷3)×2 = 5×2 = 10.' },
      { q: 'KFC significa?',     a: 'Keep (mantém), Flip (inverte), Change (muda para ×).' },
      { q: 'Como simplificar antes de multiplicar?', a: 'Simplificação cruzada: divida numerador de uma fração com denominador da outra.' }
    ],

    mnemonics: [
      { trigger: 'Multiplicar frações', memory: '"Cima com cima, baixo com baixo. Simples assim!"' },
      { trigger: 'Dividir frações',     memory: '"KFC: Keep the first, Flip the second, Change ÷ to ×"' },
      { trigger: 'Fração DE um número', memory: '"DE = multiplicar. 1/4 DE 20 = 1/4 × 20"' }
    ],

    miniReview: [
      { q: '2/5 × 5/6 = ?',  a: '10/30 = 1/3. (ou por simplificação cruzada: 2/1 × 1/6 = 2/6 = 1/3)' },
      { q: '3/4 ÷ 3/8 = ?',  a: '3/4 × 8/3 = 24/12 = 2.' },
      { q: '3/4 de 24 = ?',  a: '(24÷4)×3 = 18.' }
    ]
  },

  warmup: [
    {
      prompt: '1/3 × 3/5 = ?',
      options: [
        { text: '4/8',  correct: false },
        { text: '1/5',  correct: true  },
        { text: '3/15', correct: false },
        { text: '4/15', correct: false }
      ],
      explanation: '1×3=3, 3×5=15 → 3/15 = 1/5.'
    },
    {
      prompt: 'Para dividir 2/3 ÷ 1/4, o primeiro passo é:',
      options: [
        { text: 'Subtrair as frações',              correct: false },
        { text: 'Inverter 1/4 para 4/1 e multiplicar', correct: true },
        { text: 'Encontrar o MMC',                  correct: false },
        { text: 'Multiplicar os denominadores',      correct: false }
      ],
      explanation: 'Divisão = inverter o divisor e multiplicar (KFC).'
    },
    {
      prompt: '1/2 de 30 = ?',
      options: [
        { text: '60',  correct: false },
        { text: '15',  correct: true  },
        { text: '10',  correct: false },
        { text: '30',  correct: false }
      ],
      explanation: '1/2 × 30 = 30/2 = 15.'
    }
  ],

  guidedPractice: [
    {
      prompt: '🔍 DICA: Inverta o divisor antes de multiplicar.\n\n4/5 ÷ 2/3 = ?',
      options: [
        { text: '8/15', correct: false },
        { text: '6/5',  correct: true  },
        { text: '5/6',  correct: false },
        { text: '12/10',correct: false }
      ],
      explanation: '4/5 × 3/2 = 12/10 = 6/5.'
    },
    {
      prompt: '🔍 DICA: "DE" = multiplicação.\n\n3/5 de 25 = ?',
      options: [
        { text: '5',   correct: false },
        { text: '8',   correct: false },
        { text: '15',  correct: true  },
        { text: '75',  correct: false }
      ],
      explanation: '3/5 × 25 = 75/5 = 15. (ou 25÷5×3 = 5×3 = 15)'
    }
  ],

  questions: [
    {
      prompt: '2/3 × 3/4 = ?',
      options: [
        { text: '1/2',  correct: true  },
        { text: '5/7',  correct: false },
        { text: '6/12', correct: false },
        { text: '2/4',  correct: false }
      ],
      explanation: '2×3=6, 3×4=12 → 6/12 = 1/2.'
    },
    {
      prompt: '5/6 ÷ 5/3 = ?',
      options: [
        { text: '25/18', correct: false },
        { text: '1/2',   correct: true  },
        { text: '15/30', correct: false },
        { text: '3/6',   correct: false }
      ],
      explanation: '5/6 × 3/5 = 15/30 = 1/2.'
    },
    {
      prompt: '3/4 de 40 = ?',
      options: [
        { text: '30',  correct: true  },
        { text: '10',  correct: false },
        { text: '40',  correct: false },
        { text: '120', correct: false }
      ],
      explanation: '40÷4=10, ×3=30. Ou 3/4 × 40 = 120/4 = 30.'
    },
    {
      prompt: '1/4 × 8/3 = ?',
      options: [
        { text: '9/12', correct: false },
        { text: '8/12', correct: false },
        { text: '2/3',  correct: true  },
        { text: '4/3',  correct: false }
      ],
      explanation: '1×8=8, 4×3=12 → 8/12 = 2/3.'
    },
    {
      prompt: '2/5 ÷ 4/10 = ?',
      options: [
        { text: '8/50', correct: false },
        { text: '1',    correct: true  },
        { text: '1/2',  correct: false },
        { text: '2',    correct: false }
      ],
      explanation: '2/5 × 10/4 = 20/20 = 1.'
    },
    {
      prompt: 'Uma caixa tem 60 figurinhas. Carlos pegou 2/3 delas. Quantas ficaram?',
      options: [
        { text: '40',  correct: false },
        { text: '20',  correct: true  },
        { text: '30',  correct: false },
        { text: '15',  correct: false }
      ],
      explanation: 'Carlos pegou 2/3 × 60 = 40. Ficaram 60 − 40 = 20.'
    },
    {
      prompt: '3/7 × 7/9 = ?',
      options: [
        { text: '21/63', correct: false },
        { text: '1/3',   correct: true  },
        { text: '10/16', correct: false },
        { text: '3/9',   correct: false }
      ],
      explanation: 'Simplificação cruzada: 3 cancela com 9 (÷3), 7 cancela com 7 (÷7) → 1/1 × 1/3 = 1/3.'
    },
    {
      prompt: 'Um terreno tem 3/4 de hectare. Dividido igualmente entre 3 filhos, cada um recebe:',
      options: [
        { text: '3/12 = 1/4',  correct: true  },
        { text: '9/4',         correct: false },
        { text: '1/3',         correct: false },
        { text: '3/4',         correct: false }
      ],
      explanation: '3/4 ÷ 3 = 3/4 × 1/3 = 3/12 = 1/4 de hectare cada.'
    },
    {
      prompt: '4/9 × 3/8 = ?',
      options: [
        { text: '12/72', correct: false },
        { text: '1/6',   correct: true  },
        { text: '7/17',  correct: false },
        { text: '4/8',   correct: false }
      ],
      explanation: '4×3=12, 9×8=72 → 12/72 = 1/6 (÷12).'
    },
    {
      prompt: 'Quanto é 2/3 de 2/3?',
      options: [
        { text: '4/3',  correct: false },
        { text: '4/9',  correct: true  },
        { text: '2/3',  correct: false },
        { text: '1/3',  correct: false }
      ],
      explanation: '2/3 × 2/3 = 4/9.'
    }
  ],

  adaptiveReview: [
    {
      prompt: 'DIFÍCIL: Uma fazenda tem 2/3 de km². Se 3/4 da fazenda é plantada, quantos km² são plantados?',
      options: [
        { text: '5/7 km²',  correct: false },
        { text: '1/2 km²',  correct: true  },
        { text: '2/12 km²', correct: false },
        { text: '8/12 km²', correct: false }
      ],
      explanation: '2/3 × 3/4 = 6/12 = 1/2 km².'
    }
  ],

  rewards: { xp: 160, gems: 16, badge: '✖️ Mestre das Operações' },
  completionMessage: '✖️ Multiplicação e divisão de frações? Moleza pra você!',
  nextStage: 'mat_s04'
};

window.MAT_S03 = MAT_S03;
