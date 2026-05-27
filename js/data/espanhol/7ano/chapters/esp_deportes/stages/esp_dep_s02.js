/**
 * ESP DEPORTES STAGE 02 — Vocabulario Deportivo
 * BNCC: EF07LE04, EF07LE06 | Tópico 6 — Unidad 3
 * balonmano, natación, voleibol, ciclismo, mountain bike, atletismo
 * R/RR regras básicas, apócope buen/gran
 */

const ESP_DEP_S02 = {
  id: 'esp_dep_s02',
  title: 'Vocabulario Deportivo',
  icon: '⚽',
  difficulty: 'easy',
  estimatedTime: 13,

  learningObjectives: [
    'Nomear esportes olímpicos em espanhol',
    'Identificar posições e equipamentos esportivos',
    'Usar apócope (buen, gran) corretamente',
    'Compreender textos sobre competições esportivas',
    'Distinguir vocabulário esportivo hispano-americano'
  ],

  summary: {
    readTime: 4,
    content: [
      {
        icon: '⚽',
        title: 'Esportes olímpicos em espanhol',
        text: 'Vocabulário essencial dos esportes:\n\n🤾 ESPORTES COLETIVOS:\n• fútbol — futebol\n• balonmano — handebol\n• voleibol / vóley — vôlei\n• baloncesto / básquetbol — basquete\n• waterpolo — polo aquático\n• rugby — rúgbi\n\n🏊 ESPORTES AQUÁTICOS:\n• natación — natação\n• saltos de trampolín — saltos ornamentais\n• remo — remo\n• kayak — caiaque\n• vela — vela\n\n🚴 ESPORTES DE VELOCIDADE/RESISTÊNCIA:\n• ciclismo — ciclismo\n• mountain bike / BTT — mountain bike\n• atletismo — atletismo (corrida, salto, arremesso)\n• maratón — maratona\n• marcha atlética — caminhada atlética\n\n⚔️ ESPORTES DE COMBATE:\n• esgrima — esgrima\n• judo — judô\n• boxeo — boxe\n• lucha — luta livre\n• karate — karatê\n\n🔑 "Balonmano" (handebol) literalmente = "bola + mão". Muito descritivo!'
      },
      {
        icon: '🏟️',
        title: 'Equipamentos, posições e locais de prática',
        text: 'O vocabulário completo do atleta:\n\n⚽ EQUIPO / EQUIPAMENTO:\n• casco — capacete\n• raqueta — raquete\n• pelota / balón — bola (pelota = menor; balón = maior)\n• maillot — camisola/uniforme ciclista\n• gafas de natación — óculos de natação\n• calzado deportivo / zapatillas — tênis/calçado esportivo\n\n🏅 POSICIONES en equipos:\n• portero / guardameta — goleiro\n• delantero — atacante\n• defensa — zagueiro\n• medio — meio-campo\n• lateral — lateral\n\n🏟️ INSTALACIONES (locais):\n• estadio — estádio\n• piscina — piscina\n• pista de atletismo — pista de atletismo\n• velódromo — velódromo (para ciclismo)\n• cancha / pista — quadra\n• gimnasio — ginásio\n\n🔑 "Pelota" vs "balón": pelota é bola pequena (tênis, ping-pong). Balón é bola grande (fútbol, baloncesto). Mas coloquialmente "pelota" é usado para qualquer bola!'
      },
      {
        icon: '✂️',
        title: 'Apócope — quando palavras perdem letras!',
        text: 'Algumas palavras em espanhol "encurtam" antes de certos contextos:\n\n📏 APÓCOPE = supressão de letras/sílabas no final:\n\n1. BUENO → BUEN (antes de substantivo MASCULINO SINGULAR):\n   • un buen jugador (um bom jogador) ✓\n   • una buena jugadora (invariável no feminino)\n   • Buenos días / Buenas tardes (plural = sem apócope)\n\n2. GRANDE → GRAN (antes de QUALQUER substantivo singular):\n   • un gran deportista (masculino) ✓\n   • una gran atleta (feminino) ✓\n   • grandes campeones (plural = sem apócope)\n\n3. PRIMERO → PRIMER (antes de substantivo MASCULINO SINGULAR):\n   • el primer puesto (o primeiro lugar) ✓\n   • la primera medalla (feminino = sem apócope)\n\n4. TERCERO → TERCER (antes de substantivo MASCULINO SINGULAR):\n   • el tercer set (o terceiro set) ✓\n   • la tercera rodada (feminino = sem apócope)\n\n🔑 Regra geral do apócope: ANTES do substantivo + geralmente MASCULINO SINGULAR = forma reduzida.'
      }
    ],

    flashcards: [
      { q: '¿Cómo se dice "handebol" en español?',             a: 'Balonmano — literalmente "bola de mão".' },
      { q: '¿Cómo se dice "goleiro" en español?',              a: 'Portero o guardameta.' },
      { q: 'Apócope de BUENO antes de substantivo masc.sing.', a: 'BUEN: un buen jugador. Feminino: una buena jugadora (sem apócope).' },
      { q: 'Apócope de GRANDE antes de qualquer sing.',         a: 'GRAN: un gran campeón / una gran atleta. Plural: grandes campeones.' },
      { q: '¿Qué es la "piscina" en el contexto deportivo?',   a: 'Piscina — local de natación, waterpolo, etc.' },
      { q: 'Diferencia entre "pelota" y "balón"',              a: 'Pelota = bola pequena (tenis). Balón = bola grande (fútbol, baloncesto).' },
      { q: '¿Cómo se dice "pista de atletismo" en español?',   a: '"Pista de atletismo" — igual ao português! Também: cancha/pista para quadras.' },
      { q: '¿Cuál es el apócope de PRIMERO?',                  a: 'PRIMER antes de substantivo masculino singular: el primer puesto.' }
    ],

    mnemonics: [
      { trigger: 'Apócope BUEN',       memory: '"BUEN = antes de HOMEM SOLTEIRO (masc.sing.): un buen atleta. BUENA para o feminino."' },
      { trigger: 'Apócope GRAN',       memory: '"GRAN = unissex singular: gran atleta, gran jugadora. Plural = grandes (recupera o E)."' },
      { trigger: 'Balonmano',          memory: '"BALÓN (bola) + MANO (mão) = bola de mão. Em handebol joga-se com a mão — nome perfeito!"' },
      { trigger: 'Portero vs delantero', memory: '"PORTEro = PORTA (goal). DELANTEro = DELANTE (à frente, atacante)."' }
    ],

    miniReview: [
      { q: 'Quando se usa GRAN e quando se usa GRANDE?',
        a: 'GRAN = apócope usado ANTES de substantivo singular (masc. ou fem.). GRANDE = após o substantivo ou antes de plural: "un gran hombre" / "un hombre grande" / "grandes hombres".' },
      { q: 'Por que "un buena atleta" está errado?',
        a: '"Buena" é feminino, mas o problema é a discordância: "un" é artigo masculino; "atleta" pode ser masc. ou fem. Se o atleta é homem: "un buen atleta" (apócope). Se for mulher: "una buena atleta" (sem apócope, feminino).' }
    ]
  },

  warmup: [
    {
      prompt: '¿Cómo se dice "natação" en español?',
      options: [
        { text: 'nadación', correct: false },
        { text: 'natación', correct: true  },
        { text: 'nataçión', correct: false },
        { text: 'nadación', correct: false }
      ],
      explanation: 'NATACIÓN = natação. Com acento em -ción. Em espanhol, a terminação portuguesa -ção = -ción. Nadar → natación. Ação → acción. Emoção → emoción.'
    },
    {
      prompt: '"Es un ___ atleta." Completa com a forma correta de BUENO.',
      options: [
        { text: 'bueno', correct: false },
        { text: 'buena', correct: false },
        { text: 'buen',  correct: true  },
        { text: 'buenos', correct: false }
      ],
      explanation: 'BUEN = apócope de bueno, usado antes de substantivo masculino singular. "un buen atleta" — a palavra "atleta" é masculina aqui (artigo "un"). Bueno seria colocado APÓS o substantivo: "un atleta bueno".'
    }
  ],

  guidedPractice: [
    {
      prompt: '🔍 DICA: GRAN funciona para masculino E feminino singular.\n\n"Es una ___ deportista." Completa com GRANDE/GRAN.',
      options: [
        { text: 'grande',  correct: false },
        { text: 'gran',    correct: true  },
        { text: 'grandes', correct: false },
        { text: 'granda',  correct: false }
      ],
      explanation: '"Una gran deportista" ✓ — GRAN funciona para feminino singular também! Grande se colocaria APÓS: "una deportista grande" (ou com diferentes nuances de significado). GRAN = apócope universal para qualquer singular antes do substantivo.'
    },
    {
      prompt: '🔍 DICA: "Portero" vem de "puerta" (porta/gol).\n\nQual posição é equivalente ao "zagueiro" em espanhol?',
      options: [
        { text: 'delantero', correct: false },
        { text: 'portero',   correct: false },
        { text: 'defensa',   correct: true  },
        { text: 'lateral',   correct: false }
      ],
      explanation: 'DEFENSA = zagueiro/defensor. "De-fensa" = função de defender. Delantero = atacante (delante = à frente). Portero = goleiro (puerta = porta/gol). Lateral = lateral (posição nas laterais do campo).'
    }
  ],

  questions: [
    {
      prompt: '¿Cuál es la traducción correcta de "handebol"?',
      options: [
        { text: 'baloncesto', correct: false },
        { text: 'balonmano',  correct: true  },
        { text: 'waterpolo',  correct: false },
        { text: 'voleibol',   correct: false }
      ],
      explanation: 'BALONMANO = handebol. Literalmente: balón (bola) + mano (mão). Baloncesto = basquete (balón + cesta/cesto). Waterpolo = polo aquático. Voleibol = vôlei.'
    },
    {
      prompt: '"El ciclista llevaba un ___ casco." Completa.',
      options: [
        { text: 'buena',  correct: false },
        { text: 'gran',   correct: true  },
        { text: 'grande', correct: false },
        { text: 'buenos', correct: false }
      ],
      explanation: '"Un gran casco" ✓ — casco (capacete) é substantivo masculino singular. GRAN = apócope antes de substantivo singular. "Grande" seria possível mas iria DEPOIS: "un casco grande" (com sentido diferente — grande de tamanho, não de qualidade).'
    },
    {
      prompt: '¿Dónde se practica la natación y el waterpolo?',
      options: [
        { text: 'En el estadio',          correct: false },
        { text: 'En el velódromo',        correct: false },
        { text: 'En la piscina',          correct: true  },
        { text: 'En la cancha',           correct: false }
      ],
      explanation: 'La PISCINA = local para natación, waterpolo, saltos ornamentais. Estadio = fútbol, atletismo (pista). Velódromo = ciclismo de pista. Cancha = quadra (vôlei, basquete, tênis).'
    },
    {
      prompt: '"Ella es la ___ tenista del torneo." Completa com PRIMERO.',
      options: [
        { text: 'primer',   correct: false },
        { text: 'primero',  correct: false },
        { text: 'primera',  correct: true  },
        { text: 'primeras', correct: false }
      ],
      explanation: '"Ella" → feminino → PRIMERA. O apócope PRIMER só ocorre antes de substantivo MASCULINO singular: "el primer puesto". Para feminino, mantém-se a forma plena: "la primera tenista". Nunca apócope no feminino!'
    },
    {
      prompt: '¿Cuál es la diferencia entre "pelota" y "balón"?',
      options: [
        { text: 'São sinônimos perfeitos, sem diferença',                         correct: false },
        { text: 'Pelota = bola pequena (tenis); balón = bola grande (fútbol)',   correct: true  },
        { text: 'Pelota é para esportes aquáticos; balón para esportes terrestres', correct: false },
        { text: 'Balón é espanhol europeu; pelota é sul-americano',               correct: false }
      ],
      explanation: 'PELOTA = bola pequena e dura (tênis, basebol, padel). BALÓN = bola grande inflável (fútbol, baloncesto, voleibol). Porém, coloquialmente "pelota" é usado para qualquer bola. "Pelota vasca" = jogo tradicional basco com bola pequena.'
    },
    {
      prompt: '"El ___ atleta del equipo ganó la medalla de oro." Completa com BUENO.',
      options: [
        { text: 'buena',  correct: false },
        { text: 'bueno',  correct: false },
        { text: 'buen',   correct: true  },
        { text: 'buenos', correct: false }
      ],
      explanation: 'BUEN atleta = apócope de BUENO antes de substantivo masculino singular. "El buen atleta" ✓. Se fosse feminino: "la buena atleta". Se fosse plural: "los buenos atletas" (sem apócope). O apócope BUEN só opera em masculino singular antes do substantivo!'
    },
    {
      prompt: '¿Cuál deporte se practica en un "velódromo"?',
      options: [
        { text: 'Natación',         correct: false },
        { text: 'Ciclismo de pista', correct: true  },
        { text: 'Atletismo',        correct: false },
        { text: 'Judo',             correct: false }
      ],
      explanation: 'VELÓDROMO (de velocidade/veloz + dromo = pista) = local para ciclismo de pista (ciclismo indoor em pista oval inclinada). O ciclismo de estrada (mountain bike, pedaladas em circuito urbano) ocorre em pistas abertas.'
    },
    {
      prompt: '¿Cómo se llama el uniforme especial del ciclista?',
      options: [
        { text: 'casco',       correct: false },
        { text: 'gafas',       correct: false },
        { text: 'maillot',     correct: true  },
        { text: 'zapatillas',  correct: false }
      ],
      explanation: 'MAILLOT = camisola/uniforme do ciclista (ou de natação, triathlon). Palavra francesa incorporada ao espanhol. Casco = capacete. Gafas = óculos. Zapatillas = tênis/calçado esportivo.'
    },
    {
      prompt: '"Los ___ atletas del mundo se reunieron en los Juegos." Completa.',
      options: [
        { text: 'gran',     correct: false },
        { text: 'grandes',  correct: true  },
        { text: 'gran',     correct: false },
        { text: 'grandos',  correct: false }
      ],
      explanation: '"Los grandes atletas" ✓ — PLURAL = não usa apócope. Grandes (não gran). O apócope GRAN só funciona em SINGULAR. No plural, a forma completa "grandes" é obrigatória. "Grandos" não existe!'
    },
    {
      prompt: 'Uma comentarista diz: "Fue el ___ gol del campeonato." (TERCERO)',
      options: [
        { text: 'tercera',  correct: false },
        { text: 'tercero',  correct: false },
        { text: 'tercer',   correct: true  },
        { text: 'terce',    correct: false }
      ],
      explanation: '"El tercer gol" ✓ — apócope de tercero antes de substantivo MASCULINO singular. "Gol" é masculino. Tercer = apócope igual a primer. "La tercera jornada" (feminino = sem apócope). Tercero/tercera após o substantivo não tem apócope.'
    }
  ],

  adaptiveReview: [
    {
      prompt: 'DIFÍCIL: "Es una gran balonmanista y su primer triunfo fue también su mejor resultado." Análise todos os apócopos e gramática.',
      options: [
        { text: 'Há dois erros: gran deveria ser grande e primer deveria ser primera',         correct: false },
        { text: 'A frase está correta: gran (apócope fem.sing.), primer (masc.sing.), mejor (comparativo, sem apócope)', correct: false },
        { text: 'Há um erro: primer deveria ser primera (triunfo... espera, é masculino!)',    correct: false },
        { text: 'A frase está 100% correta: gran (apócope universal sing.), primer triunfo (masc.sing.), mejor (superlativo sem apócope)', correct: true  }
      ],
      explanation: 'Análise: (1) "gran balonmanista" ✓ — GRAN apócope universal antes de singular feminino; (2) "primer triunfo" ✓ — PRIMER apócope antes de masculino singular; (3) "mejor resultado" ✓ — mejor é comparativo, não sofre apócope. A frase é 100% correta!'
    },
    {
      prompt: 'DIFÍCIL: Por que "balonmano" é um nome mais descritivo que "handball" (inglês)?',
      options: [
        { text: 'Porque "handball" não significa nada em inglês',                                   correct: false },
        { text: 'Porque "balonmano" usa duas palavras comuns (balón+mano) que explicam o esporte — a composição é transparente', correct: true  },
        { text: 'Porque "handball" é mais antigo que "balonmano"',                                  correct: false },
        { text: 'Porque o espanhol é mais preciso que o inglês',                                    correct: false }
      ],
      explanation: '"Balonmano" é uma PALAVRA COMPOSTA transparente: qualquer falante de espanhol entende que é um jogo com bola (balón) com a mão (mano). "Handball" em inglês (hand=mão + ball=bola) é igualmente transparente para falantes de inglês. A diferença é que em espanhol usou vocabulário nativo; em inglês/alemão o esporte se chamava "Torball" inicialmente. O espanhol fez um neologismo descritivo — isso é linguística rica!'
    }
  ],

  rewards: { xp: 120, gems: 12, badge: '⚽ Atleta Poliglota' },
  completionMessage: '¡Gol! Você domina o vocabulário esportivo em espanhol. De balonmano a mountain bike — ¡eres un atleta del idioma!',
  nextStage: 'esp_dep_s03'
};

window.ESP_DEP_S02 = ESP_DEP_S02;
