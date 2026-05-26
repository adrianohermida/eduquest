/**
 * MAT8 FINAL — Exame Final: Potências, Raízes e Equações
 * Avaliação abrangente de todos os tópicos do capítulo
 */

const MAT8_SFINAL = {
  id: 'mat8_sfinal',
  title: 'Exame Final: Equações',
  icon: '🏆',
  difficulty: 'hard',
  estimatedTime: 25,

  learningObjectives: [
    'Demonstrar domínio completo de potenciação e radiciação',
    'Aplicar notação científica em problemas contextualizados',
    'Resolver equações de 1º e 2º grau com precisão',
    'Resolver sistemas de equações por diferentes métodos',
    'Integrar todos os conceitos em problemas complexos'
  ],

  summary: {
    readTime: 7,
    content: [
      {
        icon: '🏆',
        title: 'Exame Final — Revisão Completa',
        text: 'Revise todos os tópicos do capítulo:\n\n⚡ POTENCIAÇÃO: aᵐ × aⁿ = aᵐ⁺ⁿ | aᵐ÷aⁿ = aᵐ⁻ⁿ | (aᵐ)ⁿ = aᵐⁿ | a⁰=1 | a⁻ⁿ=1/aⁿ\n\n√ RADICIAÇÃO: √(a×b)=√a×√b | √(a/b)=√a/√b | a^(1/n)=ⁿ√a\n\n🔬 NOTAÇÃO CIENTÍFICA: a × 10ⁿ com 1 ≤ a < 10'
      },
      {
        icon: '⚖️',
        title: 'Equações — Revisão',
        text: '1º GRAU: ax + b = c → x = (c−b)/a\n• Verificar sempre substituindo\n• Inequação: inverte sinal ao × ou ÷ por negativo\n\n2º GRAU: ax² + bx + c = 0\n• Δ = b² − 4ac\n• x = (−b ± √Δ)/2a (Bhaskara)\n• Girard: x₁+x₂=−b/a; x₁×x₂=c/a\n• Incompleta: fatorar ou isolar x²'
      },
      {
        icon: '🔗',
        title: 'Sistemas — Revisão',
        text: 'SUBSTITUIÇÃO: isola uma variável e substitui na outra\n\nADIÇÃO: torna coeficientes opostos e soma\n\nCLASSIFICAÇÃO:\n• Possível e determinado: 1 solução\n• Impossível: sem solução (retas paralelas)\n• Indeterminado: infinitas soluções (retas coincidentes)\n\nDica: ao dobrar os coeficientes de uma equação e os segundos membros coincidirem → indeterminado; se não coincidirem → impossível.'
      },
      {
        icon: '📊',
        title: 'Conceitos Mais Cobrados',
        text: '1. a⁰ = 1 para qualquer a ≠ 0\n2. Expoente negativo: a⁻ⁿ = 1/aⁿ\n3. Potência de potência: MULTIPLICA expoentes\n4. Multiplicação mesma base: SOMA expoentes\n5. Bhaskara: Δ=b²−4ac; raízes por (−b±√Δ)/2a\n6. Δ<0 → sem raízes reais\n7. Inverter desigualdade ao × ÷ por negativo\n8. Sistema impossível ≠ indeterminado\n9. Notação científica: 1 ≤ coeficiente < 10'
      },
      {
        icon: '⚡',
        title: 'Estratégia Final de Prova',
        text: 'Sequência de verificação:\n1. Potências/raízes: aplique a propriedade correta\n2. Notação científica: ajuste o coeficiente e os expoentes\n3. Equação: isole a incógnita passo a passo\n4. Bhaskara: calcule Δ antes de tudo\n5. Sistema: identifique o método mais eficiente\n6. Problema contextualizado: monte a equação antes de resolver\n7. SEMPRE verifique a resposta substituindo!\n\nBoa sorte — você vai bem!'
      }
    ],

    flashcards: [
      { q: 'Quanto é 2⁰ + 2¹ + 2² + 2³?',               a: '1+2+4+8 = 15.' },
      { q: 'Qual a raiz dupla de x²−6x+9=0?',             a: 'x=3 (Δ=36−36=0; x=6/2=3).' },
      { q: 'Como identificar sistema impossível?',          a: 'Equações com mesma parte dos coeficientes mas segundos membros diferentes.' },
      { q: 'Quanto é (√3)⁶?',                              a: '27 (=(3^(1/2))⁶ = 3³ = 27).' },
      { q: 'Qual o produto das raízes de x²+3x−10=0?',    a: '−10 (c/a = −10/1 = −10). Raízes: 2 e −5.' },
      { q: 'Expresse 0,0000072 em notação científica.',    a: '7,2 × 10⁻⁶.' }
    ],

    mnemonics: [
      { trigger: 'Potências resumo',  memory: '"MESMA BASE: + (mult), − (div), × (pot de pot)"' },
      { trigger: 'Bhaskara',          memory: '"Menos B, raiz de delta, sobre 2A — dois valores ± "' },
      { trigger: 'Notação científica', memory: '"Um dígito na frente da vírgula — mover pra esquerda = expoente positivo"' }
    ],

    miniReview: [
      { q: 'Simplifique √48.',                     a: '4√3 (48=16×3; √16=4).' },
      { q: 'Resolva: 3(x−4) = 2x + 1.',           a: '3x−12=2x+1 → x=13.' },
      { q: 'Resolva: {x+y=9 e {x−y=3.',           a: 'Adição: 2x=12→x=6, y=3. Par (6,3).' }
    ]
  },

  warmup: [
    {
      prompt: '🏆 EXAME FINAL | O valor de 2³ + 3² é:',
      options: [
        { text: '13',  correct: false },
        { text: '17',  correct: true  },
        { text: '25',  correct: false },
        { text: '72',  correct: false }
      ],
      explanation: '2³ = 8 e 3² = 9. Total: 8 + 9 = 17.'
    },
    {
      prompt: '🏆 EXAME FINAL | A raiz da equação 7x − 21 = 0 é:',
      options: [
        { text: 'x = −3',  correct: false },
        { text: 'x = 3',   correct: true  },
        { text: 'x = 7',   correct: false },
        { text: 'x = 21',  correct: false }
      ],
      explanation: '7x = 21 → x = 3.'
    },
    {
      prompt: '🏆 EXAME FINAL | √169 é igual a:',
      options: [
        { text: '11',  correct: false },
        { text: '12',  correct: false },
        { text: '13',  correct: true  },
        { text: '14',  correct: false }
      ],
      explanation: '√169 = 13, pois 13² = 169.'
    }
  ],

  guidedPractice: [
    {
      prompt: '🔍 DICA: Calcule Δ e use Bhaskara passo a passo.\n\nAs raízes de x² + 2x − 8 = 0 são:',
      options: [
        { text: 'x = 2 e x = −4',  correct: true  },
        { text: 'x = 4 e x = −2',  correct: false },
        { text: 'x = 2 e x = 4',   correct: false },
        { text: 'x = −2 e x = −4', correct: false }
      ],
      explanation: 'Δ = 4+32 = 36. x₁=(−2+6)/2=2; x₂=(−2−6)/2=−4. Verificação: 2×(−4)=−8 e 2+(−4)=−2 ✓'
    },
    {
      prompt: '🔍 DICA: Na notação científica, ajuste para 1 ≤ coeficiente < 10.\n\n(5 × 10⁶) + (3 × 10⁵) em notação científica é:',
      options: [
        { text: '8 × 10⁶',     correct: false },
        { text: '5,3 × 10⁶',   correct: true  },
        { text: '8 × 10¹¹',    correct: false },
        { text: '53 × 10⁵',    correct: false }
      ],
      explanation: '5×10⁶ + 3×10⁵ = 50×10⁵ + 3×10⁵ = 53×10⁵ = 5,3×10⁶.'
    }
  ],

  questions: [
    {
      prompt: '🏆 EXAME | Simplifique: 4² × 2³ ÷ 8',
      options: [
        { text: '16',  correct: true  },
        { text: '8',   correct: false },
        { text: '32',  correct: false },
        { text: '64',  correct: false }
      ],
      explanation: '4²=16; 2³=8. 16×8=128. 128÷8=16. Ou: 4²×2³÷8 = 2⁴×2³÷2³ = 2⁴ = 16.'
    },
    {
      prompt: '🏆 EXAME | Uma caixa quadrada tem superfície total de 600 cm² (6 faces). O lado mede:',
      options: [
        { text: '5 cm',   correct: false },
        { text: '10 cm',  correct: true  },
        { text: '15 cm',  correct: false },
        { text: '100 cm', correct: false }
      ],
      explanation: '6l² = 600 → l² = 100 → l = 10 cm.'
    },
    {
      prompt: '🏆 EXAME | O discriminante de 3x² − 6x + 3 = 0 é:',
      options: [
        { text: '72',  correct: false },
        { text: '36',  correct: false },
        { text: '0',   correct: true  },
        { text: '−36', correct: false }
      ],
      explanation: 'Δ = (−6)² − 4(3)(3) = 36 − 36 = 0. Raiz dupla: x = 6/6 = 1.'
    },
    {
      prompt: '🏆 EXAME | Resolva: { 2x − y = 3 e { x + y = 6.',
      options: [
        { text: '(2, 4)',  correct: false },
        { text: '(3, 3)',  correct: true  },
        { text: '(4, 2)',  correct: false },
        { text: '(5, 1)',  correct: false }
      ],
      explanation: 'Adição: 3x=9 → x=3. y=6−3=3. Par (3,3). Verif: 2(3)−3=3 ✓ e 3+3=6 ✓'
    },
    {
      prompt: '🏆 EXAME | A Terra tem massa ≈ 6 × 10²⁴ kg. Júpiter tem massa ≈ 1,9 × 10²⁷ kg. Júpiter é quantas vezes mais massivo?',
      options: [
        { text: '≈ 317 vezes',  correct: true  },
        { text: '≈ 31,7 vezes', correct: false },
        { text: '≈ 3.170 vezes',correct: false },
        { text: '≈ 10³ vezes',  correct: false }
      ],
      explanation: '1,9×10²⁷ ÷ 6×10²⁴ = (1,9/6) × 10³ ≈ 0,317 × 10³ ≈ 317 vezes.'
    },
    {
      prompt: '🏆 EXAME | As raízes de x² − 4x + 4 = 0 são:',
      options: [
        { text: 'x = 2 e x = −2',  correct: false },
        { text: 'x = 2 (dupla)',    correct: true  },
        { text: 'x = 4 e x = 1',   correct: false },
        { text: 'Sem raízes reais', correct: false }
      ],
      explanation: 'x²−4x+4 = (x−2)² = 0 → x=2 (raiz dupla). Δ = 16−16 = 0.'
    },
    {
      prompt: '🏆 EXAME | Resolva a inequação: x² < 9 (para x real):',
      options: [
        { text: 'x < 3',         correct: false },
        { text: 'x < 3 e x > 0', correct: false },
        { text: '−3 < x < 3',    correct: true  },
        { text: 'x > −3',        correct: false }
      ],
      explanation: 'x² < 9 → |x| < 3 → −3 < x < 3.'
    },
    {
      prompt: '🏆 EXAME | Para que valores de k, a equação kx² + 4x + 1 = 0 é do 2º grau?',
      options: [
        { text: 'k ≠ 0',  correct: true  },
        { text: 'k > 0',  correct: false },
        { text: 'k ≥ 1',  correct: false },
        { text: 'k = 4',  correct: false }
      ],
      explanation: 'Para ser do 2º grau, o coeficiente de x² deve ser não nulo: k ≠ 0.'
    },
    {
      prompt: '🏆 EXAME | Racionalizando 12/√6, obtemos:',
      options: [
        { text: '2√6',   correct: true  },
        { text: '√6/2',  correct: false },
        { text: '6√2',   correct: false },
        { text: '2√3',   correct: false }
      ],
      explanation: '12/√6 × √6/√6 = 12√6/6 = 2√6.'
    },
    {
      prompt: '🏆 EXAME | Em problema de área, um terreno retangular tem comprimento 3m a mais que a largura e área de 40m². A largura é:',
      options: [
        { text: '4 m',   correct: false },
        { text: '5 m',   correct: true  },
        { text: '8 m',   correct: false },
        { text: '10 m',  correct: false }
      ],
      explanation: 'l(l+3)=40 → l²+3l−40=0. Δ=9+160=169. l=(−3+13)/2=5 m. (5×8=40 ✓)'
    }
  ],

  adaptiveReview: [
    {
      prompt: '🏆 DIFÍCIL: A equação biquadrada x⁴ − 5x² + 4 = 0 tem quantas raízes reais?',
      options: [
        { text: '1',   correct: false },
        { text: '2',   correct: false },
        { text: '4',   correct: true  },
        { text: '0',   correct: false }
      ],
      explanation: 'Seja u=x²: u²−5u+4=0 → (u−4)(u−1)=0 → u=4 ou u=1. Então x²=4→x=±2; x²=1→x=±1. Total: 4 raízes reais: ±1 e ±2.'
    },
    {
      prompt: '🏆 DIFÍCIL: Um capital de R$1.000 rendendo juros compostos a taxa r ao ano. Em 2 anos vale R$1.210. Qual a taxa?',
      options: [
        { text: '5%',   correct: false },
        { text: '10%',  correct: true  },
        { text: '15%',  correct: false },
        { text: '21%',  correct: false }
      ],
      explanation: '1000(1+r)² = 1210 → (1+r)² = 1,21 → 1+r = √1,21 = 1,1 → r = 0,1 = 10%.'
    }
  ],

  rewards: { xp: 250, gems: 25, badge: '🏆 Grão-Mestre Algébrico' },
  completionMessage: '🏆 CAPÍTULO COMPLETO! Você é o Grão-Mestre Algébrico! Potências, raízes, notação científica e equações — tudo dominado. A matemática está ao seu comando!',
  nextStage: null
};

window.MAT8_SFINAL = MAT8_SFINAL;
