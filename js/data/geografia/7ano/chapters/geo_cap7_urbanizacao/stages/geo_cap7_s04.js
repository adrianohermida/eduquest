/**
 * GEO CAP7 STAGE 04 — Projeções Populacionais e Desafios Futuros
 * BNCC: EF07GE05, EF07GE07 | Tópico 9
 */

const GEO_CAP7_S04 = {
  id: 'geo_cap7_s04',
  title: 'Projeções Populacionais e Desafios Futuros',
  icon: '🔮',
  difficulty: 'hard',
  estimatedTime: 15,

  learningObjectives: [
    'Interpretar projeções populacionais do IBGE e seus cenários',
    'Analisar os desafios do envelhecimento para saúde, previdência e economia',
    'Relacionar sustentabilidade ambiental com crescimento populacional',
    'Compreender o papel da imigração no futuro demográfico do Brasil',
    'Avaliar políticas populacionais com embasamento ético e científico'
  ],

  summary: {
    readTime: 4,
    content: [
      {
        icon: '🔮',
        title: 'O Brasil em 2042 — e depois',
        text: 'O IBGE projetou o futuro populacional do Brasil com base em tendências atuais:\n\n📊 Cenário base:\n• 2030: ~224 milhões\n• 2042: ~228 milhões (PICO)\n• 2060: ~220 milhões\n• 2100: ~185 milhões (se fertilidade continuar em 1,7)\n\nO pico ocorre quando nascimentos = mortes.\nDepois, mortes > nascimentos → declínio.\n\nO Brasil será, em 2060:\n→ País muito mais velho\n→ Com mais de 25% de idosos (> 60 anos)\n→ Com PEA menor do que a população dependente\n→ Com demanda enorme por saúde e previdência\n\n🔑 Projeção não é destino. É tendência que pode ser alterada por políticas: natalidade incentivada, imigração estruturada ou ambas.'
      },
      {
        icon: '🌱',
        title: 'Crescimento populacional e sustentabilidade',
        text: 'Durante décadas, o debate foi: "Somos muitos?"\nHoje o Brasil enfrenta o inverso: "Seremos poucos?"\n\nMas o debate sobre população e ambiente ainda é vital:\n\n• Consumo per capita importa mais que número de pessoas\n  → 1 bilhão de africanos consome menos carbono que 350M de norte-americanos\n\n• O problema não é quantidade — é modelo de produção\n  → Agronegócio extensivo destrói mais com menos gente\n\n• Cidades sustentáveis:\n  → Compactas, com transporte coletivo, energia limpa e saneamento\n  → Cidades espalhadas = mais carro, mais asfalto, mais emissão\n\n• Brasil e os ODS (Objetivos de Desenvolvimento Sustentável/ONU 2030):\n  → ODS 11: Cidades e comunidades sustentáveis\n  → ODS 3: Saúde e bem-estar\n  → ODS 10: Redução das desigualdades\n\n🔑 Sustentabilidade não é sobre ter menos pessoas. É sobre como cada pessoa produz, consome e se relaciona com o planeta.'
      },
      {
        icon: '🗺️',
        title: 'Desafios e caminhos para o Brasil',
        text: 'Três grandes desafios populacionais para o Brasil do século XXI:\n\n1. ENVELHECIMENTO:\n   → Reformas previdenciárias contínuas\n   → Expansão do cuidado geriátrico\n   → Aproveitamento do capital humano dos idosos ativos\n\n2. DESIGUALDADE ESPACIAL:\n   → Desenvolvimento regional equilibrado\n   → Cidades médias como alternativa às metrópoles\n   → Infraestrutura rural que reduza o êxodo\n\n3. IMIGRAÇÃO COMO ATIVO:\n   → Brasil pode ser destino de migrantes qualificados\n   → Integração efetiva = ganho econômico e cultural\n   → Política migratória baseada em direitos humanos\n\n🔑 O futuro do Brasil não está escrito. Depende de escolhas coletivas: quanto investimos em educação, como tratamos os que chegam, e se conseguimos transformar desafios demográficos em oportunidades de desenvolvimento.'
      }
    ],

    flashcards: [
      { q: 'Qual o pico populacional projetado para o Brasil?', a: '~228 milhões em 2042 (IBGE). Após isso, declínio gradual.' },
      { q: 'O que são os ODS?',                                 a: 'Objetivos de Desenvolvimento Sustentável — 17 metas da ONU para 2030, incluindo cidades sustentáveis e saúde.' },
      { q: 'Por que consumo per capita importa mais que quantidade de pessoas?', a: 'Um consumidor de alta renda emite muito mais carbono que dezenas de pessoas em países pobres. O modelo de consumo é mais determinante que o número.' },
      { q: 'Qual é o ODS 11?',                                  a: 'Cidades e comunidades sustentáveis — promover cidades inclusivas, seguras, resilientes e sustentáveis.' },
      { q: 'Como o Brasil pode usar a imigração para enfrentar o envelhecimento?', a: 'Atraindo migrantes jovens e qualificados que ampliam a PEA, pagam impostos e complementam o sistema previdenciário.' },
      { q: 'O que é "janela demográfica"?',                     a: 'Período histórico em que a PEA é muito maior que a população dependente — oportunidade para acelerar o desenvolvimento.' }
    ],

    mnemonics: [
      { trigger: 'Pico do Brasil',              memory: '"228 em 2042. Dois anos depois dos 40 anos de 2002. Pense: sua geração no auge — depois declínio."' },
      { trigger: '3 desafios do Brasil futuro', memory: '"EID = Envelhecimento + desIgualdade espacial + imigração como Dividendo. Três problemas que são também três oportunidades."' },
      { trigger: 'ODS 11',                       memory: '"11 = onze letras em SUSTENTÁVEL. Cidades sustentáveis = o ODS que mais fala com o Brasil urbano de hoje."' }
    ],

    miniReview: [
      { q: 'Por que projeção não é destino?',
        a: 'Projeção é tendência baseada nos dados de hoje. Políticas de incentivo à natalidade, imigração estruturada ou mudanças culturais podem alterar o rumo. A Coreia do Sul está revisando suas projeções por programas pró-família. O futuro é construção coletiva.' },
      { q: 'O que diferencia "crescimento sustentável" de "crescimento ilimitado"?',
        a: 'Crescimento sustentável respeita os limites ecológicos: usa recursos na velocidade que o planeta regenera, gera resíduos que o ambiente absorve. Crescimento ilimitado é inviável em planeta finito — e é o modelo atual da maioria das economias.' }
    ]
  },

  warmup: [
    {
      prompt: 'Segundo o IBGE, quando o Brasil atingirá seu pico populacional?',
      options: [
        { text: '2030',  correct: false },
        { text: '2042',  correct: true  },
        { text: '2060',  correct: false },
        { text: '2100',  correct: false }
      ],
      explanation: '~228 milhões em 2042. Após esse pico, com fertilidade abaixo da reposição (1,7 vs. 2,1), os nascimentos serão superados pelas mortes e a população começará a declinar. É um divisor histórico: primeira vez na história que o Brasil terá declínio populacional estrutural.'
    },
    {
      prompt: 'No contexto demográfico, o que significa dizer que o Brasil "chegará velho antes de ficar rico"?',
      options: [
        { text: 'O Brasil terá mais PIB do que idosos',                                               correct: false },
        { text: 'O envelhecimento chegará antes que o país tenha infraestrutura suficiente para cuidar dos idosos', correct: true  },
        { text: 'Os brasileiros de hoje ficarão ricos quando forem velhos',                           correct: false },
        { text: 'A riqueza brasileira diminuirá à medida que a população envelhece',                 correct: false }
      ],
      explanation: 'O Brasil envelhecerá mais rápido que países ricos envelheceram — sem ter construído, no mesmo ritmo, a infraestrutura previdenciária, de saúde geriátrica e de cuidados. A pressão sobre o INSS e o SUS será enorme antes que o país tenha PIB per capita suficiente para cobri-la. Esse é o "armadilha do envelhecimento acelerado com renda insuficiente".'
    },
    {
      prompt: 'Qual é o ODS (Objetivo de Desenvolvimento Sustentável) da ONU diretamente relacionado a cidades sustentáveis?',
      options: [
        { text: 'ODS 3 (Saúde)',            correct: false },
        { text: 'ODS 11 (Cidades)',          correct: true  },
        { text: 'ODS 7 (Energia)',           correct: false },
        { text: 'ODS 13 (Clima)',            correct: false }
      ],
      explanation: 'ODS 11: "Tornar as cidades e os assentamentos humanos inclusivos, seguros, resilientes e sustentáveis." Metas incluem moradia segura, transporte público, planejamento inclusivo e proteção de patrimônio cultural e natural. É o ODS mais diretamente ligado aos desafios urbanos brasileiros.'
    }
  ],

  guidedPractice: [
    {
      prompt: '🔍 DICA: Pense em consumo per capita vs. número de pessoas.\n\nPor que afirmar que "a superpopulação é a causa do aquecimento global" é uma simplificação problemática?',
      options: [
        { text: 'Porque não há relação entre população e emissões de carbono',                          correct: false },
        { text: 'Porque os maiores emissores per capita são países ricos com população menor — o modelo de consumo importa mais que o número', correct: true  },
        { text: 'Porque o aquecimento global é causado apenas por indústrias, não por pessoas',        correct: false },
        { text: 'Porque África e Ásia emitem tanto quanto Europa e América do Norte',                  correct: false }
      ],
      explanation: 'Um norte-americano médio emite ~16 toneladas de CO2/ano. Um nigeriano médio emite ~0,7 toneladas. A Nigéria tem 220 milhões de pessoas; os EUA têm 330 milhões — mas os EUA emitem 5x mais carbono total. Culpar "superpopulação" em países africanos e asiáticos enquanto se ignora o consumo excessivo dos países ricos é desviar a responsabilidade.'
    },
    {
      prompt: '🔍 DICA: Conecte envelhecimento + imigração como solução parcial.\n\nSe o Brasil implementar política de atração de 200.000 imigrantes jovens qualificados por ano a partir de 2030, qual seria o benefício mais imediato?',
      options: [
        { text: 'Redução da natalidade, pois imigrantes têm menos filhos',                            correct: false },
        { text: 'Ampliação da PEA e da base contributiva do sistema previdenciário',                  correct: true  },
        { text: 'Redução da expectativa de vida média por maior diversidade genética',                correct: false },
        { text: 'Aumento da densidade demográfica das áreas rurais',                                  correct: false }
      ],
      explanation: '200.000 jovens adultos/ano = mais trabalhadores na PEA → mais INSS recolhido → menos pressão sobre aposentadorias. Em 10 anos: 2 milhões de contribuintes adicionais. Para um Brasil com ~228M, isso não resolve sozinho, mas atenua o deficit. É a lógica que Canadá, Alemanha e Austrália já usam para compensar seu envelhecimento.'
    }
  ],

  questions: [
    {
      prompt: 'O declínio populacional após 2042 será um problema ou uma oportunidade para o Brasil? Qual resposta mais equilibrada?',
      options: [
        { text: 'Apenas problema — menos gente significa menos desenvolvimento',                         correct: false },
        { text: 'Tanto desafio (menos PEA, pressão previdenciária) quanto oportunidade (se bem gerido com mais recursos por pessoa)', correct: true  },
        { text: 'Apenas oportunidade — menos gente resolve o desemprego e a pressão ambiental',          correct: false },
        { text: 'Nenhum dos dois — projeções demográficas nunca se realizam'  ,                         correct: false }
      ],
      explanation: 'O declínio é ambivalente: menos jovens = pressão sobre previdência e mercado de trabalho. Mas também: menos pressão sobre recursos naturais, potencial de maior renda per capita se o PIB se mantiver, e oportunidade de melhorar qualidade de vida. Países como Japão e Alemanha convivem com isso. O resultado depende das políticas escolhidas.'
    },
    {
      prompt: 'O conceito de "cidade sustentável" pressupõe qual equilíbrio?',
      options: [
        { text: 'Máximo crescimento econômico com mínima população',                                  correct: false },
        { text: 'Serviços e infraestrutura que atendem as necessidades presentes sem comprometer as gerações futuras', correct: true  },
        { text: 'Retorno ao modelo rural para reduzir o impacto ambiental urbano',                    correct: false },
        { text: 'Proibição de novos habitantes para controlar o crescimento',                          correct: false }
      ],
      explanation: 'Cidade sustentável: desenvolvimento que atende as necessidades de hoje sem comprometer as do amanhã (Brundtland, 1987 adaptado). Na prática: transporte coletivo que reduz emissões, saneamento universal, habitação em áreas não de risco, espaços verdes, eficiência energética, gestão de resíduos. É uma visão de longo prazo — não de contenção, mas de qualidade.'
    },
    {
      prompt: 'Em 2060, o Brasil terá cerca de 25% de idosos (> 60 anos). Qual impacto direto sobre os sistemas de saúde?',
      options: [
        { text: 'Redução de custos, pois idosos ficam mais em casa',                                    correct: false },
        { text: 'Aumento exponencial da demanda por internações, medicamentos crônicos e cuidados paliativos', correct: true  },
        { text: 'Estabilidade, pois idosos usam menos o SUS que crianças',                             correct: false },
        { text: 'Melhora, pois idosos têm plano de saúde privado em sua maioria',                      correct: false }
      ],
      explanation: '25% de idosos = 55–60 milhões de pessoas > 60 anos. Idosos têm custo de saúde 3–5x maior por capita: mais cirurgias ortopédicas, controle de doenças crônicas (diabetes, hipertensão, Alzheimer), reabilitação e cuidados paliativos. O SUS, já sobrecarregado hoje, precisará de reforma estrutural para absorver essa demanda sem colapsar.'
    },
    {
      prompt: 'Como os Objetivos de Desenvolvimento Sustentável (ODS) se relacionam com os desafios populacionais brasileiros?',
      options: [
        { text: 'Os ODS são irrelevantes para países em desenvolvimento como o Brasil',                    correct: false },
        { text: 'Fornecem metas concretas para enfrentar envelhecimento, urbanização e desigualdade com visão de longo prazo', correct: true  },
        { text: 'São apenas para países ricos que já resolveram seus problemas populacionais',             correct: false },
        { text: 'Conflitam com o crescimento econômico necessário para o Brasil',                         correct: false }
      ],
      explanation: 'Os ODS (ONU 2030) são um mapa de desafios que o Brasil conhece bem: ODS 11 (cidades sustentáveis), ODS 3 (saúde para todos), ODS 10 (redução de desigualdades), ODS 1 (fim da pobreza). São metas negociadas globalmente que dão direção às políticas públicas — não são obrigação, mas compromisso com o futuro.'
    },
    {
      prompt: 'Por que a "janela demográfica" brasileira está se fechando, e o que isso significa?',
      options: [
        { text: 'Porque a imigração está diminuindo, reduzindo a diversidade',                           correct: false },
        { text: 'Porque a PEA está crescendo mais lentamente que os dependentes — o bônus demográfico está se encerrando', correct: true  },
        { text: 'Porque as janelas das casas brasileiras são de má qualidade',                           correct: false },
        { text: 'Porque a taxa de desemprego está aumentando para jovens',                              correct: false }
      ],
      explanation: 'A janela demográfica é o período em que a PEA (15–64) é maior que os dependentes (jovens + idosos). Com a queda da natalidade e o envelhecimento, os idosos aumentam e os jovens diminuem — a PEA relativa encolhe. O "bônus" de ter muitos trabalhadores para poucos dependentes está se encerrando. O Brasil precisa aproveitar o que resta dessa janela para investir em produtividade.'
    },
    {
      prompt: 'Qual argumento ético fundamenta a ideia de que políticas populacionais coercitivas são inaceitáveis?',
      options: [
        { text: 'Porque reduzem o crescimento econômico',                                                correct: false },
        { text: 'Porque a autonomia reprodutiva é direito humano — o Estado não pode decidir quantos filhos alguém terá', correct: true  },
        { text: 'Porque são politicamente impopulares',                                                 correct: false },
        { text: 'Porque são ineficazes — as pessoas ignoram as leis',                                   correct: false }
      ],
      explanation: 'A autonomia reprodutiva (direito de decidir se, quando e quantos filhos ter) é reconhecida como direito humano desde a Conferência do Cairo (1994). A política de "filho único" da China é o exemplo mais notório de violação — com abortos forçados, esterilizações compulsórias e consequências sociais graves. Políticas eficazes são voluntárias: educação, acesso à saúde reprodutiva e igualdade de gênero.'
    },
    {
      prompt: 'Como uma redução de 1/3 na mortalidade infantil poderia afetar a pirâmide etária do Brasil?',
      options: [
        { text: 'Alargaria a base, pois mais bebês sobreviveriam',                                      correct: false },
        { text: 'Não afetaria a pirâmide, pois mortalidade infantil já é baixa',                       correct: false },
        { text: 'Alargaria a base no curto prazo (mais sobreviventes), mas no longo prazo a fertilidade tenderia a cair ainda mais', correct: true  },
        { text: 'Envelheceria a pirâmide imediatamente',                                               correct: false }
      ],
      explanation: 'Paradoxo demográfico: reduzir mortalidade infantil inicialmente alarga a base (mais bebês sobrevivendo). Mas historicamente, quando os pais percebem que seus filhos sobreviverão, têm menos filhos. É a "revolução epidemiológica-reprodutiva": países que reduziram mortalidade infantil invariavelmente reduziram a fertilidade nas décadas seguintes. Longo prazo = base mais estreita ainda.'
    },
    {
      prompt: 'Comparando Brasil (2042) e Japão (hoje): quais semelhanças e diferenças no processo de envelhecimento?',
      options: [
        { text: 'São idênticos — o Japão é o modelo exato que o Brasil seguirá',                       correct: false },
        { text: 'Ambos enfrentam envelhecimento com baixa fertilidade, mas Japão tem maior renda per capita para enfrentar os custos', correct: true  },
        { text: 'O Brasil envelhece mais devagar que o Japão por causa da miscigenação',              correct: false },
        { text: 'O Japão não tem problema de envelhecimento pois tem mais jovens imigrantes',         correct: false }
      ],
      explanation: 'Semelhança: ambos com fertilidade abaixo da reposição (~1,2 Japão vs. 1,7 Brasil) e envelhecimento acelerado. Diferença crucial: o Japão tem IDH muito mais alto, sistema de saúde robusto, previdência estruturada e maior renda per capita para absorver os custos. O Brasil chega ao mesmo desafio com menos recursos institucionais e maior desigualdade — o "envelhecer sem riqueza" é o risco central.'
    },
    {
      prompt: 'Uma projeção do IBGE prevê redução de 10% da população brasileira até 2100. Qual impacto sobre a densidade demográfica média do Brasil?',
      options: [
        { text: 'A densidade aumenta, pois menos gente no mesmo espaço significa mais produção',         correct: false },
        { text: 'A densidade média cai, mas a distribuição espacial pode se tornar mais equilibrada',   correct: true  },
        { text: 'A densidade não muda, pois a área do país aumenta proporcionalmente',                  correct: false },
        { text: 'A densidade aumenta dramaticamente por concentração em São Paulo',                     correct: false }
      ],
      explanation: 'Mesma área (8,5 M km²), menos gente (~185M vs ~228M) = densidade média menor (~22 vs ~27 hab/km²). Mas a distribuição espacial pode ser mais importante: se o declínio ocorrer mais nas metrópoles (onde o custo de vida é alto) e menos nas cidades médias, o sistema urbano pode se tornar mais equilibrado — com menos macrocefalia e mais distribuição regional.'
    },
    {
      prompt: '(VESTIBULAR) "Investir em educação de qualidade é a melhor política demográfica." Qual argumento sustenta essa tese?',
      options: [
        { text: 'Educação aumenta a fertilidade pela segurança econômica que proporciona',                 correct: false },
        { text: 'Educação qualificada amplia a produtividade da PEA, compensando sua futura redução numérica', correct: true  },
        { text: 'Educação reduz a expectativa de vida pela competição no mercado de trabalho',             correct: false },
        { text: 'Educação atrai mais imigrantes qualificados de outros países',                            correct: false }
      ],
      explanation: 'A lógica demográfico-econômica: se haverá menos trabalhadores no futuro (PEA menor), o que os torna mais produtivos é a qualidade — não a quantidade. Um trabalhador com educação superior produz muito mais valor que um sem qualificação. Investir em educação hoje = aproveitar melhor cada membro da PEA futura = compensar parcialmente a redução numérica. É política demográfica indireta e muito mais eficaz que incentivos à natalidade.'
    }
  ],

  adaptiveReview: [
    {
      prompt: 'DIFÍCIL: Analise o cenário: Brasil 2060 — 220M de hab., 25% idosos, PIB per capita de US$20.000. Como isso compara com o Japão atual (125M hab., 30% idosos, PIB per capita US$35.000)?',
      options: [
        { text: 'O Brasil de 2060 terá menos idosos e mais renda — condição melhor',                 correct: false },
        { text: 'O Brasil de 2060 terá envelhecimento semelhante ao Japão atual, mas com 40% menos renda per capita — desafio muito maior', correct: true  },
        { text: 'Não é possível comparar pois são países com tamanhos populacionais diferentes',     correct: false },
        { text: 'O Brasil terá vantagem por ter crescimento econômico mais acelerado que o Japão',  correct: false }
      ],
      explanation: '25% idosos (Brasil 2060) ≈ 30% (Japão hoje) — envelhecimentos comparáveis. Mas renda per capita: Brasil $20k vs Japão $35k = 40% menos recurso por pessoa para financiar saúde e previdência. Isso torna o desafio brasileiro estruturalmente mais difícil — o mesmo problema demográfico com menos capacidade fiscal para enfrentá-lo. A janela de oportunidade está agora: investir em produtividade antes que a PEA encolha.'
    },
    {
      prompt: 'DIFÍCIL: Se o Brasil adotar simultaneamente 3 políticas: (1) incentivo à natalidade via subsídios, (2) atração de imigrantes qualificados, e (3) reforma previdenciária que adie a aposentadoria. Qual combinação seria mais eficaz contra o envelhecimento?',
      options: [
        { text: 'Apenas (3) — a reforma previdenciária resolve tudo sem mudanças demográficas',                         correct: false },
        { text: 'As três juntas — combinam aumento de PEA futura (1), PEA presente (2) e extensão do período contributivo (3)', correct: true  },
        { text: 'Apenas (1) — incentivo à natalidade é a única solução definitiva',                                      correct: false },
        { text: 'Apenas (2) — imigração é a solução mais rápida e suficiente',                                          correct: false }
      ],
      explanation: 'Cada política atua em uma dimensão temporal diferente: (1) gera mais PEA daqui a 20+ anos (bebês de hoje trabalham em 2045+); (2) amplia a PEA imediatamente (imigrantes adultos já trabalham); (3) estende o período de contribuição de quem já está na PEA. A combinação cobre o curto, médio e longo prazo — sem depender de uma única estratégia. É o que fazem os países com melhor gestão do envelhecimento.'
    }
  ],

  rewards: { xp: 140, gems: 14, badge: '🔮 Visionário Demográfico' },
  completionMessage: '🔮 Você pensa o futuro do Brasil! De projeções a políticas, de sustentabilidade a imigração — a Geografia é o mapa da humanidade.',
  nextStage: 'geo_cap7_sboss'
};

window.GEO_CAP7_S04 = GEO_CAP7_S04;
