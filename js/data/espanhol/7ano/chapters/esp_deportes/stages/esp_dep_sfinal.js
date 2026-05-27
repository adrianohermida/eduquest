/**
 * ESP DEPORTES FINAL — Examen Unidad 3
 * BNCC: EF07LE01, EF07LE04, EF07LE06, EF07LE12, EF07LP07 | Unidad 3
 * Exame final integrado — tópicos 5-9 + integração com Unidad 2
 */

const ESP_DEP_SFINAL = {
  id: 'esp_dep_sfinal',
  title: 'Examen — Unidad 3',
  icon: '🎓',
  difficulty: 'hard',
  estimatedTime: 22,
  isFinal: true,

  learningObjectives: [
    'Demonstrar domínio completo da Unidad 3',
    'Integrar Unidades 2 e 3 em contexto',
    'Resolver questões de múltipla complexidade',
    'Analisar textos esportivos autênticos',
    'Produzir respostas corretas com todos os recursos estudados'
  ],

  summary: {
    readTime: 2,
    content: [
      {
        icon: '🎓',
        title: '¡El Gran Examen Final de la Unidad 3!',
        text: '¡Este es el momento de la verdad!\n\nO exame final cobre:\n• 🏛️ Olimpíadas (história, COI/CON, protocolo)\n• ⚽ Vocabulário esportivo + apócopos\n• 🔢 Numerais (ordinais, fracionários, multiplicativos)\n• ✏️ Ortografia R/RR + todos os apócopos\n• 🔄 Verbos irregulares 3ª conjugação\n• 🔗 INTEGRAÇÃO com Unidad 2 (MUY/MUCHO, ortografia M/N)\n\n🏆 Pontuação máxima = Graduação em Espanhol 7º Ano!\n\n¡Buena suerte, campeón! 🥇'
      }
    ],

    flashcards: [
      { q: 'Os 3 padrões vocálicos da 3ª conjugação',          a: 'e→ie (sentir), e→i (pedir, exclusivo 3ª), o→ue (dormir).' },
      { q: 'Nosotros de SEGUIR = ?',                            a: 'seguimos (regular). Nunca "sigamos/seguemos".' },
      { q: 'R/RR: quando usar RR?',                             a: 'Entre vogais com som forte: perro, carretera, carro.' },
      { q: 'Santo vs San — regra completa',                     a: 'SAN antes de masc. exceto To-/Do-: San Pablo / Santo Tomás.' },
      { q: 'Docena=? | Decena=? | Lustro=?',                   a: 'Docena=12 | Decena≈10 | Lustro=5 anos.' },
      { q: 'GRAN antes de fem.sing. é correto?',               a: 'Sim! Gran é apócope universal (masc.+fem.) no singular.' }
    ],

    mnemonics: [
      { trigger: 'Síntese final', memory: '"1896 Atenas. 5 aros. Grécia 1ª. Buen gran primer tercer cualquier. RR entre vogais. Nosotros normal. MUY+adj, MUCHO+sust."' }
    ],

    miniReview: [
      { q: 'Qual o maior "armadilha" da Unidad 3 para brasileiros?',
        a: '"Pero/perro" é a armadilha mais comum: brasileiro confunde facilmente. Segundo: "cualquier" sem concordância de gênero (qualquer mulher = cualquier mujer, não cualquiera). Terceiro: "dormimos" sem UE (nosotros regular).' }
    ]
  },

  warmup: [
    {
      prompt: '"Los Juegos Olímpicos se celebran cada ___ años." Completa.',
      options: [
        { text: 'dos',    correct: false },
        { text: 'cuatro', correct: true  },
        { text: 'cinco',  correct: false },
        { text: 'diez',   correct: false }
      ],
      explanation: 'CUATRO anos = 4 anos. Os Jogos Olímpicos ocorrem a cada 4 anos (uma "olimpíada"). 1896, 1900, 1904... 2020, 2024, 2028.'
    },
    {
      prompt: '"El equipo ___ ganar más medallas este año." (PREFERIR, ellos)',
      options: [
        { text: 'prefieren',  correct: true  },
        { text: 'preferimos', correct: false },
        { text: 'prefiera',   correct: false },
        { text: 'prefiero',   correct: false }
      ],
      explanation: '"El equipo prefieren" — na prática diz-se "El equipo prefiere" (coletivo = singular) OU "Los atletas del equipo prefieren" (plural). Para "ellos" = PREFIEREN (e→ie). "Preferimos" = nosotros.'
    }
  ],

  guidedPractice: [
    {
      prompt: '🔍 DICA: Múltiplos conceitos juntos.\n\n"El primer ___ maratón olímpico fue corrido en Atenas por un gran campeón." Completa a lacuna.',
      options: [
        { text: 'histórico',  correct: true  },
        { text: 'historico',  correct: false },
        { text: 'historíco',  correct: false },
        { text: 'historica',  correct: false }
      ],
      explanation: '"El primer maratón histórico" — HISTÓRICO (adjetivo masculino, acento na sílaba tônica: his-TÓ-ri-co). Sem acento = "historico" = errado em espanhol. Com acento errado = também errado. Masculino singular = sem -a.'
    },
    {
      prompt: '🔍 DICA: RR entre vogais + apócope + verbo irregular.\n\n"El ___ portero sigue guardando goles." Qual apócope?',
      options: [
        { text: 'buen',    correct: true  },
        { text: 'bueno',   correct: false },
        { text: 'buenos',  correct: false },
        { text: 'gran',    correct: false }
      ],
      explanation: '"El buen portero" ✓ — BUEN (apócope de bueno antes de masc.sing.) + "sigue" (SEGUIR, e→i, 3ª sing.). Gran também seria possível com significado diferente (grande ≠ bom). Buen = qualidade de bom/bom profissional.'
    }
  ],

  questions: [
    {
      prompt: 'TEXTO: "Atenas es la ___ ciudad en recibir los Juegos Olímpicos modernos, siendo la ___ sede histórica." Completa os dois ordinais (1ª cidade, 1ª sede).',
      options: [
        { text: 'primera / primera',  correct: true  },
        { text: 'primer / primer',    correct: false },
        { text: 'primera / primer',   correct: false },
        { text: 'primero / primera',  correct: false }
      ],
      explanation: '"La primera ciudad" (ciudad = feminino → primera, sem apócope) + "la primera sede" (sede = feminino → primera). Ambas as lacunas são femininas! PRIMER = apenas masc.sing. As duas são PRIMERA.'
    },
    {
      prompt: '"El COI eligió una ___ ciudad para los próximos Juegos." (qualquer cidade)',
      options: [
        { text: 'cualquiera ciudad',  correct: false },
        { text: 'cualquier ciudad',   correct: true  },
        { text: 'cualesquiera ciudad', correct: false },
        { text: 'cualquieras ciudad', correct: false }
      ],
      explanation: '"Cualquier ciudad" ✓ — apócope antes de substantivo singular feminino. CUALQUIER = invariável para gênero no singular antes do substantivo. Qualquiera = após substantivo ou forma plena.'
    },
    {
      prompt: '"Los atletas duermen ___ horas antes da competición." (3/4 de hora)',
      options: [
        { text: 'ocho horas y tres cuartos de',  correct: false },
        { text: 'tres cuartos de',               correct: true  },
        { text: 'tres quartos de',               correct: false },
        { text: 'tres cuártos de',               correct: false }
      ],
      explanation: '"Tres cuartos de hora" = 3/4 hora = 45 minutos. "Cuartos" = quartos/partes. Sem acento: cuartos (não "cuártos"). O fracionário em espanhol usa o ordinal como denominador: 1/4=cuarto, 3/4=tres cuartos.'
    },
    {
      prompt: '"El estadio tiene una ___ de asientos reservados." (≈10.000 asientos)',
      options: [
        { text: 'docena',   correct: false },
        { text: 'decena',   correct: false },
        { text: 'centena',  correct: false },
        { text: 'ninguna das anteriores — se usaria "diez mil"', correct: true  }
      ],
      explanation: 'Para números como 10.000, usa-se o número cardinal: "diez mil asientos". Os coletivos (docena=12, decena≈10, centena≈100) são para grupos pequenos e geralmente informais/aproximados. Para dados precisos de estádio, usa-se o cardinal.'
    },
    {
      prompt: '"El ciclista que ___ (SEGUIR) su ritmo sin parar ___ (CONSEGUIR) la victoria." (3ª sing.)',
      options: [
        { text: 'sigue / consigue',    correct: true  },
        { text: 'sigua / consigua',    correct: false },
        { text: 'segue / consege',     correct: false },
        { text: 'sigue / consegue',    correct: false }
      ],
      explanation: '"Sigue" (SEGUIR, e→i ✓) + "consigue" (CONSEGUIR, e→i ✓). Dois verbos com e→i na mesma frase! "Segue/consege" = formas portuguesas. "Sigua/consigua" = subjuntivo.'
    },
    {
      prompt: '"La carrera de ___ metros fue ganada por una ___ atleta que prefirió dormir poco." Completa (100 + uma grande atleta).',
      options: [
        { text: 'cien / gran',      correct: true  },
        { text: 'ciento / grande',  correct: false },
        { text: 'cien / grande',    correct: false },
        { text: 'ciento / gran',    correct: false }
      ],
      explanation: '"Cien metros" (cien + substantivo ✓) + "una gran atleta" (gran + sing.fem. ✓). "Ciento" seria errado (só em composição: "ciento veinte"). "Grande" antes do substantivo = apócope "gran".'
    },
    {
      prompt: '"En los Juegos de Atenas, los atletas sintieron la emoción por primera vez." O verbo "sintieron" está correto?',
      options: [
        { text: 'Não — deveria ser "sientieron" (e→ie no passado)',  correct: false },
        { text: 'Sim — pretérito de SENTIR tem mudança e→i (sintieron, não sientieron)', correct: true  },
        { text: 'Não — deveria ser "sentieron" (sem mudança)',        correct: false },
        { text: 'Não — deveria ser "sienten" (presente)',             correct: false }
      ],
      explanation: '"Sintieron" ✓ — no pretérito perfeito de SENTIR, a mudança é e→I (não e→IE): sint-ieron. Este é um conceito avançado: verbos -IR com e→ie no presente mudam para e→i no pretérito (3ª pessoa). Muito bem se você sabia isso!'
    },
    {
      prompt: '"El entrenador pide mucho también siempre." Análise ortográfica:',
      options: [
        { text: '"También" está incorreto — deveria ser "tanbién"',           correct: false },
        { text: '"Siempre" está incorreto — deveria ser "sienpre"',           correct: false },
        { text: 'Toda a ortografia está correta: también (M+B), siempre (M+P)', correct: true  },
        { text: '"Mucho" está errado — deveria ser "muy"',                    correct: false }
      ],
      explanation: '"También" (M+B ✓) + "siempre" (M+P ✓) — ambas as ortografias corretas! Integração Unidad 2 + Unidad 3. "Mucho" antes do verbo = correto (mucho como advérbio). A frase tem ortografia perfeita.'
    },
    {
      prompt: '"Los atletas de ___ país pueden participar." Completa.',
      options: [
        { text: 'cualesquiera',  correct: false },
        { text: 'cualquier',     correct: true  },
        { text: 'cualquiera',    correct: false },
        { text: 'toda',          correct: false }
      ],
      explanation: '"De cualquier país" ✓ — país = substantivo masculino singular → cualquier. CUALQUIER antes de singular (qualquer gênero) = apócope universal. "De cualquier país" = de qualquer país.'
    },
    {
      prompt: 'EXAME FINAL INTEGRADO: "Los grandes atletas siempre sienten que prefieren ganar el primer puesto aunque duerman poco." Quantos conceitos da Unidades 2 e 3 estão corretos?',
      options: [
        { text: 'Dois',   correct: false },
        { text: 'Quatro', correct: false },
        { text: 'Seis',   correct: true  },
        { text: 'Oito',   correct: false }
      ],
      explanation: 'SEIS conceitos corretos: (1) "grandes" (plural sem apócope ✓), (2) "siempre" (M+P ortografia ✓), (3) "sienten" (e→ie, 3ª plural ✓), (4) "prefieren" (e→ie, 3ª plural ✓), (5) "el primer puesto" (apócope masc.sing. ✓), (6) "duerman" (subjuntivo de dormir, o→ue ✓). Esta frase é a síntese de ambas as unidades!'
    }
  ],

  adaptiveReview: [
    {
      prompt: 'EXAME DIFÍCIL: "La decena de atletas que sigue el régimen del gran entrenador consigue mucho mejores resultados." Análise a frase.',
      options: [
        { text: 'Há erro: "decena" deveria ser "docena"',                                                    correct: false },
        { text: 'Há erro: "gran" deveria ser "grande" antes de entrenador',                                  correct: false },
        { text: 'Há erro: "mucho mejores" deveria ser "muy mejores"',                                        correct: false },
        { text: 'A frase está correta: decena≈10 (✓), gran entrenador (apócope masc.sing. ✓), mucho mejores (PAMM plural ✓)', correct: true  }
      ],
      explanation: 'Análise: "decena" ≈10 atletas (correto, não é docena=12 exatos), "gran entrenador" (apócope masc.sing. ✓), "mucho mejores" (PAMM: mejores = plural de mejor, ainda comparativo → mucho ✓). FRASE PERFEITA — integra 3 conceitos de ambas as unidades!'
    },
    {
      prompt: 'EXAME DIFÍCIL: Crie mentalmente a frase mais complexa possível com elementos das Unidades 2 e 3. Qual das opções é gramaticalmente a mais rica e correta?',
      options: [
        { text: '"Los atletas sienten hambre"',                                                                                          correct: false },
        { text: '"El gran primer campeón siempre duerme bien, come mucho y siente que puede conseguir cualquier medalla"',              correct: true  },
        { text: '"Los atletas también tiene mucho hambre y siente cansancio"',                                                          correct: false },
        { text: '"Cualquieras atletas pueden seguir corriendo muy mucho"',                                                              correct: false }
      ],
      explanation: '"El gran primer campeón" (dois apócopos ✓) + "siempre" (M+P ✓) + "duerme bien" (DORMIR o→ue ✓) + "come mucho" (MUCHO+verbo ✓) + "siente" (SENTIR e→ie ✓) + "conseguir" (CONSEGUIR e→i implícito ✓) + "cualquier medalla" (apócope sing. ✓). SETE conceitos em uma frase! Linguística olímpica!'
    }
  ],

  rewards: { xp: 300, gems: 35, badge: '🎓 Graduado en Español 7º Año' },
  completionMessage: '¡ENHORABUENA CAMPEÓN! Completaste las Unidades 2 Y 3 de Espanhol! Gastronomia, Olimpíadas, ortografia, verbos irregulares — dominaste tudo! ¡Eres un verdadero campeón del idioma español! 🥇🏅',
  nextStage: null
};

window.ESP_DEP_SFINAL = ESP_DEP_SFINAL;
