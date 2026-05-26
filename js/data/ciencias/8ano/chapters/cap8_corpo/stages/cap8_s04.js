/**
 * CAP8 STAGE 04 — Sistema Nervoso
 * Neurônios, SNC, SNP e reflexos
 */

const CAP8_S04 = {
  id: 'cap8_s04',
  title: 'Sistema Nervoso',
  icon: '🧠',
  difficulty: 'medium',
  estimatedTime: 14,

  learningObjectives: [
    'Identificar as partes do sistema nervoso central e periférico',
    'Compreender a estrutura e função dos neurônios',
    'Distinguir sistema nervoso somático de autônomo',
    'Entender o arco reflexo e sua importância',
    'Reconhecer as funções das principais regiões do encéfalo'
  ],

  summary: {
    readTime: 5,
    content: [
      {
        icon: '🧠',
        title: 'Divisões do Sistema Nervoso',
        text: 'CENTRAL (SNC): Encéfalo + Medula Espinhal\n• Processa e coordena as informações\n\nPERIFÉRICO (SNP): Nervos que saem do SNC\n• Somático: controla músculos voluntários\n• Autônomo: controla órgãos internos (involuntário)\n  - Simpático: "luta ou fuga" — acelera tudo\n  - Parassimpático: "descanso" — desacelera tudo'
      },
      {
        icon: '⚡',
        title: 'O Neurônio — Célula Nervosa',
        text: 'Partes do neurônio:\n• Dendrito: recebe estímulos de outros neurônios\n• Corpo celular (pericário): núcleo, metabolismo\n• Axônio: conduz impulso para outro neurônio\n• Terminal sináptico: libera neurotransmissores\n\nA bainha de mielina (nas células de Schwann) isola o axônio e acelera o impulso nervoso!'
      },
      {
        icon: '🔬',
        title: 'Sinapse — Comunicação Neuronal',
        text: 'A sinapse é a junção entre dois neurônios:\n1. Impulso chega ao terminal sináptico\n2. Vesículas liberam NEUROTRANSMISSORES (ex: dopamina, serotonina, adrenalina)\n3. Neurotransmissor atravessa a fenda sináptica\n4. Liga-se ao receptor do próximo neurônio\n5. Gera (ou inibe) novo impulso\n\nDrogas e medicamentos frequentemente agem nas sinapses!'
      },
      {
        icon: '🧩',
        title: 'Encéfalo — Regiões e Funções',
        text: 'CÉREBRO (maior parte):\n• Lobo frontal: raciocínio, planejamento, personalidade\n• Lobo parietal: sensações corporais\n• Lobo temporal: audição, memória\n• Lobo occipital: visão\n\nCEREBELO: coordenação, equilíbrio e postura\nTRONCO ENCEFÁLICO: respiração, batimentos, reflexos vitais\nHIPOTÁLAMO: temperatura, fome, sede, hormônios'
      },
      {
        icon: '⚡',
        title: 'Arco Reflexo — Resposta Automática',
        text: 'O reflexo é uma resposta involuntária RÁPIDA:\n\nEstímulo → Receptor → Nervo sensitivo → Medula → Nervo motor → Efetor (músculo)\n\nEx: reflexo rotuliano (bater no joelho)\n• O cérebro NÃO participa do arco reflexo simples\n• Isso o torna ultrarrápido — essencial para sobrevivência!'
      }
    ],

    flashcards: [
      { q: 'Quais são as partes do SNC?',                       a: 'Encéfalo (cérebro, cerebelo, tronco encefálico) e medula espinhal.' },
      { q: 'O que é a bainha de mielina?',                      a: 'Cobertura lipídica que isola o axônio, acelerando a condução do impulso nervoso.' },
      { q: 'Qual a função do cerebelo?',                        a: 'Coordenação motora, equilíbrio e postura.' },
      { q: 'O que são neurotransmissores?',                     a: 'Moléculas liberadas na sinapse que transmitem o sinal entre neurônios.' },
      { q: 'O que é o arco reflexo?',                           a: 'Circuito nervoso que gera resposta automática sem passar pelo cérebro.' },
      { q: 'Qual a diferença entre SN simpático e parassimpático?', a: 'Simpático: "luta ou fuga" (acelera). Parassimpático: "descanso e digestão" (desacelera).' }
    ],

    mnemonics: [
      { trigger: 'Divisões do SN',    memory: '"Central = C de Controle; Periférico = P de Por fora"' },
      { trigger: 'Lobo frontal',      memory: '"Frontal = Frente = Futuro → planeja o futuro e controla comportamento"' },
      { trigger: 'Arco reflexo',      memory: '"REMED: Receptor → E(nervo)fereNte → Medula → E(nervo)fereNte → Músculo"' }
    ],

    miniReview: [
      { q: 'Por que o arco reflexo é mais rápido que respostas voluntárias?',   a: 'Porque não passa pelo cérebro — o processamento ocorre na medula espinhal.' },
      { q: 'Qual região do encéfalo controla respiração e batimentos cardíacos?',a: 'O tronco encefálico (bulbo).' },
      { q: 'O que acontece quando a bainha de mielina é destruída (esclerose múltipla)?', a: 'A condução do impulso nervoso fica lenta e errática, causando perda de força e coordenação.' }
    ]
  },

  warmup: [
    {
      prompt: 'Qual das estruturas a seguir FAZ PARTE do sistema nervoso central?',
      options: [
        { text: 'Nervo óptico',        correct: false },
        { text: 'Medula espinhal',      correct: true  },
        { text: 'Nervo ciático',        correct: false },
        { text: 'Nervo vago',           correct: false }
      ],
      explanation: 'SNC = encéfalo + medula espinhal. O nervo óptico é SNP (periférico).'
    },
    {
      prompt: 'A parte do neurônio que conduz o impulso nervoso é:',
      options: [
        { text: 'Dendrito',         correct: false },
        { text: 'Núcleo',           correct: false },
        { text: 'Axônio',           correct: true  },
        { text: 'Ribossomo',        correct: false }
      ],
      explanation: 'O axônio conduz o impulso do corpo celular ao terminal sináptico. Dendritos recebem estímulos.'
    },
    {
      prompt: 'O cerebelo é responsável por:',
      options: [
        { text: 'Raciocínio e linguagem',         correct: false },
        { text: 'Coordenação motora e equilíbrio',correct: true  },
        { text: 'Produção de hormônios',          correct: false },
        { text: 'Visão e audição',                correct: false }
      ],
      explanation: 'O cerebelo coordena os movimentos e mantém o equilíbrio. Lesão: ataxia (movimentos descoordenados).'
    }
  ],

  guidedPractice: [
    {
      prompt: '🔍 DICA: O sistema nervoso autônomo simpático prepara o corpo para situações de emergência.\n\nAo se assustar, o coração acelera, a pupila dilata e você sua. Isso é ação do sistema nervoso:',
      options: [
        { text: 'Somático',        correct: false },
        { text: 'Simpático',       correct: true  },
        { text: 'Parassimpático',  correct: false },
        { text: 'Central',         correct: false }
      ],
      explanation: 'Resposta de luta-ou-fuga: simpático libera adrenalina → taquicardia, midríase, sudorese — prepara para reagir.'
    },
    {
      prompt: '🔍 DICA: O arco reflexo não precisa do cérebro para funcionar.\n\nAo tocar em uma superfície quente, você retira a mão ANTES de sentir dor porque:',
      options: [
        { text: 'O cérebro age muito rápido',                    correct: false },
        { text: 'O reflexo de retirada ocorre na medula espinhal', correct: true  },
        { text: 'Os nervos da mão vão direto ao cerebelo',       correct: false },
        { text: 'A dor não é processada no sistema nervoso',     correct: false }
      ],
      explanation: 'O reflexo de retirada é processado na medula → movimento ocorre em milissegundos. A dor (percepção cerebral) vem depois.'
    }
  ],

  questions: [
    {
      prompt: 'A dopamina é um neurotransmissor relacionado com recompensa e prazer. Sua deficiência causa:',
      options: [
        { text: 'Alzheimer',                   correct: false },
        { text: 'Parkinson',                   correct: true  },
        { text: 'Epilepsia',                   correct: false },
        { text: 'Esclerose múltipla',          correct: false }
      ],
      explanation: 'Parkinson = morte progressiva de neurônios dopaminérgicos na substância negra → tremores, rigidez, bradicinesia.'
    },
    {
      prompt: 'Qual hormônio do sistema nervoso autônomo é liberado pelo simpático em situações de estresse?',
      options: [
        { text: 'Insulina',      correct: false },
        { text: 'Adrenalina',    correct: true  },
        { text: 'Melatonina',    correct: false },
        { text: 'Serotonina',    correct: false }
      ],
      explanation: 'A adrenalina (epinefrina) é liberada pelas glândulas adrenais por estímulo simpático → "hormônio de emergência".'
    },
    {
      prompt: 'A esclerose múltipla destrói a bainha de mielina. A principal consequência é:',
      options: [
        { text: 'Aumento da velocidade dos impulsos nervosos', correct: false },
        { text: 'Condução nervosa lenta e sintomas neurológicos variados', correct: true },
        { text: 'Morte imediata dos neurônios',                 correct: false },
        { text: 'Aumento da produção de neurotransmissores',   correct: false }
      ],
      explanation: 'Sem mielina, a condução saltatória é perdida → impulsos lentos e erráticos → fraqueza, visão dupla, espasticidade.'
    },
    {
      prompt: 'Qual região do encéfalo regula temperatura corporal, fome e sede?',
      options: [
        { text: 'Cerebelo',      correct: false },
        { text: 'Hipotálamo',    correct: true  },
        { text: 'Tálamo',        correct: false },
        { text: 'Córtex frontal',correct: false }
      ],
      explanation: 'O hipotálamo é o "termostato" do corpo: regula temperatura, apetite, sede e controla a hipófise.'
    },
    {
      prompt: 'Neurônios destruídos no SNC adulto geralmente:',
      options: [
        { text: 'Se regeneram completamente em 2 semanas',   correct: false },
        { text: 'Não se regeneram (são pós-mitóticos)',      correct: true  },
        { text: 'São substituídos por células gliais',       correct: false },
        { text: 'Se regeneram apenas nos jovens',            correct: false }
      ],
      explanation: 'Neurônios maduros do SNC raramente se regeneram (exceção: hipocampo). Por isso, AVCs e lesões medulares têm sequelas permanentes.'
    },
    {
      prompt: 'O lobo occipital do cérebro processa principalmente:',
      options: [
        { text: 'Audição',   correct: false },
        { text: 'Tato',      correct: false },
        { text: 'Visão',     correct: true  },
        { text: 'Olfato',    correct: false }
      ],
      explanation: 'Occipital = visão. Temporal = audição e memória. Parietal = sensações corporais. Frontal = cognição e personalidade.'
    },
    {
      prompt: 'A serotonina é um neurotransmissor ligado ao humor. Antidepressivos ISRS atuam:',
      options: [
        { text: 'Aumentando a produção de serotonina',                   correct: false },
        { text: 'Bloqueando a recaptação de serotonina na sinapse',      correct: true  },
        { text: 'Destruindo receptores de serotonina',                   correct: false },
        { text: 'Convertendo dopamina em serotonina',                    correct: false }
      ],
      explanation: 'ISRS = Inibidor Seletivo da Recaptação de Serotonina. Bloqueia a "reabsorção" → mais serotonina disponível na fenda sináptica.'
    },
    {
      prompt: 'Um paciente com lesão no bulbo (tronco encefálico) corre risco de vida porque o bulbo controla:',
      options: [
        { text: 'Memória e aprendizagem',               correct: false },
        { text: 'Respiração, batimentos e deglutição',  correct: true  },
        { text: 'Movimentos voluntários dos membros',   correct: false },
        { text: 'Visão e audição',                      correct: false }
      ],
      explanation: 'O bulbo controla funções vitais automáticas: frequência respiratória, cardíaca, pressão arterial e deglutição.'
    },
    {
      prompt: 'O sistema nervoso parassimpático promove:',
      options: [
        { text: 'Taquicardia e broncodilatação',           correct: false },
        { text: 'Digestão, frequência cardíaca reduzida e relaxamento', correct: true },
        { text: 'Liberação de adrenalina',                 correct: false },
        { text: 'Aumento da pressão arterial',             correct: false }
      ],
      explanation: '"Rest and digest": parassimpático ativa digestão, reduz batimentos, contrai pupila — estado de descanso e recuperação.'
    },
    {
      prompt: 'Qual célula glial produz a bainha de mielina no sistema nervoso CENTRAL?',
      options: [
        { text: 'Células de Schwann', correct: false },
        { text: 'Oligodendrócitos',   correct: true  },
        { text: 'Astrócitos',         correct: false },
        { text: 'Micróglia',          correct: false }
      ],
      explanation: 'SNC: oligodendrócitos mielinizam axônios. SNP: células de Schwann. Distinção importante em doenças desmielinizantes.'
    }
  ],

  adaptiveReview: [
    {
      prompt: 'DIFÍCIL: O AVC isquêmico destrói neurônios em minutos. Por que "tempo é cérebro"?',
      options: [
        { text: 'Os neurônios ficam em estase até o fluxo ser restaurado',   correct: false },
        { text: 'Neurônios privados de O₂ e glicose morrem rapidamente (1,9 milhão/min) e não se regeneram', correct: true },
        { text: 'O edema cerebral leva dias para causar dano',               correct: false },
        { text: 'Os neurônios se regeneram se o fluxo voltar em 24h',        correct: false }
      ],
      explanation: 'A cada minuto de AVC, ~1,9 milhão de neurônios morrem. Tratamento precoce (trombolítico ≤4,5h) salva tecido cerebral.'
    },
    {
      prompt: 'DIFÍCIL: Por que cocaína causa euforia intensa seguida de depressão profunda?',
      options: [
        { text: 'Destrói neurônios dopaminérgicos diretamente',                         correct: false },
        { text: 'Bloqueia recaptação de dopamina → pico → receptores se dessensibilizam → déficit de dopamina', correct: true },
        { text: 'Aumenta a síntese de serotonina temporariamente',                     correct: false },
        { text: 'Causa vasodilatação cerebral e depois vasoconstrição',                correct: false }
      ],
      explanation: 'Cocaína bloqueia o transportador de dopamina → acúmulo na sinapse → euforia. Com o tempo, receptores se dessensibilizam → anedonia e dependência.'
    }
  ],

  rewards: { xp: 145, gems: 14, badge: '🧠 Agente Neural' },
  completionMessage: '🧠 Sistema Nervoso decodificado! Seu cérebro aprova essa conquista. Próximo: Sistema Excretor!',
  nextStage: 'cap8_s05'
};

window.CAP8_S04 = CAP8_S04;
