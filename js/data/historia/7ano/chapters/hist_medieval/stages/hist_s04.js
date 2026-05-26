/**
 * HIST STAGE 04 — Comércio e Cidades Medievais
 */

const HIST_S04 = {
  id: 'hist_s04',
  title: 'Comércio e Cidades Medievais',
  icon: '🏪',
  difficulty: 'medium',
  estimatedTime: 12,

  learningObjectives: [
    'Compreender o renascimento comercial e urbano medieval',
    'Identificar as feiras e rotas comerciais medievais',
    'Entender o papel das guildas (corporações de ofício)',
    'Reconhecer o surgimento da burguesia',
    'Conectar comércio medieval com o fim do feudalismo'
  ],

  summary: {
    readTime: 3,
    content: [
      {
        icon: '🏪',
        title: 'Renascimento Comercial (séc. XI-XIII)',
        text: 'Após séculos de economia fechada (subsistência), a partir do séc. XI o comércio europeu renasceu:\n\n• Aumento da produção agrícola → excedentes para vender\n• As Cruzadas reabriam rotas mediterrâneas\n• Cidades italianas (Veneza, Gênova, Pisa) dominavam o comércio mediterrâneo\n• Flandres (atual Bélgica) era o centro industrial do Norte (tecidos)\n\n🔑 Produtos cobiçados do Oriente: especiarias (pimenta, cravo, noz-moscada), seda, porcelana, tapetes.'
      },
      {
        icon: '🗺️',
        title: 'Feiras e Rotas Comerciais',
        text: 'Feiras medievais: grandes eventos comerciais periódicos\n• Feiras de Champagne (França) — centro do comércio europeu séc. XII-XIII\n• Reuniam comerciantes de toda a Europa\n• Criaram instrumentos financeiros: letras de câmbio, crédito\n\nRotas principais:\n• Via Mediterrânea: Europa → Itália → Oriente\n• Rota Hanseática: mar Báltico e Mar do Norte (Liga Hanseática — cidades alemãs)\n• Rota da Seda: China → Ásia Central → Europa (especiarias e sedas)'
      },
      {
        icon: '👥',
        title: 'Burgos, Burguesia e Guildas',
        text: 'Burgos = cidades que cresciam fora dos feudos, ligadas ao comércio\nBurguesia = classe de comerciantes e artesãos que vivia nos burgos\n\nCaracterísticas das cidades medievais:\n• Mercado central, catedral, muros defensivos\n• Certa autonomia (Carta Foral) conquistada dos senhores\n\nGuildas (corporações de ofício):\n• Associações de artesãos ou comerciantes por ofício\n• Regulavam preços, qualidade, treinamento (aprendiz → oficial → mestre)\n• Monopólio local — proteção contra concorrência\n\n🔑 A burguesia será a classe que derrubará o feudalismo e financiará a formação dos Estados Modernos.'
      }
    ],

    flashcards: [
      { q: 'O que eram as Feiras de Champagne?',  a: 'Grandes eventos comerciais periódicos no norte da França — centro do comércio europeu séc. XII-XIII.' },
      { q: 'O que era a Liga Hanseática?',        a: 'Aliança de cidades comerciais do norte (Hamburgo, Lübeck, etc.) que controlava o Báltico e Mar do Norte.' },
      { q: 'O que era uma guilda medieval?',      a: 'Corporação de artesãos/comerciantes que regulava ofício, preços e formação (aprendiz→mestre).' },
      { q: 'Burguesia — origem do termo?',        a: 'Moradores dos burgos (cidades) — classe intermediária entre nobreza e servos.' },
      { q: 'O que era a letra de câmbio?',        a: 'Instrumento financeiro medieval — espécie de "cheque" que evitava carregar moedas nas viagens.' }
    ],

    mnemonics: [
      { trigger: 'Guildas',    memory: '"Aprendiz → Oficial → Mestre. Como chegar no topo da guilda medieval."' },
      { trigger: 'Burguesia',  memory: '"BURGO = cidade. BURGUESIA = quem vive e trabalha na cidade. NÃO é nobre, NÃO é servo."' }
    ],

    miniReview: [
      { q: 'Por que Veneza era tão rica?',                   a: 'Controlava o comércio entre Europa e Oriente pelo Mediterrâneo — especiarias, seda, tecidos.' },
      { q: 'Como a burguesia contribuiu para o fim do feudalismo?', a: 'Apoiou os reis centralizadores em troca de proteção ao comércio — enfraquecendo a nobreza feudal.' }
    ]
  },

  warmup: [
    {
      prompt: 'O "renascimento comercial" medieval iniciou-se principalmente no século:',
      options: [
        { text: 'V',    correct: false },
        { text: 'VIII', correct: false },
        { text: 'XI',   correct: true  },
        { text: 'XIV',  correct: false }
      ],
      explanation: 'A partir do séc. XI, a melhoria agrícola gerou excedentes, as Cruzadas reabriram rotas, e as cidades italianas impulsionaram o comércio europeu.'
    },
    {
      prompt: 'A "burguesia" medieval era formada por:',
      options: [
        { text: 'Nobres que viviam em castelos',                correct: false },
        { text: 'Comerciantes e artesãos que viviam nas cidades', correct: true },
        { text: 'Servos que fugiam do feudo',                   correct: false },
        { text: 'Monges que administravam mosteiros ricos',     correct: false }
      ],
      explanation: 'Burguesia vem de "burgo" (cidade). Os burgueses eram a nova classe intermediária — comerciantes, artesãos, banqueiros — que crescia fora da estrutura feudal.'
    },
    {
      prompt: 'As guildas medievais eram:',
      options: [
        { text: 'Ordens religiosas militares',                              correct: false },
        { text: 'Corporações de ofício que regulavam trabalho e comércio',  correct: true  },
        { text: 'Ligas de cidades contra os reis',                         correct: false },
        { text: 'Grupos de peregrinos que iam às Cruzadas',                correct: false }
      ],
      explanation: 'Guildas eram associações de artesãos ou comerciantes por ofício — regulavam preços, qualidade e formação profissional.'
    }
  ],

  guidedPractice: [
    {
      prompt: '🔍 DICA: A letra de câmbio resolveu um problema prático do comércio medieval.\n\nQual problema a letra de câmbio solucionava?',
      options: [
        { text: 'A falta de metais preciosos na Europa',                             correct: false },
        { text: 'O risco de viajar com ouro e prata — o câmbio era uma "promessa de pagamento"', correct: true },
        { text: 'A cobrança de impostos pelos reis nas estradas',                    correct: false },
        { text: 'A diferença de preços entre as feiras',                             correct: false }
      ],
      explanation: 'Com a letra de câmbio, um comerciante podia depositar dinheiro em Florença e sacar em Paris — sem carregar moedas pesadas e arriscadas pela estrada.'
    },
    {
      prompt: '🔍 DICA: A hierarquia das guildas preparava profissionais por etapas.\n\nQual era a ordem correta de formação em uma guilda?',
      options: [
        { text: 'Mestre → Oficial → Aprendiz',  correct: false },
        { text: 'Oficial → Mestre → Aprendiz',  correct: false },
        { text: 'Aprendiz → Oficial → Mestre',  correct: true  },
        { text: 'Aprendiz → Mestre → Oficial',  correct: false }
      ],
      explanation: 'Um jovem entrava como aprendiz (sem salário), tornava-se oficial (assalariado), e só se produzia uma "obra-prima" aceita pela guilda era promovido a mestre.'
    }
  ],

  questions: [
    {
      prompt: 'Qual cidade italiana dominou o comércio mediterrâneo com o Oriente no período medieval?',
      options: [
        { text: 'Roma',    correct: false },
        { text: 'Florença', correct: false },
        { text: 'Veneza',  correct: true  },
        { text: 'Nápoles', correct: false }
      ],
      explanation: 'Veneza controlava as principais rotas comerciais entre Europa e Oriente Médio — especiarias, tecidos, joias e outros produtos de luxo.'
    },
    {
      prompt: 'A Liga Hanseática era uma aliança de:',
      options: [
        { text: 'Cavaleiros cruzados do Báltico',                  correct: false },
        { text: 'Cidades comerciais do norte europeu (Alemanha, etc.)', correct: true },
        { text: 'Mosteiros que controlavam o comércio de grãos',    correct: false },
        { text: 'Nobres que se opunham ao poder do papa',           correct: false }
      ],
      explanation: 'A Liga Hanseática (séc. XIII-XVII) reunia cidades como Lübeck, Hamburgo e Bremen — controlava o comércio no Báltico e Mar do Norte.'
    },
    {
      prompt: 'A "Carta Foral" concedida pelos señores às cidades medievais garantia:',
      options: [
        { text: 'Isenção total de impostos para sempre',                          correct: false },
        { text: 'Certa autonomia administrativa e jurídica para a cidade',         correct: true  },
        { text: 'O direito de fazer guerra contra outros senhores',               correct: false },
        { text: 'O controle da Igreja sobre a cidade',                            correct: false }
      ],
      explanation: 'As Cartas Forais eram concessões de autonomia às cidades — direito de eleger autoridades locais, ter mercado, e administrar suas próprias leis.'
    },
    {
      prompt: 'O que eram as especiarias tão valorizadas no comércio medieval?',
      options: [
        { text: 'Metais preciosos como ouro e prata',              correct: false },
        { text: 'Pimenta, cravo, canela, noz-moscada — usadas na preservação de alimentos e culinária', correct: true },
        { text: 'Tecidos finos como seda e algodão',               correct: false },
        { text: 'Pedras preciosas e joias do Oriente',             correct: false }
      ],
      explanation: 'As especiarias eram vitais para conservar carnes (sem geladeira!), melhorar o sabor dos alimentos e tinham usos medicinais — valiam tanto quanto ouro.'
    },
    {
      prompt: 'O surgimento das cidades medievais enfraqueceu o feudalismo porque:',
      options: [
        { text: 'As cidades organizaram exércitos para destruir os castelos',      correct: false },
        { text: 'Criou uma nova classe (burguesia) fora da estrutura feudal, aliada aos reis', correct: true },
        { text: 'Os servos podiam comprar sua liberdade nas feiras',               correct: false },
        { text: 'A Igreja proibiu o feudalismo nas regiões com cidades',           correct: false }
      ],
      explanation: 'A burguesia, interessada em segurança e unidade para o comércio, aliou-se aos reis centralizadores — minando o poder dos nobres feudais.'
    },
    {
      prompt: 'Qual produto era o principal artigo industrial do norte europeu (Flandres) na Idade Média?',
      options: [
        { text: 'Cerâmica e porcelana',  correct: false },
        { text: 'Armas e armaduras',     correct: false },
        { text: 'Tecidos de lã e linho', correct: true  },
        { text: 'Vidro e cristal',       correct: false }
      ],
      explanation: 'Flandres (atual Bélgica) era o principal centro têxtil medieval — tecidos de lã de alta qualidade exportados para toda a Europa.'
    },
    {
      prompt: 'O sistema de crédito medieval foi desenvolvido principalmente pelos:',
      options: [
        { text: 'Cavaleiros templários (banqueiros do período)',  correct: true  },
        { text: 'Mosteiros beneditinos',                         correct: false },
        { text: 'Reis que emitiam moeda única',                  correct: false },
        { text: 'Servos que poupavam nas feiras',                correct: false }
      ],
      explanation: 'Os Templários criaram um sistema bancário primitivo — depósitos e saques em diferentes cidades. Também os banqueiros florentinos (Medici) desenvolveram o crédito moderno.'
    },
    {
      prompt: 'Por que o comércio medieval levou ao desenvolvimento da contabilidade e da matemática prática?',
      options: [
        { text: 'Os papas exigiam que comerciantes estudassem matemática',   correct: false },
        { text: 'A necessidade de calcular lucros, câmbio e dívidas impulsionou a matemática comercial', correct: true },
        { text: 'As feiras tinham escolas matemáticas obrigatórias',         correct: false },
        { text: 'A Lei Canônica proibia o comércio sem educação matemática', correct: false }
      ],
      explanation: 'O comércio exigiu cálculos de câmbio, juros e contabilidade — impulsionando a adoção dos algarismos arábicos (muito mais fáceis que os romanos) na Europa.'
    },
    {
      prompt: 'A expressão "o ar da cidade liberta" medieval referia-se a:',
      options: [
        { text: 'A ausência de poluição nas cidades medievais',                              correct: false },
        { text: 'A lei de que um servo que vivesse 1 ano na cidade tornava-se livre',        correct: true  },
        { text: 'O fato de que as cidades não tinham muros (eram abertas)',                  correct: false },
        { text: 'A liberdade religiosa concedida nas cidades medievais',                     correct: false }
      ],
      explanation: '"Stadtluft macht frei" (o ar da cidade liberta) — em muitas regiões, um servo que vivesse um ano na cidade sem ser reclamado pelo senhor tornava-se homem livre.'
    },
    {
      prompt: 'Qual foi o principal impacto das Feiras de Champagne no comércio europeu?',
      options: [
        { text: 'Permitiram que apenas comerciantes franceses dominassem o comércio',        correct: false },
        { text: 'Criaram um ponto de encontro regular de comerciantes de toda a Europa',     correct: true  },
        { text: 'Substituíram completamente o comércio mediterrâneo',                        correct: false },
        { text: 'Foram o local onde se criou a Liga Hanseática',                             correct: false }
      ],
      explanation: 'As Feiras de Champagne eram eventos periódicos onde comerciantes do Mediterrâneo e do Norte europeu se encontravam — o primeiro "mercado europeu" integrado.'
    }
  ],

  adaptiveReview: [
    {
      prompt: 'DIFÍCIL: Por que a Igreja proibia a "usura" (cobrança de juros) na Idade Média, mas os banqueiros a praticavam mesmo assim?',
      options: [
        { text: 'Porque os banqueiros eram todos judeus, fora da lei canônica',         correct: false },
        { text: 'A usura era proibida pelo dogma, mas os banqueiros usavam "taxas de câmbio" e "presentes" para disfarçar os juros', correct: true },
        { text: 'A Igreja não tinha poder real sobre os comerciantes',                  correct: false },
        { text: 'Os juros eram proibidos apenas para o clero, não para laicos',        correct: false }
      ],
      explanation: 'A Church proibia juros, mas a prática era essencial ao comércio. Banqueiros italianos e judeus (estes, fora da lei canônica) desenvolveram mecanismos disfarçados — letras de câmbio com "taxa de risco" que na prática eram juros.'
    }
  ],

  rewards: { xp: 130, gems: 13, badge: '🏪 Mercador Medieval' },
  completionMessage: '🏪 Você domina o renascimento comercial — é um mestre mercador medieval!',
  nextStage: 'hist_s05'
};

window.HIST_S04 = HIST_S04;
