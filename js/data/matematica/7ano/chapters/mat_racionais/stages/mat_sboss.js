/**
 * MAT STAGE BOSS — Chefe Irracional: Grande Revisão
 */

const MAT_SBOSS = {
  id: 'mat_sboss',
  title: 'Chefe Irracional',
  icon: '💀',
  difficulty: 'boss',
  estimatedTime: 20,
  isBoss: true,

  learningObjectives: [
    'Integrar todos os conceitos de números racionais',
    'Resolver problemas mistos com frações, decimais e porcentagens',
    'Aplicar operações com números negativos',
    'Comparar e ordenar racionais em contextos variados',
    'Demonstrar domínio completo do capítulo'
  ],

  summary: {
    readTime: 3,
    content: [
      {
        icon: '💀',
        title: 'Aviso do Chefe!',
        text: 'Você chegou ao CHEFE DO CAPÍTULO! Este é o Chefe Irracional — o ser que odeia frações e quer confundir tudo!\n\n⚔️ As perguntas cobrem TODOS os 6 estágios:\n• Definição de racionais\n• Soma/Subtração de frações\n• Multiplicação/Divisão\n• Decimais e porcentagens\n• Números negativos\n• Comparação e ordenação\n\n🎯 Mostre que você domina os números racionais!'
      },
      {
        icon: '🧠',
        title: 'Revisão Rápida',
        text: 'Lembre dos principais conceitos:\n\n• Racional = p/q (q≠0)\n• Mesmo denominador → some numeradores\n• Denominadores diferentes → use MMC\n• Divisão de frações → KFC (inverter e multiplicar)\n• % = ÷100 depois ×valor\n• (−)×(−)=(+), (−)×(+)=(−)\n• Para comparar: mesmo denominador ou decimal'
      }
    ],

    flashcards: [
      { q: '2/3 + 3/4 = ?',          a: 'MMC=12: 8/12+9/12=17/12.' },
      { q: '3/5 × 5/9 = ?',          a: '15/45 = 1/3.' },
      { q: '20% de 85 = ?',           a: '17.' },
      { q: '(−3) × (−4) + (−2) = ?', a: '12 + (−2) = 10.' },
      { q: 'Qual maior: 3/5 ou 5/8?', a: '3/5=24/40, 5/8=25/40 → 5/8 > 3/5.' }
    ],

    mnemonics: [
      { trigger: 'Kit de Sobrevivência', memory: '"MMC para somar, inverte para dividir, ÷100 para %, dois negativos = positivo."' }
    ],

    miniReview: [
      { q: '1/3 ÷ 2/9 = ?',     a: '1/3 × 9/2 = 9/6 = 3/2.' },
      { q: '15% de 60 = ?',     a: '9.' },
      { q: '(−5) + 3 − (−2)?', a: '−5 + 3 + 2 = 0.' }
    ]
  },

  warmup: [
    {
      prompt: '5/6 − 1/4 = ?',
      options: [
        { text: '4/2',   correct: false },
        { text: '7/12',  correct: true  },
        { text: '9/12',  correct: false },
        { text: '4/10',  correct: false }
      ],
      explanation: 'MMC(6,4)=12. 10/12 − 3/12 = 7/12.'
    },
    {
      prompt: '2/3 × 9/4 = ?',
      options: [
        { text: '18/12 = 3/2', correct: true  },
        { text: '11/12',       correct: false },
        { text: '2/4',         correct: false },
        { text: '3/4',         correct: false }
      ],
      explanation: '2×9=18, 3×4=12 → 18/12 = 3/2.'
    },
    {
      prompt: '(−6) × (−3) ÷ (+2) = ?',
      options: [
        { text: '−9',  correct: false },
        { text: '+9',  correct: true  },
        { text: '+36', correct: false },
        { text: '−36', correct: false }
      ],
      explanation: '(−6)×(−3)=18, 18÷2=9. Resultado: +9.'
    }
  ],

  guidedPractice: [
    {
      prompt: '🔍 MISTO: Combine porcentagem e fração.\n\n40% de 3/4 = ?',
      options: [
        { text: '0,3',  correct: true  },
        { text: '0,4',  correct: false },
        { text: '3/10', correct: false },
        { text: '1/4',  correct: false }
      ],
      explanation: '40% = 2/5. 2/5 × 3/4 = 6/20 = 3/10 = 0,3.'
    },
    {
      prompt: '🔍 NEGATIVO + FRAÇÃO:\n\n(−1/2) + (3/4) = ?',
      options: [
        { text: '1/4',  correct: true  },
        { text: '−1/4', correct: false },
        { text: '1/2',  correct: false },
        { text: '2/6',  correct: false }
      ],
      explanation: 'MMC=4. −2/4 + 3/4 = 1/4.'
    }
  ],

  questions: [
    {
      prompt: '3/8 + 1/4 + 1/2 = ?',
      options: [
        { text: '9/8',  correct: true  },
        { text: '5/14', correct: false },
        { text: '5/8',  correct: false },
        { text: '1',    correct: false }
      ],
      explanation: 'MMC=8. 3/8+2/8+4/8=9/8.'
    },
    {
      prompt: '5/6 ÷ 5/12 = ?',
      options: [
        { text: '25/72', correct: false },
        { text: '2',     correct: true  },
        { text: '1/2',   correct: false },
        { text: '10/6',  correct: false }
      ],
      explanation: '5/6 × 12/5 = 60/30 = 2.'
    },
    {
      prompt: 'Um produto custa R$250. Após desconto de 15%, quanto custará?',
      options: [
        { text: 'R$ 215', correct: false },
        { text: 'R$ 212,50', correct: true },
        { text: 'R$ 235', correct: false },
        { text: 'R$ 200', correct: false }
      ],
      explanation: '15% de 250 = 37,50. 250 − 37,50 = R$ 212,50.'
    },
    {
      prompt: '(−2/3) × (−3/4) = ?',
      options: [
        { text: '−1/2', correct: false },
        { text: '+1/2', correct: true  },
        { text: '−5/7', correct: false },
        { text: '+5/7', correct: false }
      ],
      explanation: '(−)×(−)=(+). 2/3 × 3/4 = 6/12 = 1/2. Resultado: +1/2.'
    },
    {
      prompt: 'Qual é maior: 7/10 ou 3/4?',
      options: [
        { text: '7/10',        correct: false },
        { text: '3/4',         correct: true  },
        { text: 'São iguais',  correct: false },
        { text: '7/10 > 3/4', correct: false }
      ],
      explanation: 'MMC=20. 14/20 vs 15/20. 3/4 = 15/20 > 14/20 = 7/10.'
    },
    {
      prompt: 'Uma turma tem 30 alunos. 2/5 são meninas. Quantas meninas há?',
      options: [
        { text: '10', correct: false },
        { text: '12', correct: true  },
        { text: '15', correct: false },
        { text: '18', correct: false }
      ],
      explanation: '2/5 de 30 = 2/5 × 30 = 60/5 = 12 meninas.'
    },
    {
      prompt: '0,4 + 3/5 = ?',
      options: [
        { text: '0,5',  correct: false },
        { text: '1,0',  correct: true  },
        { text: '0,7',  correct: false },
        { text: '3,9',  correct: false }
      ],
      explanation: '0,4 = 2/5. 2/5 + 3/5 = 5/5 = 1.'
    },
    {
      prompt: 'Temperatura caiu de 4°C para −6°C. Quantos graus caiu?',
      options: [
        { text: '2°C',  correct: false },
        { text: '10°C', correct: true  },
        { text: '6°C',  correct: false },
        { text: '4°C',  correct: false }
      ],
      explanation: '4 − (−6) = 4 + 6 = 10°C de queda.'
    },
    {
      prompt: 'Qual fração está entre 1/3 e 1/2?',
      options: [
        { text: '1/4', correct: false },
        { text: '2/5', correct: true  },
        { text: '2/3', correct: false },
        { text: '1/6', correct: false }
      ],
      explanation: '1/3≈0,333, 2/5=0,4, 1/2=0,5. 0,333 < 0,4 < 0,5 ✅'
    },
    {
      prompt: 'Se 3/4 de uma herança é R$ 90.000, qual é o total da herança?',
      options: [
        { text: 'R$ 120.000', correct: true  },
        { text: 'R$ 67.500',  correct: false },
        { text: 'R$ 135.000', correct: false },
        { text: 'R$ 360.000', correct: false }
      ],
      explanation: '3/4 × total = 90.000 → total = 90.000 × 4/3 = 120.000.'
    }
  ],

  adaptiveReview: [
    {
      prompt: 'SUPREMO: (1/2 − 2/3) × (−6) = ?',
      options: [
        { text: '1',    correct: true  },
        { text: '−1',   correct: false },
        { text: '−7',   correct: false },
        { text: '7/6',  correct: false }
      ],
      explanation: '1/2−2/3 = 3/6−4/6 = −1/6. (−1/6)×(−6) = 6/6 = 1.'
    }
  ],

  rewards: { xp: 250, gems: 25, badge: '💀 Vencedor do Irracional' },
  completionMessage: '💀 Você derrotou o Chefe Irracional! Agora enfrente o Exame Final!',
  nextStage: 'mat_sfinal'
};

window.MAT_SBOSS = MAT_SBOSS;
