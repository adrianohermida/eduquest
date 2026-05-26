/**
 * MAT STAGE 01 — O que são Números Racionais?
 * Conceito de fração, representação e exemplos do cotidiano
 */

const MAT_S01 = {
  id: 'mat_s01',
  title: 'O que são Racionais?',
  icon: '🔢',
  difficulty: 'easy',
  estimatedTime: 12,

  learningObjectives: [
    'Compreender a definição de número racional',
    'Identificar frações no dia a dia',
    'Reconhecer que inteiros também são racionais',
    'Diferenciar racionais de irracionais',
    'Representar racionais na reta numérica'
  ],

  summary: {
    readTime: 4,
    content: [
      {
        icon: '🔢',
        title: 'O que é um Número Racional?',
        text: 'Um número racional é qualquer número que pode ser escrito como fração p/q, onde p e q são inteiros e q ≠ 0.\n\n✅ Exemplos: 1/2, -3/4, 5 (= 5/1), 0,75 (= 3/4), 0 (= 0/1)\n❌ NÃO é racional: √2, π (têm decimais infinitos e não periódicos)'
      },
      {
        icon: '🍕',
        title: 'Frações no Cotidiano',
        text: 'Você usa frações o tempo todo sem perceber:\n\n• Pizza: 1/4 da pizza = uma fatia de 4\n• Desconto: 1/2 do preço = metade\n• Nota: 7,5 = 15/2\n• Hora: 15 min = 1/4 de hora\n\n💡 Todo número decimal finito (0,5 · 0,25 · 1,75) é racional!'
      },
      {
        icon: '📏',
        title: 'Na Reta Numérica',
        text: 'Os racionais "preenchem" os espaços entre os inteiros na reta numérica.\n\n...  -1  -1/2  0  1/4  1/2  3/4  1  ...\n\nEntre quaisquer dois racionais, sempre existe outro racional!'
      },
      {
        icon: '🧠',
        title: 'Inteiros são Racionais!',
        text: 'Todo número inteiro É racional, pois pode ser escrito como fração:\n• 5 = 5/1\n• -3 = -3/1\n• 0 = 0/1\n\n🔑 Racionais ⊃ Inteiros ⊃ Naturais (os maiores contêm os menores)'
      }
    ],

    flashcards: [
      { q: 'O que é número racional?',         a: 'Qualquer número escrito como p/q, onde p e q são inteiros e q ≠ 0.' },
      { q: 'Todo inteiro é racional?',          a: 'Sim! Ex: 5 = 5/1.' },
      { q: 'Cite um número irracional.',        a: '√2 ou π — decimais infinitos e não periódicos.' },
      { q: '0,75 é racional? Como fracionar?',  a: 'Sim: 0,75 = 3/4.' },
      { q: 'Por que √2 não é racional?',        a: 'Porque não pode ser escrito como fração p/q de inteiros.' }
    ],

    mnemonics: [
      { trigger: 'Racional',    memory: '"Racio" = razão = fração. Racional = pode virar fração!' },
      { trigger: 'p/q, q≠0',   memory: '"O denominador nunca pode ser zero — divisão por zero é impossível!"' },
      { trigger: 'Irracional',  memory: '"Ir-racional = não pode ser fração. π e √2 são eternamente decimais."' }
    ],

    miniReview: [
      { q: '2/3 é racional?',            a: 'Sim, p=2, q=3, q≠0.' },
      { q: '-5 é racional? Mostre.',     a: 'Sim: -5 = -5/1.' },
      { q: 'Cite 3 racionais entre 0 e 1.', a: '1/4, 1/2, 3/4 (ou outros).' }
    ]
  },

  warmup: [
    {
      prompt: 'Qual NÃO é um número racional?',
      options: [
        { text: '1/2',   correct: false },
        { text: '√2',    correct: true  },
        { text: '-3',    correct: false },
        { text: '0,75',  correct: false }
      ],
      explanation: '√2 é irracional: seu decimal é infinito e não periódico.'
    },
    {
      prompt: 'O número inteiro 7 pode ser escrito como fração?',
      options: [
        { text: 'Não, inteiros não são frações', correct: false },
        { text: 'Sim: 7/1',                      correct: true  },
        { text: 'Sim: 1/7',                      correct: false },
        { text: 'Apenas se for positivo',         correct: false }
      ],
      explanation: 'Todo inteiro n pode ser escrito como n/1, logo é racional.'
    },
    {
      prompt: 'Um número racional p/q exige que:',
      options: [
        { text: 'p e q sejam positivos',                correct: false },
        { text: 'q ≠ 0',                               correct: true  },
        { text: 'p > q',                                correct: false },
        { text: 'p e q sejam primos entre si',          correct: false }
      ],
      explanation: 'A única restrição essencial: q (denominador) não pode ser zero.'
    }
  ],

  guidedPractice: [
    {
      prompt: '🔍 DICA: Decimais com final definido (terminantes) sempre são racionais.\n\n0,5 como fração vale:',
      options: [
        { text: '1/2',  correct: true  },
        { text: '1/5',  correct: false },
        { text: '5/10', correct: false },
        { text: '5/1',  correct: false }
      ],
      explanation: '0,5 = 5/10 = 1/2 (simplificando por 5).'
    },
    {
      prompt: '🔍 DICA: π (pi) tem casas decimais infinitas sem repetição.\n\nπ é:',
      options: [
        { text: 'Racional',   correct: false },
        { text: 'Irracional', correct: true  },
        { text: 'Inteiro',    correct: false },
        { text: 'Natural',    correct: false }
      ],
      explanation: 'π = 3,14159... — infinito e sem padrão de repetição.'
    }
  ],

  questions: [
    {
      prompt: 'Qual dos seguintes é um número racional?',
      options: [
        { text: 'π',     correct: false },
        { text: '√3',    correct: false },
        { text: '3/7',   correct: true  },
        { text: '√5',    correct: false }
      ],
      explanation: '3/7 é fração de dois inteiros com denominador ≠ 0.'
    },
    {
      prompt: '-4 como fração racional é:',
      options: [
        { text: '-4/1', correct: true  },
        { text: '4/1',  correct: false },
        { text: '1/4',  correct: false },
        { text: '-1/4', correct: false }
      ],
      explanation: '-4 = -4/1. O sinal fica no numerador.'
    },
    {
      prompt: 'O decimal 0,25 é equivalente a:',
      options: [
        { text: '1/4',  correct: true  },
        { text: '1/25', correct: false },
        { text: '2/5',  correct: false },
        { text: '4/1',  correct: false }
      ],
      explanation: '0,25 = 25/100 = 1/4 (dividindo por 25).'
    },
    {
      prompt: 'Qual conjunto contém SOMENTE números racionais?',
      options: [
        { text: '{1/2, √2, 3}',     correct: false },
        { text: '{π, 0, 1/3}',      correct: false },
        { text: '{-2, 0, 1/2, 0,7}',correct: true  },
        { text: '{√3, √5, √7}',     correct: false }
      ],
      explanation: 'Todos são fração de inteiros: -2=-2/1, 0=0/1, 1/2, 0,7=7/10.'
    },
    {
      prompt: 'Entre 0 e 1, quantos racionais existem?',
      options: [
        { text: 'Nenhum',               correct: false },
        { text: 'Finitos (exatamente 9)',correct: false },
        { text: 'Infinitos',            correct: true  },
        { text: 'Apenas 1/2',           correct: false }
      ],
      explanation: 'Entre quaisquer dois racionais sempre existe outro racional — são infinitos!'
    },
    {
      prompt: 'Por que 5/0 NÃO é número racional?',
      options: [
        { text: 'Porque 5 é ímpar',         correct: false },
        { text: 'Porque divisão por 0 é indefinida', correct: true },
        { text: 'Porque o numerador é positivo', correct: false },
        { text: 'Porque 0 não é inteiro',   correct: false }
      ],
      explanation: 'A definição exige q ≠ 0. Divisão por zero é indefinida na matemática.'
    },
    {
      prompt: 'Qual afirmativa é VERDADEIRA?',
      options: [
        { text: 'Todo racional é inteiro',          correct: false },
        { text: 'Todo inteiro é racional',          correct: true  },
        { text: 'Nenhum decimal é racional',        correct: false },
        { text: 'Irracionais são um subconjunto dos racionais', correct: false }
      ],
      explanation: 'Todo inteiro n = n/1, portanto é racional. O inverso não é verdadeiro.'
    },
    {
      prompt: '1/3 em decimal é 0,333... Isso é racional porque:',
      options: [
        { text: 'É um decimal finito',               correct: false },
        { text: 'É um decimal periódico (repete o 3)', correct: true },
        { text: 'É irracional',                       correct: false },
        { text: 'Não existe na reta numérica',         correct: false }
      ],
      explanation: 'Decimais periódicos (com padrão que se repete) são sempre racionais.'
    },
    {
      prompt: 'Qual representa o número racional 2 e 1/2?',
      options: [
        { text: '3/2', correct: false },
        { text: '5/2', correct: true  },
        { text: '2/1', correct: false },
        { text: '1/2', correct: false }
      ],
      explanation: '2 e 1/2 = 2 + 1/2 = 4/2 + 1/2 = 5/2.'
    },
    {
      prompt: 'Qual destes números é irracional?',
      options: [
        { text: '0',   correct: false },
        { text: '-7',  correct: false },
        { text: '√9',  correct: false },
        { text: '√7',  correct: true  }
      ],
      explanation: '√9 = 3 (racional). √7 ≈ 2,6457... é infinito e não periódico.'
    }
  ],

  adaptiveReview: [
    {
      prompt: 'DIFÍCIL: Todo número racional pode ser escrito como decimal:',
      options: [
        { text: 'Apenas finito',           correct: false },
        { text: 'Finito ou periódico',     correct: true  },
        { text: 'Infinito e não periódico',correct: false },
        { text: 'Apenas inteiro',          correct: false }
      ],
      explanation: 'Racionais → decimal finito (1/4=0,25) ou periódico (1/3=0,333...).'
    },
    {
      prompt: 'DIFÍCIL: Qual fração representa o decimal periódico 0,666...?',
      options: [
        { text: '6/9',  correct: false },
        { text: '2/3',  correct: true  },
        { text: '6/10', correct: false },
        { text: '3/5',  correct: false }
      ],
      explanation: '2/3 = 0,6666... (periódico simples).'
    }
  ],

  rewards: { xp: 120, gems: 12, badge: '🔢 Explorador Racional' },
  completionMessage: '🔢 Você entendeu o que são números racionais! Agora, para as operações!',
  nextStage: 'mat_s02'
};

window.MAT_S01 = MAT_S01;
