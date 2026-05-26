/**
 * PT STAGE 02 — Adjetivo
 */

const PT_S02 = {
  id: 'pt_s02',
  title: 'Adjetivo',
  icon: '🎨',
  difficulty: 'easy',
  estimatedTime: 12,

  learningObjectives: [
    'Identificar adjetivos em frases e textos',
    'Diferenciar adjetivo de locução adjetiva',
    'Reconhecer adjetivos pátrios',
    'Aplicar flexão de gênero, número e grau',
    'Usar adjetivos na escrita expressiva'
  ],

  summary: {
    readTime: 3,
    content: [
      {
        icon: '🎨',
        title: 'O que é Adjetivo?',
        text: 'Adjetivo é a palavra que caracteriza, qualifica ou modifica o substantivo.\n\nExemplos:\n• casa bonita → "bonita" qualifica "casa"\n• menino inteligente → "inteligente" qualifica "menino"\n• dia frio → "frio" qualifica "dia"\n\n💡 Dica: O adjetivo sempre concorda com o substantivo em gênero (masc./fem.) e número (sing./pl.)'
      },
      {
        icon: '🗺️',
        title: 'Locução Adjetiva e Adjetivo Pátrio',
        text: 'Locução Adjetiva: expressão com preposição que equivale a um adjetivo\n• casa de pedra = pétrea\n• dente de leite = lácteo\n• olhos de gato = gatuno\n\nAdjetivo Pátrio: indica origem ou nacionalidade\n• Brasil → brasileiro\n• França → francês\n• Japão → japonês\n• Argentina → argentino'
      },
      {
        icon: '📊',
        title: 'Grau do Adjetivo',
        text: 'Comparativo:\n• Superioridade: João é mais alto que Pedro\n• Igualdade: João é tão alto quanto Pedro\n• Inferioridade: João é menos alto que Pedro\n\nSuperlativo:\n• Relativo: João é o mais alto da turma\n• Absoluto analítico: João é muito alto\n• Absoluto sintético: João é altíssimo\n\n🔑 Formas especiais: bom → ótimo, mau → péssimo, grande → máximo, pequeno → mínimo'
      }
    ],

    flashcards: [
      { q: 'O que é adjetivo?',                a: 'Palavra que qualifica ou caracteriza o substantivo.' },
      { q: 'Locução adjetiva de "de ouro"?',   a: 'Equivale ao adjetivo "áureo".' },
      { q: 'Adjetivo pátrio de Portugal?',     a: 'Português/Portuguesa.' },
      { q: 'Superlativo de "bom"?',            a: 'Ótimo (sintético) ou muito bom (analítico).' },
      { q: '"Casas brancas" — concordância?',  a: 'Adjetivo "brancas" concorda com "casas" (fem. plural).' }
    ],

    mnemonics: [
      { trigger: 'Adjetivo qualifica', memory: '"Adjetivo = ADJunto do substantivo. Fica JUNTO, concorda com ele!"' },
      { trigger: 'Grau superlativo',   memory: '"ÍSSIMO no final = superlativo sintético. belo → belíssimo!"' }
    ],

    miniReview: [
      { q: 'Adjetivo pátrio de Roma?',       a: 'Romano/Romana.' },
      { q: 'Superlativo de "mau"?',          a: 'Péssimo (sintético) ou muito mau (analítico).' }
    ]
  },

  warmup: [
    {
      prompt: 'Qual palavra é um adjetivo na frase: "O estudante dedicado passou na prova"?',
      options: [
        { text: 'estudante', correct: false },
        { text: 'dedicado',  correct: true  },
        { text: 'passou',    correct: false },
        { text: 'prova',     correct: false }
      ],
      explanation: '"Dedicado" qualifica o substantivo "estudante" → é adjetivo.'
    },
    {
      prompt: 'Qual é o adjetivo pátrio de "Japão"?',
      options: [
        { text: 'Japonico',   correct: false },
        { text: 'Japonês',    correct: true  },
        { text: 'Japanico',   correct: false },
        { text: 'Japânio',    correct: false }
      ],
      explanation: 'Japão → japonês/japonesa. Adjetivo pátrio indica origem.'
    },
    {
      prompt: '"Tardíssimo" é um exemplo de superlativo:',
      options: [
        { text: 'Relativo de superioridade',  correct: false },
        { text: 'Absoluto sintético',         correct: true  },
        { text: 'Absoluto analítico',         correct: false },
        { text: 'Comparativo de igualdade',   correct: false }
      ],
      explanation: 'O sufixo -íssimo forma o superlativo absoluto sintético. "Tardíssimo" = muito tardio.'
    }
  ],

  guidedPractice: [
    {
      prompt: '🔍 DICA: Locução adjetiva = preposição + substantivo, equivale a um adjetivo.\n\n"Suco de laranja" — a locução adjetiva é equivalente a:',
      options: [
        { text: 'Saboroso',   correct: false },
        { text: 'Laranjado',  correct: false },
        { text: 'Cítrico',    correct: true  },
        { text: 'Azedo',      correct: false }
      ],
      explanation: '"De laranja" é locução adjetiva equivalente ao adjetivo "cítrico" (ou "laranjado" em contexto informal).'
    },
    {
      prompt: '🔍 DICA: Adjetivo concorda com o substantivo.\n\nComplete: "As meninas são ___":',
      options: [
        { text: 'estudioso',    correct: false },
        { text: 'estudiosos',   correct: false },
        { text: 'estudiosas',   correct: true  },
        { text: 'estudiosa',    correct: false }
      ],
      explanation: '"Meninas" é feminino plural → o adjetivo deve ser "estudiosas" (fem. plural).'
    }
  ],

  questions: [
    {
      prompt: 'Qual alternativa contém APENAS adjetivos?',
      options: [
        { text: 'bonito, correr, azul',         correct: false },
        { text: 'feliz, enorme, corajoso',       correct: true  },
        { text: 'casa, triste, ela',             correct: false },
        { text: 'rápido, mesa, alegre',          correct: false }
      ],
      explanation: '"Feliz", "enorme" e "corajoso" qualificam substantivos → todos são adjetivos.'
    },
    {
      prompt: 'Na frase "O cachorro preto e branco latiu muito", os adjetivos são:',
      options: [
        { text: 'cachorro e latiu',         correct: false },
        { text: 'preto e branco',           correct: true  },
        { text: 'preto, branco e muito',    correct: false },
        { text: 'muito e latiu',            correct: false }
      ],
      explanation: '"Preto" e "branco" qualificam "cachorro". "Muito" é advérbio (modifica "latiu").'
    },
    {
      prompt: '"Pele de cobra" é uma locução adjetiva equivalente a:',
      options: [
        { text: 'Venenosa',   correct: false },
        { text: 'Ofídica',    correct: true  },
        { text: 'Rastejante', correct: false },
        { text: 'Perigosa',   correct: false }
      ],
      explanation: '"De cobra" é locução adjetiva. O adjetivo erudito equivalente é "ofídico/ofídica".'
    },
    {
      prompt: 'Qual o comparativo de superioridade de "grande"?',
      options: [
        { text: 'Mais grandão',      correct: false },
        { text: 'Maior',             correct: true  },
        { text: 'Grandíssimo',       correct: false },
        { text: 'Muito grande',      correct: false }
      ],
      explanation: '"Grande" tem comparativo irregular: maior (superioridade), menor (inferioridade).'
    },
    {
      prompt: 'Qual o adjetivo pátrio de "Bahia"?',
      options: [
        { text: 'Bahiense',  correct: false },
        { text: 'Baiano',    correct: true  },
        { text: 'Bahiano',   correct: false },
        { text: 'Baiense',   correct: false }
      ],
      explanation: 'Bahia → baiano/baiana. Adjetivo pátrio correto.'
    },
    {
      prompt: '"A situação estava péssima." O adjetivo "péssima" é superlativo de:',
      options: [
        { text: 'Grande',  correct: false },
        { text: 'Mau/Má',  correct: true  },
        { text: 'Ruim',    correct: false },
        { text: 'Triste',  correct: false }
      ],
      explanation: '"Péssimo/péssima" é o superlativo absoluto sintético de "mau/má".'
    },
    {
      prompt: 'Complete com o adjetivo correto: "As flores ___ perfumaram o jardim."',
      options: [
        { text: 'branco',     correct: false },
        { text: 'brancos',    correct: false },
        { text: 'brancas',    correct: true  },
        { text: 'branca',     correct: false }
      ],
      explanation: '"Flores" é feminino plural → adjetivo "brancas" (fem. plural).'
    },
    {
      prompt: 'Qual frase usa corretamente um adjetivo biforme?',
      options: [
        { text: 'O aluno inteligente / A aluna inteligente', correct: false },
        { text: 'O menino forte / A menina forte',           correct: false },
        { text: 'O ator famoso / A atriz famosa',            correct: true  },
        { text: 'O estudante feliz / A estudante feliz',     correct: false }
      ],
      explanation: '"Famoso/famosa" tem formas diferentes para masculino e feminino → adjetivo biforme.'
    },
    {
      prompt: '"Nuvens carregadas de chuva" — a locução adjetiva é:',
      options: [
        { text: 'nuvens carregadas',  correct: false },
        { text: 'de chuva',          correct: true  },
        { text: 'carregadas',        correct: false },
        { text: 'chuva',             correct: false }
      ],
      explanation: '"De chuva" é a locução adjetiva (preposição + substantivo) que modifica "nuvens".'
    },
    {
      prompt: 'Em "João é o mais inteligente da turma", o superlativo é:',
      options: [
        { text: 'Absoluto analítico',             correct: false },
        { text: 'Relativo de superioridade',      correct: true  },
        { text: 'Absoluto sintético',             correct: false },
        { text: 'Comparativo de inferioridade',   correct: false }
      ],
      explanation: '"O mais...da turma" compara dentro de um grupo → superlativo relativo de superioridade.'
    }
  ],

  adaptiveReview: [
    {
      prompt: 'DIFÍCIL: Qual frase contém um adjetivo em grau comparativo de igualdade com forma especial?',
      options: [
        { text: '"Maria é tão boa quanto Ana"',          correct: false },
        { text: '"Pedro é tão bom quanto Luis"',         correct: false },
        { text: '"Este produto é inferior ao anterior"', correct: true  },
        { text: '"A prova foi muito difícil"',           correct: false }
      ],
      explanation: '"Inferior" é a forma especial do comparativo de inferioridade de "bom/boa" (lat. inferior). É um comparativo sintético especial.'
    }
  ],

  rewards: { xp: 120, gems: 12, badge: '🎨 Mestre dos Adjetivos' },
  completionMessage: '🎨 Você colore as frases com adjetivos como um verdadeiro escritor!',
  nextStage: 'pt_s03'
};

window.PT_S02 = PT_S02;
