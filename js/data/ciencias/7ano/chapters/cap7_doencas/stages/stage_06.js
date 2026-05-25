/**
 * STAGE 06 — Febre Amarela e Raiva
 * Doenças que o Brasil quase eliminou — mas ainda exigem atenção!
 */

const STAGE_06 = {
  id: 'stage_06',
  title: 'Febre Amarela e Raiva',
  icon: '🟡',
  difficulty: 'medium',
  estimatedTime: 13,

  learningObjectives: [
    'Conhecer os vetores da febre amarela (urbana e silvestre)',
    'Entender por que a vacina da febre amarela é obrigatória em viagens',
    'Compreender como a raiva é transmitida e por que é fatal',
    'Saber o protocolo de profilaxia pós-exposição à raiva',
    'Diferenciar o ciclo urbano e silvestre da raiva no Brasil'
  ],

  summary: {
    readTime: 4,
    content: [
      {
        icon: '🟡',
        title: 'Febre Amarela: Dois Ciclos',
        text: 'A febre amarela é causada por um Flavivírus com dois ciclos:\n\nCICLO URBANO (erradicado no Brasil):\n• Vetor: Aedes aegypti\n• Transmissão entre humanos via mosquito\n\nCICLO SILVESTRE (ainda ativo):\n• Vetores: mosquitos Haemagogus e Sabethes\n• Reservatórios: macacos e outros primatas\n• Humanos são hospedeiros acidentais\n\n💡 O nome "febre amarela" vem da icterícia (pele e olhos amarelados) nos casos graves.'
      },
      {
        icon: '💉',
        title: 'Vacina da Febre Amarela',
        text: 'Vacina de vírus vivo atenuado — uma das mais eficazes da medicina:\n\n✅ Uma dose: proteção para toda a vida (desde 2017, OMS revisou de 10 para dose única)\n✅ Obrigatória para viagens a regiões de risco (Amazônia, Centro-Oeste, parte do Sudeste)\n✅ Disponível gratuitamente no SUS\n\n⚠️ Contraindicada: imunodeprimidos, grávidas (avaliar risco/benefício), alérgicos ao ovo\n\n⏱️ Aplicar 10 dias ANTES da viagem para imunidade completa'
      },
      {
        icon: '🐕',
        title: 'Raiva: Uma Doença Fatal',
        text: 'A raiva é causada pelo vírus Lyssavirus e é praticamente 100% fatal após o início dos sintomas.\n\nTransmissão: saliva do animal infectado — principalmente por mordida.\n\n⚠️ Reservatórios no Brasil:\n• URBANO: cão e gato domésticos\n• SILVESTRE: morcego (principal!), raposa, sagui\n\nSintomas (após 1-3 meses): ansiedade, hidrofobia (medo de água), convulsões, paralisia → MORTE\n\n✅ Cura possível: APENAS com tratamento ANTES dos sintomas aparecerem'
      },
      {
        icon: '🚨',
        title: 'Profilaxia Pós-Exposição (PPE)',
        text: 'Se mordido ou arranhado por animal suspeito de raiva:\n\n1. LAVAR a ferida com água e sabão por 10 minutos (reduz carga viral)\n2. Ir ao POSTO DE SAÚDE imediatamente\n3. Receber VACINA ANTIRRÁBICA (série de doses)\n4. Em casos graves: SORO ANTIRRÁBICO + vacina\n\n⚡ A PPE tem eficácia próxima a 100% se iniciada precocemente.\n❌ Após o início dos sintomas: sem tratamento eficaz comprovado (caso Milwaukee é exceção raríssima)'
      },
      {
        icon: '🦇',
        title: 'Morcego: Principal Reservatório Silvestre',
        text: 'No Brasil atual, o morcego é o principal reservatório da raiva silvestre.\n\nO morcego hematófago (vampiro) transmite raiva ao gado e pode transmitir a humanos.\n\n⚠️ Cuidado: morcegos que aparecem de dia ou no chão podem estar doentes com raiva!\n\nO que fazer se morcego tocar você:\n• Não matar o animal (pode ser necessário para diagnóstico)\n• Procurar UPA/UBS imediatamente\n• Iniciar PPE se indicado'
      }
    ],

    flashcards: [
      { q: 'Qual mosquito transmite a febre amarela silvestre?',  a: 'Haemagogus e Sabethes (em florestas).' },
      { q: 'A vacina da febre amarela precisa de quantas doses?', a: 'Uma dose — proteção para toda a vida (desde 2017).' },
      { q: 'Com que antecedência tomar vacina antes de viagem?',  a: '10 dias antes — para imunidade completa.' },
      { q: 'Qual o principal reservatório da raiva no Brasil?',   a: 'Morcego (ciclo silvestre) e cão/gato (ciclo urbano).' },
      { q: 'A raiva é curável após os sintomas?',                 a: 'Praticamente não — fatal em quase 100% dos casos com sintomas.' },
      { q: 'O que fazer imediatamente após mordida de animal?',   a: 'Lavar com água e sabão por 10 minutos e ir ao posto de saúde.' },
      { q: 'O que é hidrofobia?',                                  a: 'Medo de água — sintoma clássico da raiva em estágio avançado.' },
      { q: 'Por que a febre amarela tem esse nome?',              a: 'Pela icterícia (pele e olhos amarelos) nos casos graves.' }
    ],

    mnemonics: [
      { trigger: 'Febre Amarela ciclos',  memory: '"Urbano = Aedes (erradicado). Silvestre = Haemagogus (floresta, macacos)"' },
      { trigger: 'Raiva fatal',           memory: '"Raiva = Risco ANTES de sintomas. Depois que aparecem... sem saída."' },
      { trigger: 'PPE raiva',             memory: '"Lavar → Posto → Vacina → Soro (se grave). NUNCA esperar!"' },
      { trigger: 'Vacina febre amarela',  memory: '"Uma dose, vida toda. Tirar 10 dias antes da floresta!"' }
    ],

    miniReview: [
      { q: 'Quem transmite a febre amarela silvestre?',    a: 'Mosquitos Haemagogus e Sabethes (em florestas).' },
      { q: 'A raiva é curável?',                           a: 'Apenas se tratada ANTES dos sintomas. Com sintomas, praticamente fatal.' },
      { q: 'O que fazer ao ser mordido por animal?',       a: 'Lavar com água e sabão e ir ao posto de saúde para PPE.' },
      { q: 'Quantas doses de febre amarela são necessárias?', a: 'Uma dose — proteção para toda a vida (OMS, 2017).' }
    ]
  },

  warmup: [
    {
      prompt: 'A febre amarela SILVESTRE é transmitida pelo mosquito:',
      options: [
        { text: 'Haemagogus',  correct: true  },
        { text: 'Aedes aegypti', correct: false },
        { text: 'Anopheles',   correct: false },
        { text: 'Culex',       correct: false }
      ],
      explanation: 'Na zona rural/florestal, o Haemagogus e o Sabethes são os vetores da febre amarela silvestre.'
    },
    {
      prompt: 'A raiva é transmitida principalmente pela:',
      options: [
        { text: 'Saliva do animal infectado (mordida/arranhão)', correct: true  },
        { text: 'Picada de mosquito infectado',                   correct: false },
        { text: 'Contato com fezes de animais',                   correct: false },
        { text: 'Inalação de ar próximo ao animal',               correct: false }
      ],
      explanation: 'O vírus da raiva está presente na saliva e entra no organismo por feridas na pele.'
    },
    {
      prompt: 'A vacina da febre amarela deve ser tomada antes de viagem a áreas de risco com antecedência de:',
      options: [
        { text: '10 dias',   correct: true  },
        { text: '1 dia',     correct: false },
        { text: '30 dias',   correct: false },
        { text: 'No mesmo dia', correct: false }
      ],
      explanation: 'São necessários 10 dias para que a vacina produza imunidade completa.'
    }
  ],

  guidedPractice: [
    {
      prompt: '🔍 DICA: A raiva é fatal APÓS os sintomas. A PPE funciona ANTES deles.\n\nApós uma mordida de cão suspeito, o primeiro passo é:',
      options: [
        { text: 'Lavar a ferida com água e sabão por 10 minutos', correct: true  },
        { text: 'Matar o animal para evitar novos acidentes',       correct: false },
        { text: 'Esperar para ver se sintomas aparecem',            correct: false },
        { text: 'Tomar antibiótico imediatamente',                  correct: false }
      ],
      explanation: 'Lavagem imediata reduz a carga viral na ferida antes de ir ao posto para iniciar a PPE.'
    },
    {
      prompt: '🔍 DICA: Febre amarela urbana tem vetor diferente da silvestre.\n\nA febre amarela URBANA (erradicada no Brasil) era transmitida pelo:',
      options: [
        { text: 'Aedes aegypti',  correct: true  },
        { text: 'Haemagogus',     correct: false },
        { text: 'Anopheles',      correct: false },
        { text: 'Barbeiro',       correct: false }
      ],
      explanation: 'A febre amarela urbana era transmitida pelo Aedes entre humanos — erradicada no Brasil no século XX.'
    }
  ],

  questions: [
    {
      prompt: 'A febre amarela silvestre no Brasil tem como principais vetores:',
      options: [
        { text: 'Haemagogus e Sabethes',    correct: true  },
        { text: 'Aedes aegypti e Anopheles', correct: false },
        { text: 'Culex e Mansonia',         correct: false },
        { text: 'Simulium e Phlebotomus',   correct: false }
      ],
      explanation: 'Em ambientes florestais, o Haemagogus transmite febre amarela entre macacos e acidentalmente para humanos.'
    },
    {
      prompt: 'A vacina da febre amarela é recomendada para:',
      options: [
        { text: 'Pessoas que vivem ou viajam para áreas de risco (Amazônia, Centro-Oeste)', correct: true  },
        { text: 'Apenas para viajantes internacionais',                                      correct: false },
        { text: 'Somente crianças menores de 5 anos',                                       correct: false },
        { text: 'Toda a população brasileira sem exceção',                                   correct: false }
      ],
      explanation: 'A vacinação é obrigatória para áreas endêmicas/epizoóticas e recomendada para viagens a essas regiões.'
    },
    {
      prompt: 'Desde 2017, a OMS recomenda que a vacina da febre amarela seja tomada:',
      options: [
        { text: 'Uma única dose — proteção para toda a vida',      correct: true  },
        { text: 'A cada 10 anos como reforço',                     correct: false },
        { text: 'Anualmente como a vacina da gripe',               correct: false },
        { text: 'Duas doses com intervalo de 30 dias',             correct: false }
      ],
      explanation: 'Evidências mostraram que uma dose única gera imunidade vitalícia — sem necessidade de reforço.'
    },
    {
      prompt: 'A raiva é considerada praticamente 100% fatal quando:',
      options: [
        { text: 'Os sintomas neurológicos já aparecem',          correct: true  },
        { text: 'A mordida ocorreu há mais de 24 horas',        correct: false },
        { text: 'O paciente não tomou antibióticos',            correct: false },
        { text: 'O animal era um cão doméstico vacinado',       correct: false }
      ],
      explanation: 'Uma vez que o vírus atinge o sistema nervoso central e os sintomas aparecem, não há tratamento eficaz.'
    },
    {
      prompt: 'A profilaxia pós-exposição (PPE) à raiva inclui:',
      options: [
        { text: 'Lavagem da ferida, vacina antirrábica e (em casos graves) soro antirrábico', correct: true  },
        { text: 'Apenas antibióticos de amplo espectro',                                       correct: false },
        { text: 'Internação hospitalar obrigatória sem vacina',                                correct: false },
        { text: 'Esperar os resultados do teste do animal antes de qualquer tratamento',       correct: false }
      ],
      explanation: 'A PPE iniciada precocemente tem eficácia próxima a 100% na prevenção da raiva.'
    },
    {
      prompt: 'O principal reservatório da raiva silvestre no Brasil atual é o:',
      options: [
        { text: 'Morcego',        correct: true  },
        { text: 'Cão doméstico',  correct: false },
        { text: 'Rato',           correct: false },
        { text: 'Macaco',         correct: false }
      ],
      explanation: 'O morcego (especialmente o hematófago) é o principal reservatório da raiva silvestre no Brasil.'
    },
    {
      prompt: 'A icterícia (pele e olhos amarelados) nos casos graves de febre amarela é causada por:',
      options: [
        { text: 'Comprometimento do fígado pelo vírus',     correct: true  },
        { text: 'Manchas da picada do mosquito',            correct: false },
        { text: 'Reação alérgica ao vírus na pele',         correct: false },
        { text: 'Desidratação extrema',                     correct: false }
      ],
      explanation: 'O vírus da febre amarela ataca o fígado, causando falência hepática e icterícia — daí o nome "amarela".'
    },
    {
      prompt: 'Um morcego caiu no quintal de sua casa durante o dia. O correto é:',
      options: [
        { text: 'Não tocar e contatar o serviço de vigilância sanitária',  correct: true  },
        { text: 'Matar imediatamente para evitar risco de raiva',           correct: false },
        { text: 'Pegar com as mãos e soltar longe de casa',                correct: false },
        { text: 'Não fazer nada — morcegos de dia são normais',            correct: false }
      ],
      explanation: 'Morcego de dia ou no chão pode estar doente (possivelmente com raiva). Não tocar — acionar vigilância.'
    },
    {
      prompt: 'A hidrofobia (medo de água) é um sintoma clássico de:',
      options: [
        { text: 'Raiva',          correct: true  },
        { text: 'Febre amarela',  correct: false },
        { text: 'Leptospirose',   correct: false },
        { text: 'Cólera',         correct: false }
      ],
      explanation: 'Na raiva, espasmos na garganta ao tentar engolir criam terror à água — sinal de comprometimento neurológico grave.'
    },
    {
      prompt: 'A febre amarela urbana foi erradicada no Brasil. O principal responsável foi:',
      options: [
        { text: 'Campanha de vacinação + controle do Aedes aegypti urbano', correct: true  },
        { text: 'Uso de antibióticos no início do século XX',                correct: false },
        { text: 'Quarentena de viajantes internacionais',                   correct: false },
        { text: 'Erradicação dos macacos nas cidades',                      correct: false }
      ],
      explanation: 'Oswaldo Cruz liderou campanha de vacinação e combate ao Aedes urbano, erradicando a febre amarela urbana no Brasil.'
    }
  ],

  adaptiveReview: [
    {
      prompt: 'DIFÍCIL: Por que a raiva tem período de incubação tão variável (1 semana a 1 ano)?',
      options: [
        { text: 'O vírus viaja pelo nervo periférico até o cérebro — quanto mais longe a mordida, mais tempo', correct: true  },
        { text: 'Depende da cepa do vírus — cada cepa tem velocidade diferente',                              correct: false },
        { text: 'A imunidade do paciente determina a velocidade de progressão',                               correct: false },
        { text: 'O período de incubação não varia — é sempre 3 semanas',                                     correct: false }
      ],
      explanation: 'O vírus da raiva não entra na corrente sanguínea — viaja via nervos periféricos. Mordida na perna leva mais tempo que na cabeça.'
    },
    {
      prompt: 'DIFÍCIL: Por que a febre amarela silvestre não pode ser erradicada mesmo com vacinação humana?',
      options: [
        { text: 'Macacos e outros primatas são reservatórios animais que mantêm o vírus circulando', correct: true  },
        { text: 'A vacina da febre amarela não funciona contra a cepa silvestre',                     correct: false },
        { text: 'Não existe vacina para animais silvestres',                                          correct: false },
        { text: 'O Haemagogus é impossível de controlar',                                            correct: false }
      ],
      explanation: 'Com reservatórios animais (macacos), o vírus continuará circulando independentemente da vacinação humana — por isso é "silvestre".'
    }
  ],

  rewards: {
    xp:    180,
    gems:  18,
    badge: '🟡 Guardião da Floresta'
  },

  completionMessage: '🟡 Excelente! Você conhece a febre amarela e a raiva. Vacina em dia e cuidado com animais!',
  nextStage: 'stage_07'
};

window.STAGE_06 = STAGE_06;
