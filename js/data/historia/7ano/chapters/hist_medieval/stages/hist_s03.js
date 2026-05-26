/**
 * HIST STAGE 03 — As Cruzadas
 */

const HIST_S03 = {
  id: 'hist_s03',
  title: 'As Cruzadas',
  icon: '⚔️',
  difficulty: 'medium',
  estimatedTime: 14,

  learningObjectives: [
    'Compreender as causas religiosas, políticas e econômicas das Cruzadas',
    'Conhecer as principais expedições cruzadas',
    'Avaliar os resultados e consequências das Cruzadas',
    'Entender o impacto cultural do contato com o Oriente',
    'Reconhecer a perspectiva islâmica das Cruzadas'
  ],

  summary: {
    readTime: 3,
    content: [
      {
        icon: '⚔️',
        title: 'O que foram as Cruzadas?',
        text: 'As Cruzadas (1096–1291) foram expedições militares organizadas pela Igreja Católica com o objetivo de reconquistar a Terra Santa (Jerusalém) do domínio muçulmano.\n\nCausa imediata: Em 1095, o papa Urbano II convocou a 1ª Cruzada no Concílio de Clermont após os turcos seljúcidas conquistarem Jerusalém e ameaçarem o Império Bizantino.\n\n🔑 "Deus o quer!" (Deus vult!) — o grito de guerra dos cruzados. Participantes recebiam indulgência plenária (perdão de todos os pecados).'
      },
      {
        icon: '🗺️',
        title: 'As Principais Cruzadas',
        text: '1ª Cruzada (1096-1099): Única vitória decisiva — conquistou Jerusalém e criou os Estados Cruzados.\n\n2ª Cruzada (1147-1149): Fracasso total — perdeu Edessa para Zengi.\n\n3ª Cruzada (1189-1192): "Cruzada dos Reis" — Ricardo I (Coração de Leão) vs. Saladino. Não reconquistou Jerusalém, mas garantiu acesso de peregrinos.\n\n4ª Cruzada (1202-1204): Desastre — saqueou Constantinopla cristã ao invés de chegar ao Egito!\n\n🔑 Cruzada das Crianças (1212): Expedição não oficial tragicamente mal sucedida.'
      },
      {
        icon: '🌍',
        title: 'Consequências das Cruzadas',
        text: 'Políticas: fortalecimento do poder real (nobres morriam ou empobreciam), enfraquecimento feudal.\n\nEconômicas: impulso ao comércio mediterrâneo, retorno das especiarias e produtos orientais, ascensão de Veneza e Gênova.\n\nCulturais: contato com matemática árabe (álgebra, algarismos), medicina, filosofia (Aristóteles via árabe), papel, bússola, pólvora.\n\n⚠️ Para o mundo islâmico: as Cruzadas foram invasões violentas — massacres de populações civis, saque de cidades sagradas. A memória permanece negativa.'
      }
    ],

    flashcards: [
      { q: 'Quem convocou a 1ª Cruzada?',        a: 'Papa Urbano II, no Concílio de Clermont (1095).' },
      { q: 'Qual Cruzada conquistou Jerusalém?',  a: '1ª Cruzada (1099).' },
      { q: 'Quem era Saladino?',                  a: 'Sultão muçulmano (curdo) que reconquistou Jerusalém em 1187.' },
      { q: 'O que a 4ª Cruzada fez?',            a: 'Saqueou Constantinopla (cristã!) em vez de combater os muçulmanos.' },
      { q: 'Principais consequências culturais?', a: 'Álgebra árabe, especiarias, papel, bússola, pólvora chegaram à Europa.' }
    ],

    mnemonics: [
      { trigger: 'Cruzadas resumo', memory: '"1ª=vence (Jerusalém), 3ª=Ricardo vs Saladino, 4ª=saqueia Constantinopla. Bizarro!"' },
      { trigger: 'Deus vult',      memory: '"Deus o quer! = grito dos cruzados. Indulgência = ingresso para o Paraíso na Idade Média."' }
    ],

    miniReview: [
      { q: 'Por que a 4ª Cruzada é paradoxal?',   a: 'Saqueou uma cidade cristã (Constantinopla) em vez de lutar contra muçulmanos.' },
      { q: 'Quais bens culturais vieram das Cruzadas?', a: 'Álgebra, algarismos árabes, especiarias, papel, bússola, seda.' }
    ]
  },

  warmup: [
    {
      prompt: 'As Cruzadas foram convocadas com o objetivo PRINCIPAL de:',
      options: [
        { text: 'Expandir o território dos reis europeus',              correct: false },
        { text: 'Reconquistar a Terra Santa (Jerusalém) dos muçulmanos', correct: true },
        { text: 'Combater heresias dentro da Europa',                   correct: false },
        { text: 'Abrir rotas comerciais com a China',                   correct: false }
      ],
      explanation: 'O objetivo declarado era religioso — reconquistar Jerusalém e os Lugares Santos do controle muçulmano.'
    },
    {
      prompt: 'O grito de guerra dos cruzados era:',
      options: [
        { text: 'Ora et Labora',  correct: false },
        { text: 'Deus vult!',     correct: true  },
        { text: 'Ad majorem Dei gloriam', correct: false },
        { text: 'Pro Rege et Patria',     correct: false }
      ],
      explanation: '"Deus vult!" (Deus o quer!) foi o grito proclamado no Concílio de Clermont quando Urbano II convocou a 1ª Cruzada.'
    },
    {
      prompt: 'Saladino ficou famoso por:',
      options: [
        { text: 'Liderar a 1ª Cruzada cristã',           correct: false },
        { text: 'Reconquistar Jerusalém dos cruzados em 1187', correct: true },
        { text: 'Saquear Constantinopla na 4ª Cruzada',  correct: false },
        { text: 'Fundar o Império Otomano',               correct: false }
      ],
      explanation: 'Saladino (Salah ad-Din), sultão aiúbida, reconquistou Jerusalém em 1187 — desfazendo a conquista da 1ª Cruzada. Era respeitado até por inimigos pela cavalaria.'
    }
  ],

  guidedPractice: [
    {
      prompt: '🔍 DICA: A 4ª Cruzada foi um desvio total dos objetivos originais.\n\nPor que os cruzados saquearam Constantinopla em 1204?',
      options: [
        { text: 'Porque a cidade se converteu ao islamismo',                 correct: false },
        { text: 'Por dívidas com venezianos — desviaram para saquear a rival comercial', correct: true },
        { text: 'Porque o papa ordenou a conquista da cidade',               correct: false },
        { text: 'Porque confundiram Constantinopla com Jerusalém',           correct: false }
      ],
      explanation: 'Os cruzados deviam dinheiro a Veneza. Os venezianos, rivais comerciais de Constantinopla, redirecionaram a Cruzada para saquear a cidade — dividindo as riquezas.'
    },
    {
      prompt: '🔍 DICA: As Cruzadas impactaram mais o comércio europeu do que a política religiosa.\n\nQual foi o principal efeito econômico positivo das Cruzadas para a Europa?',
      options: [
        { text: 'A Europa conquistou permanentemente o Oriente Médio',    correct: false },
        { text: 'A retomada do comércio mediterrâneo e contato com produtos orientais', correct: true },
        { text: 'Os cruzados trouxeram ouro islâmico que financiou os reis', correct: false },
        { text: 'O fim do feudalismo nas regiões que participaram das Cruzadas', correct: false }
      ],
      explanation: 'As Cruzadas reabriram as rotas mediterrâneas, tornando cidades italianas como Veneza e Gênova ricas e poderosas — preparando o caminho para o Renascimento.'
    }
  ],

  questions: [
    {
      prompt: 'Qual foi a ÚNICA Cruzada que atingiu plenamente seu objetivo?',
      options: [
        { text: '2ª Cruzada',  correct: false },
        { text: '1ª Cruzada',  correct: true  },
        { text: '3ª Cruzada',  correct: false },
        { text: '4ª Cruzada',  correct: false }
      ],
      explanation: 'A 1ª Cruzada (1096-1099) foi a única que efetivamente conquistou Jerusalém e criou os Estados Cruzados no Levante.'
    },
    {
      prompt: 'A "Cruzada dos Reis" (3ª Cruzada) opôs:',
      options: [
        { text: 'Urbano II e o califa de Bagdá',                         correct: false },
        { text: 'Ricardo I Coração de Leão (Inglaterra) e Saladino',     correct: true  },
        { text: 'Frederico Barbarroxa e o papa Inocêncio III',           correct: false },
        { text: 'Luís IX (São Luís) e o sultão do Egito',               correct: false }
      ],
      explanation: 'A 3ª Cruzada (1189-1192) ficou famosa pelo confronto entre Ricardo Coração de Leão e Saladino — um dos grandes duelos da Idade Média.'
    },
    {
      prompt: 'Qual foi a principal herança intelectual árabe absorvida pela Europa nas Cruzadas?',
      options: [
        { text: 'A imprensa de Gutenberg',   correct: false },
        { text: 'A álgebra e os algarismos arábicos', correct: true },
        { text: 'A bússola chinesa',          correct: false },
        { text: 'O sistema democrático grego', correct: false }
      ],
      explanation: 'Através do contato com o mundo islâmico, a Europa redescobriu a álgebra (al-Khwarizmi), os algarismos indo-arábicos e obras de Aristóteles traduzidas em árabe.'
    },
    {
      prompt: 'Os "Estados Cruzados" fundados após a 1ª Cruzada incluíam:',
      options: [
        { text: 'Somente Jerusalém',                                           correct: false },
        { text: 'Reino de Jerusalém, Principado de Antioquia, Condado de Trípoli e Edessa', correct: true },
        { text: 'Toda a Península Arábica conquistada pelos cruzados',         correct: false },
        { text: 'Portugal, Espanha e Sicília reconquistadas',                  correct: false }
      ],
      explanation: 'A 1ª Cruzada criou quatro Estados Cruzados no Levante: o Reino de Jerusalém, o Principado de Antioquia, e os Condados de Edessa e Trípoli.'
    },
    {
      prompt: 'Do ponto de vista islâmico, as Cruzadas foram percebidas como:',
      options: [
        { text: 'Uma oportunidade de trocas culturais pacíficas',              correct: false },
        { text: 'Invasões violentas com massacres de populações civis',        correct: true  },
        { text: 'Uma ameaça menor facilmente contida',                         correct: false },
        { text: 'Uma cooperação estratégica contra o Império Bizantino',       correct: false }
      ],
      explanation: 'Para o mundo islâmico, as Cruzadas foram invasões agressivas — o massacre de Jerusalém (1099), o saque de Constantinopla e outros atrocidades deixaram memória duradoura.'
    },
    {
      prompt: 'Qual evento ENCERROU a presença cristã na Terra Santa?',
      options: [
        { text: 'A reconquista de Jerusalém por Saladino (1187)',   correct: false },
        { text: 'A queda de Acre (1291) para os mamelucos',         correct: true  },
        { text: 'A 4ª Cruzada (1204)',                              correct: false },
        { text: 'A Peste Negra (1347)',                             correct: false }
      ],
      explanation: 'A queda de Acre (1291) foi o fim do último Estado Cruzado — encerrando dois séculos de presença cruzada no Oriente Médio.'
    },
    {
      prompt: 'Por que nobres participavam das Cruzadas além da fé?',
      options: [
        { text: 'Eram forçados pelo papa sob pena de morte',              correct: false },
        { text: 'Buscavam terras, riqueza, aventura e redemção espiritual', correct: true },
        { text: 'Queriam escapar do pagamento de impostos ao rei',        correct: false },
        { text: 'Seguiam a lei feudal que obrigava todos os nobres',      correct: false }
      ],
      explanation: 'As motivações eram mistas: fé genuína, busca de aventura e glória, possibilidade de conquistar terras, riqueza no Oriente, e a indulgência plenária prometida pelo papa.'
    },
    {
      prompt: 'Qual ordem militar-religiosa foi fundada para proteger peregrinos na Terra Santa?',
      options: [
        { text: 'Franciscanos',         correct: false },
        { text: 'Beneditinos',          correct: false },
        { text: 'Cavaleiros Templários',correct: true  },
        { text: 'Dominicanos',          correct: false }
      ],
      explanation: 'Os Cavaleiros Templários (fundados c. 1119) eram monges-guerreiros dedicados a proteger peregrinos em Jerusalém — tornaram-se extremamente ricos e poderosos.'
    },
    {
      prompt: 'As Cruzadas contribuíram para o enfraquecimento do feudalismo porque:',
      options: [
        { text: 'Os servos conquistaram liberdade ao participar das expedições',  correct: false },
        { text: 'Muitos nobres morreram ou se endividaram, fortalecendo os reis', correct: true  },
        { text: 'A Igreja aboliu a servidão durante as Cruzadas',                 correct: false },
        { text: 'O comércio substituiu completamente a economia de subsistência', correct: false }
      ],
      explanation: 'Nobres que partiam para as Cruzadas frequentemente morriam, vendiam terras ou se endividavam — centralizando poder nos reis.'
    },
    {
      prompt: 'A "Reconquista" ibérica foi um processo similar às Cruzadas porque:',
      options: [
        { text: 'Também buscava reconquistar Jerusalém',                         correct: false },
        { text: 'Era uma guerra "santa" cristã para expulsar muçulmanos da Península Ibérica', correct: true },
        { text: 'Era liderada pelo mesmo papa que convocou a 1ª Cruzada',        correct: false },
        { text: 'Começou no mesmo século que as Cruzadas',                       correct: false }
      ],
      explanation: 'A Reconquista (722-1492) foi a longa campanha dos reinos cristãos ibéricos (Castela, Aragão, Portugal) para expulsar os mouros — considerada uma Cruzada pela Igreja.'
    }
  ],

  adaptiveReview: [
    {
      prompt: 'DIFÍCIL: O que foi a "Cruzada Albigense" (1209)? Por que foi controversa?',
      options: [
        { text: 'Uma expedição ao Egito que fracassou',                                     correct: false },
        { text: 'Uma Cruzada contra cristãos cátaros no sul da França — inaugurou Cruzadas internas', correct: true },
        { text: 'A última expedição cruzada ao Oriente Médio',                              correct: false },
        { text: 'Uma aliança entre cruzados e muçulmanos contra os mongóis',                correct: false }
      ],
      explanation: 'A Cruzada Albigense foi convocada contra os cátaros, cristãos do sul da França acusados de heresia — primeira Cruzada dentro da Europa, mostrando que o conceito foi expandido para fins políticos internos.'
    }
  ],

  rewards: { xp: 140, gems: 14, badge: '⚔️ Cruzado do Conhecimento' },
  completionMessage: '⚔️ Você conhece as Cruzadas melhor que os próprios templários!',
  nextStage: 'hist_s04'
};

window.HIST_S03 = HIST_S03;
