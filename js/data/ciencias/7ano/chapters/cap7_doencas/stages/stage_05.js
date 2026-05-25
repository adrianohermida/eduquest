/**
 * STAGE 05 — COVID-19 e Gripe (Influenza)
 * Coronavírus, variantes e a pandemia mais recente
 */

const STAGE_05 = {
  id: 'stage_05',
  title: 'COVID-19 e Gripe',
  icon: '😷',
  difficulty: 'medium',
  estimatedTime: 14,

  learningObjectives: [
    'Compreender o vírus SARS-CoV-2 e suas variantes',
    'Diferenciar COVID-19 de gripe (Influenza)',
    'Entender a transmissão aérea e aerossóis',
    'Conhecer as vacinas de RNA mensageiro (mRNA)',
    'Saber quando usar PCR e teste rápido de antígeno'
  ],

  summary: {
    readTime: 5,
    content: [
      {
        icon: '🦠',
        title: 'SARS-CoV-2: O Coronavírus',
        text: 'O COVID-19 é causado pelo vírus SARS-CoV-2, um betacoronavírus identificado em dezembro de 2019 em Wuhan, China.\n\nFamília dos coronavírus: chamados assim pela "coroa" de proteínas spike ao redor do vírus.\n\nTransmissão: principalmente por aerossóis e gotículas (falar, tossir, espirrar) — por isso máscaras e ventilação são fundamentais.\n\n💡 COVID-19 é o nome da DOENÇA. SARS-CoV-2 é o nome do VÍRUS.'
      },
      {
        icon: '🔄',
        title: 'Variantes do Coronavírus',
        text: 'Vírus RNA mutam constantemente. As principais variantes do SARS-CoV-2:\n\n• Alpha (B.1.1.7) — mais transmissível\n• Delta (B.1.617.2) — muito transmissível, mais grave\n• Ômicron (B.1.1.529) — altamente transmissível, menos grave em vacinados\n\nAs variantes recebem letras do alfabeto grego pela OMS.\n\n⚠️ Por que importa: variantes podem escapar parcialmente da imunidade existente.'
      },
      {
        icon: '🤧',
        title: 'COVID-19 vs Gripe: as Diferenças',
        text: 'GRIPE (Influenza):\n• Sintomas em horas (início rápido)\n• Febre alta, dor muscular intensa\n• Vírus Influenza A, B, C\n• Transmissão por gotículas maiores\n\nCOVID-19:\n• Perda de olfato/paladar (específico)\n• Sintomas em 2-14 dias após exposição\n• Mais variabilidade: de assintomático a grave\n• Maior risco de complicações pulmonares\n\n🧠 Ambas: vacinas anuais/atualizadas recomendadas'
      },
      {
        icon: '💉',
        title: 'Vacinas mRNA: Uma Revolução',
        text: 'As vacinas de RNA mensageiro (Pfizer, Moderna) funcionam assim:\n\n1. mRNA entra nas células\n2. Célula produz a proteína spike do vírus\n3. Sistema imune aprende a reconhecer o spike\n4. mRNA se degrada em dias — NÃO entra no DNA\n\n✅ Vantagem: desenvolvimento rápido (meses vs anos)\n✅ Tecnologia usada antes em pesquisas de câncer\n\n❌ Mito: "a vacina mRNA muda o DNA" — FALSO. mRNA não entra no núcleo celular.'
      },
      {
        icon: '🔬',
        title: 'Diagnóstico: PCR, Antígeno e Sorologia',
        text: 'PCR (RT-PCR):\n✅ Padrão ouro — muito preciso\n✅ Detecta o vírus em fase aguda (primeiros dias)\n⏱️ Resultado: 24-48 horas\n\nTeste rápido de antígeno:\n✅ Resultado em 15-30 minutos\n✅ Bom para sintomáticos\n⚠️ Menos sensível que o PCR\n\nSorologia:\n✅ Detecta anticorpos (contato passado com vírus ou vacina)'
      }
    ],

    flashcards: [
      { q: 'Qual o agente causador do COVID-19?',             a: 'SARS-CoV-2 — um betacoronavírus.' },
      { q: 'Por que coronavírus tem esse nome?',              a: 'Pela "coroa" de proteínas spike ao redor do vírus.' },
      { q: 'Qual sintoma é específico do COVID-19?',          a: 'Perda de olfato e paladar (anosmia/ageusia).' },
      { q: 'O que são vacinas mRNA?',                         a: 'Instruem células a produzir proteína spike — sistema imune aprende a combatê-la.' },
      { q: 'A vacina mRNA muda o DNA?',                       a: 'NÃO. O mRNA se degrada em dias e nunca entra no núcleo celular.' },
      { q: 'Qual teste é o padrão ouro para COVID-19?',       a: 'RT-PCR — detecta o material genético do vírus.' },
      { q: 'A gripe é causada por qual vírus?',               a: 'Influenza (tipos A, B e C).' },
      { q: 'O que são as variantes do SARS-CoV-2?',           a: 'Versões mutadas do vírus com diferenças na transmissibilidade ou gravidade.' }
    ],

    mnemonics: [
      { trigger: 'COVID vs Gripe',      memory: '"COVID = Cheiro some (olfato). Gripe = Dói Geral (muscular rápido)"' },
      { trigger: 'mRNA',                memory: '"mRNA = Mensagem que ensina. Lê, aprende, some. NÃO mexe no DNA!"' },
      { trigger: 'Variantes gregas',    memory: '"Alpha, Delta, Ômicron — como capítulos de um livro em grego"' },
      { trigger: 'SARS-CoV-2',         memory: '"SARS = Síndrome Respiratória Aguda Grave. CoV = Coronavírus. 2 = segunda cepa SARS"' }
    ],

    miniReview: [
      { q: 'Qual o nome do vírus que causa COVID-19?',          a: 'SARS-CoV-2.' },
      { q: 'A vacina mRNA muda o DNA humano?',                  a: 'NÃO — o mRNA se degrada em dias sem entrar no núcleo.' },
      { q: 'O que diferencia COVID-19 da gripe clinicamente?',  a: 'Perda de olfato/paladar é específica do COVID.' },
      { q: 'Qual o padrão ouro para diagnóstico de COVID?',     a: 'RT-PCR — teste molecular que detecta o RNA viral.' }
    ]
  },

  warmup: [
    {
      prompt: 'O COVID-19 é causado pelo vírus:',
      options: [
        { text: 'SARS-CoV-2',     correct: true  },
        { text: 'Influenza A',    correct: false },
        { text: 'MERS-CoV',      correct: false },
        { text: 'Rhinovirus',    correct: false }
      ],
      explanation: 'O SARS-CoV-2 é o betacoronavírus identificado em 2019 e causador da pandemia de COVID-19.'
    },
    {
      prompt: 'Um sintoma específico do COVID-19 (menos comum na gripe) é:',
      options: [
        { text: 'Perda de olfato e paladar',  correct: true  },
        { text: 'Febre acima de 38°C',        correct: false },
        { text: 'Dor de cabeça',              correct: false },
        { text: 'Tosse seca',                 correct: false }
      ],
      explanation: 'A anosmia (perda de olfato) e ageusia (perda de paladar) são marcadores relativamente específicos do COVID-19.'
    },
    {
      prompt: 'As vacinas de mRNA (Pfizer, Moderna) funcionam:',
      options: [
        { text: 'Ensinando as células a produzir a proteína spike do vírus', correct: true  },
        { text: 'Inserindo o vírus atenuado no organismo',                    correct: false },
        { text: 'Fornecendo anticorpos prontos contra o vírus',              correct: false },
        { text: 'Modificando o DNA para resistir ao vírus',                  correct: false }
      ],
      explanation: 'O mRNA instrui as células a produzir a proteína spike; o sistema imune aprende a neutralizá-la.'
    }
  ],

  guidedPractice: [
    {
      prompt: '🔍 DICA: mRNA = mensagem temporária. Se degrada em dias. NÃO tem como acessar o DNA no núcleo.\n\nA afirmação "a vacina mRNA modifica o DNA humano" é:',
      options: [
        { text: 'Falsa — mRNA se degrada sem entrar no núcleo celular', correct: true  },
        { text: 'Verdadeira — a vacina altera alguns genes',             correct: false },
        { text: 'Parcialmente verdadeira em crianças',                  correct: false },
        { text: 'Verdadeira apenas para doses de reforço',              correct: false }
      ],
      explanation: 'O mRNA não entra no núcleo da célula (onde está o DNA) e se degrada em poucos dias.'
    },
    {
      prompt: '🔍 DICA: PCR detecta o vírus agora. Use nos primeiros dias.\n\nQual teste é mais indicado para diagnóstico nos primeiros 5 dias de sintomas?',
      options: [
        { text: 'PCR (RT-PCR)',        correct: true  },
        { text: 'Sorologia de IgG',    correct: false },
        { text: 'Hemograma completo',  correct: false },
        { text: 'Radiografia de tórax', correct: false }
      ],
      explanation: 'O RT-PCR detecta o RNA viral em fase aguda — padrão ouro para diagnóstico ativo de COVID-19.'
    }
  ],

  questions: [
    {
      prompt: 'O agente causador do COVID-19 é:',
      options: [
        { text: 'SARS-CoV-2',      correct: true  },
        { text: 'Influenza A H1N1', correct: false },
        { text: 'Adenovírus tipo 5', correct: false },
        { text: 'Rhinovirus C',     correct: false }
      ],
      explanation: 'SARS-CoV-2 é o betacoronavírus responsável pela pandemia iniciada em 2019.'
    },
    {
      prompt: 'A principal via de transmissão do SARS-CoV-2 é:',
      options: [
        { text: 'Aerossóis e gotículas respiratórias',  correct: true  },
        { text: 'Contato com animais infectados',        correct: false },
        { text: 'Água contaminada',                      correct: false },
        { text: 'Picada de mosquito',                    correct: false }
      ],
      explanation: 'O vírus se transmite principalmente por aerossóis e gotículas ao falar, tossir ou espirrar.'
    },
    {
      prompt: 'A vacina mRNA NÃO modifica o DNA humano porque:',
      options: [
        { text: 'O mRNA se degrada em dias sem entrar no núcleo celular',  correct: true  },
        { text: 'O vírus da vacina não é patogênico',                       correct: false },
        { text: 'A ANVISA proíbe vacinas que alteram DNA',                 correct: false },
        { text: 'O sistema imune bloqueia qualquer alteração genética',    correct: false }
      ],
      explanation: 'mRNA é degradado no citoplasma em poucos dias. Não tem acesso ao núcleo celular onde fica o DNA.'
    },
    {
      prompt: 'A gripe (Influenza) diferencia-se do COVID-19 porque:',
      options: [
        { text: 'Os sintomas surgem mais rapidamente (horas), com forte dor muscular', correct: true  },
        { text: 'A gripe não tem vacina disponível',                                    correct: false },
        { text: 'A gripe nunca causa febre acima de 38°C',                              correct: false },
        { text: 'A gripe só afeta idosos',                                              correct: false }
      ],
      explanation: 'A gripe tem início abrupto com febre alta e mialgia intensa em poucas horas após infecção.'
    },
    {
      prompt: 'As variantes do SARS-CoV-2 (Alpha, Delta, Ômicron) recebem nomes do:',
      options: [
        { text: 'Alfabeto grego — sistema adotado pela OMS',       correct: true  },
        { text: 'País onde foram detectadas pela primeira vez',    correct: false },
        { text: 'Cientista que as descobriu',                      correct: false },
        { text: 'Número de mutações que possuem',                  correct: false }
      ],
      explanation: 'A OMS adotou o alfabeto grego para nomear variantes de preocupação e evitar estigmatização geográfica.'
    },
    {
      prompt: 'O teste RT-PCR para COVID-19 detecta:',
      options: [
        { text: 'O RNA do vírus SARS-CoV-2 — infecção ativa',  correct: true  },
        { text: 'Anticorpos IgG produzidos pelo paciente',       correct: false },
        { text: 'Anticorpos IgM de infecção recente',           correct: false },
        { text: 'Fragmentos de proteína spike no sangue',       correct: false }
      ],
      explanation: 'RT-PCR = Reação em Cadeia da Polimerase com Transcriptase Reversa — detecta o RNA viral diretamente.'
    },
    {
      prompt: 'O nome "coronavírus" vem de:',
      options: [
        { text: 'Projeções de proteína spike que parecem uma coroa',  correct: true  },
        { text: 'Ter sido descoberto durante uma eclipse solar',       correct: false },
        { text: 'Ser o "rei" das infecções virais',                   correct: false },
        { text: 'Formato circular do RNA viral',                      correct: false }
      ],
      explanation: 'Ao microscópio eletrônico, as proteínas spike formam uma "coroa" (corona em latim) ao redor do vírus.'
    },
    {
      prompt: 'A perda de olfato (anosmia) é sintoma mais característico de:',
      options: [
        { text: 'COVID-19',   correct: true  },
        { text: 'Gripe',      correct: false },
        { text: 'Dengue',     correct: false },
        { text: 'Resfriado',  correct: false }
      ],
      explanation: 'Anosmia e ageusia (perda de paladar) são sintomas relativamente específicos do COVID-19.'
    },
    {
      prompt: 'A variante Ômicron do SARS-CoV-2 foi marcante por ser:',
      options: [
        { text: 'Mais transmissível, com doença geralmente menos grave em vacinados', correct: true  },
        { text: 'Menos transmissível mas muito mais letal que as anteriores',          correct: false },
        { text: 'A primeira variante a escapar completamente das vacinas',             correct: false },
        { text: 'Menos contagiosa que as variantes anteriores',                        correct: false }
      ],
      explanation: 'Ômicron mostrou alta transmissibilidade mas, em vacinados, menor taxa de hospitalização e óbito.'
    },
    {
      prompt: 'O teste rápido de antígeno para COVID-19 é preferido quando:',
      options: [
        { text: 'É necessário resultado rápido (15-30 min) em paciente sintomático', correct: true  },
        { text: 'Se deseja o resultado mais preciso possível',                        correct: false },
        { text: 'O paciente já se recuperou há 3 meses',                             correct: false },
        { text: 'Se quer verificar se a vacina foi eficaz',                          correct: false }
      ],
      explanation: 'O teste de antígeno é menos sensível que o PCR, mas muito mais rápido — útil para triagem ágil.'
    }
  ],

  adaptiveReview: [
    {
      prompt: 'DIFÍCIL: Por que as vacinas contra o Influenza (gripe) precisam ser reformuladas anualmente, diferente de outras vacinas?',
      options: [
        { text: 'O Influenza sofre deriva e deslocamento antigênico frequentes, alterando as proteínas de superfície', correct: true  },
        { text: 'A imunidade gerada pela vacina da gripe dura exatamente 365 dias',                                    correct: false },
        { text: 'A ANVISA exige reformulação anual por precaução legal',                                               correct: false },
        { text: 'O vírus Influenza morre fora do hospedeiro após 1 ano',                                               correct: false }
      ],
      explanation: 'A deriva antigênica (mutações graduais) e o deslocamento antigênico (recombinação de cepas) do Influenza tornam necessárias vacinas atualizadas todo ano.'
    },
    {
      prompt: 'DIFÍCIL: Uma pessoa vacinada contra COVID-19 pode ainda transmitir o vírus. Por quê?',
      options: [
        { text: 'A vacina protege principalmente contra doença grave, mas não bloqueia completamente a replicação nasal', correct: true  },
        { text: 'A vacina tem eficácia zero na transmissão',                                                              correct: false },
        { text: 'Pessoas vacinadas são imunes mas portadoras crônicas',                                                  correct: false },
        { text: 'A vacina só funciona em crianças',                                                                      correct: false }
      ],
      explanation: 'Vacinas reduzem drasticamente a carga viral, mas especialmente as variantes mais novas podem replicar parcialmente nas vias aéreas superiores.'
    }
  ],

  rewards: {
    xp:    180,
    gems:  18,
    badge: '😷 Especialista COVID'
  },

  completionMessage: '😷 Parabéns! Você dominou COVID-19 e gripe. Ciência salva vidas!',
  nextStage: 'stage_06'
};

window.STAGE_05 = STAGE_05;
