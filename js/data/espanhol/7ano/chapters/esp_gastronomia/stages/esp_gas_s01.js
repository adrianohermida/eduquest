/**
 * ESP GASTRONOMIA STAGE 01 — Comidas del Día
 * BNCC: EF07LE01, EF07LE04 | Tópico 1 — Unidad 2
 * Desayuno, almuerzo, merienda, cena — horarios e hábitos hispanos
 */

const ESP_GAS_S01 = {
  id: 'esp_gas_s01',
  title: 'Comidas del Día',
  icon: '☀️',
  difficulty: 'easy',
  estimatedTime: 12,

  learningObjectives: [
    'Nombrar las cuatro comidas del día en español',
    'Asociar cada comida con su horario típico en la cultura hispana',
    'Distinguir hábitos alimentarios de Brasil y países hispanohablantes',
    'Usar vocabulario básico de alimentos y bebidas',
    'Compreender textos curtos sobre rotinas alimentares em espanhol'
  ],

  summary: {
    readTime: 4,
    content: [
      {
        icon: '☀️',
        title: '¿Cuándo se come en el mundo hispano?',
        text: 'No todos comem na mesma hora!\n\nNo mundo hispano, há 4 refeições principais:\n\n• ☀️ DESAYUNO — Café da manhã. Entre 7h-9h.\n  Ligeiro: café, tostadas, fruta. O nome vem de DES + AYUNO = "fim do jejum".\n\n• 🍽️ ALMUERZO — Almoço. Entre 13h-15h.\n  É a refeição PRINCIPAL em países hispanos! Pode durar 1-2 horas.\n\n• 🥪 MERIENDA — Lanche da tarde. Entre 15h-17h.\n  Leve. Chocolate quente, bolachas ou fruta. Muito popular entre crianças.\n\n• 🌙 CENA — Jantar. Entre 20h-22h.\n  Mais tarde que no Brasil! Em Espanha, jantam às 21h ou mais tarde.\n\n🔑 Diferença-chave: no Brasil o almoço é a principal; na Espanha, também — mas a cena é muito mais tarde!'
      },
      {
        icon: '🍎',
        title: 'Vocabulário essencial das refeições',
        text: 'Palavras que você precisa saber:\n\n☀️ DESAYUNO:\n• café con leche — café com leite\n• tostadas — torradas\n• zumo de naranja — suco de laranja\n• cereales — cereais\n\n🍽️ ALMUERZO:\n• menú del día — prato do dia (prato completo + sobremesa)\n• primer plato — entrada / primeiro prato\n• segundo plato — prato principal\n• postre — sobremesa\n\n🥪 MERIENDA:\n• bocadillo — sanduíche de pão francês\n• galletas — biscoitos\n• batido — vitamina / milk-shake\n\n🌙 CENA:\n• sopa — sopa\n• ensalada — salada\n• fiambre — frios / embutidos\n\n🔑 "Merienda" parece "merenda" em português — mas em espanhol é só o lanche da tarde, não qualquer lanche!'
      },
      {
        icon: '🌮',
        title: 'Cultura gastronômica hispana — fatos curiosos',
        text: 'O que comer e quando varia muito entre países:\n\n🇲🇽 MÉXICO: o "almuerzo" pode ser diferente do "comida" (refeição das 14h). "Desayuno" leve; "comida" = principal.\n\n🇦🇷 ARGENTINA: churrasco (asado) = cultura nacional. "Mate" não é refeição — é hábito social constante.\n\n🇵🇪 PERU: gastronomia premiada mundialmente. Ceviche = prato nacional (limão, peixe, cebola, ají).\n  → RECETA básica: pescado + limón + cebolla + ají + sal + cilantro.\n\n🇪🇸 ESPANHA: "la siesta" depois do almuerzo (pausa de descanso). Jantar às 22h é normal!\n\n📊 Durante a pandemia:\n• +34% das famílias passaram a fazer desayuno juntos\n• Consumo de "merienda" aumentou entre crianças em casa\n\n🔑 Gastronomia hispana é diversa — mas todas as culturas valorizam a refeição como momento social, não só nutricional!'
      }
    ],

    flashcards: [
      { q: '¿Cómo se llama el desayuno en español?',          a: 'Desayuno — primeira refeição do dia. De DES + AYUNO (fim do jejum). 7h-9h.' },
      { q: '¿Qué significa "almuerzo"?',                       a: 'Almoço — refeição principal em países hispanos. 13h-15h. Pode durar 1-2h.' },
      { q: '¿Qué es la merienda?',                             a: 'Lanche da tarde (15h-17h). Leve: bolachas, chocolate, fruta.' },
      { q: '¿A qué hora se cena normalmente en España?',       a: 'Entre 20h-22h — muito mais tarde que no Brasil!' },
      { q: '¿Qué es el "bocadillo"?',                          a: 'Sanduíche de pão francês (baguete). Muito comum na merienda.' },
      { q: '¿Qué significa "zumo de naranja"?',                a: 'Suco de laranja.' },
      { q: '¿Qué es el "postre"?',                             a: 'Sobremesa — servida depois do segundo plato no almuerzo.' },
      { q: '¿De qué está hecho el ceviche peruano?',           a: 'Pescado + limón + cebolla + ají + sal + cilantro.' }
    ],

    mnemonics: [
      { trigger: 'Desayuno = fim do jejum',    memory: '"DES-AYUNO = DE + AYUNO" — como em "descanso" (parar de descansar), aqui é parar de jejuar. Fácil!' },
      { trigger: 'Ordem das refeições',        memory: 'D-A-M-C: "Damos Almoço Muito Cedo" → Desayuno / Almuerzo / Merienda / Cena.' },
      { trigger: 'Merienda ≠ merenda BR',      memory: '"Merienda" parece merenda mas é SÓ lanche da tarde. No Brasil merenda pode ser qualquer lanche; em ES é sempre à tarde (15h-17h).' },
      { trigger: 'Bocadillo = sanduíche',      memory: '"Bocadillo" vem de BOCA + DILLO (pequeñito) = "bocadinho". Sanduíche pequeno de baguete.' }
    ],

    miniReview: [
      { q: 'Por que o almuerzo é a refeição mais importante nos países hispanos?',
        a: 'É a maior refeição do dia, geralmente com primer plato, segundo plato e postre. Coincide com a pausa do trabalho (e "la siesta" em alguns países).' },
      { q: 'O que diferencia os horários de cena na Espanha dos horários no Brasil?',
        a: 'Na Espanha, janta-se entre 20h-22h (muito mais tarde). No Brasil, o jantar costuma ser às 18h-20h.' }
    ]
  },

  warmup: [
    {
      prompt: '¿Cuál es la primera comida del día en español?',
      options: [
        { text: 'La cena',      correct: false },
        { text: 'El almuerzo',  correct: false },
        { text: 'El desayuno',  correct: true  },
        { text: 'La merienda',  correct: false }
      ],
      explanation: 'DESAYUNO = café da manhã. Primera comida, que "rompe o ayuno" (jejum) da noite. Acontece entre 7h-9h na maioria dos países hispanos.'
    },
    {
      prompt: '¿A qué hora es normalmente la merienda?',
      options: [
        { text: 'A las 7:00 de la mañana',  correct: false },
        { text: 'A las 13:00',               correct: false },
        { text: 'Entre las 15h y las 17h',  correct: true  },
        { text: 'A las 22:00 de la noche',  correct: false }
      ],
      explanation: 'La merienda es entre las 15h y 17h — lanche leve da tarde. Muito popular entre crianças: bolachas, chocolate quente, fruta.'
    }
  ],

  guidedPractice: [
    {
      prompt: '🔍 DICA: Pense na etimologia — DES + AYUNO.\n\n¿Por qué el "desayuno" se llama así en español?',
      options: [
        { text: 'Porque se come "des-pacio" (devagar)',                correct: false },
        { text: 'Porque "ayuno" significa jejum e "des-" indica fim',  correct: true  },
        { text: 'Porque é a refeição dos "desayunadores" (madrugadores)', correct: false },
        { text: 'Porque se bebe "agua" (des=água em latim)',            correct: false }
      ],
      explanation: '"Desayuno" vem de DES- (prefixo de negação/reversão) + AYUNO (jejum). Literalmente "desfazer o jejum". Em português temos o mesmo conceito: "café da manhã" = começo do dia com café.'
    },
    {
      prompt: '🔍 DICA: No mundo hispano, a refeição principal é o almuerzo.\n\nUm estudante espanhol diz: "Voy a casa a almorzar." ¿Qué significa?',
      options: [
        { text: 'Vai lanchar no meio da tarde',                       correct: false },
        { text: 'Vai jantar em casa',                                 correct: false },
        { text: 'Vai almoçar em casa (refeição principal do dia)',    correct: true  },
        { text: 'Vai tomar o café da manhã em casa',                  correct: false }
      ],
      explanation: '"Almorzar" = almoçar. O almuerzo é a refeição principal na Espanha e em muitos países hispanos, geralmente entre 13h-15h, com vários pratos. "Voy a casa" = vou para casa.'
    }
  ],

  questions: [
    {
      prompt: 'Ana es española. Dice: "Tengo hambre, son las 16h y quiero merendar." ¿Qué va a hacer Ana?',
      options: [
        { text: 'Vai jantar cedo',                                    correct: false },
        { text: 'Vai tomar o café da manhã',                          correct: false },
        { text: 'Vai fazer o lanche da tarde',                        correct: true  },
        { text: 'Vai almoçar tarde',                                  correct: false }
      ],
      explanation: 'MERENDAR = fazer a merienda. Às 16h é o horário típico da merienda (15h-17h) — lanche leve da tarde espanhola. "Tengo hambre" = estou com fome.'
    },
    {
      prompt: '¿Cuál de estas afirmaciones sobre el almuerzo hispano es CORRECTA?',
      options: [
        { text: 'Es una comida rápida, generalmente un bocadillo',                              correct: false },
        { text: 'Es la refeição principal, puede incluir primer plato, segundo plato y postre', correct: true  },
        { text: 'Solo se toma en España, no en Latinoamérica',                                  correct: false },
        { text: 'Siempre se come entre las 11h y 12h',                                          correct: false }
      ],
      explanation: 'El almuerzo en el mundo hispano es la refeição principal. O "menú del día" inclui primer plato (entrada), segundo plato (principal) e postre (sobremesa). O horário é tipicamente 13h-15h.'
    },
    {
      prompt: 'El plato nacional del Perú, preparado con "pescado + limón + cebolla + ají", se llama:',
      options: [
        { text: 'Tortilla española',  correct: false },
        { text: 'Asado argentino',    correct: false },
        { text: 'Ceviche peruano',    correct: true  },
        { text: 'Tacos mexicanos',    correct: false }
      ],
      explanation: 'El CEVICHE peruano es famoso mundialmente: peixe cru marinado em limão (o ácido "coze" o peixe), com cebola, ají (pimenta), sal e coentro. O Peru tem gastronomia premiada internacionalmente.'
    },
    {
      prompt: 'Según los datos de la pandemia, ¿qué cambio ocurrió en los hábitos de desayuno?',
      options: [
        { text: 'Las familias comenzaron a saltarse el desayuno',             correct: false },
        { text: '34% más de familias pasaron a desayunar juntas en casa',    correct: true  },
        { text: 'El desayuno se trasladó a las 11h de la mañana',            correct: false },
        { text: 'El desayuno fue sustituido por la merienda',                correct: false }
      ],
      explanation: 'Com o confinamento durante a pandemia, +34% das famílias passaram a fazer o desayuno juntos. O isolamento transformou refeições em momentos de convivência familiar — un aspecto positivo do período difícil.'
    },
    {
      prompt: 'Un niño español recibe un "bocadillo de jamón" en la merienda. ¿Qué recibió?',
      options: [
        { text: 'Uma tigela de cereais com leite',                       correct: false },
        { text: 'Um sanduíche de pão francês com presunto',              correct: true  },
        { text: 'Um bolo de chocolate',                                  correct: false },
        { text: 'Uma sopa quente',                                       correct: false }
      ],
      explanation: 'BOCADILLO = sanduíche feito com baguete (pão francês). De jamón = de presunto. O bocadillo de jamón é um dos lanches mais típicos na Espanha, especialmente na merienda das crianças.'
    },
    {
      prompt: '¿Cuál es la diferencia entre "cena" en España y "jantar" en Brasil?',
      options: [
        { text: 'Son exactamente iguales en horario y composición',                       correct: false },
        { text: 'En España la cena es entre 20h-22h; en Brasil el jantar es más temprano', correct: true  },
        { text: 'En España no existe la cena — solo el almuerzo',                          correct: false },
        { text: 'En España la cena es la refeição principal, más grande que el almuerzo',  correct: false }
      ],
      explanation: 'La diferencia horária é grande: Espanha janta entre 20h-22h (às vezes 23h!). No Brasil jantamos entre 18h-20h. Isso reflete estilos de vida diferentes: siesta após almuerzo + tarde mais longa = cena muito mais tarde.'
    },
    {
      prompt: '¿Qué significa "zumo de naranja" en el contexto del desayuno?',
      options: [
        { text: 'Chá de laranja',    correct: false },
        { text: 'Suco de laranja',   correct: true  },
        { text: 'Sorvete de laranja', correct: false },
        { text: 'Vitamina de banana', correct: false }
      ],
      explanation: '"Zumo" = suco (na Espanha). Na América Latina usa-se mais "jugo". "Naranja" = laranja. "Zumo de naranja" é um clássico do desayuno espanhol, geralmente natural e espremido na hora.'
    },
    {
      prompt: 'María dice: "En Argentina, el mate no es una comida". ¿Qué quiere decir?',
      options: [
        { text: 'O mate é proibido na Argentina',                                         correct: false },
        { text: 'O mate é uma bebida social, não uma refeição, mas está presente todo o tempo', correct: true  },
        { text: 'O mate só é tomado no desayuno argentino',                               correct: false },
        { text: 'O mate substituiu o almuerzo na Argentina moderna',                      correct: false }
      ],
      explanation: 'O MATE na Argentina é um hábito social constante — bebido em rodas, no trabalho, em casa. Não é uma refeição, mas é parte central da cultura: compartilhar o mate significa amizade e pertencimento.'
    },
    {
      prompt: 'Un menú del día en España suele tener:',
      options: [
        { text: 'Apenas un plato principal',                                      correct: false },
        { text: 'Primer plato + segundo plato + postre (+ bebida e pan)',         correct: true  },
        { text: 'Solo postre y bebida',                                           correct: false },
        { text: 'Desayuno + almuerzo juntos',                                     correct: false }
      ],
      explanation: 'El MENÚ DEL DÍA é um prato do dia completo muito comum em restaurantes espanhóis ao almoço: primer plato (sopa/salada/entrada) + segundo plato (carne/peixe) + postre (sobremesa) + bebida + pão. Geralmente tem um preço fixo acessível.'
    },
    {
      prompt: 'En el mundo hispano, ¿qué refeição es considerada la más importante del día?',
      options: [
        { text: 'El desayuno',   correct: false },
        { text: 'La merienda',  correct: false },
        { text: 'El almuerzo',  correct: true  },
        { text: 'La cena',      correct: false }
      ],
      explanation: 'El ALMUERZO es la refeição principal na cultura hispana — o equivalente ao "grande almoço" brasileiro, mas ainda mais valorizado. Em muitos países, as pessoas voltam para casa almoçar. Em contraste, a cena é mais leve e tardia.'
    }
  ],

  adaptiveReview: [
    {
      prompt: 'DIFÍCIL: Un nutricionista compara dietas: "No mundo hispano, o jantar leve e tardio pode ser mais saudável que o jantar pesado e cedo do Brasil." Qual argumento APOIA essa ideia?',
      options: [
        { text: 'Comer tarde à noite acelera o metabolismo durante o sono',                           correct: false },
        { text: 'Cena leve + digestão mais longa antes de dormir = menor acúmulo de gordura',         correct: true  },
        { text: 'Pular o almuerzo e cear pesado é o padrão saudável recomendado',                     correct: false },
        { text: 'A hora da refeição não tem nenhuma influência na saúde',                             correct: false }
      ],
      explanation: 'Cena leve (ensalada, sopa, fiambre) com jantar mais tarde pode dar mais tempo de digestão antes de dormir. O argumento nutricional é que refeições pesadas perto do sono aumentam o acúmulo calórico. No entanto, o mais importante é o equilíbrio total diário, não apenas o horário.'
    },
    {
      prompt: 'DIFÍCIL: Por que a merienda é considerada pedagogicamente importante para crianças em países hispanos?',
      options: [
        { text: 'Porque substitui o almuerzo para crianças pequenas',                                 correct: false },
        { text: 'Porque preenche o intervalo longo entre almuerzo e cena (até 8 horas), mantendo energia e concentração', correct: true  },
        { text: 'Porque é exigida por lei nas escolas espanholas desde 1970',                          correct: false },
        { text: 'Porque o cérebro infantil só absorve nutrientes à tarde',                            correct: false }
      ],
      explanation: 'Com almuerzo às 14h e cena às 21h, há 7-8 horas de intervalo. A merienda às 16h-17h é essencial para manter glicemia e foco das crianças — especialmente após a escola. É por isso que é tão culturalmente arraigada nos países hispanos.'
    }
  ],

  rewards: { xp: 110, gems: 11, badge: '☀️ Gourmand del Día' },
  completionMessage: '¡Muy bien! Agora você sabe quando e o que comer em espanhol. ¡Hasta el próximo plato!',
  nextStage: 'esp_gas_s02'
};

window.ESP_GAS_S01 = ESP_GAS_S01;
