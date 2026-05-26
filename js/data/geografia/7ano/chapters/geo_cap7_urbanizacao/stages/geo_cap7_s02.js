/**
 * GEO CAP7 STAGE 02 — Migração Pendular e Sazonal
 * BNCC: EF07GE06 | Tópico 7
 */

const GEO_CAP7_S02 = {
  id: 'geo_cap7_s02',
  title: 'Migração Pendular e Sazonal',
  icon: '⏰',
  difficulty: 'medium',
  estimatedTime: 13,

  learningObjectives: [
    'Definir e diferenciar migração pendular e migração sazonal',
    'Explicar o conceito de "cidade dormitório" e sua relação com a pendularidade',
    'Analisar o impacto socioeconômico dos deslocamentos pendulares sobre trabalhadores',
    'Compreender os "boias-frias" e o trabalho sazonal na agricultura brasileira',
    'Relacionar espraiamento urbano, especulação imobiliária e migração pendular'
  ],

  summary: {
    readTime: 4,
    content: [
      {
        icon: '⏰',
        title: 'O relógio do trabalhador pendular',
        text: 'São 5h da manhã. O alarme toca.\nMeia hora de ônibus, depois metrô, depois outro ônibus.\nChega ao trabalho às 8h. Volta às 21h.\n\nIsso é migração pendular — o deslocamento diário entre moradia e trabalho/estudo sem mudança de endereço.\n\nNão é escolha de vida. É consequência da cidade cara e mal planejada.\n\nPor que acontece?\n• Solo central valorizado → pobres vão para a periferia\n• Empregos concentrados no centro → trabalhadores percorrem distâncias enormes\n• Transporte público insuficiente → mais horas no ônibus, mais custo, mais estresse\n\n🔑 A migração pendular é um termômetro da desigualdade urbana. Quanto maior a distância percorrida pelos trabalhadores de baixa renda, mais desigual é a cidade.'
      },
      {
        icon: '🌾',
        title: 'Migração sazonal — trabalhando no ritmo das colheitas',
        text: 'O café amadurece em junho. A laranja está pronta em julho. A cana é cortada de abril a novembro.\n\nEsses ciclos chamam trabalhadores sazonais — pessoas que se deslocam temporariamente para colheitas e voltam à origem.\n\nOs "boias-frias":\n• Trabalhadores rurais temporários\n• Acordam cedo, trazem a própria comida (boia fria = marmita fria)\n• Vivem em alojamentos coletivos\n• Recebem por produção, sem proteções trabalhistas completas\n\nFluxos sazonais também ocorrem no turismo:\n• Litoral no verão → trabalhadores temporários\n• Ski no Sul → emprego de inverno\n• Festas juninas no Nordeste → artesãos e comerciantes migrantes\n\n🔑 Sazonal ≠ êxodo. Sazonal = vai na safra, volta na entressafra. É estratégia de sobrevivência — não abandono.'
      },
      {
        icon: '🚌',
        title: 'Custo invisível do pendularismo',
        text: 'O trabalhador pendular paga um preço que não aparece no salário:\n\n⏱️ TEMPO: 3–4 horas/dia no transporte = 60–80 horas/mês "perdidas"\n💸 DINHEIRO: passagem representa 15–20% do salário mínimo\n😴 SONO: acorda 5h, deita 23h = privação crônica de sono\n👨‍👩‍👧 FAMÍLIA: menos horas com filhos, menos presença nos cuidados\n🧠 SAÚDE MENTAL: estresse, ansiedade, sensação de armadilha\n\nPolíticas que ajudam:\n• Transporte coletivo subsidiado e de qualidade\n• BRT (Bus Rapid Transit) com faixas exclusivas\n• Moradia popular em áreas bem servidas\n• Trabalho remoto onde possível\n• Integração tarifária entre municípios\n\n🔑 A política de mobilidade é política social. Quem mora longe e depende do ônibus é quem mais precisa de transporte digno — e quem menos tem voz para exigi-lo.'
      }
    ],

    flashcards: [
      { q: 'O que é migração pendular?',                 a: 'Deslocamento diário de ida e volta entre moradia e trabalho/estudo, sem mudança de endereço oficial.' },
      { q: 'O que é migração sazonal?',                  a: 'Deslocamento temporário ligado a ciclos econômicos (colheita, turismo, construção). Vai e volta na época certa.' },
      { q: 'Quem são os "boias-frias"?',                 a: 'Trabalhadores rurais temporários que se deslocam para colheitas, trazem marmita fria e vivem em alojamentos coletivos.' },
      { q: 'O que é "cidade dormitório"?',               a: 'Município onde moradores só dormem — trabalham fora, na metrópole vizinha. Fruto da especulação imobiliária.' },
      { q: 'Qual a causa principal do pendularismo?',    a: 'Solo caro no centro empurra trabalhadores para periferias distantes dos empregos.' },
      { q: 'O que é "pobreza de tempo"?',                a: 'Privação de tempo livre por deslocamentos longos — tempo que poderia ser usado em família, lazer ou educação.' }
    ],

    mnemonics: [
      { trigger: 'Pendular vs. Sazonal vs. Êxodo', memory: '"PENDULAR = relógio diário. SAZONAL = calendário anual. ÊXODO = mala e adeus. Cada um tem seu ritmo."' },
      { trigger: 'Custo invisível do pendular',   memory: '"TSFF = Tempo + $$ (dinheiro) + Sono + Família. Quatro preços que o pendular paga sem ninguém ver no holerite."' },
      { trigger: 'Por que cidades dormitório existem', memory: '"Aluguel caro no centro + emprego lá + ônibus lento = dormitório aqui, trabalho lá. A equação da desigualdade urbana."' }
    ],

    miniReview: [
      { q: 'Por que a migração pendular é chamada de "mobilidade de necessidade"?',
        a: 'Não é escolha livre — é resultado da segregação habitacional. Sem moradia acessível perto do trabalho, o trabalhador não tem opção: precisa percorrer longas distâncias todos os dias.' },
      { q: 'Como a mecanização agrícola afetou a migração sazonal?',
        a: 'Reduziu a demanda por trabalho manual em grãos (milho, soja, arroz — colhidos por máquinas), mas o sazonal persiste em culturas que exigem mão humana: café, laranja, uva, cana-de-açúcar e turismo.' }
    ]
  },

  warmup: [
    {
      prompt: 'Um trabalhador mora em Guarulhos e trabalha no centro de São Paulo. Todo dia ele faz esse percurso de ônibus + metrô. Esse deslocamento é classificado como:',
      options: [
        { text: 'Êxodo rural',        correct: false },
        { text: 'Migração pendular',  correct: true  },
        { text: 'Migração sazonal',   correct: false },
        { text: 'Migração forçada',   correct: false }
      ],
      explanation: 'Migração pendular = deslocamento diário sem mudar de endereço. Guarulhos → SP Centro todo dia = clássico pendular metropolitano. Não há mudança de domicílio — apenas o trajeto se repete, de segunda a sábado, custando tempo, dinheiro e energia.'
    },
    {
      prompt: 'Um trabalhador rural de Minas Gerais vai a São Paulo todo ano entre junho e novembro para colher laranja e volta no fim da safra. Esse fluxo é:',
      options: [
        { text: 'Êxodo rural definitivo',      correct: false },
        { text: 'Migração sazonal',             correct: true  },
        { text: 'Migração pendular',            correct: false },
        { text: 'Migração de retorno',          correct: false }
      ],
      explanation: 'Migração sazonal: temporária, ligada ao ciclo agrícola (laranja = safra de junho a novembro). O trabalhador vai, trabalha, volta. Não abandona a origem — usa a migração como estratégia de complementar a renda anual.'
    },
    {
      prompt: 'O que diferencia uma "cidade dormitório" de outros municípios?',
      options: [
        { text: 'É uma cidade com muitos hotéis e pousadas para turistas',                            correct: false },
        { text: 'Seus moradores trabalham principalmente fora — a cidade serve apenas de moradia',   correct: true  },
        { text: 'É uma cidade com população idosa que dorme muito durante o dia',                    correct: false },
        { text: 'É um município muito pequeno com menos de 10 mil habitantes',                       correct: false }
      ],
      explanation: 'Cidade dormitório = municipio satélite onde moradores apenas dormem. De manhã saem para a metrópole vizinha, à noite voltam. Falta emprego local. Exemplos: Embu das Artes (SP), Nova Iguaçu (RJ), Betim (BH). São geradas pela especulação imobiliária que expulsa trabalhadores para longe dos empregos.'
    }
  ],

  guidedPractice: [
    {
      prompt: '🔍 DICA: Pense no custo invisível — tempo, dinheiro, saúde.\n\nUm trabalhador passa 3 horas/dia no transporte. Em um mês de 22 dias úteis, quantas horas são "perdidas" em deslocamento?',
      options: [
        { text: '33 horas',  correct: false },
        { text: '66 horas',  correct: true  },
        { text: '90 horas',  correct: false },
        { text: '22 horas',  correct: false }
      ],
      explanation: '3 horas/dia × 22 dias = 66 horas/mês. São quase 3 dias inteiros de trabalho gastos apenas se deslocando! Para um trabalhador que ganha 1 salário mínimo, isso representa um custo invisível enorme em tempo — que poderia ser usado em educação, família, descanso e saúde.'
    },
    {
      prompt: '🔍 DICA: Relacione espraiamento urbano e pendularismo.\n\nSe o preço do combustível subir 30%, qual impacto direto sobre os trabalhadores pendulares de baixa renda?',
      options: [
        { text: 'Redução do tempo de viagem pela queda no uso de carros',                              correct: false },
        { text: 'Aumento do custo de deslocamento e pressão por transporte público mais barato',      correct: true  },
        { text: 'Fim imediato do pendularismo, pois trabalhadores param de se deslocar',              correct: false },
        { text: 'Melhora da qualidade do ar pela redução de veículos',                               correct: false }
      ],
      explanation: 'Combustível mais caro = ônibus e transporte privado mais caros. Para trabalhadores de baixa renda (que já gastam 15–20% do salário com transporte), isso é devastador: menos dinheiro para alimentação, saúde, educação. A pressão por transporte público subsidiado aumenta — e a demanda por moradias mais próximas do trabalho também.'
    }
  ],

  questions: [
    {
      prompt: 'Por que a migração pendular é considerada um problema social, e não apenas logístico?',
      options: [
        { text: 'Porque aumenta o consumo de combustível fóssil',                                        correct: false },
        { text: 'Porque é sintoma de segregação habitacional e priva trabalhadores de tempo, renda e qualidade de vida', correct: true  },
        { text: 'Porque causa congestão nas vias e atrapalha o transporte de cargas',                    correct: false },
        { text: 'Porque expõe trabalhadores a riscos de acidente de trânsito',                          correct: false }
      ],
      explanation: 'O pendularismo é problema social porque: (1) revela que pobres não podem morar perto do trabalho — segregação; (2) consome horas que poderiam ser de família, lazer, estudo; (3) gera custo financeiro proporcional ao menor salário; (4) causa estresse crônico e privação de sono. É desigualdade que se mede em km e minutos.'
    },
    {
      prompt: 'A migração sazonal de trabalhadores rurais é considerada uma "estratégia de sobrevivência" porque:',
      options: [
        { text: 'Os trabalhadores são forçados pelos latifundiários a migrar todo ano',              correct: false },
        { text: 'Complementa a renda familiar nos períodos de entressafra local sem abandonar a origem', correct: true  },
        { text: 'Garante emprego fixo e formal durante todo o ano',                                 correct: false },
        { text: 'Evita completamente o êxodo rural definitivo em todas as famílias',               correct: false }
      ],
      explanation: 'Sazonal como estratégia: na entressafra local, o trabalhador migra para onde tem colheita, ganha dinheiro e volta com a renda para sustentar a família. Mantém vínculos com a origem (terra, família, cultura) enquanto garante renda extra. É uma lógica econômica racional dentro das condições de vida disponíveis.'
    },
    {
      prompt: 'Qual infraestrutura é mais eficaz para reduzir o sofrimento dos trabalhadores pendulares de baixa renda?',
      options: [
        { text: 'Ampliação de estacionamentos privados pagos',                                          correct: false },
        { text: 'Transporte público de qualidade, subsidiado e integrado entre municípios',           correct: true  },
        { text: 'Construção de novos aeroportos regionais',                                           correct: false },
        { text: 'Ampliação de estradas para reduzir o tempo de viagem de carro',                      correct: false }
      ],
      explanation: 'Trabalhadores pendulares de baixa renda dependem do ônibus e do metrô — não de carro particular ou avião. Transporte público subsidiado, integrado (um bilhete para vários modais) e de qualidade (conforto, frequência, segurança) é o que transforma a vida dessas pessoas. Estradas beneficiam principalmente quem tem carro.'
    },
    {
      prompt: 'O home office (trabalho remoto) reduz a migração pendular principalmente em quais setores?',
      options: [
        { text: 'Construção civil, agropecuária e indústria',         correct: false },
        { text: 'Serviços de escritório, tecnologia e educação a distância', correct: true  },
        { text: 'Saúde, comércio e transporte',                       correct: false },
        { text: 'Todos os setores igualmente',                        correct: false }
      ],
      explanation: 'Home office funciona onde o trabalho é digital e não exige presença física: escritórios, TI, parte do ensino. Não funciona para construção civil, serviços presenciais (restaurantes, hospitais, lojas), agropecuária. A pandemia revelou que apenas ~30% dos empregos brasileiros permitem trabalho remoto — o resto continua dependendo do deslocamento físico diário.'
    },
    {
      prompt: 'Qual termo histórico descreve trabalhadores rurais temporários que carregavam marmita fria e dormiam em barracões?',
      options: [
        { text: 'Retirantes',    correct: false },
        { text: 'Boias-frias',   correct: true  },
        { text: 'Candangos',     correct: false },
        { text: 'Favelados',     correct: false }
      ],
      explanation: 'Boias-frias = trabalhadores rurais sazonais que levavam marmita (boia) fria porque não tinham onde aquecer o alimento. Trabalhavam em colheitas de café, cana, laranja no interior de SP e MG, vivendo em alojamentos coletivos precários. O termo virou símbolo da exploração do trabalho rural temporário no Brasil do século XX.'
    },
    {
      prompt: 'Por que o espraiamento urbano intensifica a migração pendular?',
      options: [
        { text: 'Porque cria novas áreas de emprego na periferia, atraindo trabalhadores do centro',          correct: false },
        { text: 'Porque empurra moradores para mais longe dos empregos, aumentando distâncias percorridas',   correct: true  },
        { text: 'Porque reduz o custo do transporte ao distribuir a demanda por uma área maior',             correct: false },
        { text: 'Porque concentra os empregos no centro à medida que a cidade cresce',                       correct: false }
      ],
      explanation: 'Espraiamento urbano = cidade se expandindo para a periferia sem adensamento do centro. Com moradia acessível apenas na periferia distante e empregos concentrados no centro/zonas industriais, os trabalhadores de baixa renda precisam percorrer cada vez mais km diariamente. O espraiamento é um amplificador da pendularidade.'
    },
    {
      prompt: 'A xenofobia pode afetar trabalhadores sazonais interestaduais. Quando isso acontece mais?',
      options: [
        { text: 'Quando os sazonais são de outro país e não falam português',                              correct: false },
        { text: 'Em momentos de crise econômica, quando a disputa por vagas temporárias se intensifica',   correct: true  },
        { text: 'Exclusivamente em regiões do Norte, que são menos abertas à diversidade',                correct: false },
        { text: 'Apenas quando os trabalhadores sazonais têm nível de escolaridade superior ao local',    correct: false }
      ],
      explanation: 'A xenofobia interna contra sazonais (especialmente nordestinos em SP/PR) se intensifica em momentos de crise: quando há menos vagas, a narrativa do "forasteiro que rouba emprego" ganha força. É um mecanismo de bode expiatório — o problema estrutural do mercado de trabalho é desviado para um grupo social vulnerável.'
    },
    {
      prompt: 'Qual política pública ataca diretamente as causas do pendularismo intenso?',
      options: [
        { text: 'Proibição de novas construções na periferia',                                      correct: false },
        { text: 'Moradia popular em áreas centrais e bem servidas + diversificação dos empregos',   correct: true  },
        { text: 'Aumento do imposto sobre veículos para reduzir o uso do carro',                   correct: false },
        { text: 'Estímulo ao turismo urbano para diversificar a renda local',                      correct: false }
      ],
      explanation: 'O pendularismo intenso existe porque pobres moram longe dos empregos. Para atacar a causa: moradia popular acessível em áreas bem localizadas (onde já tem escola, saúde, transporte) + desconcentrar os empregos (polos industriais e de serviços em diferentes zonas da cidade). Só isso redu z a distância estrutural entre onde se dorme e onde se trabalha.'
    },
    {
      prompt: 'A migração sazonal turística no litoral brasileiro gera que tipo de ciclo econômico local?',
      options: [
        { text: 'Recessão no inverno e crescimento lento no verão',                                   correct: false },
        { text: 'Pico de emprego e renda no verão, escassez no inverno — economia instável e dependente', correct: true  },
        { text: 'Economia estável pois o turismo compensa outras atividades ao longo do ano',        correct: false },
        { text: 'Crescimento linear sem oscilações pois turistas vêm o ano inteiro',                correct: false }
      ],
      explanation: 'Cidades litorâneas com turismo sazonal: hotéis lotados e restaurantes cheios no verão → picos de emprego temporário. Inverno: hotel vazio, restaurante fechado, trabalhadores desempregados. Essa instabilidade gera dependência, precarização do trabalho e dificuldade de planejamento municipal. A diversificação econômica (não apenas turismo) é o caminho para a sustentabilidade.'
    },
    {
      prompt: '(VESTIBULAR) Analise: "A migração pendular não é escolha livre — é resposta a uma estrutura urbana excludente." Qual dimensão geográfica essa afirmação aborda?',
      options: [
        { text: 'Apenas a dimensão física (distâncias e infraestrutura)',                            correct: false },
        { text: 'A dimensão socioespacial: como a cidade distribui desigualdades no território',    correct: true  },
        { text: 'Apenas a dimensão econômica (custo do transporte vs. salário)',                    correct: false },
        { text: 'Exclusivamente a dimensão política (falta de regulação do mercado imobiliário)',   correct: false }
      ],
      explanation: 'A afirmação aborda a dimensão socioespacial: a cidade não distribui moradias, empregos e serviços de forma justa no território. A estrutura urbana — resultado de especulação imobiliária, falta de planejamento e desigualdade histórica — força trabalhadores pobres a percorrer longas distâncias. É Geografia Social aplicada ao cotidiano do trabalhador brasileiro.'
    }
  ],

  adaptiveReview: [
    {
      prompt: 'DIFÍCIL: Se uma região metropolitana implementar Bilhete Único (integração tarifária entre ônibus municipal e intermunicipal), qual efeito esperado sobre o pendularismo?',
      options: [
        { text: 'Fim do pendularismo, pois todos poderão morar mais perto',                          correct: false },
        { text: 'Redução do custo para o trabalhador e ampliação do acesso à mobilidade — atenuação do pendularismo sem eliminar', correct: true  },
        { text: 'Aumento do pendularismo, pois o transporte barato incentiva morar mais longe',      correct: false },
        { text: 'Nenhum efeito, pois o problema é a distância, não o custo',                         correct: false }
      ],
      explanation: 'Bilhete Único: reduz o custo (um bilhete para múltiplos ônibus e trens), não elimina a distância. Mas ao tornar o transporte mais acessível financeiramente, alivia a pressão sobre o orçamento familiar e facilita que trabalhadores de cidades satélites acessem empregos na metrópole. Pode até incentivar morar um pouco mais longe (mais barato com bilhete integrado) — daí o paradoxo: atenua o sofrimento, mas pode também ampliar levemente a área de deslocamento.'
    },
    {
      prompt: 'DIFÍCIL: Compare migrações sazonais e pendulares quanto à sua relação com a estrutura de classes sociais brasileira:',
      options: [
        { text: 'Ambas afetam todas as classes igualmente — são fenômenos democráticos',                   correct: false },
        { text: 'Ambas afetam predominantemente trabalhadores de baixa renda — sazonais por falta de terra/emprego fixo; pendulares por falta de moradia central', correct: true  },
        { text: 'Sazonais são de classe alta; pendulares são de classe média',                              correct: false },
        { text: 'Sazonais são voluntários e de todas as classes; pendulares são exclusivos de pobres',     correct: false }
      ],
      explanation: 'Ambos os tipos de migração têm caráter de classe: são protagonizados por trabalhadores de baixa renda. Sazonais = sem terra, sem emprego fixo, dependentes dos ciclos agrícolas. Pendulares = sem moradia acessível perto do emprego. Os ricos não praticam essas formas de mobilidade — moram perto do trabalho ou usam carro/helicóptero. A mobilidade humana no Brasil está diretamente associada à posição de classe.'
    }
  ],

  rewards: { xp: 125, gems: 12, badge: '⏰ Cronometrista Urbano' },
  completionMessage: '⏰ Você entende o ritmo invisível da cidade! O pendular, o sazonal — cada deslocamento conta uma história de desigualdade e resistência.',
  nextStage: 'geo_cap7_s03'
};

window.GEO_CAP7_S02 = GEO_CAP7_S02;
