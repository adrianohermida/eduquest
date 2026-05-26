/**
 * MAT8 STAGE 06 — Equação do 2º Grau
 * Fórmula de Bhaskara, discriminante e aplicações
 */

const MAT8_S06 = {
  id: 'mat8_s06',
  title: 'Equação do 2º Grau',
  icon: '📐',
  difficulty: 'medium',
  estimatedTime: 16,

  learningObjectives: [
    'Reconhecer a forma geral de uma equação do 2º grau',
    'Calcular o discriminante (Δ) e interpretar seu valor',
    'Aplicar a fórmula de Bhaskara para encontrar as raízes',
    'Usar as relações de Girard (soma e produto das raízes)',
    'Resolver problemas contextualizados com equações quadráticas'
  ],

  summary: {
    readTime: 6,
    content: [
      {
        icon: '📐',
        title: 'Equação do 2º Grau',
        text: 'Forma geral: ax² + bx + c = 0 (a ≠ 0)\n\nExemplos:\n• x² − 5x + 6 = 0 (a=1, b=−5, c=6)\n• 2x² + 3x = 0 (a=2, b=3, c=0)\n• x² − 9 = 0 (a=1, b=0, c=−9)\n\nTipos especiais:\n• Completa: todos os termos presentes (a,b,c ≠ 0)\n• Incompleta tipo 1: b=0 → ax² + c = 0\n• Incompleta tipo 2: c=0 → ax² + bx = 0 (fatorar!)\n\nA variável tem grau MÁXIMO 2 → pode ter até 2 soluções!'
      },
      {
        icon: '🔢',
        title: 'Discriminante Δ (Delta)',
        text: 'Δ = b² − 4ac\n\nO discriminante determina o número de raízes reais:\n\n• Δ > 0: duas raízes reais distintas\n• Δ = 0: uma raiz real (dupla): x = −b/2a\n• Δ < 0: sem raízes reais (raízes complexas)\n\nExemplo: x² − 5x + 6 = 0\na=1, b=−5, c=6\nΔ = (−5)² − 4(1)(6) = 25 − 24 = 1\nΔ > 0 → duas raízes distintas!'
      },
      {
        icon: '🧮',
        title: 'Fórmula de Bhaskara',
        text: 'Quando Δ ≥ 0:\nx = (−b ± √Δ) / 2a\n\nDuas raízes:\n• x₁ = (−b + √Δ) / 2a\n• x₂ = (−b − √Δ) / 2a\n\nExemplo: x² − 5x + 6 = 0 (Δ = 1)\nx₁ = (5 + 1)/2 = 3\nx₂ = (5 − 1)/2 = 2\n\nVerificação: (x−3)(x−2) = x²−5x+6 ✓\n\n⚡ Macete: "Menos b, mais ou menos raiz de delta, sobre dois a"'
      },
      {
        icon: '⚡',
        title: 'Relações de Girard',
        text: 'Para ax² + bx + c = 0 com raízes x₁ e x₂:\n\nSoma das raízes: x₁ + x₂ = −b/a\nProduto das raízes: x₁ × x₂ = c/a\n\nExemplo: x² − 5x + 6 = 0\n• Soma: x₁+x₂ = −(−5)/1 = 5 (verificar: 3+2=5 ✓)\n• Produto: x₁×x₂ = 6/1 = 6 (verificar: 3×2=6 ✓)\n\n💡 Permite montar equação conhecendo as raízes:\nSe x₁=2 e x₂=5: x² − 7x + 10 = 0'
      },
      {
        icon: '📝',
        title: 'Casos Especiais e Fatoração',
        text: 'INCOMPLETA tipo ax² + c = 0:\nIsolando x²: x² = −c/a → x = ±√(−c/a) [se ≥ 0]\n\nEx: x² − 16 = 0 → x² = 16 → x = ±4\n\nINCOMPLETA tipo ax² + bx = 0:\nFatorar x: x(ax + b) = 0\n→ x = 0 ou ax + b = 0\n\nEx: 3x² − 6x = 0 → 3x(x−2) = 0\n→ x = 0 ou x = 2\n\nTRINÔMIO QUADRADO: fatorar quando possível\nEx: x² − 5x + 6 = (x−2)(x−3) = 0'
      }
    ],

    flashcards: [
      { q: 'Qual a fórmula de Bhaskara?',                          a: 'x = (−b ± √Δ) / 2a, onde Δ = b² − 4ac.' },
      { q: 'O que significa Δ < 0?',                               a: 'A equação não tem raízes reais (raízes complexas).' },
      { q: 'Qual é a soma das raízes de x² − 7x + 12 = 0?',       a: '−b/a = 7. (Raízes são 3 e 4: 3+4=7 ✓)' },
      { q: 'Como resolver ax² + bx = 0?',                          a: 'Fatorar: x(ax + b) = 0 → x = 0 ou x = −b/a.' },
      { q: 'O que é uma equação do 2º grau completa?',             a: 'Todos os coeficientes a, b, c são não nulos.' },
      { q: 'Quanto é o produto das raízes de 2x² − 6x + 4 = 0?', a: 'c/a = 4/2 = 2. (Raízes: 1 e 2 → 1×2=2 ✓)' }
    ],

    mnemonics: [
      { trigger: 'Bhaskara',    memory: '"Menos B, mais ou menos Raiz de Delta, sobre 2A" — repita rítmico!' },
      { trigger: 'Girard soma', memory: '"Soma = −b/a = oposto da razão b por a"' },
      { trigger: 'Sinal de Δ',  memory: '"Positivo = 2 raízes; Zero = 1 raiz dupla; Negativo = Nenhuma real"' }
    ],

    miniReview: [
      { q: 'Calcule Δ para 2x² − 4x + 2 = 0.',              a: 'Δ = 16 − 16 = 0. Raiz dupla: x = 4/4 = 1.' },
      { q: 'Resolva x² − 16 = 0.',                           a: 'x = ±4 (sem Bhaskara: x² = 16).' },
      { q: 'Monte a equação com raízes x₁=−1 e x₂=3.',       a: 'x² − 2x − 3 = 0 (soma=2, produto=−3).' }
    ]
  },

  warmup: [
    {
      prompt: 'A forma geral da equação do 2º grau é:',
      options: [
        { text: 'ax + b = 0',      correct: false },
        { text: 'ax² + bx + c = 0, a ≠ 0', correct: true },
        { text: 'ax² = 0',         correct: false },
        { text: 'ax³ + bx² + cx = 0', correct: false }
      ],
      explanation: 'ax² + bx + c = 0 com a ≠ 0 (se a=0, vira 1º grau).'
    },
    {
      prompt: 'O discriminante Δ = b² − 4ac de x² + 4x + 4 = 0 vale:',
      options: [
        { text: '16',  correct: false },
        { text: '0',   correct: true  },
        { text: '−4',  correct: false },
        { text: '8',   correct: false }
      ],
      explanation: 'Δ = 4² − 4(1)(4) = 16 − 16 = 0 → raiz dupla: x = −4/2 = −2.'
    },
    {
      prompt: 'Se Δ < 0, a equação do 2º grau tem:',
      options: [
        { text: 'Duas raízes reais distintas',  correct: false },
        { text: 'Uma raiz real dupla',          correct: false },
        { text: 'Nenhuma raiz real',            correct: true  },
        { text: 'Infinitas raízes',             correct: false }
      ],
      explanation: 'Δ < 0: √Δ seria √(número negativo) — não existe nos reais. Sem solução real.'
    }
  ],

  guidedPractice: [
    {
      prompt: '🔍 DICA: Calcule Δ = b²−4ac e depois use x = (−b ± √Δ)/2a.\n\nAs raízes de x² − 7x + 12 = 0 são:',
      options: [
        { text: 'x = 3 e x = 4',   correct: true  },
        { text: 'x = 2 e x = 6',   correct: false },
        { text: 'x = 1 e x = 12',  correct: false },
        { text: 'x = −3 e x = −4', correct: false }
      ],
      explanation: 'Δ = 49−48 = 1. x₁ = (7+1)/2 = 4. x₂ = (7−1)/2 = 3. Verificação: 3×4=12 e 3+4=7 ✓'
    },
    {
      prompt: '🔍 DICA: Na equação incompleta ax²+bx=0, sempre fatore x em evidência.\n\nAs soluções de 4x² − 8x = 0 são:',
      options: [
        { text: 'x = 0 e x = 2',   correct: true  },
        { text: 'x = 2 apenas',    correct: false },
        { text: 'x = 0 e x = −2', correct: false },
        { text: 'x = 4 e x = 2',   correct: false }
      ],
      explanation: '4x(x−2) = 0 → x = 0 ou x−2 = 0 → x = 2. Duas raízes: 0 e 2.'
    }
  ],

  questions: [
    {
      prompt: 'As raízes de x² − 5x − 14 = 0 são:',
      options: [
        { text: 'x = 7 e x = −2',  correct: true  },
        { text: 'x = 5 e x = 14',  correct: false },
        { text: 'x = −7 e x = 2',  correct: false },
        { text: 'x = 7 e x = 2',   correct: false }
      ],
      explanation: 'Δ = 25+56 = 81. √81=9. x₁=(5+9)/2=7; x₂=(5−9)/2=−2. Verificação: 7×(−2)=−14 e 7+(−2)=5 ✓'
    },
    {
      prompt: 'Qual valor de k faz x² + kx + 9 = 0 ter raiz dupla?',
      options: [
        { text: 'k = 3',   correct: false },
        { text: 'k = 6',   correct: true  },
        { text: 'k = 9',   correct: false },
        { text: 'k = −3',  correct: false }
      ],
      explanation: 'Raiz dupla: Δ = 0. k² − 4(9) = 0 → k² = 36 → k = ±6. Para positivo: k=6.'
    },
    {
      prompt: 'A área de um retângulo é 48 m². O comprimento tem 2 m a mais que a largura. O comprimento é:',
      options: [
        { text: '6 m',   correct: false },
        { text: '8 m',   correct: true  },
        { text: '10 m',  correct: false },
        { text: '12 m',  correct: false }
      ],
      explanation: 'Largura=x; comprimento=x+2. x(x+2)=48 → x²+2x−48=0. Δ=4+192=196. x=(−2+14)/2=6. Comprimento=8m.'
    },
    {
      prompt: 'A soma das raízes de 3x² − 15x + 18 = 0 é:',
      options: [
        { text: '−5',  correct: false },
        { text: '5',   correct: true  },
        { text: '6',   correct: false },
        { text: '18',  correct: false }
      ],
      explanation: 'Soma = −b/a = −(−15)/3 = 5. (Raízes: 2 e 3 → 2+3=5; 2×3=6=18/3 ✓)'
    },
    {
      prompt: 'Resolva x² = 25.',
      options: [
        { text: 'x = 5',         correct: false },
        { text: 'x = −5',        correct: false },
        { text: 'x = ±5',        correct: true  },
        { text: 'x = 5 ou x=12,5', correct: false }
      ],
      explanation: 'x² = 25 → x = ±√25 = ±5. Equação incompleta: duas raízes opostas.'
    },
    {
      prompt: 'A equação x² − 6x + 10 = 0 tem:',
      options: [
        { text: 'Duas raízes reais iguais',    correct: false },
        { text: 'Duas raízes reais distintas', correct: false },
        { text: 'Nenhuma raiz real',           correct: true  },
        { text: 'Uma raiz real positiva',      correct: false }
      ],
      explanation: 'Δ = 36 − 40 = −4 < 0 → sem raízes reais.'
    },
    {
      prompt: 'Um número menos seu quadrado é −12. Os valores possíveis para o número são:',
      options: [
        { text: '3 e −4',  correct: true  },
        { text: '4 e −3',  correct: false },
        { text: '2 e 6',   correct: false },
        { text: '6 e −2',  correct: false }
      ],
      explanation: 'x − x² = −12 → x² − x − 12 = 0. Δ=1+48=49. x₁=(1+7)/2=4; x₂=(1−7)/2=−3. Verificação: 4−16=−12 ✓ e −3−9=−12 ✓. Resposta: 4 e −3.'
    },
    {
      prompt: 'Uma bola é lançada para cima com altura h = −t² + 6t metros (t em segundos). Quando retorna ao solo?',
      options: [
        { text: 't = 3 s',   correct: false },
        { text: 't = 6 s',   correct: true  },
        { text: 't = 9 s',   correct: false },
        { text: 't = 12 s',  correct: false }
      ],
      explanation: 'h=0: −t²+6t=0 → t(−t+6)=0 → t=0 (partida) ou t=6 (volta ao solo). Retorna em t=6 s.'
    },
    {
      prompt: 'O produto das raízes de 2x² + 8x − 10 = 0 é:',
      options: [
        { text: '−5',  correct: true  },
        { text: '5',   correct: false },
        { text: '−4',  correct: false },
        { text: '10',  correct: false }
      ],
      explanation: 'Produto = c/a = −10/2 = −5. (Raízes: 1 e −5 → 1×(−5)=−5 ✓)'
    },
    {
      prompt: 'A equação (x − 3)(x + 5) = 0 tem raízes:',
      options: [
        { text: 'x = 3 e x = 5',    correct: false },
        { text: 'x = −3 e x = 5',   correct: false },
        { text: 'x = 3 e x = −5',   correct: true  },
        { text: 'x = −3 e x = −5',  correct: false }
      ],
      explanation: '(x−3)=0 → x=3; (x+5)=0 → x=−5. Produto nulo: pelo menos um fator é zero.'
    }
  ],

  adaptiveReview: [
    {
      prompt: 'DIFÍCIL: Uma empresa tem lucro L = −2x² + 20x − 32 (R$ mil), com x = unidades (mil). Para quais valores de x o lucro é positivo?',
      options: [
        { text: '2 < x < 8',   correct: true  },
        { text: 'x < 2 ou x > 8', correct: false },
        { text: '4 < x < 16',  correct: false },
        { text: 'x > 5',       correct: false }
      ],
      explanation: '−2x²+20x−32>0 → x²−10x+16<0 → (x−2)(x−8)<0. O produto é negativo entre as raízes: 2<x<8.'
    },
    {
      prompt: 'DIFÍCIL: Para que ax² + 6x + 1 = 0 tenha duas raízes reais distintas, "a" deve satisfazer:',
      options: [
        { text: 'a > 9',     correct: false },
        { text: 'a < 9',     correct: false },
        { text: '0 < a < 9', correct: true  },
        { text: 'a ≠ 0',     correct: false }
      ],
      explanation: 'Δ > 0: 36 − 4a > 0 → 4a < 36 → a < 9. Mas também a ≠ 0 (senão não é 2º grau). E a > 0 para ter duas raízes distintas positivas... Na verdade: Δ>0 → a < 9, e a≠0. Resposta completa: a < 9 e a ≠ 0.'
    }
  ],

  rewards: { xp: 150, gems: 15, badge: '📐 Arquiteto Quadrático' },
  completionMessage: '📐 Equação do 2º Grau dominada! Você agora lida com curvas e parábolas. Próximo: o Arquimago Quadrático te espera!',
  nextStage: 'mat8_sboss'
};

window.MAT8_S06 = MAT8_S06;
