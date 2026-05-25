/**
 * STAGE 02 — Vacinas e Soros
 * Como o corpo é treinado e como agimos em emergências
 */

const STAGE_02 = {
  id: 'stage_02',
  title: 'Vacinas e Soros',
  icon: '💉',
  difficulty: 'easy',
  estimatedTime: 13,

  learningObjectives: [
    'Entender como as vacinas treinam o sistema imune',
    'Diferenciar vacina de soro terapêutico',
    'Conhecer o processo de aprovação de vacinas',
    'Compreender a imunidade de rebanho',
    'Conhecer a história da erradicação da varíola'
  ],

  summary: {
    readTime: 4,
    content: [
      {
        icon: '💉',
        title: 'O que é uma Vacina?',
        text: 'A vacina introduz fragmentos do agente infeccioso (antígenos inativados, atenuados ou proteínas) para TREINAR o sistema imune SEM causar a doença.\n\nEdward Jenner, em 1796, criou a 1ª vacina usando o vírus da varíola bovina (cowpox) para proteger contra a varíola humana.\n\n💡 Macete: "Vacina vem de vacca (vaca em latim) — lembrança de Jenner!"'
      },
      {
        icon: '🔬',
        title: 'Como Vacinas são Aprovadas?',
        text: 'Antes de chegar ao braço, toda vacina passa por:\n\n• Fase 1: segurança em poucos voluntários\n• Fase 2: eficácia em centenas de pessoas\n• Fase 3: grandes grupos (milhares) com grupo CONTROLE (recebe placebo)\n• Aprovação por agências regulatórias (ANVISA no Brasil)\n\nO grupo controle recebe placebo para comparar efeitos reais com os naturais.'
      },
      {
        icon: '🩺',
        title: 'O que é um Soro?',
        text: 'O soro terapêutico contém ANTICORPOS PRONTOS, produzidos por outro organismo (cavalo ou humano).\n\nUso: quando não há tempo para o corpo produzir anticorpos próprios.\n\n✅ Exemplos: soro antiofídico (picada de cobra), soro antitetânico, soro antirrábico\n\n⚡ Soro = imunidade PASSIVA (anticorpos emprestados, temporários)'
      },
      {
        icon: '⚖️',
        title: 'Vacina vs Soro: a Diferença Chave',
        text: 'VACINA → ativa o sistema imune → corpo produz anticorpos próprios → imunidade ATIVA e duradoura\n\nSORO → fornece anticorpos prontos → imunidade PASSIVA e temporária\n\n🧠 Analogia: vacina é como aprender a pescar; soro é receber o peixe pronto.'
      },
      {
        icon: '🌎',
        title: 'Imunidade de Rebanho',
        text: 'Quando grande parte da população é vacinada, a transmissão cai tanto que até os NÃO vacinados ficam protegidos indiretamente.\n\n✅ Varíola: erradicada em 1980 graças à vacinação mundial\n✅ Poliomielite: erradicada no Brasil desde 1989\n\nFato: a última vítima natural de varíola no mundo foi em 1977!'
      }
    ],

    flashcards: [
      { q: 'Quem criou a primeira vacina?',              a: 'Edward Jenner, em 1796, usando varíola bovina (cowpox).' },
      { q: 'Vacina gera imunidade ativa ou passiva?',    a: 'Ativa — o corpo produz seus próprios anticorpos.' },
      { q: 'Soro gera imunidade ativa ou passiva?',      a: 'Passiva — anticorpos prontos fornecidos externamente, temporários.' },
      { q: 'O que recebe o grupo controle num ensaio?',  a: 'Placebo (soro fisiológico ou substância inerte).' },
      { q: 'Por que a vacina da gripe muda todo ano?',   a: 'O vírus Influenza muta frequentemente (deriva antigênica).' },
      { q: 'O que é imunidade de rebanho?',              a: 'Alta vacinação reduz transmissão, protegendo também não vacinados.' },
      { q: 'Qual doença foi erradicada por vacinação?',  a: 'Varíola — erradicada mundialmente em 1980 pela OMS.' },
      { q: 'Para que serve o soro antiofídico?',         a: 'Neutralizar veneno de cobra com anticorpos prontos (imunidade passiva).' }
    ],

    mnemonics: [
      { trigger: 'Vacina vs Soro',       memory: '"Vacina = Você mesmo faz os anticorpos (Ativo). Soro = Solução pronta (Passivo)"' },
      { trigger: 'Edward Jenner',         memory: '"Jenner + Vaca (vacca) = Vacina". A palavra vacina vem de vaca!' },
      { trigger: 'Imunidade de Rebanho', memory: '"Rebanho protege as ovelhas fracas". Os vacinados formam um escudo!' },
      { trigger: 'Fases ensaio clínico', memory: '"1-2-3 antes do braço": Segurança → Eficácia → Grande grupo → Aprovação' }
    ],

    miniReview: [
      { q: 'Qual a diferença entre vacina e soro?',              a: 'Vacina: imunidade ativa (corpo faz anticorpos). Soro: imunidade passiva (anticorpos prontos).' },
      { q: 'Por que a vacina da gripe muda todo ano?',            a: 'O vírus influenza muta constantemente — nova formulação anual.' },
      { q: 'Qual doença foi erradicada pela vacinação mundial?',  a: 'Varíola (erradicada em 1980).' },
      { q: 'O que recebe o grupo controle num ensaio clínico?',   a: 'Placebo (soro fisiológico ou substância inerte).' }
    ]
  },

  warmup: [
    {
      prompt: 'Vacinas funcionam treinando o:',
      options: [
        { text: 'Sistema imunológico',  correct: true  },
        { text: 'Sistema digestório',   correct: false },
        { text: 'Sistema nervoso',      correct: false },
        { text: 'Sistema circulatório', correct: false }
      ],
      explanation: 'Vacinas apresentam antígenos ao sistema imune para treinar a resposta de defesa.'
    },
    {
      prompt: 'Edward Jenner criou a vacina da varíola a partir de:',
      options: [
        { text: 'Varíola bovina (cowpox)', correct: true  },
        { text: 'Sangue humano',           correct: false },
        { text: 'Plantas medicinais',      correct: false },
        { text: 'Antibiótico natural',     correct: false }
      ],
      explanation: 'Jenner observou que ordenhadores de vacas não pegavam varíola e usou o vírus bovino para imunizar humanos.'
    },
    {
      prompt: 'Soro antiofídico contém:',
      options: [
        { text: 'Anticorpos prontos',  correct: true  },
        { text: 'Vírus da cobra',      correct: false },
        { text: 'Veneno diluído',      correct: false },
        { text: 'Antibiótico',         correct: false }
      ],
      explanation: 'Soros possuem anticorpos produzidos por cavalos ou humanos expostos ao veneno.'
    }
  ],

  guidedPractice: [
    {
      prompt: '🔍 DICA: Pense em "ativo" (você age) vs "passivo" (você recebe).\n\nQual tipo de imunidade a vacina gera?',
      options: [
        { text: 'Ativa',   correct: true  },
        { text: 'Passiva', correct: false },
        { text: 'Mista',   correct: false },
        { text: 'Nenhuma', correct: false }
      ],
      explanation: 'A vacina ativa o sistema imune para produzir seus próprios anticorpos — imunidade ativa e duradoura.'
    },
    {
      prompt: '🔍 DICA: O grupo controle serve de comparação — recebe algo neutro.\n\nO que o grupo controle recebe num ensaio clínico?',
      options: [
        { text: 'Placebo/Soro fisiológico', correct: true  },
        { text: 'Vacina experimental',      correct: false },
        { text: 'Antibiótico',              correct: false },
        { text: 'Dose dupla',               correct: false }
      ],
      explanation: 'O grupo controle recebe placebo para comparar efeitos reais da vacina com efeitos naturais/psicológicos.'
    }
  ],

  questions: [
    {
      prompt: 'Para que serve uma vacina?',
      options: [
        { text: 'Treinar o sistema imune sem causar a doença', correct: true  },
        { text: 'Curar a doença já instalada',                 correct: false },
        { text: 'Fornecer antibióticos preventivos',           correct: false },
        { text: 'Substituir os glóbulos brancos',              correct: false }
      ],
      explanation: 'Vacinas apresentam antígenos inativados ou atenuados para treinar o sistema imune preventivamente.'
    },
    {
      prompt: 'A picada de cobra venenosa é tratada com soro porque:',
      options: [
        { text: 'Fornece anticorpos prontos para neutralizar o veneno', correct: true  },
        { text: 'Mata o veneno com antibiótico',                         correct: false },
        { text: 'Ativa a febre para combater o veneno',                  correct: false },
        { text: 'É uma vacina preventiva de emergência',                 correct: false }
      ],
      explanation: 'O soro antiofídico contém anticorpos prontos que neutralizam as toxinas do veneno rapidamente.'
    },
    {
      prompt: 'No Brasil, as vacinas do calendário básico são oferecidas pelo SUS:',
      options: [
        { text: 'Gratuitamente',          correct: true  },
        { text: 'Com taxa de R$ 50',      correct: false },
        { text: 'Apenas para crianças',   correct: false },
        { text: 'Apenas em hospitais',    correct: false }
      ],
      explanation: 'O Programa Nacional de Imunizações (PNI) oferece vacinação gratuita a toda a população brasileira.'
    },
    {
      prompt: 'A vacina da gripe precisa ser reformulada todo ano porque:',
      options: [
        { text: 'O vírus Influenza muta frequentemente',   correct: true  },
        { text: 'A imunidade dura exatamente 12 meses',   correct: false },
        { text: 'A ANVISA exige renovação anual por lei',  correct: false },
        { text: 'O vírus fica mais fraco todo ano',        correct: false }
      ],
      explanation: 'O vírus da gripe sofre mutações constantes (deriva antigênica), exigindo novas formulações anuais.'
    },
    {
      prompt: 'A imunidade de rebanho protege especialmente:',
      options: [
        { text: 'Imunodeprimidos e não vacinados vulneráveis', correct: true  },
        { text: 'Apenas os vacinados',                         correct: false },
        { text: 'Somente adultos saudáveis',                   correct: false },
        { text: 'Nenhum grupo específico',                     correct: false }
      ],
      explanation: 'Quando a transmissão cai, imunodeprimidos e bebês não vacinados ficam protegidos indiretamente.'
    },
    {
      prompt: 'No ensaio clínico de fase 3, o grupo controle recebe:',
      options: [
        { text: 'Placebo ou soro fisiológico', correct: true  },
        { text: 'Vacina experimental',         correct: false },
        { text: 'Nenhum tratamento',           correct: false },
        { text: 'Antibiótico preventivo',      correct: false }
      ],
      explanation: 'O grupo controle recebe placebo para permitir comparação rigorosa com o grupo vacinado.'
    },
    {
      prompt: 'O soro antitetânico é usado quando:',
      options: [
        { text: 'Não há tempo para vacinação produzir anticorpos — emergência', correct: true  },
        { text: 'A vacina não está disponível no SUS',                           correct: false },
        { text: 'O paciente tem alergia a vacinas',                             correct: false },
        { text: 'A doença já foi completamente curada',                         correct: false }
      ],
      explanation: 'O soro antitetânico fornece anticorpos prontos para proteção imediata em situações de emergência.'
    },
    {
      prompt: 'A varíola foi erradicada em 1980 graças a:',
      options: [
        { text: 'Campanha global de vacinação coordenada pela OMS', correct: true  },
        { text: 'Uso massivo de antibióticos',                       correct: false },
        { text: 'Higiene e saneamento básico apenas',                correct: false },
        { text: 'Mutação natural que enfraqueceu o vírus',           correct: false }
      ],
      explanation: 'A OMS coordenou vacinação mundial, erradicando a varíola — única doença humana erradicada.'
    },
    {
      prompt: 'Edward Jenner usou _______ para criar a primeira vacina:',
      options: [
        { text: 'Varíola bovina (cowpox)',  correct: true  },
        { text: 'Varíola humana atenuada', correct: false },
        { text: 'Bactérias inativadas',    correct: false },
        { text: 'Soro de pessoas curadas', correct: false }
      ],
      explanation: 'Jenner observou que ordenhadores que pegavam cowpox ficavam imunes à varíola humana.'
    },
    {
      prompt: 'Dizer que uma vacina tem 90% de eficácia significa:',
      options: [
        { text: 'Reduz em 90% o risco de adoecer comparado ao grupo controle', correct: true  },
        { text: '90% das pessoas ficam completamente imunes para sempre',       correct: false },
        { text: 'A vacina funciona por 90% do tempo de vida',                  correct: false },
        { text: '90% das doses aplicadas são seguras',                         correct: false }
      ],
      explanation: 'Eficácia vacinal é calculada comparando taxas de infecção entre vacinados e grupo controle.'
    }
  ],

  adaptiveReview: [
    {
      prompt: 'DIFÍCIL: Qual a diferença fundamental entre imunidade ATIVA e PASSIVA?',
      options: [
        { text: 'Ativa: corpo produz anticorpos próprios (duradoura). Passiva: anticorpos fornecidos externamente (temporária).', correct: true  },
        { text: 'Ativa: via injeção. Passiva: via oral.',                                                                          correct: false },
        { text: 'Ativa: apenas para adultos. Passiva: apenas para crianças.',                                                     correct: false },
        { text: 'São exatamente a mesma coisa.',                                                                                   correct: false }
      ],
      explanation: 'Vacina = ativa (corpo faz os anticorpos, dura anos). Soro e transmissão vertical = passiva (anticorpos emprestados, temporários).'
    },
    {
      prompt: 'DIFÍCIL: Por que os ensaios clínicos de fase 3 exigem grupo controle com placebo?',
      options: [
        { text: 'Para separar efeito real da vacina de efeitos naturais, placebo e psicológicos', correct: true  },
        { text: 'Para testar a vacina em animais antes de aplicar em humanos',                     correct: false },
        { text: 'Para reduzir o custo de produção industrial da vacina',                          correct: false },
        { text: 'Para garantir que o grupo controle não tenha acesso à vacina por motivos éticos', correct: false }
      ],
      explanation: 'Sem grupo controle, não há como saber se a vacina funciona de verdade ou se é efeito placebo/recuperação natural.'
    }
  ],

  rewards: {
    xp:    160,
    gems:  16,
    badge: '💉 Mestre das Vacinas'
  },

  completionMessage: '💉 Incrível! Você dominou Vacinas e Soros. Seu escudo imunológico está mais forte!',
  nextStage: 'stage_03'
};

window.STAGE_02 = STAGE_02;
