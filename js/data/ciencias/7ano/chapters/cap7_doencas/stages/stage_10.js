/**
 * STAGE 10 — Saneamento Básico e Prevenção
 * A infraestrutura que salva mais vidas que qualquer remédio
 */

const STAGE_10 = {
  id: 'stage_10',
  title: 'Saneamento e Prevenção',
  icon: '🚰',
  difficulty: 'hard',
  estimatedTime: 15,

  learningObjectives: [
    'Compreender os componentes do saneamento básico',
    'Entender a relação entre saneamento e doenças transmissíveis',
    'Conhecer as medidas de higiene pessoal e coletiva',
    'Saber o impacto do lixo inadequado na saúde pública',
    'Entender o controle de vetores como medida de prevenção'
  ],

  summary: {
    readTime: 5,
    content: [
      {
        icon: '🚰',
        title: 'Os 4 Pilares do Saneamento Básico',
        text: 'Saneamento básico = conjunto de medidas para garantir saúde coletiva:\n\n1. 💧 ÁGUA TRATADA: cloração + filtração + fluoretação\n2. 🚽 ESGOTO: coleta e tratamento de dejetos\n3. 🗑️ RESÍDUOS SÓLIDOS: coleta e destinação do lixo\n4. 🌊 DRENAGEM: escoamento de águas pluviais\n\n⚡ O saneamento básico é considerado o maior avanço em saúde pública da história — mais que qualquer vacina ou remédio!'
      },
      {
        icon: '🤒',
        title: 'Doenças Ligadas à Falta de Saneamento',
        text: 'Sem saneamento:\n\n🚽 Sem esgoto tratado → CÓLERA, FEBRE TIFÓIDE, HEPATITE A, amebíase\n💧 Sem água limpa → DIARREIA, GIARDÍASE, criptosporidiose\n🗑️ Lixo acumulado → DENGUE, LEPTOSPIROSE, DOENÇAS RESPIRATÓRIAS\n🌊 Sem drenagem → ENCHENTES → LEPTOSPIROSE, FEBRE TIFÓIDE\n\n💡 Dados OMS: 80% das doenças mundiais têm relação com água contaminada!'
      },
      {
        icon: '🧼',
        title: 'Higiene Pessoal: A Primeira Linha de Defesa',
        text: 'Medidas simples que previnem muitas doenças:\n\n✅ Lavar as mãos: antes de comer, após banheiro, após tocar animais\n✅ Água filtrada/fervida quando não há garantia de tratamento\n✅ Alimentos cozidos a temperatura adequada (acima de 70°C)\n✅ Frutas e verduras lavadas com água corrente\n✅ Não compartilhar objetos pessoais (copo, escova)\n\n🧼 Lavagem das mãos: 20 segundos com sabão, incluindo entre os dedos e unhas!'
      },
      {
        icon: '🦟',
        title: 'Controle de Vetores',
        text: 'Vetores são seres vivos que transmitem doenças. O controle pode ser:\n\n• FÍSICO: telas nas janelas, mosquiteiros, roupas longas\n• QUÍMICO: inseticidas, repelentes (DEET), larvicidas (Bti)\n• BIOLÓGICO: peixes que comem larvas, bactérias (Wolbachia)\n• AMBIENTAL: eliminar criadouros (água parada, lixo)\n\n🦟 Controle do Aedes aegypti = previne DENGUE + ZIKA + CHIKUNGUNYA + FEBRE AMARELA!'
      },
      {
        icon: '🏙️',
        title: 'Saneamento e Desigualdade Social',
        text: 'No Brasil, o acesso ao saneamento é DESIGUAL:\n\n• Norte e Nordeste: menor cobertura de água e esgoto\n• Periferias e favelas: mais expostas a doenças\n• Populações vulneráveis: crianças, idosos, gestantes\n\n📊 Dados (2023):\n✅ Água: 84% da população com acesso\n❌ Esgoto: apenas 55% com tratamento\n\n⚠️ Falta de saneamento = desigualdade = doenças evitáveis = mortes desnecessárias'
      }
    ],

    flashcards: [
      { q: 'Quais são os 4 pilares do saneamento básico?', a: 'Água tratada, esgoto, resíduos sólidos e drenagem urbana.' },
      { q: 'Qual doença está relacionada ao lixo acumulado?', a: 'Dengue (criadouro do Aedes), leptospirose (ratos) e respiratórias.' },
      { q: '80% das doenças mundiais têm relação com:', a: 'Água contaminada / falta de saneamento (OMS).' },
      { q: 'Quantos segundos deve durar a lavagem das mãos?', a: '20 segundos com sabão, incluindo entre dedos e unhas.' },
      { q: 'O que é controle biológico de vetores?', a: 'Uso de seres vivos (peixes, bactérias) para controlar vetores sem químicos.' },
      { q: 'Quais doenças o controle do Aedes aegypti previne?', a: 'Dengue, zika, chikungunya e febre amarela.' },
      { q: 'Por que o saneamento é considerado o maior avanço em saúde pública?', a: 'Preveniu mais mortes que qualquer vacina ou remédio — eliminou doenças de transmissão fecal-oral.' },
      { q: 'Que percentual da população brasileira tem acesso a esgoto tratado?', a: 'Apenas ~55% (dados 2023) — enorme desigualdade regional.' }
    ],

    mnemonics: [
      { trigger: '4 pilares saneamento', memory: '"AERD = Água, Esgoto, Resíduo, Drenagem. Sem AERD = doente!"' },
      { trigger: 'Lavar as mãos',        memory: '"20 segundos com sabão = 20 centavos de saúde que valem mais que remédios"' },
      { trigger: 'Controles de vetor',   memory: '"FQBA = Físico (tela), Químico (DEET), Biológico (peixe), Ambiental (sem água parada)"' },
      { trigger: 'Doenças do esgoto',    memory: '"Cólera, Febre Tifóide, Hepatite A — todas por fezes na água. Esgoto tratado = fim delas!"' }
    ],

    miniReview: [
      { q: 'Cite os 4 pilares do saneamento básico.', a: 'Água tratada, esgoto, resíduos sólidos, drenagem urbana.' },
      { q: 'Qual relação entre lixo e dengue?',       a: 'Lixo cria criadouros de água parada para o Aedes aegypti.' },
      { q: 'Quanto tempo deve durar a lavagem das mãos?', a: '20 segundos com sabão — incluindo entre dedos e unhas.' },
      { q: 'O que é controle biológico de vetores?',  a: 'Uso de organismos vivos (peixes larvívoros, Wolbachia) para controlar vetores.' }
    ]
  },

  warmup: [
    {
      prompt: 'Quantos são os pilares do saneamento básico no Brasil?',
      options: [
        { text: '4 — água, esgoto, resíduos sólidos e drenagem', correct: true  },
        { text: '2 — apenas água e esgoto',                       correct: false },
        { text: '3 — água, esgoto e lixo',                        correct: false },
        { text: '5 — incluindo vacinação',                        correct: false }
      ],
      explanation: 'A Lei 11.445/2007 define 4 serviços de saneamento: água, esgoto, resíduos sólidos e drenagem.'
    },
    {
      prompt: 'A falta de tratamento de esgoto está diretamente relacionada à:',
      options: [
        { text: 'Cólera e febre tifóide',  correct: true  },
        { text: 'Tuberculose',             correct: false },
        { text: 'Sarampo',                 correct: false },
        { text: 'Raiva',                   correct: false }
      ],
      explanation: 'Esgoto não tratado contamina água e alimentos — transmitindo doenças fecal-orais como cólera e febre tifóide.'
    },
    {
      prompt: 'A melhor forma de prevenir a dengue no âmbito doméstico é:',
      options: [
        { text: 'Eliminar recipientes com água parada',  correct: true  },
        { text: 'Usar antibióticos preventivos',         correct: false },
        { text: 'Instalar ar-condicionado',              correct: false },
        { text: 'Vacinar apenas as crianças',            correct: false }
      ],
      explanation: 'Sem criadouros (água parada), o Aedes não se reproduz — a prevenção ambiental é a mais eficaz.'
    }
  ],

  guidedPractice: [
    {
      prompt: '🔍 DICA: Controle biológico usa seres vivos — sem química.\n\nAo colocar peixes (como o guaru) em reservatórios de água, estamos fazendo controle:',
      options: [
        { text: 'Biológico — peixes comem larvas do Aedes',    correct: true  },
        { text: 'Químico — peixes liberam substâncias tóxicas', correct: false },
        { text: 'Físico — peixes bloqueiam fisicamente os ovos', correct: false },
        { text: 'Nenhum tipo de controle válido',               correct: false }
      ],
      explanation: 'Peixes larvívoros como o guaru (Poecilia reticulata) comem larvas do Aedes — controle biológico natural.'
    },
    {
      prompt: '🔍 DICA: 80% das doenças mundiais têm relação com água. Saneamento salva mais que remédios.\n\nQual medida de saúde pública mais reduziu mortalidade infantil no século XX?',
      options: [
        { text: 'Saneamento básico (água tratada + esgoto)',    correct: true  },
        { text: 'Antibióticos de amplo espectro',               correct: false },
        { text: 'Programa de vacinação em massa',               correct: false },
        { text: 'Hospitais e UTIs pediátricas',                 correct: false }
      ],
      explanation: 'Estudos históricos mostram que saneamento, água limpa e higiene reduziram mais mortes que qualquer intervenção médica isolada.'
    }
  ],

  questions: [
    {
      prompt: 'Os 4 componentes do saneamento básico são:',
      options: [
        { text: 'Água tratada, esgoto sanitário, resíduos sólidos e drenagem urbana', correct: true  },
        { text: 'Vacinas, antibióticos, hospitais e médicos',                          correct: false },
        { text: 'Higiene pessoal, alimentação, exercício e sono',                     correct: false },
        { text: 'Água, ar, solo e energia elétrica',                                  correct: false }
      ],
      explanation: 'A Lei do Saneamento Básico (11.445/2007) define esses 4 serviços essenciais à saúde pública.'
    },
    {
      prompt: 'A leptospirose e a dengue têm em comum o fato de serem favorecidas por:',
      options: [
        { text: 'Falta de saneamento, lixo acumulado e enchentes',        correct: true  },
        { text: 'Transmissão aérea em ambientes fechados',                 correct: false },
        { text: 'Consumo de carne mal cozida ou crua',                    correct: false },
        { text: 'Contato com animais domésticos doentes',                 correct: false }
      ],
      explanation: 'Lixo cria criadouros para Aedes (dengue). Enchentes com esgoto disseminam Leptospira (leptospirose).'
    },
    {
      prompt: 'A lavagem adequada das mãos deve durar pelo menos:',
      options: [
        { text: '20 segundos com sabão, incluindo entre dedos e unhas', correct: true  },
        { text: '3 segundos com sabonete líquido',                      correct: false },
        { text: '5 minutos com água corrente sem sabão',               correct: false },
        { text: '1 minuto com álcool em gel apenas',                   correct: false }
      ],
      explanation: 'A OMS recomenda 20 segundos de fricção com sabão para remoção eficaz de patógenos.'
    },
    {
      prompt: 'O controle biológico de vetores usa:',
      options: [
        { text: 'Seres vivos (peixes, bactérias) para controlar populações de vetores', correct: true  },
        { text: 'Inseticidas químicos sintéticos aplicados em massa',                    correct: false },
        { text: 'Telas físicas em janelas e portas',                                    correct: false },
        { text: 'Repelentes com DEET na pele',                                          correct: false }
      ],
      explanation: 'Controle biológico: peixes larvívoros, Bacillus thuringiensis israelensis (Bti) e bactéria Wolbachia em mosquitos.'
    },
    {
      prompt: 'A drenagem urbana, como componente do saneamento, previne principalmente:',
      options: [
        { text: 'Enchentes que favorecem leptospirose e febre tifóide', correct: true  },
        { text: 'Transmissão de tuberculose por aerossóis',              correct: false },
        { text: 'Infecções por vírus como sarampo e catapora',          correct: false },
        { text: 'Contaminação por agrotóxicos nos alimentos',           correct: false }
      ],
      explanation: 'Sem drenagem, chuvas causam enchentes — misturando água do esgoto com a rua e favorecendo leptospirose.'
    },
    {
      prompt: 'Segundo a OMS, qual porcentagem das doenças mundiais tem relação com água contaminada?',
      options: [
        { text: '80%',  correct: true  },
        { text: '10%',  correct: false },
        { text: '30%',  correct: false },
        { text: '50%',  correct: false }
      ],
      explanation: 'A OMS estima que ~80% das doenças no mundo têm relação com água contaminada e falta de saneamento.'
    },
    {
      prompt: 'A presença de lixo acumulado em terrenos baldios favorece principalmente:',
      options: [
        { text: 'Proliferação de ratos (leptospirose) e criação de água parada (dengue)', correct: true  },
        { text: 'Transmissão de tuberculose pelo ar',                                      correct: false },
        { text: 'Contaminação de alimentos com bactérias fecais',                        correct: false },
        { text: 'Aumento da umidade que favorece fungos pulmonares',                      correct: false }
      ],
      explanation: 'Lixo acumula água parada (Aedes) e atrai ratos (veículos de Leptospira) — dois vetores em um.'
    },
    {
      prompt: 'Para garantir que a água de uma fonte não segura seja potável, deve-se:',
      options: [
        { text: 'Ferver por 1-3 minutos ou clorar (hipoclorito de sódio)',  correct: true  },
        { text: 'Deixar repousar por 24 horas para sedimentação',           correct: false },
        { text: 'Adicionar sal de cozinha para eliminar micro-organismos',  correct: false },
        { text: 'Filtrar apenas com pano fino',                             correct: false }
      ],
      explanation: 'Fervura mata patógenos. Cloração (2 gotas de hipoclorito 2,5% por litro) é o método domiciliar recomendado.'
    },
    {
      prompt: 'A desigualdade no acesso ao saneamento no Brasil afeta mais as regiões:',
      options: [
        { text: 'Norte e Nordeste — menor cobertura de água e esgoto', correct: true  },
        { text: 'Sul e Sudeste — maior densidade populacional',         correct: false },
        { text: 'Centro-Oeste — área mais seca do país',                correct: false },
        { text: 'Todas as regiões têm acesso igual ao saneamento',     correct: false }
      ],
      explanation: 'Norte e Nordeste têm os menores índices de cobertura de água tratada e esgoto no Brasil.'
    },
    {
      prompt: 'Alimentos devem ser cozidos a temperatura superior a:',
      options: [
        { text: '70°C — temperatura que elimina a maioria dos patógenos alimentares', correct: true  },
        { text: '37°C — temperatura corporal',                                         correct: false },
        { text: '50°C — temperatura de pasteurização rápida',                         correct: false },
        { text: '100°C é obrigatório para todos os alimentos',                        correct: false }
      ],
      explanation: 'Acima de 70°C, a maioria dos patógenos alimentares (Salmonella, E. coli, etc.) é eliminada em segundos.'
    }
  ],

  adaptiveReview: [
    {
      prompt: 'DIFÍCIL: Por que o saneamento básico é considerado mais impactante na mortalidade infantil que antibióticos?',
      options: [
        { text: 'Preveniu doenças antes que precisassem de tratamento — prevenção supera cura em escala populacional', correct: true  },
        { text: 'Antibióticos têm muitos efeitos colaterais que anulam seus benefícios',                              correct: false },
        { text: 'Antibióticos só existiram após o século XXI',                                                        correct: false },
        { text: 'O saneamento funciona mais rápido que antibióticos no tratamento',                                   correct: false }
      ],
      explanation: 'Dados históricos mostram que mortalidade infantil caiu drasticamente com saneamento (décadas antes dos antibióticos). Prevenir é mais eficiente que tratar em escala.'
    },
    {
      prompt: 'DIFÍCIL: A bactéria Wolbachia é usada em controle biológico da dengue. Como ela funciona?',
      options: [
        { text: 'Infecta o Aedes e reduz sua capacidade de transmitir arbovírus', correct: true  },
        { text: 'Mata diretamente as larvas do Aedes no ambiente aquático',        correct: false },
        { text: 'É introduzida nos humanos para bloquear a infecção pelo vírus',  correct: false },
        { text: 'Cria competição com o Aedes por alimento, reduzindo a população', correct: false }
      ],
      explanation: 'Mosquitos Aedes infectados com Wolbachia têm capacidade reduzida de replicar dengue, zika e chikungunya — estratégia usada no Brasil.'
    }
  ],

  rewards: {
    xp:    200,
    gems:  20,
    badge: '🚰 Engenheiro da Saúde Pública'
  },

  completionMessage: '🚰 Parabéns! Você entende que saneamento é a base de tudo. Água limpa e esgoto tratado = saúde para todos!',
  nextStage: 'stage_boss'
};

window.STAGE_10 = STAGE_10;
