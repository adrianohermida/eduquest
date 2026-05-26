/**
 * HIST STAGE 01 — O Feudalismo
 */

const HIST_S01 = {
  id: 'hist_s01',
  title: 'O Feudalismo',
  icon: '🏰',
  difficulty: 'easy',
  estimatedTime: 12,

  learningObjectives: [
    'Compreender as origens e características do feudalismo',
    'Identificar os estamentos da sociedade feudal',
    'Descrever as relações de suserania e vassalagem',
    'Entender o papel do feudo como unidade econômica',
    'Reconhecer a fragmentação do poder político'
  ],

  summary: {
    readTime: 3,
    content: [
      {
        icon: '🏰',
        title: 'O que foi o Feudalismo?',
        text: 'O feudalismo foi o sistema político, econômico e social que dominou a Europa Ocidental entre os séculos V e XV.\n\nOrigem: Após a queda do Império Romano do Ocidente (476 d.C.), o poder central desapareceu. Os grandes proprietários de terra passaram a oferecer proteção em troca de fidelidade e trabalho.\n\n🔑 O FEUDO era a unidade básica: uma propriedade rural onde o senhor (suserano) cedia terra ao vassalo em troca de serviços militares.'
      },
      {
        icon: '⚔️',
        title: 'A Pirâmide Feudal',
        text: 'A sociedade feudal era organizada em três ordens:\n\n👑 REI — no topo formal, mas poder limitado\n⚔️ NOBREZA (duques, condes, barões, cavaleiros) — poder real\n✝️ CLERO — Igreja com enorme poder espiritual e territorial\n👨‍🌾 SERVOS — presos à terra, trabalhavam para o senhor\n\n🔑 "Oratores, Bellatores, Laboratores" — quem reza, quem luta, quem trabalha.'
      },
      {
        icon: '🤝',
        title: 'Suserania e Vassalagem',
        text: 'SUSERANO: o senhor que cede a terra (feudo)\nVASSALO: quem recebe a terra e jura fidelidade\n\nCerimônia de homenagem:\n1. Vassalo ajoelhava-se diante do suserano\n2. Jurava lealdade e prestação de serviços\n3. Recebia o feudo de volta como "benefício"\n\n⚔️ O vassalo devia: auxílio militar, consilium (conselho), e auxílio financeiro em certas ocasiões.\n\n💡 Um grande senhor podia ser vassalo de um rei e suserano de cavaleiros — a pirâmide era complexa!'
      }
    ],

    flashcards: [
      { q: 'O que era o feudo?',               a: 'Propriedade rural cedida pelo suserano ao vassalo em troca de lealdade e serviços.' },
      { q: 'Três ordens da sociedade feudal?', a: 'Clero (oratores), nobreza/guerreiros (bellatores), servos/camponeses (laboratores).' },
      { q: 'O que era o servo da gleba?',      a: 'Camponês preso à terra — não era escravo, mas não podia deixar o feudo.' },
      { q: 'Quando começou o feudalismo?',     a: 'Após a queda de Roma (476 d.C.), consolidou-se nos séculos VIII-IX.' },
      { q: 'O que era a suserania?',           a: 'Relação em que um senhor (suserano) cede terra e proteção ao vassalo.' }
    ],

    mnemonics: [
      { trigger: 'Pirâmide feudal', memory: '"REI no topo, NOBREZA guerreia, CLERO reza, SERVOS trabalham. Todos no feudo!"' },
      { trigger: 'Vassalagem',     memory: '"VASSAL = servo voluntário. Jura, recebe terra, luta pelo senhor."' }
    ],

    miniReview: [
      { q: 'O feudalismo surgiu por quê?',        a: 'Queda de Roma → vácuo de poder → grandes proprietários oferecem proteção.' },
      { q: 'Servo era escravo?',                  a: 'Não. Era livre, mas preso à terra — não podia vendê-la nem abandoná-la.' }
    ]
  },

  warmup: [
    {
      prompt: 'O feudalismo surgiu principalmente após:',
      options: [
        { text: 'A conquista da América',               correct: false },
        { text: 'A queda do Império Romano do Ocidente', correct: true  },
        { text: 'As Cruzadas',                          correct: false },
        { text: 'A Revolução Francesa',                 correct: false }
      ],
      explanation: 'Com a queda de Roma (476 d.C.), o poder central desapareceu. Grandes proprietários passaram a oferecer proteção, originando o sistema feudal.'
    },
    {
      prompt: 'O FEUDO era:',
      options: [
        { text: 'Uma moeda medieval',                       correct: false },
        { text: 'Uma propriedade rural cedida em troca de lealdade', correct: true },
        { text: 'Um templo religioso medieval',             correct: false },
        { text: 'Um tipo de armadura dos cavaleiros',       correct: false }
      ],
      explanation: 'Feudo = terra concedida pelo suserano ao vassalo em troca de serviços e lealdade — unidade básica do feudalismo.'
    },
    {
      prompt: 'Os "laboratores" na sociedade feudal eram:',
      options: [
        { text: 'Os cavaleiros guerreiros',  correct: false },
        { text: 'Os monges e padres',        correct: false },
        { text: 'Os servos e camponeses',    correct: true  },
        { text: 'Os mercadores',             correct: false }
      ],
      explanation: '"Laboratores" = quem trabalha. Eram os servos e camponeses que produziam os alimentos no feudo.'
    }
  ],

  guidedPractice: [
    {
      prompt: '🔍 DICA: O vassalo JURAva fidelidade ao suserano numa cerimônia chamada "homenagem".\n\nO que o vassalo RECEBIA em troca de sua lealdade?',
      options: [
        { text: 'Dinheiro e ouro',           correct: false },
        { text: 'Um feudo (terra) para administrar', correct: true },
        { text: 'Um título de rei',          correct: false },
        { text: 'Liberdade total',           correct: false }
      ],
      explanation: 'O vassalo recebia o FEUDO — terra para administrar e explorar — em troca de lealdade, serviço militar e conselho.'
    },
    {
      prompt: '🔍 DICA: O servo da gleba NÃO era escravo, mas tinha limitações.\n\nQual era a principal restrição do servo da gleba?',
      options: [
        { text: 'Não podia rezar',              correct: false },
        { text: 'Não podia usar armas',         correct: false },
        { text: 'Estava preso à terra — não podia abandoná-la', correct: true },
        { text: 'Não podia ter família',        correct: false }
      ],
      explanation: 'O servo estava ligado à terra (gleba). Se o feudo fosse vendido, ele permanecia nela — diferente do escravo, não era propriedade pessoal.'
    }
  ],

  questions: [
    {
      prompt: 'A relação entre suserano e vassalo era baseada em:',
      options: [
        { text: 'Troca de escravos',                           correct: false },
        { text: 'Terra concedida em troca de lealdade e serviços', correct: true },
        { text: 'Pagamento em moeda',                          correct: false },
        { text: 'Laços de sangue obrigatórios',                correct: false }
      ],
      explanation: 'A relação feudal era de troca: suserano dava terra e proteção, vassalo dava lealdade, serviço militar e conselho.'
    },
    {
      prompt: 'Por que o rei tinha poder LIMITADO no feudalismo?',
      options: [
        { text: 'Porque o papa governava diretamente',              correct: false },
        { text: 'Porque o poder estava fragmentado entre os grandes senhores feudais', correct: true },
        { text: 'Porque não existiam reis na Idade Média',          correct: false },
        { text: 'Porque os camponeses votavam contra o rei',        correct: false }
      ],
      explanation: 'O poder estava descentralizado — cada senhor feudal era soberano em seu feudo. O rei dependia da lealdade dos grandes vassalos para governar.'
    },
    {
      prompt: 'Os "bellatores" da sociedade feudal eram:',
      options: [
        { text: 'Monges que copiavam manuscritos',   correct: false },
        { text: 'Mercadores das cidades',            correct: false },
        { text: 'Guerreiros — cavaleiros e nobres',  correct: true  },
        { text: 'Camponeses que trabalhavam no campo',correct: false }
      ],
      explanation: '"Bellatores" = quem combate. Os guerreiros/cavaleiros defendiam o feudo e serviam ao rei.'
    },
    {
      prompt: 'A economia feudal era predominantemente:',
      options: [
        { text: 'Comercial — baseada no mercado',      correct: false },
        { text: 'Industrial — baseada em fábricas',    correct: false },
        { text: 'Subsistência — produção para o próprio consumo', correct: true },
        { text: 'Financeira — baseada em bancos',      correct: false }
      ],
      explanation: 'No feudalismo, cada feudo produzia para se sustentar (subsistência). O comércio era mínimo — havia pouca circulação de dinheiro.'
    },
    {
      prompt: 'O cavaleiro medieval que jurava lealdade a um senhor era chamado de:',
      options: [
        { text: 'Suserano',  correct: false },
        { text: 'Vassalo',   correct: true  },
        { text: 'Servo',     correct: false },
        { text: 'Abade',     correct: false }
      ],
      explanation: 'Vassalo = quem recebe o feudo e jura lealdade ao suserano. O cavaleiro que prestava homenagem tornava-se vassalo.'
    },
    {
      prompt: 'O período feudal corresponde aproximadamente a:',
      options: [
        { text: 'Séculos I ao V',     correct: false },
        { text: 'Séculos V ao XV',    correct: true  },
        { text: 'Séculos XVI ao XIX', correct: false },
        { text: 'Séculos III ao VIII',correct: false }
      ],
      explanation: 'O feudalismo vai da queda de Roma (476 d.C./séc. V) até o final da Idade Média (séc. XV), com a formação dos Estados Modernos.'
    },
    {
      prompt: 'A cerimônia em que o vassalo jurava fidelidade ao suserano era chamada de:',
      options: [
        { text: 'Cruzada',     correct: false },
        { text: 'Homenagem',   correct: true  },
        { text: 'Investidura', correct: false },
        { text: 'Torneio',     correct: false }
      ],
      explanation: 'Na cerimônia de homenagem, o vassalo ajoelhava-se, colocava as mãos nas do suserano e jurava fidelidade.'
    },
    {
      prompt: 'Na hierarquia feudal, logo abaixo do rei estavam:',
      options: [
        { text: 'Os servos da gleba',         correct: false },
        { text: 'Os comerciantes',            correct: false },
        { text: 'Os grandes senhores feudais (duques e condes)', correct: true },
        { text: 'Os bispos e cardeais',       correct: false }
      ],
      explanation: 'Logo abaixo do rei estavam os grandes vassalos — duques, marqueses e condes — que controlavam vasta extensão de terra.'
    },
    {
      prompt: 'O que era o "consilium" que o vassalo devia ao suserano?',
      options: [
        { text: 'Impostos em dinheiro',     correct: false },
        { text: 'Conselho e participação nas decisões importantes', correct: true },
        { text: 'Trabalho forçado nas terras', correct: false },
        { text: 'Serviço religioso',        correct: false }
      ],
      explanation: 'Consilium = conselho. O vassalo devia comparecer às assembleias do senhor e aconselha-lo nas decisões importantes.'
    },
    {
      prompt: 'A fragmentação política do feudalismo significava que:',
      options: [
        { text: 'Cada país tinha um único governante centralizado', correct: false },
        { text: 'O poder era dividido entre muitos senhores locais autônomos', correct: true },
        { text: 'A Igreja governava todos os reinos',               correct: false },
        { text: 'Os camponeses elegiam seus representantes',        correct: false }
      ],
      explanation: 'No feudalismo, cada senhor era soberano em seu feudo — cobrava impostos, fazia leis, exercia justiça. O poder era fragmentado e local.'
    }
  ],

  adaptiveReview: [
    {
      prompt: 'DIFÍCIL: O que era a "pirâmide feudal invertida"? Por que um senhor podia ser vassalo de alguém mais fraco?',
      options: [
        { text: 'Era impossível — a pirâmide era sempre rígida',          correct: false },
        { text: 'Um senhor podia ter múltiplos suseranos — lealdades cruzadas eram comuns', correct: true },
        { text: 'Servos podiam se tornar reis comprando terras',           correct: false },
        { text: 'A Igreja revertia a hierarquia nos domingos',             correct: false }
      ],
      explanation: 'Um nobre podia ser vassalo de vários suseranos ao mesmo tempo (para diferentes feudos). Isso criava conflitos de lealdade — o que gerou guerras e a crise do sistema.'
    }
  ],

  rewards: { xp: 120, gems: 12, badge: '🏰 Senhor Feudal' },
  completionMessage: '🏰 Você entende o feudalismo melhor que um servo medieval!',
  nextStage: 'hist_s02'
};

window.HIST_S01 = HIST_S01;
