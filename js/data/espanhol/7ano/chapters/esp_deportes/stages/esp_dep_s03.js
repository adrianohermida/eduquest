/**
 * ESP DEPORTES STAGE 03 — Numerales
 * BNCC: EF07LE04, EF07LP07 | Tópico 7 — Unidad 3
 * Ordinais, fracionários, multiplicativos, coletivos, cualquier apócope
 */

const ESP_DEP_S03 = {
  id: 'esp_dep_s03',
  title: 'Numerales',
  icon: '🔢',
  difficulty: 'medium',
  estimatedTime: 14,

  learningObjectives: [
    'Usar numerais ordinais corretamente (1º ao 10º)',
    'Conhecer fracionários (1/2, 1/3, 1/4) em espanhol',
    'Usar multiplicativos (doble, triple, cuádruple)',
    'Aplicar apócope de cualquier antes de substantivo singular',
    'Entender coletivos numéricos (docena, decena, siglo, lustro)'
  ],

  summary: {
    readTime: 5,
    content: [
      {
        icon: '🥇',
        title: 'Ordinais — do 1º ao 10º e além',
        text: 'Os números de ordem em espanhol:\n\n1º → primero/a → PRIMER (apócope masc.sing.)\n2º → segundo/a\n3º → tercero/a → TERCER (apócope masc.sing.)\n4º → cuarto/a\n5º → quinto/a\n6º → sexto/a\n7º → séptimo/a\n8º → octavo/a\n9º → noveno/a\n10º → décimo/a\n\n⚠️ APÓS O 10º — usam-se cardinais:\n• el puesto 11 (não "undécimo" em contexto cotidiano)\n• la posición 20 (não "vigésimo" no coloquial)\n\n🎯 APÓCOPE em ordinais:\n• PRIMERO → PRIMER antes de masc.sing.: el primer puesto\n• TERCERO → TERCER antes de masc.sing.: el tercer tiempo\n• Feminino nunca tem apócope: la primera vuelta, la tercera etapa\n\n🔑 A partir do 11, usa-se o CARDINAL em linguagem cotidiana. Mas "undécimo", "duodécimo" existem em contextos formais (jurídicos, eclesiásticos).'
      },
      {
        icon: '½',
        title: 'Fracionários e multiplicativos',
        text: 'Frações e multiplicações em espanhol:\n\n🔢 FRACIONÁRIOS (frações):\n• 1/2 → medio/a ou mitad (f.): medio kilo / la mitad del tiempo\n• 1/3 → tercio (m.): un tercio de los participantes\n• 1/4 → cuarto (m.): un cuarto de hora (= 15 minutos!)\n• 1/5 → quinto | 1/10 → décimo\n\n⚠️ MEDIO vs MITAD:\n• MEDIO + substantivo (adjetivo): medio litro, media copa\n• MITAD + de + substantivo: la mitad de los atletas\n\n✖️ MULTIPLICATIVOS:\n• 2× → doble / duplo: el doble de distancia\n• 3× → triple: el triple de velocidad\n• 4× → cuádruple: el cuádruple de esfuerzo\n• 5× → quíntuple\n\n📦 COLETIVOS NUMÉRICOS:\n• decena = grupo de ~10: "una decena de atletas" (uns 10)\n• docena = 12 exatos: "una docena de medallas"\n• veintena = ~20 | treintena = ~30\n• centena = ~100\n• siglo = 100 años (século)\n• lustro = 5 años (lustro)\n• milenio = 1000 años (milênio)\n\n🔑 DOCENA ≠ DECENA: docena = 12 (como dúzia). Decena = dezena (~10). Não confunda!'
      },
      {
        icon: '🎯',
        title: 'CUALQUIER — apócope especial',
        text: 'CUALQUIER é um caso especial de apócope:\n\nCUALQUIERA (forma completa) → CUALQUIER (apócope antes de substantivo singular)\n\n✅ CUALQUIER funciona para MASCULINO e FEMININO singular:\n• cualquier atleta (masc.) ✓\n• cualquier deportista (fem.) ✓\n• cualquier deporte ✓\n• cualquier hora ✓\n\n❌ Com PLURAL usa-se CUALESQUIERA:\n• cualesquiera atletas (plural)\n\n🎯 Uso de CUALQUIER:\n• "Puede ganar cualquier equipo." (Qualquer time pode ganhar.)\n• "En cualquier momento." (Em qualquer momento.)\n• "No es cualquier cosa." (Não é qualquer coisa.)\n\n⚠️ CUALQUIERA (após substantivo):\n• "Un atleta cualquiera" = um atleta qualquer (comum, não especial)\n• "Un atleta cualquier" = ERRADO (apócope só antes do substantivo!)\n\n🔑 CUALQUIER = qualquer (invariável para gênero no singular, antes do substantivo). CUALQUIERA = após substantivo ou no singular com sentido de "um qualquer".'
      }
    ],

    flashcards: [
      { q: '¿Cómo se escribe "3º" en español?',                  a: 'Tercero/a → TERCER (apócope masc.sing.): el tercer puesto.' },
      { q: '¿Qué significa "docena"?',                           a: 'Grupo de 12 (dúzia). Docena ≠ Decena (≈10).' },
      { q: '¿Qué significa "lustro"?',                           a: 'Grupo de 5 años (lustro = 5 anos).' },
      { q: '¿Cómo se dice "o dobro" en español?',               a: '"El doble" — multiplicativo 2×.' },
      { q: 'CUALQUIER funciona para masc. e fem.?',              a: 'Sim! Cualquier + substantivo singular (qualquer gênero): cualquier atleta, cualquier hora.' },
      { q: '¿Qué es "un cuarto de hora"?',                      a: '15 minutos (1/4 de hora = cuarto).' },
      { q: '¿Cuándo se usa cardinal no lugar de ordinal?',       a: 'A partir do 11º, no cotidiano: "el puesto 11", "la posición 20".' },
      { q: 'MEDIO vs MITAD — diferença',                        a: 'MEDIO + substantivo (adj.): medio kilo. MITAD + de: la mitad de los atletas.' }
    ],

    mnemonics: [
      { trigger: 'PRIMER/TERCER apócope',    memory: '"1º e 3º cortam o O final antes de masc.sing.: priMEro→priMER, terCEro→terCER. Feminino nunca corta: primera, tercera."' },
      { trigger: 'Docena vs Decena',          memory: '"DOCena = DOze (12). DECena = DEZ (~10). D-O-C = doze; D-E-C = dez."' },
      { trigger: 'CUALQUIER = qualquer',      memory: '"CUAL-QUIER: qual? qualQUIER = qualquer. Apócope antes do substantivo, serve para masc. e fem."' },
      { trigger: 'Lustro = 5 anos',           memory: '"LUStro = LUZ por 5 anos. Um lustro olímpico seria mais que uma olimpíada (4 anos)."' }
    ],

    miniReview: [
      { q: 'Qual a diferença entre "docena" e "decena"?',
        a: '"Docena" = exatamente 12 (como dúzia): "una docena de huevos". "Decena" = grupo aproximado de 10: "una decena de atletas" (uns 10 atletas). Docena é exato; decena é aproximado.' },
      { q: 'Por que "en cualquier partido" está correto mas "en un partido cualquier" está errado?',
        a: '"Cualquier" é apócope de cualquiera — só ocorre ANTES do substantivo. Depois do substantivo, a forma plena é obrigatória: "un partido cualquiera" (não "cualquier"). Qualquer é pré-nominal em espanhol como em português mas a forma muda!' }
    ]
  },

  warmup: [
    {
      prompt: '¿Cómo se dice "3º lugar" en español (masculino)?',
      options: [
        { text: 'Tercero lugar',  correct: false },
        { text: 'Tercer lugar',   correct: true  },
        { text: 'Tercera lugar',  correct: false },
        { text: 'Tres lugar',     correct: false }
      ],
      explanation: 'TERCER lugar = apócope de tercero antes de substantivo masculino singular. "El tercer lugar en el podio" = o terceiro lugar no pódio. Feminino: "la tercera posición" (sem apócope).'
    },
    {
      prompt: '¿Qué significa "el doble de velocidad"?',
      options: [
        { text: 'A metade da velocidade',   correct: false },
        { text: 'O dobro da velocidade',    correct: true  },
        { text: 'O triplo da velocidade',   correct: false },
        { text: 'A décima parte',           correct: false }
      ],
      explanation: '"El doble" = o dobro (2×). "El triple" = o triplo (3×). "El cuádruple" = o quádruplo (4×). "La mitad" = a metade (1/2).'
    }
  ],

  guidedPractice: [
    {
      prompt: '🔍 DICA: Docena = 12 exatos | Decena = ≈10.\n\n"El entrenador convocó una ___ de atletas para la prueba." (≈10 atletas)',
      options: [
        { text: 'docena',   correct: false },
        { text: 'decena',   correct: true  },
        { text: 'docenas',  correct: false },
        { text: 'decenas',  correct: false }
      ],
      explanation: '"Una decena de atletas" = uns 10 atletas (aproximação). "Una docena" seria exatamente 12. O contexto diz "≈10" → decena. Esta distinção é importante em textos esportivos!'
    },
    {
      prompt: '🔍 DICA: CUALQUIER antes do substantivo, qualquer gênero.\n\n"___ deportista puede participar en esta competición."',
      options: [
        { text: 'Cualesquiera', correct: false },
        { text: 'Cualquiera',   correct: false },
        { text: 'Cualquier',    correct: true  },
        { text: 'Cualquiero',   correct: false }
      ],
      explanation: '"Cualquier deportista" = qualquer desportista. CUALQUIER (apócope) antes de substantivo singular — masculino ou feminino. "Cualesquiera" seria para o plural. "Cualquiera" seria após o substantivo: "un deportista cualquiera".'
    }
  ],

  questions: [
    {
      prompt: '"Ganó el ___ puesto en el maratón." (PRIMERO, masculino)',
      options: [
        { text: 'primera', correct: false },
        { text: 'primero', correct: false },
        { text: 'primer',  correct: true  },
        { text: 'uno',     correct: false }
      ],
      explanation: 'PRIMER puesto = apócope de primero antes de masc.sing. "Puesto" = posto/posição, masculino. "El primer puesto" = o 1º lugar. Não confunda com "la primera vuelta" (feminino = sem apócope).'
    },
    {
      prompt: '¿Cuántos años tiene un "lustro"?',
      options: [
        { text: '3 años',    correct: false },
        { text: '5 años',    correct: true  },
        { text: '10 años',   correct: false },
        { text: '100 años',  correct: false }
      ],
      explanation: 'LUSTRO = 5 anos. Siglo = 100 anos (século). Decenio = 10 anos (década). Milenio = 1000 anos. O lustro é usado em contextos formais: "en el último lustro" = nos últimos 5 anos.'
    },
    {
      prompt: '"La atleta corrió ___ distancia que su rival." (O DOBRO)',
      options: [
        { text: 'la mitad de',  correct: false },
        { text: 'el triple de', correct: false },
        { text: 'el doble de',  correct: true  },
        { text: 'el décimo de', correct: false }
      ],
      explanation: '"El doble de distancia" = o dobro de distância (2×). "El doble de" é a estrutura: multiplicativo + DE. "Corrió el doble de distancia" = correu duas vezes a distância do rival.'
    },
    {
      prompt: '"___ hora pode ser decisiva na competição."',
      options: [
        { text: 'Cualesquiera', correct: false },
        { text: 'Cualquiera',   correct: false },
        { text: 'Cualquier',    correct: true  },
        { text: 'Cualquiero',   correct: false }
      ],
      explanation: '"Cualquier hora" ✓ — apócope antes de substantivo feminino singular. CUALQUIER funciona para masculino E feminino no singular. "Hora" = feminino, mas qualquier não muda!'
    },
    {
      prompt: '¿Cómo se dice "a metade do tempo" en español?',
      options: [
        { text: 'la mitad del tiempo',  correct: true  },
        { text: 'medio del tiempo',     correct: false },
        { text: 'la media del tiempo',  correct: false },
        { text: 'el medio de tiempo',   correct: false }
      ],
      explanation: '"La mitad del tiempo" ✓ — MITAD + de + artigo + substantivo. MEDIO é adjetivo: "medio tiempo" (meio-tempo, sem artigo e sem "de"). La mitad del tiempo = a metade do tempo total.'
    },
    {
      prompt: '"El equipo tiene una ___ de jugadores disponibles." (≈12 jugadores)',
      options: [
        { text: 'decena', correct: false },
        { text: 'docena', correct: true  },
        { text: 'lustro', correct: false },
        { text: 'siglo',  correct: false }
      ],
      explanation: '"Una docena de jugadores" ≈ 12 jogadores. DOCENA = 12 exatos (como dúzia). Se fosse ≈10, seria "decena". Uma docena de jogadores é um número típico de um time de futebol + reservas imediatas!'
    },
    {
      prompt: '"El atleta terminó en el puesto ___." (posição 15, use cardinal)',
      options: [
        { text: 'décimoquinto',   correct: false },
        { text: 'quindécimo',     correct: false },
        { text: '15 / quince',    correct: true  },
        { text: 'undécimoquinto', correct: false }
      ],
      explanation: 'A partir do 11, usa-se o CARDINAL em linguagem cotidiana: "el puesto 15" ou "el puesto quince". "Décimoquinto" existe mas é muito formal/literário. A RAE (Real Academia Española) aceita ambos, mas no cotidiano usa-se o cardinal.'
    },
    {
      prompt: '"Un cuarto de hora antes del partido, los atletas calientan." ¿Qué son "un cuarto de hora"?',
      options: [
        { text: '30 minutos',  correct: false },
        { text: '45 minutos',  correct: false },
        { text: '15 minutos',  correct: true  },
        { text: '20 minutos',  correct: false }
      ],
      explanation: '"Un cuarto de hora" = 1/4 hora = 15 minutos. "Un tercio de hora" = 1/3 hora = 20 minutos. "Medio/Media hora" = 1/2 hora = 30 minutos. Fracionários de tempo são muito usados em conversações esportivas!'
    },
    {
      prompt: 'Cual oración usa "cualquier" INCORRETAMENTE?',
      options: [
        { text: '"Cualquier equipo puede ganar"',                       correct: false },
        { text: '"Pueden participar cualquier deportistas"',            correct: true  },
        { text: '"En cualquier momento puede ocurrir el gol"',          correct: false },
        { text: '"No es cualquier atleta, es una campeona olímpica"',  correct: false }
      ],
      explanation: '"cualquier deportistas" está ERRADO — plural exige CUALESQUIERA: "cualesquiera deportistas". As outras são corretas: "cualquier equipo" (masc.sing.), "cualquier momento" (masc.sing.), "cualquier atleta" (sing.). A última usa CUALQUIERA após substantivo.'
    },
    {
      prompt: '¿Cuántos años dura un "siglo"?',
      options: [
        { text: '10 años',    correct: false },
        { text: '50 años',    correct: false },
        { text: '100 años',   correct: true  },
        { text: '1000 años',  correct: false }
      ],
      explanation: 'SIGLO = 100 anos (século). Milenio = 1000 anos. Decenio/Década = 10 anos. Lustro = 5 anos. Siglo XXI = século XXI (ano 2001-2100). Os Jogos Olímpicos modernos existem há mais de um siglo!'
    }
  ],

  adaptiveReview: [
    {
      prompt: 'DIFÍCIL: "El equipo corrió el triple de distancia en la mitad del tiempo normal." Analisa os numerais.',
      options: [
        { text: 'Erro: "triple" deveria ser "tercio"',                             correct: false },
        { text: 'Correto: "triple" (3×) e "mitad" (1/2) usados adequadamente',   correct: true  },
        { text: 'Erro: "mitad del tiempo" deveria ser "medio tiempo"',            correct: false },
        { text: 'Erro: ambos os numerais estão incorretos',                        correct: false }
      ],
      explanation: '"El triple de distancia" = 3× a distância (multiplicativo correto). "La mitad del tiempo" = 1/2 do tempo normal (mitad + de + substantivo, correto). Se fosse "medio tiempo" teria sentido diferente (half-time do jogo, não metade do tempo). A frase está 100% correta!'
    },
    {
      prompt: 'DIFÍCIL: Por que em espanhol moderno se usa o cardinal (11, 20) no lugar do ordinal (undécimo, vigésimo) a partir do 11º?',
      options: [
        { text: 'Porque ordinais acima de 10 foram eliminados pela RAE em 1990',    correct: false },
        { text: 'Por simplificação: ordinais acima de 10 são complexos e pouco usados na fala cotidiana', correct: true  },
        { text: 'Porque o espanhol não tem ordinais acima de 10',                   correct: false },
        { text: 'Porque cardinais são mais precisos que ordinais',                  correct: false }
      ],
      explanation: 'Os ordinais acima de 10 existem em espanhol (undécimo, duodécimo, decimotercero...) mas são complexos para a fala cotidiana. A RAE aceita ambos, mas na prática "el puesto 11" é muito mais natural que "el undécimo puesto". É um processo natural de simplificação linguística — o idioma se adapta ao uso real!'
    }
  ],

  rewards: { xp: 130, gems: 13, badge: '🔢 Maestro de los Números' },
  completionMessage: '¡Perfecto! Primer, tercio, docena, cualquier — dominaste os numerais em espanhol! ¡Eres el número uno!',
  nextStage: 'esp_dep_s04'
};

window.ESP_DEP_S03 = ESP_DEP_S03;
