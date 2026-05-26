/**
 * PT STAGE 06 — Sintaxe: Sujeito e Predicado
 */

const PT_S06 = {
  id: 'pt_s06',
  title: 'Sintaxe: Sujeito e Predicado',
  icon: '🏗️',
  difficulty: 'medium',
  estimatedTime: 15,

  learningObjectives: [
    'Identificar sujeito e predicado em orações',
    'Reconhecer os tipos de sujeito',
    'Diferenciar predicado verbal, nominal e verbo-nominal',
    'Identificar objeto direto e indireto',
    'Reconhecer adjunto adnominal e adverbial'
  ],

  summary: {
    readTime: 4,
    content: [
      {
        icon: '🏗️',
        title: 'Sujeito e Predicado',
        text: 'Toda oração tem (ou subentende) sujeito e predicado.\n\nSujeito: de quem ou do que se fala\n• "Os alunos estudaram." → Sujeito: "Os alunos"\n\nPredicado: o que se diz do sujeito\n• "Os alunos estudaram muito." → Predicado: "estudaram muito"\n\n💡 Para achar o sujeito: pergunte "Quem?" ou "O que?" ao verbo.'
      },
      {
        icon: '👥',
        title: 'Tipos de Sujeito',
        text: 'Simples: um único núcleo\n• "Maria cantou." → Maria\n\nComposto: dois ou mais núcleos\n• "João e Maria cantaram." → João e Maria\n\nElíptico (oculto): subentendido pelo verbo\n• "Estudamos muito." → (Nós) — sujeito implícito\n\nIndeterminado: não identificado\n• "Roubaram minha bolsa." (quem?)\n• "Precisa-se de funcionários."\n\nOrações sem sujeito (impessoais):\n• Fenômenos: "Choveu muito."\n• Fazer/Haver: "Faz frio. / Há pessoas aqui."'
      },
      {
        icon: '🔤',
        title: 'Tipos de Predicado',
        text: 'Verbal: núcleo é verbo de ação/processo\n• "O menino correu." → núcleo: correu\n\nNominal: núcleo é nome (predicativo do sujeito)\n• Usa verbo de ligação: ser, estar, parecer, ficar, tornar-se\n• "Ana está feliz." → núcleo: feliz\n\nVerbo-nominal: dois núcleos\n• "O aluno chegou cansado."\n• Núcleos: chegou (verbal) + cansado (nominal)\n\n🔑 Objeto direto = sem preposição. Objeto indireto = com preposição.'
      }
    ],

    flashcards: [
      { q: 'Como identificar o sujeito?',          a: 'Pergunte "quem?" ou "o quê?" ao verbo.' },
      { q: 'Sujeito elíptico?',                    a: 'Sujeito subentendido, não expresso. Ex: Estudei muito. (eu)' },
      { q: 'Verbo de ligação + predicativo = ?',   a: 'Predicado nominal. Ex: "Ela é bonita."' },
      { q: 'Objeto direto vs indireto?',           a: 'Direto: sem preposição. Indireto: com preposição.' },
      { q: 'Oração sem sujeito — exemplo?',        a: '"Choveu forte." Verbos de fenômeno são impessoais.' }
    ],

    mnemonics: [
      { trigger: 'Sujeito',               memory: '"QUEM fez? ou O QUÊ fez? = sujeito da oração."' },
      { trigger: 'Predicado nominal',     memory: '"VERBO DE LIGAÇÃO (ser, estar, parecer, ficar) + adjetivo = predicado nominal."' }
    ],

    miniReview: [
      { q: '"Os pássaros cantaram." Sujeito?',                a: '"Os pássaros" (simples).' },
      { q: '"Comprei um livro." Objeto direto?',              a: '"um livro" (sem preposição).' }
    ]
  },

  warmup: [
    {
      prompt: 'Na frase "Os estudantes passaram na prova", o sujeito é:',
      options: [
        { text: 'passaram',           correct: false },
        { text: 'Os estudantes',      correct: true  },
        { text: 'na prova',           correct: false },
        { text: 'Os estudantes passaram', correct: false }
      ],
      explanation: '"Quem passou?" → Os estudantes. Esse é o sujeito simples da oração.'
    },
    {
      prompt: '"Estava chovendo muito." Qual é o sujeito?',
      options: [
        { text: 'Estava',      correct: false },
        { text: 'Muito',       correct: false },
        { text: 'Chovendo',    correct: false },
        { text: 'Não tem sujeito (oração sem sujeito)', correct: true }
      ],
      explanation: '"Chover" é verbo de fenômeno — impessoal, sem sujeito. Oração sem sujeito.'
    },
    {
      prompt: 'O predicado "está com fome" na frase "O cachorro está com fome" é:',
      options: [
        { text: 'Verbal',          correct: false },
        { text: 'Nominal',         correct: true  },
        { text: 'Verbo-nominal',   correct: false },
        { text: 'Sem classificação', correct: false }
      ],
      explanation: '"Estar" é verbo de ligação. O núcleo é "com fome" (predicativo do sujeito) → predicado nominal.'
    }
  ],

  guidedPractice: [
    {
      prompt: '🔍 DICA: Sujeito elíptico não está expresso, mas pode ser descoberto pela terminação do verbo.\n\n"Fomos ao cinema." O sujeito é:',
      options: [
        { text: 'Não tem sujeito',   correct: false },
        { text: 'Eu',                correct: false },
        { text: 'Nós (elíptico)',    correct: true  },
        { text: 'Eles',              correct: false }
      ],
      explanation: '"Fomos" = 1ª pessoa plural → sujeito: nós (elíptico/oculto).'
    },
    {
      prompt: '🔍 DICA: Objeto direto não exige preposição; indireto exige.\n\n"Ele obedeceu ___ seus pais." O complemento é:',
      options: [
        { text: 'Objeto direto',    correct: false },
        { text: 'Objeto indireto',  correct: true  },
        { text: 'Predicativo',      correct: false },
        { text: 'Adjunto adverbial',correct: false }
      ],
      explanation: '"Obedecer" exige preposição "a": obedecer a alguém → objeto indireto.'
    }
  ],

  questions: [
    {
      prompt: 'Identifique o tipo de sujeito: "Pedro e Ana estudaram juntos."',
      options: [
        { text: 'Simples',      correct: false },
        { text: 'Composto',     correct: true  },
        { text: 'Elíptico',     correct: false },
        { text: 'Indeterminado',correct: false }
      ],
      explanation: '"Pedro e Ana" tem dois núcleos → sujeito composto.'
    },
    {
      prompt: '"Compraram meu carro." O sujeito é:',
      options: [
        { text: 'Simples: meu carro',         correct: false },
        { text: 'Elíptico: eles',             correct: false },
        { text: 'Indeterminado',              correct: true  },
        { text: 'Não tem sujeito',            correct: false }
      ],
      explanation: '"Compraram" — não sabemos quem comprou → sujeito indeterminado.'
    },
    {
      prompt: 'Na frase "O professor explicou a matéria aos alunos":\n• Objeto direto = ?\n• Objeto indireto = ?',
      options: [
        { text: 'OD: professor | OI: alunos',        correct: false },
        { text: 'OD: a matéria | OI: aos alunos',    correct: true  },
        { text: 'OD: aos alunos | OI: a matéria',    correct: false },
        { text: 'OD: matéria | OI: professor',       correct: false }
      ],
      explanation: '"Explicou a matéria" (sem preposição = OD). "Aos alunos" (preposição "a" = OI).'
    },
    {
      prompt: '"A criança parece cansada." O predicado é:',
      options: [
        { text: 'Verbal — núcleo: parece',         correct: false },
        { text: 'Nominal — núcleo: cansada',       correct: true  },
        { text: 'Verbo-nominal',                   correct: false },
        { text: 'Sem classificação',               correct: false }
      ],
      explanation: '"Parecer" é verbo de ligação. Núcleo = predicativo "cansada" → predicado nominal.'
    },
    {
      prompt: 'Em "O atleta chegou exausto ao estádio", o predicado é:',
      options: [
        { text: 'Verbal',       correct: false },
        { text: 'Nominal',      correct: false },
        { text: 'Verbo-nominal',correct: true  },
        { text: 'Preposicional',correct: false }
      ],
      explanation: '"Chegou" (verbo de ação = núcleo verbal) + "exausto" (predicativo = núcleo nominal) → predicado verbo-nominal.'
    },
    {
      prompt: 'Qual é o adjunto adverbial na frase: "Ela estudou muito na biblioteca"?',
      options: [
        { text: 'Ela',           correct: false },
        { text: 'estudou muito', correct: false },
        { text: 'na biblioteca', correct: true  },
        { text: 'muito',         correct: false }
      ],
      explanation: '"Na biblioteca" indica lugar → adjunto adverbial de lugar.'
    },
    {
      prompt: '"Precisamos de ajuda." O verbo "precisar" é:',
      options: [
        { text: 'De ligação — predicado nominal',            correct: false },
        { text: 'Transitivo indireto — exige preposição',    correct: true  },
        { text: 'Intransitivo — não exige complemento',      correct: false },
        { text: 'Transitivo direto — sem preposição',        correct: false }
      ],
      explanation: '"Precisar de" = verbo transitivo indireto (exige preposição). "Ajuda" = objeto indireto.'
    },
    {
      prompt: 'Qual frase tem sujeito ELÍPTICO?',
      options: [
        { text: '"Maria saiu cedo."',        correct: false },
        { text: '"Saímos cedo."',            correct: true  },
        { text: '"Roubaram a bolsa dela."',  correct: false },
        { text: '"Choveu a noite toda."',    correct: false }
      ],
      explanation: '"Saímos" — nós (sujeito elíptico). "Roubaram" = indeterminado. "Choveu" = sem sujeito.'
    },
    {
      prompt: 'Identifique o predicativo do sujeito: "O time ficou campeão."',
      options: [
        { text: 'time',      correct: false },
        { text: 'ficou',     correct: false },
        { text: 'campeão',   correct: true  },
        { text: 'O time ficou', correct: false }
      ],
      explanation: '"Ficar" é verbo de ligação. "Campeão" é predicativo do sujeito (caracteriza "o time").'
    },
    {
      prompt: 'Na frase "Há muitos problemas nessa cidade", o sujeito é:',
      options: [
        { text: 'muitos problemas',       correct: false },
        { text: 'nessa cidade',           correct: false },
        { text: 'Não tem sujeito',        correct: true  },
        { text: 'Há (verbo impessoal)',   correct: false }
      ],
      explanation: '"Haver" no sentido de "existir" é impessoal → oração sem sujeito.'
    }
  ],

  adaptiveReview: [
    {
      prompt: 'DIFÍCIL: Na frase "Venderam-se apartamentos no centro", o sujeito é:',
      options: [
        { text: 'Indeterminado',                                  correct: false },
        { text: '"apartamentos" (sujeito paciente da voz passiva)',correct: true  },
        { text: 'Sem sujeito',                                    correct: false },
        { text: '"no centro" (adjunto adverbial)',                correct: false }
      ],
      explanation: '"Venderam-se" = voz passiva sintética. "Apartamentos" é o sujeito paciente — quem sofre a ação de ser vendido.'
    }
  ],

  rewards: { xp: 150, gems: 15, badge: '🏗️ Arquiteto das Frases' },
  completionMessage: '🏗️ Você constrói frases perfeitas — é um arquiteto da língua!',
  nextStage: 'pt_sboss'
};

window.PT_S06 = PT_S06;
