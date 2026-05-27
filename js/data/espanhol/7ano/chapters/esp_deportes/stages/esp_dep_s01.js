/**
 * ESP DEPORTES STAGE 01 — Cultura Olímpica
 * BNCC: EF07LE01, EF07LE04 | Tópico 5 — Unidad 3
 * 1896 Atenas, Pierre de Coubertin, COI vs CON, juramento, apócope, numerales
 */

const ESP_DEP_S01 = {
  id: 'esp_dep_s01',
  title: 'Cultura Olímpica',
  icon: '🏛️',
  difficulty: 'easy',
  estimatedTime: 12,

  learningObjectives: [
    'Conhecer a história dos Jogos Olímpicos modernos',
    'Identificar a diferença entre COI e CON',
    'Compreender o significado dos 5 aros olímpicos',
    'Conhecer o protocolo de desfile dos países',
    'Usar vocabulário olímpico em espanhol'
  ],

  summary: {
    readTime: 4,
    content: [
      {
        icon: '🏛️',
        title: 'Los Juegos Olímpicos modernos — história completa',
        text: 'Tudo começou com um sonho de reviver o passado:\n\n📅 1896 — PRIMERA OLIMPIADA MODERNA\n• Cidade: Atenas, Grécia 🇬🇷\n• Fundador: Pierre de Coubertin (francês)\n• Inspiração: reviver os Jogos da Grécia Antiga\n• Número de países: 14 nações participantes\n• Número de atletas: ~241 atletas (apenas homens!)\n\n🕊️ FILOSOFIA OLÍMPICA:\n• Lema: "Citius, Altius, Fortius" = Mais rápido, Mais alto, Mais forte (latim)\n• Motto desde 2021: + "Communiter" = Juntos\n• Ideia central: paz e união entre os povos através do esporte\n\n📆 PERIODICIDADE:\n• Olimpíadas de Verão: a cada 4 anos\n• Olimpíadas de Inverno: a cada 4 anos (nos pares alternados)\n• Paralimpíadas: junto a cada Olimpíada\n\n🔑 Pierre de Coubertin é o PAI dos Jogos Olímpicos modernos. Ele não inventou os jogos — existiam na Grécia Antiga — mas os REVIVEU e ORGANIZOU para o mundo moderno.'
      },
      {
        icon: '🔵',
        title: 'Os 5 aros e o significado dos Jogos',
        text: 'Os 5 aros olímpicos são o símbolo mais reconhecível do esporte:\n\n⭕ OS 5 AROS OLÍMPICOS:\n• 5 aros = 5 continentes do mundo\n• Cores: azul, amarelo, preto, verde, vermelho\n• Fundo branco = 6 cores (incluindo o branco)\n• TODOS os países do mundo têm pelo menos uma dessas cores em sua bandeira\n\n🌍 Os 5 CONTINENTES representados:\n1. Europa — azul\n2. Ásia — amarelo\n3. África — preto\n4. América — vermelho\n5. Oceania — verde\n\n🏳️ DESFILE DE ABERTURA — protocolo:\n• Grécia SEMPRE desfila PRIMEIRO (homenagem à origem)\n• País anfitrião SEMPRE desfila POR ÚLTIMO\n• Demais países: ordem ALFABÉTICA no idioma do país anfitrião\n\n🔑 Macete: "Grécia primeiro, anfitrião por último, resto em ordem alfabética". Esta regra aparece em questões de vestibular e provas de espanhol!'
      },
      {
        icon: '🤝',
        title: 'COI, CON e o Juramento Olímpico',
        text: 'As organizações e o ritual sagrado dos Jogos:\n\n🏛️ COI — Comité Olímpico Internacional:\n• Organização GLOBAL sediada em Lausanne, Suíça\n• Governa todos os Jogos Olímpicos\n• Escolhe as cidades-sede\n• Garante a filosofia olímpica\n\n🏅 CON — Comité Olímpico Nacional:\n• Um por país (ex: COB = Comitê Olímpico do Brasil)\n• Organiza a participação do país nos Jogos\n• Seleciona os atletas nacionais\n• Responde ao COI\n\n📜 JURAMENTO OLÍMPICO:\n• Feito por UM atleta em nome de TODOS no país anfitrião\n• Também há juramento de um JUIZ/ÁRBITRO\n• Conteúdo: "Participar com lealdade, respeitar as regras e competir com fair-play"\n\n🔑 Diferença crucial: COI = internacional (acima de tudo), CON = nacional (representa cada país). Esta distinção é questão frequente em provas!'
      }
    ],

    flashcards: [
      { q: '¿En qué ciudad fueron los primeros Juegos Olímpicos modernos?',  a: 'Atenas, Grécia — 1896. Pierre de Coubertin os fundou.' },
      { q: '¿Qué significan los 5 aros olímpicos?',                          a: '5 continentes do mundo. Cores: azul, amarelo, preto, verde, vermelho + fundo branco.' },
      { q: 'Diferencia entre COI y CON',                                     a: 'COI = Comité Olímpico Internacional (global). CON = Comité Olímpico Nacional (cada país).' },
      { q: '¿Qué país siempre desfila PRIMERO en la apertura?',              a: 'Grécia — sempre primeira, homenagem à origem dos Jogos.' },
      { q: '¿Qué país desfila ÚLTIMO en la apertura olímpica?',              a: 'O país ANFITRIÃO desfila por último.' },
      { q: '¿Qué significa el lema olímpico "Citius, Altius, Fortius"?',    a: 'Mais rápido (Citius), Mais alto (Altius), Mais forte (Fortius). Em latim.' },
      { q: '¿Quién fue Pierre de Coubertin?',                                a: 'Francês, fundador dos Jogos Olímpicos modernos (1896). O "Pai das Olimpíadas".' },
      { q: '¿Cuándo se hacen los Juegos Olímpicos de Verano?',              a: 'A cada 4 anos. Os de Inverno também ocorrem a cada 4 anos (em anos pares alternados).' }
    ],

    mnemonics: [
      { trigger: 'Ordem do desfile',     memory: '"GRAFO = GRécia primeiro, Anfitrião por último, resto Faz Ordem alfabética."' },
      { trigger: 'COI vs CON',           memory: '"COI = Internacional (I) = acima de tudo. CON = Nacional (N) = cada nação." I está em INTERNACIONAL, N está em NACIONAL.' },
      { trigger: '5 aros = 5 continentes', memory: '"5 ARCOS, 5 MUNDOS: azul-Europa, amarelo-Ásia, preto-África, vermelho-América, verde-Oceania."' },
      { trigger: '1896 Atenas',          memory: '"18-96: DEZOITO-NOVENTA e SEIS. Penso em 1900 - 4 = 1896. Coubertin o Francês fundou em Atenas."' }
    ],

    miniReview: [
      { q: 'Por que o Brasil tem um CON mas não é o COI?',
        a: 'O Brasil tem o COB (Comitê Olímpico Brasileiro), que é seu CON — representa o Brasil nos Jogos. O COI é único e global, sediado na Suíça. O COB responde ao COI.' },
      { q: 'Em que ordem os países desfilam na cerimônia de abertura das Olimpíadas?',
        a: 'Grécia primeiro (origem dos Jogos), depois os demais países em ordem alfabética no idioma do país anfitrião, e o país anfitrião por último (grande entrada final).' }
    ]
  },

  warmup: [
    {
      prompt: '¿En qué ciudad se celebraron los primeros Juegos Olímpicos modernos?',
      options: [
        { text: 'Roma',      correct: false },
        { text: 'Atenas',    correct: true  },
        { text: 'París',     correct: false },
        { text: 'Londres',   correct: false }
      ],
      explanation: 'ATENAS, Grécia — 1896. Pierre de Coubertin escolheu Atenas para homenagear a origem grega dos Jogos. Paris sediou a 2ª edição em 1900, e Londres em 1908 e 1948.'
    },
    {
      prompt: '¿Cuántos aros tiene el símbolo olímpico?',
      options: [
        { text: '3', correct: false },
        { text: '4', correct: false },
        { text: '5', correct: true  },
        { text: '6', correct: false }
      ],
      explanation: '5 aros = 5 continentes. As 5 cores (azul, amarelo, preto, verde, vermelho) mais o fundo branco = 6 cores totais. Todo país do mundo tem pelo menos uma dessas cores em sua bandeira!'
    }
  ],

  guidedPractice: [
    {
      prompt: '🔍 DICA: COI = Internacional | CON = Nacional\n\n"El ___ de Brasil envió atletas a los Juegos Olímpicos."',
      options: [
        { text: 'COI',  correct: false },
        { text: 'CON',  correct: true  },
        { text: 'CIB',  correct: false },
        { text: 'ONU',  correct: false }
      ],
      explanation: 'O BRASIL tem um CON (Comité Olímpico Nacional) = COB (Comitê Olímpico Brasileiro). Ele envia os atletas brasileiros. O COI seria a organização GLOBAL que organiza os Jogos em si.'
    },
    {
      prompt: '🔍 DICA: Ordem do desfile: Grécia primeiro, anfitrião por último.\n\nEm que posição o Japão (anfitrião 2020) desfilou na cerimônia de Tóquio?',
      options: [
        { text: 'Primeiro, por ser o mais importante',          correct: false },
        { text: 'Em ordem alfabética com os outros países',     correct: false },
        { text: 'Por último, como país anfitrião',              correct: true  },
        { text: 'Segundo, logo após a Grécia',                  correct: false }
      ],
      explanation: 'O JAPÃO desfilou por último em Tóquio 2020 (realizada em 2021). Regra olímpica: país anfitrião = SEMPRE por último. A Grécia desfilou PRIMEIRA. Os demais países em ordem alfabética em japonês.'
    }
  ],

  questions: [
    {
      prompt: '¿Quién fundó los Juegos Olímpicos modernos?',
      options: [
        { text: 'Aristóteles',           correct: false },
        { text: 'Pierre de Coubertin',   correct: true  },
        { text: 'Juan Antonio Samaranch', correct: false },
        { text: 'Thomas Arnold',         correct: false }
      ],
      explanation: 'PIERRE DE COUBERTIN (1863-1937) — francês, barão, fundador dos Jogos Olímpicos modernos. Organizou a primeira edição em Atenas em 1896. Juan Antonio Samaranch foi presidente do COI no século XX.'
    },
    {
      prompt: '¿Qué significa el motto olímpico "Citius, Altius, Fortius"?',
      options: [
        { text: 'Paz, Amor, União',                   correct: false },
        { text: 'Mais rápido, Mais alto, Mais forte',  correct: true  },
        { text: 'Correr, Saltar, Nadar',               correct: false },
        { text: 'Ouro, Prata, Bronze',                 correct: false }
      ],
      explanation: '"Citius" = mais rápido, "Altius" = mais alto, "Fortius" = mais forte. São palavras em LATIM. Em 2021, acrescentou-se "Communiter" (juntos), refletindo os valores pós-pandemia de solidariedade.'
    },
    {
      prompt: 'Sobre o desfile da cerimônia de abertura, qual afirmação está INCORRETA?',
      options: [
        { text: 'A Grécia sempre desfila primeira',                                correct: false },
        { text: 'O país anfitrião sempre desfila por último',                      correct: false },
        { text: 'Os países seguem a ordem alfabética no idioma do anfitrião',      correct: false },
        { text: 'O Brasil sempre desfila em segundo, logo após a Grécia',          correct: true  }
      ],
      explanation: 'O Brasil NÃO tem posição fixa — desfila em ordem alfabética no idioma do país anfitrião. Em Tóquio (japonês) ficou numa posição diferente de em Paris (francês). Apenas a Grécia (1ª) e o anfitrião (último) têm posição fixa.'
    },
    {
      prompt: 'Los 5 aros del símbolo olímpico representan:',
      options: [
        { text: 'Os 5 continentes do mundo',         correct: true  },
        { text: 'Os 5 esportes originais de 1896',   correct: false },
        { text: 'As 5 medalhas (ouro, prata, bronze, participação, fair-play)', correct: false },
        { text: 'Os 5 fundadores do COI',             correct: false }
      ],
      explanation: 'Os 5 aros = os 5 CONTINENTES: Europa (azul), Ásia (amarelo), África (preto), América (vermelho), Oceania (verde). Criados por Pierre de Coubertin em 1913.'
    },
    {
      prompt: '¿Quién hace el Juramento Olímpico en la ceremonia de apertura?',
      options: [
        { text: 'O presidente do COI',                                correct: false },
        { text: 'Um atleta do país anfitrião em nome de todos',      correct: true  },
        { text: 'O campeão olímpico da edição anterior',             correct: false },
        { text: 'O presidente do país anfitrião',                     correct: false }
      ],
      explanation: 'O JURAMENTO OLÍMPICO é feito por: (1) um ATLETA do país anfitrião em nome de todos os atletas; (2) um JUIZ/ÁRBITRO em nome de todos os árbitros. O conteúdo: compromisso com fair-play, regras e competição honesta.'
    },
    {
      prompt: 'A diferença entre COI e CON é:',
      options: [
        { text: 'COI organiza esportes indoor; CON organiza outdoor',                          correct: false },
        { text: 'COI é a organização global dos Jogos; CON é a representação de cada nação',   correct: true  },
        { text: 'COI é para homens; CON é para mulheres',                                      correct: false },
        { text: 'São a mesma organização com nomes diferentes em espanhol e inglês',            correct: false }
      ],
      explanation: 'COI = Comité Olímpico Internacional — organização GLOBAL, única, sediada em Lausanne. CON = Comité Olímpico Nacional — um por país, como o COB (Brasil), RFEC (Espanha). CON responde ao COI.'
    },
    {
      prompt: 'Com que frequência ocorrem os Jogos Olímpicos de Verão?',
      options: [
        { text: 'A cada 2 anos',   correct: false },
        { text: 'A cada 3 anos',   correct: false },
        { text: 'A cada 4 anos',   correct: true  },
        { text: 'A cada 5 anos',   correct: false }
      ],
      explanation: 'Os Jogos Olímpicos de Verão ocorrem A CADA 4 ANOS (o chamado "Olimpiada"). 1896, 1900, 1904... 2020, 2024, 2028. Os de Inverno também a cada 4 anos, mas nos anos pares entre os de Verão (ex: 2022, 2026).'
    },
    {
      prompt: '"Los Juegos Olímpicos de 1896 se celebraron en ___, con la participación de ___ naciones."',
      options: [
        { text: 'Roma / 10',      correct: false },
        { text: 'Atenas / 14',    correct: true  },
        { text: 'París / 20',     correct: false },
        { text: 'Londres / 8',    correct: false }
      ],
      explanation: 'ATENAS 1896: 14 nações participantes, cerca de 241 atletas. Apenas homens participaram. A participação feminina começou em Paris 1900 (tênis e golfe). A diversidade e inclusão cresceram com cada edição.'
    },
    {
      prompt: 'O que foi ADICIONADO ao lema olímpico em 2021?',
      options: [
        { text: '"Pax" (Paz)',         correct: false },
        { text: '"Communiter" (Juntos)', correct: true  },
        { text: '"Amor" (Amor)',       correct: false },
        { text: '"Iustitia" (Justiça)', correct: false }
      ],
      explanation: '"Communiter" (= Juntos, em latim) foi adicionado em 2021, refletindo os valores de solidariedade surgidos na pandemia. O lema completo passou a ser: "Citius, Altius, Fortius – Communiter" = Mais rápido, Mais alto, Mais forte – Juntos.'
    },
    {
      prompt: '(APLICAÇÃO) Em Buenos Aires 2018, os países desfilaram em ordem alfabética em espanhol. Se "Brasil" desfila antes ou depois de "Argentina"?',
      options: [
        { text: 'Brasil desfila ANTES de Argentina',         correct: false },
        { text: 'Brasil desfila DEPOIS de Argentina',        correct: true  },
        { text: 'São vizinhos — desfilam juntos',            correct: false },
        { text: 'Argentina não desfila por ser o anfitrião', correct: false }
      ],
      explanation: 'Em espanhol: Argentina (A) vem ANTES de Brasil (B) — ordem alfabética. Argentina seria exceto se fosse o anfitrião — mas em Buenos Aires 2018 (Jogos da Juventude), Argentina era o anfitrião e desfilava por ÚLTIMO. Brasil desfilaria em posição de "B" entre os demais.'
    }
  ],

  adaptiveReview: [
    {
      prompt: 'DIFÍCIL: Pierre de Coubertin pretendia que os Jogos fossem "apolíticos". Mas nos Jogos de Berlim 1936, Hitler usou as Olimpíadas para propaganda nazista. Qual desses princípios olímpicos foi violado?',
      options: [
        { text: 'O lema "Citius, Altius, Fortius"',                                           correct: false },
        { text: 'A neutralidade política e o ideal de paz e união entre povos',               correct: true  },
        { text: 'A regra de Grécia sempre desfilar primeiro',                                  correct: false },
        { text: 'O sistema de pontuação por medalhas',                                         correct: false }
      ],
      explanation: 'Berlim 1936 violou o princípio FUNDAMENTAL das Olimpíadas: paz e neutralidade política. O COI, pressionado e ingênuo, permitiu que o regime nazista usasse os Jogos como vitrine. Foi uma lição histórica sobre como esporte e política se entrelaçam — tema frequente em vestibulares de língua e ciências humanas.'
    },
    {
      prompt: 'DIFÍCIL: Por que a Grécia desfila SEMPRE em primeiro lugar, mesmo quando não é o país mais antigo ou importante?',
      options: [
        { text: 'Porque a Grécia tem mais medalhas olímpicas históricas',                         correct: false },
        { text: 'Por protocolo simbólico: homenagem à origem dos Jogos na Grécia Antiga e em Atenas 1896', correct: true  },
        { text: 'Porque Coubertin era grego e instituiu essa regra',                               correct: false },
        { text: 'Porque G é a primeira letra em todos os idiomas',                                 correct: false }
      ],
      explanation: 'A posição privilegiada da Grécia é um GESTO SIMBÓLICO que honra tanto os Jogos da Antiguidade (Olímpia, século VIII a.C.) quanto a 1ª Olimpíada moderna (Atenas, 1896). É tradição imutável do protocolo olímpico — uma reverência à história. Coubertin era francês, não grego!'
    }
  ],

  rewards: { xp: 110, gems: 11, badge: '🏛️ Historiador Olímpico' },
  completionMessage: '¡Muy bien! Agora você conhece a história olímpica. De Atenas 1896 aos dias de hoje — ¡eres un campeón del conocimiento!',
  nextStage: 'esp_dep_s02'
};

window.ESP_DEP_S01 = ESP_DEP_S01;
