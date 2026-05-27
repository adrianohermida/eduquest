/**
 * MAT8 STAGE 05 — Sistemas de Equações
 * Dois métodos: substituição e adição
 */

const MAT8_S05 = {
  id: 'mat8_s05',
  title: 'Sistemas de Equações',
  icon: '🔗',
  difficulty: 'medium',
  estimatedTime: 14,

  learningObjectives: [
    'Compreender o conceito de sistema de equações',
    'Resolver sistemas pelo método da substituição',
    'Resolver sistemas pelo método da adição (eliminação)',
    'Classificar sistemas (possível, impossível, indeterminado)',
    'Aplicar sistemas para resolver problemas com duas incógnitas'
  ],

  summary: {
    readTime: 5,
    content: [
      {
        icon: '🔗',
        title: 'O que é um Sistema de Equações?',
        text: 'Um sistema é um conjunto de equações com as mesmas incógnitas:\n\n{ 2x + y = 7\n{ x − y = 2\n\nA solução é o par (x, y) que satisfaz AMBAS as equações ao mesmo tempo.\n\nGeometricamente: cada equação linear é uma reta. A solução é o PONTO DE INTERSECÇÃO das retas!\n\nTipos de sistema:\n• Possível e determinado: 1 solução (retas se cruzam)\n• Impossível: sem solução (retas paralelas)\n• Possível e indeterminado: infinitas soluções (retas coincidentes)'
      },
      {
        icon: '🔄',
        title: 'Método da Substituição',
        text: 'Passo a passo:\n1. Isole uma incógnita em uma equação\n2. Substitua na outra equação\n3. Resolva a equação resultante\n4. Encontre o valor da outra incógnita\n\nExemplo: { x + y = 5  e  { 2x − y = 4\n\n1. Da 1ª: y = 5 − x\n2. Na 2ª: 2x − (5−x) = 4 → 3x − 5 = 4 → 3x = 9 → x = 3\n3. y = 5 − 3 = 2\n\nSolução: (3, 2) ✓'
      },
      {
        icon: '➕',
        title: 'Método da Adição (Eliminação)',
        text: 'Passo a passo:\n1. Multiplicar equações para que os coeficientes de uma variável sejam opostos\n2. Somar as equações (a variável se elimina)\n3. Resolver para a variável restante\n4. Substituir para encontrar a outra\n\nExemplo: { 3x + 2y = 12  e  { x − 2y = 4\n\n1. Coeficientes de y: +2 e −2 (já opostos!)\n2. Somando: 4x = 16 → x = 4\n3. 4 − 2y = 4 → y = 0\n\nSolução: (4, 0) ✓'
      },
      {
        icon: '📊',
        title: 'Classificação de Sistemas',
        text: 'Para o sistema { ax + by = c  e  { dx + ey = f:\n\nPOSSÍVEL DETERMINADO (1 solução):\nretas com inclinações diferentes → se cruzam em 1 ponto\n\nIMPOSSÍVEL (sem solução):\nretas paralelas → mesma inclinação, intercepts diferentes\nEx: { x + y = 3  e  { x + y = 5\n(impossível: o mesmo par não pode ser 3 E 5)\n\nINDETERMINADO (infinitas soluções):\nretas coincidentes → uma é múltiplo da outra\nEx: { x + y = 3  e  { 2x + 2y = 6'
      },
      {
        icon: '📝',
        title: 'Problemas com Sistemas',
        text: 'Quando há 2 incógnitas, são necessárias 2 equações:\n\nExemplo: "Comprei 3 maçãs e 2 laranjas por R$7. Na loja vizinha, 1 maçã e 4 laranjas custam R$6. Qual o preço de cada fruta?"\n\nSeja m = maçã, l = laranja:\n{ 3m + 2l = 7\n{ m + 4l = 6\n\nSubstituição: m = 6 − 4l\n3(6−4l) + 2l = 7 → 18−12l+2l = 7 → −10l = −11 → l = 1,10\nm = 6 − 4(1,10) = 6 − 4,4 = 1,60\n\nMaçã: R$1,60 | Laranja: R$1,10'
      }
    ],

    flashcards: [
      { q: 'O que é a solução de um sistema de equações?',              a: 'O par (x, y) que satisfaz TODAS as equações do sistema simultaneamente.' },
      { q: 'Qual método isola uma variável e substitui?',               a: 'Método da substituição.' },
      { q: 'Qual método elimina uma variável somando equações?',        a: 'Método da adição (eliminação).' },
      { q: 'Quando um sistema é impossível?',                           a: 'Quando não tem solução — as retas representadas são paralelas.' },
      { q: 'Como reconhecer um sistema indeterminado?',                 a: 'Infinitas soluções — as equações representam a mesma reta (uma é múltipla da outra).' },
      { q: 'Geometricamente, o que é a solução de um sistema 2×2?',    a: 'O ponto de intersecção das duas retas representadas pelas equações.' }
    ],

    mnemonics: [
      { trigger: 'Substituição',     memory: '"Isola UMA, substitui na OUTRA"' },
      { trigger: 'Adição/Eliminação', memory: '"Torne os coeficientes OPOSTOS e SOME — a variável desaparece"' },
      { trigger: 'Classificação',    memory: '"Paralelas = Impossível; Coincidentes = Indeterminado; Cruzadas = 1 Solução"' }
    ],

    miniReview: [
      { q: 'Resolva pelo método de adição: { x+y=6 e { x−y=2.',       a: 'Somando: 2x=8 → x=4. Então y=2. Solução: (4,2).' },
      { q: 'O sistema { 2x+y=5 e { 2x+y=8 é possível?',              a: 'Não — impossível. Mesma equação esquerda, segundos membros diferentes (5 ≠ 8).' },
      { q: 'Isole y em 3x + 2y = 10.',                                 a: 'y = (10 − 3x)/2 = 5 − 3x/2.' }
    ]
  },

  warmup: [
    {
      prompt: 'Um sistema tem solução (2, 3). Qual equação esse par satisfaz?',
      options: [
        { text: 'x + y = 7',    correct: false },
        { text: '2x + y = 7',   correct: true  },
        { text: 'x + 2y = 4',   correct: false },
        { text: '3x − y = 3',   correct: false }
      ],
      explanation: '2(2) + 3 = 4 + 3 = 7 ✓. Verificar: x+y=5≠7; x+2y=8≠4; 3x−y=3=3 também funciona!'
    },
    {
      prompt: 'O método da substituição consiste em:',
      options: [
        { text: 'Somar as equações para eliminar uma variável',     correct: false },
        { text: 'Isolar uma incógnita e substituir na outra equação', correct: true },
        { text: 'Multiplicar as equações entre si',                 correct: false },
        { text: 'Subtrair uma equação da outra',                   correct: false }
      ],
      explanation: 'Substituição: isolar x (ou y) em uma equação e usar esse valor na outra equação.'
    },
    {
      prompt: 'O sistema { x+y=5 e { x+y=8 é classificado como:',
      options: [
        { text: 'Possível determinado',     correct: false },
        { text: 'Possível indeterminado',   correct: false },
        { text: 'Impossível',               correct: true  },
        { text: 'Incompatível parcial',     correct: false }
      ],
      explanation: 'x+y não pode ser 5 E 8 ao mesmo tempo → sem solução → impossível. Retas paralelas.'
    }
  ],

  guidedPractice: [
    {
      prompt: '🔍 DICA: No método de adição, ajuste os coeficientes para serem opostos.\n\nPara eliminar y em { 2x + 3y = 20 e { x − y = 5, multiplique a 2ª por 3, resultando em:',
      options: [
        { text: '3x + 3y = 15  →  adicionando: 5x + 6y = 35 (y não é eliminado)', correct: false },
        { text: '3x − 3y = 15  →  somando com 2x+3y=20: 5x = 5, logo x = 1',     correct: false },
        { text: '3x − 3y = 10  →  somando com 2x+3y=20: 5x = 30 → x = 6',        correct: false },
        { text: '3x − 3y = 15  →  somando com 2x+3y=20: 5x = 35 → x = 7. Então y = 2.', correct: true }
      ],
      explanation: '2ª × 3: 3x−3y=15. Soma com 2x+3y=20: 5x=35 → x=7. De x−y=5: 7−y=5 → y=2. Solução: (7,2). Verificação: 2(7)+3(2)=20 ✓'
    },
    {
      prompt: '🔍 DICA: Substitua a incógnita isolada diretamente.\n\nNo sistema { y = 2x − 1 e { 3x + y = 9, substituindo y:',
      options: [
        { text: '3x + (2x−1) = 9 → 5x = 10 → x = 2',  correct: true  },
        { text: '3x − (2x−1) = 9 → x = 8',            correct: false },
        { text: '3(2x−1) = 9 → x = 2',                correct: false },
        { text: 'y + (2x−1) = 9 → x = 5',             correct: false }
      ],
      explanation: '3x + (2x−1) = 9 → 5x−1 = 9 → 5x = 10 → x = 2. Então y = 2(2)−1 = 3. (2, 3)'
    }
  ],

  questions: [
    {
      prompt: 'Resolva: { x + y = 10 e { x − y = 4. O par solução é:',
      options: [
        { text: '(7, 3)',  correct: true  },
        { text: '(6, 4)',  correct: false },
        { text: '(8, 2)',  correct: false },
        { text: '(5, 5)',  correct: false }
      ],
      explanation: 'Adição: 2x=14 → x=7. Subtração: 2y=6 → y=3. Par: (7,3). Verificação: 7+3=10 e 7−3=4 ✓'
    },
    {
      prompt: 'João tem o dobro da idade de Maria, e a soma das idades é 30 anos. Qual a idade de João?',
      options: [
        { text: '15 anos',  correct: false },
        { text: '20 anos',  correct: true  },
        { text: '24 anos',  correct: false },
        { text: '18 anos',  correct: false }
      ],
      explanation: '{ J = 2M e { J + M = 30. Substituindo: 2M + M = 30 → 3M = 30 → M = 10. J = 20.'
    },
    {
      prompt: 'Para que o sistema { 2x + y = 5 e { 4x + 2y = k seja indeterminado, k deve ser:',
      options: [
        { text: '5',   correct: false },
        { text: '10',  correct: true  },
        { text: '20',  correct: false },
        { text: '15',  correct: false }
      ],
      explanation: 'Para indeterminado, a 2ª equação deve ser múltiplo da 1ª: 4x+2y = 2(2x+y) = 2×5 = 10. k=10.'
    },
    {
      prompt: 'Resolva pelo método de substituição: { x = 3y − 4 e { 2x + y = 13.',
      options: [
        { text: 'x = 8, y = 4',   correct: false },
        { text: 'x = 5, y = 2',   correct: false },
        { text: 'x = 2, y = 2',   correct: false },
        { text: 'x = 5, y = 3',   correct: true  }
      ],
      explanation: 'Substituindo x=3y−4 na 2ª: 2(3y−4)+y=13 → 6y−8+y=13 → 7y=21 → y=3. x=3(3)−4=5. Par (5,3). Verificação: 2(5)+3=13 ✓'
    },
    {
      prompt: 'Comprou 2 cadernos e 3 canetas por R$16. Na loja vizinha, 1 caderno e 5 canetas custavam R$15. Qual é o preço do caderno?',
      options: [
        { text: 'R$3',   correct: false },
        { text: 'R$4',   correct: false },
        { text: 'R$5',   correct: true  },
        { text: 'R$6',   correct: false }
      ],
      explanation: '{ 2c+3k=16 e { c+5k=15. De (2): c=15−5k. Na (1): 2(15−5k)+3k=16 → 30−10k+3k=16 → −7k=−14 → k=2. c=15−5(2)=5. Caderno: R$5, caneta: R$2. Verificação: 2(5)+3(2)=16 ✓ e 5+5(2)=15 ✓'
    },
    {
      prompt: 'Dois números cuja soma é 15 e diferença é 3. O maior número é:',
      options: [
        { text: '8',   correct: false },
        { text: '9',   correct: true  },
        { text: '10',  correct: false },
        { text: '12',  correct: false }
      ],
      explanation: '{ x+y=15 e { x−y=3. Adição: 2x=18 → x=9. y=6. Maior = 9. (9+6=15 e 9−6=3 ✓)'
    },
    {
      prompt: 'O sistema { 3x + y = 7 e { 6x + 2y = 20 é:',
      options: [
        { text: 'Possível determinado',    correct: false },
        { text: 'Impossível',              correct: true  },
        { text: 'Possível indeterminado',  correct: false },
        { text: 'Não é sistema linear',    correct: false }
      ],
      explanation: '2ª = 2×1ª deveria dar 14, mas é 20. Paralelas → impossível. (2×7=14 ≠ 20)'
    },
    {
      prompt: 'Numa turma, rapaz + meninas = 35. Há 5 rapazes a mais que meninas. Quantas meninas?',
      options: [
        { text: '10',  correct: false },
        { text: '15',  correct: true  },
        { text: '20',  correct: false },
        { text: '25',  correct: false }
      ],
      explanation: '{ r+m=35 e { r=m+5. Substituindo: (m+5)+m=35 → 2m=30 → m=15. (15 meninas, 20 rapazes ✓)'
    },
    {
      prompt: 'A solução do sistema { x + 2y = 8 e { 3x − 2y = 0 é:',
      options: [
        { text: '(2, 3)',  correct: true  },
        { text: '(3, 2)',  correct: false },
        { text: '(4, 2)',  correct: false },
        { text: '(1, 3)',  correct: false }
      ],
      explanation: 'Adição: 4x=8 → x=2. Então 2+2y=8 → y=3. Par: (2,3). Verif: 3(2)−2(3)=0 ✓'
    },
    {
      prompt: 'Num estacionamento há carros e motos. Total de 30 veículos e 90 rodas. Quantos carros?',
      options: [
        { text: '10',  correct: false },
        { text: '15',  correct: true  },
        { text: '20',  correct: false },
        { text: '25',  correct: false }
      ],
      explanation: '{ c+m=30 e { 4c+2m=90. Da 1ª: m=30−c. Na 2ª: 4c+2(30−c)=90 → 2c=30 → c=15. (15 carros, 15 motos)'
    }
  ],

  adaptiveReview: [
    {
      prompt: 'DIFÍCIL: Para quais valores de k o sistema { x + ky = 3 e { kx + 4y = 6 tem infinitas soluções?',
      options: [
        { text: 'k = 1',   correct: false },
        { text: 'k = 2',   correct: true  },
        { text: 'k = 3',   correct: false },
        { text: 'k = 4',   correct: false }
      ],
      explanation: 'Infinitas soluções: retas coincidentes. A 2ª deve ser múltiplo da 1ª. 2ª = 2×1ª → kx+4y=2x+2ky. Para isso: k=2 e 4=2k=4 ✓. E 6=2×3=6 ✓.'
    },
    {
      prompt: 'DIFÍCIL: Uma conta bancária rende 10% a.a. simples. Outra rende 15% a.a. Investindo R$10.000 no total com rendimento de R$1.200/ano, quanto foi em cada conta?',
      options: [
        { text: 'R$4.000 e R$6.000',  correct: true  },
        { text: 'R$5.000 e R$5.000',  correct: false },
        { text: 'R$6.000 e R$4.000',  correct: false },
        { text: 'R$3.000 e R$7.000',  correct: false }
      ],
      explanation: '{ x+y=10000 e { 0,1x+0,15y=1200. De (1): x=10000−y. 0,1(10000−y)+0,15y=1200 → 1000+0,05y=1200 → y=4000. x=6000. Rende: 600+600=1200 ✓'
    }
  ],

  rewards: { xp: 140, gems: 14, badge: '🔗 Mestre dos Sistemas' },
  completionMessage: '🔗 Sistemas de Equações resolvidos! Você conecta problemas com soluções precisas. Próximo: Equação do 2º Grau!',
  nextStage: 'mat8_s06'
};

window.MAT8_S05 = MAT8_S05;
