/**
 * STAGE 09 — Tuberculose, Tétano e Hanseníase
 * Três doenças bacterianas com transmissões completamente diferentes
 */

const STAGE_09 = {
  id: 'stage_09',
  title: 'Tuberculose, Tétano e Hanseníase',
  icon: '🫁',
  difficulty: 'hard',
  estimatedTime: 15,

  learningObjectives: [
    'Compreender a transmissão aérea da tuberculose e o papel da BCG',
    'Entender por que o tétano não é contagioso entre pessoas',
    'Conhecer a hanseníase e desmistificar preconceitos',
    'Diferenciar os três agentes bacterianos e suas vias de transmissão',
    'Saber o tratamento e controle de cada doença'
  ],

  summary: {
    readTime: 5,
    content: [
      {
        icon: '🫁',
        title: 'Tuberculose: A Tosse que Mata',
        text: 'Agente: Mycobacterium tuberculosis (bacilo de Koch)\n\nTransmissão: aérea — por gotículas (Pflügge) ao tossir, espirrar ou falar.\n\n⚠️ Não é qualquer contato — precisa de exposição PROLONGADA em ambiente fechado.\n\nSintomas: tosse persistente por mais de 3 semanas, sangue no escarro, febre vespertina, suores noturnos, emagrecimento.\n\nPrevenção: vacina BCG (ao nascimento)\nTratamento: antibióticos por 6 meses (RIPE: Rifampicina, Isoniazida, Pirazinamida, Etambutol)\n\n💡 Brasil: alto número de casos — ainda é problema de saúde pública!'
      },
      {
        icon: '⚙️',
        title: 'Tétano: A Toxina do Solo',
        text: 'Agente: Clostridium tetani — bactéria ANAERÓBIA (vive sem oxigênio), no solo e intestino de animais.\n\n⚠️ IMPORTANTE: O tétano NÃO é contagioso! Não passa de pessoa para pessoa.\n\nTransmissão: ferimentos profundos contaminados com esporos do solo (prego, arame, terra).\n\nSintomas: espasmos musculares intensos ("trismos" — mandíbula travada), rigidez muscular generalizada, convulsões.\n\nPrevenção: vacina DTP (difteria + tétano + coqueluche) no calendário + reforço a cada 10 anos.\n\n💡 Macete: Tétano = Terreno (solo) + ferida = Não pega de GENTE!'
      },
      {
        icon: '🤝',
        title: 'Hanseníase: Muito Menos Contagiosa que se Pensa',
        text: 'Agente: Mycobacterium leprae (bacilo de Hansen)\n\nTransmissão: contato ÍNTIMO e PROLONGADO com pessoas com hanseníase não tratada — por gotículas respiratórias.\n\n⚠️ Desmitificando:\n❌ NÃO pega por toque rápido\n❌ NÃO pega por sentar ao lado de alguém\n✅ Apenas contato próximo e prolongado\n✅ Após início do tratamento: NÃO transmite mais!\n\nSintomas: manchas na pele com perda de sensibilidade, espessamento dos nervos, fraqueza muscular.\n\nBrasil: 2º país do mundo em número de casos — ainda é prioridade de saúde!'
      },
      {
        icon: '💊',
        title: 'Poliquimioterapia (PQT) — O Tratamento da Hanseníase',
        text: 'A hanseníase tem CURA com o tratamento PQT (poliquimioterapia).\n\nO tratamento combina antibióticos (rifampicina + dapsona ± clofazimina) por 6-12 meses.\n\n✅ Totalmente gratuito no SUS\n✅ Após 1ª dose: já não transmite mais a doença\n✅ Cura completa em 6-12 meses\n\n⚠️ Se não tratada: pode causar incapacidades permanentes (deformidades, cegueira, perda de sensibilidade).\n\n💡 Hanseníase NÃO é maldição. É uma doença bacteriana tratável!'
      },
      {
        icon: '🧬',
        title: 'BCG: A Mais Antiga das Vacinas do Calendário',
        text: 'A BCG (Bacilo de Calmette-Guérin) é a vacina contra tuberculose grave em crianças.\n\n✅ Aplicada logo ao nascimento\n✅ Protege contra as formas graves (miliar e meníngea) em crianças\n✅ Deixa uma cicatriz característica no braço esquerdo\n\n⚠️ Limitações: proteção parcial contra tuberculose pulmonar em adultos.\n\nO BCG também confere proteção parcial contra hanseníase!\n\n💡 A cicatriz da BCG = "medalha de proteção" do nascimento!'
      }
    ],

    flashcards: [
      { q: 'Qual bactéria causa tuberculose?',          a: 'Mycobacterium tuberculosis (bacilo de Koch).' },
      { q: 'A tuberculose é transmitida como?',          a: 'Via aérea — gotículas ao tossir, espirrar ou falar.' },
      { q: 'O tétano é contagioso entre pessoas?',      a: 'NÃO — transmitido por esporos no solo via ferimentos, não entre pessoas.' },
      { q: 'O que é o bacilo de Hansen?',               a: 'Mycobacterium leprae — causador da hanseníase.' },
      { q: 'Após a 1ª dose do tratamento, a hanseníase:', a: 'Já não é transmitida — paciente em tratamento não contamina!' },
      { q: 'O que é RIPE no tratamento da tuberculose?', a: 'Rifampicina + Isoniazida + Pirazinamida + Etambutol — 4 antibióticos por 6 meses.' },
      { q: 'A vacina BCG protege contra o quê?',        a: 'Formas graves de tuberculose em crianças (miliar e meníngea).' },
      { q: 'Como a hanseníase é transmitida?',          a: 'Contato íntimo e prolongado com caso não tratado — gotículas respiratórias.' }
    ],

    mnemonics: [
      { trigger: 'Tétano não pega',      memory: '"Tétano = Terra (solo). Ferida + Terra = Tétano. NÃO pega de GENTE — pega do CHÃO!"' },
      { trigger: 'RIPE tuberculose',     memory: '"RIPE = Rifampicina, Isoniazida, Pirazinamida, Etambutol. RIPE = Madura (6 meses)!"' },
      { trigger: 'Hanseníase',           memory: '"Hansen = Toque LONGO, não RÁPIDO. Tratando = NÃO transmite mais!"' },
      { trigger: 'BCG',                  memory: '"BCG ao nascer = cicatriz no braço = medalha de nascimento contra tuberculose!"' }
    ],

    miniReview: [
      { q: 'Como a tuberculose é transmitida?',    a: 'Via aérea: gotículas ao tossir, espirrar ou falar.' },
      { q: 'O tétano pega de pessoa para pessoa?', a: 'NÃO — vem do solo via feridas contaminadas.' },
      { q: 'Hanseníase tem cura?',                  a: 'Sim — com PQT (poliquimioterapia) gratuita no SUS por 6-12 meses.' },
      { q: 'O que é a BCG?',                        a: 'Vacina aplicada ao nascimento contra formas graves de tuberculose.' }
    ]
  },

  warmup: [
    {
      prompt: 'A tuberculose é transmitida pela via:',
      options: [
        { text: 'Aérea (gotículas ao tossir/espirrar)', correct: true  },
        { text: 'Fecal-oral (água contaminada)',         correct: false },
        { text: 'Vetorial (mosquito)',                   correct: false },
        { text: 'Contato com solo contaminado',          correct: false }
      ],
      explanation: 'O bacilo de Koch se transmite por gotículas suspensas no ar ao tossir, espirrar ou falar.'
    },
    {
      prompt: 'O tétano NÃO é contagioso entre pessoas porque:',
      options: [
        { text: 'A bactéria vem do solo, não de pessoas doentes',  correct: true  },
        { text: 'O vírus morre fora do corpo em menos de 1 hora',  correct: false },
        { text: 'Todas as pessoas são naturalmente imunes',         correct: false },
        { text: 'O tétano é causado por um fungo, não bactéria',   correct: false }
      ],
      explanation: 'O Clostridium tetani vive como esporo no solo. Entra pelo corpo via ferimentos profundos — não passa entre pessoas.'
    },
    {
      prompt: 'A hanseníase é transmitida por:',
      options: [
        { text: 'Contato próximo e prolongado com caso não tratado', correct: true  },
        { text: 'Toque rápido ou aperto de mão',                     correct: false },
        { text: 'Água contaminada ou alimentos',                     correct: false },
        { text: 'Picada de inseto vetor',                            correct: false }
      ],
      explanation: 'Apenas contato íntimo e prolongado transmite hanseníase. Um aperto de mão não contamina.'
    }
  ],

  guidedPractice: [
    {
      prompt: '🔍 DICA: Tétano = solo + ferida. Não é respiratório, não é de pessoa para pessoa.\n\nUm prego enferrujado no jardim é perigoso principalmente para o risco de:',
      options: [
        { text: 'Tétano — esporos do solo entram pela ferida profunda', correct: true  },
        { text: 'Tuberculose — bactéria pode estar na ferrugem',         correct: false },
        { text: 'Leptospirose — urina de rato na ferrugem',              correct: false },
        { text: 'Hanseníase — contato com objetos contaminados',        correct: false }
      ],
      explanation: 'Esporos de C. tetani estão no solo. Uma ferida profunda em ambiente sujo = condição ideal para tétano.'
    },
    {
      prompt: '🔍 DICA: Hanseníase TEM CURA com tratamento. Após a 1ª dose, não transmite mais.\n\nUm paciente com hanseníase que iniciou o tratamento ontem:',
      options: [
        { text: 'Já não transmite a doença para outros',                 correct: true  },
        { text: 'Ainda transmite por mais 30 dias',                      correct: false },
        { text: 'Só para de transmitir ao terminar o tratamento',        correct: false },
        { text: 'Transmite indefinidamente mesmo em tratamento',        correct: false }
      ],
      explanation: 'Após a 1ª dose da poliquimioterapia (PQT), o paciente já não é mais fonte de contágio.'
    }
  ],

  questions: [
    {
      prompt: 'O agente causador da tuberculose é:',
      options: [
        { text: 'Mycobacterium tuberculosis (bacilo de Koch)', correct: true  },
        { text: 'Clostridium tetani',                          correct: false },
        { text: 'Mycobacterium leprae',                        correct: false },
        { text: 'Leptospira interrogans',                      correct: false }
      ],
      explanation: 'Robert Koch identificou o Mycobacterium tuberculosis em 1882 — daí o nome "bacilo de Koch".'
    },
    {
      prompt: 'A tuberculose é diagnosticada e monitorada pelo exame:',
      options: [
        { text: 'Baciloscopia do escarro (BAAR)',      correct: true  },
        { text: 'Hemograma completo',                  correct: false },
        { text: 'PCR de sangue periférico',            correct: false },
        { text: 'Sorologia IgG específica',            correct: false }
      ],
      explanation: 'A baciloscopia detecta bacilos álcool-ácido resistentes (BAAR) no escarro — exame padrão para tuberculose pulmonar.'
    },
    {
      prompt: 'O Clostridium tetani vive como esporo principalmente em:',
      options: [
        { text: 'Solo e intestino de animais',   correct: true  },
        { text: 'Gotículas respiratórias',       correct: false },
        { text: 'Água de rios e represas',       correct: false },
        { text: 'Superfície da pele humana',     correct: false }
      ],
      explanation: 'C. tetani forma esporos resistentes que sobrevivem no solo por anos — entram por feridas profundas.'
    },
    {
      prompt: 'O sintoma inicial mais clássico do tétano é:',
      options: [
        { text: 'Trismo — espasmo da mandíbula (impossível abrir a boca)', correct: true  },
        { text: 'Febre alta acima de 40°C',                                 correct: false },
        { text: 'Diarreia aquosa intensa',                                  correct: false },
        { text: 'Manchas avermelhadas na pele',                             correct: false }
      ],
      explanation: 'O trismo (tétano = "contração" em grego) começa na mandíbula e progride para espasmos generalizados.'
    },
    {
      prompt: 'A vacina BCG protege principalmente contra:',
      options: [
        { text: 'Formas graves de tuberculose em crianças (meníngea e miliar)', correct: true  },
        { text: 'Tuberculose pulmonar em adultos',                               correct: false },
        { text: 'Hanseníase exclusivamente',                                    correct: false },
        { text: 'Todas as formas de tuberculose com 100% de eficácia',         correct: false }
      ],
      explanation: 'BCG = proteção parcial, principalmente contra tuberculose meníngea e miliar em crianças — formas mais graves.'
    },
    {
      prompt: 'O tratamento da hanseníase chama-se PQT (poliquimioterapia) e dura:',
      options: [
        { text: '6 a 12 meses, dependendo da forma clínica',  correct: true  },
        { text: 'Apenas 7 dias como antibioticoterapia padrão', correct: false },
        { text: 'Toda a vida — não tem cura definitiva',        correct: false },
        { text: '30 dias fixos para todos os pacientes',        correct: false }
      ],
      explanation: 'PQT dura 6 meses (paucibacilar) ou 12 meses (multibacilar) — hanseníase TEM CURA!'
    },
    {
      prompt: 'A hanseníase causa perda de sensibilidade nas manchas de pele porque:',
      options: [
        { text: 'O bacilo de Hansen destrói as terminações nervosas periféricas',    correct: true  },
        { text: 'As manchas são cicatrizes sem terminações nervosas',               correct: false },
        { text: 'A toxina bacteriana bloqueia a medula espinhal',                   correct: false },
        { text: 'O sistema imune ataca os próprios nervos por engano',             correct: false }
      ],
      explanation: 'M. leprae tem tropismo por células de Schwann e nervos — destrói terminações nervosas causando anestesia cutânea.'
    },
    {
      prompt: 'Para prevenir o tétano após pisar em prego enferrujado, deve-se:',
      options: [
        { text: 'Lavar a ferida, verificar status vacinal e, se necessário, aplicar soro e/ou vacina', correct: true  },
        { text: 'Tomar antibiótico oral por 7 dias apenas',                                            correct: false },
        { text: 'Esperar os sintomas aparecerem e então tratar',                                       correct: false },
        { text: 'Aplicar iodo e cobrir com curativo — sem necessidade de vacina',                     correct: false }
      ],
      explanation: 'Lavar + verificar vacinação + soro antitetânico + reforço vacinal se necessário — profilaxia pós-exposição ao tétano.'
    },
    {
      prompt: 'A transmissão da hanseníase por toque rápido é:',
      options: [
        { text: 'Mito — a transmissão requer contato íntimo e prolongado', correct: true  },
        { text: 'Verdade — qualquer toque transmite se houver ferida na pele', correct: false },
        { text: 'Possível apenas em crianças com imunidade baixa',           correct: false },
        { text: 'Real apenas para a forma multibacilar grave',               correct: false }
      ],
      explanation: 'A hanseníase tem uma das transmissibilidades mais baixas entre as doenças infecciosas. Toque rápido não transmite.'
    },
    {
      prompt: 'O Brasil ocupa o 2º lugar mundial em casos de hanseníase. Isso se explica por:',
      options: [
        { text: 'Alta densidade em regiões com maior desigualdade social e acesso limitado à saúde', correct: true  },
        { text: 'Clima tropical que favorece o M. leprae',                                           correct: false },
        { text: 'Falha na vacina BCG brasileira',                                                   correct: false },
        { text: 'Alta transmissibilidade da doença no Brasil',                                      correct: false }
      ],
      explanation: 'Hanseníase é doença da pobreza: má nutrição, habitação precária e acesso limitado à saúde aumentam a prevalência.'
    }
  ],

  adaptiveReview: [
    {
      prompt: 'DIFÍCIL: Por que o tratamento da tuberculose dura 6 meses (e não 7-10 dias como infecções comuns)?',
      options: [
        { text: 'O M. tuberculosis tem parede celular diferenciada e metabolismo lento — cursos curtos criam resistência', correct: true  },
        { text: 'A bactéria se esconde no fígado por 5 meses antes de ser eliminada',                                    correct: false },
        { text: 'A ANVISA exige 6 meses por precaução legal',                                                           correct: false },
        { text: 'Os antibióticos disponíveis são muito fracos — precisam de mais tempo',                               correct: false }
      ],
      explanation: 'Micobactérias crescem lentamente e têm parede celular rica em lipídios. Tratamento curto → bactérias sobreviventes → TB resistente (MDR-TB).'
    },
    {
      prompt: 'DIFÍCIL: A hanseníase pode causar "mãos em garra" e úlceras plantares. Qual o mecanismo?',
      options: [
        { text: 'Neuropatia periférica → anestesia → traumatismos repetidos sem dor → úlceras e deformidades', correct: true  },
        { text: 'A bactéria corrói diretamente ossos e tendões',                                                 correct: false },
        { text: 'Resposta inflamatória intensa destrói o tecido muscular',                                       correct: false },
        { text: 'Vasculite isquêmica causada por toxinas bacterianas',                                           correct: false }
      ],
      explanation: 'Sem sentir dor (anestesia por neuropatia), o paciente se machuca sem perceber — traumas repetidos causam úlceras e deformidades.'
    }
  ],

  rewards: {
    xp:    190,
    gems:  20,
    badge: '🫁 Vencedor das Três Bactérias'
  },

  completionMessage: '🫁 Excelente! Você dominou tuberculose, tétano e hanseníase. Três bactérias diferentes, três formas de vencer!',
  nextStage: 'stage_10'
};

window.STAGE_09 = STAGE_09;
