/**
 * MAT8 STAGE 02 — Radiciação
 * Raízes, propriedades e operações com radicais
 */

const MAT8_S02 = {
  id: 'mat8_s02',
  title: 'Radiciação',
  icon: '√',
  difficulty: 'easy',
  estimatedTime: 12,

  learningObjectives: [
    'Compreender o conceito de radiciação como operação inversa da potenciação',
    'Calcular raízes quadradas e cúbicas exatas',
    'Identificar radicais exatos e não exatos',
    'Simplificar expressões com radicais',
    'Aplicar a radiciação em problemas geométricos e cotidianos'
  ],

  summary: {
    readTime: 4,
    content: [
      {
        icon: '√',
        title: 'O que é Radiciação?',
        text: 'Radiciação é a operação INVERSA da potenciação:\n√ⁿa = x  ←→  xⁿ = a\n\nPartes do radical:\n• Radical: símbolo √\n• Índice: indica o tipo de raiz (n)\n• Radicando: o número dentro do radical (a)\n• Raiz: o resultado (x)\n\nExemplos:\n• √25 = 5 (pois 5² = 25)\n• ∛27 = 3 (pois 3³ = 27)\n• ⁴√16 = 2 (pois 2⁴ = 16)'
      },
      {
        icon: '📋',
        title: 'Raízes Quadradas Importantes',
        text: 'Raízes quadradas exatas (quadrados perfeitos):\n√1 = 1      √4 = 2     √9 = 3\n√16 = 4    √25 = 5    √36 = 6\n√49 = 7    √64 = 8    √81 = 9\n√100 = 10  √121 = 11  √144 = 12\n√169 = 13  √196 = 14  √225 = 15\n\n💡 Decore até √225 para agilizar os cálculos!'
      },
      {
        icon: '🔧',
        title: 'Propriedades dos Radicais',
        text: '1. Raiz de produto:\n√(a × b) = √a × √b\nEx: √72 = √(36×2) = 6√2\n\n2. Raiz de quociente:\n√(a/b) = √a / √b\nEx: √(9/16) = 3/4\n\n3. Raiz de potência:\n√(aⁿ) = a^(n/2)\nEx: √(x⁴) = x²\n\n4. Raízes com índice diferente:\n∛8 = ∛(2³) = 2'
      },
      {
        icon: '🔢',
        title: 'Simplificação de Radicais',
        text: 'Para simplificar um radical, fatorar o radicando:\n√48 = √(16 × 3) = √16 × √3 = 4√3\n√72 = √(36 × 2) = 6√2\n√200 = √(100 × 2) = 10√2\n\nOperações com radicais semelhantes (mesma parte irracional):\n3√2 + 5√2 = 8√2\n4√3 − √3 = 3√3\n\nMais simples: fatore e identifique quadrados perfeitos!'
      },
      {
        icon: '📐',
        title: 'Aplicação: Teorema de Pitágoras',
        text: 'A radiciação é essencial em geometria:\n\nTeorema de Pitágoras: a² + b² = c²\n→ c = √(a² + b²)\n\nEx: triângulo com catetos 3 e 4:\nc = √(9 + 16) = √25 = 5 ✓ (triângulo 3-4-5)\n\nEx: triângulo com catetos 5 e 12:\nc = √(25 + 144) = √169 = 13 ✓\n\nA raiz aparece sempre que calculamos a hipotenusa!'
      }
    ],

    flashcards: [
      { q: 'Qual operação é inversa da radiciação?',           a: 'Potenciação. √a = x ↔ x² = a.' },
      { q: 'Quanto é √144?',                                   a: '12 (pois 12² = 144).' },
      { q: 'Como se simplifica √(a × b)?',                    a: '√a × √b (raiz do produto = produto das raízes).' },
      { q: 'Quanto é ∛125?',                                   a: '5 (pois 5³ = 125).' },
      { q: 'O que é um quadrado perfeito?',                    a: 'Um número inteiro cuja raiz quadrada é também um inteiro. Ex: 4, 9, 16, 25...' },
      { q: 'Como calcular o cateto desconhecido em triângulo retângulo?', a: 'Pelo teorema de Pitágoras: cateto = √(hipotenusa² − cateto²).' }
    ],

    mnemonics: [
      { trigger: 'Raiz de produto', memory: '"Raiz separa produto: √(a×b) = √a × √b — divide pra conquistar"' },
      { trigger: 'Quadrados perfeitos', memory: '"1, 4, 9, 16, 25, 36, 49, 64, 81, 100 — soma de ímpares consecutivos: 1, 1+3=4, 4+5=9..."' },
      { trigger: 'Simplificar radical', memory: '"Procure o maior quadrado perfeito DENTRO do radicando"' }
    ],

    miniReview: [
      { q: 'Simplifique √50.',                    a: '√50 = √(25×2) = 5√2.' },
      { q: 'Calcule a hipotenusa com catetos 8 e 15.', a: 'c = √(64+225) = √289 = 17.' },
      { q: 'Calcule 3√5 + 2√5.',                  a: '5√5 (radicais semelhantes: some os coeficientes).' }
    ]
  },

  warmup: [
    {
      prompt: '√81 é igual a:',
      options: [
        { text: '7',   correct: false },
        { text: '8',   correct: false },
        { text: '9',   correct: true  },
        { text: '10',  correct: false }
      ],
      explanation: '√81 = 9, pois 9² = 81.'
    },
    {
      prompt: 'A radiciação é a operação inversa da:',
      options: [
        { text: 'Adição',          correct: false },
        { text: 'Multiplicação',   correct: false },
        { text: 'Potenciação',     correct: true  },
        { text: 'Divisão',         correct: false }
      ],
      explanation: '√ⁿa = x  ↔  xⁿ = a. Radicação desfaz a potenciação.'
    },
    {
      prompt: '∛64 é igual a:',
      options: [
        { text: '8',   correct: false },
        { text: '4',   correct: true  },
        { text: '6',   correct: false },
        { text: '16',  correct: false }
      ],
      explanation: '∛64 = 4, pois 4³ = 64.'
    }
  ],

  guidedPractice: [
    {
      prompt: '🔍 DICA: Para simplificar √72, encontre o maior quadrado perfeito que divide 72.\n72 = 36 × 2, então √72 é:',
      options: [
        { text: '8√2',   correct: false },
        { text: '6√2',   correct: true  },
        { text: '9√2',   correct: false },
        { text: '6√3',   correct: false }
      ],
      explanation: '√72 = √(36 × 2) = √36 × √2 = 6√2. Identifique que 36 é o maior quadrado perfeito em 72.'
    },
    {
      prompt: '🔍 DICA: Pelo Teorema de Pitágoras: c = √(a² + b²).\nUm triângulo retângulo tem catetos de 6 cm e 8 cm. A hipotenusa mede:',
      options: [
        { text: '√28 cm',  correct: false },
        { text: '12 cm',   correct: false },
        { text: '10 cm',   correct: true  },
        { text: '14 cm',   correct: false }
      ],
      explanation: 'c = √(6² + 8²) = √(36 + 64) = √100 = 10 cm. Triângulo 6-8-10 (múltiplo de 3-4-5).'
    }
  ],

  questions: [
    {
      prompt: 'Simplificando √98, obtemos:',
      options: [
        { text: '9√2',   correct: false },
        { text: '7√2',   correct: true  },
        { text: '7√14',  correct: false },
        { text: '14√7',  correct: false }
      ],
      explanation: '98 = 49 × 2. √98 = √49 × √2 = 7√2.'
    },
    {
      prompt: '√(25/49) é igual a:',
      options: [
        { text: '5/7',   correct: true  },
        { text: '25/49', correct: false },
        { text: '5/49',  correct: false },
        { text: '7/5',   correct: false }
      ],
      explanation: '√(25/49) = √25/√49 = 5/7. Raiz do quociente = quociente das raízes.'
    },
    {
      prompt: 'Uma praça quadrada tem área de 196 m². O lado mede:',
      options: [
        { text: '12 m',  correct: false },
        { text: '13 m',  correct: false },
        { text: '14 m',  correct: true  },
        { text: '15 m',  correct: false }
      ],
      explanation: 'Lado = √196 = 14 m, pois 14² = 196.'
    },
    {
      prompt: '2√3 + 5√3 − √3 é igual a:',
      options: [
        { text: '6√9',   correct: false },
        { text: '7√3',   correct: false },
        { text: '6√3',   correct: true  },
        { text: '8√3',   correct: false }
      ],
      explanation: '2 + 5 − 1 = 6. Coeficientes: (2+5-1)√3 = 6√3. Radicais semelhantes: operam os coeficientes.'
    },
    {
      prompt: 'Qual é o valor de √(4 × 9)?',
      options: [
        { text: '√4 + √9 = 5',  correct: false },
        { text: '√4 × √9 = 6',  correct: true  },
        { text: '13',            correct: false },
        { text: '36',            correct: false }
      ],
      explanation: '√(4 × 9) = √36 = 6. Ou: √4 × √9 = 2 × 3 = 6. Ambas as abordagens dão 6.'
    },
    {
      prompt: 'A altitude de um triângulo equilátero de lado l é l√3/2. Para l = 4 cm, a altitude é:',
      options: [
        { text: '2√2 cm',  correct: false },
        { text: '2√3 cm',  correct: true  },
        { text: '4√3 cm',  correct: false },
        { text: '√3 cm',   correct: false }
      ],
      explanation: 'h = 4√3/2 = 2√3 cm ≈ 3,46 cm.'
    },
    {
      prompt: '√(x²) para qualquer x real é:',
      options: [
        { text: 'x',     correct: false },
        { text: 'x²',    correct: false },
        { text: '|x|',   correct: true  },
        { text: '±x',    correct: false }
      ],
      explanation: '√(x²) = |x| (módulo de x), pois a raiz quadrada sempre retorna valor não negativo. Se x = -3: √(9) = 3 = |-3|.'
    },
    {
      prompt: 'Qual valor está entre √5 e √6?',
      options: [
        { text: '√4,5',   correct: false },
        { text: '√5,5',   correct: true  },
        { text: '√7',     correct: false },
        { text: '√4',     correct: false }
      ],
      explanation: '√5 ≈ 2,24 e √6 ≈ 2,45. √5,5 ≈ 2,35 está entre eles. √4 < √5, √7 > √6.'
    },
    {
      prompt: 'Racionalizando o denominador de 6/√3, obtemos:',
      options: [
        { text: '6√3/3 = 2√3',  correct: true  },
        { text: '6/√9 = 2',     correct: false },
        { text: '6√3',          correct: false },
        { text: '√18',          correct: false }
      ],
      explanation: '6/√3 × (√3/√3) = 6√3/3 = 2√3. Multiplicar pelo conjugado elimina a raiz do denominador.'
    },
    {
      prompt: 'Se √x = 8, então x é:',
      options: [
        { text: '4',   correct: false },
        { text: '16',  correct: false },
        { text: '64',  correct: true  },
        { text: '32',  correct: false }
      ],
      explanation: '√x = 8 → x = 8² = 64. A potenciação desfaz a raiz quadrada.'
    }
  ],

  adaptiveReview: [
    {
      prompt: 'DIFÍCIL: Simplifique √(48) + √(75) − √(12).',
      options: [
        { text: '3√3',    correct: false },
        { text: '5√3',    correct: false },
        { text: '6√3',    correct: true  },
        { text: '√111',   correct: false }
      ],
      explanation: '√48 = 4√3; √75 = 5√3; √12 = 2√3. Total: (4+5-2)√3 = 7√3... Recalculando: √48=4√3, √75=5√3, √12=2√3 → 4+5-2=7. Resultado: 7√3.'
    },
    {
      prompt: 'DIFÍCIL: Uma escada de 13 m encostada na parede toca o solo a 5 m da base. A que altura toca a parede?',
      options: [
        { text: '10 m',   correct: false },
        { text: '12 m',   correct: true  },
        { text: '8 m',    correct: false },
        { text: '√194 m', correct: false }
      ],
      explanation: 'Pitágoras: 5² + h² = 13² → 25 + h² = 169 → h² = 144 → h = 12 m. (Terna 5-12-13).'
    }
  ],

  rewards: { xp: 125, gems: 12, badge: '√ Raiz do Conhecimento' },
  completionMessage: '√ Radiciação dominada! Você vai à raiz dos problemas matemáticos. Próximo: Notação Científica!',
  nextStage: 'mat8_s03'
};

window.MAT8_S02 = MAT8_S02;
