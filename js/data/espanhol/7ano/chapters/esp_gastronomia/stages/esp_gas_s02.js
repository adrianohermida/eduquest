/**
 * ESP GASTRONOMIA STAGE 02 — Vocabulario Gastronómico
 * BNCC: EF07LE04, EF07LE06 | Tópico 2 — Unidad 2
 * Utensilios, pesos/medidas, objetos de mesa, MUY vs MUCHO
 */

const ESP_GAS_S02 = {
  id: 'esp_gas_s02',
  title: 'Vocabulario Gastronómico',
  icon: '🍳',
  difficulty: 'easy',
  estimatedTime: 13,

  learningObjectives: [
    'Reconhecer utensílios de cozinha em espanhol',
    'Usar corretamente MUY (+ adjetivo/advérbio) e MUCHO (+ substantivo/verbo)',
    'Identificar objetos de mesa e medidas de peso/volume',
    'Aplicar a regra PAMM para comparativos especiais',
    'Compreender receitas simples em espanhol'
  ],

  summary: {
    readTime: 4,
    content: [
      {
        icon: '🍳',
        title: 'Utensílios e objetos da cozinha',
        text: 'Vocabulário da cozinha em espanhol:\n\n🔪 UTENSILIOS (utensílios):\n• cuchillo — faca\n• tenedor — garfo\n• cuchara — colher\n• sartén — frigideira\n• olla / cacerola — panela\n• colador — coador/peneira\n• rallador — ralador\n• batidora — batedeira\n• horno — forno\n• nevera / heladera — geladeira\n\n⚖️ PESOS E MEDIDAS:\n• gramo (g) — grama\n• kilogramo (kg) — quilograma\n• litro (l) — litro\n• cucharada — colherada\n• taza — xícara / copo\n• pizca — pitada\n\n🍽️ OBJETOS DE MESA:\n• mantel — toalha de mesa\n• servilleta — guardanapo\n• vaso — copo\n• copa — taça\n• plato hondo — prato fundo\n• plato llano — prato raso\n\n🔑 "Nevera" = Espanha | "Heladera" = Argentina | "Refrigerador" = México. Mesma coisa, nomes diferentes!'
      },
      {
        icon: '⚡',
        title: 'MUY vs. MUCHO — a regra mais importante',
        text: 'Confundir MUY e MUCHO é o erro mais comum!\n\nREGRA SIMPLES:\n• MUY + ADJETIVO ou ADVÉRBIO (invariável)\n  → La sopa está MUY caliente. (A sopa está muito quente.)\n  → Cocina MUY bien. (Cozinha muito bem.)\n\n• MUCHO + SUSTANTIVO (concorda em gênero e número)\n  → Tiene MUCHA hambre. (Tem muita fome.) → femenino\n  → Hay MUCHOS ingredientes. (Há muitos ingredientes.) → masculino plural\n  → Como MUCHO. (Como muito.) → antes de verbo = MUCHO invariável\n\n🚫 ERROS COMUNS:\n  ✗ La sopa está MUCHO caliente.\n  ✓ La sopa está MUY caliente.\n\n  ✗ Tengo MUY hambre.\n  ✓ Tengo MUCHA hambre.\n\n🔑 DICA: Se pode substituir por "bastante" = MUY. Se pode substituir por "bastante/a/os/as" = MUCHO.'
      },
      {
        icon: '📏',
        title: 'PAMM — os comparativos especiais',
        text: 'Existe uma lista VIP de comparativos que MUCHO acompanha (não "muy"):\n\nMUCHO + comparativo especial:\n• MUCHO mejor — muito melhor\n• MUCHO peor — muito pior\n• MUCHO mayor — muito maior/mais velho\n• MUCHO menor — muito menor/mais novo\n• MUCHO más — muito mais\n• MUCHO menos — muito menos\n• MUCHO antes — muito antes\n• MUCHO después — muito depois\n\n🎯 Regra PAMM: se é um comparativo irregular (mejor/peor/mayor/menor) ou de quantidade (más/menos) ou de tempo (antes/después) → sempre MUCHO!\n\n🚫 ERROS GRAVES:\n  ✗ MUY mejor → SEMPRE: MUCHO mejor\n  ✗ MUY más → SEMPRE: MUCHO más\n\n🔑 Mnemônico PAMM:\n"Que come MUCHO e fica MUCHO mejor?"\nO PAMM: Peor-Antes-Mayor/Menor-Más/Menos/Mejor/Después'
      }
    ],

    flashcards: [
      { q: '¿Cómo se dice "frigideira" en español?',               a: '"Sartén" — utensílio de cozinha para fritar.' },
      { q: '¿Qué significa "rallador"?',                            a: 'Ralador — utensílio para ralar queijo, cenoura, etc.' },
      { q: 'MUY + ___ | MUCHO + ___',                              a: 'MUY + adjetivo/advérbio | MUCHO + substantivo/verbo.' },
      { q: '¿Cómo se dice "guardanapo" en español?',               a: '"Servilleta" — objeto de mesa.' },
      { q: '¿Qué es "una pizca de sal"?',                          a: 'Uma pitada de sal — menor medida de volume em receitas.' },
      { q: '"La cocina está MUY/MUCHA limpia." ¿Cuál es correcto?', a: '"MUY limpia" — MUY antes de adjetivo (limpia).' },
      { q: '¿Qué é "MUCHO mejor"?',                                a: 'Muito melhor — PAMM: comparativos especiais usam MUCHO, nunca MUY.' },
      { q: '¿Cómo se dice "geladeira" en español?',               a: '"Nevera" (Espanha) ou "heladera" (Argentina) ou "refrigerador" (México).' },
      { q: '¿Cuántos gramos tiene un kilogramo?',                  a: '1000 gramos = 1 kilogramo. Mesmas medidas que no sistema métrico.' },
      { q: '¿Qué diferencia hay entre "vaso" y "copa"?',           a: '"Vaso" = copo simples. "Copa" = taça (para vinho, champanhe).' }
    ],

    mnemonics: [
      { trigger: 'MUY vs MUCHO',        memory: '"MUY = MUITO + adjetivo que NÃO muda: muy caliente, muy bien. MUCHO = MUITO que concorda: mucha agua, muchos platos."' },
      { trigger: 'PAMM comparativos',   memory: '"PAMM = Pior-Antes-Maior/Menor-Mais/Menos/Melhor/Depois. Todos usam MUCHO, nunca MUY!"' },
      { trigger: 'Sartén/Olla',         memory: '"SARTÉN = Frigideira (SAI)rtão — bate o nome! OLLA = pOLhA bate com PANELA... O = aberto, como panela funda!"' },
      { trigger: 'Nevera vs heladera',  memory: '"NEVera = NEVe (Espanha, mais frio) | HELadera = GELO/HELo (Argentina)." Ambas = geladeira!' }
    ],

    miniReview: [
      { q: 'Por que "Tengo muy hambre" está errado?',
        a: '"Hambre" é substantivo feminino. Deve-se usar MUCHO concordando com o substantivo: "Tengo MUCHA hambre." MUY só acompanha adjetivos e advérbios.' },
      { q: 'Por que "está muy mejor" está errado?',
        a: '"Mejor" é comparativo irregular. A regra PAMM diz que comparativos especiais usam MUCHO, não MUY. Correto: "está MUCHO mejor."' }
    ]
  },

  warmup: [
    {
      prompt: 'Escolha a opção correta:\n"La paella está ___ deliciosa."',
      options: [
        { text: 'mucho',  correct: false },
        { text: 'muy',    correct: true  },
        { text: 'mucha',  correct: false },
        { text: 'muchos', correct: false }
      ],
      explanation: '"Deliciosa" é adjetivo → usa-se MUY. "La paella está MUY deliciosa." MUY é invariável antes de adjetivos e advérbios.'
    },
    {
      prompt: '¿Cómo se dice "colher" en español?',
      options: [
        { text: 'tenedor', correct: false },
        { text: 'cuchillo', correct: false },
        { text: 'cuchara',  correct: true  },
        { text: 'sartén',   correct: false }
      ],
      explanation: 'CUCHARA = colher. Os três talheres: cuchillo (faca), tenedor (garfo), cuchara (colher). Dica: cuchara soa como "co-chara" → colher!'
    }
  ],

  guidedPractice: [
    {
      prompt: '🔍 DICA: Lembre da regra PAMM.\n\nCompleta: "Este restaurante es ___ mejor que el anterior."',
      options: [
        { text: 'muy',    correct: false },
        { text: 'mucha',  correct: false },
        { text: 'mucho',  correct: true  },
        { text: 'muchos', correct: false }
      ],
      explanation: '"Mejor" é comparativo irregular → regra PAMM → usa MUCHO. "Este restaurante es MUCHO mejor que el anterior." Nunca "muy mejor" — é um erro grave!'
    },
    {
      prompt: '🔍 DICA: "Aceite" é substantivo masculino.\n\nCompleta: "Esta receta lleva ___ aceite."',
      options: [
        { text: 'muy',    correct: false },
        { text: 'mucho',  correct: true  },
        { text: 'mucha',  correct: false },
        { text: 'muchas', correct: false }
      ],
      explanation: '"Aceite" é substantivo masculino → MUCHO concorda em gênero: MUCHO aceite. MUCHO + substantivo sempre concorda. Se fosse feminino: "MUCHA harina" (muita farinha).'
    }
  ],

  questions: [
    {
      prompt: '"Necesito ___ harina para el bizcocho." Completa correctamente.',
      options: [
        { text: 'muy',    correct: false },
        { text: 'mucho',  correct: false },
        { text: 'mucha',  correct: true  },
        { text: 'muchos', correct: false }
      ],
      explanation: '"Harina" (farinha) é substantivo FEMININO SINGULAR → MUCHA harina. MUCHO concorda com o substantivo que acompanha: mucho/mucha/muchos/muchas.'
    },
    {
      prompt: 'Identifica el utensilio correcto: sirve para "mezclar ingredientes líquidos rápidamente".',
      options: [
        { text: 'el colador',   correct: false },
        { text: 'la batidora',  correct: true  },
        { text: 'el rallador',  correct: false },
        { text: 'la sartén',    correct: false }
      ],
      explanation: 'La BATIDORA (batedeira) mistura ingredientes líquidos rapidamente. Colador = coador/peneira. Rallador = ralador. Sartén = frigideira. Cada utensílio tem uma função específica na cozinha.'
    },
    {
      prompt: '"Este chef cocina ___ bien." ¿Qué opción completa correctamente?',
      options: [
        { text: 'mucho', correct: false },
        { text: 'mucha', correct: false },
        { text: 'muy',   correct: true  },
        { text: 'mucha', correct: false }
      ],
      explanation: '"Bien" é ADVÉRBIO → usa-se MUY. "Cocina MUY bien." MUY + advérbio (bien, mal, tarde, rápido). Não pode ser MUCHO porque MUCHO antes de verbo significa "muito" em quantidade: "como mucho" = como muito.'
    },
    {
      prompt: 'Un cocinero dice: "La sopa está mucho peor hoy." ¿Esta frase es correcta?',
      options: [
        { text: 'No, debe ser "muy peor"',         correct: false },
        { text: 'Sí, "mucho peor" es correcto',    correct: true  },
        { text: 'No, debe ser "muy malo"',          correct: false },
        { text: 'No, debe ser "mucha peor"',        correct: false }
      ],
      explanation: '"Peor" é comparativo irregular → regra PAMM → MUCHO peor. "La sopa está MUCHO peor hoy" é CORRETO. MUY peor seria o erro (MUY não acompanha comparativos irregulares).'
    },
    {
      prompt: '¿Qué objeto de mesa se usa para "limpiar la boca después de comer"?',
      options: [
        { text: 'el mantel',     correct: false },
        { text: 'la servilleta', correct: true  },
        { text: 'la copa',       correct: false },
        { text: 'el plato llano', correct: false }
      ],
      explanation: 'La SERVILLETA = guardanapo — usado para limpar a boca e as mãos. Mantel = toalha de mesa. Copa = taça. Plato llano = prato raso. Servilleta vem de SERVIR → objeto que serve para limpar.'
    },
    {
      prompt: 'En Argentina dicen "heladera"; en España dicen "nevera". Ambas palabras significan:',
      options: [
        { text: 'freezer / congelador', correct: false },
        { text: 'forno de microondas',  correct: false },
        { text: 'geladeira / frigorífico', correct: true  },
        { text: 'máquina de lavar louça', correct: false }
      ],
      explanation: 'HELADERA (Argentina) e NEVERA (Espanha) = geladeira / frigorífico. Vêm respectivamente de HIELO (gelo) e NIEVE (neve) — ambas referências ao frio. Na América Central e México usam "refrigerador".'
    },
    {
      prompt: 'Elige la oración INCORRECTA:',
      options: [
        { text: 'La tortilla española está muy rica',        correct: false },
        { text: 'Hay muchos ingredientes en la receta',      correct: false },
        { text: 'Este restaurante es muy mejor que ese',     correct: true  },
        { text: 'Como mucho en el almuerzo',                 correct: false }
      ],
      explanation: '"Muy mejor" é ERRADO. "Mejor" é comparativo irregular → regra PAMM → deve ser MUCHO mejor. As outras frases estão corretas: muy rica (adjetivo), muchos ingredientes (MUCHO + substantivo plural masc.), como mucho (MUCHO antes de verbo).'
    },
    {
      prompt: '"Una ___ de sal" — qual medida completa a expressão em uma receita?',
      options: [
        { text: 'kilo',       correct: false },
        { text: 'litro',      correct: false },
        { text: 'pizca',      correct: true  },
        { text: 'cucharada',  correct: false }
      ],
      explanation: 'Una PIZCA de sal = uma pitada de sal — a menor medida usada em receitas. Kilo = 1000g. Litro = medida de volume. Cucharada = colherada. Em receitas hispanas, "una pizca" significa a mínima quantidade que se pega com dois dedos.'
    },
    {
      prompt: '"Voy a usar el horno para asar el pollo." ¿Qué aparelho está sendo usado?',
      options: [
        { text: 'A frigideira',           correct: false },
        { text: 'O forno',                correct: true  },
        { text: 'A batedeira',            correct: false },
        { text: 'A geladeira',            correct: false }
      ],
      explanation: 'HORNO = forno. "Asar" = assar/tostar. "Asar el pollo en el horno" = assar o frango no forno. Sartén = frigideira. Batidora = batedeira. Nevera = geladeira.'
    },
    {
      prompt: 'Completa: "Ana tiene ___ hambre después del entrenamiento."',
      options: [
        { text: 'muy',   correct: false },
        { text: 'mucho', correct: false },
        { text: 'mucha', correct: true  },
        { text: 'muchos', correct: false }
      ],
      explanation: '"Hambre" (fome) é substantivo FEMININO → MUCHA hambre. Importante: "hambre" parece masculino (termina em e) mas é feminino → "la hambre" → MUCHA. É uma das exceções do espanhol: substantivos femininos que começam com sílaba tônica usam "el/un" no singular mas são femininos.'
    }
  ],

  adaptiveReview: [
    {
      prompt: 'DIFÍCIL: Explica por qué "Tengo muy hambre" es doble error gramatical.',
      options: [
        { text: 'Só está errada a concordância de género',                                                 correct: false },
        { text: '"Hambre" é substantivo (requer MUCHO) e MUCHO deve concordar em gênero feminino (MUCHA)', correct: true  },
        { text: 'O erro é usar "tengo" em vez de "estoy"',                                                 correct: false },
        { text: 'Não há erro — a frase está correta',                                                      correct: false }
      ],
      explanation: 'Duplo erro: (1) MUY só acompanha adjetivos/advérbios, não substantivos → precisa MUCHO; (2) "Hambre" é feminino → MUCHO concorda: MUCHA. Logo: "Tengo MUCHA hambre." Este é o tipo de pergunta que aparece no vestibular de línguas!'
    },
    {
      prompt: 'DIFÍCIL: "Como mucho mejor desde que cambié de dieta." Esta frase tem quantos usos gramaticais corretos de MUY/MUCHO?',
      options: [
        { text: 'Zero — ambas as formas estão erradas',                                           correct: false },
        { text: 'Um (apenas "mucho" antes do verbo "como" está correto)',                         correct: false },
        { text: 'Dois — "mucho" (advérbio de modo antes de verbo) + "mucho mejor" (PAMM correto)', correct: true  },
        { text: 'Apenas "mejor" é correto; "mucho" está errado',                                  correct: false }
      ],
      explanation: '"Como mucho" = advérbio de quantidade antes de verbo (correto). "Mucho mejor" = PAMM, comparativo irregular (correto). São DOIS usos corretos na mesma frase. "Muy" seria errado nos dois contextos aqui — não há adjetivo/advérbio simples nessa frase.'
    }
  ],

  rewards: { xp: 120, gems: 12, badge: '🍳 Chef del Vocabulario' },
  completionMessage: '¡Excelente! Agora você domina a cozinha em espanhol e nunca mais confundirá MUY com MUCHO!',
  nextStage: 'esp_gas_s03'
};

window.ESP_GAS_S02 = ESP_GAS_S02;
