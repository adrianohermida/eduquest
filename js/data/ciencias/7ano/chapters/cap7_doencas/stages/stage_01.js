/**
 * STAGE 01 — Sistema Imunológico e Anticorpos
 * Fundação: como o corpo se defende naturalmente
 */

const STAGE_01 = {
  id: 'stage_01',
  title: 'Sistema Imunológico',
  icon: '🛡️',
  difficulty: 'easy',
  estimatedTime: 12,

  learningObjectives: [
    'Compreender o que são anticorpos e como funcionam',
    'Diferenciar imunidade natural de imunidade adquirida',
    'Entender o que são antígenos e como o corpo os reconhece',
    'Identificar o conceito de memória imunológica',
    'Conhecer os vetores biológicos e a transmissão vertical'
  ],

  summary: {
    readTime: 4,
    content: [
      {
        icon: '🦠',
        title: 'O que são Anticorpos?',
        text: 'Anticorpos são proteínas produzidas pelo sistema imunológico para combater invasores (vírus, bactérias, fungos). Pense neles como "soldados personalizados": cada tipo de anticorpo reconhece e ataca um inimigo específico.\n\n💡 Macete: "Anti + corpo = contra o invasor do corpo!"'
      },
      {
        icon: '🎯',
        title: 'Antígenos: o que dispara a defesa',
        text: 'Antígeno é qualquer substância estranha ao corpo que desencadeia a resposta imune. É como uma "senha inimiga" que o sistema imune reconhece.\n\n• Vírus, bactérias e toxinas possuem antígenos\n• O corpo produz anticorpos específicos para cada antígeno'
      },
      {
        icon: '🧠',
        title: 'Memória Imunológica',
        text: 'Após combater um invasor, o sistema imune "guarda na memória" como derrotá-lo. Na próxima exposição, a resposta é muito mais rápida e eficiente.\n\n🔁 É por isso que você raramente pega catapora duas vezes!'
      },
      {
        icon: '🧬',
        title: 'Imunidade Natural vs Adquirida',
        text: 'Natural: você nasce com ela (barreiras físicas como pele, lágrimas, pH ácido do estômago).\n\nAdquirida: desenvolvida ao longo da vida — pelo contato com doenças ou pelas vacinas.'
      },
      {
        icon: '🦟',
        title: 'Vetores Biológicos',
        text: 'Vetor biológico é um ser vivo que transporta e transmite um agente causador de doença.\n\n✅ Exemplos: mosquito, carrapato, barbeiro (inseto)\n❌ NÃO é vetor: seringa, água, ar — estes são veículos/fômites, não vetores vivos!'
      }
    ],

    flashcards: [
      { q: 'O que são anticorpos?',            a: 'Proteínas do sistema imune que combatem invasores específicos.' },
      { q: 'O que é um antígeno?',             a: 'Substância estranha que desencadeia a resposta imune do corpo.' },
      { q: 'O que é memória imunológica?',     a: 'Capacidade do sistema imune de lembrar invasores anteriores e responder mais rápido.' },
      { q: 'Qual a diferença: imunidade natural x adquirida?', a: 'Natural: de nascença. Adquirida: desenvolvida pela doença ou vacina.' },
      { q: 'O que é vetor biológico?',         a: 'Ser vivo que transmite um agente causador de doença.' },
      { q: 'Seringa é vetor biológico?',       a: 'Não! É fômite/veículo. Vetor biológico precisa ser um ser vivo.' },
      { q: 'O que é transmissão vertical?',    a: 'Transmissão da mãe para o bebê durante gestação, parto ou amamentação.' },
      { q: 'Por que antibióticos não matam vírus?', a: 'Antibióticos atacam estruturas bacterianas. Vírus não têm essas estruturas.' }
    ],

    mnemonics: [
      { trigger: 'Anticorpo',           memory: '"Anti + corpo" = proteína CONTRA os invasores do corpo.' },
      { trigger: 'Antígeno',            memory: '"Anti + geno" = dispara a resposta imune. É o "aviso de perigo".' },
      { trigger: 'Memória imunológica', memory: 'Pense num "arquivo de fotos dos inimigos derrotados". Próxima vez, ataque instantâneo!' },
      { trigger: 'Vetor biológico',     memory: 'Vetor = ser VIVO que carrega e transmite. Seringa não é ser vivo → não é vetor.' }
    ],

    miniReview: [
      { q: 'Anticorpos são produzidos por qual sistema?',    a: 'Sistema imunológico.' },
      { q: 'A catapora raramente ocorre duas vezes. Por quê?', a: 'Memória imunológica: o corpo recorda o vírus e ataca mais rápido.' },
      { q: 'Cite 2 vetores biológicos.',                     a: 'Mosquito e carrapato (ou barbeiro).' },
      { q: 'Antibióticos curam gripe?',                     a: 'Não. Gripe é viral; antibióticos são para bactérias.' }
    ]
  },

  warmup: [
    {
      prompt: 'Anticorpos são produzidos pelo nosso:',
      options: [
        { text: 'Sistema imunológico', correct: true  },
        { text: 'Sistema digestório',  correct: false },
        { text: 'Sistema nervoso',     correct: false },
        { text: 'Sistema circulatório',correct: false }
      ],
      explanation: 'O sistema imunológico produz anticorpos para nos defender de invasores.'
    },
    {
      prompt: 'O que é um antígeno?',
      options: [
        { text: 'Um anticorpo forte',                         correct: false },
        { text: 'Substância que desencadeia a resposta imune', correct: true  },
        { text: 'Um remédio',                                 correct: false },
        { text: 'Um tipo de vitamina',                        correct: false }
      ],
      explanation: 'Antígeno é a "senha inimiga" que ativa a defesa do corpo.'
    },
    {
      prompt: 'Por que raramente pegamos catapora duas vezes?',
      options: [
        { text: 'O vírus desaparece do planeta',    correct: false },
        { text: 'A memória imunológica nos protege', correct: true  },
        { text: 'Só crianças pegam',                correct: false },
        { text: 'O vírus muta muito rápido',        correct: false }
      ],
      explanation: 'Memória imunológica: células lembram o inimigo e reagem muito mais rápido.'
    }
  ],

  guidedPractice: [
    {
      prompt: '🔍 DICA: Lembre que anticorpos são PROTEÍNAS especializadas.\n\nAnticorpos são:',
      options: [
        { text: 'Proteínas de defesa',   correct: true  },
        { text: 'Vírus enfraquecidos',   correct: false },
        { text: 'Bactérias boas',        correct: false },
        { text: 'Minerais essenciais',   correct: false }
      ],
      explanation: 'Anticorpos são proteínas do sistema imune que combatem invasores.'
    },
    {
      prompt: '🔍 DICA: Antibióticos só funcionam em seres com parede celular bacteriana.\n\nAntibióticos NÃO funcionam contra:',
      options: [
        { text: 'Bactérias',    correct: false },
        { text: 'Vírus',        correct: true  },
        { text: 'Protozoários', correct: false },
        { text: 'Fungos',       correct: false }
      ],
      explanation: 'Antibióticos atacam estruturas bacterianas. Vírus não têm essas estruturas.'
    }
  ],

  questions: [
    {
      prompt: 'Anticorpos são:',
      options: [
        { text: 'Proteínas de defesa',   correct: true  },
        { text: 'Vírus enfraquecidos',   correct: false },
        { text: 'Bactérias boas',        correct: false },
        { text: 'Minerais essenciais',   correct: false }
      ],
      explanation: 'Anticorpos são proteínas do sistema imune que combatem invasores.'
    },
    {
      prompt: 'O soro terapêutico contém:',
      options: [
        { text: 'Anticorpos prontos',  correct: true  },
        { text: 'Vírus vivos',         correct: false },
        { text: 'Antibióticos',        correct: false },
        { text: 'Hormônios',           correct: false }
      ],
      explanation: 'Soros possuem anticorpos prontos para ação rápida e imediata.'
    },
    {
      prompt: 'Qual afirmação sobre vacinas é VERDADEIRA?',
      options: [
        { text: 'Causam a doença',                    correct: false },
        { text: 'Substituem a higiene',               correct: false },
        { text: 'Protegem apenas o indivíduo',        correct: false },
        { text: 'Reduzem a circulação do patógeno',   correct: true  }
      ],
      explanation: 'A vacinação em massa cria imunidade de rebanho e freia a transmissão.'
    },
    {
      prompt: 'A imunidade adquirida naturalmente após a doença, comparada à vacina:',
      options: [
        { text: 'Vacina é mais arriscada',                       correct: false },
        { text: 'Vacina gera resposta mais segura e controlada', correct: true  },
        { text: 'Natural é sempre melhor',                       correct: false },
        { text: 'São idênticas',                                 correct: false }
      ],
      explanation: 'Vacinas simulam a infecção sem os riscos da doença real.'
    },
    {
      prompt: 'Antibióticos NÃO funcionam contra:',
      options: [
        { text: 'Bactérias',    correct: false },
        { text: 'Vírus',        correct: true  },
        { text: 'Protozoários', correct: false },
        { text: 'Fungos',       correct: false }
      ],
      explanation: 'Antibióticos atacam estruturas bacterianas. Vírus não têm essas estruturas.'
    },
    {
      prompt: 'O termo "antígeno" refere-se a:',
      options: [
        { text: 'Defesa do corpo',                          correct: false },
        { text: 'Substância que desencadeia resposta imune', correct: true  },
        { text: 'Remédio',                                  correct: false },
        { text: 'Anticorpo pronto',                         correct: false }
      ],
      explanation: 'Parte do patógeno que o sistema imune reconhece como estranho.'
    },
    {
      prompt: 'A memória imunológica permite que:',
      options: [
        { text: 'Fiquemos doentes sempre',                        correct: false },
        { text: 'O corpo reaja mais rápido na 2ª exposição',      correct: true  },
        { text: 'Precisemos de soro toda vez',                    correct: false },
        { text: 'Anticorpos sumam com o tempo imediatamente',     correct: false }
      ],
      explanation: 'Células de memória aceleram a produção de anticorpos.'
    },
    {
      prompt: 'Qual NÃO é vetor biológico?',
      options: [
        { text: 'Mosquito',   correct: false },
        { text: 'Carrapato',  correct: false },
        { text: 'Barbeiro',   correct: false },
        { text: 'Seringa',    correct: true  }
      ],
      explanation: 'Seringa é veículo/fômito, não vetor biológico vivo.'
    },
    {
      prompt: 'A transmissão vertical ocorre:',
      options: [
        { text: 'Pai para filho',          correct: false },
        { text: 'Mãe para feto/bebê',      correct: true  },
        { text: 'Animal para humano',      correct: false },
        { text: 'Água para pessoa',        correct: false }
      ],
      explanation: 'Durante gestação, parto ou amamentação.'
    },
    {
      prompt: 'A "imunidade coletiva" protege:',
      options: [
        { text: 'Apenas vacinados',                       correct: false },
        { text: 'Vacinados e não vacinados vulneráveis',  correct: true  },
        { text: 'Somente médicos',                        correct: false },
        { text: 'Ninguém',                               correct: false }
      ],
      explanation: 'Reduz circulação, protegendo imunodeprimidos e alérgicos.'
    }
  ],

  adaptiveReview: [
    {
      prompt: 'DIFÍCIL: A expressão "post hoc ergo propter hoc" alerta para:',
      options: [
        { text: 'Efeito vacinal',                       correct: false },
        { text: 'Correlação não implica causalidade',   correct: true  },
        { text: 'Mutação viral',                        correct: false },
        { text: 'Prevenção',                            correct: false }
      ],
      explanation: 'Falácia lógica: "depois disso, logo causado por isso". Comum em fake news sobre vacinas.'
    },
    {
      prompt: 'DIFÍCIL: Em um ensaio clínico, o grupo controle recebe:',
      options: [
        { text: 'Vacina experimental',         correct: false },
        { text: 'Placebo/Soro fisiológico',    correct: true  },
        { text: 'Nada',                        correct: false },
        { text: 'Antibiótico',                 correct: false }
      ],
      explanation: 'Para comparar efeitos reais vs psicológicos/naturais.'
    }
  ],

  rewards: {
    xp: 150,
    gems: 15,
    badge: '🛡️ Guardião da Imunidade'
  },

  completionMessage: '🛡️ Parabéns! Você dominou o Sistema Imunológico. Seu corpo tem seus próprios soldados!',
  nextStage: 'stage_02'
};

window.STAGE_01 = STAGE_01;
