/**
 * ESP GASTRONOMIA STAGE 03 — Ortografía: M/N + MUY/MUCHO
 * BNCC: EF07LP07 | Tópico 3 — Unidad 2
 * M antes de P/B, N final de sílaba, latinismos -m, regra PAMM completa
 */

const ESP_GAS_S03 = {
  id: 'esp_gas_s03',
  title: 'Ortografía: M/N + MUY/MUCHO',
  icon: '✏️',
  difficulty: 'medium',
  estimatedTime: 14,

  learningObjectives: [
    'Aplicar a regra M antes de P e B',
    'Reconhecer quando usar N no final de sílaba',
    'Identificar latinismos com -m final',
    'Dominar os casos PAMM dos comparativos com MUCHO',
    'Evitar erros ortográficos comuns em palavras do cotidiano'
  ],

  summary: {
    readTime: 5,
    content: [
      {
        icon: '✏️',
        title: 'Regra M antes de P e B — os lábios se fecham!',
        text: 'A regra mais importante da ortografia espanhola com M/N:\n\n🔴 REGRA: ANTES DE P e B, sempre escreva M (nunca N)\n\n✅ Exemplos com P:\n• cam-po (campo)\n• em-pe-zar (começar)\n• siem-pre (sempre)\n• tam-bién → espera... a próxima letra é B!\n\n✅ Exemplos com B:\n• tam-bién (também)\n• com-bi-nar (combinar)\n• cam-bio (câmbio/mudança)\n• hom-bre (homem)\n• som-bra (sombra)\n\n🎯 DICA FÍSICA: Pronuncie "campo". Seus lábios se fecham para o P. O M e o P compartilham o mesmo movimento labial — por isso ficam juntos!\n\n❌ ERROS COMUNS:\n  ✗ "canpo" → ✓ "campo"\n  ✗ "tanbién" → ✓ "también"\n  ✗ "hombre" com N → ✓ "hombre" com M\n\n🔑 Fácil de lembrar: M + P e M + B são "amigos labiais" em espanhol!'
      },
      {
        icon: '📝',
        title: 'N no final de sílaba e latinismos com -m',
        text: 'Quando usar N e casos especiais:\n\nN FINAL DE SÍLABA (antes de outras consoantes — exceto P e B):\n• can-tar (cantar)\n• en-tra-da (entrada)\n• con-tar (contar)\n• men-sa-je (mensagem)\n• ven-ta (venda)\n\n🔴 EXCEÇÃO — N antes de V:\nHistoricamente se escrevia M antes de V, mas hoje é N:\n• in-vierno (inverno) → com N\n• en-viar (enviar) → com N\n• con-ver-sar → com N\n\nLATINISMOS com -M FINAL:\nPalavras herdadas do latim que mantêm o M:\n• álbum, réquiem, ítem, memorándum\n• Curiosidade: "currículum" mantém o -m do latim.\n• Estas palavras são exceções à regra geral.\n\n🔑 A diferença do português: em português escrevemos "também", "campo" (igual!), mas em PT também temos -m final em "bem", "sem", "tom" que em espanhol viram -n: bien, sin, tono.'
      },
      {
        icon: '⚡',
        title: 'MUY/MUCHO — revisão e casos avançados',
        text: 'Recapitulando com foco em contextos ortográficos de receitas e textos:\n\nMUY (invariável) + ADJETIVO/ADVÉRBIO:\n• El pan está muy fresco. (O pão está muito fresco.)\n• Cocina muy despacio. (Cozinha muito devagar.)\n• El restaurante está muy lejos. (O restaurante está muito longe.)\n\nMUCHO/A/OS/AS + SUBSTANTIVO:\n• Necesita mucha agua. (Precisa de muita água.)\n• Hay muchos platos. (Há muitos pratos.)\n• Tenemos muchas recetas. (Temos muitas receitas.)\n• Come mucho. (Come muito. — antes de verbo: invariável)\n\nCASOS PAMM — MUCHO + comparativos:\n• mucho mejor (muito melhor)\n• mucho peor (muito pior)\n• mucho más (muito mais)\n• mucho menos (muito menos)\n• mucho mayor (muito maior/mais velho)\n• mucho menor (muito menor/mais novo)\n• mucho antes (muito antes)\n• mucho después (muito depois)\n\n🔑 Atenção: MUY nunca aparece antes de MUCHO: "muy mucho" = ERRADO. "Muchísimo" = forma superlativa correta de mucho!'
      }
    ],

    flashcards: [
      { q: 'Qual letra vem antes de P e B em espanhol?',             a: 'Sempre M. Exemplos: campo, también, hombre. NUNCA N antes de P ou B.' },
      { q: '¿Cómo se escribe "também" en español?',                  a: 'También — com M antes do B (regra M antes de B).' },
      { q: '¿Cómo se escribe "campo" — con M o N?',                  a: 'cam-po — com M, pois P vem depois (regra M antes de P).' },
      { q: 'Menciona 3 latinismos con -m final en español.',         a: 'álbum, réquiem, ítem (ou currículum, memorándum).' },
      { q: 'N antes de V — con N o M?',                              a: 'Con N: invierno, enviar. Historicamente era M, hoje é N.' },
      { q: '"Está ___ bien." MUY o MUCHO?',                          a: 'MUY bien — "bien" é advérbio. Bien acompanha sempre MUY.' },
      { q: '"Come ___ en la cena." MUY o MUCHO?',                    a: 'MUCHO — antes de verbo, MUCHO invariável. "Come mucho."' },
      { q: '¿Cómo se dice "sempre" en español?',                    a: '"Siempre" — con M antes de P (siem-pre).' }
    ],

    mnemonics: [
      { trigger: 'M antes de P e B',       memory: '"M + P = lábios fecham (bilabiais). M e B também são bilabiais. São AMIGOS DE BOCA — ficam juntos!"' },
      { trigger: 'también com M',           memory: '"TamBIÉN = TAM-B → vejo B, escrevo M antes. TAM-bién, não TAN-bién!"' },
      { trigger: 'PAMM + MUY/MUCHO',        memory: '"PAMM = Peor-Antes-Mayor/Menor-Más/Menos/Mejor/Después. Todo leva MUCHO. MUY só fica com adjetivos simples."' },
      { trigger: 'siempre com M',           memory: '"SIEM-pre: tem P depois do M. M precede P. SIEMpre correto!"' }
    ],

    miniReview: [
      { q: 'Por que "canpo" está errado?',
        a: '"Campo" tem P depois do A — a regra M antes de P exige M: cam-po. "Canpo" é erro ortográfico em espanhol (e também em português!).' },
      { q: 'Qual é o superlativo de "mucho"?',
        a: '"Muchísimo/a/os/as" é o superlativo de mucho. "Come muchísimo" = come muitíssimo. Nunca se usa "muy mucho".' }
    ]
  },

  warmup: [
    {
      prompt: '¿Cómo se escribe "também" en español?',
      options: [
        { text: 'tanbién', correct: false },
        { text: 'también', correct: true  },
        { text: 'tanvién', correct: false },
        { text: 'tanbion', correct: false }
      ],
      explanation: 'TAMBIÉN — com M antes de B (regra: M antes de B e P). "Tan-bién" seria errado; correto é "tam-bién". Esta regra é fundamental em espanhol!'
    },
    {
      prompt: '"El cocinero trabaja ___ rápido." Completa.',
      options: [
        { text: 'mucha',  correct: false },
        { text: 'muchos', correct: false },
        { text: 'muy',    correct: true  },
        { text: 'mucho',  correct: false }
      ],
      explanation: '"Rápido" é adjetivo/advérbio → MUY. "Trabaja MUY rápido." MUY é invariável. Mucho seria correto se viesse antes de um substantivo ou de um verbo sem adjetivo.'
    }
  ],

  guidedPractice: [
    {
      prompt: '🔍 DICA: Olha a consoante que VEM DEPOIS.\n\nEscolhe a ortografia correta: "com_inar los ingredientes"',
      options: [
        { text: 'conbinar',  correct: false },
        { text: 'combinar',  correct: true  },
        { text: 'conbibnar', correct: false },
        { text: 'cunbinar',  correct: false }
      ],
      explanation: 'COM-bi-nar: a letra B vem depois — regra M antes de B → M, não N. "Combinar" está correto. "Conbinar" é o erro mais comum por influência do português "combinar" (que por acaso também tem M!).'
    },
    {
      prompt: '🔍 DICA: "Mucho" antes de verbo ou "mucho" no PAMM?\n\n"Esta receta es ___ mejor que la anterior."',
      options: [
        { text: 'muy',    correct: false },
        { text: 'mucha',  correct: false },
        { text: 'mucho',  correct: true  },
        { text: 'muchas', correct: false }
      ],
      explanation: '"Mejor" = comparativo irregular → regra PAMM → MUCHO. "Es MUCHO mejor." "Muy mejor" é um erro grave — nunca se usa MUY com comparativos irregulares em espanhol.'
    }
  ],

  questions: [
    {
      prompt: 'Qual das palavras abaixo tem erro ortográfico?',
      options: [
        { text: 'también',  correct: false },
        { text: 'campo',    correct: false },
        { text: 'sienpre',  correct: true  },
        { text: 'hombre',   correct: false }
      ],
      explanation: '"Sienpre" está errado. O correto é "SIEMPRE" — com M antes de P (siem-pre). Todas as outras estão corretas: también (M+B), campo (M+P), hombre (M+B).'
    },
    {
      prompt: 'La cocinera dice: "Necesito ___ mantequilla para la tarta."',
      options: [
        { text: 'muy',   correct: false },
        { text: 'mucho', correct: false },
        { text: 'mucha', correct: true  },
        { text: 'muchos', correct: false }
      ],
      explanation: '"Mantequilla" (manteiga) é substantivo FEMININO → MUCHA mantequilla. MUCHO concorda com o substantivo: mucho/mucha/muchos/muchas.'
    },
    {
      prompt: '¿Cuál es la regla correcta para M/N en español?',
      options: [
        { text: 'N sempre antes de consoante',                       correct: false },
        { text: 'M antes de P e B; N antes das demais consoantes',   correct: true  },
        { text: 'M no final de todas as sílabas',                    correct: false },
        { text: 'N antes de P e B; M antes das demais consoantes',   correct: false }
      ],
      explanation: 'A regra em espanhol (igual ao português): M antes de P e B. N antes das demais consoantes (t, d, c, v, etc.). Exceção: latinismos terminados em -m (álbum, réquiem).'
    },
    {
      prompt: '"El nuevo restaurante es ___ peor que el anterior." Completa.',
      options: [
        { text: 'muy',    correct: false },
        { text: 'mucho',  correct: true  },
        { text: 'mucha',  correct: false },
        { text: 'muchos', correct: false }
      ],
      explanation: '"Peor" é comparativo irregular → PAMM → MUCHO peor. "Es MUCHO peor." Nunca "muy peor". PAMM: Mejor/Peor/Mayor/Menor/Más/Menos/Antes/Después — todos com MUCHO.'
    },
    {
      prompt: 'Qual das afirmações sobre latinismos em espanhol é CORRETA?',
      options: [
        { text: 'Todos os latinismos terminam em -n em espanhol',                         correct: false },
        { text: 'Palavras como "álbum" e "réquiem" mantêm o -m final do latim',           correct: true  },
        { text: 'Latinismos não existem em espanhol moderno',                              correct: false },
        { text: 'A Real Academia Española eliminou todos os latinismos em 2010',           correct: false }
      ],
      explanation: 'Latinismos como ÁLBUM, RÉQUIEM, ÍTEM, CURRÍCULUM mantêm o -m final herdado do latim. São exceções à regra geral. A Real Academia Española (RAE) aceita estas formas.'
    },
    {
      prompt: 'Elige la oración con MUY/MUCHO correcto:',
      options: [
        { text: 'La pasta está muy mejor hoy',                   correct: false },
        { text: 'Come muchos verduras en el almuerzo',           correct: false },
        { text: 'Esta cocinera es mucho más talentosa',          correct: true  },
        { text: 'Necesito muy sal para la receta',               correct: false }
      ],
      explanation: '"Mucho más talentosa" = PAMM correto. Os erros: "muy mejor" (deveria ser mucho mejor); "muchos verduras" (verduras = feminino plural → muchas); "muy sal" (sal = substantivo → mucha).'
    },
    {
      prompt: '"Invierno" (inverno) en español se escribe con:',
      options: [
        { text: 'M — porque B está próximo',             correct: false },
        { text: 'N — porque V não segue a regra M+B',    correct: true  },
        { text: 'M — porque é latinismo',                correct: false },
        { text: 'Depende do dialeto espanhol',           correct: false }
      ],
      explanation: 'IN-vierno = com N. A regra M antes de B/P NÃO se aplica antes de V em espanhol moderno. Antes de V usa-se N: invierno, enviar, conversar. Historicamente havia M antes de V, mas a norma atual é N.'
    },
    {
      prompt: '"Come ___ en las fiestas." Resposta correta:',
      options: [
        { text: 'muy',    correct: false },
        { text: 'mucha',  correct: false },
        { text: 'mucho',  correct: true  },
        { text: 'muchos', correct: false }
      ],
      explanation: '"Come mucho" = MUCHO antes do verbo COMER, funcionando como advérbio de quantidade. Quando MUCHO vem antes de um verbo (sem substantivo depois), é invariável. "Como mucho" = como muito.'
    },
    {
      prompt: 'Una periodista escribe: "El chef tiene ___ experiencia y cocina ___ bien." Completa as lacunas.',
      options: [
        { text: 'mucha / muy',   correct: true  },
        { text: 'mucho / muy',   correct: false },
        { text: 'muy / muy',     correct: false },
        { text: 'mucha / mucho', correct: false }
      ],
      explanation: 'MUCHA experiencia (experiência = substantivo feminino → mucha) + MUY bien (bien = advérbio → muy). Duas regras diferentes na mesma frase! Esta é uma pegadinha clássica de avaliações de espanhol.'
    },
    {
      prompt: '¿Cuál es el superlativo correcto de "mucho"?',
      options: [
        { text: 'muy mucho',      correct: false },
        { text: 'muchísimo',      correct: true  },
        { text: 'muy muchísimo',  correct: false },
        { text: 'el más mucho',   correct: false }
      ],
      explanation: 'O superlativo de MUCHO é MUCHÍSIMO/A/OS/AS. "Como muchísimo" = como muitíssimo. "Muy mucho" é um dos erros mais comuns em espanhol — não existe essa construção!'
    }
  ],

  adaptiveReview: [
    {
      prompt: 'DIFÍCIL: Uma redação contém: "Sienpre combino mucho bien los ingredientes para obtener algo muy mejor." Quantos erros ortográficos e gramaticais existem?',
      options: [
        { text: 'Nenhum erro',                   correct: false },
        { text: 'Dois erros: sienpre e muy mejor', correct: true  },
        { text: 'Um erro: apenas sienpre',        correct: false },
        { text: 'Três erros: sienpre, combino e muy mejor', correct: false }
      ],
      explanation: 'Dois erros: (1) "sienpre" → "SIEMPRE" (M antes de P); (2) "muy mejor" → "MUCHO mejor" (PAMM). "Combino" está correto (M antes de B). "Mucho bien" está correto (advérbio de modo antes de verbo). Total: 2 erros.'
    },
    {
      prompt: 'DIFÍCIL: Por que "álbum" termina em -m mas "campo" não termina em -m?',
      options: [
        { text: 'São regras contraditórias sem lógica',                                              correct: false },
        { text: 'álbum é latinismo que preserva -m do latim; campo é M porque P vem em seguida na mesma sílaba', correct: true  },
        { text: 'álbum é anglicismo e campo é palavra árabe',                                        correct: false },
        { text: 'Ambas seguem a regra M antes de consoante',                                        correct: false }
      ],
      explanation: 'São fenômenos diferentes: "álbum" preserva o -m final LATINO (herança morfológica). "campo" tem M porque a PRÓXIMA LETRA é P (regra fonológica M+P). Um é patrimônio histórico, o outro é regra de pronúncia. A língua é complexa e bonita!'
    }
  ],

  rewards: { xp: 130, gems: 13, badge: '✏️ Mestre da Ortografía' },
  completionMessage: '¡Perfecto! Nunca mais vais escrever "sienpre" ou "tanbién". A ortografia espanhola é tua!',
  nextStage: 'esp_gas_s04'
};

window.ESP_GAS_S03 = ESP_GAS_S03;
