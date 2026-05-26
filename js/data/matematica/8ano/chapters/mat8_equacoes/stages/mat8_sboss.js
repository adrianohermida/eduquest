/**
 * MAT8 BOSS — Arquimago Quadrático
 * Revisão integrada: potências, raízes, notação científica, equações
 */

const MAT8_SBOSS = {
  id: 'mat8_sboss',
  title: 'Arquimago Quadrático',
  icon: '🧙',
  difficulty: 'boss',
  estimatedTime: 20,

  learningObjectives: [
    'Integrar todos os tópicos de potências, raízes, notação científica e equações',
    'Resolver problemas complexos combinando múltiplos conceitos',
    'Aplicar Bhaskara e sistemas em situações reais desafiadoras',
    'Raciocinar algebricamente com precisão e velocidade',
    'Demonstrar domínio completo antes do exame final'
  ],

  summary: {
    readTime: 5,
    content: [
      {
        icon: '🧙',
        title: 'O Arquimago Quadrático Desperta!',
        text: 'O Arquimago Quadrático domina todas as formas da álgebra e ameaça transformar números inteiros em frações irracionais! Para vencê-lo, domine TODOS os poderes:\n\n⚡ Potenciação → √ Radiciação → 🔬 Notação Científica → ⚖️ Equação 1º Grau → 🔗 Sistemas → 📐 Equação 2º Grau\n\nCada conceito que você dominar cancela um de seus feitiços!'
      },
      {
        icon: '🔄',
        title: 'Conexões Entre os Tópicos',
        text: 'Os tópicos se conectam:\n• a^(1/2) = √a (potência fracionária = raiz)\n• Notação científica usa potências de 10\n• Bhaskara usa √Δ (raiz quadrada)\n• Sistemas de 1º grau = duas equações lineares\n• Equação do 2º grau pode ser fatorada em duas de 1º\n\n⚡ Dominar potências e raízes é a base de TUDO!'
      },
      {
        icon: '📋',
        title: 'Fórmulas Essenciais — Revisão Rápida',
        text: 'POTÊNCIAS:\naᵐ × aⁿ = aᵐ⁺ⁿ | aᵐ ÷ aⁿ = aᵐ⁻ⁿ | (aᵐ)ⁿ = aᵐⁿ | a⁰ = 1\n\nRADICAIS:\n√(a×b) = √a × √b | √(a/b) = √a/√b\n\nBHASKARA:\nΔ = b²−4ac | x = (−b ± √Δ)/2a\n\nGIRARD:\nx₁+x₂ = −b/a | x₁×x₂ = c/a\n\nNOTAÇÃO:\na × 10ⁿ com 1 ≤ a < 10'
      },
      {
        icon: '🎯',
        title: 'Pontos Críticos para a Batalha',
        text: 'Atenção especial em:\n1. Sinal em potências com base negativa (par/ímpar)\n2. Inverter sinal da desigualdade ao dividir por negativo\n3. Δ < 0 → sem raízes reais (não forçar solução!)\n4. Equação incompleta tipo ax²+bx=0: FATORAR, não cancelar x\n5. Sistema impossível vs. indeterminado\n6. Ajustar coeficiente na notação científica (1 ≤ a < 10)\n\nCuidado com pegadinhas!'
      },
      {
        icon: '⚡',
        title: 'Estratégia de Batalha',
        text: 'Ordem de ataque:\n1. Leia o problema completamente antes de começar\n2. Identifique qual tipo de equação/operação está sendo pedida\n3. Para equações: verifique sempre a solução\n4. Para sistemas: use o método mais eficiente (substituição ou adição)\n5. Para potências/raízes: simplifique passo a passo\n6. Para notação científica: ajuste o coeficiente por último\n\nForça, mago — você vai vencer o Arquimago!'
      }
    ],

    flashcards: [
      { q: 'Qual a fórmula de Bhaskara?',                        a: 'x = (−b ± √(b²−4ac)) / 2a' },
      { q: 'Quando um sistema é impossível?',                    a: 'Quando não tem solução — as equações representam retas paralelas.' },
      { q: 'O que significa a⁻ⁿ?',                              a: '1/aⁿ (inverso da potência).' },
      { q: 'Como converter 0,00042 para notação científica?',    a: '4,2 × 10⁻⁴.' },
      { q: 'Qual a soma das raízes de ax²+bx+c=0?',             a: '−b/a (relação de Girard).' },
      { q: 'Como resolver ax²+bx=0?',                           a: 'Fatorar: x(ax+b)=0 → x=0 ou x=−b/a.' }
    ],

    mnemonics: [
      { trigger: 'Bhaskara', memory: '"Menos b, raiz de delta — tudo sobre 2a"' },
      { trigger: 'Potências', memory: '"Mesma base: SOMA expoentes (mult), SUBTRAI (div), MULTIPLICA (pot de pot)"' },
      { trigger: 'Δ',         memory: '"Positivo=Par; Zero=Um; Negativo=Nenhum"' }
    ],

    miniReview: [
      { q: 'Simplifique 2³ × 2⁵ ÷ 2⁴.',                     a: '2³⁺⁵⁻⁴ = 2⁴ = 16.' },
      { q: 'Resolva o sistema: {x+y=7 e {2x−y=5.',            a: 'Adição: 3x=12 → x=4, y=3.' },
      { q: 'Calcule as raízes de x²−9x+20=0.',               a: 'Δ=81−80=1. x₁=5, x₂=4. (Soma=9, Produto=20 ✓)' }
    ]
  },

  warmup: [
    {
      prompt: '🧙 ARQUIMAGO ATACA! | Simplifique 3⁴ × 3⁻² ÷ 3:',
      options: [
        { text: '3⁵',  correct: false },
        { text: '3³',  correct: false },
        { text: '3¹',  correct: true  },
        { text: '9',   correct: false }
      ],
      explanation: '3⁴ × 3⁻² ÷ 3¹ = 3⁴⁺⁽⁻²⁾⁻¹ = 3¹ = 3. Soma os expoentes: 4−2−1=1.'
    },
    {
      prompt: '🧙 ARQUIMAGO ATACA! | A equação x² − 4 = 0 tem raízes:',
      options: [
        { text: 'x = 4',      correct: false },
        { text: 'x = 2',      correct: false },
        { text: 'x = ±2',     correct: true  },
        { text: 'x = ±4',     correct: false }
      ],
      explanation: 'x² = 4 → x = ±2. Equação incompleta com c ≠ 0.'
    },
    {
      prompt: '🧙 ARQUIMAGO ATACA! | √(36/100) simplifica para:',
      options: [
        { text: '6/100',  correct: false },
        { text: '6/10',   correct: true  },
        { text: '3/5',    correct: false },
        { text: '√136',   correct: false }
      ],
      explanation: '√36/√100 = 6/10 = 3/5. Ou direto: √0,36 = 0,6 = 6/10.'
    }
  ],

  guidedPractice: [
    {
      prompt: '⚔️ ATAQUE DO ARQUIMAGO: "Embaralho potências com raízes!"\n🔍 DICA: a^(1/2) = √a.\n\n8^(2/3) é equivalente a:',
      options: [
        { text: '2',   correct: false },
        { text: '4',   correct: true  },
        { text: '8',   correct: false },
        { text: '16',  correct: false }
      ],
      explanation: '8^(2/3) = (8^(1/3))² = (∛8)² = 2² = 4. Raiz cúbica de 8 é 2, elevado ao quadrado dá 4.'
    },
    {
      prompt: '⚔️ ATAQUE DO ARQUIMAGO: "Confundo sistemas com equações quadráticas!"\n🔍 DICA: Substitua a equação mais simples.\n\nO sistema { y = x² e { y = x + 2 tem soluções:',
      options: [
        { text: 'x = 1 e x = −2',   correct: false },
        { text: 'x = 2 e x = −1',   correct: true  },
        { text: 'x = 0 e x = 2',    correct: false },
        { text: 'x = −2 e x = 3',   correct: false }
      ],
      explanation: 'x² = x+2 → x²−x−2=0 → (x−2)(x+1)=0 → x=2 ou x=−1. Pontos: (2,4) e (−1,1).'
    }
  ],

  questions: [
    {
      prompt: '🧙 FEITIÇO 1 | O valor de (√5)⁴ é:',
      options: [
        { text: '√20',  correct: false },
        { text: '5²',   correct: false },
        { text: '25',   correct: true  },
        { text: '5√5',  correct: false }
      ],
      explanation: '(√5)⁴ = (5^(1/2))⁴ = 5² = 25.'
    },
    {
      prompt: '🧙 FEITIÇO 2 | Em notação científica, 0,000000056 é:',
      options: [
        { text: '5,6 × 10⁻⁷',  correct: false },
        { text: '5,6 × 10⁻⁸',  correct: true  },
        { text: '56 × 10⁻⁹',   correct: false },
        { text: '5,6 × 10⁷',   correct: false }
      ],
      explanation: '0,000000056 → vírgula anda 8 casas para direita → 5,6 × 10⁻⁸.'
    },
    {
      prompt: '🧙 FEITIÇO 3 | Resolva 2x² − 8 = 0.',
      options: [
        { text: 'x = 4',       correct: false },
        { text: 'x = ±2',      correct: true  },
        { text: 'x = ±4',      correct: false },
        { text: 'x = 2 apenas', correct: false }
      ],
      explanation: '2x² = 8 → x² = 4 → x = ±2.'
    },
    {
      prompt: '🧙 FEITIÇO 4 | Para o sistema { 3x − y = 5 e { x + 2y = 8, o valor de x é:',
      options: [
        { text: 'x = 2',  correct: false },
        { text: 'x = 3',  correct: false },
        { text: 'x = 18/7', correct: false },
        { text: 'x = 18/7', correct: true  }
      ],
      explanation: 'De (1): y=3x−5. Na (2): x+2(3x−5)=8 → x+6x−10=8 → 7x=18 → x=18/7 ≈ 2,57.'
    },
    {
      prompt: '🧙 FEITIÇO 5 | Um projétil sobe h = 40t − 5t² metros. Qual a altura máxima?',
      options: [
        { text: '40 m',  correct: false },
        { text: '80 m',  correct: true  },
        { text: '160 m', correct: false },
        { text: '5 m',   correct: false }
      ],
      explanation: 'Máximo: t = −b/2a = −40/(2×(−5)) = 4s. h(4) = 40(4)−5(16) = 160−80 = 80 m.'
    },
    {
      prompt: '🧙 FEITIÇO 6 | Qual é o valor de (2/3)⁻²?',
      options: [
        { text: '4/9',   correct: false },
        { text: '9/4',   correct: true  },
        { text: '−4/9',  correct: false },
        { text: '2/3',   correct: false }
      ],
      explanation: '(2/3)⁻² = (3/2)² = 9/4. Expoente negativo inverte a fração.'
    },
    {
      prompt: '🧙 FEITIÇO 7 | A equação 3x² + 12x + 12 = 0 tem discriminante Δ = 0. A raiz dupla é:',
      options: [
        { text: 'x = 2',   correct: false },
        { text: 'x = −2',  correct: true  },
        { text: 'x = −4',  correct: false },
        { text: 'x = 4',   correct: false }
      ],
      explanation: 'Raiz dupla: x = −b/2a = −12/6 = −2. (3x²+12x+12 = 3(x+2)² ✓)'
    },
    {
      prompt: '🧙 FEITIÇO 8 | (3 × 10⁴) × (4 × 10⁻⁶) em notação científica é:',
      options: [
        { text: '12 × 10⁻²',   correct: false },
        { text: '1,2 × 10⁻¹',  correct: true  },
        { text: '1,2 × 10²',   correct: false },
        { text: '12 × 10⁻¹',   correct: false }
      ],
      explanation: '3×4=12; 10⁴×10⁻⁶=10⁻². Resultado: 12×10⁻² = 1,2×10⁻¹.'
    },
    {
      prompt: '🧙 FEITIÇO 9 | A soma das raízes de 5x² − 3x + 7 = 0 é:',
      options: [
        { text: '7/5',   correct: false },
        { text: '3/5',   correct: true  },
        { text: '−3/5',  correct: false },
        { text: '5/3',   correct: false }
      ],
      explanation: 'Soma = −b/a = −(−3)/5 = 3/5. (Obs: Δ=9−140<0 → sem raízes reais, mas Girard ainda vale para raízes complexas.)'
    },
    {
      prompt: '🧙 FEITIÇO 10 | Se 4ˣ = 64, qual é x?',
      options: [
        { text: '2',   correct: false },
        { text: '3',   correct: true  },
        { text: '4',   correct: false },
        { text: '16',  correct: false }
      ],
      explanation: '4ˣ = 64 = 4³ → x = 3. (4¹=4, 4²=16, 4³=64 ✓)'
    },
    {
      prompt: '🧙 FEITIÇO 11 | √(x+5) = 4 implica que x vale:',
      options: [
        { text: '11',  correct: true  },
        { text: '9',   correct: false },
        { text: '3',   correct: false },
        { text: '21',  correct: false }
      ],
      explanation: '√(x+5) = 4 → x+5 = 16 (eleva ao quadrado) → x = 11. Verificação: √16 = 4 ✓'
    },
    {
      prompt: '🧙 FEITIÇO 12 FINAL | O produto das raízes de 2x² − 6x − 8 = 0 é:',
      options: [
        { text: '3',   correct: false },
        { text: '−4',  correct: true  },
        { text: '4',   correct: false },
        { text: '−3',  correct: false }
      ],
      explanation: 'Produto = c/a = −8/2 = −4. (Raízes: 4 e −1 → 4×(−1)=−4 ✓; Δ=36+64=100; x=(6±10)/4 → x=4 ou x=−1)'
    }
  ],

  adaptiveReview: [
    {
      prompt: '🧙 PODER FINAL | Resolva: x⁴ − 13x² + 36 = 0 (equação biquadrada)',
      options: [
        { text: 'x = ±1 e x = ±6',  correct: false },
        { text: 'x = ±2 e x = ±3',  correct: true  },
        { text: 'x = ±3 e x = ±4',  correct: false },
        { text: 'x = ±9 e x = ±4',  correct: false }
      ],
      explanation: 'Seja u=x²: u²−13u+36=0. Δ=169−144=25. u₁=9, u₂=4. Então x²=9→x=±3; x²=4→x=±2.'
    },
    {
      prompt: '🧙 PODER FINAL | Se aˣ = 3 e a² = 9, qual é x?',
      options: [
        { text: 'x = 1',  correct: true  },
        { text: 'x = 3',  correct: false },
        { text: 'x = 2',  correct: false },
        { text: 'x = 9',  correct: false }
      ],
      explanation: 'a² = 9 → a = 3. Então 3ˣ = 3 = 3¹ → x = 1.'
    }
  ],

  rewards: { xp: 200, gems: 20, badge: '🧙 Vencedor do Arquimago' },
  completionMessage: '🧙 ARQUIMAGO QUADRÁTICO DERROTADO! Seus feitiços algébricos foram todos neutralizados! Você domina potências, raízes e equações. O Exame Final te aguarda!',
  nextStage: 'mat8_sfinal'
};

window.MAT8_SBOSS = MAT8_SBOSS;
