/**
 * MAT8 STAGE 03 — Notação Científica
 * Representação de números muito grandes ou pequenos
 */

const MAT8_S03 = {
  id: 'mat8_s03',
  title: 'Notação Científica',
  icon: '🔬',
  difficulty: 'easy',
  estimatedTime: 10,

  learningObjectives: [
    'Compreender a notação científica e sua utilidade',
    'Converter números para notação científica e vice-versa',
    'Realizar operações com números em notação científica',
    'Reconhecer a aplicação em ciências naturais e tecnologia',
    'Comparar grandezas usando notação científica'
  ],

  summary: {
    readTime: 4,
    content: [
      {
        icon: '🔬',
        title: 'O que é Notação Científica?',
        text: 'Notação científica é uma forma compacta de escrever números muito grandes ou muito pequenos:\n\nFormato: a × 10ⁿ\n\nOnde:\n• 1 ≤ a < 10 (um dígito antes da vírgula)\n• n é um inteiro (positivo ou negativo)\n\nExemplos:\n• 300.000.000 m/s = 3 × 10⁸ m/s (velocidade da luz)\n• 0,000001 m = 1 × 10⁻⁶ m (1 micrômetro)\n• 6.000.000.000.000 = 6 × 10¹²'
      },
      {
        icon: '🔄',
        title: 'Como Converter para Notação Científica',
        text: 'NÚMERO GRANDE (≥ 10): mova a vírgula para a ESQUERDA:\n4.500.000 → 4,5 × 10⁶ (moveu 6 casas à esquerda)\n\nNÚMERO PEQUENO (< 1): mova a vírgula para a DIREITA:\n0,000035 → 3,5 × 10⁻⁵ (moveu 5 casas à direita)\n\n⚡ Macete:\n• Mover vírgula pra ESQUERDA → expoente POSITIVO\n• Mover vírgula pra DIREITA → expoente NEGATIVO'
      },
      {
        icon: '🔧',
        title: 'Operações com Notação Científica',
        text: 'MULTIPLICAÇÃO:\n(a × 10ⁿ) × (b × 10ᵐ) = (a × b) × 10ⁿ⁺ᵐ\nEx: (3 × 10⁴) × (2 × 10³) = 6 × 10⁷\n\nDIVISÃO:\n(a × 10ⁿ) ÷ (b × 10ᵐ) = (a/b) × 10ⁿ⁻ᵐ\nEx: (8 × 10⁶) ÷ (4 × 10²) = 2 × 10⁴\n\nADIÇÃO/SUBTRAÇÃO: igualizar os expoentes primeiro!\n(3 × 10⁴) + (5 × 10³) = (3 + 0,5) × 10⁴ = 3,5 × 10⁴'
      },
      {
        icon: '🌍',
        title: 'Exemplos do Mundo Real',
        text: 'ASTRONOMIA:\n• Distância Terra-Sol: 1,5 × 10¹¹ m\n• Ano-luz: 9,46 × 10¹⁵ m\n\nBIOLOGIA:\n• Diâmetro de uma bactéria: 1 × 10⁻⁶ m\n• Diâmetro de um vírus: 1 × 10⁻⁷ m\n• DNA humano: 3 × 10⁹ pares de bases\n\nFÍSICA:\n• Massa do elétron: 9,11 × 10⁻³¹ kg\n• Velocidade da luz: 3 × 10⁸ m/s'
      },
      {
        icon: '📊',
        title: 'Comparando Grandezas',
        text: 'Para comparar números em notação científica:\n1. Compare primeiro os expoentes (maior expoente = maior número)\n2. Se expoentes iguais, compare os coeficientes\n\nEx: 3,2 × 10⁵ vs 8,9 × 10⁴\n→ 10⁵ > 10⁴, então 3,2 × 10⁵ > 8,9 × 10⁴\n\nEx: 5 × 10³ vs 2 × 10³\n→ Mesmo expoente: 5 > 2, então 5 × 10³ > 2 × 10³'
      }
    ],

    flashcards: [
      { q: 'Qual é o formato padrão da notação científica?',       a: 'a × 10ⁿ, onde 1 ≤ a < 10 e n é inteiro.' },
      { q: 'Como converter 0,00045 para notação científica?',      a: '4,5 × 10⁻⁴ (mova a vírgula 4 casas para a direita).' },
      { q: 'Como converter 7,2 × 10⁵ para decimal?',              a: '720.000 (mova a vírgula 5 casas para a direita).' },
      { q: 'Qual a velocidade da luz em notação científica?',      a: '3 × 10⁸ m/s.' },
      { q: 'Como multiplicar (2 × 10³) × (4 × 10⁵)?',            a: '8 × 10⁸ (multiplica coeficientes, soma expoentes).' },
      { q: 'Por que usamos notação científica?',                   a: 'Para representar números muito grandes ou pequenos de forma compacta e precisa.' }
    ],

    mnemonics: [
      { trigger: 'Virgula para esquerda', memory: '"Esquerda = Expoente Eleva (positivo)"' },
      { trigger: 'Vírgula para direita',  memory: '"Direita = Diminui (expoente negativo)"' },
      { trigger: 'Condição do coeficiente', memory: '"Entre 1 e 9,9... — um dígito inteiro, virgula, resto"' }
    ],

    miniReview: [
      { q: 'Converta 0,00000089 para notação científica.', a: '8,9 × 10⁻⁷.' },
      { q: 'Calcule (5 × 10⁴) ÷ (2 × 10²).',              a: '2,5 × 10² = 250.' },
      { q: 'Qual é maior: 9 × 10⁻³ ou 2 × 10⁻²?',         a: '2 × 10⁻² (= 0,02) > 9 × 10⁻³ (= 0,009).' }
    ]
  },

  warmup: [
    {
      prompt: '45.000 em notação científica é:',
      options: [
        { text: '45 × 10³',    correct: false },
        { text: '4,5 × 10⁴',  correct: true  },
        { text: '0,45 × 10⁵', correct: false },
        { text: '4,5 × 10⁵',  correct: false }
      ],
      explanation: '45.000 → mover vírgula 4 casas para a esquerda → 4,5 × 10⁴. Coeficiente deve ser entre 1 e 10.'
    },
    {
      prompt: '3,2 × 10⁻³ em notação decimal é:',
      options: [
        { text: '320',     correct: false },
        { text: '0,32',    correct: false },
        { text: '0,0032',  correct: true  },
        { text: '0,00032', correct: false }
      ],
      explanation: 'Expoente -3: mover vírgula 3 casas para a esquerda → 0,0032.'
    },
    {
      prompt: 'Na notação científica a × 10ⁿ, o coeficiente "a" deve satisfazer:',
      options: [
        { text: '0 < a ≤ 1',    correct: false },
        { text: '1 ≤ a < 10',   correct: true  },
        { text: 'a < 100',      correct: false },
        { text: 'a ≥ 1',        correct: false }
      ],
      explanation: 'O coeficiente deve ter exatamente 1 dígito inteiro não nulo: 1 ≤ a < 10.'
    }
  ],

  guidedPractice: [
    {
      prompt: '🔍 DICA: Na multiplicação em notação científica, multiplique os coeficientes e SOME os expoentes.\n\n(3 × 10⁵) × (4 × 10³) é igual a:',
      options: [
        { text: '12 × 10⁸',   correct: false },
        { text: '1,2 × 10⁹',  correct: true  },
        { text: '7 × 10⁸',    correct: false },
        { text: '12 × 10¹⁵',  correct: false }
      ],
      explanation: '3 × 4 = 12; 10⁵ × 10³ = 10⁸. Resultado: 12 × 10⁸. Mas 12 ≥ 10 → ajuste: 1,2 × 10⁹.'
    },
    {
      prompt: '🔍 DICA: Para comparar, olhe primeiro o expoente — maior expoente significa número maior.\n\nOrdene do menor ao maior: 6 × 10², 8 × 10⁻¹, 3 × 10³:',
      options: [
        { text: '3×10³ < 6×10² < 8×10⁻¹',  correct: false },
        { text: '8×10⁻¹ < 6×10² < 3×10³',  correct: true  },
        { text: '6×10² < 8×10⁻¹ < 3×10³',  correct: false },
        { text: '6×10² < 3×10³ < 8×10⁻¹',  correct: false }
      ],
      explanation: '8×10⁻¹ = 0,8; 6×10² = 600; 3×10³ = 3000. Ordem: 0,8 < 600 < 3000.'
    }
  ],

  questions: [
    {
      prompt: 'O diâmetro médio de um vírus é 0,0000001 m. Em notação científica:',
      options: [
        { text: '1 × 10⁻⁶ m',  correct: false },
        { text: '1 × 10⁻⁷ m',  correct: true  },
        { text: '1 × 10⁻⁸ m',  correct: false },
        { text: '1 × 10⁷ m',   correct: false }
      ],
      explanation: '0,0000001 = 10⁻⁷. Conta os zeros: 7 casas decimais antes do 1 → 10⁻⁷.'
    },
    {
      prompt: '(6 × 10⁸) ÷ (3 × 10⁵) é igual a:',
      options: [
        { text: '2 × 10¹³',  correct: false },
        { text: '2 × 10³',   correct: true  },
        { text: '3 × 10³',   correct: false },
        { text: '2 × 10⁴',   correct: false }
      ],
      explanation: '6÷3 = 2; 10⁸÷10⁵ = 10³. Resultado: 2 × 10³ = 2000.'
    },
    {
      prompt: 'A distância da Terra ao Sol é 1,5 × 10¹¹ m. A distância até uma estrela é 100 vezes maior. Em notação científica:',
      options: [
        { text: '1,5 × 10¹³ m', correct: true  },
        { text: '1,5 × 10¹² m', correct: false },
        { text: '150 × 10¹¹ m', correct: false },
        { text: '1,5 × 10¹⁴ m', correct: false }
      ],
      explanation: '1,5 × 10¹¹ × 100 = 1,5 × 10¹¹ × 10² = 1,5 × 10¹³ m.'
    },
    {
      prompt: 'Qual das opções NÃO está em notação científica correta?',
      options: [
        { text: '5,2 × 10⁷',    correct: false },
        { text: '1,0 × 10⁻³',   correct: false },
        { text: '12 × 10⁴',     correct: true  },
        { text: '9,9 × 10⁰',    correct: false }
      ],
      explanation: '"12 × 10⁴" tem coeficiente ≥ 10 → inválido. Forma correta: 1,2 × 10⁵.'
    },
    {
      prompt: '(2 × 10⁻³) + (5 × 10⁻³) em notação científica:',
      options: [
        { text: '7 × 10⁻⁶',   correct: false },
        { text: '10 × 10⁻³',  correct: false },
        { text: '7 × 10⁻³',   correct: true  },
        { text: '7 × 10⁻⁹',   correct: false }
      ],
      explanation: 'Mesmos expoentes: (2+5) × 10⁻³ = 7 × 10⁻³. Na adição/subtração, os expoentes devem ser iguais.'
    },
    {
      prompt: 'O Brasil tem aproximadamente 215.000.000 de habitantes. Em notação científica:',
      options: [
        { text: '215 × 10⁶',      correct: false },
        { text: '2,15 × 10⁸',     correct: true  },
        { text: '2,15 × 10⁷',     correct: false },
        { text: '21,5 × 10⁷',     correct: false }
      ],
      explanation: '215.000.000 → vírgula anda 8 casas para esquerda → 2,15 × 10⁸.'
    },
    {
      prompt: 'A massa de um próton é 1,67 × 10⁻²⁷ kg. A massa de um elétron é 9,11 × 10⁻³¹ kg. Qual é mais pesado?',
      options: [
        { text: 'Elétron',  correct: false },
        { text: 'Próton',   correct: true  },
        { text: 'São iguais', correct: false },
        { text: 'Depende da velocidade', correct: false }
      ],
      explanation: '10⁻²⁷ > 10⁻³¹ (menos negativo = maior). Próton tem massa ~1836× maior que o elétron.'
    },
    {
      prompt: 'Se um computador executa 2,5 × 10⁹ operações por segundo, em 4 × 10² segundos executa:',
      options: [
        { text: '1 × 10¹² operações',   correct: true  },
        { text: '10¹¹ operações',        correct: false },
        { text: '2,5 × 10⁷ operações',  correct: false },
        { text: '1 × 10¹¹ operações',   correct: false }
      ],
      explanation: '2,5 × 10⁹ × 4 × 10² = 10 × 10¹¹ = 1 × 10¹² operações (1 trilhão).'
    },
    {
      prompt: 'Expresse 8 × 10⁻² como número decimal:',
      options: [
        { text: '80',    correct: false },
        { text: '0,8',   correct: false },
        { text: '0,08',  correct: true  },
        { text: '800',   correct: false }
      ],
      explanation: '8 × 10⁻² = 8 × 0,01 = 0,08. Mova a vírgula 2 casas para a esquerda: 8 → 0,08.'
    },
    {
      prompt: 'Quantas vezes a velocidade da luz (3 × 10⁸ m/s) é maior que o som (3 × 10² m/s)?',
      options: [
        { text: '10⁶ vezes',   correct: true  },
        { text: '10⁴ vezes',   correct: false },
        { text: '1.000 vezes', correct: false },
        { text: '100 vezes',   correct: false }
      ],
      explanation: '(3 × 10⁸) ÷ (3 × 10²) = 1 × 10⁶ = 1.000.000 vezes mais rápida!'
    }
  ],

  adaptiveReview: [
    {
      prompt: 'DIFÍCIL: Avogadro = 6,022 × 10²³. Quanto é 3 mol de carbono em átomos?',
      options: [
        { text: '1,8066 × 10²⁴',  correct: true  },
        { text: '6,022 × 10²⁶',   correct: false },
        { text: '2,007 × 10²³',   correct: false },
        { text: '18,066 × 10²³',  correct: false }
      ],
      explanation: '3 × 6,022 × 10²³ = 18,066 × 10²³ = 1,8066 × 10²⁴ átomos. Ajuste o coeficiente: 18,066 → 1,8066 × 10¹.'
    },
    {
      prompt: 'DIFÍCIL: Um nano tem 10⁻⁹ m. Uma célula humana tem 10 micrômetros (10⁻⁵ m). Quantos nanômetros tem a célula?',
      options: [
        { text: '10.000 nm',   correct: true  },
        { text: '1.000 nm',    correct: false },
        { text: '100.000 nm',  correct: false },
        { text: '1 nm',        correct: false }
      ],
      explanation: '10⁻⁵ m ÷ 10⁻⁹ m/nm = 10⁻⁵⁺⁹ = 10⁴ nm = 10.000 nm.'
    }
  ],

  rewards: { xp: 115, gems: 11, badge: '🔬 Cientista Numérico' },
  completionMessage: '🔬 Notação Científica dominada! Você pensa agora em escalas astronômicas e subatômicas. Próximo: Equação do 1º Grau!',
  nextStage: 'mat8_s04'
};

window.MAT8_S03 = MAT8_S03;
