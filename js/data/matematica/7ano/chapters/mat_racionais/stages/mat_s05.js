/**
 * MAT STAGE 05 — Números Negativos
 */

const MAT_S05 = {
  id: 'mat_s05',
  title: 'Números Negativos',
  icon: '❄️',
  difficulty: 'medium',
  estimatedTime: 15,

  learningObjectives: [
    'Compreender o que são números negativos e onde aparecem',
    'Posicionar negativos na reta numérica',
    'Somar e subtrair números negativos',
    'Multiplicar e dividir números com sinais',
    'Calcular o valor absoluto (módulo)'
  ],

  summary: {
    readTime: 4,
    content: [
      {
        icon: '🌡️',
        title: 'Negativos no Cotidiano',
        text: 'Números negativos aparecem em:\n• Temperatura: -10°C (frio!)\n• Dívida: -R$50 (você deve)\n• Altitude: -100m (abaixo do mar)\n• Placar: -3 no golf (abaixo do par)\n\nNa reta: esquerda de 0 = negativos, direita = positivos.'
      },
      {
        icon: '➕',
        title: 'Regra dos Sinais — Soma/Subtração',
        text: 'Mesmos sinais → some e mantém o sinal\n(+3) + (+4) = +7\n(-3) + (-4) = -7\n\nSinais diferentes → subtraia e fica com o sinal do maior\n(+5) + (-3) = +2\n(-8) + (+3) = -5\n\n💡 Subtrair negativo = somar positivo!\n5 − (−3) = 5 + 3 = 8'
      },
      {
        icon: '✖️',
        title: 'Regra dos Sinais — Multiplicação/Divisão',
        text: 'Regra simples:\n• (+) × (+) = (+)  →  3 × 4 = 12\n• (−) × (−) = (+)  →  (−3) × (−4) = 12\n• (+) × (−) = (−)  →  3 × (−4) = −12\n• (−) × (+) = (−)  →  (−3) × 4 = −12\n\n🔑 Mesmos sinais = positivo. Sinais diferentes = negativo.'
      },
      {
        icon: '📏',
        title: 'Valor Absoluto (Módulo)',
        text: 'O módulo |n| é a distância de n ao zero — sempre positivo!\n\n|−5| = 5\n|+7| = 7\n|0| = 0\n\n🔑 Módulo ignora o sinal.'
      }
    ],

    flashcards: [
      { q: '(-3) + (-5) = ?',    a: '-8 (mesmo sinal, soma e mantém).' },
      { q: '(-3) × (-5) = ?',    a: '+15 (sinais iguais = positivo).' },
      { q: '(-3) × (+5) = ?',    a: '-15 (sinais diferentes = negativo).' },
      { q: '5 − (−3) = ?',       a: '5 + 3 = 8 (subtrair negativo = somar positivo).' },
      { q: '|−12| = ?',          a: '12 (módulo é sempre positivo).' }
    ],

    mnemonics: [
      { trigger: 'Regra dos sinais ×÷', memory: '"− × − = + (dois negativos fazem positivo). − × + = − (diferentes = negativo)."' },
      { trigger: 'Subtrair negativo',   memory: '"Menos com menos = mais! 5 − (−3) = 5 + 3 = 8."' },
      { trigger: 'Módulo',             memory: '"Módulo = distância ao zero. Nunca é negativo!"' }
    ],

    miniReview: [
      { q: '(-7) + 4 = ?',      a: '-3.' },
      { q: '(-4) × (-3) = ?',   a: '+12.' },
      { q: '10 − (−6) = ?',     a: '16.' }
    ]
  },

  warmup: [
    {
      prompt: 'Na reta numérica, −3 está à ___ de 0:',
      options: [
        { text: 'Direita',  correct: false },
        { text: 'Esquerda', correct: true  },
        { text: 'Cima',     correct: false },
        { text: 'Baixo',    correct: false }
      ],
      explanation: 'Negativos ficam à esquerda do zero na reta numérica.'
    },
    {
      prompt: '(−2) × (−3) = ?',
      options: [
        { text: '−6', correct: false },
        { text: '+6', correct: true  },
        { text: '−5', correct: false },
        { text: '+5', correct: false }
      ],
      explanation: 'Dois negativos multiplicados = positivo. (−2) × (−3) = +6.'
    },
    {
      prompt: 'Temperatura ontem: −5°C. Hoje subiu 8°C. Temperatura hoje:',
      options: [
        { text: '13°C',  correct: false },
        { text: '3°C',   correct: true  },
        { text: '−13°C', correct: false },
        { text: '−3°C',  correct: false }
      ],
      explanation: '−5 + 8 = +3°C.'
    }
  ],

  guidedPractice: [
    {
      prompt: '🔍 DICA: Subtrair negativo vira somar positivo.\n\n7 − (−4) = ?',
      options: [
        { text: '3',   correct: false },
        { text: '11',  correct: true  },
        { text: '−11', correct: false },
        { text: '−3',  correct: false }
      ],
      explanation: '7 − (−4) = 7 + 4 = 11.'
    },
    {
      prompt: '🔍 DICA: Sinais diferentes na multiplicação = negativo.\n\n(+5) × (−4) = ?',
      options: [
        { text: '+20', correct: false },
        { text: '−20', correct: true  },
        { text: '+1',  correct: false },
        { text: '−9',  correct: false }
      ],
      explanation: 'Sinais diferentes → resultado negativo. 5×4=20, com sinal negativo = −20.'
    }
  ],

  questions: [
    {
      prompt: '(−8) + (−3) = ?',
      options: [
        { text: '5',   correct: false },
        { text: '−11', correct: true  },
        { text: '−5',  correct: false },
        { text: '11',  correct: false }
      ],
      explanation: 'Mesmo sinal (ambos negativos): some e mantém. 8+3=11, negativo = −11.'
    },
    {
      prompt: '(−6) + (+9) = ?',
      options: [
        { text: '3',   correct: true  },
        { text: '−3',  correct: false },
        { text: '15',  correct: false },
        { text: '−15', correct: false }
      ],
      explanation: 'Sinais diferentes: 9−6=3, sinal do maior (+9) = +3.'
    },
    {
      prompt: '(−4) × (−5) = ?',
      options: [
        { text: '−20', correct: false },
        { text: '+20', correct: true  },
        { text: '−9',  correct: false },
        { text: '+9',  correct: false }
      ],
      explanation: '(−) × (−) = (+). 4×5=20, resultado: +20.'
    },
    {
      prompt: '(+3) × (−7) = ?',
      options: [
        { text: '+21', correct: false },
        { text: '−21', correct: true  },
        { text: '+4',  correct: false },
        { text: '−4',  correct: false }
      ],
      explanation: '(+) × (−) = (−). 3×7=21, resultado: −21.'
    },
    {
      prompt: '|−15| = ?',
      options: [
        { text: '−15', correct: false },
        { text: '15',  correct: true  },
        { text: '0',   correct: false },
        { text: '1/15',correct: false }
      ],
      explanation: 'Módulo = distância ao zero. |−15| = 15.'
    },
    {
      prompt: 'João tem R$ 10 mas deve R$ 18. Seu saldo é:',
      options: [
        { text: '+R$ 28', correct: false },
        { text: '−R$ 8',  correct: true  },
        { text: '+R$ 8',  correct: false },
        { text: '−R$ 28', correct: false }
      ],
      explanation: '10 − 18 = −8. Ele está endividado em R$8.'
    },
    {
      prompt: '(−36) ÷ (−6) = ?',
      options: [
        { text: '−6', correct: false },
        { text: '+6', correct: true  },
        { text: '−30',correct: false },
        { text: '42', correct: false }
      ],
      explanation: '(−) ÷ (−) = (+). 36÷6=6, resultado +6.'
    },
    {
      prompt: 'Qual é o maior: −5 ou −2?',
      options: [
        { text: '−5 (mais negativo = maior)',  correct: false },
        { text: '−2 (mais próximo do zero)',   correct: true  },
        { text: 'São iguais',                  correct: false },
        { text: 'Impossível comparar negativos',correct: false }
      ],
      explanation: 'Na reta numérica, −2 está à direita de −5, portanto −2 > −5.'
    },
    {
      prompt: '3 − (−3) = ?',
      options: [
        { text: '0',  correct: false },
        { text: '6',  correct: true  },
        { text: '−6', correct: false },
        { text: '9',  correct: false }
      ],
      explanation: '3 − (−3) = 3 + 3 = 6.'
    },
    {
      prompt: 'Qual expressão resulta em número positivo?',
      options: [
        { text: '(−3) × (+4)',    correct: false },
        { text: '(−3) + (−4)',    correct: false },
        { text: '(−3) × (−4)',    correct: true  },
        { text: '(+3) × (−4)',    correct: false }
      ],
      explanation: '(−3) × (−4) = +12. Os demais resultam em negativos.'
    }
  ],

  adaptiveReview: [
    {
      prompt: 'DIFÍCIL: (−2)³ = ?',
      options: [
        { text: '8',   correct: false },
        { text: '−8',  correct: true  },
        { text: '−6',  correct: false },
        { text: '6',   correct: false }
      ],
      explanation: '(−2)³ = (−2)×(−2)×(−2) = 4×(−2) = −8. Número ímpar de negativos → resultado negativo.'
    }
  ],

  rewards: { xp: 160, gems: 16, badge: '❄️ Mestre dos Negativos' },
  completionMessage: '❄️ Você domina os números negativos — nada de frio matemático para você!',
  nextStage: 'mat_s06'
};

window.MAT_S05 = MAT_S05;
