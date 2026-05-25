/**
 * STAGE BOSS — Grande Revisão: O Chefe das Doenças
 * Revisão integrada de todos os 10 temas anteriores
 */

const STAGE_BOSS = {
  id: 'stage_boss',
  title: 'O Chefe das Doenças',
  icon: '💀',
  difficulty: 'boss',
  estimatedTime: 20,
  isBoss: true,

  learningObjectives: [
    'Integrar conhecimentos de todos os 10 estágios anteriores',
    'Aplicar raciocínio clínico e epidemiológico em situações complexas',
    'Diferenciar doenças por transmissão, agente e prevenção',
    'Reconhecer padrões de fake news e falácias em saúde',
    'Demonstrar domínio completo do capítulo 7'
  ],

  summary: {
    readTime: 3,
    content: [
      {
        icon: '💀',
        title: 'Aviso do Chefe!',
        text: 'Você chegou ao CHEFE DO CAPÍTULO! Este estágio não tem novas informações — é uma batalha de revisão.\n\n⚔️ As perguntas cobrem TODOS os 10 estágios anteriores:\n• Imunologia e anticorpos\n• Vacinas e soros\n• Epidemias e fake news\n• Aedes aegypti e arboviroses\n• COVID-19 e gripe\n• Febre amarela e raiva\n• Virais da infância\n• Leptospirose e cólera\n• Tuberculose, tétano e hanseníase\n• Saneamento e prevenção\n\n🎯 Aqui, cada resposta errada pesa mais. Mostre que você é o Mestre!'
      },
      {
        icon: '🧠',
        title: 'Estratégia para o Chefe',
        text: 'Dicas para vencer o Chefe:\n\n1. Leia cada pergunta com atenção — muitas têm pegadinhas!\n2. Elimine as alternativas claramente erradas\n3. Lembre das analogias e macetes de cada estágio\n4. Quando em dúvida: pense na TRANSMISSÃO da doença\n\n🔑 Perguntas-chave para revisar mentalmente:\n• Quem transmite? (vetor, ar, água, solo, contato)\n• Qual o agente? (vírus, bactéria, fungo...)\n• Qual a prevenção? (vacina, soro, saneamento...)\n• Tem cura? Com o quê?'
      }
    ],

    flashcards: [
      { q: 'Cite as 4 doenças transmitidas pelo Aedes aegypti.',  a: 'Dengue, Zika, Chikungunya e Febre Amarela.' },
      { q: 'Qual vacina previne sarampo, caxumba e rubéola?',     a: 'Tríplice viral (SCR).' },
      { q: 'Qual doença é transmitida pelo solo (não pessoa a pessoa)?', a: 'Tétano (esporos de C. tetani no solo).' },
      { q: 'Qual bactéria causa a tuberculose?',                  a: 'Mycobacterium tuberculosis (bacilo de Koch).' },
      { q: 'Qual o tratamento de emergência pós-mordida de cobra?', a: 'Soro antiofídico (anticorpos prontos — imunidade passiva).' },
      { q: 'A varíola foi erradicada em que ano?',                a: '1980 — graças à vacinação mundial coordenada pela OMS.' },
      { q: 'Qual diarreia caracteriza a cólera?',                 a: '"Água de arroz" — aquosa e volumosa, sem sangue.' },
      { q: 'Cite 2 formas de controle biológico de vetores.',     a: 'Peixes larvívoros (guaru) e bactéria Wolbachia no Aedes.' }
    ],

    mnemonics: [
      { trigger: 'Aedes = 4 doenças', memory: '"DZCA = Dengue, Zika, Chikungunya, Amarela — o Aedes é um pacote de 4 males!"' },
      { trigger: 'Transmissões',      memory: '"Ar = TB. Solo = Tétano. Água = Cólera/Lepto. Mosquito = Dengue/Febre Amarela. Contato = Hansen/Raiva"' },
      { trigger: 'Vacinas-chave',     memory: '"SCR = Sarampo/Caxumba/Rubéola. BCG = Tuberculose. DTP = Difteria/Tétano/Coqueluche."' },
      { trigger: 'Imunidade',         memory: '"Vacina = Ativa (corpo faz). Soro = Passiva (pronto). Doença = Ativa natural."' }
    ],

    miniReview: [
      { q: 'Cite a diferença entre endemia, epidemia e pandemia.', a: 'Endemia = sempre local. Epidemia = surto regional. Pandemia = mundial.' },
      { q: 'O tétano é contagioso?',                               a: 'NÃO — vem do solo, não de pessoas doentes.' },
      { q: 'Soro vs vacina: qual gera imunidade duradoura?',       a: 'Vacina (imunidade ativa). Soro dura pouco (passiva).' },
      { q: 'Cite um sintoma exclusivo do COVID-19.',               a: 'Perda de olfato (anosmia) e paladar (ageusia).' }
    ]
  },

  warmup: [
    {
      prompt: '⚔️ AQUECIMENTO DO CHEFE: O Aedes aegypti transmite QUANTAS doenças?',
      options: [
        { text: '4 — dengue, zika, chikungunya e febre amarela', correct: true  },
        { text: '2 — dengue e zika apenas',                       correct: false },
        { text: '3 — dengue, zika e chikungunya',                 correct: false },
        { text: '1 — apenas dengue',                              correct: false }
      ],
      explanation: 'O Aedes transmite dengue, zika, chikungunya E febre amarela urbana — quatro arboviroses!'
    },
    {
      prompt: '⚔️ AQUECIMENTO DO CHEFE: Qual doença NÃO é contagiosa entre pessoas?',
      options: [
        { text: 'Tétano',       correct: true  },
        { text: 'Tuberculose',  correct: false },
        { text: 'Sarampo',      correct: false },
        { text: 'COVID-19',     correct: false }
      ],
      explanation: 'Tétano vem do solo (esporos de C. tetani) via feridas — não passa de pessoa para pessoa.'
    },
    {
      prompt: '⚔️ AQUECIMENTO DO CHEFE: A vacina gera imunidade ______, enquanto o soro gera imunidade ______:',
      options: [
        { text: 'Ativa; Passiva', correct: true  },
        { text: 'Passiva; Ativa', correct: false },
        { text: 'Permanente; Temporária (mas ambas ativas)', correct: false },
        { text: 'São equivalentes — apenas diferem na velocidade', correct: false }
      ],
      explanation: 'Vacina: corpo produz anticorpos (ativa, duradoura). Soro: anticorpos prontos fornecidos (passiva, temporária).'
    }
  ],

  guidedPractice: [
    {
      prompt: '⚔️ DESAFIO: Uma criança de 3 anos não vacinada ficou perto de uma pessoa com SARAMPO numa sala fechada por 2 horas. Qual o risco?',
      options: [
        { text: 'Muito alto — sarampo tem R0 ≈ 15 e transmissão aérea eficiente',  correct: true  },
        { text: 'Baixo — sarampo só transmite por contato direto com lesões',       correct: false },
        { text: 'Zero — crianças abaixo de 5 anos têm imunidade natural',           correct: false },
        { text: 'Moderado — apenas se a criança tocou no doente',                  correct: false }
      ],
      explanation: 'Com R0 = 15, basta estar no mesmo ambiente que um doente de sarampo. Ambiente fechado amplifica o risco.'
    },
    {
      prompt: '⚔️ DESAFIO: Uma pessoa foi mordida por morcego. O que fazer imediatamente?',
      options: [
        { text: 'Lavar a ferida com água e sabão e ir ao posto de saúde para PPE antirrábica', correct: true  },
        { text: 'Matar o morcego e ir ao hospital apenas se sintomas aparecerem',               correct: false },
        { text: 'Tomar antibiótico oral por 5 dias como prevenção',                            correct: false },
        { text: 'Aguardar 24 horas — raiva só aparece após uma semana',                        correct: false }
      ],
      explanation: 'Raiva é fatal sem PPE. Lavar + ir ao posto imediatamente salva a vida. Jamais esperar sintomas.'
    }
  ],

  questions: [
    {
      prompt: 'Uma epidemia se torna pandemia quando:',
      options: [
        { text: 'Se espalha por múltiplos países e continentes',    correct: true  },
        { text: 'Afeta mais de 10 mil pessoas numa cidade',         correct: false },
        { text: 'O patógeno sofre mutação genética significativa',  correct: false },
        { text: 'A OMS declara estado de emergência local',         correct: false }
      ],
      explanation: 'Pandemia = escala global. COVID-19, gripe espanhola (1918) e varíola foram pandemias históricas.'
    },
    {
      prompt: 'Qual conjunto de doenças tem transmissão AÉREA?',
      options: [
        { text: 'Tuberculose, sarampo e COVID-19',                  correct: true  },
        { text: 'Dengue, zika e chikungunya',                       correct: false },
        { text: 'Cólera, febre tifóide e leptospirose',             correct: false },
        { text: 'Tétano, hanseníase e raiva',                       correct: false }
      ],
      explanation: 'TB, sarampo e COVID-19 se transmitem por aerossóis/gotículas. As outras têm vias completamente diferentes.'
    },
    {
      prompt: 'A imunidade de rebanho protege populações vulneráveis porque:',
      options: [
        { text: 'Alta vacinação reduz a circulação do patógeno, protegendo quem não pode se vacinar', correct: true  },
        { text: 'Os vacinados produzem anticorpos que "passam" para os não vacinados',                correct: false },
        { text: 'A imunidade de rebanho só funciona com 100% de vacinação',                          correct: false },
        { text: 'Protege apenas adultos — crianças ainda ficam expostas',                            correct: false }
      ],
      explanation: 'Com menos pessoas suscetíveis, o patógeno não encontra hospedeiros — transmissão cai abaixo de 1 (R < 1).'
    },
    {
      prompt: 'Qual das alternativas conecta CORRETAMENTE a doença ao seu vetor ou via de transmissão?',
      options: [
        { text: 'Raiva → saliva de animal infectado (mordida/arranhão)',  correct: true  },
        { text: 'Cólera → mosquito Aedes aegypti',                        correct: false },
        { text: 'Tuberculose → água contaminada por fezes',               correct: false },
        { text: 'Dengue → contato com pessoas doentes',                   correct: false }
      ],
      explanation: 'Raiva: via saliva animal. Cólera: fecal-oral. Tuberculose: aérea. Dengue: vetor Aedes.'
    },
    {
      prompt: 'O "post hoc ergo propter hoc" é uma falácia que afirma que:',
      options: [
        { text: 'Algo que ocorreu depois de um evento foi causado por ele',  correct: true  },
        { text: 'Correlação estatística sempre implica causalidade direta',  correct: false },
        { text: 'Eventos raros têm causas igualmente raras',                correct: false },
        { text: 'Tratamentos naturais são sempre mais seguros que sintéticos', correct: false }
      ],
      explanation: 'Classic: "Tomei vacina → depois fiquei doente → vacina me adoeceu." Temporal ≠ causal.'
    },
    {
      prompt: 'Qual das seguintes não é uma doença que pode ser ERRADICADA pela vacinação?',
      options: [
        { text: 'Dengue — tem reservatório animal silvestre e 4 sorotipos', correct: true  },
        { text: 'Sarampo — sem reservatório animal',                         correct: false },
        { text: 'Poliomielite — sem reservatório animal significativo',      correct: false },
        { text: 'Varíola — já erradicada em 1980',                          correct: false }
      ],
      explanation: 'Dengue tem 4 sorotipos e o Aedes circula amplamente. Doenças sem reservatório animal são mais fáceis de erradicar.'
    },
    {
      prompt: 'O Mycobacterium leprae (bacilo de Hansen) causa hanseníase. Sobre seu tratamento, é correto:',
      options: [
        { text: 'PQT gratuita no SUS; após 1ª dose o paciente não transmite mais',   correct: true  },
        { text: 'Não tem cura — tratamento é paliativo e dura toda a vida',           correct: false },
        { text: 'Precisa de internação hospitalar durante todo o tratamento',         correct: false },
        { text: 'O tratamento usa apenas um antibiótico por 7 dias',                  correct: false }
      ],
      explanation: 'PQT (poliquimioterapia) cura a hanseníase em 6-12 meses, totalmente no SUS, e elimina a transmissibilidade na 1ª dose.'
    },
    {
      prompt: 'Em uma situação de enchente, qual conjunto de cuidados é mais adequado?',
      options: [
        { text: 'Não entrar na água; usar botas e luvas; lavar feridas; procurar UBS se sintomas surgirem', correct: true  },
        { text: 'Tomar antibiótico preventivo; banhar-se na enchente com sabão antibacteriano',              correct: false },
        { text: 'Vacinar toda a família contra leptospirose antes da enchente',                             correct: false },
        { text: 'Tomar apenas a vacina antitetânica e caminhar normalmente na água',                       correct: false }
      ],
      explanation: 'Não existe vacina de rotina para leptospirose no Brasil. A prevenção é comportamental: não entrar na água da enchente.'
    },
    {
      prompt: 'Qual vírus permanece LATENTE nos nervos após a infecção primária, podendo reativar décadas depois?',
      options: [
        { text: 'Varicela-Zóster (VZV) — causa catapora e depois herpes-zóster', correct: true  },
        { text: 'Poliovírus — pode reativar como polio do adulto',                 correct: false },
        { text: 'SARS-CoV-2 — pode reativar como COVID longa nos nervos',        correct: false },
        { text: 'Sarampo-Paramyxovírus — reativa como encefalite tardia',        correct: false }
      ],
      explanation: 'O VZV fica latente nos gânglios dorsais. Queda de imunidade (idade, estresse, imunossupressão) → reativação como zóster.'
    },
    {
      prompt: 'Comparando leptospirose e cólera, qual afirmação é CORRETA?',
      options: [
        { text: 'Leptospirose: bactéria pelo contato com água. Cólera: bactéria pela ingestão de água/alimento contaminado', correct: true  },
        { text: 'Ambas são causadas pelo mesmo agente — Vibrio cholerae',                                                     correct: false },
        { text: 'Leptospirose é viral; cólera é bacteriana',                                                                 correct: false },
        { text: 'Ambas se transmitem por via aérea em ambientes fechados',                                                   correct: false }
      ],
      explanation: 'Leptospira entra pela pele/mucosas. Vibrio cholerae entra pela boca (fecal-oral). Agentes, vias e mecanismos completamente diferentes.'
    }
  ],

  bossChallenge: [
    {
      prompt: '🏆 DESAFIO BOSS: Uma professora relata que 5 crianças da mesma sala de aula estão com febre, tosse e manchas avermelhadas da cabeça aos pés. Uma criança tinha uma erupção 2 semanas atrás. O R0 estimado é 15. Qual é a doença mais provável?',
      options: [
        { text: 'Sarampo — R0 = 15, transmissão aérea, manchas descendo da cabeça, contagioso 4 dias antes da erupção', correct: true  },
        { text: 'Catapora — R0 ≈ 10, vesículas (não manchas planas), começa no tronco',                                 correct: false },
        { text: 'Rubéola — manchas rosas claras e sintomas mais leves',                                                  correct: false },
        { text: 'Dengue — transmissão vetorial (não pessoa a pessoa)',                                                   correct: false }
      ],
      explanation: 'Sarampo: R0 ≈ 15, manchas vermelhas descendo da cabeça, contagioso 4 dias antes da erupção — explica o caso "silencioso" de 2 semanas atrás.'
    },
    {
      prompt: '🏆 DESAFIO BOSS: Uma cidade tem chuvas intensas, esgoto a céu aberto, e registrou 50 casos de "febre com dor nas panturrilhas" em trabalhadores que limparam enchentes. O diagnóstico mais provável e o agente são:',
      options: [
        { text: 'Leptospirose — Leptospira interrogans transmitida pela água da enchente contaminada por urina de ratos', correct: true  },
        { text: 'Cólera — Vibrio cholerae por ingestão de água contaminada',                                             correct: false },
        { text: 'Febre tifóide — Salmonella typhi por alimentos contaminados',                                           correct: false },
        { text: 'Dengue — Aedes aegypti que se reproduz na água das enchentes',                                         correct: false }
      ],
      explanation: 'Contexto clássico de leptospirose: enchente + esgoto + trabalhadores com exposição direta à água contaminada + dor nas panturrilhas (sinal característico).'
    }
  ],

  adaptiveReview: [
    {
      prompt: 'MUITO DIFÍCIL: Por que a erradicação global da poliomielite ainda não foi concluída (décadas após o Brasil eliminar a doença)?',
      options: [
        { text: 'Persistência em países com conflitos/guerras onde vacinação é impossível + poliovírus derivado de vacina oral (cVDPV)', correct: true  },
        { text: 'A vacina oral perdeu eficácia contra novas cepas do poliovírus',                                                       correct: false },
        { text: 'O poliovírus tem reservatório animal que impede erradicação',                                                          correct: false },
        { text: 'Falta de interesse dos países ricos em financiar a campanha global',                                                  correct: false }
      ],
      explanation: 'Poliovírus circula em zonas de conflito (Afeganistão, Paquistão). Além disso, a vacina oral pode raramente reverter para forma virulenta (cVDPV) — complicação técnica real.'
    },
    {
      prompt: 'MUITO DIFÍCIL: Um paciente HIV+ sem tratamento ARV decide tomar a vacina da febre amarela para uma viagem. Por que isso é perigoso?',
      options: [
        { text: 'Vacina de vírus vivo atenuado pode causar doença real em imunodeprimidos graves', correct: true  },
        { text: 'A vacina inativa o medicamento ARV do HIV',                                       correct: false },
        { text: 'HIV acelera a degradação da vacina, tornando-a ineficaz',                        correct: false },
        { text: 'Não há risco — vacinas de vírus vivo são seguras para todos',                   correct: false }
      ],
      explanation: 'Vacinas de vírus VIVO atenuado (febre amarela, varicela, SCR) são contraindicadas em imunodeprimidos graves — o vírus atenuado pode causar doença real.'
    }
  ],

  rewards: {
    xp:    500,
    gems:  50,
    badge: '💀 Exterminador de Doenças'
  },

  completionMessage: '💀 BOSS DERROTADO! Você é um verdadeiro Especialista em Doenças Transmissíveis! Uma última batalha te aguarda...',
  nextStage: 'stage_final'
};

window.STAGE_BOSS = STAGE_BOSS;
