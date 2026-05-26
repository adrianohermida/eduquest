/**
 * MAT STAGE 06 — Comparação e Ordenação de Racionais
 */

const MAT_S06 = {
  id: 'mat_s06',
  title: 'Comparação e Ordenação',
  icon: '📊',
  difficulty: 'medium',
  estimatedTime: 12,

  learningObjectives: [
    'Comparar frações com denominadores iguais e diferentes',
    'Ordenar frações em ordem crescente e decrescente',
    'Comparar racionais na forma decimal',
    'Resolver problemas que envolvem comparação de quantidades',
    'Identificar frações equivalentes'
  ],

  summary: {
    readTime: 3,
    content: [
      {
        icon: '⚖️',
        title: 'Comparar Frações',
        text: 'Mesmo denominador: maior numerador = maior fração\n3/7 > 2/7 (3 > 2)\n\nDenominadores diferentes: transforme para o mesmo denominador (MMC)\n1/3 vs 2/5 → MMC=15 → 5/15 vs 6/15 → 2/5 > 1/3\n\n💡 Ou converta para decimal e compare!'
      },
      {
        icon: '📏',
        title: 'Frações Equivalentes',
        text: 'Frações equivalentes representam o mesmo valor:\n1/2 = 2/4 = 3/6 = 4/8 = 50/100\n\nPara verificar equivalência: MULTIPLIQUE EM CRUZ:\n1/2 = 3/6 → 1×6 = 2×3 → 6 = 6 ✅\n1/2 ≠ 2/5 → 1×5 ≠ 2×2 → 5 ≠ 4 ✅'
      },
      {
        icon: '📈',
        title: 'Ordenação Crescente/Decrescente',
        text: 'Para ordenar frações:\n1. Transforme todas com o mesmo denominador (MMC)\n2. Compare os numeradores\n3. Ordene\n\nExemplo: 1/2, 1/3, 2/5\nMMC=30: 15/30, 10/30, 12/30\nOrdem crescente: 1/3 < 2/5 < 1/2'
      }
    ],

    flashcards: [
      { q: 'Como comparar 3/4 e 5/6?',       a: 'MMC=12. 9/12 vs 10/12. 5/6 > 3/4.' },
      { q: 'O que são frações equivalentes?', a: 'Frações com o mesmo valor. Ex: 1/2 = 2/4.' },
      { q: 'Como verificar equivalência?',    a: 'Multiplique em cruz: a/b = c/d → a×d = b×c.' },
      { q: 'Ordene: 1/4, 1/2, 1/3',          a: '1/4 < 1/3 < 1/2 (MMC=12: 3<4<6).' }
    ],

    mnemonics: [
      { trigger: 'Frações equivalentes',  memory: '"Multiplique cima e baixo pelo mesmo número: 1/2 × 3/3 = 3/6."' },
      { trigger: 'Comparar com decimais', memory: '"Divida e compare: 3/4=0,75 · 2/3=0,666. 3/4 > 2/3."' }
    ],

    miniReview: [
      { q: 'Qual é maior: 3/5 ou 4/7?', a: 'MMC=35: 21/35 vs 20/35. 3/5 > 4/7.' },
      { q: '2/6 e 1/3 são equivalentes?', a: 'Sim: 2×3 = 6×1 → 6 = 6. ✅' }
    ]
  },

  warmup: [
    {
      prompt: 'Qual é maior: 3/4 ou 5/8?',
      options: [
        { text: '5/8', correct: false },
        { text: '3/4', correct: true  },
        { text: 'São iguais', correct: false },
        { text: 'Impossível comparar', correct: false }
      ],
      explanation: 'MMC(4,8)=8. 3/4=6/8 > 5/8. Portanto 3/4 é maior.'
    },
    {
      prompt: '1/3 e 2/6 são:',
      options: [
        { text: 'Diferentes',   correct: false },
        { text: 'Equivalentes', correct: true  },
        { text: '1/3 é maior',  correct: false },
        { text: '2/6 é maior',  correct: false }
      ],
      explanation: '2/6 = 1/3 (simplificando ÷2). Ou cruzado: 1×6 = 3×2 → 6=6.'
    },
    {
      prompt: 'Ordene do menor ao maior: 1/2, 1/4, 1/3',
      options: [
        { text: '1/2 < 1/3 < 1/4',  correct: false },
        { text: '1/4 < 1/3 < 1/2',  correct: true  },
        { text: '1/3 < 1/4 < 1/2',  correct: false },
        { text: '1/4 = 1/3 = 1/2',  correct: false }
      ],
      explanation: 'Mesmo numerador: maior denominador = menor fração. 1/4 < 1/3 < 1/2.'
    }
  ],

  guidedPractice: [
    {
      prompt: '🔍 DICA: Mesmo numerador → maior denominador = MENOR fração.\n\nQual é menor: 2/3 ou 2/7?',
      options: [
        { text: '2/3', correct: false },
        { text: '2/7', correct: true  },
        { text: 'São iguais', correct: false },
        { text: 'Depende', correct: false }
      ],
      explanation: 'Mesmo numerador (2): maior denominador (7) = fração menor.'
    },
    {
      prompt: '🔍 DICA: Multiplique em cruz para verificar equivalência.\n\n3/4 e 9/12 são equivalentes?',
      options: [
        { text: 'Não',  correct: false },
        { text: 'Sim',  correct: true  },
        { text: 'Só se simplificadas', correct: false },
        { text: 'Impossível dizer', correct: false }
      ],
      explanation: '3×12 = 36 e 4×9 = 36. São equivalentes!'
    }
  ],

  questions: [
    {
      prompt: 'Qual é maior: 2/3 ou 3/4?',
      options: [
        { text: '2/3', correct: false },
        { text: '3/4', correct: true  },
        { text: 'São iguais', correct: false },
        { text: '3/4 < 2/3', correct: false }
      ],
      explanation: 'MMC(3,4)=12. 8/12 vs 9/12. 3/4 > 2/3.'
    },
    {
      prompt: 'Qual par é equivalente?',
      options: [
        { text: '2/3 e 4/9', correct: false },
        { text: '3/5 e 6/10',correct: true  },
        { text: '1/4 e 2/6', correct: false },
        { text: '5/8 e 3/4', correct: false }
      ],
      explanation: '3/5 = 6/10 (×2). Cruzado: 3×10 = 5×6 → 30=30. ✅'
    },
    {
      prompt: 'Ordene crescente: 1/6, 1/2, 1/4',
      options: [
        { text: '1/2 < 1/4 < 1/6', correct: false },
        { text: '1/6 < 1/4 < 1/2', correct: true  },
        { text: '1/4 < 1/6 < 1/2', correct: false },
        { text: '1/2 < 1/6 < 1/4', correct: false }
      ],
      explanation: 'Mesmo numerador: maior denominador = menor. 1/6 < 1/4 < 1/2.'
    },
    {
      prompt: 'Qual fração está ENTRE 1/2 e 3/4?',
      options: [
        { text: '1/4',  correct: false },
        { text: '2/3',  correct: true  },
        { text: '4/5',  correct: false },
        { text: '1/3',  correct: false }
      ],
      explanation: '1/2 = 0,5 e 3/4 = 0,75. 2/3 ≈ 0,667. Portanto 0,5 < 0,667 < 0,75. ✅'
    },
    {
      prompt: 'Qual afirmação sobre 4/6 e 2/3 é verdadeira?',
      options: [
        { text: '4/6 > 2/3', correct: false },
        { text: '4/6 < 2/3', correct: false },
        { text: '4/6 = 2/3', correct: true  },
        { text: 'Não é possível comparar', correct: false }
      ],
      explanation: '4/6 = 2/3 (÷2). São equivalentes.'
    },
    {
      prompt: 'Ana caminhou 3/5 km e Bruno 7/10 km. Quem caminhou mais?',
      options: [
        { text: 'Ana',          correct: false },
        { text: 'Bruno',        correct: true  },
        { text: 'A mesma distância', correct: false },
        { text: 'Impossível dizer',  correct: false }
      ],
      explanation: '3/5 = 6/10. Bruno = 7/10 > 6/10. Bruno caminhou mais.'
    },
    {
      prompt: 'Qual é MENOR que 1/2?',
      options: [
        { text: '3/4',  correct: false },
        { text: '5/6',  correct: false },
        { text: '3/8',  correct: true  },
        { text: '2/3',  correct: false }
      ],
      explanation: '3/8 = 0,375 < 0,5. Os demais são maiores que 1/2.'
    },
    {
      prompt: 'Crie uma fração equivalente a 2/5 com denominador 15:',
      options: [
        { text: '4/15',  correct: false },
        { text: '6/15',  correct: true  },
        { text: '3/15',  correct: false },
        { text: '10/15', correct: false }
      ],
      explanation: '15÷5=3. 2/5 × 3/3 = 6/15.'
    },
    {
      prompt: 'Qual par de frações NÃO é equivalente?',
      options: [
        { text: '1/2 e 3/6',  correct: false },
        { text: '2/4 e 4/8',  correct: false },
        { text: '3/5 e 5/9',  correct: true  },
        { text: '4/10 e 2/5', correct: false }
      ],
      explanation: '3×9=27 ≠ 5×5=25. Portanto 3/5 ≠ 5/9.'
    },
    {
      prompt: 'Numa corrida, Carla completou 2/3 do percurso, Pedro 3/4. Quem está mais avançado?',
      options: [
        { text: 'Carla',              correct: false },
        { text: 'Pedro',              correct: true  },
        { text: 'Estão no mesmo ponto', correct: false },
        { text: 'Depende da distância', correct: false }
      ],
      explanation: 'MMC(3,4)=12. 2/3=8/12, 3/4=9/12. Pedro (9/12) está mais avançado.'
    }
  ],

  adaptiveReview: [
    {
      prompt: 'DIFÍCIL: Ordene do menor ao maior: 5/6, 7/8, 3/4, 11/12',
      options: [
        { text: '3/4 < 5/6 < 7/8 < 11/12', correct: true  },
        { text: '3/4 < 7/8 < 5/6 < 11/12', correct: false },
        { text: '5/6 < 3/4 < 7/8 < 11/12', correct: false },
        { text: '11/12 < 7/8 < 5/6 < 3/4', correct: false }
      ],
      explanation: 'MMC=24: 18/24 < 20/24 < 21/24 < 22/24 → 3/4 < 5/6 < 7/8 < 11/12.'
    }
  ],

  rewards: { xp: 150, gems: 15, badge: '📊 Comparador Racional' },
  completionMessage: '📊 Você sabe comparar e ordenar racionais como um cientista!',
  nextStage: 'mat_sboss'
};

window.MAT_S06 = MAT_S06;
