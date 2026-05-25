/**
 * STAGE 04 — Dengue, Zika e Chikungunya
 * O trio do Aedes aegypti — prevenção é poder!
 */

const STAGE_04 = {
  id: 'stage_04',
  title: 'Dengue, Zika e Chikungunya',
  icon: '🦟',
  difficulty: 'medium',
  estimatedTime: 14,

  learningObjectives: [
    'Identificar o Aedes aegypti como vetor das três doenças',
    'Diferenciar os sintomas de dengue, zika e chikungunya',
    'Reconhecer os sinais de alerta da dengue hemorrágica',
    'Entender as medidas de prevenção e controle do vetor',
    'Conhecer os riscos específicos do zika na gestação'
  ],

  summary: {
    readTime: 5,
    content: [
      {
        icon: '🦟',
        title: 'O Vilão: Aedes aegypti',
        text: 'O mosquito Aedes aegypti transmite DENGUE, ZIKA, CHIKUNGUNYA e FEBRE AMARELA.\n\nCaracterísticas do Aedes:\n• Pica durante o DIA (diferente do mosquito da malária)\n• Cria em água parada e LIMPA (pneu, garrafa, vaso de flor)\n• Listras brancas no corpo\n• Voo baixo e silencioso\n\n💡 Macete: "Aedes = A pior notícia do verão!"'
      },
      {
        icon: '🤒',
        title: 'Dengue: Sintomas e Alerta',
        text: 'Sintomas clássicos (3-14 dias após picada):\n• Febre alta súbita (39-40°C)\n• Dor muscular e nas articulações\n• Dor atrás dos olhos\n• Manchas avermelhadas na pele\n\n⚠️ SINAIS DE ALERTA (dengue grave):\n• Dor abdominal intensa\n• Vômitos persistentes\n• Sangramento (gengiva, nariz)\n• Queda rápida da febre com piora do estado geral\n\n🚨 Atenção: NUNCA tomar AAS ou ibuprofeno na dengue — risco de hemorragia!'
      },
      {
        icon: '🤰',
        title: 'Zika: O Perigo na Gestação',
        text: 'Na maioria dos adultos: febre baixa, manchas na pele (exantema), conjuntivite, dor nas articulações.\n\nPerigo REAL:\n⚠️ Em grávidas: causa MICROCEFALIA no bebê (cérebro menor que o normal)\n⚠️ Associado à Síndrome de Guillain-Barré (fraqueza muscular progressiva)\n\nZika foi emergência global em 2016 pela OMS.'
      },
      {
        icon: '🦴',
        title: 'Chikungunya: A Dor que Dobra',
        text: 'Nome significa "aquele que se dobra" em idioma africano — referência à DOR ARTICULAR INTENSA.\n\nSintomas marcantes:\n• Febre alta repentina\n• Dor articular MUITO intensa (cotovelos, joelhos, tornozelos)\n• A dor pode durar semanas ou meses\n\nDiferença key: na dengue a dor é muscular; na chikungunya é predominantemente ARTICULAR.'
      },
      {
        icon: '🛡️',
        title: 'Prevenção: Elimine os Criadouros!',
        text: 'Regra dos 3 D:\n1. DESTAMPAR: cobrir caixas d\'água e tonéis\n2. DESCARTAR: jogar fora objetos que acumulam água\n3. DRENAR: esvaziar semanalmente pratos de vaso, bebedouros\n\nOutras medidas:\n• Repelente com DEET\n• Telas e mosquiteiros\n• Roupas que cubram o corpo\n• Agente comunitário de saúde: busca ativa'
      }
    ],

    flashcards: [
      { q: 'Qual mosquito transmite dengue, zika e chikungunya?', a: 'Aedes aegypti.' },
      { q: 'Em que período do dia o Aedes aegypti pica?',         a: 'Durante o DIA (diferente do mosquito da malária, que pica à noite).' },
      { q: 'Qual o risco do zika para grávidas?',                 a: 'Microcefalia no bebê — desenvolvimento cerebral comprometido.' },
      { q: 'O nome "chikungunya" significa:',                     a: '"Aquele que se dobra" — pela dor articular intensa.' },
      { q: 'Por que não tomar AAS na dengue?',                    a: 'Aumenta risco de hemorragia na dengue grave.' },
      { q: 'O Aedes cria em água parada e ___?',                  a: 'Limpa (pneu, garrafa, vaso de flor, piscina abandonada).' },
      { q: 'Qual sinal de alerta grave na dengue?',               a: 'Dor abdominal intensa, sangramento ou queda rápida da febre com piora.' },
      { q: 'O que é a Síndrome de Guillain-Barré?',               a: 'Fraqueza muscular progressiva associada ao zika.' }
    ],

    mnemonics: [
      { trigger: 'Aedes aegypti',     memory: '"A = água parada limpa, E = Ele pica de dia, D = Dengue/Zika/Chikungunya/Febre Amarela"' },
      { trigger: 'Dengue vs Chik',    memory: '"Dengue = dor nos Músculos. Chikungunya = dor nas Articulações (C = Curva de dor)"' },
      { trigger: 'Zika na gravidez',  memory: '"Z de Zika = Z de cabeça Zelada (microcefalia) no bebê"' },
      { trigger: '3 D prevenção',     memory: '"Destampar, Descartar, Drenar — os 3 D eliminam o criadouro!"' }
    ],

    miniReview: [
      { q: 'Qual mosquito transmite dengue, zika e chikungunya?', a: 'Aedes aegypti.' },
      { q: 'Qual o perigo do zika para gestantes?',               a: 'Microcefalia — bebê nasce com desenvolvimento cerebral comprometido.' },
      { q: 'Por que não usar AAS na dengue?',                     a: 'Risco de hemorragia interna na dengue grave.' },
      { q: 'Onde o Aedes se reproduz?',                           a: 'Água parada e limpa: pneu, vasos, garrafas, caixas d\'água destampadas.' }
    ]
  },

  warmup: [
    {
      prompt: 'O mosquito que transmite dengue, zika e chikungunya é o:',
      options: [
        { text: 'Aedes aegypti',      correct: true  },
        { text: 'Anopheles gambiae',  correct: false },
        { text: 'Culex quinquefasciatus', correct: false },
        { text: 'Simulium damnosum', correct: false }
      ],
      explanation: 'O Aedes aegypti é o principal vetor das arboviroses no Brasil.'
    },
    {
      prompt: 'O Aedes aegypti pica principalmente:',
      options: [
        { text: 'Durante o dia',       correct: true  },
        { text: 'Só à noite',          correct: false },
        { text: 'Apenas ao amanhecer', correct: false },
        { text: 'Só no inverno',       correct: false }
      ],
      explanation: 'Diferente do mosquito da malária (Anopheles, que pica à noite), o Aedes pica durante o dia.'
    },
    {
      prompt: 'Na dengue, qual analgésico NÃO deve ser usado?',
      options: [
        { text: 'AAS (Aspirina)',     correct: true  },
        { text: 'Paracetamol',        correct: false },
        { text: 'Dipirona',           correct: false },
        { text: 'Nenhum dos três',    correct: false }
      ],
      explanation: 'O AAS aumenta o risco de hemorragia na dengue grave. Usar paracetamol para febre e dor.'
    }
  ],

  guidedPractice: [
    {
      prompt: '🔍 DICA: O nome "chikungunya" vem de um idioma africano e descreve o sintoma mais marcante.\n\nA principal diferença da chikungunya para a dengue é:',
      options: [
        { text: 'Dor articular muito intensa (articulações)',   correct: true  },
        { text: 'Febre mais alta que na dengue',                correct: false },
        { text: 'Manchas na pele mais intensas',               correct: false },
        { text: 'Transmissão por mosquito diferente',          correct: false }
      ],
      explanation: 'Chikungunya = dor articular intensa que pode durar semanas. Dengue = dor muscular ("quebra-ossos").'
    },
    {
      prompt: '🔍 DICA: Zika em adultos é leve, mas em grávidas é muito perigoso.\n\nQual o principal risco do zika para bebês?',
      options: [
        { text: 'Microcefalia — desenvolvimento cerebral comprometido', correct: true  },
        { text: 'Hemorragia interna grave',                             correct: false },
        { text: 'Dengue hemorrágica neonatal',                         correct: false },
        { text: 'Paralisia permanente dos membros',                    correct: false }
      ],
      explanation: 'O vírus Zika atravessa a placenta e interfere no desenvolvimento cerebral do feto, causando microcefalia.'
    }
  ],

  questions: [
    {
      prompt: 'Qual mosquito é responsável pela transmissão de dengue, zika e chikungunya?',
      options: [
        { text: 'Aedes aegypti',           correct: true  },
        { text: 'Anopheles gambiae',       correct: false },
        { text: 'Culex pipiens',           correct: false },
        { text: 'Mansonia uniformis',      correct: false }
      ],
      explanation: 'O Aedes aegypti é o principal vetor das três arboviroses no Brasil e nas Américas.'
    },
    {
      prompt: 'A chikungunya se diferencia da dengue principalmente pela:',
      options: [
        { text: 'Dor articular intensa e prolongada',    correct: true  },
        { text: 'Febre muito mais alta (acima de 41°C)', correct: false },
        { text: 'Transmissão por contato direto',        correct: false },
        { text: 'Ausência completa de febre',            correct: false }
      ],
      explanation: 'O nome chikungunya significa "aquele que se dobra" — referência à dor articular intensa.'
    },
    {
      prompt: 'O vírus Zika representa risco especial para:',
      options: [
        { text: 'Gestantes — pode causar microcefalia no bebê',   correct: true  },
        { text: 'Idosos — causa insuficiência renal grave',        correct: false },
        { text: 'Crianças menores de 2 anos — causa convulsões',  correct: false },
        { text: 'Homens adultos — causa infertilidade',            correct: false }
      ],
      explanation: 'O vírus Zika atravessa a placenta e compromete o desenvolvimento cerebral do feto.'
    },
    {
      prompt: 'Para prevenir a dengue, a principal ação é:',
      options: [
        { text: 'Eliminar criadouros de água parada',       correct: true  },
        { text: 'Usar antibióticos preventivos',            correct: false },
        { text: 'Vacinar toda a população anualmente',      correct: false },
        { text: 'Usar repelente só à noite',                correct: false }
      ],
      explanation: 'Sem água parada, o Aedes não se reproduz. Eliminar criadouros é a medida mais eficaz.'
    },
    {
      prompt: 'Na dengue hemorrágica (grave), um sinal de alerta importante é:',
      options: [
        { text: 'Queda rápida da febre com dor abdominal intensa', correct: true  },
        { text: 'Febre que sobe gradualmente por 10 dias',          correct: false },
        { text: 'Tosse seca e coriza',                               correct: false },
        { text: 'Manchas brancas na garganta',                      correct: false }
      ],
      explanation: 'A queda brusca da febre com piora do estado geral indica dengue grave — procurar UPA imediatamente.'
    },
    {
      prompt: 'O Aedes aegypti se reproduz em:',
      options: [
        { text: 'Água parada e limpa (pneus, vasos, garrafas)', correct: true  },
        { text: 'Água corrente de rios e riachos',               correct: false },
        { text: 'Água salgada do mar',                           correct: false },
        { text: 'Solo úmido e folhas em decomposição',           correct: false }
      ],
      explanation: 'Diferente de outros mosquitos, o Aedes prefere água parada E limpa para depositar seus ovos.'
    },
    {
      prompt: 'Por que o AAS (Aspirina) não deve ser usado na dengue?',
      options: [
        { text: 'Aumenta risco de hemorragia interna na dengue grave', correct: true  },
        { text: 'Não tem efeito sobre a febre da dengue',               correct: false },
        { text: 'Causa alergia em todos os pacientes com dengue',       correct: false },
        { text: 'É antibiótico e não tem efeito em vírus',             correct: false }
      ],
      explanation: 'O AAS interfere na coagulação sanguínea, potencializando hemorragias na dengue hemorrágica.'
    },
    {
      prompt: 'Qual das alternativas é um criadouro potencial para o Aedes aegypti?',
      options: [
        { text: 'Prato de vaso de planta com água acumulada', correct: true  },
        { text: 'Rio com correnteza forte',                    correct: false },
        { text: 'Piscina com cloro e circulação',              correct: false },
        { text: 'Caixa d\'água tampada adequadamente',         correct: false }
      ],
      explanation: 'Pratos de vasos, pneus, garrafas e calhas entupidas são criadouros comuns do Aedes.'
    },
    {
      prompt: 'A Síndrome de Guillain-Barré, associada ao vírus Zika, caracteriza-se por:',
      options: [
        { text: 'Fraqueza muscular progressiva que pode levar à paralisia', correct: true  },
        { text: 'Febre muito alta com convulsões',                           correct: false },
        { text: 'Inflamação do fígado (hepatite)',                           correct: false },
        { text: 'Manchas hemorrágicas na pele',                              correct: false }
      ],
      explanation: 'A Síndrome de Guillain-Barré é uma complicação neurológica rara mas grave associada ao Zika.'
    },
    {
      prompt: 'As "listras brancas" no corpo ajudam a identificar o:',
      options: [
        { text: 'Aedes aegypti',       correct: true  },
        { text: 'Anopheles gambiae',   correct: false },
        { text: 'Culex quinquefasciatus', correct: false },
        { text: 'Borrachudo',          correct: false }
      ],
      explanation: 'O Aedes aegypti tem marcas brancas no corpo e nas patas — característica visual distintiva.'
    }
  ],

  adaptiveReview: [
    {
      prompt: 'DIFÍCIL: Por que uma pessoa pode ter dengue mais de uma vez ao longo da vida?',
      options: [
        { text: 'Existem 4 sorotipos do vírus dengue — imunidade a um não protege dos outros', correct: true  },
        { text: 'O sistema imune perde a memória da dengue rapidamente',                       correct: false },
        { text: 'O vírus muta toda temporada como a gripe',                                    correct: false },
        { text: 'Não é possível ter dengue mais de uma vez',                                   correct: false }
      ],
      explanation: 'Existem 4 sorotipos (DENV 1, 2, 3, 4). A imunidade é sorotipo-específica, não cruzada.'
    },
    {
      prompt: 'DIFÍCIL: A dengue hemorrágica (grave) ocorre mais frequentemente em:',
      options: [
        { text: 'Pessoas que estão sendo infectadas por um segundo sorotipo diferente do primeiro', correct: true  },
        { text: 'Crianças na primeira infecção',                                                    correct: false },
        { text: 'Idosos vacinados contra a dengue',                                                correct: false },
        { text: 'Pacientes que tomaram antibióticos desnecessariamente',                           correct: false }
      ],
      explanation: 'Na segunda infecção por sorotipo diferente, anticorpos da primeira infecção podem amplificar a resposta — fenômeno ADE (Antibody-Dependent Enhancement).'
    }
  ],

  rewards: {
    xp:    175,
    gems:  18,
    badge: '🦟 Caçador do Aedes'
  },

  completionMessage: '🦟 Fantástico! Você conhece o trio mortal do Aedes. Agora elimine os criadouros!',
  nextStage: 'stage_05'
};

window.STAGE_04 = STAGE_04;
