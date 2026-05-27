/**
 * ESP DEPORTES STAGE 04 — Ortografía: R/RR + Apócope completo
 * BNCC: EF07LP07 | Tópico 8 — Unidad 3
 * RR entre vogais = forte, R inicial = forte, R após n/l/s = forte
 * Pares mínimos: caro/carro, pero/perro, cero/cerro
 * Apócope: buen/primer/tercer/gran/cualquier, San vs Santo
 */

const ESP_DEP_S04 = {
  id: 'esp_dep_s04',
  title: 'Ortografía: R/RR + Apócope',
  icon: '✏️',
  difficulty: 'medium',
  estimatedTime: 15,

  learningObjectives: [
    'Distinguir os sons R forte e R fraco em espanhol',
    'Aplicar as regras RR entre vogais e R inicial',
    'Reconhecer R forte após N, L e S',
    'Dominar todos os apócopos (buen, gran, primer, tercer, cualquier, San)',
    'Evitar confusão com pares mínimos (caro/carro, pero/perro)'
  ],

  summary: {
    readTime: 5,
    content: [
      {
        icon: '🔤',
        title: 'R vs RR — dois sons diferentes em espanhol',
        text: 'Em espanhol, R e RR são sons DIFERENTES que mudam o significado:\n\n🔴 R FORTE (vibrante múltipla) = som de RR português:\n• RR ENTRE VOGAIS: carro, perro, tierra, carrera\n• R NO INÍCIO DE PALAVRA: ratón, raqueta, río, Roma\n• R APÓS N, L, S: honra, alrededor, Israel\n• (R após N, L, S é forte mesmo com grafía R simples!)\n\n🟡 R FRACO (vibrante simples) = som de R entre vogais em português:\n• Entre vogais (exceto início): caro, pero, cero, mira\n• No final de sílaba: correr, volver, árbol\n• Após consoantes (exceto N, L, S): tres, grande, precio\n\n⚠️ PARES MÍNIMOS — um R muda tudo!:\n• CARO (caro/barato) vs CARRO (coche/automóvel)\n• PERO (mas/porém) vs PERRO (cachorro)\n• CERO (zero) vs CERRO (morro/colina)\n• AHORA (agora) vs AHORRA (economiza/poupa)\n• MORO (mouro) vs MORRO (focinho)\n\n🔑 No início de palavra, SEMPRE soa forte — mesmo com R simples: "Roma", "rápido", "raqueta". Não precisa de RR!'
      },
      {
        icon: '📏',
        title: 'Regras completas do R e RR',
        text: 'O guia definitivo:\n\nWHEN TO WRITE RR (entre vogais = som forte):\n• a+rr+a: tierra, carretera, perro, carro\n• Quando a pronúncia é FORTE e a letra anterior é VOGAL\n\nWHEN TO WRITE R SIMPLES (som forte):\n• Início de palavra: ratón, río, rápido\n• Após N: honra, Enrique, sonrisa\n• Após L: alrededor, Elrond\n• Após S: Israel, desratizar (início de morfema)\n\nWHEN TO WRITE R SIMPLES (som fraco):\n• Entre vogais no meio de palavra: caro, pero, para, mirar\n• Após outras consoantes (B, D, F, G, P, T): brazo, drama, frase, gris, precio, tres\n\n🚦 REGRA RESUMIDA:\n→ Som forte = RR (entre vogais) OU R (início, após N/L/S)\n→ Som fraco = R (outros contextos)\n\n🔑 Dica prática: se você pode colocar RR e fica entre vogais, o som é forte. Se a letra antes é consoante (exceto N/L/S), o som é fraco com R simples.'
      },
      {
        icon: '✂️',
        title: 'Apócope completo — San vs Santo e outros',
        text: 'Revisão completa de todos os apócopos:\n\n📏 APÓCOPOS DOS ADJETIVOS:\n1. BUENO → BUEN (antes de masc.sing.): un buen árbitro\n2. MALO → MAL (antes de masc.sing.): un mal resultado\n3. GRANDE → GRAN (antes de qualquer sing.): un gran récord, una gran campeona\n4. PRIMERO → PRIMER (antes de masc.sing.): el primer set\n5. TERCERO → TERCER (antes de masc.sing.): el tercer tiempo\n6. CUALQUIERA → CUALQUIER (antes de sing.): cualquier deporte\n\n⛪ SANTO → SAN (antes de nome masculino):\n• San Marcos, San Pablo, San Luis\n• MAS: Santo Tomás, Santo Domingo\n  → "Santo" mantém forma plena antes de TO- e DO-!\n• Santa (feminino): nunca tem apócope\n  → Santa Teresa, Santa Bárbara\n\n⚠️ CIEN → CIENTO → CIEN (antes de substantivo):\n• cien atletas (antes de substantivo)\n• ciento veinte (em composição com outros números)\n\n🔑 Regra geral do apócope: redução da forma adjetival antes de substantivo masculino singular (ou singular em geral para gran/cualquier/san).'
      }
    ],

    flashcards: [
      { q: '¿Por qué "perro" lleva RR?',                              a: 'RR entre vogais (pe-RRo) = som forte. "Pero" (R simples) = som fraco = significado diferente!' },
      { q: '¿Cómo se escribe "cachorro" en español?',                 a: '"Perro" — com RR entre vogais (PE-RRo). Cachorro en esp. = \'pup/filhote\'.' },
      { q: 'R inicial — soa forte ou fraco?',                         a: 'FORTE — sempre. "Ratón", "raqueta", "río". Com R simples, som de RR.' },
      { q: '¿Por qué "honra" se escribe con R simple y no RR?',       a: 'R após N = som forte sem precisar de RR. "Hon-ra" — N antes de R → R simples já soa forte.' },
      { q: 'Apócope de MALO antes de masc.sing.',                     a: 'MAL: un mal partido. Masculino singular antes do substantivo.' },
      { q: 'Quando SANTO vira SAN?',                                   a: 'SAN antes de nome masculino (exceto To- e Do-): San Pablo, San Luis. Exceções: Santo Tomás, Santo Domingo.' },
      { q: 'Pares mínimos: CARO vs CARRO',                            a: 'CARO (barato≠caro) = R fraco. CARRO (automóvel) = RR forte. Som diferente = significado diferente.' },
      { q: 'CIEN vs CIENTO — quando usar cada?',                      a: 'CIEN antes de substantivo: "cien atletas". CIENTO em composição: "ciento veinte".' }
    ],

    mnemonics: [
      { trigger: 'RR entre vogais = forte',    memory: '"Entre Vogais = RR Vibrante: pe-RRo, ca-RRo, ca-RRe-te-Ra. Entre vogais = escreve RR!"' },
      { trigger: 'R inicial sempre forte',     memory: '"R no começo = corajoso = forte! Ratón RUGE. Raqueta RASGA. Roma REINA."' },
      { trigger: 'R após N/L/S = forte',       memory: '"N-L-S = Nasce Leão Selvagem (forte!): hoNRa, aLRededor, iSRael."' },
      { trigger: 'San vs Santo',               memory: '"SAN antes de nomes normais. SANTO sobrevive antes de TO e DO: sanTO Tomás, sanTO DOMingo."' }
    ],

    miniReview: [
      { q: 'Por que "carretera" (estrada) tem RR?',
        a: '"Ca-RRe-te-ra": a letra antes do R é A (vogal) — entre vogais = RR. O som é forte (vibrante múltipla). "Caretara" com R simples mudaria o som.' },
      { q: 'Por que não existe "Sanrr" mesmo antes de nomes com som forte de R?',
        a: 'O apócope SAN se aplica antes de NOMES PRÓPRIOS masculinos — a ortografia do nome é fixa. Não alteramos a grafia do nome só por causa do apócope. Ex: "San Roque" tem R inicial (som forte já) sem RR.' }
    ]
  },

  warmup: [
    {
      prompt: '¿Cuál es la ortografía correcta?',
      options: [
        { text: 'el pero ladra mucho',   correct: false },
        { text: 'el perro ladra mucho',  correct: true  },
        { text: 'el pérro ladra mucho',  correct: false },
        { text: 'el perró ladra mucho',  correct: false }
      ],
      explanation: 'PERRO (cachorro) = RR entre vogais (pe-RRo) = som forte. "Pero" (com R simples) = conjunção "mas/porém". Confundir PERO e PERRO é um erro clássico para falantes de português!'
    },
    {
      prompt: '"Fue un ___ resultado para el equipo." (MAL/MALO)',
      options: [
        { text: 'malo',   correct: false },
        { text: 'mala',   correct: false },
        { text: 'mal',    correct: true  },
        { text: 'males',  correct: false }
      ],
      explanation: 'MAL = apócope de malo antes de substantivo masculino singular. "Un mal resultado" ✓. "Un resultado malo" (posição pós-nominal, sem apócope). "Malo" antes do substantivo seria forma arcaica ou enfática.'
    }
  ],

  guidedPractice: [
    {
      prompt: '🔍 DICA: R após N soa forte sem precisar de RR.\n\n"El deportista honra a su país." O R de "honra" é:',
      options: [
        { text: 'Fraco — R simples entre vogais',         correct: false },
        { text: 'Forte — R simples após N (regra especial)', correct: true  },
        { text: 'Erro — deveria ser RR: "honrra"',        correct: false },
        { text: 'Neutro — não tem som específico',         correct: false }
      ],
      explanation: '"Hon-ra": N antes de R → R simples soa FORTE (como RR). Não precisa escrever RR porque a letra N já "ativa" o som forte. "Honrra" seria grafia incorreta. Outras palavras com N+R: Enrique, sonrisa, conrazon.'
    },
    {
      prompt: '🔍 DICA: SANTO vira SAN exceto antes de "To-" e "Do-".\n\n"El estadio se llama ___ Tomás." (SANTO)',
      options: [
        { text: 'San Tomás',   correct: false },
        { text: 'Santo Tomás', correct: true  },
        { text: 'Sant Tomás',  correct: false },
        { text: 'Santu Tomás', correct: false }
      ],
      explanation: 'SANTO Tomás ✓ — exceção! SANTO mantém a forma plena antes de nomes começados com TO-. A mesma regra para DO-: Santo Domingo. Todos os outros nomes masculinos: San Pablo, San Luis, San Marcos.'
    }
  ],

  questions: [
    {
      prompt: '¿Cuál par de palabras demuestra que R y RR son fonemas distintos en español?',
      options: [
        { text: 'rojo / roja (variação de gênero)',        correct: false },
        { text: 'caro (barato) / carro (automóvel)',        correct: true  },
        { text: 'correr / correremos (variação verbal)',   correct: false },
        { text: 'ratón / raton (acento diferente)',        correct: false }
      ],
      explanation: 'CARO vs CARRO é um PAR MÍNIMO clássico: mesma palavra exceto R/RR → significados totalmente diferentes. Caro (barato≠caro) vs Carro (veículo/automóvel). Prova que R e RR são fonemas distintos em espanhol!'
    },
    {
      prompt: '"___ Pablo ganó la medalla de oro." (SANTO)',
      options: [
        { text: 'Santo Pablo',  correct: false },
        { text: 'Santa Pablo',  correct: false },
        { text: 'San Pablo',    correct: true  },
        { text: 'Sant Pablo',   correct: false }
      ],
      explanation: 'SAN Pablo ✓ — apócope de SANTO antes de nome masculino. "Pablo" não começa com To- ou Do- → usa SAN (não Santo). Santo mantém-se íntegro apenas em: Santo Tomás, Santo Domingo. Santa para o feminino (sem apócope): Santa María.'
    },
    {
      prompt: '"La carretera de montaña era muy peligrosa." Por que "carretera" tem RR?',
      options: [
        { text: 'Porque está no início da palavra',                      correct: false },
        { text: 'Porque a vogal A precede o R (entre vogais = RR forte)', correct: true  },
        { text: 'Porque é palavra composta com "carre" + "tera"',        correct: false },
        { text: 'Por convenção histórica sem regra fonológica',           correct: false }
      ],
      explanation: '"Ca-RRe-te-ra": A vogal A vem antes do R → entre vogais → som forte → grafado como RR. Regra: quando o R entre vogais deve soar FORTE (vibrante múltipla), usa-se RR. Esta é a única posição onde RR é possível.'
    },
    {
      prompt: 'Cual ortografía está CORRETA?',
      options: [
        { text: 'El raton corre rapido',   correct: false },
        { text: 'El ratón corre rápido',   correct: true  },
        { text: 'El rattón corre rappido', correct: false },
        { text: 'El rratón corre rrápido', correct: false }
      ],
      explanation: '"Ratón" e "rápido" têm R INICIAL = sempre soa forte com R simples (nunca RR no início). Com acentos: "ratón" (oxítona, -ón) e "rápido" (proparoxítona, precisa acento). "Rrápido" e "Rratón" são impossíveis — RR nunca aparece no início de palavra!'
    },
    {
      prompt: '"Es un ___ atleta pero también tiene sus ___ momentos." (BUENO / MALO)',
      options: [
        { text: 'buen / malos',  correct: false },
        { text: 'buen / malos',  correct: false },
        { text: 'buen / malos',  correct: false },
        { text: 'buen / malos',  correct: true  }
      ],
      explanation: 'BUEN atleta (apócope, masc.sing.) + MALOS momentos (plural → sem apócope, forma plena). Apócopes só ocorrem em masculino singular. No plural: buenos/malos/grandes/primeros mantêm as formas plenas.'
    },
    {
      prompt: 'Por que "Israel" se pronuncia com R forte mesmo sem RR?',
      options: [
        { text: 'É exceção arbitrária da ortografia hebraica',              correct: false },
        { text: 'R após S soa forte mesmo sem RR — regra do R após consonante N/L/S', correct: true  },
        { text: 'Porque é nome próprio e nomes próprios têm R forte',       correct: false },
        { text: 'Porque a vogal A depois faz o R soar forte',               correct: false }
      ],
      explanation: '"Is-ra-el": S antes de R → R soa forte sem precisar de RR. A regra: R após N, L ou S tem som FORTE com R simples. São as três consoantes que "ativam" o R forte: hon-ra (N), al-rededor (L), Is-rael (S).'
    },
    {
      prompt: '"Fue el ___ campeón olímpico de Brasil." (GRAN/GRANDE, MASCULINO)',
      options: [
        { text: 'grande campeón',  correct: false },
        { text: 'gran campeón',    correct: true  },
        { text: 'grandes campeón', correct: false },
        { text: 'grando campeón',  correct: false }
      ],
      explanation: '"Un gran campeón" ✓ — apócope de grande antes de substantivo singular (masc.). "Grande campeón" seria possível mas posposto: "un campeón grande" (sentido literal de tamanho ou com ênfase diferente). "Grando" não existe!'
    },
    {
      prompt: '"El ___ tiempo del partido fue emocionante." (TERCERO)',
      options: [
        { text: 'tercera',  correct: false },
        { text: 'tercero',  correct: false },
        { text: 'tercer',   correct: true  },
        { text: 'terci',    correct: false }
      ],
      explanation: '"El tercer tiempo" ✓ — apócope de tercero antes de masculino singular ("tiempo" = masculino). "La tercera parte" (feminino = sem apócope). Tercer é o apócope de tercero, análogo ao PRIMER de primero.'
    },
    {
      prompt: '¿Cuál frase tem ERRO de ortografia com R/RR?',
      options: [
        { text: '"El perro del atleta se llama Río"',               correct: false },
        { text: '"La carrera de 100 metros fue increíble"',          correct: false },
        { text: '"El deportista corre alrededores del estadio"',     correct: false },
        { text: '"El pero del atleta ladra en el estadio"',          correct: true  }
      ],
      explanation: '"El pero del atleta" está ERRADO. "Pero" = conjunção ("mas"). Deveria ser "el perro" (cachorro = RR entre vogais). As outras frases: "perro" (RR ✓), "carrera" (RR ✓), "alrededores" (R após L = forte ✓).'
    },
    {
      prompt: '"Cualquier atleta puede participar, pero hay ___ condiciones especiales." Usa o ordinal correto para "primeiras" (fem.pl.)',
      options: [
        { text: 'primer',   correct: false },
        { text: 'primero',  correct: false },
        { text: 'primeras', correct: true  },
        { text: 'prime',    correct: false }
      ],
      explanation: '"Primeras condiciones" = plural + feminino → SEM apócope. A forma plena PRIMERAS é obrigatória. Apócopes só ocorrem em masculino singular antes do substantivo. Plural, feminino, e posição pós-nominal = formas plenas sempre!'
    }
  ],

  adaptiveReview: [
    {
      prompt: 'DIFÍCIL: "La honra de ganar el primer récord mundial fue de un gran ruso." Análise todos os R/RR e apócopos.',
      options: [
        { text: 'Há um erro: "gran ruso" deveria ser "grande ruso"',                                correct: false },
        { text: 'Está correto: honra (R após N=forte), primer (apócope masc.sing.), gran (apócope sing.)', correct: true  },
        { text: 'Há dois erros: "honra" deveria ser "honrra" e "primer" deveria ser "primero"',    correct: false },
        { text: 'Há um erro: "gran" deveria ser "grande" porque "ruso" começa com R',              correct: false }
      ],
      explanation: 'Tudo correto: "honra" (R após N = forte sem RR ✓), "primer récord" (apócope masc.sing. ✓), "gran ruso" (apócope antes de masc.sing. ✓). O fato de "ruso" começar com R não afeta o apócope de GRAN. Análise completa revela 0 erros!'
    },
    {
      prompt: 'DIFÍCIL: Por que existe RR em espanhol mas não em português (onde usamos apenas R duplo para representar R forte entre vogais)?',
      options: [
        { text: 'O espanhol é mais complexo que o português ortograficamente',               correct: false },
        { text: 'Ambas as línguas têm o mesmo fenômeno fonológico (R forte vs fraco), mas escolheram representações ortográficas diferentes para o mesmo som', correct: true  },
        { text: 'O português não tem som de R forte entre vogais',                            correct: false },
        { text: 'A RAE criou o RR como diferencial do espanhol em relação ao latim',          correct: false }
      ],
      explanation: 'Espanhol e português têm MESMO contraste fonológico (R forte / R fraco). O espanhol representa o forte entre vogais com RR; o português usa o "r duplo" (rr) para o mesmo. Em português: "caro/carro" também existe! A diferença é apenas ortográfica. Em português eliminamos o acento em RR no meio do séc. XX mas o som continua idêntico — língua fascinante!'
    }
  ],

  rewards: { xp: 140, gems: 14, badge: '✏️ Ortógrafo Experto' },
  completionMessage: '¡Excelente! RR entre vogais, R inicial, R após N/L/S — e todos os apócopos dominados! ¡Eres un mestre de la ortografía!',
  nextStage: 'esp_dep_s05'
};

window.ESP_DEP_S04 = ESP_DEP_S04;
