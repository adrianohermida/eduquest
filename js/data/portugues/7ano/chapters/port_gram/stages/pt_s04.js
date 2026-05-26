/**
 * PT STAGE 04 — Pronome
 */

const PT_S04 = {
  id: 'pt_s04',
  title: 'Pronome',
  icon: '👤',
  difficulty: 'medium',
  estimatedTime: 15,

  learningObjectives: [
    'Identificar pronomes pessoais do caso reto e oblíquo',
    'Diferenciar pronomes possessivos, demonstrativos e indefinidos',
    'Usar pronomes relativos corretamente',
    'Empregar pronomes de tratamento',
    'Evitar ambiguidade no uso de pronomes'
  ],

  summary: {
    readTime: 4,
    content: [
      {
        icon: '👤',
        title: 'Pronomes Pessoais',
        text: 'Substituem ou acompanham o substantivo.\n\nCaso Reto (sujeito):\n• eu, tu, ele/ela, nós, vós, eles/elas\n\nCaso Oblíquo (complemento):\n• me, te, se, o/a, lhe, nos, vos, os/as, lhes\n\nExemplos:\n• Eu vi ela. → Eu a vi. (oblíquo)\n• Ele me ligou. (me = caso oblíquo)\n\n💡 "Eu" = reto, "mim" = oblíquo. "Para mim fazer" = ERRADO. "Para eu fazer" = CERTO!'
      },
      {
        icon: '🏠',
        title: 'Pronomes Possessivos e Demonstrativos',
        text: 'Possessivos: indicam posse\n• 1ª pessoa: meu/minha, nosso/nossa\n• 2ª pessoa: teu/tua, vosso/vossa\n• 3ª pessoa: seu/sua, dele/dela\n\nDemonstrativos: indicam posição\n• Este/esta/isto — perto de quem fala\n• Esse/essa/isso — perto de quem ouve (ou já mencionado)\n• Aquele/aquela/aquilo — longe de ambos\n\n🔑 "Este livro" = está na minha mão. "Esse livro" = está na sua mão.'
      },
      {
        icon: '🔗',
        title: 'Pronomes Relativos e Indefinidos',
        text: 'Relativos: retomam um antecedente\n• que, quem, o qual, cujo, onde\n• "O aluno QUE estudou passou." (que = o aluno)\n• "A casa ONDE moro é antiga."\n\nIndefinidos: referência vaga\n• alguém, ninguém, tudo, nada, algo, qualquer\n• "Alguém deixou um recado."\n• "Nada está perdido."\n\nTratamento:\n• Você (informal), o senhor/a senhora (formal)\n• Vossa Excelência (autoridades), Vossa Majestade (reis)'
      }
    ],

    flashcards: [
      { q: 'Pronome pessoal reto 1ª pessoa?',        a: 'Eu (singular), nós (plural).' },
      { q: 'Qual usar: "para mim" ou "para eu"?',   a: 'Para eu fazer algo (eu = sujeito). Para mim = oblíquo, sem verbo.' },
      { q: 'Demonstrativo perto de quem fala?',     a: 'Este, esta, isto.' },
      { q: 'Pronome relativo que retoma lugar?',    a: 'Onde. Ex: a cidade onde nasci.' },
      { q: 'Tratamento para presidente?',           a: 'Vossa Excelência (V. Ex.ª).' }
    ],

    mnemonics: [
      { trigger: 'Este/esse/aquele',    memory: '"ESTE está em mim (perto de quem fala). ESSE está em você (perto de quem ouve). AQUELE está lá longe."' },
      { trigger: 'Reto vs Oblíquo',    memory: '"EU é sujeito = reto. MIM é complemento = oblíquo. Diga: EU faço, mas PARA MIM."' }
    ],

    miniReview: [
      { q: '"Trouxe o livro para ___." Reto ou oblíquo: eu / mim?', a: 'Para mim (oblíquo — complemento de preposição).' },
      { q: '"___ livro é seu?" Este, esse ou aquele?',              a: 'Este (o livro está perto de quem fala).' }
    ]
  },

  warmup: [
    {
      prompt: 'Qual é o pronome pessoal do caso RETO na 3ª pessoa do plural?',
      options: [
        { text: 'Lhes',       correct: false },
        { text: 'Eles/Elas',  correct: true  },
        { text: 'Os/As',      correct: false },
        { text: 'Se',         correct: false }
      ],
      explanation: 'Pronomes pessoais do caso reto: eu, tu, ele/ela, nós, vós, eles/elas. 3ª pessoa plural = eles/elas.'
    },
    {
      prompt: '"___ livro é este." Qual pronome demonstrativo indica que o livro está LONGE de ambos os interlocutores?',
      options: [
        { text: 'Este',    correct: false },
        { text: 'Esse',    correct: false },
        { text: 'Aquele',  correct: true  },
        { text: 'Isto',    correct: false }
      ],
      explanation: '"Aquele" indica distância de ambos — longe de quem fala E de quem ouve.'
    },
    {
      prompt: 'Qual frase usa o pronome CORRETAMENTE?',
      options: [
        { text: 'Para mim fazer o trabalho.',  correct: false },
        { text: 'Para eu fazer o trabalho.',   correct: true  },
        { text: 'Para eu o fazer.',            correct: false },
        { text: 'Para mim fazer.',             correct: false }
      ],
      explanation: 'Antes de verbo no infinitivo usa-se o pronome reto "eu" (sujeito do infinitivo). "Para eu fazer" está correto.'
    }
  ],

  guidedPractice: [
    {
      prompt: '🔍 DICA: O pronome "cujo" indica posse e concorda com o objeto possuído.\n\n"O professor ___ aula adorei é excelente." Qual pronome preenche?',
      options: [
        { text: 'que',   correct: false },
        { text: 'cujo',  correct: false },
        { text: 'cuja',  correct: true  },
        { text: 'onde',  correct: false }
      ],
      explanation: '"Cujo/cuja" é pronome relativo que indica posse. Concorda com "aula" (feminino) → cuja.'
    },
    {
      prompt: '🔍 DICA: Pronomes indefinidos referem-se a pessoas ou coisas de forma vaga.\n\nQual é o pronome indefinido na frase: "Alguém deixou a porta aberta"?',
      options: [
        { text: 'a',         correct: false },
        { text: 'Alguém',    correct: true  },
        { text: 'deixou',    correct: false },
        { text: 'aberta',    correct: false }
      ],
      explanation: '"Alguém" refere-se a uma pessoa de forma indefinida → pronome indefinido.'
    }
  ],

  questions: [
    {
      prompt: 'Substitua "o livro" pelo pronome oblíquo: "Eu comprei o livro."',
      options: [
        { text: 'Eu o comprei.',   correct: true  },
        { text: 'Eu lhe comprei.', correct: false },
        { text: 'Eu me comprei.',  correct: false },
        { text: 'Eu ele comprei.', correct: false }
      ],
      explanation: '"O livro" é objeto direto → pronome oblíquo: "o". Resultado: "Eu o comprei."'
    },
    {
      prompt: '"Seu carro está sujo." O pronome "Seu" indica posse de:',
      options: [
        { text: 'Apenas 2ª pessoa',                   correct: false },
        { text: 'Apenas 3ª pessoa',                   correct: false },
        { text: '2ª ou 3ª pessoa (ambíguo)',           correct: true  },
        { text: 'Apenas 1ª pessoa',                   correct: false }
      ],
      explanation: '"Seu" pode ser de "tu/você" (2ª) ou "ele/ela" (3ª). É ambíguo — prefira "o carro dele/de você".'
    },
    {
      prompt: 'Na frase "O aluno que estudou passou", o pronome relativo "que" retoma:',
      options: [
        { text: 'Passou',   correct: false },
        { text: 'Estudou',  correct: false },
        { text: 'Aluno',    correct: true  },
        { text: 'O',        correct: false }
      ],
      explanation: '"Que" é pronome relativo que retoma o antecedente "aluno".'
    },
    {
      prompt: 'Qual pronome de tratamento é usado para juízes e desembargadores?',
      options: [
        { text: 'Vossa Majestade',    correct: false },
        { text: 'Vossa Excelência',   correct: true  },
        { text: 'Vossa Senhoria',     correct: false },
        { text: 'Vossa Alteza',       correct: false }
      ],
      explanation: 'Vossa Excelência = para magistrados, ministros, governadores, presidentes.'
    },
    {
      prompt: 'Qual frase tem pronome demonstrativo CORRETO?',
      options: [
        { text: '"Aquele livro que está na sua mão é bonito."',  correct: false },
        { text: '"Este livro que está na sua mão é bonito."',    correct: false },
        { text: '"Esse livro que está na sua mão é bonito."',    correct: true  },
        { text: '"Isto livro que está na sua mão é bonito."',    correct: false }
      ],
      explanation: '"Esse" = perto de quem ouve (na SUA mão). "Este" = perto de quem fala (na MINHA mão).'
    },
    {
      prompt: '"Ninguém sabe a resposta." O pronome "Ninguém" é:',
      options: [
        { text: 'Pessoal',       correct: false },
        { text: 'Relativo',      correct: false },
        { text: 'Indefinido',    correct: true  },
        { text: 'Demonstrativo', correct: false }
      ],
      explanation: '"Ninguém" refere-se a pessoa de forma vaga e negativa → pronome indefinido.'
    },
    {
      prompt: 'Complete: "Dei o presente ___ professora."',
      options: [
        { text: 'a',       correct: false },
        { text: 'à',       correct: false },
        { text: 'lhe',     correct: true  },
        { text: 'a ela',   correct: false }
      ],
      explanation: '"Dei o presente À professora" = "Dei-lhe o presente." "Lhe" substitui "à professora" (obj. indireto).'
    },
    {
      prompt: 'Pronomes possessivos da 1ª pessoa do plural:',
      options: [
        { text: 'Meu/minha',       correct: false },
        { text: 'Nosso/nossa',     correct: true  },
        { text: 'Seu/sua',         correct: false },
        { text: 'Vosso/vossa',     correct: false }
      ],
      explanation: '1ª pessoa plural = "nós" → pronome possessivo: nosso/nossa/nossos/nossas.'
    },
    {
      prompt: '"A cidade onde nasci é linda." O pronome relativo "onde" refere-se a:',
      options: [
        { text: 'Linda',   correct: false },
        { text: 'Nasci',   correct: false },
        { text: 'Cidade',  correct: true  },
        { text: 'A',       correct: false }
      ],
      explanation: '"Onde" é pronome relativo que retoma lugar → "cidade".'
    },
    {
      prompt: 'Qual das opções usa pronome pessoal oblíquo correto?',
      options: [
        { text: 'Ele telefonou para eu.',    correct: false },
        { text: 'Ele telefonou para mim.',   correct: true  },
        { text: 'Ele telefonou para eu mim.',correct: false },
        { text: 'Ele telefonou a eu.',       correct: false }
      ],
      explanation: 'Após preposição "para", usa-se o oblíquo "mim" (não "eu"). "Para mim" está correto.'
    }
  ],

  adaptiveReview: [
    {
      prompt: 'DIFÍCIL: "Trouxe os relatórios. Entreguei-os ao diretor." O pronome "-os" refere-se a:',
      options: [
        { text: 'Ao diretor',     correct: false },
        { text: 'Os relatórios',  correct: true  },
        { text: 'Entreguei',      correct: false },
        { text: 'Trouxe',         correct: false }
      ],
      explanation: '"-Os" é pronome oblíquo que retoma "os relatórios" (objeto direto). A anáfora (retomada) é uma função essencial do pronome.'
    }
  ],

  rewards: { xp: 140, gems: 14, badge: '👤 Mestre dos Pronomes' },
  completionMessage: '👤 Você usa pronomes como um gramático profissional!',
  nextStage: 'pt_s05'
};

window.PT_S04 = PT_S04;
