/**
 * ESP GASTRONOMIA FINAL — Examen Unidad 2
 * BNCC: EF07LE01, EF07LE04, EF07LE06, EF07LE12, EF07LP07 | Unidad 2
 * Exame final: perguntas mistas de alto nível cobrindo todos os tópicos 1-4
 */

const ESP_GAS_SFINAL = {
  id: 'esp_gas_sfinal',
  title: 'Examen — Unidad 2',
  icon: '🎓',
  difficulty: 'hard',
  estimatedTime: 20,
  isFinal: true,

  learningObjectives: [
    'Demonstrar domínio completo da Unidad 2',
    'Resolver questões integradas de vocabulário + gramática',
    'Analisar textos gastronômicos autênticos em espanhol',
    'Corrigir erros em frases complexas',
    'Produzir frases corretas com todos os recursos estudados'
  ],

  summary: {
    readTime: 2,
    content: [
      {
        icon: '🎓',
        title: '¡El Examen Final de la Unidad 2!',
        text: '¡Felicitaciones por llegar hasta aquí!\n\nEste é o Exame Final — o momento de provar que você domina toda a Unidad 2.\n\n📋 O que será avaliado:\n• Vocabulário das refeições e utensílios de cozinha\n• Regra MUY vs MUCHO (incluindo PAMM)\n• Ortografia M/N (M antes de P e B; latinismos)\n• Verbos irregulares da 2ª conjugação (querer, poder, tener, volver, entender)\n• Regra nosotros/vosotros nunca muda o radical\n\n🏆 Pontuação máxima = triple XP + badge exclusiva\n\n¡Mucha suerte! (Muita sorte — MUCHA + substantivo feminino. Já sabes! 😉)'
      }
    ],

    flashcards: [
      { q: 'Recapitula: M antes de ___ e ___ ?',                     a: 'M antes de P e B. Sempre. Exemplos: campo (P), también (B), siempre (P), hombre (B).' },
      { q: 'MUY/MUCHO: "La sopa está ___ caliente"',               a: 'MUY — caliente é adjetivo. La sopa está MUY caliente.' },
      { q: 'PAMM completo: 8 comparativos que pedem MUCHO',         a: 'mejor, peor, mayor, menor, más, menos, antes, después.' },
      { q: 'TENER: forma YO + forma ELLOS',                         a: 'yo TENGO (irregular) | ellos TIENEN (e→ie).' },
      { q: 'Nosotros de PODER = ?',                                  a: 'PODEMOS — nunca "puedemos". Nosotros sempre preserva o radical.' },
      { q: '¿Cuándo se usa "muchísimo"?',                           a: 'Superlativo de mucho: come muchísimo (=come muitíssimo). Nunca "muy mucho".' }
    ],

    mnemonics: [
      { trigger: 'Revisão final Unidad 2', memory: '"DAMS: Desayuno-Almuerzo-Merienda-cena. PAMM. M+P/B. TENGO. Nosotros normal. MUY+adj, MUCHO+sust/verbo."' }
    ],

    miniReview: [
      { q: 'Qual é o erro mais comum dos estudantes na Unidad 2?',
        a: 'Usar "muy mejor/peor" em vez de "mucho mejor/peor" (PAMM). Este erro ocorre em ~70% dos testes. Memorize: comparativos irregulares sempre com MUCHO!' }
    ]
  },

  warmup: [
    {
      prompt: '"¿Quieres ___ agua?" — Completa com a forma correta.',
      options: [
        { text: 'muy',    correct: false },
        { text: 'mucho',  correct: false },
        { text: 'mucha',  correct: true  },
        { text: 'muchas', correct: false }
      ],
      explanation: 'Agua = substantivo feminino (tecnicamente feminino apesar do "el agua" → regra especial) → MUCHA. "¿Quieres mucha agua?" = Você quer muita água?'
    },
    {
      prompt: '"Ellos ___ volver a cenar en ese restaurante." Completa com QUERER.',
      options: [
        { text: 'queren',   correct: false },
        { text: 'queremos', correct: false },
        { text: 'quieren',  correct: true  },
        { text: 'quiero',   correct: false }
      ],
      explanation: '"Ellos quieren" = eles querem (e→ie, 3ª plural). "Cenar" = jantar (relacionado com "cena", a última refeição do dia).'
    }
  ],

  guidedPractice: [
    {
      prompt: '🔍 DICA: Identifica TODOS os erros antes de responder.\n\n"El chef sienmpre tiene muy mejor sazón que los demás."',
      options: [
        { text: 'Nenhum erro',                                 correct: false },
        { text: '"sienmpre" deveria ser "siempre"',            correct: false },
        { text: '"sienmpre" e "muy mejor" estão errados',      correct: true  },
        { text: 'Apenas "muy mejor" está errado',              correct: false }
      ],
      explanation: 'DOIS erros: (1) "sienmpre" → "SIEMPRE" (ortografia: M antes de P, mas sem M duplo!); (2) "muy mejor" → "MUCHO mejor" (PAMM). "Tiene" está correto (3ª singular de tener). Análise cuidadosa é fundamental!'
    },
    {
      prompt: '🔍 DICA: Lembra da diferença cultural dos horários.\n\n"En España, la cena es ___ después que en Brasil." Completa.',
      options: [
        { text: 'muy',    correct: false },
        { text: 'mucho',  correct: true  },
        { text: 'mucha',  correct: false },
        { text: 'muchos', correct: false }
      ],
      explanation: '"Mucho después" = PAMM (después = comparativo de tempo → sempre MUCHO). "La cena en España es MUCHO después que en Brasil" — os espanhóis jantam entre 20h-22h vs Brasil que janta às 18h-20h.'
    }
  ],

  questions: [
    {
      prompt: 'TEXTO: "La merienda es ___ importante para los niños porque hay ___ tiempo entre el almuerzo y la cena." Completa.',
      options: [
        { text: 'muy / mucho',  correct: true  },
        { text: 'mucha / muy',  correct: false },
        { text: 'muy / mucha',  correct: false },
        { text: 'mucho / muy',  correct: false }
      ],
      explanation: 'MUY importante (adjetivo) + MUCHO tiempo (substantivo masculino). Duas lacunas, duas regras diferentes! Texto em contexto: merienda é importante porque o intervalo entre almuerzo e cena é longo.'
    },
    {
      prompt: 'Uma receita diz: "Com_ine los ingredientes en la olla y em_iece a cocinar." Completa as lacunas.',
      options: [
        { text: 'Conbine / Empiece',   correct: false },
        { text: 'Combine / Empiece',   correct: true  },
        { text: 'Combine / Enpiece',   correct: false },
        { text: 'Conbine / Enpiece',   correct: false }
      ],
      explanation: 'COM-BINE (M antes de B) + EM-PIECE (M antes de P). Ambas com M! "Olla" = panela. "Cocinar" = cozinhar. Uma receita básica que testa duas instâncias da regra M+B/P.'
    },
    {
      prompt: '¿Qué respuesta está completamente correcta gramaticalmente?',
      options: [
        { text: '"Nosotros siempre volvemos a desayunar juntos los domingos"',                correct: true  },
        { text: '"Nosotros siempre vuelven a desayunar juntos los domingos"',                correct: false },
        { text: '"Nosotros siempre vuelven a desayunar juntos los domingos"',                correct: false },
        { text: '"Nosotros siempre volvimos a desayunar juntos los domingos"',               correct: false }
      ],
      explanation: '"Nosotros siempre VOLVEMOS" ✓ — nosotros preserva o radical (volvemos, não vuelven). "Vuelven" é para ellos. "Volvimos" é pretérito (passado). A presença de nosotros + volver é o teste clássico desta regra!'
    },
    {
      prompt: 'Carlos é mexicano. Diz: "En México, el ___ es diferente al ___ de España."',
      options: [
        { text: 'desayuno / desayuno',   correct: false },
        { text: 'almuerzo / almuerzo',   correct: true  },
        { text: 'merienda / cena',       correct: false },
        { text: 'cena / merienda',       correct: false }
      ],
      explanation: 'Carlos faz sentido dizendo que o ALMUERZO no México é diferente do da Espanha. No México, "almuerzo" pode ser um lanche da manhã (enquanto a refeição principal é "la comida"). Na Espanha, almuerzo = refeição principal às 14h. Diferença cultural real!'
    },
    {
      prompt: '"¿Puedes pasarme el rallador? Lo necesito para ___ queso." Completa.',
      options: [
        { text: 'rallar el',    correct: true  },
        { text: 'ralar el',     correct: false },
        { text: 'rallando el',  correct: false },
        { text: 'rallo el',     correct: false }
      ],
      explanation: '"Rallar el queso" = ralar o queijo (infinitivo após "necesito para"). "Rallador" = ralador, "rallar" = ralar. Notem que o verbo tem RR duplo (seguindo regras de ortografia do R/RR que veremos na Unidad 3!). "Para" + infinitivo = estrutura de finalidade.'
    },
    {
      prompt: 'Completa o diálogo: "—¿___ hambre? —Sí, ___ mucha. ¿Qué ___ para la merienda?" (TENER, TENER, QUERER)',
      options: [
        { text: 'Tienes / tengo / quieres',   correct: true  },
        { text: 'Tienes / tengo / queres',    correct: false },
        { text: 'Tiene / tengo / quieres',    correct: false },
        { text: 'Tienes / tiene / quieres',   correct: false }
      ],
      explanation: '¿TIENES hambre? (tú, e→ie) → Sí, TENGO mucha (yo, irregular) → ¿Qué QUIERES? (tú, e→ie). Três verbos em quatro linhas! O diálogo também confirma: MUCHA hambre (ham-bre = feminino).'
    },
    {
      prompt: 'Un crítico escreve: "Este chef entiende ___ mejor los sabores que sus colegas." ¿Correto?',
      options: [
        { text: 'Correto — entiende + mucho + mejor (PAMM)',                     correct: true  },
        { text: 'Errado — deveria ser "muy mejor"',                              correct: false },
        { text: 'Errado — "entiende" deveria ser "entiende" (está correto)',     correct: false },
        { text: 'Errado — deveria ser "muchísimo mejor"',                        correct: false }
      ],
      explanation: '"Mucho mejor" = PAMM correto. "Entiende" = 3ª pessoa singular de entender (e→ie) ✓. "Entiende MUCHO mejor" está 100% correto. Também seria correto "muchísimo mejor" (superlativo), mas a frase original com "mucho" já está certa.'
    },
    {
      prompt: 'Qual das palavras abaixo É um latinismo com -m final em espanhol?',
      options: [
        { text: 'también',     correct: false },
        { text: 'hombre',      correct: false },
        { text: 'álbum',       correct: true  },
        { text: 'campo',       correct: false }
      ],
      explanation: 'ÁLBUM é latinismo — herda o -m final do latim "album". También, hombre e campo têm M seguido de B ou P (regra fonológica diferente). Outros latinismos: réquiem, ítem, currículum.'
    },
    {
      prompt: 'INTEGRAÇÃO TOTAL: "Mis padres siempre ___ (PODER) cocinar ___ mejor cuando ___ (TENER) los ingredientes frescos."',
      options: [
        { text: 'pueden / mucho / tienen',   correct: true  },
        { text: 'puedes / muy / tienes',     correct: false },
        { text: 'podemos / mucho / tenemos', correct: false },
        { text: 'pueden / muy / tienen',     correct: false }
      ],
      explanation: '"Mis padres" = ellos → PUEDEN (o→ue) + MUCHO mejor (PAMM) + TIENEN (e→ie). Três aspectos corretos: conjugação ellos para poder, PAMM para mejor, conjugação ellos para tener. Frase de integração total!'
    },
    {
      prompt: 'EXAME FINAL: Qual frase usa CORRETAMENTE todos os recursos da Unidad 2?',
      options: [
        { text: '"Sienpre tenemos mucha hambre y volvemos muy antes para el almuerzo"',          correct: false },
        { text: '"Siempre tenemos mucha hambre y volvemos mucho antes para el almuerzo"',        correct: true  },
        { text: '"Siempre tenemos muy hambre y volvemos mucho antes para el almuerzo"',          correct: false },
        { text: '"Siempre tenemos mucha hambre y volvemos muy antes para el almuerzo"',          correct: false }
      ],
      explanation: '"Siempre" (M+P ✓) + "tenemos" (nosotros de tener, regular ✓) + "mucha hambre" (MUCHO+feminino ✓) + "volvemos" (nosotros de volver, sem mudança ✓) + "mucho antes" (PAMM ✓) + "almuerzo" (refeição correta ✓). SEIS elementos corretos! Esta frase representa a síntese perfeita da Unidad 2.'
    }
  ],

  adaptiveReview: [
    {
      prompt: 'EXAME DIFÍCIL: "Los estudiantes siempre entienden mucho más cuando tienen muchísima motivación." Esta frase tem quantos usos corretos de MUY/MUCHO?',
      options: [
        { text: 'Dois: mucho más e muchísima',                        correct: false },
        { text: 'Três: mucho más (PAMM), muchísima motivación (MUCHO+fem.sust), e "siempre entienden" (correto)', correct: false },
        { text: 'Dois: mucho más (PAMM correto) e muchísima motivación (superlativo de mucha, correto)',           correct: true  },
        { text: 'Nenhum — há erros de MUY/MUCHO',                    correct: false }
      ],
      explanation: 'DOIS usos de MUY/MUCHO: (1) "mucho más" = PAMM correto (más = comparativo); (2) "muchísima motivación" = superlativo de MUCHA + substantivo feminino. "Entienden" não é MUY/MUCHO — é conjugação de entender. Análise precisa!'
    },
    {
      prompt: 'EXAME DIFÍCIL: Un professor avalia: "Esta redação está ___ bem escrita, com ___ vocabulário rico e ___ erros". Preenche as 3 lacunas em espanhol.',
      options: [
        { text: 'muy / mucho / pocos',    correct: true  },
        { text: 'mucho / muy / poco',     correct: false },
        { text: 'muy / mucha / pocos',    correct: false },
        { text: 'muy / mucho / poco',     correct: false }
      ],
      explanation: '"Muy bien escrita" (MUY+advérbio) + "mucho vocabulario" (MUCHO+substantivo masc.) + "pocos errores" (POCO concorda: pocos errores = poucos erros). Três palavras de quantidade em contexto de avaliação. Nota: "pocos" segue a mesma regra de concordância que MUCHO!'
    }
  ],

  rewards: { xp: 250, gems: 30, badge: '🎓 Graduado en Gastronomía' },
  completionMessage: '¡ENHORABUENA! Completaste la Unidad 2 de Espanhol! Eres un verdadero experto en gastronomía y gramática española. ¡A por la Unidad 3!',
  nextStage: null
};

window.ESP_GAS_SFINAL = ESP_GAS_SFINAL;
