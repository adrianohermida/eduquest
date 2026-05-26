/**
 * HIST STAGE 02 — A Igreja na Idade Média
 */

const HIST_S02 = {
  id: 'hist_s02',
  title: 'A Igreja na Idade Média',
  icon: '✝️',
  difficulty: 'easy',
  estimatedTime: 12,

  learningObjectives: [
    'Compreender o papel político e espiritual da Igreja Católica medieval',
    'Identificar a estrutura hierárquica da Igreja',
    'Entender o poder do papa e os conflitos com reis',
    'Reconhecer a influência cultural e educacional dos mosteiros',
    'Conhecer a Inquisição e o controle religioso'
  ],

  summary: {
    readTime: 3,
    content: [
      {
        icon: '✝️',
        title: 'A Igreja Como Poder',
        text: 'Na Idade Média, a Igreja Católica era a instituição mais poderosa da Europa Ocidental.\n\nPoder espiritual: controlava a salvação das almas — quem era excomungado ficava fora da Igreja e teoricamente fora do Paraíso.\n\nPoder temporal: possuía enormes extensões de terra (até 1/3 da Europa), cobrava o dízimo (10% da produção), exercia tribunais próprios.\n\n🔑 A frase "Fora da Igreja não há salvação" resumia o poder que a instituição tinha sobre toda a sociedade medieval.'
      },
      {
        icon: '👑',
        title: 'Hierarquia e Conflitos',
        text: 'Hierarquia da Igreja:\nPapa → Cardeais → Arcebispos → Bispos → Padres → Diáconos\n\nConflito das Investiduras:\n• Reis queriam nomear bispos e abades em seus territórios\n• Papa Gregório VII vs. Imperador Henrique IV (séc. XI)\n• Henrique IV foi humilhado em Canossa (1077) — pediu perdão ao papa\n\n🔑 A "Querela das Investiduras" mostrou que o papa era mais poderoso que qualquer rei europeu nesse período.'
      },
      {
        icon: '📚',
        title: 'Mosteiros e Cultura',
        text: 'Os mosteiros eram os centros de cultura e saber da Idade Média:\n• Monges copiavam manuscritos (preservando o conhecimento clássico)\n• Escolas monásticas — únicos locais de educação formal\n• Hospitais e albergues para peregrinos\n• Agricultura avançada nos feudos eclesiásticos\n\nOrdens religiosas famosas:\n• Beneditinos (séc. VI) — "Ora et Labora" (reza e trabalha)\n• Franciscanos e Dominicanos (séc. XIII) — mendicantes, pregavam nas cidades\n\n⚠️ A Inquisição (séc. XIII) perseguia heresias — julgava e punia quem questionava os dogmas da Igreja.'
      }
    ],

    flashcards: [
      { q: 'Poder da Igreja na Idade Média?',      a: 'Espiritual (salvação) + temporal (terras, tribunais, dízimo). A mais poderosa instituição.' },
      { q: 'O que era a excomunhão?',              a: 'Exclusão da Igreja — perda dos sacramentos e, acreditava-se, da salvação.' },
      { q: 'Conflito das Investiduras?',           a: 'Disputa entre papa e reis pelo direito de nomear bispos. Papa Gregório VII × Henrique IV.' },
      { q: 'O que faziam os mosteiros?',           a: 'Copiavam manuscritos, educavam, cuidavam de doentes, desenvolviam agricultura.' },
      { q: 'O que era o dízimo?',                  a: '10% da produção agrícola pago obrigatoriamente à Igreja.' }
    ],

    mnemonics: [
      { trigger: 'Poder da Igreja', memory: '"A Igreja tinha TUDO: terra, dinheiro, educação, justiça e a chave do Paraíso!"' },
      { trigger: 'Ora et Labora',   memory: '"Beneditinos: ORA = reza, LABORA = trabalha. Lema dos monges negros."' }
    ],

    miniReview: [
      { q: 'Por que o papa era mais poderoso que os reis?', a: 'Controlava a salvação — um rei excomungado perdia a legitimidade divina para governar.' },
      { q: 'O que aconteceu em Canossa (1077)?',           a: 'Henrique IV pediu perdão ao papa Gregório VII após ser excomungado.' }
    ]
  },

  warmup: [
    {
      prompt: 'Na Idade Média, a Igreja possuía cerca de ___ da terra europeia:',
      options: [
        { text: '5%',  correct: false },
        { text: '1/3', correct: true  },
        { text: '2/3', correct: false },
        { text: '10%', correct: false }
      ],
      explanation: 'A Igreja acumulou enormes propriedades — estimativas indicam até 1/3 das terras europeias sob seu controle direto ou indireto.'
    },
    {
      prompt: 'O "Conflito das Investiduras" foi uma disputa entre:',
      options: [
        { text: 'Nobres e servos',              correct: false },
        { text: 'Papa e imperadores pelo direito de nomear bispos', correct: true },
        { text: 'Cristãos e muçulmanos',        correct: false },
        { text: 'Franciscanos e Beneditinos',   correct: false }
      ],
      explanation: 'O Conflito das Investiduras (séc. XI) foi a disputa entre o papado e o Sacro Império pelo controle da nomeação de autoridades eclesiásticas.'
    },
    {
      prompt: 'O lema "Ora et Labora" (reza e trabalha) era dos monges:',
      options: [
        { text: 'Franciscanos',   correct: false },
        { text: 'Dominicanos',    correct: false },
        { text: 'Beneditinos',    correct: true  },
        { text: 'Jesuítas',       correct: false }
      ],
      explanation: 'São Bento de Núrsia criou a Regra Beneditina no séc. VI, com o lema "Ora et Labora" — equilíbrio entre oração e trabalho manual.'
    }
  ],

  guidedPractice: [
    {
      prompt: '🔍 DICA: A excomunhão era a arma mais poderosa do papa.\n\nPor que um rei excomungado perdia poder político?',
      options: [
        { text: 'Porque perdia o exército automaticamente',              correct: false },
        { text: 'Porque seus súditos eram liberados do juramento de lealdade', correct: true },
        { text: 'Porque não podia mais cobrar impostos',                 correct: false },
        { text: 'Porque o papa assumia suas terras diretamente',         correct: false }
      ],
      explanation: 'A excomunhão desobrigava os vassalos do juramento de fidelidade — tornava o rei ilegítimo aos olhos da Igreja e da nobreza.'
    },
    {
      prompt: '🔍 DICA: Os mosteiros foram os principais centros de preservação do conhecimento antigo.\n\nO que os monges faziam com os textos clássicos greco-romanos?',
      options: [
        { text: 'Destruíam como obras pagãs',   correct: false },
        { text: 'Copiavam e preservavam à mão', correct: true  },
        { text: 'Vendiam para mercadores',      correct: false },
        { text: 'Enviavam para o papa em Roma', correct: false }
      ],
      explanation: 'Os scriptoria (oficinas de cópia) nos mosteiros preservaram obras de Aristóteles, Platão, Virgílio e outros autores clássicos que de outra forma teriam se perdido.'
    }
  ],

  questions: [
    {
      prompt: 'O dízimo medieval era:',
      options: [
        { text: 'Um imposto de 10% da produção pago à Igreja',      correct: true  },
        { text: 'Um tributo pago pelos servos ao senhor feudal',     correct: false },
        { text: 'O pagamento de aluguel pelos camponeses',          correct: false },
        { text: 'Uma doação voluntária à Igreja',                    correct: false }
      ],
      explanation: 'O dízimo era obrigatório — 10% da produção entregue à Igreja. Era uma das principais fontes de renda da instituição.'
    },
    {
      prompt: 'As Universidades medievais surgiram ligadas a:',
      options: [
        { text: 'Mercadores nas feiras',         correct: false },
        { text: 'Castelos dos reis',             correct: false },
        { text: 'A Igreja e as escolas catedrais', correct: true },
        { text: 'As guildas de artesãos',        correct: false }
      ],
      explanation: 'As primeiras universidades (Bolonha, Paris, Oxford) surgiram no séc. XII ligadas às escolas catedrais da Igreja.'
    },
    {
      prompt: 'A Inquisição medieval tinha o objetivo principal de:',
      options: [
        { text: 'Organizar as Cruzadas',          correct: false },
        { text: 'Perseguir e punir hereges que desafiavam os dogmas católicos', correct: true },
        { text: 'Administrar as terras da Igreja', correct: false },
        { text: 'Educar os camponeses',            correct: false }
      ],
      explanation: 'A Inquisição (séc. XIII) foi criada para combater heresias — movimentos religiosos que contradiziam os ensinamentos oficiais da Igreja.'
    },
    {
      prompt: 'Qual foi o resultado imediato da "Humilhação de Canossa" (1077)?',
      options: [
        { text: 'O imperador Henrique IV foi deposto definitivamente',    correct: false },
        { text: 'O papa Gregório VII perdeu seu cargo',                   correct: false },
        { text: 'Henrique IV teve sua excomunhão suspensa após pedir perdão', correct: true },
        { text: 'A Igreja perdeu seu poder temporal na Alemanha',          correct: false }
      ],
      explanation: 'Em Canossa, Henrique IV ficou três dias descalço na neve pedindo perdão ao papa. Gregório VII suspendeu a excomunhão — uma vitória simbólica do papado.'
    },
    {
      prompt: 'Os franciscanos e dominicanos (séc. XIII) diferenciavam-se dos beneditinos principalmente porque:',
      options: [
        { text: 'Eram ordens militares que participavam das Cruzadas',   correct: false },
        { text: 'Eram mendicantes — pregavam nas cidades, viviam da esmola', correct: true },
        { text: 'Só aceitavam nobres em suas ordens',                    correct: false },
        { text: 'Administravam as Universidades diretamente',            correct: false }
      ],
      explanation: 'Franciscanos (São Francisco de Assis) e Dominicanos eram mendicantes — viviam da caridade, pregavam nas cidades, em contraste com os beneditinos rurais.'
    },
    {
      prompt: 'Qual era a estrutura hierárquica correta da Igreja medieval (do mais ao menos poderoso)?',
      options: [
        { text: 'Bispo → Arcebispo → Cardeal → Papa',  correct: false },
        { text: 'Papa → Cardeal → Arcebispo → Bispo',  correct: true  },
        { text: 'Papa → Bispo → Cardeal → Arcebispo',  correct: false },
        { text: 'Cardeal → Papa → Arcebispo → Bispo',  correct: false }
      ],
      explanation: 'Papa (topo) → Cardeais → Arcebispos → Bispos → Padres. O Colégio Cardinalício elegia o papa desde 1059.'
    },
    {
      prompt: 'A Escolástica foi a corrente filosófica medieval que:',
      options: [
        { text: 'Rejeitou toda a filosofia grega por ser pagã',          correct: false },
        { text: 'Buscou conciliar a fé cristã com a razão filosófica (Aristóteles)', correct: true },
        { text: 'Defendeu a separação entre Igreja e Estado',            correct: false },
        { text: 'Criou as primeiras universidades laicas',               correct: false }
      ],
      explanation: 'A Escolástica (São Tomás de Aquino, séc. XIII) conciliou teologia cristã com filosofia aristotélica — "a fé busca a inteligência".'
    },
    {
      prompt: 'O "poder temporal" da Igreja medieval referia-se a:',
      options: [
        { text: 'Seu controle sobre os sacramentos e a salvação',        correct: false },
        { text: 'Seu poder político, territorial e econômico neste mundo', correct: true },
        { text: 'Seu controle sobre o tempo (calendário litúrgico)',      correct: false },
        { text: 'Sua influência sobre a arte e arquitetura',             correct: false }
      ],
      explanation: 'Poder temporal = poder neste mundo (terras, justiça, impostos). Poder espiritual = controle da salvação e dos sacramentos.'
    },
    {
      prompt: 'O estilo arquitetônico das catedrais góticas (séc. XII-XIII) expressava:',
      options: [
        { text: 'O poder militar dos cavaleiros',                              correct: false },
        { text: 'O desejo de aproximar o fiel de Deus com alturas vertiginosas e luz filtrada', correct: true },
        { text: 'A influência da arquitetura islâmica nas Cruzadas',           correct: false },
        { text: 'A riqueza dos mercadores medievais',                          correct: false }
      ],
      explanation: 'As catedrais góticas (Notre-Dame, Chartres) buscavam elevar o espírito — arcos ogivais, vitrais coloridos, alturas imensuráveis — tudo para inspirar devoção.'
    },
    {
      prompt: 'Qual era o papel das "escolas catedrais" na Idade Média?',
      options: [
        { text: 'Treinar cavaleiros para as Cruzadas',            correct: false },
        { text: 'Educar futuros clérigos e formar a elite intelectual medieval', correct: true },
        { text: 'Ensinar técnicas agrícolas aos servos',          correct: false },
        { text: 'Administrar os bens dos nobres',                 correct: false }
      ],
      explanation: 'As escolas catedrais eram o principal centro educativo medieval — formavam clérigos, copistas, teólogos e os primeiros filósofos medievais.'
    }
  ],

  adaptiveReview: [
    {
      prompt: 'DIFÍCIL: O que foi o "Grande Cisma do Ocidente" (1378-1417)?',
      options: [
        { text: 'A separação entre Igreja Católica e Igreja Ortodoxa (1054)',     correct: false },
        { text: 'O período em que havia dois (ou três) papas simultaneamente, dividindo a Igreja', correct: true },
        { text: 'A Reforma Protestante de Lutero no séc. XVI',                    correct: false },
        { text: 'A expulsão dos muçulmanos da Península Ibérica',                 correct: false }
      ],
      explanation: 'O Grande Cisma do Ocidente (1378-1417) foi uma crise em que papas rivais governavam de Roma e Avignon — ápice da crise de autoridade papal antes da Reforma.'
    }
  ],

  rewards: { xp: 130, gems: 13, badge: '✝️ Historiador da Fé' },
  completionMessage: '✝️ Você domina o poder da Igreja medieval — conhecimento que a Inquisição não poderia suprimir!',
  nextStage: 'hist_s03'
};

window.HIST_S02 = HIST_S02;
