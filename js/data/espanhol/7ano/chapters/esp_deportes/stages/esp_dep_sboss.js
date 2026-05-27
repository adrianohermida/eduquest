/**
 * ESP DEPORTES BOSS — El Campeón Olímpico
 * BNCC: EF07LE01, EF07LE04, EF07LE06, EF07LE12, EF07LP07 | Unidad 3
 * Boss challenge: integração de todos os tópicos 5-9
 */

const ESP_DEP_SBOSS = {
  id: 'esp_dep_sboss',
  title: 'El Campeón Olímpico',
  icon: '🥇',
  difficulty: 'hard',
  estimatedTime: 18,
  isBoss: true,

  learningObjectives: [
    'Integrar vocabulário esportivo com gramática avançada',
    'Aplicar R/RR em textos esportivos autênticos',
    'Conjugar verbos irregulares 3ª conj. em diálogos esportivos',
    'Usar numerais ordinais, fracionários e multiplicativos',
    'Demonstrar domínio completo da Unidad 3'
  ],

  summary: {
    readTime: 3,
    content: [
      {
        icon: '🥇',
        title: '¡El Campeón Olímpico te desafía!',
        text: '¡Bienvenido a la final olímpica!\n\nO Campeão Olímpico domina TUDO da Unidad 3:\n• 🏛️ História olímpica: 1896 Atenas, COI/CON, desfile\n• ⚽ Vocabulário esportivo: balonmano, natación, portero\n• 🔢 Numerais: ordinais, fracionários, multiplicativos, cualquier\n• ✏️ R/RR ortografia: pares mínimos, honra, carretera\n• 🔄 Verbos 3ª conj.: sentir/pedir/dormir, nosotros regular\n\nAs questões desta batalha COMBINAM múltiplos tópicos.\nSó os verdadeiros campeões chegam até o fim sem erro!\n\n¡Vamos a por el oro! 🥇'
      },
      {
        icon: '📋',
        title: 'Revisão expressa — os 5 pilares da Unidad 3',
        text: '1️⃣ OLIMPÍADAS:\n   1896 Atenas | Coubertin | 5 aros=5 continentes\n   Grécia 1ª | Anfitrião último | COI global | CON nacional\n\n2️⃣ VOCABULÁRIO DEPORTIVO:\n   Balonmano=handebol | Portero=goleiro | Piscina=natação\n   Apócope: buen/mal/gran/primer/tercer + masc.sing.\n\n3️⃣ NUMERALES:\n   Ordinais: 1º-10º (después: cardinal)\n   Frações: medio/mitad, tercio, cuarto\n   Multiplicativos: doble/triple/cuádruple\n   Coletivos: docena=12, decena≈10, lustro=5a, siglo=100a\n   Cualquier = apócope universal sing.\n\n4️⃣ R/RR:\n   RR entre vogais | R inicial=forte | R após N/L/S=forte\n   Pares mínimos: pero/perro, caro/carro, cero/cerro\n   San vs Santo (exceção: Tomás, Domingo)\n\n5️⃣ VERBOS 3ª CONJ.:\n   e→ie: sentir, preferir | e→i: pedir, servir, seguir\n   o→ue: dormir, morir | Nosotros/vosotros: SEMPRE regular'
      }
    ],

    flashcards: [
      { q: 'Onde e quando: 1ª Olimpíada moderna?',             a: 'Atenas, 1896. Pierre de Coubertin (francês).' },
      { q: '"El ___ puesto fue para Brasil." (1º, masculino)', a: 'El PRIMER puesto — apócope.' },
      { q: 'DORMIR — forma ellos + forma nosotros',            a: 'ellos DUERMEN (o→ue) | nosotros DORMIMOS (regular).' },
      { q: 'Pares mínimos com R/RR',                           a: 'pero/perro, caro/carro, cero/cerro, ahora/ahorra.' },
      { q: 'e→i é exclusivo de qual conjugação?',              a: '3ª conjugação (-IR): pedir, servir, seguir.' },
      { q: 'Docena vs Decena',                                 a: 'Docena = 12 (dúzia) | Decena = ≈10 (dezena).' }
    ],

    mnemonics: [
      { trigger: 'Boss final',    memory: '"Campeão tem tudo: DOR-mir com UE, PED-ir com I, SENT-ir com IE — mas NÓS (nosotros) dormimos/pedimos/sentimos SEM mudança!"' }
    ],

    miniReview: [
      { q: 'Qual é o erro em: "Los atletas sienten mucho pero el entrenador no siente"?',
        a: 'Gramaticalmente está correto! "Sienten" (ellos, e→ie ✓) e "siente" (él, e→ie ✓). A frase está 100% correta. Análise cuidadosa antes de apontar erros!' }
    ]
  },

  warmup: [
    {
      prompt: '"El ___ maratón de la historia se corrió en Atenas 1896." Completa com ordinal GRAN.',
      options: [
        { text: 'grande primer',  correct: false },
        { text: 'gran primer',    correct: true  },
        { text: 'gran primera',   correct: false },
        { text: 'grande primero', correct: false }
      ],
      explanation: '"El gran primer maratón" ✓ — GRAN (apócope, masc.sing.) + PRIMER (apócope, masc.sing.). "Maratón" é masculino. Dois apócopos juntos na mesma frase!'
    },
    {
      prompt: '"Los atletas ___ descansar antes de la competición." (PREFERIR)',
      options: [
        { text: 'preferimos', correct: false },
        { text: 'prefieren',  correct: true  },
        { text: 'prefieres',  correct: false },
        { text: 'preferemos', correct: false }
      ],
      explanation: '"Los atletas prefieren" ✓ — ellos, PREFERIR e→ie (3ª plural). "Preferimos" = nosotros. "Preferemos" não existe. "Prefieren descansar" = preferem descansar antes da competição.'
    }
  ],

  guidedPractice: [
    {
      prompt: '🔍 DICA: Combina R/RR + vocabulário deportivo.\n\n"El perro del portero ____."  Identifica os erros na frase "El pero del portero corre al estadio".',
      options: [
        { text: 'Não há erros na frase',                               correct: false },
        { text: '"Pero" deveria ser "perro" (mas = cachorro confusão)', correct: true  },
        { text: '"Portero" está errado — deveria ser "delantero"',      correct: false },
        { text: '"Estadio" deveria ser "estadío" com acento',           correct: false }
      ],
      explanation: '"El pero del portero" — PERO = "mas/porém" (conjunção). Não faz sentido: o "porém" do goleiro não pode correr! Deveria ser "el PERRO del portero" (o cachorro do goleiro). Erro clássico de pares mínimos R/RR.'
    },
    {
      prompt: '🔍 DICA: Qual padrão segue SEGUIR?\n\n"El campeón ___ sus sueños olímpicos." (SEGUIR, 3ª sing.)',
      options: [
        { text: 'seguía',  correct: false },
        { text: 'sigue',   correct: true  },
        { text: 'sigua',   correct: false },
        { text: 'segue',   correct: false }
      ],
      explanation: '"El campeón sigue sus sueños" ✓ — SEGUIR: e→i (3ª singular → sigue). "Sigue sus sueños" = segue seus sonhos. Bela frase motivacional! "Seguía" = pretérito (outro tempo). "Segue" = português!'
    }
  ],

  questions: [
    {
      prompt: '"La carrera de ___ km fue ganada por ___ atleta." (100, "uma grande atleta")',
      options: [
        { text: 'cien / una gran',   correct: true  },
        { text: 'ciento / una gran', correct: false },
        { text: 'cien / una grande', correct: false },
        { text: 'ciento / una grande', correct: false }
      ],
      explanation: 'CIEN km (cien antes de substantivo) + UNA GRAN atleta (gran = apócope antes de sing.fem.). "Ciento km" seria errado (ciento só em composição: ciento veinte). "Grande" antes do substantivo = "gran" em apócope.'
    },
    {
      prompt: '"El primer nadador ___ la carrera en la ___ del tiempo récord." (TERMINAR / MITAD)',
      options: [
        { text: 'termina / mitad',       correct: true  },
        { text: 'termina / medio',       correct: false },
        { text: 'terminas / la mitad',   correct: false },
        { text: 'terminamos / mitad',    correct: false }
      ],
      explanation: '"Termina" (3ª sing., regular) + "la mitad del tiempo" (mitad + de + artigo = correto). "Medio tiempo" teria sentido diferente (intervalo do jogo). O nadador termina em metade do tempo recorde!'
    },
    {
      prompt: '"Los ___ atletas de la historia ___ (DORMIR) poco antes de ganar." ',
      options: [
        { text: 'grandes / dormían',   correct: false },
        { text: 'grandes / duermen',   correct: true  },
        { text: 'gran / duermen',      correct: false },
        { text: 'grandes / dormemos',  correct: false }
      ],
      explanation: '"Los grandes atletas" (plural → grandes, sem apócope) + "duermen" (ellos, DORMIR o→ue ✓). "Gran" seria para singular. "Dormían" = pretérito. "Dormemos" não existe!'
    },
    {
      prompt: '"El estadio de ___ Tomás alberga el torneo de balonmano." Qual apócope usar?',
      options: [
        { text: 'San Tomás',   correct: false },
        { text: 'Santo Tomás', correct: true  },
        { text: 'Santa Tomás', correct: false },
        { text: 'Sant Tomás',  correct: false }
      ],
      explanation: '"Santo Tomás" ✓ — exceção de SANTO: mantém a forma plena antes de nomes com TO-. "San Tomás" seria o erro (a exceção é exatamente Tomás e Domingo). Santo Domingo também mantém Santo.'
    },
    {
      prompt: '"El COI eligió ___ ciudad para los próximos Juegos." Completa com CUALQUIER.',
      options: [
        { text: 'cualesquiera',  correct: false },
        { text: 'cualquiera',    correct: false },
        { text: 'cualquier',     correct: true  },
        { text: 'cualquiero',    correct: false }
      ],
      explanation: '"Cualquier ciudad" ✓ — apócope antes de substantivo feminino singular. CUALQUIER = invariável para gênero no singular, antes do substantivo. "Ciudad" = feminino mas qualquier não muda!'
    },
    {
      prompt: '"Los atletas sienten que correr el doble de distancia los hace ___ mejores." Completa.',
      options: [
        { text: 'muy',    correct: false },
        { text: 'mucho',  correct: true  },
        { text: 'mucha',  correct: false },
        { text: 'muchos', correct: false }
      ],
      explanation: '"Mucho mejores" ✓ — PAMM (da Unidad 2, ainda válido!): "mejores" é comparativo → MUCHO. Bônus: "el doble de distancia" = multiplicativo correto (2×). A Unidad 3 se integra com a Unidad 2!'
    },
    {
      prompt: '"El honrado atleta pide respeto." Análise de "honrado" e "pide".',
      options: [
        { text: '"Honrado" tem H mudo; "pide" é irregular correto (e→i)',                        correct: true  },
        { text: '"Honrado" deveria ser "onrado"; "pide" deveria ser "pede" em espanhol',          correct: false },
        { text: '"Honrado" tem erro ortográfico; "pide" está correto',                             correct: false },
        { text: 'Ambas as palavras têm erros',                                                     correct: false }
      ],
      explanation: '"Honrado": H em espanhol é sempre MUDO — a palavra é ortograficamente correta. "Pide": PEDIR, e→i, 3ª singular ✓. A frase está 100% correta. Bônus: "honra" tem R após N = som forte!'
    },
    {
      prompt: '"Nosotros siempre ___ ganar, pero no siempre ___ el primer puesto." (PREFERIR / CONSEGUIR)',
      options: [
        { text: 'preferimos / conseguimos',  correct: true  },
        { text: 'preferemos / conseguemos',  correct: false },
        { text: 'preferimos / consiguemos',  correct: false },
        { text: 'prefiremos / conseguimos',  correct: false }
      ],
      explanation: '"Nosotros preferimos" (regular, sem mudança ✓) + "nosotros conseguimos" (CONSEGUIR, e→i, nosotros = regular ✓). Ambos nosotros preservam o radical! "Preferemos/consiguemos/prefiremos" são formas inexistentes.'
    },
    {
      prompt: '"El ___ puesto fue para la ___ gran atleta del campeonato." Identifica o erro.',
      options: [
        { text: '"primer" está errado — deveria ser "primero"',                                      correct: false },
        { text: '"la ___ gran atleta" — gran já está correto (apócope antes de sing.fem.)',           correct: false },
        { text: '"la gran atleta" está correto; "primer puesto" está correto',                        correct: false },
        { text: 'Não há erro — primer (masc.sing.) + gran (universal sing.) ambos corretos',          correct: true  }
      ],
      explanation: '"El primer puesto" (PRIMER + masc.sing. ✓) + "la gran atleta" (GRAN + sing.fem. ✓). Ambos os apócopos estão corretos! GRAN funciona para masculino E feminino. PRIMER só para masculino. Não há erro.'
    },
    {
      prompt: 'BOSS FINAL: Texto completo em espanhol correto. Qual alternativa?',
      options: [
        { text: '"Los atletas sienten el tercer día de competición como el más duro, pero siguen adelante"', correct: true  },
        { text: '"Los atletas sientmos el tercer día de competición como el más duro, pero seguemos adelante"', correct: false },
        { text: '"Los atletas sienten el tercero día de competición como el más duro, pero sigen adelante"', correct: false },
        { text: '"Los atletas sientan el tercer día de competición como el más duro, pero sigan adelante"', correct: false }
      ],
      explanation: '"Sienten" (e→ie, 3ª plural ✓) + "el tercer día" (apócope masc.sing. ✓) + "el más duro" (PAMM: más → mucho, mas aqui "el más" = superlativo, diferente de mucho más ✓) + "siguen" (SEGUIR, e→i, 3ª plural ✓). Quatro conceitos corretos na mesma frase!'
    }
  ],

  adaptiveReview: [
    {
      prompt: 'BOSS DIFÍCIL: "El gran primer campeón de balonmano prefirió honrar su país dormiendo poco." Análise COMPLETA — qual o status gramatical desta frase?',
      options: [
        { text: 'Há um erro: "gran primer" não pode ter dois apócopos juntos',                                     correct: false },
        { text: 'Há um erro: "prefirió" deveria ser "prefirió" (forma de pretérito, mas aqui está no passado = correto)', correct: false },
        { text: 'A frase está correta: gran+primer (dois apócopos ✓), prefirió (pretérito correto ✓), honrar (honra R após N ✓), dormiendo (gerúndio correto ✓)', correct: true  },
        { text: 'Há dois erros: "honrar" deveria ser "honrrar" e "dormiendo" deveria ser "duermiendo"',           correct: false }
      ],
      explanation: 'Análise completa: "gran primer campeón" (dois apócopos antes de masc.sing. ✓), "prefirió" (pretérito de PREFERIR ✓), "honrar" (R após N → som forte, ortografia correta ✓), "dormiendo" (gerúndio de DORMIR, sem mudança o→ue no gerúndio ✓). FRASE PERFEITA!'
    },
    {
      prompt: 'BOSS DIFÍCIL: Compare os três padrões de irregularidade vocálica: e→ie, e→i, o→ue. Qual afirmação é precisa?',
      options: [
        { text: 'e→ie e e→i são o mesmo padrão com nomes diferentes',                                              correct: false },
        { text: 'e→ie ocorre em -ER e -IR; e→i só em -IR; o→ue em -ER e -IR; nosotros/vosotros exceção universal', correct: true  },
        { text: 'Todos os três padrões ocorrem apenas na 2ª conjugação (-ER)',                                      correct: false },
        { text: 'e→i é o único padrão que afeta nosotros e vosotros',                                             correct: false }
      ],
      explanation: 'Análise precisa: e→ie = 2ª E 3ª conjugações (querer-2ª, sentir-3ª). e→i = EXCLUSIVO da 3ª conjugação (pedir, servir, seguir). o→ue = 2ª E 3ª (poder-2ª, dormir-3ª). Nosotros/vosotros = exceção UNIVERSAL para todos os padrões. Esta é a visão de conjunto da linguística espanhola!'
    }
  ],

  rewards: { xp: 220, gems: 28, badge: '🥇 El Campeón Olímpico' },
  completionMessage: '¡CAMPEÓN! Venciste El Campeón Olímpico! Dominas toda a Unidad 3 de espanhol. ¡Eres digno del pódio lingüístico!',
  nextStage: 'esp_dep_sfinal'
};

window.ESP_DEP_SBOSS = ESP_DEP_SBOSS;
