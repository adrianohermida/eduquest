/**
 * PT STAGE FINAL — Exame Final: Gramática
 */

const PT_SFINAL = {
  id: 'pt_sfinal',
  title: 'Exame Final de Gramática',
  icon: '🏆',
  difficulty: 'hard',
  estimatedTime: 20,
  isFinal: true,

  learningObjectives: [
    'Demonstrar domínio completo das classes de palavras',
    'Resolver questões contextualizadas no estilo ENEM',
    'Aplicar conhecimentos morfossintáticos em textos reais',
    'Combinar análise morfológica e sintática',
    'Excelência em todos os tópicos do capítulo'
  ],

  summary: {
    readTime: 2,
    content: [
      {
        icon: '🏆',
        title: 'Exame Final!',
        text: 'Chegou a hora da verdade! Este exame cobre TUDO do Capítulo de Gramática.\n\nAs questões são contextualizadas — leia textos reais e analise as palavras em uso.\n\n🎯 Dica: leia o enunciado completo, identifique a classe ou função pedida e use o contexto para decidir. Gramática não é só decorar regras — é entender como as palavras funcionam juntas!'
      }
    ],

    flashcards: [
      { q: 'Classes de palavras (6 principais)?', a: 'Substantivo, Adjetivo, Verbo, Pronome, Advérbio, Preposição.' },
      { q: 'Predicado nominal vs verbal?',         a: 'Nominal: verbo de ligação + predicativo. Verbal: verbo de ação/processo.' },
      { q: 'Sujeito elíptico vs indeterminado?',   a: 'Elíptico: identificável pelo verbo. Indeterminado: impossível identificar.' },
      { q: 'Advérbio vs adjetivo — como diferenciar?', a: 'Advérbio é invariável. Adjetivo concorda em gênero/número.' },
      { q: 'Objeto direto vs indireto?',           a: 'OD: sem preposição. OI: com preposição.' }
    ],

    mnemonics: [
      { trigger: 'Kit Final',  memory: '"SAVPAP + Sintaxe: nomeia, qualifica, age, substitui, modifica, conecta, constrói!"' }
    ],

    miniReview: [
      { q: 'Resumo de todos os tópicos?', a: 'Subst=nome, Adj=qualidade, Verbo=ação/estado, Pronome=substituto, Adv=modif.invariável, Prep=conector, Sujeito=quem faz, OD=sem prep, OI=com prep.' }
    ]
  },

  warmup: [
    {
      prompt: 'Leia: "O velho navio cruzou o oceano lentamente." Qual é a classe de "lentamente"?',
      options: [
        { text: 'Adjetivo',   correct: false },
        { text: 'Advérbio',   correct: true  },
        { text: 'Substantivo',correct: false },
        { text: 'Preposição', correct: false }
      ],
      explanation: '"Lentamente" modifica o verbo "cruzou" de forma invariável → advérbio de modo.'
    },
    {
      prompt: 'Na frase "Comemos pizza ontem", o sujeito é:',
      options: [
        { text: 'pizza',              correct: false },
        { text: 'Nós (elíptico)',     correct: true  },
        { text: 'ontem',              correct: false },
        { text: 'Não tem sujeito',    correct: false }
      ],
      explanation: '"Comemos" = 1ª pessoa plural → sujeito "nós" elíptico (não expresso, mas identificável).'
    },
    {
      prompt: '"Qual" é o pronome relativo em: "O livro ___ li foi ótimo"?',
      options: [
        { text: 'O',     correct: false },
        { text: 'que',   correct: true  },
        { text: 'qual',  correct: false },
        { text: 'cujo',  correct: false }
      ],
      explanation: 'Pronome relativo "que" retoma "o livro" → O livro que li foi ótimo.'
    }
  ],

  guidedPractice: [
    {
      prompt: '🔍 CONTEXTUALIZADO: Leia o trecho: "A professora explicou o conteúdo pacientemente aos alunos atentos."\n\nQuantos adjetivos há?',
      options: [
        { text: '1 — pacientemente',              correct: false },
        { text: '1 — atentos',                    correct: true  },
        { text: '2 — pacientemente e atentos',    correct: false },
        { text: '0',                               correct: false }
      ],
      explanation: '"Atentos" qualifica "alunos" → adjetivo. "Pacientemente" é advérbio (invariável, modifica verbo).'
    },
    {
      prompt: '🔍 ENEM-ESTILO: Na frase "Há muita gente boa neste país", qual é o sujeito?',
      options: [
        { text: 'muita gente boa',   correct: false },
        { text: 'neste país',        correct: false },
        { text: 'Não há sujeito',    correct: true  },
        { text: 'Há',                correct: false }
      ],
      explanation: '"Haver" no sentido de existir é impessoal → oração sem sujeito. "Gente" não é sujeito.'
    }
  ],

  questions: [
    {
      prompt: 'Em "Ele deu o presente para a namorada", identifique o objeto direto:',
      options: [
        { text: 'para a namorada',  correct: false },
        { text: 'o presente',       correct: true  },
        { text: 'Ele',              correct: false },
        { text: 'deu',              correct: false }
      ],
      explanation: '"O presente" = complemento sem preposição → objeto direto.'
    },
    {
      prompt: '"Os tigres são animais ferozes." O predicado é:',
      options: [
        { text: 'Verbal — são',               correct: false },
        { text: 'Nominal — ferozes',          correct: true  },
        { text: 'Verbo-nominal',              correct: false },
        { text: 'Ambíguo',                    correct: false }
      ],
      explanation: '"Ser" = verbo de ligação. "Ferozes" = predicativo do sujeito → predicado nominal.'
    },
    {
      prompt: 'Qual frase tem sujeito COMPOSTO?',
      options: [
        { text: '"O Brasil ganhou a Copa."',                    correct: false },
        { text: '"João e Maria viajaram juntos."',              correct: true  },
        { text: '"Estudei a noite toda."',                      correct: false },
        { text: '"Faz muito calor hoje."',                      correct: false }
      ],
      explanation: '"João e Maria" = dois núcleos → sujeito composto. Os demais: simples, elíptico, sem sujeito.'
    },
    {
      prompt: 'Classifique morfologicamente "belo" em: "Ela tem um belo sorriso":',
      options: [
        { text: 'Advérbio de modo',   correct: false },
        { text: 'Substantivo',        correct: false },
        { text: 'Adjetivo',           correct: true  },
        { text: 'Verbo',              correct: false }
      ],
      explanation: '"Belo" qualifica o substantivo "sorriso" → adjetivo.'
    },
    {
      prompt: 'A palavra "porém" em "Estudei muito, porém não passei" é:',
      options: [
        { text: 'Preposição',     correct: false },
        { text: 'Conjunção',      correct: true  },
        { text: 'Advérbio',       correct: false },
        { text: 'Pronome',        correct: false }
      ],
      explanation: '"Porém" liga orações com valor adversativo → conjunção coordenativa adversativa.'
    },
    {
      prompt: 'Em "Passaram anos desde aquele dia", o sujeito é:',
      options: [
        { text: 'Indeterminado',         correct: false },
        { text: 'anos',                  correct: true  },
        { text: 'aquele dia',            correct: false },
        { text: 'Oração sem sujeito',    correct: false }
      ],
      explanation: '"Anos" é sujeito de "passaram" → sujeito simples. (Diferente de "Faz anos" — aí "fazer" é impessoal.)'
    },
    {
      prompt: 'Identifique o adjunto adverbial em: "Ela acordou cedo nesta manhã fria":',
      options: [
        { text: 'Ela',             correct: false },
        { text: 'fria',            correct: false },
        { text: 'cedo e nesta manhã', correct: true },
        { text: 'acordou',         correct: false }
      ],
      explanation: '"Cedo" (modo/tempo) e "nesta manhã" (tempo) são adjuntos adverbiais. "Fria" é adjunto adnominal de "manhã".'
    },
    {
      prompt: 'Na frase "Que notícia boa!", "boa" é:',
      options: [
        { text: 'Advérbio',              correct: false },
        { text: 'Substantivo',           correct: false },
        { text: 'Adjetivo',              correct: true  },
        { text: 'Pronome demonstrativo', correct: false }
      ],
      explanation: '"Boa" qualifica "notícia" → adjetivo. Mesmo em frases exclamativas, mantém sua classe.'
    },
    {
      prompt: '"Me telefona amanhã." O pronome "me" funciona como:',
      options: [
        { text: 'Sujeito',           correct: false },
        { text: 'Objeto direto',     correct: false },
        { text: 'Objeto indireto',   correct: true  },
        { text: 'Predicativo',       correct: false }
      ],
      explanation: '"Telefonar a alguém" → "me" = objeto indireto (a mim). Uso do oblíquo átono.'
    },
    {
      prompt: 'Analisar: "Trabalham muito nessa empresa." Sujeito + tipo:',
      options: [
        { text: '"nessa empresa" — simples',           correct: false },
        { text: '"eles/as" — elíptico',                correct: false },
        { text: 'Sujeito indeterminado',               correct: true  },
        { text: 'Oração sem sujeito',                  correct: false }
      ],
      explanation: '"Trabalham" = 3ª plural sem identificação possível → sujeito indeterminado.'
    }
  ],

  adaptiveReview: [
    {
      prompt: 'DESAFIO FINAL: No poema "As flores que plantei murcharam", a oração sublinhada "que plantei" é:',
      options: [
        { text: 'Oração principal',                         correct: false },
        { text: 'Oração subordinada adjetiva restritiva',   correct: true  },
        { text: 'Oração subordinada substantiva',           correct: false },
        { text: 'Oração coordenada',                        correct: false }
      ],
      explanation: '"que plantei" é introduzida por pronome relativo "que" e restringe/especifica quais flores murcharam → subordinada adjetiva restritiva.'
    }
  ],

  rewards: { xp: 300, gems: 30, badge: '🏆 Mestre da Gramática' },
  completionMessage: '🏆 PARABÉNS! Você é um verdadeiro Mestre da Gramática Portuguesa! O Gramaturgo foi derrotado para sempre!',
  nextStage: null
};

window.PT_SFINAL = PT_SFINAL;
