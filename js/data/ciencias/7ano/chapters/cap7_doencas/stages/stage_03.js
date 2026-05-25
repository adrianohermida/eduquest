/**
 * STAGE 03 — Epidemias, Pandemias e Fake News
 * Entendendo surtos, escalas e desinformação em saúde
 */

const STAGE_03 = {
  id: 'stage_03',
  title: 'Epidemias e Fake News',
  icon: '📰',
  difficulty: 'medium',
  estimatedTime: 14,

  learningObjectives: [
    'Diferenciar endemia, epidemia e pandemia',
    'Entender o número reprodutivo básico (R0)',
    'Identificar fake news em saúde',
    'Reconhecer a falácia post hoc ergo propter hoc',
    'Conhecer os tipos de testes diagnósticos (PCR vs sorologia)'
  ],

  summary: {
    readTime: 5,
    content: [
      {
        icon: '🗺️',
        title: 'Endemia, Epidemia e Pandemia',
        text: 'ENDEMIA: doença presente constantemente em uma região específica.\n   Ex: malária na Amazônia, dengue no Brasil\n\nEPIDEMIA: surto inesperado em uma região, acima do esperado.\n   Ex: surto de dengue em uma cidade no verão\n\nPANDEMIA: epidemia que se espalha pelo mundo todo.\n   Ex: COVID-19 (2020), gripe espanhola (1918)\n\n💡 Macete: "Pan" = todos (grego) → PAN-demia = doença de TODOS os países'
      },
      {
        icon: '📊',
        title: 'R0: O Número de Contágio',
        text: 'O R0 (R-zero) indica quantas pessoas, em média, um único doente infecta.\n\n• R0 > 1 → doença em expansão (epidemia)\n• R0 = 1 → doença estável\n• R0 < 1 → doença em queda (controlada)\n\n🦠 Comparação:\n  Sarampo: R0 ≈ 15 (muito contagioso!)\n  COVID-19: R0 ≈ 2-3\n  Gripe: R0 ≈ 1.3'
      },
      {
        icon: '🚫',
        title: 'Fake News em Saúde',
        text: 'Desinformação mata! Principais sinais de fake news médica:\n\n❌ Cura "milagrosa" sem base científica\n❌ Medo exagerado de vacinas sem evidências\n❌ Fontes anônimas ou não científicas\n❌ "Meu vizinho tomou X e ficou bom"\n\n✅ Fontes confiáveis: OMS, ANVISA, Ministério da Saúde, periódicos científicos revisados por pares'
      },
      {
        icon: '🧩',
        title: 'Falácia Post Hoc',
        text: '"Post hoc ergo propter hoc" = "depois disso, logo causado por isso"\n\nExemplo clássico de falácia:\n"Tomei a vacina → depois fiquei com febre → logo a vacina causou a febre"\n\nRealidade: febre leve é resposta imune NORMAL. Temporal não prova causal.\n\n✅ Ciência exige: grupo controle + correlação estatística + mecanismo biológico plausível'
      },
      {
        icon: '🔬',
        title: 'PCR vs Sorologia',
        text: 'PCR (teste molecular): detecta o material genético (RNA/DNA) do vírus\n  ✅ Ideal para fase AGUDA (primeiros dias de sintoma)\n  Detecta se o vírus ESTÁ presente agora\n\nSorologia (teste de anticorpos): detecta anticorpos do paciente\n  ✅ Ideal após infecção ou vacinação\n  Detecta se o corpo JÁ TEVE contato com o patógeno'
      }
    ],

    flashcards: [
      { q: 'O que é pandemia?',                     a: 'Epidemia que se espalha por múltiplos países/continentes.' },
      { q: 'O que é endemia?',                      a: 'Doença constantemente presente em uma região específica.' },
      { q: 'O que significa R0 > 1?',               a: 'Doença em expansão — cada doente infecta mais de uma pessoa.' },
      { q: 'O que é "post hoc ergo propter hoc"?',  a: 'Falácia: assumir causalidade só porque um evento seguiu outro temporalmente.' },
      { q: 'Teste PCR detecta o quê?',              a: 'Material genético do patógeno — infecção ativa.' },
      { q: 'Sorologia detecta o quê?',              a: 'Anticorpos no sangue — contato passado com patógeno ou efeito de vacina.' },
      { q: 'Qual o R0 aproximado do sarampo?',      a: 'R0 ≈ 15 — um dos mais contagiosos já registrados.' },
      { q: 'Cite uma pandemia do século XX.',        a: 'Gripe espanhola (1918) — entre 50 e 100 milhões de mortes.' }
    ],

    mnemonics: [
      { trigger: 'Endemia-Epidemia-Pandemia', memory: '"Endo (dentro) = local. Epi (sobre) = regional. Pan (todos) = mundial"' },
      { trigger: 'R0',                        memory: '"R-zero: abaixo de 1 vai para o zero (doença some). Acima de 1, cresce!"' },
      { trigger: 'PCR vs Sorologia',          memory: '"PCR = Procura o Criminoso no local. Sorologia = Rastro que ele deixou"' },
      { trigger: 'Post hoc',                  memory: '"Depois NÃO significa por causa. O galo cantou — o sol nasceu. O galo não faz o sol nascer!"' }
    ],

    miniReview: [
      { q: 'COVID-19 foi endemia, epidemia ou pandemia?',         a: 'Pandemia — afetou países do mundo todo em 2020.' },
      { q: 'R0 = 0.5: a doença está crescendo ou diminuindo?',   a: 'Diminuindo — cada doente infecta menos de 1 pessoa.' },
      { q: 'Que teste usar para diagnóstico nos primeiros dias?', a: 'PCR — detecta o vírus em fase aguda.' },
      { q: 'Cite um sinal de fake news médica.',                  a: 'Cura milagrosa sem base científica / fonte anônima.' }
    ]
  },

  warmup: [
    {
      prompt: 'Uma doença que se espalha pelo mundo todo é chamada de:',
      options: [
        { text: 'Pandemia', correct: true  },
        { text: 'Endemia',  correct: false },
        { text: 'Epidemia', correct: false },
        { text: 'Surto',    correct: false }
      ],
      explanation: '"Pan" = todos. Pandemia afeta múltiplos países e continentes simultaneamente.'
    },
    {
      prompt: 'Se R0 = 2, cada doente infecta em média:',
      options: [
        { text: '2 pessoas',   correct: true  },
        { text: 'Nenhuma',     correct: false },
        { text: '0.5 pessoas', correct: false },
        { text: '20 pessoas',  correct: false }
      ],
      explanation: 'R0 é o número médio de novas infecções causadas por um único doente.'
    },
    {
      prompt: 'A malária é endêmica na Amazônia. Isso significa que:',
      options: [
        { text: 'A doença está sempre presente nessa região',    correct: true  },
        { text: 'Houve um surto inesperado recentemente',        correct: false },
        { text: 'A doença se espalhou para o mundo todo',        correct: false },
        { text: 'A doença foi erradicada nessa região',          correct: false }
      ],
      explanation: 'Endemia = presença constante e esperada de uma doença em determinada região geográfica.'
    }
  ],

  guidedPractice: [
    {
      prompt: '🔍 DICA: PCR detecta o vírus agora. Sorologia detecta o rastro (anticorpos) que ele deixou.\n\nPara saber se alguém JÁ TEVE COVID-19 há 2 meses, qual teste usar?',
      options: [
        { text: 'Sorologia',       correct: true  },
        { text: 'PCR',             correct: false },
        { text: 'Qualquer um',     correct: false },
        { text: 'Nenhum funciona', correct: false }
      ],
      explanation: 'Sorologia detecta anticorpos produzidos após a infecção passada — ideal para investigar contato anterior.'
    },
    {
      prompt: '🔍 DICA: "Depois disso" NÃO significa "por causa disso".\n\n"Tomei vacina → na semana seguinte peguei gripe → a vacina me deixou doente." Esse raciocínio é:',
      options: [
        { text: 'Falácia post hoc ergo propter hoc', correct: true  },
        { text: 'Fato científico comprovado',         correct: false },
        { text: 'Efeito colateral documentado',       correct: false },
        { text: 'Correlação causal válida',           correct: false }
      ],
      explanation: 'Correlação temporal não prova causalidade. A gripe pode ter sido contraída antes ou independentemente da vacina.'
    }
  ],

  questions: [
    {
      prompt: 'Qual a diferença entre epidemia e pandemia?',
      options: [
        { text: 'Epidemia = regional; pandemia = mundial',         correct: true  },
        { text: 'Epidemia = viral; pandemia = bacteriana',         correct: false },
        { text: 'Epidemia = grave; pandemia = leve',               correct: false },
        { text: 'São sinônimos que diferem apenas na intensidade', correct: false }
      ],
      explanation: 'Pandemia significa que a epidemia cruzou fronteiras e afeta múltiplos países e continentes.'
    },
    {
      prompt: 'A dengue é endêmica no Brasil. Isso significa que:',
      options: [
        { text: 'Ocorre regularmente no país, com casos esperados anualmente', correct: true  },
        { text: 'Foi completamente eliminada do território nacional',            correct: false },
        { text: 'Há sempre uma epidemia ativa no momento',                     correct: false },
        { text: 'Afeta todos os países do mundo igualmente',                   correct: false }
      ],
      explanation: 'Endemia = presença constante e esperada em uma região. O Brasil registra casos de dengue todo ano.'
    },
    {
      prompt: 'Com R0 = 0,8, a doença está:',
      options: [
        { text: 'Diminuindo — cada doente infecta menos de 1 pessoa', correct: true  },
        { text: 'Crescendo exponencialmente',                          correct: false },
        { text: 'Estável — sem variação no número de casos',          correct: false },
        { text: 'Se tornando uma pandemia',                            correct: false }
      ],
      explanation: 'R0 < 1 significa que a doença está em declínio — transmissão abaixo de 1 para 1.'
    },
    {
      prompt: 'O que caracteriza uma fake news sobre saúde?',
      options: [
        { text: 'Afirmações sem base científica, fontes anônimas e curas milagrosas', correct: true  },
        { text: 'Artigos de jornais científicos revisados por pares',                 correct: false },
        { text: 'Relatórios oficiais da OMS e ANVISA',                                correct: false },
        { text: 'Estudos com grupo controle e amostra grande',                        correct: false }
      ],
      explanation: 'Fake news em saúde tipicamente carecem de evidências e citam fontes não verificáveis ou anônimas.'
    },
    {
      prompt: '"Pós-vacinação tive febre, logo a vacina foi prejudicial." Esse raciocínio é:',
      options: [
        { text: 'A falácia post hoc ergo propter hoc',                    correct: true  },
        { text: 'Uma conclusão científica válida',                         correct: false },
        { text: 'Uma reação adversa grave documentada',                   correct: false },
        { text: 'Correlação causal corretamente identificada',            correct: false }
      ],
      explanation: 'Febre pós-vacina é resposta imune NORMAL. Temporal não significa causal.'
    },
    {
      prompt: 'O teste PCR é preferido nos primeiros dias de infecção porque:',
      options: [
        { text: 'Detecta o material genético do vírus em fase aguda', correct: true  },
        { text: 'É mais barato que a sorologia em todos os casos',    correct: false },
        { text: 'Detecta anticorpos mais rapidamente que a sorologia', correct: false },
        { text: 'Funciona apenas para COVID-19 e nenhum outro vírus', correct: false }
      ],
      explanation: 'Na fase aguda, o vírus está presente e o PCR o detecta diretamente pelo seu RNA/DNA.'
    },
    {
      prompt: 'A sorologia é indicada para verificar se alguém:',
      options: [
        { text: 'Já teve contato com o patógeno ou foi vacinado', correct: true  },
        { text: 'Tem infecção ativa no momento do exame',          correct: false },
        { text: 'Vai desenvolver a doença no futuro',              correct: false },
        { text: 'Tem resistência genética à doença',               correct: false }
      ],
      explanation: 'Sorologia detecta anticorpos — marcador de contato passado com o agente infeccioso ou efeito vacinal.'
    },
    {
      prompt: 'A gripe espanhola de 1918 foi classificada como:',
      options: [
        { text: 'Pandemia', correct: true  },
        { text: 'Endemia',  correct: false },
        { text: 'Epidemia', correct: false },
        { text: 'Surto',    correct: false }
      ],
      explanation: 'A gripe espanhola afetou múltiplos continentes e matou entre 50 e 100 milhões — pandemia histórica.'
    },
    {
      prompt: 'Qual é a fonte mais confiável para informações sobre saúde?',
      options: [
        { text: 'OMS, ANVISA e periódicos científicos revisados por pares', correct: true  },
        { text: 'Grupos de WhatsApp e redes sociais populares',              correct: false },
        { text: 'Testemunhos de vizinhos e conhecidos',                      correct: false },
        { text: 'Sites de venda de suplementos e produtos naturais',         correct: false }
      ],
      explanation: 'Organizações de saúde oficiais e revistas científicas passam por revisão rigorosa antes de publicar.'
    },
    {
      prompt: 'O sarampo tem R0 ≈ 15. Isso significa que é:',
      options: [
        { text: 'Extremamente contagioso — cada doente infecta ~15 pessoas', correct: true  },
        { text: 'Perigoso mas pouco contagioso',                              correct: false },
        { text: 'Menos contagioso que a gripe comum',                         correct: false },
        { text: 'Contagioso apenas para crianças menores de 5 anos',         correct: false }
      ],
      explanation: 'R0 = 15 é um dos maiores já registrados — justifica necessidade de 95%+ da população vacinada.'
    }
  ],

  adaptiveReview: [
    {
      prompt: 'DIFÍCIL: Para erradicar uma doença com R0 = 4, qual porcentagem mínima da população precisa ser imune?',
      options: [
        { text: 'Aproximadamente 75% (fórmula: 1 − 1/R0)', correct: true  },
        { text: '50% sempre, independente do R0',            correct: false },
        { text: '100% necessariamente',                      correct: false },
        { text: 'Não depende do R0, só do tipo de vírus',   correct: false }
      ],
      explanation: 'Limiar de imunidade de rebanho = 1 − (1/R0). Com R0=4: 1 − 1/4 = 75% da população.'
    },
    {
      prompt: 'DIFÍCIL: Por que o R0 de uma mesma doença pode variar entre diferentes populações?',
      options: [
        { text: 'Depende de densidade populacional, comportamento social e imunidade prévia', correct: true  },
        { text: 'O R0 é uma constante biológica fixa para cada espécie de patógeno',          correct: false },
        { text: 'Varia apenas com temperatura e umidade do clima local',                       correct: false },
        { text: 'Só muda quando o patógeno sofre mutação genética significativa',              correct: false }
      ],
      explanation: 'R0 reflete a interação vírus-hospedeiro-ambiente. Isolamento social, por exemplo, reduz o R0 real de uma doença.'
    }
  ],

  rewards: {
    xp:    170,
    gems:  17,
    badge: '📰 Caçador de Fake News'
  },

  completionMessage: '📰 Excelente! Você sabe distinguir fato de fake news e entende como as doenças se espalham. A ciência agradece!',
  nextStage: 'stage_04'
};

window.STAGE_03 = STAGE_03;
