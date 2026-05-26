/**
 * HIST STAGE 06 — A Crise do Feudalismo
 */

const HIST_S06 = {
  id: 'hist_s06',
  title: 'A Crise do Feudalismo',
  icon: '💀',
  difficulty: 'hard',
  estimatedTime: 14,

  learningObjectives: [
    'Compreender as causas da crise do feudalismo no século XIV',
    'Entender o impacto da Peste Negra na Europa medieval',
    'Identificar as revoltas camponesas e suas causas',
    'Reconhecer o papel da Guerra dos Cem Anos na crise',
    'Conectar a crise feudal com o surgimento do mundo moderno'
  ],

  summary: {
    readTime: 3,
    content: [
      {
        icon: '💀',
        title: 'A Peste Negra (1347-1353)',
        text: 'A maior catástrofe demográfica da história européia:\n\n• Origem: Ásia Central → chegou à Europa pelos portos italianos (1347)\n• Causa: bactéria Yersinia pestis, transmitida por pulgas de ratos\n• Mortalidade: matou 1/3 a 1/2 da população europeia (25-50 milhões)\n\nConsequências imediatas:\n• Escassez de mão de obra → servos exigiam melhores condições\n• Crise da Igreja (incapaz de explicar a doença)\n• Surgimento da "Dança Macabra" — arte da morte\n\n🔑 Cidades como Florença perderam 60% da população. A Pest Negra virou ponto de inflexão da história europeia.'
      },
      {
        icon: '⚔️',
        title: 'Revoltas e Guerra dos Cem Anos',
        text: 'Revoltas camponesas:\n• Jacquerie (França, 1358) — camponeses contra a nobreza após derrotas na guerra\n• Revolta de Wat Tyler (Inglaterra, 1381) — contra impostos e servidão\n• Resultado: violentamente suprimidas, mas mostraram limite do sistema feudal\n\nGuerra dos Cem Anos (1337-1453):\n• França vs. Inglaterra — disputa pelo trono francês\n• Joana d\'Arc (1429) — inspirou a resistência francesa\n• Resultado: vitória francesa, consolidação da monarquia nacional\n\n🔑 As guerras arruinavam a nobreza feudal — quem sobrevivia eram os reis e os mercadores.'
      },
      {
        icon: '🌅',
        title: 'Fim do Feudalismo e Transição',
        text: 'Por que o feudalismo entrou em colapso?\n\n1. Peste Negra → escassez de servos → senhores precisaram pagar salários\n2. Comércio crescente → burguesia acumulou riqueza fora do sistema feudal\n3. Guerras → nobreza endividada, reis fortalecidos\n4. Igreja questionada → crise espiritual, início da Reforma\n5. Novas ideias → Renascimento, humanismo, questionamento da autoridade\n\nO que veio depois:\n• Estados Nacionais centralizados (Portugal, Espanha, França, Inglaterra)\n• Grandes Navegações (séculos XV-XVI)\n• Renascimento e Humanismo\n• Reforma Protestante (séc. XVI)\n\n🔑 A crise do feudalismo NÃO foi rápida — foi um processo de 200 anos (séc. XIV-XV).'
      }
    ],

    flashcards: [
      { q: 'O que foi a Peste Negra?',           a: 'Epidemia de Yersinia pestis (1347-1353) — matou 1/3 a 1/2 da população europeia.' },
      { q: 'O que foi a Jacquerie?',             a: 'Revolta camponesa francesa (1358) contra a nobreza — violentamente suprimida.' },
      { q: 'Quem foi Joana d\'Arc?',             a: 'Camponesa francesa que inspirou a resistência na Guerra dos Cem Anos — queimada em 1431.' },
      { q: 'Por que a Peste gerou crise feudal?', a: 'Matou tantos servos que os sobreviventes passaram a negociar condições — fim da servidão gratuita.' },
      { q: 'Quanto durou a Guerra dos Cem Anos?', a: '116 anos (1337-1453) — mais de "cem" anos. França vs. Inglaterra.' }
    ],

    mnemonics: [
      { trigger: 'Causas da crise feudal', memory: '"PESTE, GUERRA, REVOLTA, COMÉRCIO — os quatro cavaleiros do apocalipse feudal."' },
      { trigger: 'Peste Negra',           memory: '"1347: ratos + pulgas + navio genovês = fim da Idade Média começa."' }
    ],

    miniReview: [
      { q: 'Por que a Peste Negra beneficiou os servos sobreviventes?', a: 'Com menos mão de obra disponível, senhores feudais tiveram que oferecer salários — início do trabalho assalariado.' },
      { q: 'Como a Guerra dos Cem Anos acelerou o fim do feudalismo?',  a: 'Nobreza empobreceu pagando guerras; reis fortaleceram exércitos nacionais, reduzindo dependência dos nobres.' }
    ]
  },

  warmup: [
    {
      prompt: 'A Peste Negra recebeu esse nome porque:',
      options: [
        { text: 'Vinha da África Negra',                                        correct: false },
        { text: 'Causava manchas negras (necrose) na pele das vítimas',         correct: true  },
        { text: 'Chegou à Europa durante a noite',                               correct: false },
        { text: 'Foi trazida por navios de carga negra (carvão)',               correct: false }
      ],
      explanation: 'A Yersinia pestis causava bubões (gânglios inchados) e manchas negras de necrose — daí "Morte Negra" ou "Peste Negra".'
    },
    {
      prompt: 'A Guerra dos Cem Anos foi um conflito entre:',
      options: [
        { text: 'França e Sacro Império Romano-Germânico',  correct: false },
        { text: 'França e Inglaterra pelo trono francês',   correct: true  },
        { text: 'Portugal e Espanha pelo domínio atlântico', correct: false },
        { text: 'Papa e rei da França pela supremacia',     correct: false }
      ],
      explanation: 'A Guerra dos Cem Anos (1337-1453) foi a disputa entre os reis ingleses (que reivindicavam o trono francês) e os monarcas franceses.'
    },
    {
      prompt: 'A Jacquerie (1358) foi:',
      options: [
        { text: 'Uma festa camponesa medieval francesa',              correct: false },
        { text: 'Uma revolta violenta de camponeses contra a nobreza francesa', correct: true },
        { text: 'Um tribunal criado pela Igreja para julgar heresias', correct: false },
        { text: 'Uma batalha decisiva da Guerra dos Cem Anos',        correct: false }
      ],
      explanation: 'Jacquerie — do apelido depreciativo "Jacques Bonhomme" dado aos camponeses — foi uma revolta violenta em 1358, brutalmente suprimida pela nobreza.'
    }
  ],

  guidedPractice: [
    {
      prompt: '🔍 DICA: A Peste Negra teve paradoxalmente um efeito "positivo" para quem sobreviveu.\n\nQual foi o principal benefício social para os camponeses sobreviventes?',
      options: [
        { text: 'Receberam as terras dos mortos automaticamente',                  correct: false },
        { text: 'Tornaram-se escassos — senhores precisaram pagar mais ou libertar servos', correct: true },
        { text: 'A Igreja perdoou todas as dívidas em sinal de compaixão',         correct: false },
        { text: 'O rei aboliu a servidão como medida de saúde pública',            correct: false }
      ],
      explanation: 'Com 1/3-1/2 da população morta, a mão de obra tornou-se escassa e valiosa — os servos sobreviventes passaram a ter poder de negociação que nunca tiveram antes.'
    },
    {
      prompt: '🔍 DICA: Joana d\'Arc é um símbolo do nascimento do sentimento nacional francês.\n\nQual foi a importância histórica de Joana d\'Arc na Guerra dos Cem Anos?',
      options: [
        { text: 'Liderou o exército francês por 20 anos até a vitória final',              correct: false },
        { text: 'Inspirou a virada francesa — libertou Orléans e coroou Carlos VII em Reims', correct: true },
        { text: 'Assinou o tratado de paz que encerrou a guerra',                           correct: false },
        { text: 'Inventou a artilharia que destruiu os castelos ingleses',                  correct: false }
      ],
      explanation: 'Joana d\'Arc (1429) inspirou a resistência francesa: libertou Orléans do cerco inglês e conduziu Carlos VII à coroação em Reims — legitimando o rei francês. Capturada e queimada em 1431.'
    }
  ],

  questions: [
    {
      prompt: 'De onde veio a Peste Negra que assolou a Europa em 1347?',
      options: [
        { text: 'África Subsaariana',         correct: false },
        { text: 'Ásia Central (via Mongóis e rotas comerciais)', correct: true },
        { text: 'América do Sul',             correct: false },
        { text: 'Península Ibérica',          correct: false }
      ],
      explanation: 'A Yersinia pestis originou-se na Ásia Central e chegou à Europa pelos portos italianos — trazida em navios genoveses vindos do Mar Negro.'
    },
    {
      prompt: 'Qual porcentagem aproximada da população europeia foi morta pela Peste Negra?',
      options: [
        { text: '5 a 10%',   correct: false },
        { text: '30 a 50%',  correct: true  },
        { text: '60 a 80%',  correct: false },
        { text: '10 a 20%',  correct: false }
      ],
      explanation: 'Estimativas variam de 25 a 50 milhões de mortos — cerca de 1/3 a metade da população europeia da época.'
    },
    {
      prompt: 'A "Dança Macabra" (Danse Macabre) era uma manifestação artística medieval que:',
      options: [
        { text: 'Celebrava as vitórias dos cavaleiros nas guerras',              correct: false },
        { text: 'Representava a Morte conduzindo pessoas de todas as classes ao túmulo', correct: true },
        { text: 'Era uma festa religiosa de carnaval antes da Quaresma',         correct: false },
        { text: 'Homenageava os santos da Igreja com danças rituais',            correct: false }
      ],
      explanation: 'A Dança Macabra surgiu da Peste Negra — imagens do esqueleto da Morte levando reis, papas, camponeses e nobres igualmente ao túmulo. A morte como igualadora social.'
    },
    {
      prompt: 'Qual foi o papel da pólvora e da artilharia no fim do feudalismo?',
      options: [
        { text: 'Tornaram os castelos inexpugnáveis — fortalecendo os nobres',               correct: false },
        { text: 'Tornaram os castelos obsoletos — destruindo a base militar do feudalismo',  correct: true  },
        { text: 'Foram usadas pelos servos para destruir os feudos',                         correct: false },
        { text: 'Só foram importantes para as guerras de religião do séc. XVI',              correct: false }
      ],
      explanation: 'A artilharia (canhões) tornaram os muros dos castelos medievais inúteis — o que antes era inexpugnável agora caía em dias. Destruiu a base militar da nobreza feudal.'
    },
    {
      prompt: 'Qual evento ENCERROU formalmente a Guerra dos Cem Anos?',
      options: [
        { text: 'A execução de Joana d\'Arc (1431)',       correct: false },
        { text: 'A Batalha de Castillon e queda de Bordeaux (1453)', correct: true },
        { text: 'O Tratado de Troyes (1420)',              correct: false },
        { text: 'A morte do rei inglês Henrique V',        correct: false }
      ],
      explanation: 'A Batalha de Castillon (1453) foi a derrota decisiva dos ingleses — a França reconquistou quase todo o território, encerrando 116 anos de conflito.'
    },
    {
      prompt: 'A Revolta de Wat Tyler (Inglaterra, 1381) foi causada principalmente por:',
      options: [
        { text: 'A invasão normanda das ilhas britânicas',                           correct: false },
        { text: 'Impostos abusivos e demandas de retorno à servidão após a Peste',   correct: true  },
        { text: 'A excomungão do rei inglês pelo papa',                              correct: false },
        { text: 'A derrota inglesa na batalha de Crécy',                             correct: false }
      ],
      explanation: 'Após a Peste Negra, a nobreza inglesa tentou reimpositar a servidão e aumentou impostos — o levante camponês de 1381 foi a resposta violenta a essa reação conservadora.'
    },
    {
      prompt: 'Como a burguesia comercial contribuiu para o fim do feudalismo?',
      options: [
        { text: 'Liderou revoltas armadas contra a nobreza',                         correct: false },
        { text: 'Financiou reis centralizadores em troca de proteção ao comércio',   correct: true  },
        { text: 'Comprou terras e se tornou a nova nobreza feudal',                  correct: false },
        { text: 'Convenceu o papa a abolir o sistema de servidão',                   correct: false }
      ],
      explanation: 'A burguesia precisava de segurança, moeda estável e estradas livres — interesses que os reis podiam garantir, mas os nobres feudais atrapalhavam com pedágios e guerras locais.'
    },
    {
      prompt: 'O que diferencia a crise feudal do século XIV de uma "simples crise"?',
      options: [
        { text: 'Foi resolvida rapidamente com reformas da Igreja',                  correct: false },
        { text: 'Foi uma crise sistêmica — Peste, guerras, revoltas e crise da Igreja simultaneamente', correct: true },
        { text: 'Afetou apenas a nobreza, sem impacto nos camponeses',               correct: false },
        { text: 'Só ocorreu na França e Inglaterra, não no restante da Europa',      correct: false }
      ],
      explanation: 'A crise do século XIV foi uma "policrise": Peste Negra, guerras intermináveis, revoltas camponesas, cisma da Igreja — múltiplos sistemas colapsando ao mesmo tempo.'
    },
    {
      prompt: 'Por que o Cisma do Ocidente (1378-1417) agravou a crise feudal?',
      options: [
        { text: 'Dividiu a Europa em dois reinos rivais permanentes',              correct: false },
        { text: 'Minou a autoridade espiritual da Igreja — base de legitimidade de toda a ordem medieval', correct: true },
        { text: 'Causou guerra entre os Estados Papais e o Sacro Império',         correct: false },
        { text: 'Fez o comércio mediterrâneo colapsar completamente',              correct: false }
      ],
      explanation: 'Com dois ou três papas rivais, a Igreja perdeu credibilidade — e como todo o sistema feudal baseava-se na legitimidade divina mediada pela Igreja, o cisma abalou os alicerces da ordem medieval.'
    },
    {
      prompt: 'Qual das seguintes afirmações melhor descreve o processo de fim do feudalismo?',
      options: [
        { text: 'Foi uma revolução rápida e violenta que destruiu o sistema de uma vez',       correct: false },
        { text: 'Foi um processo gradual de 200 anos com causas múltiplas e interligadas',     correct: true  },
        { text: 'Foi decretado por um consílio da Igreja no século XV',                         correct: false },
        { text: 'Ocorreu apenas nos países que tiveram Reforma Protestante',                    correct: false }
      ],
      explanation: 'O feudalismo não "morreu" em uma data — foi um lento declínio de 200 anos (sécs. XIV-XV), com o fortalecimento das monarquias nacionais e o crescimento do capitalismo mercantil.'
    }
  ],

  adaptiveReview: [
    {
      prompt: 'DIFÍCIL: Por que a Peste Negra pode ser considerada um fator de "aceleração histórica" que preparou o Renascimento?',
      options: [
        { text: 'Porque eliminou os sábios da Igreja, deixando espaço para pensadores laicos',           correct: false },
        { text: 'Porque destruiu a certeza religiosa, valorizou a vida terrena e criou escassez de mão de obra que incentivou inovações', correct: true },
        { text: 'Porque os sobreviventes ficaram tão ricos com heranças que financiaram as artes',       correct: false },
        { text: 'Porque as cidades que sobreviveram à Peste tornaram-se automaticamente Estados modernos', correct: false }
      ],
      explanation: 'A Peste questionou "onde está Deus?" — forçando uma reavaliação do foco na vida terrena (humanismo). A escassez de trabalhadores incentivou inovações tecnológicas. A riqueza concentrada nos sobreviventes alimentou o mecenato. Tudo isso preparou o Renascimento.'
    }
  ],

  rewards: { xp: 150, gems: 15, badge: '💀 Historiador da Crise' },
  completionMessage: '💀 Você sobreviveu à Crise do Feudalismo — como os melhores medievais!',
  nextStage: 'hist_sboss'
};

window.HIST_S06 = HIST_S06;
