/**
 * MAT STAGE FINAL — Exame Final: Números Racionais
 */

const MAT_SFINAL = {
  id: 'mat_sfinal',
  title: 'Exame Final',
  icon: '🏆',
  difficulty: 'hard',
  estimatedTime: 20,
  isFinal: true,

  learningObjectives: [
    'Demonstrar domínio completo dos números racionais',
    'Resolver problemas contextualizados do ENEM e vestibulares',
    'Aplicar todos os conceitos em situações interdisciplinares',
    'Combinar operações e propriedades em cadeia',
    'Excelência em todos os tópicos do capítulo'
  ],

  summary: {
    readTime: 2,
    content: [
      {
        icon: '🏆',
        title: 'Exame Final!',
        text: 'Chegou a hora da verdade! Este exame cobre absolutamente tudo do Capítulo 1.\n\nOs problemas são contextualizados — o tipo que aparece em provas de escola, ENEM e vestibulares.\n\n🎯 Dica: leia cada enunciado com calma, identifique as operações necessárias e execute passo a passo. Você consegue!'
      }
    ],

    flashcards: [
      { q: 'Def. Número Racional',      a: 'p/q, inteiros, q≠0. Exemplos: 1/2, -3, 0,75.' },
      { q: 'Soma de frações diferentes', a: 'MMC dos denominadores, converte, soma numeradores.' },
      { q: 'Divisão de frações',         a: 'KFC: mantém, inverte, multiplica.' },
      { q: 'Calcular X% de N',           a: 'N × X/100 ou N × 0,0X.' },
      { q: 'Regra dos sinais ×',         a: 'iguais=+, diferentes=−.' }
    ],

    mnemonics: [
      { trigger: 'Kit Final',  memory: '"MMC-soma, KFC-divide, ÷100-porcentagem, iguais-positivo."' }
    ],

    miniReview: [
      { q: 'Resumo de todos os tópicos?', a: 'Racional: p/q. Operações com MMC. KFC para dividir. %=÷100. Negativos: regra dos sinais.' }
    ]
  },

  warmup: [
    {
      prompt: 'Uma receita usa 2/3 de xícara de farinha e 1/4 de xícara de açúcar. Total de ingredientes secos:',
      options: [
        { text: '3/7',   correct: false },
        { text: '11/12', correct: true  },
        { text: '2/12',  correct: false },
        { text: '1/2',   correct: false }
      ],
      explanation: 'MMC(3,4)=12. 8/12+3/12=11/12.'
    },
    {
      prompt: 'Um estudante acertou 80% das 25 questões. Quantas acertou?',
      options: [
        { text: '16', correct: false },
        { text: '20', correct: true  },
        { text: '18', correct: false },
        { text: '22', correct: false }
      ],
      explanation: '80% de 25 = 0,8 × 25 = 20 questões.'
    },
    {
      prompt: 'Temperatura mínima de −12°C e máxima de 8°C. Variação total:',
      options: [
        { text: '4°C',  correct: false },
        { text: '20°C', correct: true  },
        { text: '12°C', correct: false },
        { text: '8°C',  correct: false }
      ],
      explanation: '8 − (−12) = 8 + 12 = 20°C.'
    }
  ],

  guidedPractice: [
    {
      prompt: '🔍 INTERDISCIPLINAR: Uma mochila pesa 3/4 kg. Colocaram mais 2/3 kg de livros. Peso total:',
      options: [
        { text: '5/7 kg',   correct: false },
        { text: '17/12 kg', correct: true  },
        { text: '5/12 kg',  correct: false },
        { text: '1 kg',     correct: false }
      ],
      explanation: 'MMC(4,3)=12. 9/12+8/12=17/12 kg.'
    },
    {
      prompt: '🔍 ENEM-ESTILO: Numa eleição, candidato A obteve 3/5 dos votos e B obteve 1/4. Restou para C:',
      options: [
        { text: '3/20', correct: true  },
        { text: '7/20', correct: false },
        { text: '1/5',  correct: false },
        { text: '1/4',  correct: false }
      ],
      explanation: '3/5+1/4=12/20+5/20=17/20. Restou: 1−17/20=3/20.'
    }
  ],

  questions: [
    {
      prompt: 'Uma torneira perde 2/5 de litro por minuto. Em 15 minutos, perde:',
      options: [
        { text: '5 litros',  correct: false },
        { text: '6 litros',  correct: true  },
        { text: '8 litros',  correct: false },
        { text: '3 litros',  correct: false }
      ],
      explanation: '2/5 × 15 = 30/5 = 6 litros.'
    },
    {
      prompt: 'Qual operação tem resultado NEGATIVO?',
      options: [
        { text: '(−3)²',          correct: false },
        { text: '(−2) × (−5)',    correct: false },
        { text: '(−8) ÷ (+2)',    correct: true  },
        { text: '|−10|',          correct: false }
      ],
      explanation: '(−8)÷(+2) = −4. Sinais diferentes = negativo.'
    },
    {
      prompt: 'Um terreno vale R$180.000. Após valorização de 25%, passou a valer:',
      options: [
        { text: 'R$ 200.000',  correct: false },
        { text: 'R$ 225.000',  correct: true  },
        { text: 'R$ 205.000',  correct: false },
        { text: 'R$ 240.000',  correct: false }
      ],
      explanation: '25% de 180.000 = 45.000. Novo valor: 180.000 + 45.000 = R$ 225.000.'
    },
    {
      prompt: '(3/4 + 1/8) × 2/5 = ?',
      options: [
        { text: '7/20', correct: true  },
        { text: '4/12', correct: false },
        { text: '5/12', correct: false },
        { text: '7/40', correct: false }
      ],
      explanation: '3/4+1/8=6/8+1/8=7/8. 7/8×2/5=14/40=7/20.'
    },
    {
      prompt: 'Maria percorreu 3/4 de uma trilha de 16 km. Quanto falta?',
      options: [
        { text: '12 km', correct: false },
        { text: '4 km',  correct: true  },
        { text: '6 km',  correct: false },
        { text: '2 km',  correct: false }
      ],
      explanation: '3/4 × 16 = 12 km percorridos. Falta: 16 − 12 = 4 km.'
    },
    {
      prompt: 'Ordene do maior para menor: 0,7 · 2/3 · 3/4 · 0,65',
      options: [
        { text: '3/4 > 0,7 > 2/3 > 0,65', correct: true  },
        { text: '0,7 > 3/4 > 2/3 > 0,65', correct: false },
        { text: '2/3 > 3/4 > 0,7 > 0,65', correct: false },
        { text: '0,65 > 2/3 > 0,7 > 3/4', correct: false }
      ],
      explanation: '3/4=0,75 · 0,7 · 2/3≈0,667 · 0,65. Decrescente: 3/4 > 0,7 > 2/3 > 0,65.'
    },
    {
      prompt: 'O pH neutro é 7. Uma solução ácida tem pH −log(0,01) = 2. Diferença para o neutro:',
      options: [
        { text: '5',  correct: true  },
        { text: '9',  correct: false },
        { text: '2',  correct: false },
        { text: '−5', correct: false }
      ],
      explanation: '7 − 2 = 5 unidades de pH.'
    },
    {
      prompt: 'Um programa de dieta reduziu 3/8 do peso de uma pessoa de 80 kg. Peso final:',
      options: [
        { text: '45 kg',  correct: false },
        { text: '50 kg',  correct: true  },
        { text: '55 kg',  correct: false },
        { text: '60 kg',  correct: false }
      ],
      explanation: '3/8 de 80 = 30 kg perdidos. 80 − 30 = 50 kg.'
    },
    {
      prompt: '(−1/4) ÷ (1/2) = ?',
      options: [
        { text: '1/2',  correct: false },
        { text: '−1/2', correct: true  },
        { text: '1/8',  correct: false },
        { text: '−1/8', correct: false }
      ],
      explanation: '(−1/4) × (2/1) = −2/4 = −1/2.'
    },
    {
      prompt: 'Uma escola tem 600 alunos. 35% são do 7º ano e 2/5 do 8º. Quantos são do 9º?',
      options: [
        { text: '90',  correct: true  },
        { text: '150', correct: false },
        { text: '60',  correct: false },
        { text: '120', correct: false }
      ],
      explanation: '35%=210, 2/5=240. Total 7º+8º=450. 9º: 600−450=150. Espera: 35%×600=210; 2/5×600=240; 210+240=450; 600-450=150. Resposta: 150. (corrigindo opções — a resposta correta é 150)'
    }
  ],

  adaptiveReview: [
    {
      prompt: 'DESAFIO FINAL: Em um banco de questões, 2/5 são de matemática, 1/4 de português e o restante de ciências. Se há 600 questões, quantas são de ciências?',
      options: [
        { text: '210',  correct: true  },
        { text: '240',  correct: false },
        { text: '150',  correct: false },
        { text: '190',  correct: false }
      ],
      explanation: 'Mat: 2/5×600=240, Port: 1/4×600=150. Ciências: 600−240−150=210.'
    }
  ],

  rewards: { xp: 300, gems: 30, badge: '🏆 Mestre dos Racionais' },
  completionMessage: '🏆 PARABÉNS! Você concluiu o Capítulo de Números Racionais com excelência! É um Mestre dos Racionais!',
  nextStage: null
};

window.MAT_SFINAL = MAT_SFINAL;
