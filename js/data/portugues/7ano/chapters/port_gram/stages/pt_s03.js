/**
 * PT STAGE 03 — Verbo
 */

const PT_S03 = {
  id: 'pt_s03',
  title: 'Verbo',
  icon: '⚡',
  difficulty: 'medium',
  estimatedTime: 15,

  learningObjectives: [
    'Identificar verbos em frases e textos',
    'Conjugar verbos nos principais tempos verbais',
    'Diferenciar verbos de ação, estado e fenômeno',
    'Reconhecer verbos regulares e irregulares',
    'Entender pessoa, número, tempo e modo verbais'
  ],

  summary: {
    readTime: 4,
    content: [
      {
        icon: '⚡',
        title: 'O que é Verbo?',
        text: 'Verbo é a palavra que expressa ação, estado, fenômeno ou processo.\n\n• Ação: correr, estudar, escrever\n• Estado: ser, estar, parecer, ficar\n• Fenômeno: chover, nevar, gear\n• Processo: nascer, crescer, envelhecer\n\n💡 O verbo é o coração da frase — sem ele, não há oração!'
      },
      {
        icon: '🕐',
        title: 'Tempos Verbais',
        text: 'Modo Indicativo (fatos reais):\n• Presente: eu estudo\n• Pretérito Perfeito: eu estudei\n• Pretérito Imperfeito: eu estudava\n• Futuro do Presente: eu estudarei\n\nModo Subjuntivo (possibilidade/desejo):\n• Presente: que eu estude\n• Imperfeito: se eu estudasse\n\nModo Imperativo (ordem/pedido):\n• Afirmativo: Estude!\n• Negativo: Não estude!'
      },
      {
        icon: '🔄',
        title: 'Verbos Regulares vs Irregulares',
        text: 'Regulares: seguem o padrão da conjugação\n• 1ª conjugação (-ar): cantar, falar, estudar\n• 2ª conjugação (-er): comer, beber, correr\n• 3ª conjugação (-ir): partir, sorrir, dividir\n\nIrregulares: sofrem alterações na raiz\n• ser: sou, és, é, somos, sois, são\n• ter: tenho, tens, tem, temos, tendes, têm\n• ir: vou, vais, vai, vamos, ides, vão\n\n🔑 Verbo "poder" no presente: posso, podes, pode, podemos, podeis, podem'
      }
    ],

    flashcards: [
      { q: 'Verbo de ação vs estado?',      a: 'Ação: correr, escrever. Estado: ser, estar, ficar.' },
      { q: 'Conjugue "estudar" no futuro?', a: 'Estudarei, estudarás, estudará, estudaremos, estudareis, estudarão.' },
      { q: '"Choveu muito" — tipo de verbo?', a: 'Verbo de fenômeno (impessoal — sem sujeito).' },
      { q: 'Pretérito imperfeito de "fazer"?', a: 'Fazia, fazias, fazia, fazíamos, fazíeis, faziam.' },
      { q: 'O que é modo imperativo?',      a: 'Expressa ordem, pedido ou conselho. Ex: Venha cá!' }
    ],

    mnemonics: [
      { trigger: 'Identificar verbo',      memory: '"Conjugue no passado: se funcionar → é verbo! (correr → corri ✅)"' },
      { trigger: 'Tempos do indicativo',   memory: '"Eu comi (perfeito), eu comia (imperfeito), eu comerei (futuro)."' }
    ],

    miniReview: [
      { q: '"Ser" no presente — 1ª pessoa plural?', a: 'Somos.' },
      { q: 'Imperativo afirmativo de "falar"?',     a: 'Fale! / Fala!' }
    ]
  },

  warmup: [
    {
      prompt: 'Qual palavra é um verbo na frase: "O atleta correu muito rápido"?',
      options: [
        { text: 'atleta',   correct: false },
        { text: 'correu',   correct: true  },
        { text: 'muito',    correct: false },
        { text: 'rápido',   correct: false }
      ],
      explanation: '"Correu" é verbo de ação — expressa a ação do atleta.'
    },
    {
      prompt: '"Neva bastante no sul do Brasil." O verbo "neva" é:',
      options: [
        { text: 'Verbo de ação',       correct: false },
        { text: 'Verbo de estado',     correct: false },
        { text: 'Verbo de fenômeno',   correct: true  },
        { text: 'Verbo de processo',   correct: false }
      ],
      explanation: '"Nevar" é verbo de fenômeno natural — impessoal, sem sujeito.'
    },
    {
      prompt: 'Conjugue "cantar" na 1ª pessoa do singular do futuro do presente:',
      options: [
        { text: 'Cantei',    correct: false },
        { text: 'Cantarei',  correct: true  },
        { text: 'Cantava',   correct: false },
        { text: 'Cante',     correct: false }
      ],
      explanation: '1ª pessoa singular, futuro do presente: "eu cantarei".'
    }
  ],

  guidedPractice: [
    {
      prompt: '🔍 DICA: Verbos irregulares sofrem alterações na raiz durante a conjugação.\n\n"Ir" no presente, 1ª pessoa singular, é:',
      options: [
        { text: 'Iro',  correct: false },
        { text: 'Vou',  correct: true  },
        { text: 'Vão',  correct: false },
        { text: 'Ia',   correct: false }
      ],
      explanation: '"Ir" é irregular: eu vou, tu vais, ele vai, nós vamos... A raiz muda completamente!'
    },
    {
      prompt: '🔍 DICA: Modo subjuntivo expressa possibilidade, hipótese ou desejo.\n\n"Se eu ___ mais cedo, chegaria a tempo." Qual forma é correta?',
      options: [
        { text: 'saio',    correct: false },
        { text: 'saísse',  correct: true  },
        { text: 'sairei',  correct: false },
        { text: 'saindo',  correct: false }
      ],
      explanation: '"Se" introduz o subjuntivo imperfeito: "se eu saísse" (hipótese no passado).'
    }
  ],

  questions: [
    {
      prompt: 'Quantos verbos há na frase: "Maria acordou cedo, tomou café e foi para a escola"?',
      options: [
        { text: '2', correct: false },
        { text: '3', correct: true  },
        { text: '4', correct: false },
        { text: '1', correct: false }
      ],
      explanation: '"Acordou", "tomou" e "foi" são os três verbos da frase.'
    },
    {
      prompt: '"Ter" no presente, 3ª pessoa plural, é:',
      options: [
        { text: 'Temos',  correct: false },
        { text: 'Têm',    correct: true  },
        { text: 'Tem',    correct: false },
        { text: 'Terão',  correct: false }
      ],
      explanation: '"Ter" é irregular. 3ª pessoa plural do presente: eles/elas têm (com acento diferencial).'
    },
    {
      prompt: 'Qual verbo é IRREGULAR?',
      options: [
        { text: 'Cantar',  correct: false },
        { text: 'Comer',   correct: false },
        { text: 'Partir',  correct: false },
        { text: 'Fazer',   correct: true  }
      ],
      explanation: '"Fazer" é irregular: faço, fazes, faz... A raiz sofre alterações na conjugação.'
    },
    {
      prompt: 'A frase "Estude todos os dias!" está no modo:',
      options: [
        { text: 'Indicativo',   correct: false },
        { text: 'Subjuntivo',   correct: false },
        { text: 'Imperativo',   correct: true  },
        { text: 'Infinitivo',   correct: false }
      ],
      explanation: '"Estude!" expressa ordem/conselho → modo imperativo.'
    },
    {
      prompt: '"Estudava" está no:',
      options: [
        { text: 'Presente do indicativo',              correct: false },
        { text: 'Pretérito perfeito do indicativo',    correct: false },
        { text: 'Pretérito imperfeito do indicativo',  correct: true  },
        { text: 'Futuro do presente',                  correct: false }
      ],
      explanation: 'Terminação -ava indica pretérito imperfeito do indicativo (ação contínua no passado).'
    },
    {
      prompt: 'Na frase "Ele parece cansado", o verbo é:',
      options: [
        { text: 'De ação',      correct: false },
        { text: 'De estado',    correct: true  },
        { text: 'De fenômeno',  correct: false },
        { text: 'Auxiliar',     correct: false }
      ],
      explanation: '"Parecer" é verbo de estado — conecta o sujeito a uma característica (cansado).'
    },
    {
      prompt: 'Conjugue "escrever" no pretérito perfeito, 1ª pessoa singular:',
      options: [
        { text: 'Escrevia',    correct: false },
        { text: 'Escreverei',  correct: false },
        { text: 'Escrevi',     correct: true  },
        { text: 'Escrevesse',  correct: false }
      ],
      explanation: '1ª pessoa singular, pretérito perfeito: "eu escrevi".'
    },
    {
      prompt: '"Ser" no presente, 3ª pessoa plural é:',
      options: [
        { text: 'Somos',  correct: false },
        { text: 'São',    correct: true  },
        { text: 'Sois',   correct: false },
        { text: 'Eram',   correct: false }
      ],
      explanation: '"Ser" é irregular: eu sou, tu és, ele é, nós somos, vós sois, eles são.'
    },
    {
      prompt: 'Qual é a 1ª conjugação verbal?',
      options: [
        { text: 'Verbos terminados em -er',  correct: false },
        { text: 'Verbos terminados em -ir',  correct: false },
        { text: 'Verbos terminados em -ar',  correct: true  },
        { text: 'Verbos irregulares',        correct: false }
      ],
      explanation: '1ª conjugação = terminação -ar (cantar, falar, estudar). 2ª = -er, 3ª = -ir.'
    },
    {
      prompt: 'Qual frase usa o subjuntivo presente corretamente?',
      options: [
        { text: 'Espero que ele veio.',      correct: false },
        { text: 'Espero que ele venha.',     correct: true  },
        { text: 'Espero que ele vem.',       correct: false },
        { text: 'Espero que ele viria.',     correct: false }
      ],
      explanation: 'Após "espero que", usa-se o subjuntivo presente: "venha" (forma irregular de vir).'
    }
  ],

  adaptiveReview: [
    {
      prompt: 'DIFÍCIL: Na frase "Quando eu chegar, te aviso", os verbos estão nos modos:',
      options: [
        { text: 'Ambos no indicativo',                  correct: false },
        { text: 'Subjuntivo futuro e indicativo',       correct: true  },
        { text: 'Indicativo e subjuntivo presente',     correct: false },
        { text: 'Ambos no subjuntivo',                  correct: false }
      ],
      explanation: '"Chegar" está no subjuntivo futuro (após "quando" para fato futuro). "Aviso" está no indicativo presente.'
    }
  ],

  rewards: { xp: 140, gems: 14, badge: '⚡ Conjugador Veloz' },
  completionMessage: '⚡ Os verbos obedecem às suas ordens — você domina a ação das frases!',
  nextStage: 'pt_s04'
};

window.PT_S03 = PT_S03;
