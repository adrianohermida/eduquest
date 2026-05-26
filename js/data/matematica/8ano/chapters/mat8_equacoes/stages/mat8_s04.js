/**
 * MAT8 STAGE 04 — Equação do 1º Grau
 * Resolução de equações lineares e problemas
 */

const MAT8_S04 = {
  id: 'mat8_s04',
  title: 'Equação do 1º Grau',
  icon: '⚖️',
  difficulty: 'medium',
  estimatedTime: 13,

  learningObjectives: [
    'Reconhecer e montar equações do 1º grau',
    'Resolver equações aplicando operações inversas',
    'Verificar a solução substituindo na equação original',
    'Trabalhar com inequações do 1º grau',
    'Aplicar equações para resolver problemas contextualizados'
  ],

  summary: {
    readTime: 5,
    content: [
      {
        icon: '⚖️',
        title: 'O que é Equação do 1º Grau?',
        text: 'Uma equação do 1º grau tem a forma: ax + b = c\nOnde a, b, c são constantes e a ≠ 0.\n\nExemplo: 3x + 5 = 14\n\nPrincípio fundamental: o que você faz em um lado, faz no outro!\n\nPartes da equação:\n• Membro esquerdo: 3x + 5\n• Membro direito: 14\n• Incógnita: x\n• Raiz ou solução: o valor de x que torna a equação verdadeira'
      },
      {
        icon: '🔧',
        title: 'Método de Resolução',
        text: 'Passos para resolver ax + b = c:\n\n1. Isolar o termo com x: mover constantes para o outro lado\n2. Dividir ou multiplicar para encontrar x\n\nExemplo: 3x + 5 = 14\n→ 3x = 14 − 5\n→ 3x = 9\n→ x = 9/3 = 3\n\nVerificação: 3(3) + 5 = 9 + 5 = 14 ✓\n\n⚡ Ao mover um termo, inverta a operação!\n+ vira −, × vira ÷'
      },
      {
        icon: '📊',
        title: 'Equações com Parênteses e Frações',
        text: 'Com parênteses — distribuir primeiro:\n2(x + 3) = 10\n2x + 6 = 10\n2x = 4\nx = 2\n\nCom frações — multiplicar pelo MMC:\nx/3 + x/4 = 7  [MMC = 12]\n4x + 3x = 84\n7x = 84\nx = 12\n\nDica: eliminar frações no início simplifica o trabalho!'
      },
      {
        icon: '↔️',
        title: 'Inequações do 1º Grau',
        text: 'Inequação: tem sinal >, <, ≥ ou ≤ em vez de =\n\nResolução igual a equação, EXCETO:\n• Ao multiplicar ou dividir por número NEGATIVO, inverte o sinal!\n\nExemplo: −2x + 6 > 2\n→ −2x > −4\n→ x < 2  (dividiu por −2: inverteu >)\n\nRepresentação: conjunto solução e reta numérica\n• x < 2: todos os números menores que 2\n• x ≥ 5: todos maiores ou iguais a 5'
      },
      {
        icon: '📝',
        title: 'Problemas com Equações',
        text: 'Para montar equações a partir de problemas:\n1. Defina a incógnita (seja x = ...)\n2. Traduza as condições em equação\n3. Resolva a equação\n4. Verifique se faz sentido no contexto\n\nExemplo: "O dobro de um número mais 6 é igual a 22"\n→ 2x + 6 = 22\n→ 2x = 16\n→ x = 8\n\nVerificação: 2(8) + 6 = 22 ✓'
      }
    ],

    flashcards: [
      { q: 'Qual a forma geral de uma equação do 1º grau?',            a: 'ax + b = 0 (ou ax + b = c), onde a ≠ 0.' },
      { q: 'O que é a raiz de uma equação?',                           a: 'O valor da incógnita que torna a equação verdadeira.' },
      { q: 'O que acontece ao mover um termo de lado?',                a: 'A operação se inverte: + vira −, × vira ÷.' },
      { q: 'Quando o sinal da inequação inverte?',                     a: 'Ao multiplicar ou dividir ambos os lados por um número NEGATIVO.' },
      { q: 'Como verificar a solução de uma equação?',                 a: 'Substituir o valor encontrado na equação original e verificar se a igualdade é satisfeita.' },
      { q: 'Como eliminar frações em uma equação?',                    a: 'Multiplicar todos os termos pelo MMC dos denominadores.' }
    ],

    mnemonics: [
      { trigger: 'Mover termos', memory: '"Mudou de lado, mudou o sinal da operação"' },
      { trigger: 'Inequação com negativo', memory: '"Divide/multiplica por NEGATIVO = inverte o sinal da desigualdade"' },
      { trigger: 'Verificação', memory: '"Substitua de volta — se bater, está certo"' }
    ],

    miniReview: [
      { q: 'Resolva 5x − 3 = 17.',          a: '5x = 20 → x = 4.' },
      { q: 'Resolva 2(x − 4) = 6.',          a: '2x − 8 = 6 → 2x = 14 → x = 7.' },
      { q: 'Resolva a inequação 3x + 9 > 0.', a: 'x > −3.' }
    ]
  },

  warmup: [
    {
      prompt: 'Na equação 4x + 3 = 19, o valor de x é:',
      options: [
        { text: '3',   correct: false },
        { text: '4',   correct: true  },
        { text: '5',   correct: false },
        { text: '16',  correct: false }
      ],
      explanation: '4x = 19 − 3 = 16 → x = 4. Verificação: 4(4)+3 = 19 ✓'
    },
    {
      prompt: 'A raiz de uma equação é:',
      options: [
        { text: 'O coeficiente da incógnita',       correct: false },
        { text: 'O valor que satisfaz a equação',   correct: true  },
        { text: 'A incógnita elevada à potência',   correct: false },
        { text: 'O número independente',            correct: false }
      ],
      explanation: 'A raiz (ou solução) é o valor que, ao ser substituído na incógnita, torna a igualdade verdadeira.'
    },
    {
      prompt: 'Resolver 2x = 14 dá:',
      options: [
        { text: 'x = 7',   correct: true  },
        { text: 'x = 12',  correct: false },
        { text: 'x = 28',  correct: false },
        { text: 'x = 7²',  correct: false }
      ],
      explanation: 'x = 14 ÷ 2 = 7. Divisão desfaz a multiplicação.'
    }
  ],

  guidedPractice: [
    {
      prompt: '🔍 DICA: Distribua o parêntese primeiro, depois isole x.\n\nResolvendo 3(x − 2) + 4 = 13:',
      options: [
        { text: 'x = 1',   correct: false },
        { text: 'x = 3',   correct: false },
        { text: 'x = 5',   correct: true  },
        { text: 'x = 7',   correct: false }
      ],
      explanation: '3x − 6 + 4 = 13 → 3x − 2 = 13 → 3x = 15 → x = 5. Verificação: 3(5-2)+4 = 9+4 = 13 ✓'
    },
    {
      prompt: '🔍 DICA: Ao dividir por número negativo, o sinal da desigualdade INVERTE.\n\nA solução de −3x > 12 é:',
      options: [
        { text: 'x > −4',  correct: false },
        { text: 'x < −4',  correct: true  },
        { text: 'x > 4',   correct: false },
        { text: 'x < 4',   correct: false }
      ],
      explanation: '−3x > 12 → x < 12/(−3) = −4. Dividiu por −3 (negativo) → inverte >  para <.'
    }
  ],

  questions: [
    {
      prompt: 'A equação x/2 + x/3 = 10 tem como solução:',
      options: [
        { text: 'x = 10',   correct: false },
        { text: 'x = 12',   correct: true  },
        { text: 'x = 15',   correct: false },
        { text: 'x = 20',   correct: false }
      ],
      explanation: 'MMC(2,3)=6. Multiplicando por 6: 3x + 2x = 60 → 5x = 60 → x = 12.'
    },
    {
      prompt: '"A soma de dois números consecutivos é 47." Qual é o menor deles?',
      options: [
        { text: '22',  correct: false },
        { text: '23',  correct: true  },
        { text: '24',  correct: false },
        { text: '25',  correct: false }
      ],
      explanation: 'Seja x = menor. x + (x+1) = 47 → 2x+1 = 47 → 2x = 46 → x = 23. (23+24 = 47 ✓)'
    },
    {
      prompt: 'Uma camiseta custa R$15 a mais que uma bermuda. Juntas custam R$65. Quanto custa a bermuda?',
      options: [
        { text: 'R$20',  correct: false },
        { text: 'R$25',  correct: true  },
        { text: 'R$30',  correct: false },
        { text: 'R$35',  correct: false }
      ],
      explanation: 'Bermuda = x; camiseta = x+15. x + (x+15) = 65 → 2x = 50 → x = 25. (25 + 40 = 65 ✓)'
    },
    {
      prompt: 'Resolva: 5 − 2x = −3',
      options: [
        { text: 'x = 1',   correct: false },
        { text: 'x = 4',   correct: true  },
        { text: 'x = −4',  correct: false },
        { text: 'x = −1',  correct: false }
      ],
      explanation: '−2x = −3 − 5 = −8 → x = −8/(−2) = 4. Verificação: 5 − 2(4) = 5−8 = −3 ✓'
    },
    {
      prompt: 'A solução de 4x − 1 ≤ 11 é:',
      options: [
        { text: 'x ≥ 3',   correct: false },
        { text: 'x < 3',   correct: false },
        { text: 'x ≤ 3',   correct: true  },
        { text: 'x > 3',   correct: false }
      ],
      explanation: '4x ≤ 12 → x ≤ 3. (Dividiu por 4 positivo — sinal não inverte.)'
    },
    {
      prompt: 'Uma academia cobra taxa de matrícula de R$80 + R$50/mês. João pagou R$330 no total. Quantos meses?',
      options: [
        { text: '4 meses',   correct: false },
        { text: '5 meses',   correct: true  },
        { text: '6 meses',   correct: false },
        { text: '7 meses',   correct: false }
      ],
      explanation: '80 + 50m = 330 → 50m = 250 → m = 5 meses.'
    },
    {
      prompt: 'Qual é o valor de x em: (x + 4)/3 = (x − 1)/2?',
      options: [
        { text: 'x = 10',  correct: false },
        { text: 'x = 11',  correct: true  },
        { text: 'x = 12',  correct: false },
        { text: 'x = 13',  correct: false }
      ],
      explanation: 'MMC(3,2)=6. 2(x+4) = 3(x−1) → 2x+8 = 3x−3 → 11 = x. Verificação: 15/3 = 10/2 = 5 ✓'
    },
    {
      prompt: 'Um número desconhecido, multiplicado por 3 e subtraído de 10, resulta em 1. O número é:',
      options: [
        { text: '1',   correct: false },
        { text: '2',   correct: false },
        { text: '3',   correct: true  },
        { text: '4',   correct: false }
      ],
      explanation: '10 − 3x = 1 → −3x = −9 → x = 3. Verificação: 10−9 = 1 ✓'
    },
    {
      prompt: 'A solução do sistema simples: x + 5 = 2x − 1 é:',
      options: [
        { text: 'x = 5',   correct: false },
        { text: 'x = 6',   correct: true  },
        { text: 'x = 4',   correct: false },
        { text: 'x = 7',   correct: false }
      ],
      explanation: 'x + 5 = 2x − 1 → 5 + 1 = 2x − x → x = 6. Verificação: 6+5=11 = 2(6)−1=11 ✓'
    },
    {
      prompt: 'Se 2(3x − 1) = 4(x + 1), então x vale:',
      options: [
        { text: '3',   correct: true  },
        { text: '2',   correct: false },
        { text: '4',   correct: false },
        { text: '6',   correct: false }
      ],
      explanation: '6x − 2 = 4x + 4 → 2x = 6 → x = 3. Verificação: 2(8)=16 = 4(4)=16 ✓'
    }
  ],

  adaptiveReview: [
    {
      prompt: 'DIFÍCIL: Um trem A parte às 8h a 80 km/h. Trem B parte às 9h a 120 km/h pelo mesmo caminho. Quando B alcança A?',
      options: [
        { text: '10h30',  correct: false },
        { text: '11h',    correct: true  },
        { text: '11h30',  correct: false },
        { text: '12h',    correct: false }
      ],
      explanation: 'A 1h de vantagem, A percorreu 80 km. Velocidade relativa: 120−80=40 km/h. Tempo: 80/40=2h após 9h = 11h. Posição: A=3h×80=240; B=2h×120=240 ✓'
    },
    {
      prompt: 'DIFÍCIL: A solução de |2x − 4| = 6 é:',
      options: [
        { text: 'x = 5',            correct: false },
        { text: 'x = −1',           correct: false },
        { text: 'x = 5 ou x = −1',  correct: true  },
        { text: 'x = 1 ou x = 5',   correct: false }
      ],
      explanation: '|2x−4|=6 → dois casos: (1) 2x−4=6 → x=5; (2) 2x−4=−6 → 2x=−2 → x=−1.'
    }
  ],

  rewards: { xp: 130, gems: 13, badge: '⚖️ Equilibrista Algébrico' },
  completionMessage: '⚖️ Equações do 1º Grau dominadas! Você mantém o equilíbrio matemático. Próximo: Sistemas de Equações!',
  nextStage: 'mat8_s05'
};

window.MAT8_S04 = MAT8_S04;
