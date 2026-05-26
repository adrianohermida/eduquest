/**
 * PT STAGE 05 — Advérbio e Preposição
 */

const PT_S05 = {
  id: 'pt_s05',
  title: 'Advérbio e Preposição',
  icon: '🔀',
  difficulty: 'medium',
  estimatedTime: 12,

  learningObjectives: [
    'Identificar advérbios e classificá-los por tipo',
    'Reconhecer locuções adverbiais',
    'Identificar preposições essenciais e acidentais',
    'Diferenciar advérbio de adjetivo',
    'Aplicar preposições e advérbios em contexto'
  ],

  summary: {
    readTime: 3,
    content: [
      {
        icon: '🔀',
        title: 'Advérbio',
        text: 'Advérbio modifica o verbo, o adjetivo ou outro advérbio.\n\nClassificações:\n• Lugar: aqui, ali, lá, atrás, dentro\n• Tempo: ontem, hoje, amanhã, sempre, nunca\n• Modo: bem, mal, assim, rapidamente\n• Intensidade: muito, pouco, bastante, demais\n• Afirmação: sim, certamente, realmente\n• Negação: não, jamais, nunca\n• Dúvida: talvez, provavelmente\n\n💡 Advérbios de modo terminados em -mente: rapidamente, silenciosamente.'
      },
      {
        icon: '🔗',
        title: 'Preposição',
        text: 'Preposição liga dois termos, estabelecendo relação entre eles.\n\nPreposições essenciais: a, ante, após, até, com, contra, de, desde, em, entre, para, perante, por, sem, sob, sobre, trás\n\nCombinações comuns:\n• a + o = ao, a + os = aos\n• de + o = do, de + a = da, de + os = dos, de + as = das\n• em + o = no, em + a = na\n• por + o = pelo, por + a = pela\n\n🔑 "Vou À escola." (preposição "a" + artigo "a" = à — crase!)'
      },
      {
        icon: '📌',
        title: 'Locução Adverbial',
        text: 'Locução adverbial = duas ou mais palavras com valor de advérbio:\n\n• De repente (modo)\n• De vez em quando (frequência)\n• Em seguida (tempo)\n• Com certeza (afirmação)\n• Por acaso (dúvida)\n• Às vezes (frequência)\n\n🔑 Para identificar se é advérbio ou adjetivo: o advérbio não varia em gênero e número. "Ela falou alto." ("alto" não fica "alta") = ADVÉRBIO.'
      }
    ],

    flashcards: [
      { q: 'Advérbio de lugar — exemplos?',     a: 'Aqui, ali, lá, atrás, dentro, fora.' },
      { q: 'Como identificar advérbio vs adj?', a: 'Advérbio é invariável (não muda em gênero/número).' },
      { q: 'Preposições essenciais (lista)?',   a: 'a, ante, após, até, com, contra, de, desde, em, entre, para, por, sem, sob, sobre.' },
      { q: 'de + as = ?',                       a: 'das (contração de preposição + artigo).' },
      { q: 'Locução adverbial de tempo?',       a: 'De vez em quando, às vezes, em seguida.' }
    ],

    mnemonics: [
      { trigger: 'Advérbio invariável', memory: '"Advérbio NÃO concorda. Ela corre RÁPIDO — não vira rápida!"' },
      { trigger: 'Preposições',        memory: '"A ANTE APÓS ATÉ — COM CONTRA DE DESDE — EM ENTRE PARA POR — SEM SOB SOBRE TRÁS."' }
    ],

    miniReview: [
      { q: '"Ela chegou muito cedo." "Muito" modifica o quê?', a: 'O advérbio "cedo" (modifica outro advérbio).' },
      { q: '"Ele foi ao mercado." "ao" = ?',                  a: 'a + o (preposição + artigo).' }
    ]
  },

  warmup: [
    {
      prompt: 'Na frase "Ela corre rapidamente", o advérbio é:',
      options: [
        { text: 'Ela',          correct: false },
        { text: 'corre',        correct: false },
        { text: 'rapidamente',  correct: true  },
        { text: 'Ela corre',    correct: false }
      ],
      explanation: '"Rapidamente" modifica o verbo "corre" → é advérbio de modo.'
    },
    {
      prompt: 'Qual palavra é uma preposição?',
      options: [
        { text: 'Belo',   correct: false },
        { text: 'Correr', correct: false },
        { text: 'Entre',  correct: true  },
        { text: 'Muito',  correct: false }
      ],
      explanation: '"Entre" é preposição essencial — liga termos da oração.'
    },
    {
      prompt: '"Às vezes" é uma:',
      options: [
        { text: 'Locução adjetiva',     correct: false },
        { text: 'Locução adverbial',    correct: true  },
        { text: 'Locução verbal',       correct: false },
        { text: 'Locução prepositiva',  correct: false }
      ],
      explanation: '"Às vezes" equivale a um advérbio de frequência → locução adverbial.'
    }
  ],

  guidedPractice: [
    {
      prompt: '🔍 DICA: Advérbio não varia em gênero/número — adjetivo sim.\n\n"As meninas chegaram ___ (tarde)." Variou? Correto:',
      options: [
        { text: 'tardas',  correct: false },
        { text: 'tardas',  correct: false },
        { text: 'tarde',   correct: true  },
        { text: 'tardes',  correct: false }
      ],
      explanation: '"Tarde" é advérbio — invariável. Não vira "tardas" mesmo com sujeito feminino plural.'
    },
    {
      prompt: '🔍 DICA: Contração de preposição "de" com artigo definido.\n\n"Saímos ___ escola." Complete corretamente:',
      options: [
        { text: 'de a',  correct: false },
        { text: 'da',    correct: true  },
        { text: 'da a',  correct: false },
        { text: 'de',    correct: false }
      ],
      explanation: '"de" + "a" (artigo feminino) = "da". "Saímos da escola."'
    }
  ],

  questions: [
    {
      prompt: 'Classifique o advérbio: "Talvez ele venha amanhã."',
      options: [
        { text: 'Negação e tempo',   correct: false },
        { text: 'Dúvida e tempo',    correct: true  },
        { text: 'Afirmação e modo',  correct: false },
        { text: 'Tempo e lugar',     correct: false }
      ],
      explanation: '"Talvez" = dúvida; "amanhã" = tempo. Dois advérbios em classificações diferentes.'
    },
    {
      prompt: 'Qual contração está CORRETA?',
      options: [
        { text: 'em + o = emo',  correct: false },
        { text: 'por + a = pra', correct: false },
        { text: 'em + a = na',   correct: true  },
        { text: 'de + o = ao',   correct: false }
      ],
      explanation: '"em" + "a" = "na". de+o=do, por+a=pela, a+o=ao.'
    },
    {
      prompt: 'Na frase "Ele sempre chega atrasado", o advérbio "sempre" é de:',
      options: [
        { text: 'Lugar',       correct: false },
        { text: 'Modo',        correct: false },
        { text: 'Frequência',  correct: true  },
        { text: 'Intensidade', correct: false }
      ],
      explanation: '"Sempre" indica que a ação ocorre com frequência → advérbio de frequência (tipo de tempo).'
    },
    {
      prompt: '"Ela é muito inteligente." O advérbio "muito" modifica:',
      options: [
        { text: 'O verbo "é"',        correct: false },
        { text: 'O adjetivo "inteligente"', correct: true  },
        { text: 'O sujeito "Ela"',    correct: false },
        { text: 'A frase inteira',    correct: false }
      ],
      explanation: '"Muito" intensifica o adjetivo "inteligente" → advérbio de intensidade modificando adjetivo.'
    },
    {
      prompt: 'Qual palavra funciona como ADVÉRBIO na frase: "Ele fala baixo demais"?',
      options: [
        { text: 'Ele',      correct: false },
        { text: 'fala',     correct: false },
        { text: 'baixo',    correct: true  },
        { text: 'demais',   correct: false }
      ],
      explanation: '"Baixo" modifica "fala" (verbo) de forma invariável → é advérbio de modo (não adjetivo).'
    },
    {
      prompt: 'Qual é a locução adverbial de modo?',
      options: [
        { text: 'De repente',       correct: true  },
        { text: 'Às vezes',         correct: false },
        { text: 'Em seguida',       correct: false },
        { text: 'Talvez',           correct: false }
      ],
      explanation: '"De repente" indica o jeito como algo aconteceu → locução adverbial de modo.'
    },
    {
      prompt: '"O gato está sob a mesa." A preposição "sob" indica:',
      options: [
        { text: 'Lugar acima',      correct: false },
        { text: 'Lugar abaixo de',  correct: true  },
        { text: 'Tempo',            correct: false },
        { text: 'Posse',            correct: false }
      ],
      explanation: '"Sob" = embaixo de, abaixo de. Ao contrário de "sobre" (acima de).'
    },
    {
      prompt: 'Qual frase tem advérbio de NEGAÇÃO?',
      options: [
        { text: '"Ela certamente virá."',     correct: false },
        { text: '"Ele jamais mentiu."',       correct: true  },
        { text: '"Talvez chova amanhã."',     correct: false },
        { text: '"Eles chegaram bem."',       correct: false }
      ],
      explanation: '"Jamais" nega de forma enfática → advérbio de negação.'
    },
    {
      prompt: '"por + os" resulta em:',
      options: [
        { text: 'pos',   correct: false },
        { text: 'pelos', correct: true  },
        { text: 'poros', correct: false },
        { text: 'pors',  correct: false }
      ],
      explanation: '"por" + "os" = "pelos". Ex: "Passou pelos corredores."'
    },
    {
      prompt: 'Qual das frases usa preposição INCORRETAMENTE?',
      options: [
        { text: '"Gosto de música."',        correct: false },
        { text: '"Ele veio com amigos."',    correct: false },
        { text: '"Saímos em a tarde."',      correct: true  },
        { text: '"Falei com ela."',          correct: false }
      ],
      explanation: '"em a" está errado — deve ser contraído: "na tarde" (em + a = na).'
    }
  ],

  adaptiveReview: [
    {
      prompt: 'DIFÍCIL: Na frase "O menino gritou bem alto", "bem" e "alto" são:',
      options: [
        { text: 'Ambos adjetivos',                   correct: false },
        { text: 'Advérbio e adjetivo',               correct: false },
        { text: 'Ambos advérbios (intensidade e modo)', correct: true  },
        { text: 'Adjetivo e advérbio',               correct: false }
      ],
      explanation: '"Alto" modifica "gritou" (verbo) invariavelmente = advérbio de modo. "Bem" intensifica "alto" = advérbio de intensidade. Ambos são advérbios!'
    }
  ],

  rewards: { xp: 130, gems: 13, badge: '🔀 Mestre dos Conectores' },
  completionMessage: '🔀 Advérbios e preposições estão sob seu controle!',
  nextStage: 'pt_s06'
};

window.PT_S05 = PT_S05;
