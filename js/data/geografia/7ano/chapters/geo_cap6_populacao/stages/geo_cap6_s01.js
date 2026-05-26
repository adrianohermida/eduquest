/**
 * GEO CAP6 STAGE 01 — Distribuição Populacional
 * BNCC: EF07GE05 | Tópico 1
 */

const GEO_CAP6_S01 = {
  id: 'geo_cap6_s01',
  title: 'Distribuição Populacional',
  icon: '🗺️',
  difficulty: 'easy',
  estimatedTime: 12,

  learningObjectives: [
    'Calcular e interpretar a densidade demográfica brasileira',
    'Identificar as regiões mais e menos populosas do Brasil',
    'Explicar os fatores que causam a distribuição desigual da população',
    'Distinguir população absoluta de densidade demográfica relativa',
    'Relacionar distribuição populacional com história, economia e clima'
  ],

  summary: {
    readTime: 4,
    content: [
      {
        icon: '👥',
        title: 'O Brasil não está cheio em todo lugar',
        text: 'Imagine pintar o Brasil de acordo com a quantidade de gente.\nAlguns pedaços ficariam bem escuros. Outros, quase brancos.\n\nO Brasil tem ~215 milhões de habitantes — mas distribuídos de forma muito desigual!\n\n• Densidade demográfica = total de pessoas ÷ área em km²\n• Densidade média do Brasil: ≈ 25 hab/km²\n\nComparação entre regiões:\n• Sudeste: mais de 80 hab/km² → lotado\n• Norte: menos de 5 hab/km² → quase vazio\n\n🔑 Distribuição desigual não significa um lugar melhor ou pior. Ela reflete história, economia e natureza.'
      },
      {
        icon: '📍',
        title: 'Por que as pessoas moram onde moram?',
        text: 'Quatro grandes forças explicam onde o brasileiro vive:\n\n1. HISTÓRIA: colonização começou pelo litoral — portos, açúcar, escravidão\n2. ECONOMIA: onde tem emprego, tem gente. Fábricas atraíram milhões para o Sudeste\n3. CLIMA: regiões úmidas e férteis têm mais pessoas\n4. RELEVO: planícies são mais fáceis de ocupar do que serras e florestas fechadas\n\nMais de 85% dos brasileiros vivem em cidades.\nA maior concentração está no litoral e no eixo Rio–São Paulo.\n\n🔑 O interior foi ocupado mais tarde — é por isso que ainda existem "vazios demográficos" no mapa.'
      },
      {
        icon: '📊',
        title: 'Absoluta vs. Relativa — como comparar direito',
        text: 'Dois jeitos de medir onde as pessoas estão:\n\n• POPULAÇÃO ABSOLUTA: número total de habitantes por local\n  → São Paulo: mais de 45 milhões de pessoas\n\n• DENSIDADE DEMOGRÁFICA (relativa): hab/km²\n  → Mede a concentração no espaço\n  → Fórmula: D = população ÷ área\n\nExemplo prático:\n  Área A: 1 milhão de hab em 100 km² = 10.000 hab/km² (MUITO denso)\n  Área B: 1 milhão de hab em 1.000 km² = 1.000 hab/km² (menos denso)\n\n🔑 Para comparar populações com justiça, use a densidade. Não basta saber quantos são — importa em que espaço estão.'
      }
    ],

    flashcards: [
      { q: 'O que é densidade demográfica?',                  a: 'Número de habitantes por km² de área. Fórmula: D = população ÷ área (km²).' },
      { q: 'Qual a densidade demográfica média do Brasil?',   a: 'Aproximadamente 25 hab/km².' },
      { q: 'Qual região brasileira tem maior densidade?',     a: 'Região Sudeste (mais de 80 hab/km²).' },
      { q: 'Qual região tem menor densidade demográfica?',    a: 'Região Norte (menos de 5 hab/km²).' },
      { q: 'Quais são os 4 fatores da distribuição desigual?', a: 'História (colonização), Economia (empregos), Clima e Relevo.' },
      { q: 'O que são "vazios demográficos"?',               a: 'Áreas com menos de 1 hab/km² — praticamente desabitadas, como grande parte da Amazônia.' }
    ],

    mnemonics: [
      { trigger: 'Fatores da distribuição',     memory: '"HiEClRe" = HIstória + EConomia + CLima + RElevo. Os 4 magnetos que atraem populações.' },
      { trigger: 'Absoluta vs. Relativa',        memory: '"Absoluta = TOTAL de gente. Densidade = gente por km². Shopping lotado = alta densidade. Brasil cheio = alta absoluta."' },
      { trigger: 'Regiões: mais e menos densas', memory: '"SuDeste = cheio. Norte = quase vazio. Pensa: fabrica + porto = Sul/Sudeste. Floresta = Norte."' }
    ],

    miniReview: [
      { q: 'Por que o Norte tem baixa densidade apesar de ser a maior região do Brasil?',
        a: 'Floresta Amazônica densa, clima quente-úmido, colonização tardia e menor oferta de empregos formais fizeram do Norte uma região pouco ocupada (< 5 hab/km²).' },
      { q: 'Como a história colonial explica a concentração populacional no litoral?',
        a: 'Portugal colonizou o Brasil pelo litoral: portos para exportar açúcar e pau-brasil, capitanias hereditárias, ciclos econômicos. O interior ficou subocupado por séculos.' }
    ]
  },

  warmup: [
    {
      prompt: 'A fórmula correta para calcular a densidade demográfica é:',
      options: [
        { text: 'Área ÷ População',           correct: false },
        { text: 'População ÷ Área (km²)',      correct: true  },
        { text: 'Área × População',           correct: false },
        { text: 'Natalidade ÷ Mortalidade',   correct: false }
      ],
      explanation: 'Densidade Demográfica = Habitantes ÷ km². Quanto mais gente em menos espaço, maior a densidade. Ex: Japão tem ~340 hab/km²; Canadá tem apenas ~4 hab/km².'
    },
    {
      prompt: 'Qual das regiões brasileiras concentra mais de 40% da população nacional?',
      options: [
        { text: 'Norte',    correct: false },
        { text: 'Nordeste', correct: false },
        { text: 'Sudeste',  correct: true  },
        { text: 'Sul',      correct: false }
      ],
      explanation: 'O Sudeste concentra mais de 42% dos brasileiros com SP (~46M), MG (~21M) e RJ (~17M). É o coração econômico do país — o que atrai gente desde o século XX.'
    },
    {
      prompt: 'Um estado tem 2 milhões de hab. e 400.000 km² de área. Sua densidade demográfica é:',
      options: [
        { text: '2 hab/km²',   correct: false },
        { text: '5 hab/km²',   correct: true  },
        { text: '20 hab/km²',  correct: false },
        { text: '50 hab/km²',  correct: false }
      ],
      explanation: '2.000.000 ÷ 400.000 = 5 hab/km². Isso é muito baixo! A Amazônia tem densidade parecida — um estado imenso com muito poucos habitantes por área.'
    }
  ],

  guidedPractice: [
    {
      prompt: '🔍 DICA: Use a fórmula D = população ÷ área.\n\nUm município tem 50.000 habitantes e área de 1.000 km². Qual é sua densidade?',
      options: [
        { text: '5 hab/km²',     correct: false },
        { text: '50 hab/km²',    correct: true  },
        { text: '500 hab/km²',   correct: false },
        { text: '5.000 hab/km²', correct: false }
      ],
      explanation: '50.000 ÷ 1.000 = 50 hab/km². Moderada — parecida com a densidade média do Nordeste. Cidades do interior com essa densidade têm serviços básicos, mas ainda não são grandes centros.'
    },
    {
      prompt: '🔍 DICA: Pense em fatores históricos e econômicos.\n\nPor que as cidades brasileiras mais populosas estão no litoral ou próximas a ele?',
      options: [
        { text: 'Por causa do fuso horário favorável ao comércio',                              correct: false },
        { text: 'Colonização pelo litoral criou portos e cidades que geraram empregos e crescimento', correct: true  },
        { text: 'O litoral tem solo mais fértil que o interior',                                correct: false },
        { text: 'A Constituição exige que capitais fiquem no litoral',                          correct: false }
      ],
      explanation: 'O Brasil foi colonizado pelo litoral: portos, feitorias, capitanias, engenhos de açúcar. Esse padrão criou cidades como Salvador, Recife e Rio de Janeiro — que cresceram e atraíram mais gente ao longo dos séculos.'
    }
  ],

  questions: [
    {
      prompt: 'Qual alternativa define corretamente a diferença entre população absoluta e densidade demográfica?',
      options: [
        { text: 'São a mesma coisa com nomes diferentes',                              correct: false },
        { text: 'Absoluta = total de habitantes; Densidade = habitantes por km²',     correct: true  },
        { text: 'Absoluta mede cidades; densidade mede estados',                       correct: false },
        { text: 'Absoluta é calculada por km²; densidade é o total nacional',         correct: false }
      ],
      explanation: 'Absoluta = quantas pessoas existem (ex: 215 milhões no Brasil). Densidade = como se distribuem no espaço (ex: 25 hab/km²). Uma área com população absoluta baixa pode ter alta densidade se for muito pequena.'
    },
    {
      prompt: 'A Região Norte do Brasil tem a menor densidade demográfica. Qual fator NÃO explica isso?',
      options: [
        { text: 'Floresta Amazônica de difícil penetração e ocupação',               correct: false },
        { text: 'Colonização tardia e menor oferta histórica de empregos',           correct: false },
        { text: 'Proibição legal de habitar a Amazônia',                              correct: true  },
        { text: 'Clima quente-úmido com doenças tropicais historicamente',           correct: false }
      ],
      explanation: 'Não existe proibição legal de morar na Amazônia. A baixa densidade resulta de fatores naturais (floresta densa, rios imensos), históricos (colonização tardia) e econômicos (menos empregos formais em relação à extensão do território).'
    },
    {
      prompt: 'Um país tem grande extensão e alta densidade demográfica. Isso significa que:',
      options: [
        { text: 'O país tem muita área vazia e pouca população',                   correct: false },
        { text: 'A população é muito numerosa ou se concentra em áreas pequenas',  correct: true  },
        { text: 'O país é pequeno e com gente uniformemente distribuída',          correct: false },
        { text: 'A população está crescendo rapidamente',                          correct: false }
      ],
      explanation: 'Alta densidade em país grande = muita gente por km². Pode ser população absoluta enorme (China) ou forte concentração em áreas específicas (Brasil: 80% da pop. em apenas 20% do território).'
    },
    {
      prompt: 'Qual fator histórico explica por que o interior do Brasil foi menos populoso por séculos?',
      options: [
        { text: 'O interior tinha solo infértil e clima ruim para qualquer atividade',             correct: false },
        { text: 'A colonização portuguesa priorizou o litoral por razões comerciais e de defesa',  correct: true  },
        { text: 'O governo colonial proibiu a ocupação do interior',                               correct: false },
        { text: 'Povos indígenas bloquearam completamente o avanço colonizador',                   correct: false }
      ],
      explanation: 'Portugal colonizou pelo litoral para exportar açúcar, pau-brasil e defender o território de outros europeus. O interior era arriscado, distante e de difícil acesso. A expansão ocorreu progressivamente com bandeiras, mineração e, no séc. XX, com Brasília e a fronteira agrícola.'
    },
    {
      prompt: 'O eixo Rio de Janeiro–São Paulo concentra alta densidade. Qual combinação de fatores explica isso?',
      options: [
        { text: 'Clima frio favorável à indústria e forte imigração europeia exclusivamente',              correct: false },
        { text: 'Industrialização do séc. XX, portos exportadores, empregos e migração interna intensa',  correct: true  },
        { text: 'Política federal que proibiu o crescimento de outras regiões',                           correct: false },
        { text: 'Solo extremamente fértil e ausência total de desastres naturais',                        correct: false }
      ],
      explanation: 'O eixo Rio-SP se tornou o coração econômico brasileiro pela industrialização pós-1930, presença de portos, imigração italiana/japonesa e nordestina, e concentração de capitais. Isso gerou empregos que atraíram dezenas de milhões de migrantes internos.'
    },
    {
      prompt: 'Estado X: 500.000 hab. em 50.000 km². Estado Y: 500.000 hab. em 5.000 km². Qual afirmação está correta?',
      options: [
        { text: 'Estado X tem maior densidade demográfica',               correct: false },
        { text: 'Estado Y tem maior densidade demográfica',               correct: true  },
        { text: 'Ambos têm a mesma densidade demográfica',                correct: false },
        { text: 'Não é possível comparar sem saber o PIB de cada um',     correct: false }
      ],
      explanation: 'Estado X: 500.000 ÷ 50.000 = 10 hab/km². Estado Y: 500.000 ÷ 5.000 = 100 hab/km². Mesma população, mas área 10x menor no Y = densidade 10x maior. Isso mostra que população absoluta igual pode ter densidades muito diferentes.'
    },
    {
      prompt: 'Qual conceito geográfico descreve regiões com menos de 1 habitante por km²?',
      options: [
        { text: 'Hiperdensas',         correct: false },
        { text: 'Vazios demográficos', correct: true  },
        { text: 'Conurbações',         correct: false },
        { text: 'Metrópoles',          correct: false }
      ],
      explanation: 'Vazios demográficos são áreas com densidade abaixo de 1 hab/km² — praticamente desabitadas. Grande parte da Amazônia, do Pantanal e de certas áreas do Semiárido são considerados vazios demográficos no mapa do Brasil.'
    },
    {
      prompt: '"A distribuição desigual da população brasileira é resultado apenas de fatores naturais." Essa afirmação é:',
      options: [
        { text: 'Verdadeira — o clima é o único determinante de onde as pessoas moram',            correct: false },
        { text: 'Falsa — fatores econômicos, históricos e políticos são tão importantes quanto',   correct: true  },
        { text: 'Verdadeira — florestas e desertos impedem completamente a habitação',             correct: false },
        { text: 'Falsa — apenas fatores econômicos explicam a distribuição',                       correct: false }
      ],
      explanation: 'A distribuição é multicausal: HISTÓRIA (colonização pelo litoral), ECONOMIA (empregos e investimentos), POLÍTICA (Brasília, rodovias) e NATUREZA (clima, relevo, água). Reduzir a explicação a um único fator é erro conceitual grave — a Geografia humana não admite simplismos.'
    },
    {
      prompt: 'Qual percentual aproximado da população brasileira vive em áreas urbanas, segundo dados recentes?',
      options: [
        { text: '55%', correct: false },
        { text: '70%', correct: false },
        { text: '85%', correct: true  },
        { text: '95%', correct: false }
      ],
      explanation: 'Segundo o IBGE, mais de 85% dos brasileiros vivem em cidades. Essa proporção coloca o Brasil entre os países mais urbanizados do mundo — processo que se intensificou entre 1950 e 1980 com a industrialização.'
    },
    {
      prompt: '(VESTIBULAR) Um geógrafo afirma: "Alta densidade demográfica não é sinônimo de desenvolvimento." Qual exemplo melhor sustenta essa tese?',
      options: [
        { text: 'Canadá tem baixa densidade e alto IDH — logo, pouca gente sempre gera riqueza',              correct: false },
        { text: 'Bangladesh tem alta densidade e IDH médio-baixo; Noruega tem baixa densidade e IDH altíssimo', correct: true  },
        { text: 'O Brasil tem densidade média que justifica seu nível intermediário de desenvolvimento',        correct: false },
        { text: 'Países pequenos são sempre mais ricos por concentrar pessoas em menos espaço',               correct: false }
      ],
      explanation: 'Densidade não determina riqueza. Bangladesh tem ~1.000 hab/km² com IDH médio-baixo. Noruega tem ~14 hab/km² com IDH entre os mais altos do mundo. O desenvolvimento depende de educação, distribuição de renda e infraestrutura — não de quantas pessoas habitam por km².'
    }
  ],

  adaptiveReview: [
    {
      prompt: 'DIFÍCIL: O Brasil mantém crescimento demográfico quase zero, mas a urbanização sobe de 85% para 92%. O que ocorre com a densidade urbana?',
      options: [
        { text: 'A densidade urbana cai, pois mais gente se dispersa pelo campo',                      correct: false },
        { text: 'A densidade urbana aumenta, pois mais pessoas se concentram em áreas já adensadas',   correct: true  },
        { text: 'A densidade rural aumenta proporcionalmente',                                          correct: false },
        { text: 'Não há impacto, pois crescimento zero cancela qualquer mudança',                      correct: false }
      ],
      explanation: 'Crescimento zero = população total estável (~215M). Urbanização +7% = mais ~15M migrando para cidades. Com a mesma população, mas mais concentrada em áreas urbanas, a densidade demográfica urbana aumenta. O espaço físico das cidades não cresce na mesma proporção: resultado = adensamento, pressão sobre habitação e serviços.'
    },
    {
      prompt: 'DIFÍCIL: Por que usar apenas a densidade média nacional (25 hab/km²) para descrever o Brasil é enganoso?',
      options: [
        { text: 'Porque o número correto é 50 hab/km²',                                                   correct: false },
        { text: 'Porque a média oculta contrastes brutais: RJ com >370 hab/km² vs. AM com <3 hab/km²',    correct: true  },
        { text: 'Porque a densidade média só serve para países com distribuição uniforme',                 correct: false },
        { text: 'Porque o IBGE não realiza censos com precisão suficiente',                               correct: false }
      ],
      explanation: 'A média nacional esconde disparidades extremas: Rio de Janeiro tem >370 hab/km², enquanto o Amazonas tem <3 hab/km². Usar a média como representativa do Brasil seria como dizer "em média todos têm uma perna e meia" — estatisticamente possível, geograficamente sem sentido. A análise regional é indispensável para entender o território brasileiro.'
    }
  ],

  rewards: { xp: 120, gems: 12, badge: '🗺️ Cartógrafo da População' },
  completionMessage: '🗺️ Você mapeou como o Brasil se distribui! Agora entende por que alguns lugares têm muito mais gente que outros.',
  nextStage: 'geo_cap6_s02'
};

window.GEO_CAP6_S01 = GEO_CAP6_S01;
