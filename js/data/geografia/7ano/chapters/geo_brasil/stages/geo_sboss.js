/**
 * GEO BOSS STAGE — O Geógrafo Supremo
 */

const GEO_SBOSS = {
  id: 'geo_sboss',
  title: 'O Geógrafo Supremo',
  icon: '🌎',
  difficulty: 'hard',
  estimatedTime: 18,
  isBoss: true,

  learningObjectives: [
    'Sintetizar todo o conhecimento geográfico do Brasil',
    'Conectar localização, relevo, clima, regiões, população e economia',
    'Analisar relações de causa e efeito na geografia brasileira',
    'Avaliar desafios ambientais e socioeconômicos do Brasil',
    'Demonstrar domínio completo do capítulo'
  ],

  summary: {
    readTime: 2,
    content: [
      {
        icon: '🌎',
        title: 'O Desafio do Geógrafo Supremo',
        text: 'Você chegou ao Teste Final do Geógrafo Supremo!\n\nEle domina tudo sobre o Brasil:\n• Localização e fronteiras\n• Relevo e hidrografia\n• Clima e biomas\n• Regiões\n• População\n• Economia\n\n⚠️ Atenção: as questões do boss conectam VÁRIOS temas ao mesmo tempo. Você precisa integrar conhecimentos, não apenas memorizar fatos.\n\n🔑 Estratégia: sempre pergunte "O que CAUSA X?" e "O que X CAUSA?" — a geografia é sobre relações.'
      },
      {
        icon: '🗺️',
        title: 'Conexões Essenciais',
        text: 'As grandes conexões geográficas que o boss vai testar:\n\n• Posição tropical → biodiversidade enorme → biomas únicos\n• Relevo suave → rios de planalto → potencial hidrelétrico\n• Colonização pelo litoral → população concentrada na costa\n• Cerrado = berço das águas → desmatamento = crise hídrica\n• Soja no Cerrado → China como maior parceiro comercial\n• Pré-sal → Petrobras → riqueza + desigualdade\n• Êxodo rural → metrópoles → favelas\n\n🎯 Conecte os temas e você vence o boss!'
      }
    ],

    flashcards: [
      { q: 'Revisão: 5 maiores exportações do Brasil?', a: 'Soja, carne bovina, petróleo, minério de ferro, açúcar.' },
      { q: 'Revisão: 6 biomas + características únicas?', a: 'Amazônia (floresta), Cerrado (berço das águas), Caatinga (exclusiva), Mata Atlântica (devastada), Pampa (gaúcho), Pantanal (alagável).' },
      { q: 'Revisão: Regiões por tamanho (maior→menor)?', a: 'Norte > Nordeste > Centro-Oeste > Sudeste > Sul.' }
    ],

    mnemonics: [
      { trigger: 'Brasil completo', memory: '"LOCALIZAR → RELEVO → CLIMA → REGIÕES → POVO → ECONOMIA. A jornada geográfica em 6 etapas."' }
    ],

    miniReview: [
      { q: 'Qual a relação entre Cerrado e a chuva em São Paulo?', a: 'Cerrado alimenta bacias hidrográficas + os "rios voadores" amazônicos irrigam SP. Cerrado desmatado = menos chuva em SP.' },
      { q: 'Como a colonização explica a desigualdade regional atual?', a: 'Investimentos históricos no Sudeste (café, indústria) criaram vantagem econômica estrutural que persiste até hoje.' }
    ]
  },

  warmup: [
    {
      prompt: '🌎 BOSS: Qual afirmação sobre o Brasil está CORRETA?',
      options: [
        { text: 'O Brasil faz fronteira com todos os países da América do Sul',                     correct: false },
        { text: 'O Brasil tem 8,5 milhões de km², é o 5º maior país do mundo e banha o Atlântico', correct: true  },
        { text: 'O Brasil está todo abaixo do Trópico de Capricórnio',                             correct: false },
        { text: 'O Brasil tem apenas 2 fusos horários',                                             correct: false }
      ],
      explanation: 'Verdades sobre o Brasil: 8,5 mi km² (5º), 7.400km de costa atlântica, faz fronteira com 10 (não todos) países. A Linha do Equador corta o norte — o Brasil está em 4 hemisférios.'
    },
    {
      prompt: '🌎 BOSS: Qual sequência causa→efeito está CORRETA?',
      options: [
        { text: 'Arco ogival → catedrais góticas → obscurantismo medieval',                        correct: false },
        { text: 'Mecanização agrícola → êxodo rural → expansão das metrópoles → favelas',          correct: true  },
        { text: 'Pré-sal → desenvolvimento industrial → fim da desigualdade social',               correct: false },
        { text: 'Chuvas amazônicas → excesso de umidade → desertificação do Nordeste',             correct: false }
      ],
      explanation: 'A sequência correta: máquinas substituem trabalhadores rurais → eles migram para as cidades → cidades crescem rápido → não há habitação suficiente para todos → favelas se expandem. Causa e efeito encadeado.'
    },
    {
      prompt: '🌎 BOSS: O "paradoxo brasileiro" é melhor descrito como:',
      options: [
        { text: 'Um país pequeno com muita população e pouca terra',                               correct: false },
        { text: '9ª economia mundial mas com desigualdade enorme — desenvolvimento sem inclusão',  correct: true  },
        { text: 'Um país com muita chuva mas com seca permanente em todo o território',            correct: false },
        { text: 'Uma nação rica em minérios mas sem indústria para processá-los',                  correct: false }
      ],
      explanation: 'O paradoxo brasileiro: PIB enorme (9º do mundo), mas IDH médio (77º), Gini altíssimo, desigualdade regional persistente. Grande riqueza coexistindo com grande pobreza — concentração histórica de renda e oportunidades.'
    }
  ],

  guidedPractice: [
    {
      prompt: '🌎 BOSS TRAP: "O Brasil é rico em água, portanto não tem problemas hídricos." Analise:',
      options: [
        { text: 'Verdadeiro — com 12% da água doce, todos os brasileiros têm acesso garantido',    correct: false },
        { text: 'Falso — a água está mal distribuída; o Nordeste semiárido tem pouca água apesar da abundância amazônica', correct: true  },
        { text: 'Verdadeiro — o governo garante água potável para 100% da população',              correct: false },
        { text: 'Falso — o Brasil tem menos água que países europeus per capita',                  correct: false }
      ],
      explanation: 'O paradoxo hídrico: 12% da água doce mundial, mas 70% fica na Amazônia (5% da população). O Nordeste tem 28% da população mas ~3% da água. Abundância global + distribuição desigual = crise regional. Solução parcial: Transposição do São Francisco.'
    },
    {
      prompt: '🌎 BOSS TRAP: Por que o desmatamento do Cerrado é uma ameaça MAIOR que o desmatamento da Amazônia para o Brasil a longo prazo?',
      options: [
        { text: 'Porque o Cerrado tem mais animais que a Amazônia',                               correct: false },
        { text: 'Porque o Cerrado é o "berço das águas" — seu desmatamento destrói as nascentes de quase todas as bacias brasileiras', correct: true  },
        { text: 'Porque o Cerrado tem mais carbono estocado que a Amazônia',                      correct: false },
        { text: 'Porque o Cerrado já está 100% desmatado enquanto a Amazônia ainda está intacta', correct: false }
      ],
      explanation: 'A Amazônia tem mais cobertura florestal, mas o Cerrado é mais estrategicamente crítico: suas nascentes alimentam 8 das 12 bacias hidrográficas brasileiras — incluindo São Francisco (Nordeste), Araguaia/Tocantins (Norte), Alto Paraná (Sul). Desmatá-lo = seca generalizada no Brasil inteiro.'
    }
  ],

  questions: [
    {
      prompt: '🌎 Integração: A posição tropical do Brasil É A CAUSA DIRETA de qual característica?',
      options: [
        { text: 'O alto nível de industrialização do Sudeste',                                    correct: false },
        { text: 'A enorme biodiversidade — clima quente e úmido favorece espécies diversas',      correct: true  },
        { text: 'A desigualdade social entre as regiões',                                          correct: false },
        { text: 'O domínio agrícola sobre os demais setores econômicos',                          correct: false }
      ],
      explanation: 'Posição tropical → alta incidência solar + calor + chuvas = condições ideais para diversidade biológica. O Brasil tem a maior biodiversidade do planeta — resultado direto de sua posição geográfica, não de política ou economia.'
    },
    {
      prompt: '🌎 Análise: Por que o Rio São Francisco é chamado de "Rio da Integração Nacional"?',
      options: [
        { text: 'Por ser o único rio que passa por todas as 5 regiões do Brasil',                correct: false },
        { text: 'Por ser o único rio perene (não seca) que cruza o semiárido nordestino',        correct: true  },
        { text: 'Por ter sido o principal transporte de escravizados no período colonial',       correct: false },
        { text: 'Por integrar economicamente o Sul e o Norte do Brasil',                         correct: false }
      ],
      explanation: 'O São Francisco é o único grande rio PERENE (nunca seca) que corta o semiárido — conectando regiões áridas ao mar. Serve como via de transporte, irrigação e abastecimento em regiões onde toda outra água é sazonal. Literalmente integra o Nordeste ao restante do Brasil.'
    },
    {
      prompt: '🌎 Síntese: Qual conjunto de fatores explica por que São Paulo é o maior centro econômico da América Latina?',
      options: [
        { text: 'Clima subtropical + maior população + pré-sal',                                  correct: false },
        { text: 'Ciclo do café (capital) + industrialização + imigração europeia/japonesa + infraestrutura acumulada', correct: true  },
        { text: 'Maior cidade = mais comércio = mais riqueza automaticamente',                     correct: false },
        { text: 'Política do governo federal que concentrou investimentos propositalmente em SP',  correct: false }
      ],
      explanation: 'SP cresceu por acumulação histórica: café (sécs. XIX-XX) gerou capital → capital financiou indústria → imigração europeia/japonesa trouxe mão de obra qualificada → indústria atraiu serviços → infraestrutura (portos, ferrovias, aeroportos) atraiu mais investimento. Ciclo virtuoso cumulativo.'
    },
    {
      prompt: '🌎 Comparação: O que diferencia o clima do Norte do Brasil do clima do Sul?',
      options: [
        { text: 'O Norte tem menos chuvas que o Sul por ser mais interior',                       correct: false },
        { text: 'O Norte tem clima equatorial (quente, úmido, sem estação seca); Sul tem subtropical (4 estações, frio no inverno)', correct: true  },
        { text: 'O Norte tem mais altitude, portanto temperaturas mais baixas',                   correct: false },
        { text: 'O Sul é mais úmido que o Norte por estar próximo ao oceano',                     correct: false }
      ],
      explanation: 'Brasil em 2 extremos: Norte (Amazônia, próximo ao Equador) — equatorial: quente o ano todo, chuvas regulares, sem inverno. Sul (RS, SC, PR, abaixo do Trópico) — subtropical: 4 estações, geadas no inverno, neve possível. Diversidade climática num único país.'
    },
    {
      prompt: '🌎 Avaliação: Por que o Brasil é ao mesmo tempo um gigante econômico e um país com grande desigualdade?',
      options: [
        { text: 'Porque o governo distribui mal a renda — a solução seria apenas mais impostos',  correct: false },
        { text: 'Herança histórica de escravidão + latifúndio + industrialização concentrada criaram estrutura de desigualdade persistente', correct: true  },
        { text: 'Porque o Brasil tem muitos recursos naturais que criam riqueza mas não empregos', correct: false },
        { text: 'Porque a corrupção política desvia toda a riqueza gerada',                       correct: false }
      ],
      explanation: 'A desigualdade brasileira é estrutural e histórica: 300 anos de escravidão criaram classe pobre sem capital. Latifúndios concentraram terra. Industrialização concentrada no Sudeste criou desigualdade regional. Cada camada de desigualdade se sobrepôs às anteriores — não é apenas um problema de má gestão atual.'
    },
    {
      prompt: '🌎 Conexão global: Como a "corrida climática mundial" afeta a posição do Brasil no cenário internacional?',
      options: [
        { text: 'Negativamente — o Brasil precisa reduzir agropecuária para cumprir metas de carbono', correct: false },
        { text: 'Positivamente — o Brasil tem florestas (créditos de carbono), energia renovável e sol para biocombustíveis e energia solar', correct: true  },
        { text: 'Não afeta — o Brasil não assinou os acordos climáticos internacionais',           correct: false },
        { text: 'Negativamente — o aquecimento global vai destruir a agricultura brasileira',      correct: false }
      ],
      explanation: 'A crise climática é uma oportunidade para o Brasil: mata preservada = créditos de carbono; 65% energia hidrelétrica + 14% eólica = matriz limpa; biocombustíveis (etanol de cana); capacidade solar enorme. O Brasil tem os ativos do século XXI — se os preservar.'
    },
    {
      prompt: '🌎 Julgamento: A construção de Brasília no interior (1960) foi uma decisão acertada?',
      options: [
        { text: 'Não — desperdiçou dinheiro e gerou problemas urbanos graves em Brasília',         correct: false },
        { text: 'Sim — integrou o Centro-Oeste, criou um polo de desenvolvimento interior e reduziu o domínio do litoral', correct: true  },
        { text: 'Não — o Rio de Janeiro deveria ter continuado como capital por ter melhor infraestrutura', correct: false },
        { text: 'Sim — mas apenas por razões militares (afastar a capital do litoral vulnerável)', correct: false }
      ],
      explanation: 'Brasília foi uma decisão estratégica acertada: integrou o Centro-Oeste (antes isolado), criou polo de desenvolvimento que atraiu migrantes e investimentos, estabeleceu a capital em posição central no território. O custo foi alto, mas os benefícios regionais de longo prazo foram enormes — GO e MT hoje lideram o agronegócio nacional.'
    },
    {
      prompt: '🌎 Síntese final: Qual é o maior DESAFIO geográfico-ambiental do Brasil no século XXI?',
      options: [
        { text: 'Encontrar novas reservas de petróleo para substituir o pré-sal quando se esgotar', correct: false },
        { text: 'Conciliar desenvolvimento econômico (agronegócio) com preservação dos biomas e equilíbrio climático', correct: true  },
        { text: 'Conquistar territórios de outros países para ter mais terras agricultáveis',       correct: false },
        { text: 'Transferir a população do Nordeste para o Centro-Oeste para equilibrar a densidade', correct: false }
      ],
      explanation: 'O dilema central do Brasil século XXI: a riqueza atual vem do agronegócio (que desmata), mas a riqueza futura depende de biomas intactos (água, clima, biodiversidade, créditos de carbono). Encontrar o equilíbrio entre exportar commodities e preservar os sistemas naturais que tornam o Brasil possível.'
    },
    {
      prompt: '🌎 Aplicação: Um estudante quer explicar por que o Nordeste tem seca, mas o Norte não. Qual explicação está CORRETA?',
      options: [
        { text: 'O Norte está mais perto do oceano, então tem mais umidade',                      correct: false },
        { text: 'O Nordeste fica na "sombra de chuva" das correntes quentes; o Norte tem a floresta que gera seu próprio ciclo de chuvas', correct: true  },
        { text: 'O Nordeste tem mais altitude, portanto as chuvas não chegam',                    correct: false },
        { text: 'O Norte está mais ao sul, onde as chuvas são mais frequentes',                   correct: false }
      ],
      explanation: 'O Nordeste semiárido recebe menos chuva por: 1) estar na faixa de subsidência do ar tropical (ar seco desce); 2) Corrente Fria de Benguela resfria o Atlântico Sul, reduzindo evaporação. O Norte tem a Amazônia que gera seu próprio ciclo de chuvas (os "rios voadores") — a floresta produz sua própria umidade.'
    },
    {
      prompt: '🌎 QUESTÃO FINAL DO BOSS: Qual afirmação representa melhor a relação entre Brasil e meio ambiente?',
      options: [
        { text: 'O Brasil deve preservar tudo e não desenvolver economicamente',                   correct: false },
        { text: 'O desenvolvimento sustentável é possível: usar os recursos naturais sem destruir os sistemas que os sustentam', correct: true  },
        { text: 'O Brasil deve desmatar tudo para maximizar a produção agrícola e eliminar a pobreza', correct: false },
        { text: 'O Brasil não tem escolha — ou preserva ou desenvolve, não é possível os dois',   correct: false }
      ],
      explanation: 'A síntese da questão ambiental brasileira: desenvolvimento sustentável é a única resposta viável. Preservar os biomas não é o oposto do crescimento — é sua precondição. Água limpa, clima estável, solo fértil, biodiversidade: são os fundamentos do agronegócio e da vida humana no Brasil.'
    }
  ],

  adaptiveReview: [
    {
      prompt: 'DIFÍCIL: Se você tivesse que identificar O ÚNICO fato mais importante sobre o Brasil para entender todos os outros, qual seria?',
      options: [
        { text: 'O Brasil é o 5º maior país do mundo — tamanho explica tudo',                    correct: false },
        { text: 'A diversidade — de biomas, climas, culturas, etnias — é o que torna o Brasil único e complexo ao mesmo tempo', correct: true  },
        { text: 'O PIB do Brasil é o 9º do mundo — a economia explica todas as diferenças',      correct: false },
        { text: 'A história colonial portuguesa determina tudo o que o Brasil é hoje',            correct: false }
      ],
      explanation: 'A diversidade é o fio condutor: biomas variados → climas variados → populações adaptadas → economias diferentes → desigualdades regionais → desafios políticos distintos. Entender o Brasil é entender que não existe "um Brasil" — são muitos Brasis coexistindo. A complexidade é a característica mais definitiva do país.'
    }
  ],

  rewards: { xp: 200, gems: 20, badge: '🌎 Derrotou o Geógrafo Supremo' },
  completionMessage: '🌎 EXTRAORDINÁRIO! Você derrotou o Geógrafo Supremo — você domina o Brasil de ponta a ponta!',
  nextStage: 'geo_sfinal'
};

window.GEO_SBOSS = GEO_SBOSS;
