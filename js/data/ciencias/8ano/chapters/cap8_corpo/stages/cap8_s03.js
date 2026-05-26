/**
 * CAP8 STAGE 03 — Sistema Respiratório
 * Pulmões, trocas gasosas e respiração celular
 */

const CAP8_S03 = {
  id: 'cap8_s03',
  title: 'Sistema Respiratório',
  icon: '🫁',
  difficulty: 'medium',
  estimatedTime: 12,

  learningObjectives: [
    'Identificar os órgãos do sistema respiratório',
    'Compreender a mecânica ventilatória (inspiração e expiração)',
    'Entender as trocas gasosas nos alvéolos',
    'Diferenciar respiração pulmonar de celular',
    'Reconhecer doenças respiratórias e seus mecanismos'
  ],

  summary: {
    readTime: 4,
    content: [
      {
        icon: '🫁',
        title: 'Órgãos do Sistema Respiratório',
        text: 'Trajeto do ar: Nariz → Faringe → Laringe → Traqueia → Brônquios → Bronquíolos → Alvéolos\n\n• Nariz: filtra, aquece e umidifica o ar\n• Laringe: contém as cordas vocais\n• Traqueia: tubo reforçado por anéis cartilaginosos\n• Alvéolos: pequenos sacos onde ocorre a troca gasosa'
      },
      {
        icon: '💨',
        title: 'Inspiração e Expiração',
        text: 'INSPIRAÇÃO (ativa):\n• Diafragma se contrai e desce\n• Costelas sobem e se afastam\n• Volume do tórax aumenta\n• Pressão diminui → ar entra\n\nEXPIRAÇÃO (passiva em repouso):\n• Diafragma relaxa e sobe\n• Costelas descem\n• Volume diminui → pressão aumenta → ar sai'
      },
      {
        icon: '🔬',
        title: 'Hematose — Troca Gasosa nos Alvéolos',
        text: 'Nos alvéolos (300 milhões!), ocorre a HEMATOSE:\n• O₂ do ar → atravessa membrana alveolar → entra no sangue\n• CO₂ do sangue → atravessa membrana → sai pelo ar expirado\n\nPor difusão simples (alta concentração → baixa)\nArea total dos alvéolos ≈ 70m² — tamanho de uma quadra de tênis!'
      },
      {
        icon: '⚡',
        title: 'Respiração Celular vs Pulmonar',
        text: 'PULMONAR: troca de gases entre pulmão e sangue (processo físico)\n\nCELULAR: reação química dentro das células:\nGlicose + O₂ → CO₂ + H₂O + ATP (ENERGIA)\n\nA respiração celular ocorre nas mitocôndrias e é a forma como as células obtêm energia para todas as funções vitais!'
      },
      {
        icon: '🚬',
        title: 'Doenças Respiratórias Principais',
        text: 'ASMA: broncoespasmo (estreitamento dos brônquios) → falta de ar\nBRONQUITE: inflamação dos brônquios → tosse com muco\nPNEUMONIA: infecção nos alvéolos → dificuldade de troca gasosa\nENFISEMA: destruição dos alvéolos (geralmente por tabagismo) → irreversível\nCOVID-19: inflamação grave dos pulmões (pneumonia bilateral)'
      }
    ],

    flashcards: [
      { q: 'Onde ocorre a hematose?',                         a: 'Nos alvéolos pulmonares.' },
      { q: 'Qual músculo é o principal da respiração?',       a: 'O diafragma.' },
      { q: 'O que é a respiração celular?',                   a: 'Reação que quebra glicose com O₂ para gerar ATP (energia) nas mitocôndrias.' },
      { q: 'Por que os alvéolos têm parede tão fina?',        a: 'Para facilitar a difusão dos gases entre o ar e o sangue.' },
      { q: 'O que causa o enfisema pulmonar?',                a: 'Destruição dos alvéolos, principalmente pelo tabagismo.' },
      { q: 'Qual gás é liberado na expiração?',               a: 'CO₂ (dióxido de carbono), produto da respiração celular.' }
    ],

    mnemonics: [
      { trigger: 'Trajeto do ar',      memory: '"Nariz Faz Lindo Trajeto: Brônquios Brincam Aqui" = Nariz, Faringe, Laringe, Traqueia, Brônquios, Bronquíolos, Alvéolos' },
      { trigger: 'Inspiração',         memory: '"Diafragma desce, pulmão cresce" → ar entra' },
      { trigger: 'Hematose vs celular',memory: '"Hematose = Hospital (pulmão troca gases); Celular = Casa (célula produz energia)"' }
    ],

    miniReview: [
      { q: 'O que acontece com o diafragma durante a inspiração?', a: 'Ele se contrai e desce, aumentando o volume torácico e permitindo a entrada de ar.' },
      { q: 'Qual a fórmula da respiração celular?',                a: 'Glicose + O₂ → CO₂ + H₂O + ATP' },
      { q: 'Cite 2 funções do nariz além de captar o ar.',         a: 'Filtrar partículas (pelos), aquecer e umidificar o ar.' }
    ]
  },

  warmup: [
    {
      prompt: 'A estrutura onde ocorre a troca de gases entre ar e sangue é:',
      options: [
        { text: 'Brônquio',   correct: false },
        { text: 'Traqueia',   correct: false },
        { text: 'Alvéolo',    correct: true  },
        { text: 'Laringe',    correct: false }
      ],
      explanation: 'Os alvéolos têm paredes ultrafinas e são rodeados por capilares — local perfeito para a hematose.'
    },
    {
      prompt: 'Durante a inspiração, o diafragma:',
      options: [
        { text: 'Relaxa e sobe',    correct: false },
        { text: 'Contrai e desce',  correct: true  },
        { text: 'Permanece imóvel', correct: false },
        { text: 'Se expande lateralmente', correct: false }
      ],
      explanation: 'Inspiração: diafragma contrai e desce + costelas sobem = maior volume torácico = menor pressão = ar entra.'
    },
    {
      prompt: 'A respiração celular produz principalmente:',
      options: [
        { text: 'Glicose e O₂',        correct: false },
        { text: 'ATP (energia), CO₂ e água', correct: true },
        { text: 'Hemoglobina e O₂',    correct: false },
        { text: 'Bile e enzimas',       correct: false }
      ],
      explanation: 'Glicose + O₂ → CO₂ + H₂O + ATP. O ATP é a "moeda energética" usada por todas as células.'
    }
  ],

  guidedPractice: [
    {
      prompt: '🔍 DICA: O CO₂ no sangue estimula o centro respiratório no cérebro a aumentar a frequência.\n\nQuando você faz exercício intenso, a respiração fica mais rápida porque:',
      options: [
        { text: 'O O₂ diminui e estimula direto os músculos',              correct: false },
        { text: 'O CO₂ aumenta no sangue, estimulando o centro respiratório', correct: true },
        { text: 'O coração para de bombear O₂',                            correct: false },
        { text: 'Os alvéolos aumentam de tamanho',                         correct: false }
      ],
      explanation: 'O aumento de CO₂ (e queda de pH) no sangue é o principal sinal para o tronco encefálico acelerar a respiração.'
    },
    {
      prompt: '🔍 DICA: O tabagismo destrói progressivamente os alvéolos.\n\nO enfisema pulmonar causa falta de ar crônica porque:',
      options: [
        { text: 'Aumenta o número de alvéolos',                         correct: false },
        { text: 'Destrói alvéolos, reduzindo a área de troca gasosa',   correct: true  },
        { text: 'Aumenta a produção de muco nos brônquios apenas',      correct: false },
        { text: 'Impede o diafragma de se mover',                       correct: false }
      ],
      explanation: 'Com menos alvéolos, a área de hematose diminui drasticamente → menos O₂ absorvido → dispneia crônica.'
    }
  ],

  questions: [
    {
      prompt: 'A laringe contém as cordas vocais. Qual a função principal da epiglote?',
      options: [
        { text: 'Produzir sons',                       correct: false },
        { text: 'Fechar a laringe ao engolir, impedindo engasgo', correct: true },
        { text: 'Umidificar o ar inspirado',            correct: false },
        { text: 'Produzir muco protetor',               correct: false }
      ],
      explanation: 'A epiglote funciona como uma "tampa" que fecha a traqueia ao deglutir, direcionando o alimento ao esôfago.'
    },
    {
      prompt: 'A capacidade vital pulmonar é:',
      options: [
        { text: 'O volume de ar nos pulmões após expiração máxima',   correct: false },
        { text: 'O volume máximo de ar que pode ser movimentado',      correct: true  },
        { text: 'O volume de ar em uma respiração normal',             correct: false },
        { text: 'A quantidade de O₂ absorvida por minuto',            correct: false }
      ],
      explanation: 'Capacidade vital = inspiração máxima − expiração máxima. Em adultos saudáveis ≈ 4,5L. Atletas podem ter >6L.'
    },
    {
      prompt: 'O surfactante pulmonar é uma substância produzida pelos alvéolos que:',
      options: [
        { text: 'Transporta O₂ no sangue',                correct: false },
        { text: 'Reduz a tensão superficial, evitando colapso dos alvéolos', correct: true },
        { text: 'Mata bactérias nos pulmões',              correct: false },
        { text: 'Aumenta a produção de CO₂',              correct: false }
      ],
      explanation: 'Sem surfactante (como em prematuros), os alvéolos colapsam (síndrome do desconforto respiratório neonatal).'
    },
    {
      prompt: 'O que diferencia a asma da bronquite crônica?',
      options: [
        { text: 'Na asma os alvéolos são destruídos; na bronquite os brônquios inflamam', correct: false },
        { text: 'A asma envolve broncoespasmo reversível; a bronquite crônica tem inflamação persistente dos brônquios', correct: true },
        { text: 'São exatamente a mesma doença com nomes diferentes',                      correct: false },
        { text: 'A bronquite afeta alvéolos; a asma afeta laringe',                        correct: false }
      ],
      explanation: 'Asma = episódios de broncoespasmo geralmente alérgicos (reversíveis). Bronquite crônica = inflamação contínua dos brônquios com muco excessivo.'
    },
    {
      prompt: 'Os cílios das vias aéreas têm como função:',
      options: [
        { text: 'Realizar troca gasosa',                   correct: false },
        { text: 'Varrer partículas e muco em direção à faringe', correct: true },
        { text: 'Produzir O₂ para o sangue',              correct: false },
        { text: 'Regular a frequência respiratória',       correct: false }
      ],
      explanation: 'Os cílios + muco formam o "tapete mucociliar" que captura e remove partículas inaladas antes de chegar aos pulmões.'
    },
    {
      prompt: 'Na hematose, o oxigênio passa do alvéolo para o sangue por:',
      options: [
        { text: 'Transporte ativo (gasto de energia)',   correct: false },
        { text: 'Difusão simples (gradiente de concentração)', correct: true },
        { text: 'Osmose',                                correct: false },
        { text: 'Endocitose',                            correct: false }
      ],
      explanation: 'O₂ está mais concentrado no alvéolo que no sangue venoso → difunde espontaneamente sem gastar ATP.'
    },
    {
      prompt: 'O que é o volume residual pulmonar?',
      options: [
        { text: 'O volume de ar em uma inspiração normal',                 correct: false },
        { text: 'O ar que resta nos pulmões após expiração máxima',       correct: true  },
        { text: 'A diferença entre inspiração e expiração normais',        correct: false },
        { text: 'O volume máximo que os pulmões podem conter',            correct: false }
      ],
      explanation: 'Mesmo com expiração forçada, ~1,2L de ar residual permanece nos pulmões, mantendo os alvéolos abertos.'
    },
    {
      prompt: 'Uma pessoa em apneia voluntária (segurando a respiração) para de respirar porque o cérebro sente:',
      options: [
        { text: 'Falta de O₂ diretamente',                correct: false },
        { text: 'Excesso de CO₂ e queda de pH no sangue', correct: true  },
        { text: 'Falta de glicose',                       correct: false },
        { text: 'Temperatura do sangue aumentando',       correct: false }
      ],
      explanation: 'O impulso para respirar é principalmente ativado pelo aumento de CO₂ (hipercapnia), não pela falta de O₂.'
    },
    {
      prompt: 'Por que a traqueia tem anéis de cartilagem?',
      options: [
        { text: 'Para produzir muco protetor',              correct: false },
        { text: 'Para manter o lúmen aberto e evitar colapso', correct: true },
        { text: 'Para filtrar o ar melhor',                 correct: false },
        { text: 'Para conectar a traqueia ao coração',      correct: false }
      ],
      explanation: 'Os anéis cartilaginosos (incompletos, em forma de C) mantêm a traqueia aberta durante movimentos do pescoço.'
    },
    {
      prompt: 'A hiperventilação (respiração muito rápida) pode causar tontura porque:',
      options: [
        { text: 'Aumenta o CO₂ no sangue, causando vasodilatação',                correct: false },
        { text: 'Reduz o CO₂ causando vasoconstrição cerebral e alcalose respiratória', correct: true },
        { text: 'Reduz o O₂ disponível para o cérebro',                            correct: false },
        { text: 'Causa broncoespasmo reflexo',                                     correct: false }
      ],
      explanation: 'Hiperventilação → CO₂ cai demais → pH sobe (alcalose) → vasoconstrição cerebral → tontura e formigamento.'
    }
  ],

  adaptiveReview: [
    {
      prompt: 'DIFÍCIL: Por que mergulhadores não devem prender a respiração durante a ascensão?',
      options: [
        { text: 'O frio da água causa broncoespasmo',                                   correct: false },
        { text: 'O ar nos pulmões se expande com a diminuição da pressão, podendo rupturar os alvéolos', correct: true },
        { text: 'O CO₂ aumenta muito ao mergulhar',                                    correct: false },
        { text: 'O O₂ aumenta excessivamente',                                         correct: false }
      ],
      explanation: 'A Lei de Boyle: pressão ↓ com a ascensão → volume do gás ↑ → pulmões expandem demais → barotrauma pulmonar.'
    },
    {
      prompt: 'DIFÍCIL: Em grandes altitudes (ex: Everest 8.848m), a PO₂ é muito baixa. O organismo se adapta produzindo mais EPO. Por quê?',
      options: [
        { text: 'EPO aumenta o volume pulmonar',                          correct: false },
        { text: 'EPO estimula mais hemácias, aumentando a capacidade de transporte de O₂', correct: true },
        { text: 'EPO aumenta a frequência respiratória',                  correct: false },
        { text: 'EPO reduz o consumo de O₂ pelas células',               correct: false }
      ],
      explanation: 'A eritropoietina (EPO) estimula a medula óssea a produzir mais hemácias → mais hemoglobina → mais O₂ transportado mesmo com ar rarefeito.'
    }
  ],

  rewards: { xp: 135, gems: 13, badge: '🫁 Mestre Respiratório' },
  completionMessage: '🫁 Sistema Respiratório dominado! Respira fundo — próxima missão: Sistema Nervoso!',
  nextStage: 'cap8_s04'
};

window.CAP8_S03 = CAP8_S03;
