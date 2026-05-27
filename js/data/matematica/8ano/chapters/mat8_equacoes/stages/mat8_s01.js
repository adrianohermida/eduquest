/**
 * MAT8 STAGE 01 — Potenciação
 * Bases, expoentes, propriedades das potências
 */

const MAT8_S01 = {
  id: 'mat8_s01',
  title: 'Potenciação',
  icon: '⚡',
  difficulty: 'easy',
  estimatedTime: 12,

  learningObjectives: [
    'Compreender o conceito de potência (base e expoente)',
    'Calcular potências de números inteiros e fracionários',
    'Aplicar as propriedades das potências',
    'Resolver problemas envolvendo potências',
    'Identificar potências de 10 e sua importância'
  ],

  summary: {
    readTime: 4,
    content: [
      {
        icon: '⚡',
        title: 'O que é Potenciação?',
        text: 'Potenciação é uma multiplicação repetida:\naⁿ = a × a × a × ... (n vezes)\n\nExemplos:\n• 2³ = 2 × 2 × 2 = 8\n• 5² = 5 × 5 = 25\n• 3⁴ = 3 × 3 × 3 × 3 = 81\n\nNomenclatura:\n• Base: o número que se multiplica (a)\n• Expoente: quantas vezes se multiplica (n)\n• Potência: o resultado (aⁿ)'
      },
      {
        icon: '📋',
        title: 'Casos Especiais',
        text: 'Casos importantes:\n• a⁰ = 1 (qualquer número elevado a 0 = 1)\n• a¹ = a (qualquer número elevado a 1 = ele mesmo)\n• (-a)ⁿ: depende do expoente\n  - Expoente PAR → resultado positivo: (-2)⁴ = +16\n  - Expoente ÍMPAR → resultado negativo: (-2)³ = -8\n• -(aⁿ) ≠ (-a)ⁿ: atenção aos parênteses!'
      },
      {
        icon: '🔧',
        title: 'Propriedades das Potências',
        text: '1. Produto de potências de mesma base:\naᵐ × aⁿ = aᵐ⁺ⁿ\nEx: 3² × 3⁴ = 3⁶\n\n2. Quociente de potências de mesma base:\naᵐ ÷ aⁿ = aᵐ⁻ⁿ\nEx: 5⁵ ÷ 5² = 5³\n\n3. Potência de potência:\n(aᵐ)ⁿ = aᵐ×ⁿ\nEx: (2³)² = 2⁶\n\n4. Potência de produto:\n(a × b)ⁿ = aⁿ × bⁿ\nEx: (3 × 2)⁴ = 3⁴ × 2⁴'
      },
      {
        icon: '🔟',
        title: 'Potências de 10',
        text: 'Potências de 10 são a base da notação decimal:\n• 10¹ = 10\n• 10² = 100\n• 10³ = 1.000\n• 10⁴ = 10.000\n• 10⁻¹ = 0,1\n• 10⁻² = 0,01\n• 10⁻³ = 0,001\n\n⚡ Macete: o expoente indica o número de zeros (positivo) ou casas decimais (negativo)!'
      },
      {
        icon: '🧮',
        title: 'Potências de Frações e Números Negativos',
        text: 'Fração elevada a potência:\n(a/b)ⁿ = aⁿ/bⁿ\nEx: (2/3)² = 4/9\n\nExpoente negativo:\na⁻ⁿ = 1/aⁿ\nEx: 2⁻³ = 1/2³ = 1/8\n\nExpoente fracionário:\na^(1/2) = √a (raiz quadrada)\na^(1/3) = ∛a (raiz cúbica)\n\nEx: 9^(1/2) = √9 = 3'
      }
    ],

    flashcards: [
      { q: 'Quanto é qualquer número elevado a 0?',          a: '1 (a⁰ = 1, para a ≠ 0).' },
      { q: 'Qual a regra para multiplicar potências de mesma base?', a: 'Mantém a base e SOMA os expoentes: aᵐ × aⁿ = aᵐ⁺ⁿ.' },
      { q: 'O que significa expoente negativo?',             a: 'Indica o inverso: a⁻ⁿ = 1/aⁿ.' },
      { q: 'Quanto é (-3)⁴?',                               a: '81 (expoente par → resultado positivo: (-3)×(-3)×(-3)×(-3) = +81).' },
      { q: 'Qual a regra de potência de potência?',          a: '(aᵐ)ⁿ = aᵐⁿ — multiplica os expoentes.' },
      { q: 'Quanto é 5⁰?',                                   a: '1.' }
    ],

    mnemonics: [
      { trigger: 'Base × Base = soma expoentes', memory: '"Mesma base? SOMA! Bases diferentes? Sem atalho."' },
      { trigger: 'Sinal em potência',            memory: '"Par = Positivo; Ímpar = Igual ao sinal da base"' },
      { trigger: 'Expoente negativo',            memory: '"Negativo = 1 sobre — a⁻² = 1/a²"' }
    ],

    miniReview: [
      { q: 'Calcule 2⁵.',               a: '32 (2×2×2×2×2 = 32).' },
      { q: 'Simplifique 3⁴ × 3² ÷ 3³.', a: '3⁴⁺²⁻³ = 3³ = 27.' },
      { q: 'Quanto é (2/5)²?',           a: '4/25 (numerador e denominador elevados ao quadrado).' }
    ]
  },

  warmup: [
    {
      prompt: '2⁴ é igual a:',
      options: [
        { text: '6',   correct: false },
        { text: '8',   correct: false },
        { text: '16',  correct: true  },
        { text: '32',  correct: false }
      ],
      explanation: '2⁴ = 2 × 2 × 2 × 2 = 4 × 4 = 16.'
    },
    {
      prompt: 'Qualquer número diferente de zero elevado a 0 resulta em:',
      options: [
        { text: '0',           correct: false },
        { text: '1',           correct: true  },
        { text: 'O próprio número', correct: false },
        { text: 'Indefinido',  correct: false }
      ],
      explanation: 'Por definição e coerência com as propriedades: a⁰ = 1, para qualquer a ≠ 0.'
    },
    {
      prompt: '(-3)² é igual a:',
      options: [
        { text: '-9',  correct: false },
        { text: '-6',  correct: false },
        { text: '6',   correct: false },
        { text: '9',   correct: true  }
      ],
      explanation: '(-3)² = (-3) × (-3) = +9. Expoente par → resultado positivo.'
    }
  ],

  guidedPractice: [
    {
      prompt: '🔍 DICA: Na multiplicação de potências de mesma base, SOMA os expoentes.\n\n3² × 3³ é igual a:',
      options: [
        { text: '9⁵',   correct: false },
        { text: '3⁶',   correct: false },
        { text: '3⁵',   correct: true  },
        { text: '6⁵',   correct: false }
      ],
      explanation: '3² × 3³ = 3²⁺³ = 3⁵ = 243. Mantém a base e soma os expoentes!'
    },
    {
      prompt: '🔍 DICA: Potência de potência MULTIPLICA os expoentes.\n\n(2³)⁴ é igual a:',
      options: [
        { text: '2⁷',   correct: false },
        { text: '8⁴',   correct: false },
        { text: '2¹²',  correct: true  },
        { text: '6⁴',   correct: false }
      ],
      explanation: '(2³)⁴ = 2³×⁴ = 2¹² = 4.096. Multiplica os expoentes: 3 × 4 = 12.'
    }
  ],

  questions: [
    {
      prompt: '5⁻² é igual a:',
      options: [
        { text: '-25',   correct: false },
        { text: '1/25',  correct: true  },
        { text: '-10',   correct: false },
        { text: '25',    correct: false }
      ],
      explanation: '5⁻² = 1/5² = 1/25. Expoente negativo: o número vai para o denominador.'
    },
    {
      prompt: 'Simplificando 4⁶ ÷ 4², o resultado é:',
      options: [
        { text: '4³',   correct: false },
        { text: '1⁴',   correct: false },
        { text: '4⁴',   correct: true  },
        { text: '4¹²',  correct: false }
      ],
      explanation: '4⁶ ÷ 4² = 4⁶⁻² = 4⁴ = 256. Divisão de mesma base: subtrai expoentes.'
    },
    {
      prompt: '(3 × 4)² é igual a:',
      options: [
        { text: '3 × 4²',   correct: false },
        { text: '3² × 4²',  correct: true  },
        { text: '3² + 4²',  correct: false },
        { text: '144²',     correct: false }
      ],
      explanation: '(3 × 4)² = 3² × 4² = 9 × 16 = 144. Potência de produto: distribui para cada fator.'
    },
    {
      prompt: 'Quanto é 10³ × 10⁻¹?',
      options: [
        { text: '10⁻³',  correct: false },
        { text: '10²',   correct: true  },
        { text: '10⁴',   correct: false },
        { text: '10¹',   correct: false }
      ],
      explanation: '10³ × 10⁻¹ = 10³⁺⁽⁻¹⁾ = 10² = 100. Soma de expoentes: 3 + (-1) = 2.'
    },
    {
      prompt: '(-2)⁵ é igual a:',
      options: [
        { text: '32',   correct: false },
        { text: '10',   correct: false },
        { text: '-32',  correct: true  },
        { text: '-10',  correct: false }
      ],
      explanation: '(-2)⁵ = (-2)×(-2)×(-2)×(-2)×(-2) = -32. Expoente ímpar → resultado negativo.'
    },
    {
      prompt: '(1/3)³ é igual a:',
      options: [
        { text: '1/6',   correct: false },
        { text: '3/9',   correct: false },
        { text: '1/27',  correct: true  },
        { text: '1/9',   correct: false }
      ],
      explanation: '(1/3)³ = 1³/3³ = 1/27. Eleva numerador e denominador ao cubo.'
    },
    {
      prompt: 'Se a² = 36, quais são os possíveis valores de a?',
      options: [
        { text: 'a = 6 apenas',      correct: false },
        { text: 'a = 18 apenas',     correct: false },
        { text: 'a = 6 ou a = -6',   correct: true  },
        { text: 'a = 6 ou a = -18',  correct: false }
      ],
      explanation: 'a² = 36 → a = ±√36 = ±6. Tanto 6² = 36 quanto (-6)² = 36.'
    },
    {
      prompt: 'Um vírus se divide ao meio a cada hora. Começando com 2 vírus, após 6 horas teremos:',
      options: [
        { text: '12 vírus',   correct: false },
        { text: '64 vírus',   correct: false },
        { text: '128 vírus',  correct: true  },
        { text: '256 vírus',  correct: false }
      ],
      explanation: '2 × 2⁶ = 2¹ × 2⁶ = 2⁷ = 128 vírus. Crescimento exponencial: dobra a cada hora.'
    },
    {
      prompt: 'Qual expressão representa corretamente (a²b³)⁴?',
      options: [
        { text: 'a⁸b¹²', correct: true  },
        { text: 'a⁶b⁷',  correct: false },
        { text: 'a⁸b⁷',  correct: false },
        { text: 'a⁶b¹²', correct: false }
      ],
      explanation: '(a²b³)⁴ = a²×⁴ × b³×⁴ = a⁸b¹². Potência de produto: multiplica cada expoente pelo expoente externo.'
    },
    {
      prompt: 'A expressão 2⁻⁴ × 2⁶ ÷ 2² simplifica para:',
      options: [
        { text: '2⁴',      correct: false },
        { text: '2⁸',      correct: false },
        { text: '2¹²',     correct: false },
        { text: '2⁰ = 1',  correct: true  }
      ],
      explanation: '2⁻⁴ × 2⁶ ÷ 2² = 2⁻⁴⁺⁶⁻² = 2⁰ = 1. Soma e subtrai os expoentes: -4+6-2 = 0.'
    }
  ],

  adaptiveReview: [
    {
      prompt: 'DIFÍCIL: Qual é o valor de (2³)² − 4² + 2⁰?',
      options: [
        { text: '17',  correct: false },
        { text: '65',  correct: false },
        { text: '48',  correct: false },
        { text: '49',  correct: true  }
      ],
      explanation: '(2³)² = 2⁶ = 64; 4² = 16; 2⁰ = 1. Resultado: 64 − 16 + 1 = 49. (17 = erro: (2³)²=2⁵=32; 65 = esquece o −; 48 = trata 2⁰ como 0.)'
    },
    {
      prompt: 'DIFÍCIL: Se 2ⁿ = 128, qual é o valor de n?',
      options: [
        { text: '6',   correct: false },
        { text: '7',   correct: true  },
        { text: '8',   correct: false },
        { text: '64',  correct: false }
      ],
      explanation: '2¹ = 2, 2² = 4, 2³ = 8, 2⁴ = 16, 2⁵ = 32, 2⁶ = 64, 2⁷ = 128. Portanto n = 7.'
    }
  ],

  rewards: { xp: 120, gems: 12, badge: '⚡ Mestre das Potências' },
  completionMessage: '⚡ Potenciação dominada! Seus poderes matemáticos crescem exponencialmente. Próximo: Radiciação!',
  nextStage: 'mat8_s02'
};

window.MAT8_S01 = MAT8_S01;
