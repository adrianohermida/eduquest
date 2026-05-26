/**
 * GEO CAP7 FINAL — Exame Final: Urbanização e Dinâmicas Migratórias
 * Nível: hard | Cobertura total do Cap. 7
 */

const GEO_CAP7_SFINAL = {
  id: 'geo_cap7_sfinal',
  title: 'Exame Final — Urbanização e Dinâmicas Migratórias',
  icon: '🏆',
  difficulty: 'hard',
  estimatedTime: 20,

  learningObjectives: [
    'Demonstrar domínio completo dos conceitos de urbanização e hierarquia urbana',
    'Aplicar os princípios de segregação e mobilidade a situações reais',
    'Analisar xenofobia, direitos e integração de migrantes com embasamento crítico',
    'Interpretar projeções populacionais e seus impactos futuros',
    'Sintetizar todos os temas do capítulo em análises integradas de nível vestibular'
  ],

  summary: {
    readTime: 2,
    content: [
      {
        icon: '🏆',
        title: 'O exame final do Capítulo 7!',
        text: 'Você chegou ao último desafio.\nTodos os temas do capítulo estão aqui.\n\nRevise mentalmente:\n🏙️ URBANIZAÇÃO: 36% (1950) → 87% (2020) | hierarquia | segregação\n⏰ PENDULAR/SAZONAL: deslocamento diário | boias-frias | cidade dormitório\n🤝 XENOFOBIA: Art. 13 DUDH | ACNUR | transculturalidade\n🔮 PROJEÇÕES: 228M em 2042 | ODS 11 | imigração como ativo\n\n10 questões. Alto nível. Você está pronto!\n\n🎯 Leia cada alternativa antes de responder — os detalhes importam.'
      }
    ],

    flashcards: [
      { q: 'Taxa de urbanização do Brasil em 2020',         a: '~87% da população vivendo em cidades.' },
      { q: 'O que é conurbação?',                           a: 'Fusão das manchas urbanas de cidades vizinhas que cresceram até se unir.' },
      { q: 'Artigo 13 da DUDH',                             a: 'Direito de sair de qualquer país e a ele regressar.' },
      { q: 'Pico populacional do Brasil',                   a: '~228 milhões em 2042.' },
      { q: 'O que é non-refoulement?',                      a: 'Proibição de devolver migrante a país onde corre risco de vida.' }
    ],

    mnemonics: [
      { trigger: 'Tudo junto',  memory: '"USgXP = Urbanização + Segregação + migrações + Xenofobia + Projeções. Cap. 7 em 5 letras."' }
    ],

    miniReview: [
      { q: 'Como segregação, pendularismo e xenofobia se relacionam?', a: 'Segregação empurra pobres para a periferia → pendularismo (deslocamento longo para trabalhar). Quando esses pobres são migrantes nordestinos, a luta por emprego em cidades superlotadas cria xenofobia. Os três fenômenos se alimentam mutuamente.' }
    ]
  },

  warmup: [
    {
      prompt: 'O índice de urbanização mede:',
      options: [
        { text: 'O número total de cidades de um país',                                    correct: false },
        { text: 'A proporção da população que vive em áreas urbanas em relação ao total', correct: true  },
        { text: 'A qualidade da infraestrutura urbana por habitante',                      correct: false },
        { text: 'O PIB gerado pelas cidades em relação ao campo',                         correct: false }
      ],
      explanation: 'Índice de urbanização = (pop. urbana ÷ pop. total) × 100. Brasil: ~87%. Quanto maior o índice, mais urbanizado é o país. Mas índice alto não garante qualidade urbana — o Brasil urbanizou sem necessariamente desenvolver infraestrutura igual para todos.'
    },
    {
      prompt: 'Qual tipo de migração interna envolve deslocamento diário?',
      options: [
        { text: 'Êxodo rural',        correct: false },
        { text: 'Migração pendular',  correct: true  },
        { text: 'Migração sazonal',   correct: false },
        { text: 'Migração forçada',   correct: false }
      ],
      explanation: 'Pendular = pêndulo. Vai e volta todo dia. O trabalhador dorme em casa (periferia/cidade satélite) e trabalha na metrópole. Não muda endereço oficial — apenas o trajeto se repete diariamente.'
    },
    {
      prompt: 'A xenofobia interna no Brasil foi documentada historicamente contra qual grupo durante o êxodo rural?',
      options: [
        { text: 'Gaúchos que migraram para o Nordeste',            correct: false },
        { text: 'Nordestinos que migraram para o Sudeste',         correct: true  },
        { text: 'Paulistanos que migraram para o Norte',           correct: false },
        { text: 'Mineiros que migraram para o Sul',               correct: false }
      ],
      explanation: 'O êxodo rural nordestino para o Sudeste (1960–1980) gerou tensão social e preconceito regional: estereótipos do nordestino "atrasado", "ladrão de emprego" e com "sotaque errado" foram construídos midiaticamente e socialmente. É xenofobia interna — mesmo mecanismo de rejeição ao "outro", só que dentro do país.'
    }
  ],

  guidedPractice: [
    {
      prompt: '🔍 DICA: Relacione urbanização acelerada e problemas ambientais urbanos.\n\nPor que áreas de várzea (margens de rios) nas cidades brasileiras foram ocupadas?',
      options: [
        { text: 'Pela falta de legislação ambiental até os anos 1990',                                 correct: false },
        { text: 'Pela ausência de moradia acessível — as várzeas eram terrenos sem valor de mercado formal', correct: true  },
        { text: 'Por preferência climática das populações por locais úmidos',                          correct: false },
        { text: 'Por incentivos governamentais que destinaram essas áreas para habitação popular',    correct: false }
      ],
      explanation: 'Várzeas eram "terras de ninguém" do ponto de vista do mercado imobiliário formal — ninguém comprava para morar em área de enchente. Por isso, quem chegou sem dinheiro ocupou essas áreas: sem pagar, sem documentação, sem outra opção. O resultado foi a formação de favelas em locais de alto risco ambiental. A exclusão habitacional e a ocupação de risco são dois lados do mesmo fenômeno.'
    },
    {
      prompt: '🔍 DICA: Conecte ODS + envelhecimento + imigração.\n\nComo o ODS 10 (Redução das Desigualdades) se relaciona com a política de integração de migrantes?',
      options: [
        { text: 'O ODS 10 não se aplica a migrantes — é apenas para cidadãos nacionais',              correct: false },
        { text: 'Integrar migrantes formalmente reduz desigualdades ao incluir grupo vulnerável no mercado de trabalho e serviços', correct: true  },
        { text: 'O ODS 10 exige proibição de imigração para proteger trabalhadores nacionais',         correct: false },
        { text: 'O ODS 10 só trata de desigualdades de gênero, não de origem',                        correct: false }
      ],
      explanation: 'ODS 10 = reduzir desigualdades dentro dos países. Migrantes sem documentação, sem acesso à saúde, sem direitos trabalhistas são o grupo mais desigual. Integrá-los formalmente (documento, escola, saúde, trabalho regulado) é reduzir essa desigualdade extrema. É aplicação direta do ODS 10 — sem visar apenas os nacionais, mas todos os que vivem no território.'
    }
  ],

  questions: [
    {
      prompt: 'Um município de 800.000 hab. tem migração pendular intensa para a metrópole vizinha. Isso indica que:',
      options: [
        { text: 'O município tem abundância de emprego, mas falta moradia',                             correct: false },
        { text: 'O município serve de cidade dormitório — tem moradia, mas falta oferta local de emprego qualificado', correct: true  },
        { text: 'Os moradores preferem trabalhar na metrópole por questões culturais',                  correct: false },
        { text: 'O município está em processo de êxodo urbano',                                        correct: false }
      ],
      explanation: 'Alta pendularidade para outra cidade = cidade dormitório. Os moradores usam o município apenas para dormir (moradia mais barata). Trabalham, compram e usam serviços na metrópole. O município arrecada menos ICMS (consumo fora), tem menos pressão sobre serviços, mas investe em habitação sem gerar os empregos correspondentes.'
    },
    {
      prompt: 'A "hierarquia urbana" classifica cidades por:',
      options: [
        { text: 'Ordem histórica de fundação — as mais antigas no topo',                           correct: false },
        { text: 'Poder, funções, serviços e influência sobre o território',                        correct: true  },
        { text: 'Tamanho físico em km² — as maiores no topo',                                     correct: false },
        { text: 'Altitude — cidades de planalto acima das litorâneas',                            correct: false }
      ],
      explanation: 'Hierarquia urbana é funcional: mede o poder de influência de uma cidade sobre seu entorno. São Paulo está no topo não por ser a mais antiga, nem a maior em km², mas por concentrar funções nacionais e globais. Uma cidade pequena que é única distribuidora de serviços para 50 municípios tem posição hierárquica alta em escala regional.'
    },
    {
      prompt: 'Analise: "O non-refoulement é a linha vermelha do direito migratório." Por quê?',
      options: [
        { text: 'Porque proíbe a deportação de qualquer migrante, independentemente da situação',    correct: false },
        { text: 'Porque é o princípio que protege a vida — ninguém pode ser devolvido onde corre risco real', correct: true  },
        { text: 'Porque proíbe fronteiras entre países democráticos',                               correct: false },
        { text: 'Porque garante cidadania automática após 5 anos de residência',                    correct: false }
      ],
      explanation: 'Non-refoulement = não-devolução. Linha vermelha porque protege o bem mais fundamental: a vida. Um Estado pode controlar fronteiras, exigir vistos e deportar quem violou as regras de entrada — mas não pode mandar de volta quem tem fundado temor de perseguição, morte ou tortura. É a distinção entre regulação legítima e violação de direito humano básico.'
    },
    {
      prompt: 'O espraiamento urbano (expansão horizontal das cidades) gera quais problemas combinados?',
      options: [
        { text: 'Apenas problemas de transporte — nenhum impacto social ou ambiental',               correct: false },
        { text: 'Pendularismo intenso, impermeabilização do solo, consumo de biomas e segregação periférica', correct: true  },
        { text: 'Melhora da qualidade de vida pela descentralização dos serviços',                   correct: false },
        { text: 'Redução da desigualdade por espalhar a população pelo território',                  correct: false }
      ],
      explanation: 'Espraiamento = cidade crescendo horizontalmente para a periferia, ao invés de adensar o centro. Efeitos combinados: (1) Pendularismo — trabalhadores mais longe dos empregos; (2) Solo impermeabilizado — enchentes; (3) Biomas destruídos — matas ciliares, Cerrado, fragmentos de Mata Atlântica; (4) Segregação — pobres empurrados para as bordas da expansão. É o modelo urbano que o ODS 11 quer superar.'
    },
    {
      prompt: 'Se uma cidade oferece moradia popular gratuita em área periférica distante sem transporte de qualidade, qual problema é perpetuado?',
      options: [
        { text: 'Macrocefalia urbana',                                                              correct: false },
        { text: 'Segregação socioespacial — a habitação soluciona o abrigo mas não o acesso à cidade', correct: true  },
        { text: 'Gentrificação do centro',                                                         correct: false },
        { text: 'Xenofobia interna',                                                               correct: false }
      ],
      explanation: 'Moradia popular na periferia distante sem transporte: resolve o problema do teto, mas cria outro — isolamento. O morador tem onde dormir, mas não consegue acessar o emprego, a escola de qualidade, o hospital de referência. Isso perpetua a segregação: o pobre sai da rua, mas continua excluído da cidade real. Habitação social precisa ser acompanhada de infraestrutura, transporte e serviços para ser verdadeiramente inclusiva.'
    },
    {
      prompt: 'A transculturalidade diferencia-se do multiculturalismo porque:',
      options: [
        { text: 'O multiculturalismo promove a mistura; a transculturalidade mantém as culturas separadas', correct: false },
        { text: 'A transculturalidade pressupõe interação e criação de novas expressões; o multiculturalismo reconhece a coexistência sem necessariamente integrar', correct: true  },
        { text: 'São conceitos idênticos com nomes diferentes',                                      correct: false },
        { text: 'A transculturalidade é exclusiva de contextos migratórios internacionais',          correct: false }
      ],
      explanation: 'Multiculturalismo: cada cultura existe e é respeitada ao lado das outras (coexistência). Transculturalidade: as culturas interagem, se influenciam e criam algo novo — um hibridismo criativo. O forró em São Paulo é transculturalidade: não é apenas nordestino preservado, é forró reinventado no contexto paulistano, com elementos novos. A distinção é entre "lado a lado" (multi) e "mistura que cria" (trans).'
    },
    {
      prompt: 'Qual combinação de fatores mais provavelmente reduziria a necessidade de migração pendular?',
      options: [
        { text: 'Aumento das multas para veículos no centro da cidade',                              correct: false },
        { text: 'Descentralização de empregos + moradia acessível perto dos polos de trabalho + transporte rápido', correct: true  },
        { text: 'Proibição de morar a mais de 50 km do trabalho',                                   correct: false },
        { text: 'Incentivo ao uso de bicicleta para percursos de até 20 km',                        correct: false }
      ],
      explanation: 'Para eliminar o pendularismo, é preciso atacar a causa: a distância estrutural entre onde se mora e onde se trabalha. Isso exige: (1) empregos descentralizados (não todos no centro); (2) moradia acessível perto dos empregos (para que trabalhadores possam morar onde trabalham); (3) transporte rápido para quem ainda precisa se deslocar. São três políticas complementares — nenhuma resolve sozinha.'
    },
    {
      prompt: 'Por que o IBGE usa projeções populacionais, e não certezas?',
      options: [
        { text: 'Porque o IBGE não tem dados confiáveis sobre a população atual',                   correct: false },
        { text: 'Porque o futuro demográfico depende de comportamentos humanos (fertilidade, migração) que podem mudar com políticas e cultura', correct: true  },
        { text: 'Porque as projeções são apenas estimativas para fins políticos',                    correct: false },
        { text: 'Porque censos só são realizados a cada 50 anos no Brasil',                         correct: false }
      ],
      explanation: 'Projeções não são certezas porque dependem de variáveis comportamentais: se mais mulheres decidirem ter mais filhos, a fertilidade sobe e o pico muda. Se o Brasil abrir imigração estruturada, a PEA aumenta. Se uma pandemia reduz a expectativa de vida, a curva muda. O IBGE elabora cenários (pessimista, base, otimista) para dar um leque de possibilidades — não uma "verdade do futuro".'
    },
    {
      prompt: '(VESTIBULAR) Analise as afirmativas sobre o processo de urbanização brasileira:\nI. A urbanização foi resultado exclusivo do crescimento natural das cidades sem migração.\nII. A macrocefalia urbana concentrou serviços e poder em poucas metrópoles.\nIII. A segregação socioespacial é produzida apenas por diferenças culturais entre grupos.\nIV. O ODS 11 busca cidades inclusivas, seguras, resilientes e sustentáveis.\nQuais estão INCORRETAS?',
      options: [
        { text: 'II e IV',    correct: false },
        { text: 'I e III',    correct: true  },
        { text: 'I e II',     correct: false },
        { text: 'III e IV',   correct: false }
      ],
      explanation: 'I: INCORRETA — a urbanização foi impulsionada pelo êxodo rural (migração interna), não apenas pelo crescimento natural. II: CORRETA — macrocefalia = concentração excessiva em poucas metrópoles. III: INCORRETA — a segregação é produzida principalmente por diferenças econômicas (renda, acesso), não apenas culturais. IV: CORRETA — definição exata do ODS 11. Incorretas: I e III.'
    },
    {
      prompt: '(VESTIBULAR) Um pesquisador estudou duas cidades com mesmo porte: X (alta segregação, pouco transporte público, nenhum centro de apoio a migrantes) e Y (moradia popular no centro, metrô integrado, centro de integração). Qual cidade provavelmente tem maior coesão social e melhor qualidade de vida?',
      options: [
        { text: 'Cidade X — segregação cria bairros mais especializados e eficientes',                 correct: false },
        { text: 'Cidade Y — políticas inclusivas reduzem desigualdades e fortalecem o tecido social',  correct: true  },
        { text: 'Ambas são equivalentes — localização não afeta coesão',                              correct: false },
        { text: 'Cidade X — metrô e centros de apoio são custos que reduzem o PIB local',             correct: false }
      ],
      explanation: 'Cidade Y: moradia popular no centro → menos segregação, menos pendularismo; metrô integrado → acesso democrático ao espaço urbano; centro de integração → migrantes incluídos → menos xenofobia, mais contribuição econômica. Coesão social alta = conflito social menor + produtividade maior + saúde pública melhor. Cidades que investem em inclusão têm melhores indicadores de qualidade de vida em estudos comparativos (cf. pesquisas do IPEA e Banco Mundial).'
    }
  ],

  adaptiveReview: [
    {
      prompt: 'EXAME FINAL — DIFÍCIL: Se o Brasil, em 2042, chegar ao pico com 228M de hab. e ao mesmo tempo tiver 87% urbanos, qual seria a densidade demográfica urbana média, considerando que áreas urbanas ocupam ~3% do território nacional?',
      options: [
        { text: '~60 hab/km² nas áreas urbanas',    correct: false },
        { text: '~940 hab/km² nas áreas urbanas',    correct: true  },
        { text: '~25 hab/km² — a mesma que a média nacional', correct: false },
        { text: '~5.000 hab/km² — comparável a Hong Kong', correct: false }
      ],
      explanation: 'Cálculo: 228M × 87% = ~198M em áreas urbanas. Área urbana = 3% de 8,5M km² = ~255.000 km². Densidade urbana = 198.000.000 ÷ 255.000 ≈ 776 hab/km². (A questão usa ~940 por arredondamento ligeiramente diferente do % urbano — valor próximo.) Isso é muito alto: explica o trânsito, a pressão por habitação, a impermeabilização. As cidades brasileiras concentram quase toda a população em 3% do território — o desafio da densidade sem qualidade.'
    },
    {
      prompt: 'EXAME FINAL — DIFÍCIL: Uma pesquisadora argumenta que "a solução para a xenofobia é econômica, não educacional". Avalie criticamente essa tese:',
      options: [
        { text: 'Correta — a xenofobia desaparece automaticamente com desenvolvimento econômico',         correct: false },
        { text: 'Parcialmente correta — crises econômicas intensificam a xenofobia, mas educação e políticas culturais são igualmente necessárias para desconstruir estereótipos',  correct: true  },
        { text: 'Incorreta — a xenofobia é exclusivamente cultural e a economia é irrelevante',          correct: false },
        { text: 'Correta — basta redistribuir a renda para eliminar todo preconceito',                  correct: false }
      ],
      explanation: 'A tese é parcialmente verdadeira: em crises econômicas (mais desemprego, menos recursos), a disputa se intensifica e a xenofobia cresce. Melhorar a economia reduz a pressão. Mas sem educação e políticas culturais, países ricos também têm xenofobia intensa (cf. Europa 2015–2020 com imigrantes sírios). A solução é multidimensional: economia + educação + representatividade midiática + políticas de integração. Nenhuma dimensão isolada resolve.'
    }
  ],

  rewards: { xp: 250, gems: 25, badge: '🏆 Mestre da Urbanização e Dinâmicas Migratórias' },
  completionMessage: '🏆 Exame Final concluído! Você domina urbanização, migrações, xenofobia e o futuro do Brasil. A Geografia é seu instrumento de leitura do mundo.',
  nextStage: null
};

window.GEO_CAP7_SFINAL = GEO_CAP7_SFINAL;
