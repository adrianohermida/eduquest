/**
 * HIST BOSS STAGE — Senhor Feudal Obscuro
 */

const HIST_SBOSS = {
  id: 'hist_sboss',
  title: 'Senhor Feudal Obscuro',
  icon: '🏰',
  difficulty: 'hard',
  estimatedTime: 18,
  isBoss: true,

  learningObjectives: [
    'Sintetizar todo o conhecimento da Idade Média',
    'Analisar conexões entre feudalismo, Igreja, Cruzadas e crise',
    'Aplicar conceitos medievais em questões de interpretação',
    'Diferenciar causa e consequência nos processos medievais',
    'Demonstrar domínio completo do capítulo'
  ],

  summary: {
    readTime: 2,
    content: [
      {
        icon: '🏰',
        title: 'O Desafio do Senhor Feudal',
        text: 'Você chegou ao Castelo do Senhor Feudal Obscuro.\n\nEle domina a Idade Média inteira — feudalismo, Igreja, Cruzadas, comércio, cultura e a grande crise do século XIV.\n\nSeu desafio: responder 10 questões difíceis de análise e síntese que conectam todos os temas do capítulo.\n\n⚠️ AVISO: Este boss usa questões de interpretação, não apenas memorização. Você precisa PENSAR, não apenas lembrar.\n\n🔑 Dica final: conecte sempre CAUSA → CONSEQUÊNCIA → TRANSFORMAÇÃO histórica.'
      },
      {
        icon: '⚔️',
        title: 'Armas do Chefe',
        text: 'O Senhor Feudal Obscuro usa três armas:\n\n1. CONFUSÃO TEMPORAL — mistura datas e períodos para enganar\n2. INVERSÃO CAUSAL — troca causas e consequências\n3. GENERALIZAÇÃO FALSA — afirmações que parecem corretas mas têm exceção fatal\n\nComo derrotá-lo:\n• Lembre-se dos SÉCULOS (V ao XV)\n• Trace a linha: quem causou o quê?\n• Desconfie de afirmações absolutas ("nunca", "sempre", "todos")'
      }
    ],

    flashcards: [
      { q: 'Linha do tempo medieval básica?',     a: 'Séc. V (queda Roma) → Séc. X (feudalismo pleno) → Séc. XI (Cruzadas) → Séc. XIV (crise) → Séc. XV (fim).' },
      { q: 'Trio da crise feudal?',               a: 'Peste Negra + Guerra dos Cem Anos + Revoltas camponesas.' },
      { q: 'O que conecta Cruzadas e Renascimento?', a: 'Contato com o Oriente trouxe filosofia, matemática, tecnologia — sementes do humanismo.' }
    ],

    mnemonics: [
      { trigger: 'Medieval completo', memory: '"FEUDALISMO → IGREJA → CRUZADAS → COMÉRCIO → CULTURA → CRISE → FIM. A jornada medieval em 7 passos."' }
    ],

    miniReview: [
      { q: 'Como o feudalismo e a Igreja se sustentavam mutuamente?', a: 'Nobreza doava terras à Igreja; Igreja legitimava o poder dos nobres com a doutrina divina.' },
      { q: 'Qual o elo entre Cruzadas e o Renascimento?',            a: 'Cruzadas → contato com cultura islâmica → textos gregos → humanismo → Renascimento.' }
    ]
  },

  warmup: [
    {
      prompt: '🏰 BOSS INTRO: O Senhor Feudal pergunta: a Idade Média vai de:',
      options: [
        { text: 'Séc. I ao séc. X d.C.',          correct: false },
        { text: 'Séc. V ao séc. XV d.C.',          correct: true  },
        { text: 'Séc. III ao séc. XIII d.C.',      correct: false },
        { text: 'Séc. X ao séc. XVIII d.C.',       correct: false }
      ],
      explanation: 'A Idade Média começa com a queda do Império Romano do Ocidente (476 d.C., séc. V) e termina com a queda de Constantinopla (1453, séc. XV) ou as Grandes Navegações (1492).'
    },
    {
      prompt: '🏰 BOSS: Qual das seguintes sequências está CORRETAMENTE ordenada cronologicamente?',
      options: [
        { text: 'Cruzadas → Feudalismo → Peste Negra → Renascimento',   correct: false },
        { text: 'Feudalismo → Cruzadas → Comércio medieval → Peste Negra', correct: true },
        { text: 'Pest Negra → Cruzadas → Feudalismo → Renascimento',     correct: false },
        { text: 'Renascimento → Feudalismo → Cruzadas → Crise',          correct: false }
      ],
      explanation: 'Ordem correta: Feudalismo (séc. V-X) → Cruzadas (1096-1291) → Renascimento comercial/urbano (séc. XI-XIII) → Peste Negra (1347) → Crise e fim do feudalismo.'
    },
    {
      prompt: '🏰 BOSS: Qual instituição foi O PRINCIPAL elemento de continuidade ao longo de TODA a Idade Média?',
      options: [
        { text: 'Os reinos bárbaros germânicos',      correct: false },
        { text: 'A Igreja Católica Romana',            correct: true  },
        { text: 'O Sacro Império Romano-Germânico',   correct: false },
        { text: 'As guildas de comerciantes',         correct: false }
      ],
      explanation: 'A Igreja Católica foi a única instituição presente e poderosa do início ao fim da Idade Média — da queda de Roma ao Renascimento, manteve estrutura, poder e influência cultural.'
    }
  ],

  guidedPractice: [
    {
      prompt: '🏰 BOSS TRAP: O Senhor Feudal afirma: "O feudalismo foi destruído pelas Cruzadas." Você concorda?',
      options: [
        { text: 'Sim — as Cruzadas mataram os nobres e acabaram com o feudalismo',                     correct: false },
        { text: 'Não totalmente — as Cruzadas enfraqueceram a nobreza, mas a crise veio 200 anos depois', correct: true  },
        { text: 'Sim — o comércio das Cruzadas substituiu imediatamente o sistema feudal',              correct: false },
        { text: 'Não — as Cruzadas fortaleceram o feudalismo ao trazer riquezas para os nobres',        correct: false }
      ],
      explanation: 'As Cruzadas foram um FATOR de enfraquecimento (nobres morriam, se endividavam), mas o feudalismo só entrou em colapso pleno no séc. XIV com a Peste + guerras + revoltas — 200 anos depois.'
    },
    {
      prompt: '🏰 BOSS TRAP: "A Peste Negra foi apenas uma tragédia sem nenhum impacto histórico positivo." Essa afirmação é:',
      options: [
        { text: 'Verdadeira — a Peste só destruiu, não criou nada',                                         correct: false },
        { text: 'Falsa — a escassez de mão de obra acelerou mudanças sociais e tecnológicas favoráveis ao progresso', correct: true  },
        { text: 'Verdadeira — o número de mortos impediu qualquer recuperação por séculos',                  correct: false },
        { text: 'Falsa — a Peste trouxe riqueza para os sobreviventes, que financiaram o Renascimento',      correct: false }
      ],
      explanation: 'A Peste foi devastadora, mas gerou: escassez de mão de obra → negociação dos servos, salários, fim da servidão; questionamento religioso → humanismo; aceleração de inovações. O Renascimento floresceu décadas após a Peste.'
    }
  ],

  questions: [
    {
      prompt: '🏰 Analise: Por que o papa era mais poderoso que os reis medievais, mesmo sem exército próprio?',
      options: [
        { text: 'Porque o papa controlava o comércio mediterrâneo',                                    correct: false },
        { text: 'Porque controlava a salvação — sem a bênção da Igreja, nenhum rei tinha legitimidade divina', correct: true  },
        { text: 'Porque os cardeais eram os verdadeiros generais dos exércitos medievais',              correct: false },
        { text: 'Porque o papa podia confiscar as terras de qualquer rei europeu',                     correct: false }
      ],
      explanation: 'O poder papal era espiritual, mas com enorme impacto político: excomunhão = perda de legitimidade = vassalos liberados do juramento. Rei sem legitimidade divina = rei sem poder.'
    },
    {
      prompt: '🏰 Conexão: Qual o fio condutor que liga as Cruzadas ao Renascimento italiano?',
      options: [
        { text: 'As Cruzadas trouxeram ouro islâmico que financiou pintores italianos',                correct: false },
        { text: 'Cruzadas → contato com cultura islâmica → textos gregos preservados → humanismo → Renascimento', correct: true  },
        { text: 'Os cruzados trouxeram a imprensa do Oriente que permitiu o Renascimento',             correct: false },
        { text: 'As cidades cruzadas tornaram-se centros do Renascimento após as guerras',             correct: false }
      ],
      explanation: 'O caminho: Cruzadas → contato com o Islã → redescoberta de Aristóteles, Euclides e outros gregos preservados em árabe → tradução para latim → escolástica → questionamento → humanismo → Renascimento.'
    },
    {
      prompt: '🏰 Análise: O sistema feudal era estável porque:',
      options: [
        { text: 'Todos os grupos sociais se beneficiavam igualmente',                                     correct: false },
        { text: 'Cada grupo tinha um papel definido e a Igreja legitimava a hierarquia como ordem divina', correct: true  },
        { text: 'Os servos podiam ascender socialmente através do mérito',                                 correct: false },
        { text: 'Havia democracia nos feudos — os servos votavam nas decisões locais',                    correct: false }
      ],
      explanation: 'O feudalismo era estável enquanto todos acreditavam que a ordem social era divina e imutável: nobres guerreavam, clérigos rezavam, servos trabalhavam — por vontade de Deus. A Peste questionou essa visão.'
    },
    {
      prompt: '🏰 Síntese: Por que a burguesia QUERIA o fim do feudalismo, mas NÃO queria revolução?',
      options: [
        { text: 'Porque a burguesia era covarde e temia a violência',                                    correct: false },
        { text: 'Porque precisava de ordem, moeda estável e estradas — não de caos revolucionário',      correct: true  },
        { text: 'Porque a burguesia era aliada da nobreza feudal contra os camponeses',                  correct: false },
        { text: 'Porque a Igreja proibiu a burguesia de participar de revoltas',                         correct: false }
      ],
      explanation: 'A burguesia queria estabilidade para o comércio: leis uniformes, moeda única, segurança nas estradas. Apoiou reis centralizadores — não revolução. Preferia reforma gradual à anarquia.'
    },
    {
      prompt: '🏰 Comparação: O que tinha em comum a "servidão medieval" com a "escravidão antiga"?',
      options: [
        { text: 'Em ambos os casos, os trabalhadores eram propriedade total do senhor',                  correct: false },
        { text: 'Ambos eram sistemas de trabalho compulsório que limitavam a liberdade dos trabalhadores', correct: true  },
        { text: 'Ambos foram abolidos pelas Cruzadas no séc. XII',                                       correct: false },
        { text: 'Em ambos os sistemas, o trabalhador não recebia nenhuma compensação',                   correct: false }
      ],
      explanation: 'Servidão ≠ escravidão: o servo tinha alguns direitos (terra, família, não podia ser vendido separado da terra). Mas ambos eram trabalho compulsório, sem liberdade de movimento — sistemas de coerção, não de contrato livre.'
    },
    {
      prompt: '🏰 Causa-efeito: A invenção do "arco ogival" impactou a história europeia porque:',
      options: [
        { text: 'Tornou os castelos medievais impenetráveis por séculos',                                 correct: false },
        { text: 'Permitiu catedrais maiores e mais luminosas, expressando a teologia medieval em pedra',  correct: true  },
        { text: 'Foi adaptado como arma de guerra nas Cruzadas',                                          correct: false },
        { text: 'Permitiu construir pontes que conectaram os feudos',                                     correct: false }
      ],
      explanation: 'O arco ogival → paredes mais finas → vitrais enormes → catedrais luminosas → "a luz como metáfora de Deus" → expressão concreta da teologia medieval. Arquitetura e teologia entrelaçadas.'
    },
    {
      prompt: '🏰 Avaliação: Qual das seguintes afirmações sobre as Cruzadas é MAIS precisa historicamente?',
      options: [
        { text: 'As Cruzadas foram guerras santas e suas causas foram puramente religiosas',              correct: false },
        { text: 'As Cruzadas tinham motivações mistas: religião, terras, comércio e aventura — dependendo do participante', correct: true  },
        { text: 'As Cruzadas foram invenções dos reis para dominar o papado',                             correct: false },
        { text: 'As Cruzadas beneficiaram igualmente cristãos e muçulmanos pelo intercâmbio cultural',   correct: false }
      ],
      explanation: 'História raramente é simples: um papa queria poder; nobres queriam terras e aventura; comerciantes venezianos queriam rotas; camponeses queriam indulgências. As Cruzadas foram todas essas coisas simultaneamente.'
    },
    {
      prompt: '🏰 Síntese: Se você tivesse que identificar O ÚNICO fator mais importante para o fim do feudalismo, qual seria?',
      options: [
        { text: 'A Peste Negra — sem ela, o feudalismo teria continuado indefinidamente',                correct: false },
        { text: 'A combinação de fatores foi o que tornou o colapso inevitável — nenhum fator isolado bastaria', correct: true  },
        { text: 'O comércio — a burguesia destruiu o feudalismo pelo dinheiro, sem violência',            correct: false },
        { text: 'As Cruzadas — elas iniciaram o processo que 300 anos depois destruiu o feudalismo',     correct: false }
      ],
      explanation: 'Esta é uma questão de método histórico: historiadores preferem explicações multicausais. A Peste sozinha não derrubaria o feudalismo sem o comércio que já o enfraquecia; sem as guerras que endividavam a nobreza; sem a crise da Igreja. Foi a combinação que tornou o colapso inevitável.'
    },
    {
      prompt: '🏰 Julgamento final: Por que a Idade Média não deve ser chamada de "Idade das Trevas"?',
      options: [
        { text: 'Porque havia eletricidade em alguns países europeus medievais',                          correct: false },
        { text: 'Porque houve grandes realizações: catedrais, universidades, literatura, filosofia e comércio', correct: true  },
        { text: 'Porque a vida medieval era mais justa e igualitária que na Antiguidade',                 correct: false },
        { text: 'Porque a Idade Média foi mais iluminada que o Renascimento',                            correct: false }
      ],
      explanation: '"Idade das Trevas" é um mito renascentista — os humanistas do séc. XV chamavam o período anterior de "trevas" para valorizar seu próprio tempo. A Idade Média produziu: catedrais góticas, Tomás de Aquino, Dante, universidades, o direito canônico, as primeiras nações europeias.'
    },
    {
      prompt: '🏰 QUESTÃO FINAL DO BOSS: Qual das seguintes "heranças medievais" está PRESENTE no mundo moderno?',
      options: [
        { text: 'O sistema de servidão feudal adaptado ao trabalho industrial',                         correct: false },
        { text: 'As universidades, o direito romano-canônico, o Parlamento inglês e as línguas nacionais', correct: true  },
        { text: 'A hierarquia eclesiástica como governo de todos os países europeus',                    correct: false },
        { text: 'As guildas medievais como sindicatos modernos — sem alteração',                         correct: false }
      ],
      explanation: 'A Idade Média nos legou: as universidades (Bologna, Oxford, Paris ainda existem), o Parlamento inglês (1265), as línguas nacionais (português, francês, italiano derivam do latim medieval), o direito canônico que influenciou o direito civil. Somos herdeiros medievais.'
    }
  ],

  adaptiveReview: [
    {
      prompt: 'DIFÍCIL BOSS: Se Dante vivesse hoje, em que contexto ele escreveria "A Divina Comédia" — e o que isso nos diz sobre a Idade Média?',
      options: [
        { text: 'Escreveria em latim, pois era a língua superior — mostrando que os medievais eram conservadores', correct: false },
        { text: 'Escreveria em português/espanhol — exatamente como fez em italiano, buscando atingir o povo; a Idade Média tinha pulsão democrática sob a superfície aristocrática', correct: true  },
        { text: 'Não escreveria nada — a Idade Média não valorizava a escrita criativa',                 correct: false },
        { text: 'Escreveria em árabe, pois era a língua do conhecimento na época',                       correct: false }
      ],
      explanation: 'Dante escreveu em toscano (língua do povo) porque queria ser lido além do clero — gesto de democratização cultural. A Idade Média não era monolítica: sob a autoridade havia criatividade, questionamento, inovação. Dante, Joana d\'Arc, as guildas, as universidades — todos empurraram limites.'
    }
  ],

  rewards: { xp: 200, gems: 20, badge: '🏰 Derrotou o Senhor Feudal' },
  completionMessage: '🏰 IMPRESSIONANTE! Você derrotou o Senhor Feudal Obscuro — domina a Idade Média completa!',
  nextStage: 'hist_sfinal'
};

window.HIST_SBOSS = HIST_SBOSS;
