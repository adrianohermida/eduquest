/**
 * PT STAGE 01 — Substantivo
 */

const PT_S01 = {
  id: 'pt_s01',
  title: 'Substantivo',
  icon: '🏷️',
  difficulty: 'easy',
  estimatedTime: 12,

  learningObjectives: [
    'Identificar substantivos em frases e textos',
    'Diferenciar substantivo próprio de comum',
    'Reconhecer substantivos concretos e abstratos',
    'Aplicar flexão de gênero e número',
    'Identificar substantivos coletivos'
  ],

  summary: {
    readTime: 3,
    content: [
      {
        icon: '🏷️',
        title: 'O que é Substantivo?',
        text: 'Substantivo é a classe de palavras que dá nome aos seres, lugares, sentimentos, ações e ideias.\n\nExemplos:\n• Pessoas: menino, professora, João\n• Lugares: escola, Brasil, cidade\n• Sentimentos: amor, saudade, alegria\n• Coisas: caderno, computador, mesa\n\n💡 Dica: Se você pode colocar "o", "a", "um" ou "uma" antes da palavra → é substantivo!'
      },
      {
        icon: '🔤',
        title: 'Tipos de Substantivo',
        text: 'Próprio × Comum:\n• Próprio: nome específico → Brasil, Maria, Rio de Janeiro (com maiúscula!)\n• Comum: nome genérico → país, menina, rio\n\nConcreto × Abstrato:\n• Concreto: existe independentemente → cachorro, pedra, vento\n• Abstrato: depende de outro ser para existir → coragem, beleza, corrida\n\nSimples × Composto:\n• Simples: uma palavra → guarda\n• Composto: duas ou mais → guarda-chuva'
      },
      {
        icon: '📐',
        title: 'Flexão: Gênero e Número',
        text: 'Gênero:\n• Masculino: o livro, o avião\n• Feminino: a flor, a caneta\n• Biformes: ator/atriz, leão/leoa\n• Uniformes: artista (masc. e fem.)\n\nNúmero:\n• Singular: mesa → mesa\n• Plural: mesa → mesas / pão → pães / cidadão → cidadãos\n\n🔑 Substantivos coletivos nomeiam grupos: cardume (peixes), matilha (lobos), alcateia (lobos), manada (bois).'
      }
    ],

    flashcards: [
      { q: 'O que é substantivo?',           a: 'Palavra que dá nome a seres, lugares, sentimentos e ideias.' },
      { q: 'Substantivo próprio vs comum?',   a: 'Próprio: nome específico (Maria, Brasil). Comum: genérico (menina, país).' },
      { q: 'Substantivo concreto vs abstrato?',a: 'Concreto: existe por si (casa). Abstrato: depende de outro (beleza).' },
      { q: 'Plural de "cidadão"?',            a: 'Cidadãos.' },
      { q: 'Coletivo de peixes?',             a: 'Cardume.' }
    ],

    mnemonics: [
      { trigger: 'Identificar substantivo', memory: '"Coloque o/a antes: se funcionar → substantivo! (o amor, a casa, o Brasil)"' },
      { trigger: 'Abstrato',               memory: '"Abstrato = você NÃO consegue tocar. Não dá para tocar a beleza!"' }
    ],

    miniReview: [
      { q: '"Liberdade" é concreto ou abstrato?', a: 'Abstrato — não tem existência independente.' },
      { q: '"Rio de Janeiro" é próprio ou comum?', a: 'Próprio — nome específico, com maiúscula.' }
    ]
  },

  warmup: [
    {
      prompt: '"Gato" é um substantivo:',
      options: [
        { text: 'Próprio e concreto',  correct: false },
        { text: 'Comum e concreto',    correct: true  },
        { text: 'Comum e abstrato',    correct: false },
        { text: 'Próprio e abstrato',  correct: false }
      ],
      explanation: '"Gato" é um nome genérico (comum) e tem existência independente (concreto).'
    },
    {
      prompt: 'Qual palavra é um substantivo abstrato?',
      options: [
        { text: 'Mesa',     correct: false },
        { text: 'Coragem',  correct: true  },
        { text: 'Carlos',   correct: false },
        { text: 'Árvore',   correct: false }
      ],
      explanation: '"Coragem" é abstrato — não tem existência física independente.'
    },
    {
      prompt: 'O plural de "pão" é:',
      options: [
        { text: 'Pãos',   correct: false },
        { text: 'Pães',   correct: true  },
        { text: 'Pão',    correct: false },
        { text: 'Panes',  correct: false }
      ],
      explanation: 'Palavras terminadas em -ão podem fazer plural em -ães, -ãos ou -ões. "Pão" → pães.'
    }
  ],

  guidedPractice: [
    {
      prompt: '🔍 DICA: Substantivos próprios são escritos com letra maiúscula.\n\nQual é o substantivo PRÓPRIO na frase: "A menina Ana morava em Curitiba"?',
      options: [
        { text: 'menina e morava',    correct: false },
        { text: 'Ana e Curitiba',     correct: true  },
        { text: 'Ana e menina',       correct: false },
        { text: 'Curitiba e morava',  correct: false }
      ],
      explanation: '"Ana" e "Curitiba" são nomes específicos, escritos com maiúscula → substantivos próprios.'
    },
    {
      prompt: '🔍 DICA: Substantivo coletivo nomeia um grupo.\n\nComo se chama um grupo de abelhas?',
      options: [
        { text: 'Cardume',   correct: false },
        { text: 'Enxame',    correct: true  },
        { text: 'Matilha',   correct: false },
        { text: 'Manada',    correct: false }
      ],
      explanation: 'Enxame = coletivo de abelhas. Cardume = peixes, Matilha = cães, Manada = bovinos.'
    }
  ],

  questions: [
    {
      prompt: 'Qual das alternativas contém APENAS substantivos?',
      options: [
        { text: 'correr, beleza, amor',     correct: false },
        { text: 'escola, livro, alegria',   correct: true  },
        { text: 'bonito, casa, rápido',     correct: false },
        { text: 'ela, mesa, grande',        correct: false }
      ],
      explanation: '"Escola", "livro" e "alegria" são todos substantivos (comum-concreto, comum-concreto, comum-abstrato).'
    },
    {
      prompt: 'Na frase "A amizade de Pedro é verdadeira", quantos substantivos há?',
      options: [
        { text: '1', correct: false },
        { text: '2', correct: true  },
        { text: '3', correct: false },
        { text: '4', correct: false }
      ],
      explanation: '"Amizade" (abstrato) e "Pedro" (próprio) são os dois substantivos da frase.'
    },
    {
      prompt: '"Frota" é o coletivo de:',
      options: [
        { text: 'Navios',     correct: false },
        { text: 'Carros',     correct: false },
        { text: 'Aviões',     correct: false },
        { text: 'Navios ou veículos', correct: true }
      ],
      explanation: '"Frota" é coletivo para navios, veículos em geral — aceita embarcações e veículos terrestres.'
    },
    {
      prompt: 'O feminino de "ator" é:',
      options: [
        { text: 'Atora',  correct: false },
        { text: 'Atriz',  correct: true  },
        { text: 'Atore',  correct: false },
        { text: 'Atriz ou atora', correct: false }
      ],
      explanation: 'O substantivo biforme "ator/atriz" tem formas diferentes para masculino e feminino.'
    },
    {
      prompt: 'Qual substantivo está no plural correto?',
      options: [
        { text: 'Capaz → capazs',     correct: false },
        { text: 'Lápis → lápises',    correct: false },
        { text: 'Capitão → capitães', correct: true  },
        { text: 'Grau → grais',       correct: false }
      ],
      explanation: '"Capitão → capitães" é o plural correto. Lápis não muda, grau → graus.'
    },
    {
      prompt: '"Velocidade" é um substantivo:',
      options: [
        { text: 'Concreto e próprio',   correct: false },
        { text: 'Abstrato e comum',     correct: true  },
        { text: 'Concreto e comum',     correct: false },
        { text: 'Abstrato e próprio',   correct: false }
      ],
      explanation: '"Velocidade" é abstrata (não tem existência física) e comum (nome genérico).'
    },
    {
      prompt: 'Qual palavra NÃO é substantivo?',
      options: [
        { text: 'Tristeza',    correct: false },
        { text: 'Computador',  correct: false },
        { text: 'Enorme',      correct: true  },
        { text: 'Esperança',   correct: false }
      ],
      explanation: '"Enorme" é adjetivo — qualifica, não nomeia. Os demais são substantivos.'
    },
    {
      prompt: 'Qual alternativa tem um substantivo composto?',
      options: [
        { text: 'Flor',          correct: false },
        { text: 'Guarda-chuva',  correct: true  },
        { text: 'Amor',          correct: false },
        { text: 'Mesa',          correct: false }
      ],
      explanation: '"Guarda-chuva" é formado por duas palavras → substantivo composto.'
    },
    {
      prompt: '"Revoada" é o coletivo de:',
      options: [
        { text: 'Peixes',   correct: false },
        { text: 'Pássaros', correct: true  },
        { text: 'Lobos',    correct: false },
        { text: 'Formigas', correct: false }
      ],
      explanation: 'Revoada = coletivo de pássaros (ou pombos). Alcateia = lobos, Cardume = peixes.'
    },
    {
      prompt: 'Na frase "O Brasil é famoso pela beleza de suas praias", os substantivos são:',
      options: [
        { text: 'Brasil, beleza, praias',          correct: true  },
        { text: 'Brasil, famoso, praias',          correct: false },
        { text: 'famoso, beleza, suas',            correct: false },
        { text: 'Brasil, beleza, famoso, praias',  correct: false }
      ],
      explanation: '"Brasil" (próprio), "beleza" (abstrato) e "praias" (concreto) são os três substantivos.'
    }
  ],

  adaptiveReview: [
    {
      prompt: 'DIFÍCIL: Qual das frases usa um substantivo primitivo e um derivado?',
      options: [
        { text: '"pedra" e "pedreiro"',    correct: true  },
        { text: '"casa" e "escola"',       correct: false },
        { text: '"amor" e "coragem"',      correct: false },
        { text: '"lápis" e "caneta"',      correct: false }
      ],
      explanation: '"Pedra" é primitivo (não vem de outra palavra). "Pedreiro" é derivado (vem de pedra + -eiro).'
    }
  ],

  rewards: { xp: 120, gems: 12, badge: '🏷️ Nomeador de Seres' },
  completionMessage: '🏷️ Você domina o substantivo — a base de toda frase!',
  nextStage: 'pt_s02'
};

window.PT_S01 = PT_S01;
