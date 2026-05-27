/**
 * ESP GASTRONOMIA BOSS — El Gran Chef
 * BNCC: EF07LE01, EF07LE04, EF07LE06, EF07LE12, EF07LP07 | Unidad 2
 * Boss challenge: integração de todos os tópicos 1-4 da Unidad 2
 */

const ESP_GAS_SBOSS = {
  id: 'esp_gas_sboss',
  title: 'El Gran Chef',
  icon: '👨‍🍳',
  difficulty: 'hard',
  estimatedTime: 18,
  isBoss: true,

  learningObjectives: [
    'Integrar vocabulário gastronômico com gramática',
    'Aplicar MUY/MUCHO em contextos complexos de receitas',
    'Conjugar verbos irregulares em diálogos culinários',
    'Dominar ortografia M/N em textos gastronômicos',
    'Demonstrar domínio completo da Unidad 2'
  ],

  summary: {
    readTime: 3,
    content: [
      {
        icon: '👨‍🍳',
        title: '¡El Gran Chef te desafía!',
        text: 'Chegaste à cozinha do Grande Chef!\n\nO chef é um mestre que domina TUDO:\n• 🗓️ As refeições do dia e seus horários\n• 🔪 Todos os utensílios e vocabulário gastronômico\n• ✏️ Ortografia perfeita — M antes de P/B, latinismos\n• ⚡ MUY vs MUCHO — nunca erra!\n• 🔄 Verbos irregulares — querer, poder, tener, volver\n\nNeste desafio, você vai responder perguntas que MISTURAM todos os tópicos.\nO chef quer ver se você realmente aprendeu ou apenas decorou!\n\n🏆 Dica do chef: leia as perguntas com calma. Muitas têm dois aspectos para checar: vocabulário E gramática ao mesmo tempo.\n\n¡Buena suerte, aprendiz de chef!'
      },
      {
        icon: '⚡',
        title: 'Revisão expressa — os 4 pilares',
        text: 'Relembra os conceitos-chave antes da batalha:\n\n1️⃣ COMIDAS DEL DÍA:\n   Desayuno (7h-9h) → Almuerzo (13h-15h) → Merienda (15h-17h) → Cena (20h-22h)\n\n2️⃣ MUY vs MUCHO:\n   • MUY + adjetivo/advérbio (invariável)\n   • MUCHO + substantivo (concorda) / antes de verbo (invariável)\n   • PAMM: mejor/peor/mayor/menor/más/menos/antes/después → sempre MUCHO\n\n3️⃣ ORTOGRAFIA M/N:\n   • M antes de P e B: campo, también, hombre, siempre\n   • N antes das demais consoantes\n   • N antes de V: invierno, enviar\n   • Latinismos -m: álbum, réquiem\n\n4️⃣ VERBOS IRREGULARES 2ª CONJ:\n   • e→ie: querer(quiero), entender(entiendo), pensar(pienso)\n   • o→ue: poder(puedo), volver(vuelvo)\n   • TENGO (irregular especial)\n   • NOSOTROS/VOSOTROS nunca mudam o radical'
      }
    ],

    flashcards: [
      { q: 'Ordem correta das 4 refeições em horário',              a: 'Desayuno → Almuerzo → Merienda → Cena (7h, 14h, 16h, 21h aprox.)' },
      { q: '"La paella está ___ deliciosa." MUY ou MUCHO?',        a: 'MUY — deliciosa é adjetivo. La paella está MUY deliciosa.' },
      { q: 'M antes de P: 3 exemplos',                              a: 'campo, siempre, empezar (M antes de P em todas).' },
      { q: 'TENER — forma yo + forma nosotros',                    a: 'yo TENGO (irregular) | nosotros TENEMOS (regular).' },
      { q: 'PAMM — cite todos os comparativos especiais',          a: 'mejor, peor, mayor, menor, más, menos, antes, después. Todos com MUCHO.' },
      { q: 'Por que nosotros nunca muda o radical?',               a: 'O acento tônico está na desinência, não no radical — sem ditongação.' }
    ],

    mnemonics: [
      { trigger: 'Chef usa TUDO',     memory: '"DAMO = Desayuno-Almuerzo-Merienda-cena (Orden). PAMM = comparativos com MUCHO. MB = M antes de B. TE = Tengo especial."' },
      { trigger: 'Revisão final',     memory: '"Antes do boss, respira: MUY+adj, MUCHO+sust, M+P/B, TENGO, PAMM, nosotros=normal."' }
    ],

    miniReview: [
      { q: 'Qual erro há em: "Nosotros puedemos volver tarde"?',
        a: 'Duplo erro: (1) "puedemos" não existe — nosotros de PODER é "PODEMOS" (sem ue); (2) "volver tarde" está correto. Correto: "Nosotros podemos volver tarde."' },
      { q: 'Corrija: "El restaurante tiene muy mejor ambiente que antes."',
        a: 'Erro: "muy mejor" → "MUCHO mejor" (PAMM). Correto: "El restaurante tiene MUCHO mejor ambiente que antes."' }
    ]
  },

  warmup: [
    {
      prompt: 'El chef dice: "Quiero que ___ este plato antes de la cena." (PODER, 2ª pessoa)',
      options: [
        { text: 'puedas', correct: false },
        { text: 'puedes', correct: true  },
        { text: 'podemos', correct: false },
        { text: 'puede',  correct: false }
      ],
      explanation: '"Puedes" = 2ª pessoa singular (tú) de PODER. "Puedes terminar este plato" = Você pode terminar este prato. O contexto "antes de la cena" localiza no jantar (última refeição do dia).'
    },
    {
      prompt: '"La sopa del día está ___ mejor que ayer." Completa.',
      options: [
        { text: 'muy',   correct: false },
        { text: 'mucho', correct: true  },
        { text: 'mucha', correct: false },
        { text: 'muchos', correct: false }
      ],
      explanation: 'MUCHO mejor — regra PAMM. "Mejor" = comparativo irregular → nunca usa MUY. "La sopa está MUCHO mejor que ayer." Esta é a frase-teste clássica para identificar se o aluno sabe a regra PAMM!'
    }
  ],

  guidedPractice: [
    {
      prompt: '🔍 DICA: Identifica o SUJEITO antes de conjugar.\n\n"Los estudiantes ___ volver al restaurante mañana." (QUERER)',
      options: [
        { text: 'quiero',   correct: false },
        { text: 'quieren',  correct: true  },
        { text: 'queremos', correct: false },
        { text: 'quieres',  correct: false }
      ],
      explanation: 'Los estudiantes = ellos (3ª pessoa plural) → QUIEREN. QUERER: yo quiero, tú quieres, él quiere, nosotros queremos, vosotros queréis, ellos QUIEREN. A mudança e→ie ocorre em todas as pessoas exceto nosotros/vosotros.'
    },
    {
      prompt: '🔍 DICA: Verifica ortografia M/N + regras de MUY/MUCHO.\n\nIdentifica a frase 100% correta:',
      options: [
        { text: '"Sienpre tengo mucha hambre después del entrenamiento"',  correct: false },
        { text: '"Siempre tengo mucha hambre después del entrenamiento"',  correct: true  },
        { text: '"Siempre tengo muy hambre después del entrenamiento"',    correct: false },
        { text: '"Sienpre tengo muy hambre después del entrenamiento"',    correct: false }
      ],
      explanation: '"Siempre tengo mucha hambre" — ambas corretas: SIEMPRE (M antes de P) + MUCHA hambre (substantivo feminino). As outras têm: "sienpre" (ortografia errada) ou "muy hambre" (substantivo → precisa MUCHO concordando).'
    }
  ],

  questions: [
    {
      prompt: 'El chef gana ___ dinero porque cocina ___ bien. Completa as lacunas.',
      options: [
        { text: 'mucho / muy',   correct: true  },
        { text: 'muy / mucho',   correct: false },
        { text: 'mucha / muy',   correct: false },
        { text: 'muy / muy',     correct: false }
      ],
      explanation: 'MUCHO dinero (substantivo masculino) + MUY bien (advérbio). Duas regras na mesma frase! Dinero = substantivo → MUCHO concorda. Bien = advérbio → MUY invariável. Pegadinha clássica!'
    },
    {
      prompt: 'Qual palavra tem ortografia INCORRETA em: "El hom_re com_ra los ingre_ientes para tam_ién preparar la receta."',
      options: [
        { text: 'hom_re → "homre" (falta B)',        correct: false },
        { text: 'com_ra → "conpra" com N',           correct: false },
        { text: 'ingre_ientes está correto',         correct: false },
        { text: 'Todas as lacunas pedem M',          correct: true  }
      ],
      explanation: 'Todas usam M: HOM-BRE (M antes de B), COM-PRA (M antes de P), ingre-DIENTES (D, não B ou P — aqui usa N: ingredientes), tam-BIÉN (M antes de B). Revisão: as palavras com M são hombre, compra e también.'
    },
    {
      prompt: '"Mi abuela ___ muchas recetas antiguas." (TENER, 3ª pessoa)',
      options: [
        { text: 'tengo',  correct: false },
        { text: 'tiene',  correct: true  },
        { text: 'tienes', correct: false },
        { text: 'tenemos', correct: false }
      ],
      explanation: '"Mi abuela" = ella (3ª pessoa singular) → TIENE. TENER: yo tengo (irregular), tú tienes, él/ella TIENE, nosotros tenemos, vosotros tenéis, ellos tienen. Atenção: "tengo" é só para YO!'
    },
    {
      prompt: 'Un blog de culinária escreve: "Esta receta es muchísimo peor que la original." ¿Es correcto?',
      options: [
        { text: 'Não — deveria ser "muy peor"',                               correct: false },
        { text: 'Sim — "muchísimo" é superlativo de mucho e reforça "peor"',  correct: true  },
        { text: 'Não — deveria ser "mucho peor" (muchísimo não existe)',       correct: false },
        { text: 'Não — "peor" não aceita grau comparativo',                    correct: false }
      ],
      explanation: '"Muchísimo peor" é CORRETO. "Muchísimo" é o superlativo de mucho e pode intensificar comparativos. "Mucho peor" também seria correto, mas "muchísimo peor" intensifica ainda mais. Nunca "muy peor" — PAMM proíbe!'
    },
    {
      prompt: 'Identifica o par CORRETO de refeição → horário:',
      options: [
        { text: 'Desayuno → 22h | Cena → 7h',          correct: false },
        { text: 'Merienda → 13h | Almuerzo → 16h',      correct: false },
        { text: 'Almuerzo → 13h-15h | Merienda → 15h-17h', correct: true  },
        { text: 'Desayuno → 20h | Merienda → 8h',      correct: false }
      ],
      explanation: 'Almuerzo (almoço) = 13h-15h — refeição principal. Merienda (lanche da tarde) = 15h-17h. Desayuno = 7h-9h. Cena = 20h-22h. Ordem: Desayuno → Almuerzo → Merienda → Cena.'
    },
    {
      prompt: '"Los chefs ___ cuando el plato sale perfecto." Completa com VOLVER.',
      options: [
        { text: 'vuelven a sonreír',   correct: true  },
        { text: 'volvemos a sonreír',  correct: false },
        { text: 'vuelves a sonreír',   correct: false },
        { text: 'volvén a sonreír',    correct: false }
      ],
      explanation: '"Los chefs" = ellos → VUELVEN. "Volver a + infinitivo" = voltar a fazer, fazer de novo. "Los chefs vuelven a sonreír" = Os chefs voltam a sorrir. Estrutura muito comum com volver!'
    },
    {
      prompt: '¿Cuál es la frase 100% correcta?',
      options: [
        { text: '"Yo quero que la merienda sea más sabrosa"',           correct: false },
        { text: '"Tenemos muy hambre después del almuerzo temprano"',   correct: false },
        { text: '"Podemos entender la receta porque está muy clara"',   correct: true  },
        { text: '"Volvemos muy antes de la cena"',                       correct: false }
      ],
      explanation: '"Podemos entender la receta porque está MUY clara" ✓ (muy + adjetivo "clara", nosotros + verbos regulares). Erros: "quero" (→ quiero); "muy hambre" (→ mucha hambre); "muy antes" (PAMM: mucho antes).'
    },
    {
      prompt: '"Necesito ___ sal y también ___ aceite." Completa com MUY/MUCHO.',
      options: [
        { text: 'muy / muy',     correct: false },
        { text: 'mucha / mucho', correct: true  },
        { text: 'mucho / mucha', correct: false },
        { text: 'muy / mucha',   correct: false }
      ],
      explanation: 'SAL = substantivo feminino → MUCHA sal. ACEITE = substantivo masculino → MUCHO aceite. Dois substantivos de gêneros diferentes na mesma frase! Mucho concorda em gênero com cada substantivo.'
    },
    {
      prompt: 'Un crítico gastronômico escreve: "El restaurante tiene mucho más ambiente que sus com_etidores." Qual letra completa?',
      options: [
        { text: 'N — comNetidores',   correct: false },
        { text: 'M — coMpetidores',   correct: true  },
        { text: 'B — comBetidores',   correct: false },
        { text: 'P — comPetidores (já tem P)', correct: false }
      ],
      explanation: 'COM-PE-TI-DO-RES: a sílaba é COM + P → regra M antes de P → a letra antes de P é M. "CompEtidores" — com M. Além disso: "mucho más ambiente" usa PAMM corretamente (más = comparativo → MUCHO).'
    },
    {
      prompt: 'BOSS FINAL: La crítica dice: "El menú del día ___ (TENER, ella) ___ (MUCHO/MUY) más opciones que antes y siempre ___ (VOLVER, ella) a sorprender." Completa as 3 lacunas.',
      options: [
        { text: 'tiene / mucho / vuelve',   correct: true  },
        { text: 'tienes / muy / vuelves',   correct: false },
        { text: 'tiene / muy / vuelve',     correct: false },
        { text: 'tenemos / mucho / vuelven', correct: false }
      ],
      explanation: '3 acertos: TIENE (ella, 3ª singular de tener), MUCHO más (PAMM), VUELVE (ella, 3ª singular de volver, o→ue). Esta frase testa tudo: conjugação irregular + PAMM + concordância. Perfeito para o boss!'
    }
  ],

  adaptiveReview: [
    {
      prompt: 'BOSS DIFÍCIL: Analisa completamente: "Los cocineros sienpre quieren volver mucho antes para preparar el desayuno." Quantos erros há?',
      options: [
        { text: 'Nenhum',        correct: false },
        { text: 'Um: sienpre',   correct: true  },
        { text: 'Dois: sienpre e quieren', correct: false },
        { text: 'Três: sienpre, quieren e mucho antes', correct: false }
      ],
      explanation: 'UM erro: "sienpre" → "SIEMPRE" (M antes de P). Os demais estão corretos: "quieren" (ellos, e→ie ✓), "volver" (infinitivo ✓), "mucho antes" (PAMM ✓ — antes = comparativo de tempo → mucho). Análise cuidadosa revela apenas 1 erro!'
    },
    {
      prompt: 'BOSS DIFÍCIL: Criação. Qual frase demonstra MAIOR domínio da Unidad 2?',
      options: [
        { text: '"Quiero comer mucho"',                                                                          correct: false },
        { text: '"Nosotros siempre volvemos a casa para almorzar porque tenemos mucho tiempo"',                  correct: true  },
        { text: '"Puedo tambien tener hambre"',                                                                  correct: false },
        { text: '"Mucho mejor desayuno"',                                                                        correct: false }
      ],
      explanation: '"Nosotros siempre volvemos (nosotros+volver regular ✓) a casa para almorzar (refeição certa ✓) porque tenemos (nosotros+tener regular ✓) mucho tiempo (MUCHO+substantivo ✓)" — demonstra 4 conceitos da unidade corretamente. As outras frases têm erros (tambien sem acento, mucho mejor sem verbo) ou são muito simples.'
    }
  ],

  rewards: { xp: 200, gems: 25, badge: '👨‍🍳 El Gran Chef' },
  completionMessage: '¡BRAVO! Derrotaste El Gran Chef! Você domina a Unidad 2 de espanhol. ¡Eres un verdadero maestro de la cocina y del idioma!',
  nextStage: 'esp_gas_sfinal'
};

window.ESP_GAS_SBOSS = ESP_GAS_SBOSS;
