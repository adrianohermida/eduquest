/**
 * ESP DEPORTES STAGE 05 — Verbos Irregulares 3ª Conjugação
 * BNCC: EF07LE12, EF07LP07 | Tópico 9 — Unidad 3
 * sentir→siento (e→ie), pedir→pido (e→i), dormir→duerme (o→ue)
 * seguir/servir/morir — nosotros/vosotros SEMPRE regulares
 */

const ESP_DEP_S05 = {
  id: 'esp_dep_s05',
  title: 'Verbos Irregulares — 3ª Conj.',
  icon: '🔄',
  difficulty: 'medium',
  estimatedTime: 16,

  learningObjectives: [
    'Conjugar sentir, dormir, pedir no presente do indicativo',
    'Identificar os padrões e→ie, e→i e o→ue na 3ª conjugação',
    'Dominar seguir, servir e morir com seus padrões',
    'Confirmar que nosotros/vosotros NUNCA mudam o radical',
    'Usar verbos da 3ª conjugação em contexto esportivo'
  ],

  summary: {
    readTime: 5,
    content: [
      {
        icon: '💫',
        title: 'Padrão e→ie: SENTIR e outros',
        text: 'A 3ª conjugação (-IR) tem os mesmos padrões de mudança que a 2ª, mas com verbos diferentes:\n\n📚 SENTIR (sentir) — e→ie:\n• yo siento (sinto)\n• tú sientes (sentes)\n• él/ella siente (sente)\n• nosotros sentimos ✅ (sem mudança!)\n• vosotros sentís ✅ (sem mudança!)\n• ellos sienten (sentem)\n\n📚 PREFERIR (preferir) — e→ie:\n• yo prefiero\n• tú prefieres\n• él prefiere\n• nosotros preferimos ✅\n• vosotros preferís ✅\n• ellos prefieren\n\n📚 MENTIR (mentir) — e→ie:\n• yo miento | tú mientes | él miente\n• nosotros mentimos ✅ | vosotros mentís ✅\n• ellos mienten\n\n🔑 O padrão e→ie funciona IGUAL na 2ª e 3ª conjugações. A diferença: verbos da 2ª terminam em -ER (querer, entender); verbos da 3ª terminam em -IR (sentir, preferir, mentir).'
      },
      {
        icon: '⚡',
        title: 'Padrão e→i: PEDIR, SEGUIR, SERVIR',
        text: 'Esse padrão existe APENAS na 3ª conjugação (-IR):\n\n📚 PEDIR (pedir) — e→i:\n• yo pido (peço)\n• tú pides (pedes)\n• él/ella pide (pede)\n• nosotros pedimos ✅ (sem mudança!)\n• vosotros pedís ✅ (sem mudança!)\n• ellos piden (pedem)\n\n📚 SEGUIR (seguir) — e→i:\n• yo sigo ⚠️ (seguir perde o U antes de A/O)\n• tú sigues\n• él sigue\n• nosotros seguimos ✅\n• vosotros seguís ✅\n• ellos siguen\n\n📚 SERVIR (servir) — e→i:\n• yo sirvo (sirvo)\n• tú sirves | él sirve\n• nosotros servimos ✅ | vosotros servís ✅\n• ellos sirven\n\n🔑 e→i é EXCLUSIVO da 3ª conjugação. Na 2ª conjugação não existe este padrão. Verbos: pedir, seguir, servir, repetir, medir, vestir, elegir.'
      },
      {
        icon: '😴',
        title: 'Padrão o→ue: DORMIR e MORIR',
        text: 'O padrão o→ue na 3ª conjugação:\n\n📚 DORMIR (dormir) — o→ue:\n• yo duermo (durmo)\n• tú duermes (dormes)\n• él/ella duerme (dorme)\n• nosotros dormimos ✅ (sem mudança!)\n• vosotros dormís ✅ (sem mudança!)\n• ellos duermen (dormem)\n\n📚 MORIR (morrer) — o→ue:\n• yo muero (morro)\n• tú mueres | él muere\n• nosotros morimos ✅ | vosotros morís ✅\n• ellos mueren\n\n⚠️ Comparação com a 2ª conjugação:\n• PODER (2ª) = yo puedo, nosotros podemos\n• DORMIR (3ª) = yo duermo, nosotros dormimos\n→ Ambos seguem o→ue, exceto nosotros/vosotros!\n\n🔑 RESUMO GERAL dos 3 padrões da 3ª conjugação:\n• e→ie: sentir, preferir, mentir\n• e→i: pedir, seguir, servir, repetir, medir\n• o→ue: dormir, morir\n\nNOSOTROS/VOSOTROS: SEMPRE REGULARES em TODOS os padrões!'
      }
    ],

    flashcards: [
      { q: 'Conjuga SENTIR na 1ª pessoa singular',            a: 'yo SIENTO (e→ie). "Yo siento la emoción del gol."' },
      { q: 'Conjuga PEDIR na 3ª pessoa plural',               a: 'ellos PIDEN (e→i). Nosotros pedimos (regular).' },
      { q: 'Conjuga DORMIR na 3ª pessoa singular',            a: 'él/ella DUERME (o→ue). El atleta duerme 8 horas.' },
      { q: 'Qual padrão é EXCLUSIVO da 3ª conjugação?',       a: 'e→i (pedir, seguir, servir). Na 2ª conjugação não existe.' },
      { q: 'Nosotros de SENTIR = ?',                          a: 'nosotros SENTIMOS — sem mudança! Nunca "sientimos".' },
      { q: 'Nosotros de DORMIR = ?',                          a: 'nosotros DORMIMOS — sem mudança! Nunca "duermimos".' },
      { q: 'Conjuga SEGUIR na 1ª pessoa singular',            a: 'yo SIGO (e→i, perde U antes de A/O). "Yo sigo entrenando."' },
      { q: 'Conjuga MORIR na 1ª pessoa singular',             a: 'yo MUERO (o→ue). "Yo me muero de emoción." (expressão idiomática)' }
    ],

    mnemonics: [
      { trigger: 'e→ie em -IR verbs',       memory: '"SIENTO la vibração do IE: siENTo, prEfIEro, mIENto. Sinto o IE entrar!"' },
      { trigger: 'e→i em -IR verbs',        memory: '"PIDO PIza com I: pIDo, sIgo, sIrvo. O E vira I redondo e simples."' },
      { trigger: 'o→ue DORMIR',             memory: '"DUERMO = dUErmo: o O abre os lábios num UE. O atleta que DUERME descansa o UE da boca."' },
      { trigger: 'nosotros = sempre regular', memory: '"NÓS = NO mudamos = regular SEMPRE. sentimos, pedimos, dormimos = os originais, sem alteração."' },
      { trigger: 'e→i é só 3ª conjugação',  memory: '"Pedir = PEdir = só faz PEdido com I quem é da 3ª. A 2ª conjugação não pede nada com I!"' }
    ],

    miniReview: [
      { q: 'Qual a diferença entre e→ie (sentir) e e→i (pedir) na 3ª conjugação?',
        a: 'e→ie: o E se transforma em IE (dois sons): sentir→siento, preferir→prefiero. e→i: o E se transforma em I simples: pedir→pido, servir→sirvo. O padrão e→ie ocorre em ambas as conjugações (-ER e -IR); e→i é exclusivo de -IR.' },
      { q: 'Por que "nosotros preferimos" não é "nosotros preferimos" com IE?',
        a: 'Regra universal: nosotros/vosotros NUNCA mudam o radical em nenhum padrão de irregularidade. O acento tônico cai na desinência (-imos, -ís), não no radical. Logo: prefer-imos (não prefer-imos com ie). Sempre regular!' }
    ]
  },

  warmup: [
    {
      prompt: '"El atleta ___ muy bien después de los entrenamientos." (DORMIR, 3ª pessoa sing.)',
      options: [
        { text: 'dorma',    correct: false },
        { text: 'dormía',   correct: false },
        { text: 'duerme',   correct: true  },
        { text: 'dormimos', correct: false }
      ],
      explanation: '"Duerme" = 3ª pessoa singular de DORMIR (o→ue). "El atleta duerme" = O atleta dorme. Dormimos = nosotros (regular). Dormía = pretérito imperfeito (outro tempo verbal).'
    },
    {
      prompt: '"Nosotros ___ más tiempo de descanso." (PEDIR)',
      options: [
        { text: 'pidemos',  correct: false },
        { text: 'pedimos',  correct: true  },
        { text: 'piden',    correct: false },
        { text: 'pido',     correct: false }
      ],
      explanation: '"Nosotros pedimos" ✓ — nosotros NUNCA muda o radical. Pedimos (não "pidemos"). Piden = ellos. Pido = yo. Regra de ouro: nosotros/vosotros sempre preservam o radical original!'
    }
  ],

  guidedPractice: [
    {
      prompt: '🔍 DICA: SEGUIR tem mudança e→i E perde o U antes de A/O.\n\n"Yo ___ entrenando todos los días." (SEGUIR)',
      options: [
        { text: 'segugo',   correct: false },
        { text: 'sigo',     correct: true  },
        { text: 'siugo',    correct: false },
        { text: 'seguo',    correct: false }
      ],
      explanation: '"Yo sigo entrenando" ✓ — SEGUIR: e→i + perde U antes de O (segu-ir → sig-o). "Sigo" é a forma correta. "Segugo" não existe. O U em seguir/sigues aparece para manter o som G suave antes de E/I.'
    },
    {
      prompt: '🔍 DICA: SENTIR segue o padrão e→ie.\n\n"Los atletas ___ mucho orgullo cuando ganan." (SENTIR, 3ª pl.)',
      options: [
        { text: 'sentamos',  correct: false },
        { text: 'sientan',   correct: false },
        { text: 'sienten',   correct: true  },
        { text: 'sentemos',  correct: false }
      ],
      explanation: '"Ellos sienten" ✓ — 3ª pessoa plural de SENTIR (e→ie). "Los atletas sienten mucho orgullo" = Os atletas sentem muito orgulho. Forma plena "sientan" seria o subjuntivo. Sentamos = nosotros de SENTAR (outro verbo).'
    }
  ],

  questions: [
    {
      prompt: '"El árbitro ___ la decisión del entrenador." (PREFERIR, 3ª sing.)',
      options: [
        { text: 'prefiere',  correct: true  },
        { text: 'prefiere',  correct: true  },
        { text: 'prefera',   correct: false },
        { text: 'preferimos', correct: false }
      ],
      explanation: '"El árbitro prefiere" ✓ — PREFERIR: 3ª pessoa singular, e→ie (prefer→prefIERe). Preferimos = nosotros (regular). Prefera = não existe em espanhol.'
    },
    {
      prompt: '"Los futbolistas ___ muchas calorías durante el partido." (PEDIR ≈ precisar, neste contexto servir)',
      options: [
        { text: 'sirven',   correct: true  },
        { text: 'sirvan',   correct: false },
        { text: 'servimos', correct: false },
        { text: 'serve',    correct: false }
      ],
      explanation: '"Los futbolistas sirven" (SERVIR, e→i, 3ª plural) ✓. Neste contexto, "servir" = consumir/necessitar. Sirvan = subjuntivo. Servimos = nosotros (regular). "Serve" = forma portuguesa, não existe em espanhol!'
    },
    {
      prompt: '¿Cuál es la conjugación de MORIR para "yo"?',
      options: [
        { text: 'moro',     correct: false },
        { text: 'muero',    correct: true  },
        { text: 'morir',    correct: false },
        { text: 'muoro',    correct: false }
      ],
      explanation: '"Yo muero" ✓ — MORIR: o→ue (mor→mUEro). Expressão idiomática comum: "¡Me muero de emoción!" = Morro de emoção! (não literalmente). Moro = mouro (substantivo). Morir = infinitivo.'
    },
    {
      prompt: '"Vosotros ___ bien antes de cada partido?" (DORMIR)',
      options: [
        { text: 'dormís',    correct: true  },
        { text: 'dormáis',   correct: false },
        { text: 'duermís',   correct: false },
        { text: 'dormimos',  correct: false }
      ],
      explanation: '"¿Vosotros dormís bien?" ✓ — vosotros de DORMIR = dormÍS (sem mudança! Acento em -IS). Nunca "duermís". Dormáis = subjuntivo. Dormimos = nosotros. VOSOTROS preserva o radical original!'
    },
    {
      prompt: '"El coach ___ que los atletas ___ ocho horas." (PEDIR / DORMIR, 3ª sing. + 3ª plural)',
      options: [
        { text: 'pide / duermen',    correct: true  },
        { text: 'pede / dormem',     correct: false },
        { text: 'pide / dormem',     correct: false },
        { text: 'pede / duermen',    correct: false }
      ],
      explanation: '"El coach pide" (PEDIR, e→i, 3ª sing.) + "los atletas duerman" → "los atletas duermen" (DORMIR, o→ue, 3ª plural). "Pede" e "dormem" são formas portuguesas. Dupla conjugação em contexto esportivo!'
    },
    {
      prompt: '"Yo ___ la victoria." (SENTIR — no sentido de "sentir o sabor da vitória")',
      options: [
        { text: 'sente',   correct: false },
        { text: 'siento',  correct: true  },
        { text: 'sientmo', correct: false },
        { text: 'sentimo', correct: false }
      ],
      explanation: '"Yo siento la victoria" ✓ — SENTIR: e→ie (sient-o). "Siento" é forma extremamente comum: "siento mucho" (sinto muito, para pedir desculpas). "Sente" é português!'
    },
    {
      prompt: '¿Cuál de estos verbos NO sigue el padrão e→i?',
      options: [
        { text: 'pedir',   correct: false },
        { text: 'servir',  correct: false },
        { text: 'sentir',  correct: true  },
        { text: 'seguir',  correct: false }
      ],
      explanation: 'SENTIR segue e→IE (siento, sientes, siente), não e→i. Os verbos com e→i são: pedir, servir, seguir, repetir, medir, vestir. A diferença: e→ie (som mais "aberto") vs e→i (vogal simples).'
    },
    {
      prompt: '"Nosotros ___ el idioma español todos los días." (SEGUIR)',
      options: [
        { text: 'seguimos',  correct: true  },
        { text: 'sigamos',   correct: false },
        { text: 'seguemos',  correct: false },
        { text: 'sigos',     correct: false }
      ],
      explanation: '"Nosotros seguimos" ✓ — nosotros de SEGUIR = SEGUIMOS (regular, sem mudança e→i). "Seguimos aprendiendo el español" é uma frase motivacional perfeita! Sigamos = subjuntivo (outro modo).'
    },
    {
      prompt: 'Identifica a frase com DOIS verbos irregulares da 3ª conjugação corretos:',
      options: [
        { text: '"Los atletas sienten la presión y piden más tiempo"',        correct: true  },
        { text: '"Los atletas sientmos la presión y piden más tiempo"',       correct: false },
        { text: '"Los atletas sienten la presión y pedemos más tiempo"',      correct: false },
        { text: '"Los atletas sentemos la presión y pidemos más tiempo"',     correct: false }
      ],
      explanation: '"Sienten" (SENTIR, e→ie, 3ª plural ✓) + "piden" (PEDIR, e→i, 3ª plural ✓). Ambos corretos! Erros nas outras: "sientmos" não existe; "pedemos" = nosotros errado; "sentemos" (nosotros, mas irregular = errado) + "pidemos" não existe.'
    },
    {
      prompt: '"¿Vosotros ___ el español bien?" (PREFERIR)',
      options: [
        { text: 'preferís',  correct: true  },
        { text: 'preferéis', correct: false },
        { text: 'preferís',  correct: true  },
        { text: 'prefierís', correct: false }
      ],
      explanation: '"¿Vosotros preferís el español?" ✓ — vosotros de PREFERIR: prefer-ÍS (sem mudança, acento em -IS). Nunca "prefierís". A 3ª conjugação vosotros termina em -ÍS (não -ÉIS como na 2ª conjugação).'
    }
  ],

  adaptiveReview: [
    {
      prompt: 'DIFÍCIL: "El equipo sigue, sirve y siente la presión — pero nosotros seguimos, servimos y sentimos igual." Análise gramatical completa.',
      options: [
        { text: 'Há erros: "servimos" e "sentimos" deveriam ter mudanças de radical',                         correct: false },
        { text: 'Correto: sigue/sirve/siente (3ª sing. com mudança) vs seguimos/servimos/sentimos (nosotros, regular)', correct: true  },
        { text: 'Há um erro: "sentimos" deveria ser "sientimos"',                                             correct: false },
        { text: 'Há erros: "sigue" deveria ser "sigo" e "sirve" deveria ser "sirvo"',                        correct: false }
      ],
      explanation: 'Análise perfeita: "sigue" (e→i ✓, 3ª sing.), "sirve" (e→i ✓), "siente" (e→ie ✓) — todos com mudança. "Seguimos" (e→i, mas nosotros = regular ✓), "servimos" (regular ✓), "sentimos" (regular ✓). A frase demonstra MAGISTRALMENTE o contraste nosotros vs ellos!'
    },
    {
      prompt: 'DIFÍCIL: Por que o padrão e→i existe APENAS na 3ª conjugação (-IR) e nunca na 2ª (-ER)?',
      options: [
        { text: 'É convenção arbitrária da gramática espanhola sem explicação',                                                     correct: false },
        { text: 'Há razões históricas: em latim, verbos -IR de 3ª e 4ª conjugação latinas tinham vogal I no radical, que influenciou o radical das formas tônicas', correct: true  },
        { text: 'O espanhol criou e→i para distinguir 2ª e 3ª conjugações visualmente',                                             correct: false },
        { text: 'Verbos -ER também têm e→i, mas são muito raros',                                                                   correct: false }
      ],
      explanation: 'Razão histórica: verbos latinos da 3ª e 4ª conjugação (em -ĕrĕ e -īrĕ) com vogal I no radical original desenvolveram e→i no espanhol (pĕtĕre → pedir, pīdo). Verbos -ER espanhóis vêm de conjugações latinas diferentes, sem esse I radical. Linguística histórica explica o "porquê" das irregularidades!'
    }
  ],

  rewards: { xp: 150, gems: 15, badge: '🔄 Maestro de los Verbos IR' },
  completionMessage: '¡Increíble! Siento, pido, duermo, sigo — dominaste todos os verbos irregulares da 3ª conjugação! ¡Eres un campeón lingüístico!',
  nextStage: 'esp_dep_sboss'
};

window.ESP_DEP_S05 = ESP_DEP_S05;
