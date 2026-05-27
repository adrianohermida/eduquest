/**
 * ESP GASTRONOMIA STAGE 04 — Verbos Irregulares 2ª Conjugação
 * BNCC: EF07LE12, EF07LP07 | Tópico 4 — Unidad 2
 * querer→quiero, poder→puedo, tener→tengo, volver→vuelvo, entender→entiendo
 * Regra: nosotros/vosotros NUNCA mudam o radical
 */

const ESP_GAS_S04 = {
  id: 'esp_gas_s04',
  title: 'Verbos Irregulares — 2ª Conj.',
  icon: '🔄',
  difficulty: 'medium',
  estimatedTime: 15,

  learningObjectives: [
    'Conjugar querer, poder, tener no presente do indicativo',
    'Conjugar volver e entender com as mudanças corretas de radical',
    'Aplicar a regra nosotros/vosotros (raiz nunca muda)',
    'Identificar padrões e→ie e o→ue nas mudanças de radical',
    'Usar verbos irregulares em frases sobre comida e culinária'
  ],

  summary: {
    readTime: 5,
    content: [
      {
        icon: '🔄',
        title: 'Verbos com mudança e→ie',
        text: 'Em espanhol, muitos verbos mudam a vogal do radical na conjugação!\n\n📚 QUERER (querer / amar) — e→ie:\n• yo quiero (eu quero)\n• tú quieres (tu queres)\n• él/ella quiere (ele/ela quer)\n• nosotros queremos ✅ (nós queremos — SEM mudança!)\n• vosotros queréis ✅ (vocês — SEM mudança!)\n• ellos quieren (eles querem)\n\n📚 ENTENDER (entender) — e→ie:\n• yo entiendo\n• tú entiendes\n• él/ella entiende\n• nosotros entendemos ✅ (sem mudança!)\n• vosotros entendéis ✅\n• ellos entienden\n\n🎯 PADRÃO e→ie:\n• pensar → pienso, piensas, piensa... pensamos ✅\n• empezar → empiezo, empiezas, empieza... empezamos ✅\n• perder → pierdo, pierdes, pierde... perdemos ✅\n\n🔑 REGRA DE OURO: NOSOTROS e VOSOTROS NUNCA mudam o radical. É uma exceção fonológica — o acento tônico fica na desinência, não no radical!'
      },
      {
        icon: '💪',
        title: 'Verbos com mudança o→ue e irregular "tener"',
        text: 'Outro padrão importante:\n\n📚 PODER (poder) — o→ue:\n• yo puedo (eu posso)\n• tú puedes (tu podes)\n• él/ella puede (ele/ela pode)\n• nosotros podemos ✅ (sem mudança!)\n• vosotros podéis ✅\n• ellos pueden (eles podem)\n\n📚 VOLVER (voltar) — o→ue:\n• yo vuelvo (eu volto)\n• tú vuelves (tu voltas)\n• él/ella vuelve\n• nosotros volvemos ✅\n• vosotros volvéis ✅\n• ellos vuelven\n\n📚 TENER (ter) — irregular total na 1ª pessoa:\n• yo TENGO ⚠️ (irregular! não "tieno")\n• tú tienes\n• él/ella tiene\n• nosotros tenemos ✅\n• vosotros tenéis ✅\n• ellos tienen\n\n🔑 TENER é especial: yo TENGO (não "tieno"). É um dos verbos mais usados — memorize a forma TENGO!'
      },
      {
        icon: '🍴',
        title: 'Verbos irregulares no contexto gastronômico',
        text: 'Usando os verbos em situações reais de cozinha e alimentação:\n\n🍽️ QUERER em receitas:\n• ¿Qué quieres de postre? (O que você quer de sobremesa?)\n• Quiero un café con leche. (Quero um café com leite.)\n• El chef quiere más sal. (O chef quer mais sal.)\n\n🔥 PODER na cozinha:\n• ¿Puedes pasarme el cuchillo? (Você pode me passar a faca?)\n• No puedo comer gluten. (Não posso comer glúten.)\n• Podemos cocinar juntos. (Podemos cozinhar juntos.)\n\n🥘 TENER com comida:\n• Tengo hambre. (Estou com fome.) [mucha hambre!]\n• Tenemos muchos ingredientes. (Temos muitos ingredientes.)\n• ¿Tienes la receta? (Você tem a receita?)\n\n↩️ VOLVER:\n• Vuelvo a casa para almorzar. (Volto para casa para almoçar.)\n• ¿A qué hora vuelves? (A que horas você volta?)\n\n🔑 Dica de fluência: QUERER + infinitivo = querer fazer. "Quiero cocinar" = Quero cozinhar. "Puedo ayudar" = Posso ajudar.'
      }
    ],

    flashcards: [
      { q: 'Conjuga QUERER na 1ª pessoa singular.',         a: 'yo QUIERO (e→ie). Lembra: qUIERO = a mudança fica no radical.' },
      { q: 'Conjuga PODER na 1ª pessoa plural.',            a: 'nosotros PODEMOS — sem mudança! Nosotros nunca muda o radical.' },
      { q: 'Por que "yo tengo" e não "yo tieno"?',         a: 'TENER é irregular na 1ª pessoa: yo TENGO. Exceção que precisa ser memorizada.' },
      { q: 'Conjuga VOLVER na 3ª pessoa plural.',           a: 'ellos VUELVEN (o→ue). Mas nosotros volvemos (sem mudança).' },
      { q: 'Qual é a regra do nosotros/vosotros?',          a: 'Nunca mudam o radical. A irregularidade só ocorre nas outras pessoas.' },
      { q: 'ENTENDER — como se diz "eu entendo"?',         a: 'yo ENTIENDO (e→ie). La cocinera entiende la receta.' },
      { q: 'Qual é o padrão de QUERER e ENTENDER?',        a: 'e→ie: e do radical vira ie nas pessoas que carregam o acento tônico no radical.' },
      { q: 'Qual é o padrão de PODER e VOLVER?',           a: 'o→ue: o do radical vira ue (exceto nosotros/vosotros).' }
    ],

    mnemonics: [
      { trigger: 'QUIERO, PUEDO, TENGO',     memory: '"Eu QUIERO (quero), PUEDO (posso) e TENGO (tenho) comer! As três formas yo más importantes da cozinha."' },
      { trigger: 'Nosotros nunca muda',       memory: '"NÓS = NO mudamos. NOSOTROS = NORMAIS. Queremos, podemos, tenemos — sempre regular!"' },
      { trigger: 'e→ie padrão',               memory: '"E vira IE quando eu (yo) falo: quIEro, entIEndo, pIEnso. O I entra na vogal!"' },
      { trigger: 'o→ue padrão',               memory: '"O vira UE quando ouço: pUEdo, vUElvo, dUErmo. O U entra antes!"' },
      { trigger: 'TENGO irregular',           memory: '"TENGO! Não é \'tieno\'. Tengo é único. Assim como em inglês \'I have\' não é \'I haves\'. Memorize: TENGO."' }
    ],

    miniReview: [
      { q: 'Por que nosotros e vosotros não sofrem a mudança de radical?',
        a: 'Porque nessas formas o acento tônico recai na DESINÊNCIA (queremos, queréis), não no radical. A mudança e→ie e o→ue só ocorre quando o acento está no RADICAL (quIERo, pUEdo). É um processo de harmonização vocálica.' },
      { q: 'Como se formaria "yo tieno"? Por que está errado?',
        a: '"Tieno" seria a conjugação regular de tener (tener→tiene→tieno). Mas TENER é irregular na 1ª pessoa: a forma correta é TENGO (com -g- inserida). É um caso de irregularidade própria, não de alternância vocálica.' }
    ]
  },

  warmup: [
    {
      prompt: 'Completa: "Yo ___ comer paella esta noche." (QUERER)',
      options: [
        { text: 'quero',   correct: false },
        { text: 'quiero',  correct: true  },
        { text: 'quere',   correct: false },
        { text: 'quieras', correct: false }
      ],
      explanation: 'QUIERO = 1ª pessoa singular de QUERER (e→ie). "Yo quiero" é uma das formas mais usadas em espanhol. Não confunda com português "quero" — em espanhol é "quIEro" com IE!'
    },
    {
      prompt: 'Completa: "Nosotros ___ volver tarde." (PODER)',
      options: [
        { text: 'puedemos', correct: false },
        { text: 'podemos',  correct: true  },
        { text: 'puedimos', correct: false },
        { text: 'podramos', correct: false }
      ],
      explanation: 'PODEMOS = nosotros de PODER. Regra: nosotros NUNCA muda o radical. "Podemos" não tem UE — mantém o O original. "Puedemos" seria errado.'
    }
  ],

  guidedPractice: [
    {
      prompt: '🔍 DICA: TENER tem uma irregularidade especial na 1ª pessoa.\n\nCompleta: "Yo ___ mucha hambre después de la clase." (TENER)',
      options: [
        { text: 'tieno',  correct: false },
        { text: 'tiene',  correct: false },
        { text: 'tengo',  correct: true  },
        { text: 'tenemos', correct: false }
      ],
      explanation: 'TENGO = forma irregular de TENER na 1ª pessoa singular. Não segue o padrão e→ie ("tieno" seria o equívoco regular). TENGO é único e deve ser memorizado. "Yo tengo mucha hambre" = Estou com muita fome.'
    },
    {
      prompt: '🔍 DICA: Pensa no padrão o→ue para VOLVER.\n\n"El restaurante ___ a abrir mañana." (VOLVER, 3ª pessoa sing.)',
      options: [
        { text: 'volve',  correct: false },
        { text: 'vuelva', correct: false },
        { text: 'vuelve', correct: true  },
        { text: 'volvé',  correct: false }
      ],
      explanation: '"Vuelve" = 3ª pessoa singular de VOLVER (o→ue). "El restaurante vuelve a abrir" = O restaurante volta a abrir. Nosotros seria "volvemos" (sem mudança). Vuelva é subjuntivo — outra forma!'
    }
  ],

  questions: [
    {
      prompt: '"Ana y Pedro ___ entender la receta en español." (PODER)',
      options: [
        { text: 'pueden',  correct: true  },
        { text: 'puedes',  correct: false },
        { text: 'podemos', correct: false },
        { text: 'puede',   correct: false }
      ],
      explanation: '"Ana y Pedro" = ellos (3ª pessoa plural) → PUEDEN. Poder: yo puedo, tú puedes, él puede, nosotros podemos, vosotros podéis, ellos PUEDEN. O UE aparece em todas as pessoas exceto nosotros/vosotros.'
    },
    {
      prompt: 'Qual conjugação de QUERER está INCORRETA?',
      options: [
        { text: 'yo quiero',         correct: false },
        { text: 'nosotros queremos', correct: false },
        { text: 'ellos queremos',    correct: true  },
        { text: 'tú quieres',        correct: false }
      ],
      explanation: '"Ellos queremos" está ERRADO. "Queremos" é a forma de NOSOTROS. Para "ellos" é "QUIEREN". A confusão nosotros/ellos é um erro clássico!'
    },
    {
      prompt: '"¿___ tú la receta de la abuela?" Completa com TENER.',
      options: [
        { text: 'Tienes',  correct: true  },
        { text: 'Tiene',   correct: false },
        { text: 'Tengo',   correct: false },
        { text: 'Tienos',  correct: false }
      ],
      explanation: '"¿Tienes tú la receta?" = Você tem a receita? TENER: yo tengo, tú TIENES, él tiene. "Tú tienes" segue o padrão e→ie (tI-ENes). Só a 1ª pessoa (yo tengo) tem a irregularidade extra com -G-.'
    },
    {
      prompt: 'Un chef explica: "Vosotros ___ muchas opciones en el menú." (TENER)',
      options: [
        { text: 'tienéis', correct: false },
        { text: 'tenéis',  correct: true  },
        { text: 'tienen',  correct: false },
        { text: 'tenemos', correct: false }
      ],
      explanation: '"Vosotros tenéis" = vocês têm. Regra: vosotros NUNCA muda o radical → tenéis (não "tienéis"). A forma vosotros sempre preserva o radical original + acento na desinência.'
    },
    {
      prompt: '"Ellos ___ a casa muy tarde." Completa com VOLVER.',
      options: [
        { text: 'volvemos', correct: false },
        { text: 'vuelves',  correct: false },
        { text: 'vuelven',  correct: true  },
        { text: 'volven',   correct: false }
      ],
      explanation: '"Ellos vuelven" = eles voltam. VOLVER: yo vuelvo, tú vuelves, él vuelve, nosotros volvemos, vosotros volvéis, ellos VUELVEN. A mudança o→ue acontece em todas as pessoas exceto nosotros/vosotros.'
    },
    {
      prompt: '"Yo ___ comprar ingredientes frescos para la receta." (QUERER)',
      options: [
        { text: 'quero',   correct: false },
        { text: 'quieras', correct: false },
        { text: 'quiero',  correct: true  },
        { text: 'quermos', correct: false }
      ],
      explanation: '"Yo quiero comprar" = Quero comprar. QUERER + infinitivo = querer fazer algo. Esta construção é muito comum: "quiero comer", "quiero cocinar", "quiero entender". Quiero é a 1ª pessoa (e→ie).'
    },
    {
      prompt: '¿Cuál es la forma correcta de ENTENDER para "nosotros"?',
      options: [
        { text: 'nosotros entiendemos', correct: false },
        { text: 'nosotros entendemos',  correct: true  },
        { text: 'nosotros entendimos',  correct: false },
        { text: 'nosotros entiendimos', correct: false }
      ],
      explanation: '"Nosotros entendemos" = nós entendemos. REGRA DE OURO: nosotros NUNCA muda o radical. Entend-emos, não "entIENd-emos". A mudança e→ie só ocorre em yo/tú/él/ellos.'
    },
    {
      prompt: 'Identifica a frase CORRETA:',
      options: [
        { text: 'El cocinero pueden preparar paella',          correct: false },
        { text: 'Nosotros volvemos a las 15h para almorzar',   correct: true  },
        { text: 'Yo tiene mucha experiencia en la cocina',     correct: false },
        { text: 'Ellos quere aprender nuevas recetas',         correct: false }
      ],
      explanation: '"Nosotros volvemos" está correto — nosotros + VOLVER sem mudança de radical. Erros: "el cocinero pueden" (singular → puede); "yo tiene" (1ª pessoa → tengo); "ellos quere" (3ª plural → quieren).'
    },
    {
      prompt: 'Qual padrão de mudança de radical caracteriza PODER e VOLVER?',
      options: [
        { text: 'e → ie',  correct: false },
        { text: 'e → i',   correct: false },
        { text: 'o → ue',  correct: true  },
        { text: 'u → ue',  correct: false }
      ],
      explanation: 'PODER e VOLVER seguem o padrão O→UE: pod-er → pUEdo; volv-er → vUElvo. O padrão E→IE é de QUERER, ENTENDER, PENSAR, PERDER. São os dois padrões mais comuns de irregularidade vocálica na 2ª conjugação.'
    },
    {
      prompt: '"¿___ tú entender este menú en español?" Completa.',
      options: [
        { text: 'Puedes',  correct: true  },
        { text: 'Puedo',   correct: false },
        { text: 'Podemos', correct: false },
        { text: 'Pueden',  correct: false }
      ],
      explanation: '"¿Puedes tú entender?" = Você consegue entender? PODER: tú PUEDES (o→ue). Esta pergunta usa dois verbos irregulares: puedes (poder) + entender (que aqui é infinitivo, sem conjugação). Muito prática no cotidiano!'
    }
  ],

  adaptiveReview: [
    {
      prompt: 'DIFÍCIL: Por que a regra "nosotros/vosotros não mudam o radical" existe? Qual é a explicação fonológica?',
      options: [
        { text: 'É uma exceção arbitrária sem explicação linguística',                                         correct: false },
        { text: 'Nessas formas o acento tônico recai na DESINÊNCIA, não no radical, então a vogal radical não é pronunciada com força e não sofre ditongação', correct: true  },
        { text: 'Nosotros e vosotros são formas importadas do latim que ficaram "congeladas"',                 correct: false },
        { text: 'O espanhol simplificou essas formas para facilitar o aprendizado estrangeiro',                correct: false }
      ],
      explanation: 'A explicação é fonológica: em "quIEro" o acento tônico está no radical (QUIE-ro) → a vogal tônica sofre ditongação (e→ie). Em "querEmos" o acento está na desinência (que-RE-mos) → o radical "quer-" é átono e não sofre ditongação. É uma regra de ACENTO TÔNICO, não de forma verbal aleatória!'
    },
    {
      prompt: 'DIFÍCIL: Um estudante cria a frase: "Mis padres vuelven de España y yo volvemos a cocinar juntos." Qual erro cometeu?',
      options: [
        { text: 'Não há erro — a frase está correta',                                           correct: false },
        { text: '"Volvemos" deveria ser "vuelvo" — sujeito é "yo", não nosotros',               correct: true  },
        { text: '"Vuelven" deveria ser "volvén" — sem mudança para ellos',                      correct: false },
        { text: '"Volvemos" deveria ser "vuelven" — concordância com os pais',                  correct: false }
      ],
      explanation: '"Mis padres vuelven" ✓ (ellos, o→ue). "Yo volvemos" ✗ — "volvemos" é NOSOTROS, não yo. Para yo: "yo VUELVO". A confusão yo/nosotros é um erro frequente quando se usa volvemos de forma indevida. Correto: "yo vuelvo a cocinar juntos." (ou "volvemos a cocinar juntos" se o sujeito fosse nós + eles).'
    }
  ],

  rewards: { xp: 140, gems: 14, badge: '🔄 Conjugador Experto' },
  completionMessage: '¡Increíble! Dominaste os verbos irregulares da 2ª conjugação. Quiero, puedo, tengo, vuelvo — são teus agora!',
  nextStage: 'esp_gas_sboss'
};

window.ESP_GAS_S04 = ESP_GAS_S04;
