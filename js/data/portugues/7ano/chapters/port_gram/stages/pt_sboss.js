/**
 * PT STAGE BOSS — Gramaturgo Caótico: Grande Revisão de Gramática
 */

const PT_SBOSS = {
  id: 'pt_sboss',
  title: 'Gramaturgo Caótico',
  icon: '🌀',
  difficulty: 'boss',
  estimatedTime: 20,
  isBoss: true,

  learningObjectives: [
    'Integrar conhecimentos de todas as classes de palavras',
    'Analisar morfossintaxe de frases complexas',
    'Identificar funções sintáticas em contexto',
    'Resolver questões mistas de gramática',
    'Demonstrar domínio completo do capítulo'
  ],

  summary: {
    readTime: 3,
    content: [
      {
        icon: '🌀',
        title: 'Aviso do Gramaturgo!',
        text: 'O Gramaturgo Caótico embaralhou TODAS as classes de palavras! Suas frases estão confusas — misturou substantivos com advérbios, adjetivos com preposições!\n\n⚔️ Para derrota-lo você deve dominar:\n• Substantivo: nomes de seres\n• Adjetivo: qualificadores\n• Verbo: ações e estados\n• Pronome: substitutos e acompanhantes\n• Advérbio: modificadores invariáveis\n• Preposição: conectores\n• Sintaxe: sujeito, predicado, objetos\n\n🎯 Mostre que você conhece as palavras melhor que o próprio caos!'
      },
      {
        icon: '📚',
        title: 'Revisão Rápida',
        text: 'Kit de sobrevivência gramatical:\n\n• Substantivo: o/a antes → nomeia\n• Adjetivo: qualifica, concorda\n• Verbo: correu? correu ✅\n• Pronome: substitui o substantivo\n• Advérbio: invariável, modifica verbo/adj/adv\n• Preposição: conecta termos\n• Sujeito: quem faz (pergunta ao verbo)\n• OD: sem preposição / OI: com preposição'
      }
    ],

    flashcards: [
      { q: 'Diferença advérbio vs adjetivo?',    a: 'Advérbio invariável (modifica verbo/adj). Adjetivo varia e qualifica subst.' },
      { q: 'Verbo de ligação + predicativo = ?',  a: 'Predicado nominal. Ex: "Ela está triste."' },
      { q: 'Sujeito indeterminado — como?',       a: 'Verbo 3ª plural sem sujeito identificado. Ex: "Roubaram meu carro."' },
      { q: 'Pronome relativo "cujo" — uso?',      a: 'Indica posse, concorda com o possuído. Ex: "o autor cujo livro li."' },
      { q: 'Locução adjetiva vs adjetivo?',       a: 'Loc. adj = prep+subst (de ouro). Adj = palavra única (áureo).' }
    ],

    mnemonics: [
      { trigger: 'Kit gramatical final', memory: '"SAVPAP: Substantivo, Adjetivo, Verbo, Pronome, Advérbio, Preposição — as 6 classes principais!"' }
    ],

    miniReview: [
      { q: '"Ela canta bem." Classes de cada palavra?', a: 'Ela=pronome, canta=verbo, bem=advérbio.' },
      { q: '"Livro de bolso" = locução ___?',           a: 'Adjetiva ("de bolso" qualifica "livro").' }
    ]
  },

  warmup: [
    {
      prompt: 'Classifique todas as palavras: "O cachorro bravo latiu."',
      options: [
        { text: 'artigo, subst., verbo, adv.',              correct: false },
        { text: 'artigo, subst., adj., verbo.',             correct: true  },
        { text: 'pronome, subst., adj., verbo.',            correct: false },
        { text: 'artigo, adj., subst., verbo.',             correct: false }
      ],
      explanation: 'O=artigo, cachorro=substantivo, bravo=adjetivo, latiu=verbo.'
    },
    {
      prompt: '"Ela sempre chega tarde." Classifique "sempre" e "tarde":',
      options: [
        { text: 'adjetivo e substantivo',          correct: false },
        { text: 'ambos são advérbios',             correct: true  },
        { text: 'pronome e adjetivo',              correct: false },
        { text: 'advérbio e adjetivo',             correct: false }
      ],
      explanation: '"Sempre" = adv. de frequência (modifica "chega"). "Tarde" = adv. de tempo, invariável.'
    },
    {
      prompt: '"Gostamos de música." O sujeito e objeto são:',
      options: [
        { text: 'S: nós | OD: de música',      correct: false },
        { text: 'S: nós (elíptico) | OI: de música', correct: true  },
        { text: 'S: música | OD: nós',         correct: false },
        { text: 'S: de música | OI: nós',      correct: false }
      ],
      explanation: '"Gostamos" = 1ª pl. (nós, elíptico). "Gostar de" exige preposição → "de música" = objeto indireto.'
    }
  ],

  guidedPractice: [
    {
      prompt: '🔍 MISTO: Identifique sujeito + tipo de predicado.\n\n"O menino ficou nervoso durante a prova."',
      options: [
        { text: 'S: o menino | Pred: verbal',             correct: false },
        { text: 'S: o menino | Pred: nominal',            correct: true  },
        { text: 'S: a prova | Pred: nominal',             correct: false },
        { text: 'S: o menino | Pred: verbo-nominal',      correct: false }
      ],
      explanation: '"Ficar" = verbo de ligação. "Nervoso" = predicativo do sujeito. → Predicado nominal.'
    },
    {
      prompt: '🔍 MISTO: Identifique a classe de "cujo" e sua função.\n\n"O escritor cujo romance li é brasileiro."',
      options: [
        { text: 'Pronome relativo — indica posse de "romance"', correct: true  },
        { text: 'Pronome demonstrativo — indica posição',        correct: false },
        { text: 'Adjetivo — qualifica "escritor"',               correct: false },
        { text: 'Artigo — acompanha "romance"',                  correct: false }
      ],
      explanation: '"Cujo" = pronome relativo possessivo. Retoma "escritor" e indica que "romance" é do escritor. Concorda com "romance" (masc. sing.).'
    }
  ],

  questions: [
    {
      prompt: 'Na frase "Os meninos espertos da turma chegaram cedo", quantas classes de palavras diferentes há?',
      options: [
        { text: '3', correct: false },
        { text: '4', correct: false },
        { text: '5', correct: true  },
        { text: '6', correct: false }
      ],
      explanation: 'Os=artigo, meninos=subst., espertos=adj., da=prep+art., turma=subst., chegaram=verbo, cedo=adv. São 5 classes distintas.'
    },
    {
      prompt: '"Venderam o carro do vizinho." Identifique sujeito e OD:',
      options: [
        { text: 'S: o vizinho | OD: o carro',               correct: false },
        { text: 'S: indeterminado | OD: o carro do vizinho', correct: true  },
        { text: 'S: o carro | OD: do vizinho',              correct: false },
        { text: 'Sem sujeito | OD: o carro',                correct: false }
      ],
      explanation: '"Venderam" 3ª pl. sem identificação = sujeito indeterminado. "O carro do vizinho" = objeto direto (sem preposição).'
    },
    {
      prompt: 'Qual frase tem PREDICADO VERBO-NOMINAL?',
      options: [
        { text: '"Ela cantou lindamente."',          correct: false },
        { text: '"Ele está feliz."',                 correct: false },
        { text: '"O jogador entrou machucado."',     correct: true  },
        { text: '"Choveu ontem."',                   correct: false }
      ],
      explanation: '"Entrou" (verbo de ação = núcleo verbal) + "machucado" (predicativo = núcleo nominal) → predicado verbo-nominal.'
    },
    {
      prompt: '"Ninguém soube a resposta." Classifique "Ninguém":',
      options: [
        { text: 'Pronome indefinido — sujeito',       correct: true  },
        { text: 'Pronome relativo — sujeito',         correct: false },
        { text: 'Advérbio de negação',                correct: false },
        { text: 'Substantivo abstrato',               correct: false }
      ],
      explanation: '"Ninguém" = pronome indefinido (referência vaga/negativa). Função: sujeito da oração.'
    },
    {
      prompt: 'Em "Ela me deu um presente", "me" é:',
      options: [
        { text: 'Pronome pessoal reto',                         correct: false },
        { text: 'Pronome oblíquo — objeto indireto (a mim)',    correct: true  },
        { text: 'Pronome oblíquo — objeto direto',             correct: false },
        { text: 'Artigo',                                       correct: false }
      ],
      explanation: '"Me" = pronome oblíquo 1ª pessoa. "Deu a mim" → objeto indireto.'
    },
    {
      prompt: 'Qual é o adjunto adnominal na frase: "A bela cidade histórica encantou os turistas"?',
      options: [
        { text: 'encantou',          correct: false },
        { text: 'os turistas',       correct: false },
        { text: 'A bela histórica',  correct: true  },
        { text: 'bela e histórica',  correct: false }
      ],
      explanation: '"A", "bela" e "histórica" são adjuntos adnominais — modificam o substantivo "cidade".'
    },
    {
      prompt: '"Há muitos estudantes na biblioteca." Esta oração:',
      options: [
        { text: 'Tem sujeito simples: "estudantes"',         correct: false },
        { text: 'É sem sujeito — "haver" impessoal',        correct: true  },
        { text: 'Tem sujeito elíptico',                      correct: false },
        { text: 'Tem sujeito indeterminado',                 correct: false }
      ],
      explanation: '"Haver" no sentido de existir é verbo impessoal → oração sem sujeito. Não concorda com "estudantes".'
    },
    {
      prompt: 'Classifique o pronome "onde" em: "A escola onde estudei ficou famosa."',
      options: [
        { text: 'Pronome demonstrativo',  correct: false },
        { text: 'Pronome relativo',       correct: true  },
        { text: 'Advérbio de lugar',      correct: false },
        { text: 'Preposição',             correct: false }
      ],
      explanation: '"Onde" retoma "escola" (antecedente) e exerce função de adjunto adverbial de lugar → pronome relativo.'
    },
    {
      prompt: 'Qual é o objeto direto em: "Ele enviou a carta à professora"?',
      options: [
        { text: 'à professora',   correct: false },
        { text: 'a carta',        correct: true  },
        { text: 'enviou',         correct: false },
        { text: 'Ele',            correct: false }
      ],
      explanation: '"A carta" — complemento sem preposição = objeto direto. "À professora" = objeto indireto (preposição "a").'
    },
    {
      prompt: 'Analise a frase: "Talvez eles venham amanhã." O verbo "venham" está no modo:',
      options: [
        { text: 'Indicativo presente',      correct: false },
        { text: 'Imperativo afirmativo',    correct: false },
        { text: 'Subjuntivo presente',      correct: true  },
        { text: 'Infinitivo',               correct: false }
      ],
      explanation: '"Talvez" introduz hipótese → subjuntivo presente. "Venham" = forma subjuntiva de "vir".'
    }
  ],

  adaptiveReview: [
    {
      prompt: 'SUPREMO: Na frase "O aluno cujos pais são professores tirou dez", qual é a função de "cujos pais são professores"?',
      options: [
        { text: 'Oração coordenada',                    correct: false },
        { text: 'Oração subordinada adjetiva',          correct: true  },
        { text: 'Oração subordinada substantiva',       correct: false },
        { text: 'Oração principal',                     correct: false }
      ],
      explanation: 'A oração com pronome relativo "cujos" modifica o substantivo "aluno" → oração subordinada adjetiva (com função de adjunto adnominal).'
    }
  ],

  rewards: { xp: 250, gems: 25, badge: '🌀 Vencedor do Gramaturgo' },
  completionMessage: '🌀 Você derrotou o Gramaturgo Caótico! A ordem gramatical foi restaurada!',
  nextStage: 'pt_sfinal'
};

window.PT_SBOSS = PT_SBOSS;
