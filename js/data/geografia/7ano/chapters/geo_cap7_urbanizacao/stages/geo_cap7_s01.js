/**
 * GEO CAP7 STAGE 01 — Urbanização e Metropolização
 * BNCC: EF07GE06 | Tópico 5
 */

const GEO_CAP7_S01 = {
  id: 'geo_cap7_s01',
  title: 'Urbanização e Metropolização',
  icon: '🏙️',
  difficulty: 'medium',
  estimatedTime: 14,

  learningObjectives: [
    'Explicar o processo de urbanização e metropolização brasileira',
    'Distinguir megalópole, metrópole, cidade média e cidade pequena',
    'Analisar a segregação socioespacial e seus determinantes',
    'Compreender o conceito de rede urbana e hierarquia de cidades',
    'Relacionar urbanização acelerada com problemas socioambientais'
  ],

  summary: {
    readTime: 4,
    content: [
      {
        icon: '🏙️',
        title: 'Do campo para a cidade — a grande transformação',
        text: 'Em 1950, apenas 36% dos brasileiros viviam em cidades.\nEm 2020, esse número chegou a 87%.\n\nUm em cada 10 brasileiros viveu essa virada em vida — a maior transformação territorial do século XX!\n\nUrbanização = aumento da proporção de pessoas vivendo em cidades.\n\nO Brasil urbanizou-se de forma rápida e, em muitos casos, desorganizada:\n• Sem planejamento urbano suficiente\n• Sem habitação popular adequada\n• Sem transporte para todos\n• Sem saneamento para as periferias\n\n🔑 Países ricos levaram 100 anos para urbanizar. O Brasil fez isso em 40 anos (1950–1990). A velocidade deixou cicatrizes: favelas, trânsito, poluição e desigualdade espacial.'
      },
      {
        icon: '🌆',
        title: 'Hierarquia de cidades — quem manda na rede?',
        text: 'Nem todas as cidades são iguais.\nA hierarquia urbana classifica pelo poder, serviços e influência:\n\n• MEGALÓPOLE: eixo de metrópoles unidas (ex: eixo SP–Campinas–Sorocaba)\n• METRÓPOLE: grande cidade com funções nacionais (SP, RJ, BH, Recife, Belém)\n• CAPITAL REGIONAL: influencia vários estados vizinhos (Manaus, Salvador, Fortaleza)\n• CENTRO SUB-REGIONAL: influencia seu entorno imediato\n• CIDADE MÉDIA: 100 mil a 500 mil hab. — em crescimento acelerado\n• CIDADE PEQUENA: < 100 mil hab. — base da pirâmide urbana\n\n🔑 São Paulo é a principal metrópole brasileira — centro de comando da economia nacional e ponto de conexão com a rede urbana global.\n\nRede urbana = o conjunto de cidades conectadas por fluxos (pessoas, mercadorias, informação).'
      },
      {
        icon: '🏚️',
        title: 'Segregação socioespacial — a cidade dividida',
        text: 'Na cidade brasileira, há dois mundos no mesmo espaço:\n\n• ZONAS NOBRES: áreas centrais ou privilegiadas, com infraestrutura completa, shoppings, clínicas particulares, parques\n• PERIFERIAS E FAVELAS: margens, encostas, fundos de vale — falta água, esgoto, escola de qualidade, transporte\n\nComo se forma essa divisão?\n1. ESPECULAÇÃO IMOBILIÁRIA: solo caro no centro expulsa pobres para a periferia\n2. FALTA DE PLANEJAMENTO: cidades crescem sem zoneamento inclusivo\n3. SEGREGAÇÃO HISTÓRICA: heranças coloniais e raciais continuam moldando quem mora onde\n\nGentricação = processo de valorização de bairros populares que expulsa os moradores originais.\n\n🔑 A cidade não é neutra. Ela reflete e reproduz desigualdades. O desafio da urbanização sustentável é criar cidades que incluam todos — não apenas os que podem pagar.'
      }
    ],

    flashcards: [
      { q: 'O que é urbanização?',                       a: 'Aumento da proporção de pessoas vivendo em cidades em relação ao total da população.' },
      { q: 'Qual era o índice de urbanização do Brasil em 1950?', a: '36%. Em 2020, chegou a 87%.' },
      { q: 'O que é rede urbana?',                       a: 'Conjunto de cidades conectadas por fluxos de pessoas, mercadorias e informações.' },
      { q: 'O que é segregação socioespacial?',          a: 'Divisão das cidades em áreas com acesso desigual a serviços, infraestrutura e oportunidades, geralmente por renda.' },
      { q: 'O que é gentrificação?',                     a: 'Valorização de bairros populares que expulsa moradores originais de baixa renda.' },
      { q: 'O que é macrocefalia urbana?',               a: 'Concentração excessiva da população e serviços em poucas metrópoles, desproporcionalmente grande para o sistema urbano.' }
    ],

    mnemonics: [
      { trigger: 'Hierarquia urbana (de maior para menor)', memory: '"MEGA-Metro-CaReg-SubReg-Média-Pequena. Cada nível manda sobre o de baixo. SP é o rei da pirâmide."' },
      { trigger: 'Por que segregação existe',             memory: '"ESP = Especulação + Sem planejamento + Passado colonial. O trio que divide a cidade em dois mundos."' },
      { trigger: 'Urbanização do Brasil',                 memory: '"36% em 1950 → 87% em 2020. Em 70 anos: mais que dobrou. O Brasil foi de rural para urbano em uma geração."' }
    ],

    miniReview: [
      { q: 'Por que a urbanização brasileira foi tão rápida e desordenada?',
        a: 'O êxodo rural de 1960–1980 trouxe 30 milhões de pessoas em 20 anos — mais rápido que qualquer planejamento poderia absorver. Sem habitação acessível, infraestrutura e serviços, as periferias e favelas foram a solução possível.' },
      { q: 'Como a especulação imobiliária gera segregação?',
        a: 'A valorização do solo central torna a moradia central inacessível para trabalhadores de baixa renda. Eles são "empurrados" para a periferia — mais longe do trabalho, com menos serviços e mais deslocamento diário.' }
    ]
  },

  warmup: [
    {
      prompt: 'O Brasil em 1950 tinha 36% da população em cidades. Em 2020, 87%. Esse processo é chamado de:',
      options: [
        { text: 'Industrialização',  correct: false },
        { text: 'Urbanização',       correct: true  },
        { text: 'Metropolização',    correct: false },
        { text: 'Êxodo urbano',      correct: false }
      ],
      explanation: 'Urbanização = aumento da proporção de pessoas em cidades. O Brasil urbanizou-se intensamente entre 1950 e 1990. A metropolização é um processo dentro da urbanização, referente ao crescimento específico das grandes metrópoles.'
    },
    {
      prompt: 'Na hierarquia urbana brasileira, qual cidade ocupa o topo como centro de comando econômico nacional?',
      options: [
        { text: 'Rio de Janeiro', correct: false },
        { text: 'São Paulo',      correct: true  },
        { text: 'Brasília',       correct: false },
        { text: 'Manaus',         correct: false }
      ],
      explanation: 'São Paulo é a principal metrópole brasileira e o centro financeiro-econômico do país — sede das maiores empresas, bancos e da Bolsa de Valores (B3). Brasília é o centro político (capital federal), não o econômico.'
    },
    {
      prompt: 'O que caracteriza a "segregação socioespacial" nas cidades brasileiras?',
      options: [
        { text: 'Separação de bairros por critérios linguísticos e religiosos',                         correct: false },
        { text: 'Divisão das cidades em áreas com acesso desigual a serviços e infraestrutura',        correct: true  },
        { text: 'Separação entre indústrias e áreas residenciais no zoneamento',                       correct: false },
        { text: 'Concentração de escolas e hospitais nas periferias para compensar desigualdades',     correct: false }
      ],
      explanation: 'Segregação socioespacial = a cidade dividida pela renda e pelo acesso. Ricos: centro/bairros nobres com tudo. Pobres: periferia/favelas com falta de saneamento, escola, transporte e segurança. A cidade reflete a desigualdade social — e muitas vezes a reproduz.'
    }
  ],

  guidedPractice: [
    {
      prompt: '🔍 DICA: Pense em como o processo de urbanização afeta o ambiente.\n\nQual impacto ambiental direto resulta da urbanização desordenada em encostas de morros?',
      options: [
        { text: 'Redução das chuvas por causa da impermeabilização',                                      correct: false },
        { text: 'Deslizamentos, erosão e risco de desastre para moradores de áreas de risco',            correct: true  },
        { text: 'Melhora da qualidade do solo pelo adubo natural dos dejetos',                           correct: false },
        { text: 'Aumento da biodiversidade pela mistura de espécies urbanas e naturais',                 correct: false }
      ],
      explanation: 'Encostas de morros não têm infraestrutura para receber habitações. Sem contenção de terra, chuvas fortes causam deslizamentos. A tragédia de Petrópolis (2022) e outros episódios mostram o custo humano da urbanização em áreas de risco — consequência direta da falta de moradia acessível e planejamento.'
    },
    {
      prompt: '🔍 DICA: Relacione hierarquia urbana com serviços.\n\nPor que cidades médias (100–500 mil hab.) estão crescendo mais rápido que metrópoles nas últimas décadas?',
      options: [
        { text: 'Por políticas governamentais que proibiram o crescimento das metrópoles',                   correct: false },
        { text: 'Por melhor qualidade de vida, menor custo, polos industriais e agronegócio regional',       correct: true  },
        { text: 'Por serem mais bem localizadas geograficamente do que as metrópoles',                       correct: false },
        { text: 'Por ter mais universidades por habitante do que as grandes cidades',                        correct: false }
      ],
      explanation: 'Cidades médias como Uberlândia (MG), Ribeirão Preto (SP), Joinville (SC) e Caruaru (PE) cresceram com polo industrial, agronegócio irrigado, serviços e menor custo de vida. A deseconomia das metrópoles (trânsito, violência, custo habitacional) empurra empresas e trabalhadores para as médias — que oferecem escala com mais qualidade de vida.'
    }
  ],

  questions: [
    {
      prompt: 'O conceito de "rede urbana" descreve:',
      options: [
        { text: 'A malha rodoviária que conecta apenas as capitais brasileiras',                              correct: false },
        { text: 'O conjunto de cidades com diferentes tamanhos conectadas por fluxos de pessoas, bens e informações', correct: true  },
        { text: 'A hierarquia política que vai do município ao governo federal',                              correct: false },
        { text: 'O sistema de telecomunicações que abrange as áreas urbanas',                                correct: false }
      ],
      explanation: 'Rede urbana = sistema de cidades de diferentes tamanhos interconectadas. Cada cidade tem funções específicas na rede: metrópoles como SP coordenam atividades nacionais; cidades médias distribuem serviços regionalmente; cidades pequenas atendem o entorno imediato. Os fluxos (pessoas, mercadorias, dinheiro, informação) são as "conexões" da rede.'
    },
    {
      prompt: 'Qual fenômeno ocorre quando um bairro popular é valorizado e seus moradores originais são deslocados?',
      options: [
        { text: 'Macrocefalia',      correct: false },
        { text: 'Gentrificação',     correct: true  },
        { text: 'Conurbação',        correct: false },
        { text: 'Metropolização',    correct: false }
      ],
      explanation: 'Gentrificação: um bairro popular é "descoberto" por artistas, jovens profissionais e investidores. Os preços dos aluguéis sobem. Moradores originais (de baixa renda) não conseguem mais pagar e saem. O bairro muda de identidade. Exemplos no Brasil: Vila Madalena (SP), Santa Teresa (RJ), Floresta (BH).'
    },
    {
      prompt: 'A conurbação ocorre quando:',
      options: [
        { text: 'Uma cidade perde população para o campo',                                                 correct: false },
        { text: 'Duas ou mais cidades crescem tanto que suas manchas urbanas se fundem',                  correct: true  },
        { text: 'Um município é dividido administrativamente em dois',                                    correct: false },
        { text: 'Uma cidade satélite se torna independente de sua metrópole',                             correct: false }
      ],
      explanation: 'Conurbação = fusão de manchas urbanas de cidades distintas. Ex: São Paulo + São Bernardo + Santo André + Diadema = Grande ABC, onde é difícil saber onde uma cidade termina e outra começa. Na Grande Recife, Recife + Olinda + Caruaru formam um tecido urbano contínuo.'
    },
    {
      prompt: 'Por que a urbanização acelerada do Brasil gerou problemas ambientais graves?',
      options: [
        { text: 'Porque cidades sempre destroem o ambiente, independentemente da velocidade',                    correct: false },
        { text: 'Porque a chegada rápida sem planejamento levou à ocupação de áreas de risco e proteção',       correct: true  },
        { text: 'Porque os brasileiros têm menos consciência ambiental que europeus',                           correct: false },
        { text: 'Porque o governo proibiu tecnologias verdes nas cidades',                                      correct: false }
      ],
      explanation: 'Com 30 milhões chegando em 20 anos e sem moradia acessível, populações foram forçadas a ocupar encostas de morros, várzeas de rios e áreas de proteção. Isso gerou deslizamentos, enchentes, impermeabilização do solo e contaminação de mananciais. Não é culpa dos moradores — é resultado da falta de planejamento e habitação popular suficiente.'
    },
    {
      prompt: 'Qual conceito descreve a concentração excessiva de população e serviços em pouquíssimas cidades?',
      options: [
        { text: 'Conurbação',          correct: false },
        { text: 'Macrocefalia urbana', correct: true  },
        { text: 'Rede hierárquica',    correct: false },
        { text: 'Espraiamento urbano', correct: false }
      ],
      explanation: 'Macrocefalia urbana = sistema urbano desequilibrado onde pouquíssimas metrópoles concentram a maioria dos serviços, empregos e população. No Brasil, SP e RJ funcionaram como cabeças imencionalmente grandes em relação às cidades menores — o que gerou migração intensa e sobrecarga dessas metrópoles.'
    },
    {
      prompt: 'O processo de urbanização brasileira foi principalmente impulsionado pelo:',
      options: [
        { text: 'Crescimento natural da população nas cidades, sem migração',                               correct: false },
        { text: 'Êxodo rural combinado com a industrialização do Sudeste',                                 correct: true  },
        { text: 'Imigração europeia que se concentrou nas cidades',                                        correct: false },
        { text: 'Políticas federais que proibiram novos assentamentos rurais',                             correct: false }
      ],
      explanation: 'A urbanização brasileira teve dois motores: o êxodo rural (expulsão do campo) e a industrialização do Sudeste (atração urbana). A imigração europeia contribuiu no século XIX–início do XX, mas o grande surto urbano dos anos 1950–1980 foi protagonizado por migrantes rurais nordestinos e de outras regiões.'
    },
    {
      prompt: 'O que são "cidades dormitório"?',
      options: [
        { text: 'Cidades com grande oferta de hotéis e hospedagem',                                       correct: false },
        { text: 'Municípios onde a maioria dos moradores trabalha fora e usa a cidade apenas para dormir', correct: true  },
        { text: 'Cidades que ficam inativas à noite por falta de iluminação pública',                     correct: false },
        { text: 'Cidades com alta proporção de idosos que dormem mais durante o dia',                     correct: false }
      ],
      explanation: 'Cidades dormitório = municípios satélites onde as pessoas apenas dormem. De manhã saem para trabalhar na metrópole vizinha; à noite voltam. Exemplos: Guarulhos/SP, São Gonçalo/RJ, Contagem/BH. São fruto da especulação imobiliária que empurrou trabalhadores para longe dos empregos.'
    },
    {
      prompt: 'Qual fator NÃO contribui para a segregação socioespacial nas cidades brasileiras?',
      options: [
        { text: 'Valorização do solo em áreas centrais e bem servidas',                                    correct: false },
        { text: 'Concentração de emprego em poucas áreas da cidade',                                      correct: false },
        { text: 'Ausência total de qualquer tipo de planejamento urbano',                                  correct: false },
        { text: 'Distribuição igualitária dos investimentos em infraestrutura por toda a cidade',          correct: true  }
      ],
      explanation: 'A distribuição igualitária de infraestrutura (água, esgoto, escola, transporte) reduziria a segregação — mas é exatamente o que NÃO acontece na maioria das cidades brasileiras. Investimentos se concentram nas áreas ricas, aprofundando a divisão. A questão pede o que NÃO contribui para a segregação: a igualdade de infraestrutura seria o antídoto.'
    },
    {
      prompt: 'Uma cidade tem 1,2 milhão de habitantes, é polo de serviços para 15 municípios vizinhos e tem uma universidade federal, shopping e hospital de referência regional. Na hierarquia urbana, essa cidade é classificada como:',
      options: [
        { text: 'Metrópole nacional',   correct: false },
        { text: 'Capital regional',     correct: true  },
        { text: 'Cidade pequena',       correct: false },
        { text: 'Megalópole',           correct: false }
      ],
      explanation: 'Cidade de 1,2M com influência regional sobre 15 municípios = capital regional. Metrópole nacional exige influência em todo o país (SP, RJ, BH). Megalópole é eixo de metrópoles. Com equipamentos de referência regional (hospital, universidade, shopping), essa cidade funciona como centro para sua região — definição de capital regional.'
    },
    {
      prompt: '(VESTIBULAR) "A segregação socioespacial não é acidente — é produto deliberado de escolhas políticas e econômicas." Qual argumento sustenta essa tese?',
      options: [
        { text: 'As desigualdades surgem aleatoriamente, sem mecanismos identificáveis',                    correct: false },
        { text: 'Zoneamentos excludentes, omissão no planejamento habitacional e concentração de investimentos em áreas nobres são escolhas que produzem segregação', correct: true  },
        { text: 'A segregação é consequência exclusiva de diferenças culturais e não de decisões políticas', correct: false },
        { text: 'A segregação é fenômeno natural em qualquer aglomerado humano sem solução possível',       correct: false }
      ],
      explanation: 'A segregação é construída: zoneamentos que reservam áreas boas para uso exclusivo residencial de alto padrão; falta de habitação popular em áreas centrais; investimento público em bairros ricos; omissão na regularização fundiária de favelas. São escolhas — de governos, do mercado imobiliário e da sociedade. Por isso podem ser desfeitas com outras escolhas.'
    }
  ],

  adaptiveReview: [
    {
      prompt: 'DIFÍCIL: Se São Paulo perdesse 3 milhões de habitantes por emigração para cidades médias, qual impacto ocorreria no sistema de cidades brasileiro?',
      options: [
        { text: 'SP deixaria de ser a principal metrópole e seria superada por RJ',                           correct: false },
        { text: 'Desconcentração relativa da macrocefalia — mais equilíbrio na rede urbana, com cidades médias se fortalecendo', correct: true  },
        { text: 'As cidades médias não absorveriam os migrantes, gerando êxodo de volta',                     correct: false },
        { text: 'O PIB nacional cairia proporcionalmente à perda de população de SP',                         correct: false }
      ],
      explanation: 'Perda de 3M em SP (13% da pop.) e chegada em cidades médias = desconcentração da macrocefalia. SP continuaria sendo a maior metrópole, mas com menos sobrecarga. As cidades médias ganhariam massa crítica para desenvolver mais serviços. Isso seria positivo para o equilíbrio da rede urbana — exatamente o que políticas de descentralização buscam provocar.'
    },
    {
      prompt: 'DIFÍCIL: Analise: "Gentrificação pode ser positiva quando requalifica espaços degradados, mas negativa quando expulsa comunidades vulneráveis." Qual posição analítica equilibrada está correta?',
      options: [
        { text: 'A gentrificação é sempre negativa — não há aspectos positivos',                             correct: false },
        { text: 'A gentrificação traz melhorias físicas, mas sem políticas de permanência para moradores locais, gera exclusão — o desafio é preservar a comunidade na requalificação', correct: true  },
        { text: 'A gentrificação é sempre positiva — cidades precisam se valorizar para atrair investimentos', correct: false },
        { text: 'A gentrificação não existe no Brasil — é fenômeno exclusivo de cidades europeias',           correct: false }
      ],
      explanation: 'A gentrificação é ambivalente: melhora infraestrutura, reduz abandono e pode trazer segurança — mas sem proteção aos moradores originais, os benefícios chegam apenas a quem tem dinheiro para pagar os novos preços. A solução não é impedir a requalificação, mas garantir políticas de habitação de interesse social (aluguel controlado, direito de preempção, reassentamento no mesmo bairro) para que a comunidade original possa permanecer e usufruir das melhorias.'
    }
  ],

  rewards: { xp: 130, gems: 13, badge: '🏙️ Urbanista Crítico' },
  completionMessage: '🏙️ Você entende como as cidades crescem — e para quem. Urbanização não é só construção: é política, poder e escolha.',
  nextStage: 'geo_cap7_s02'
};

window.GEO_CAP7_S01 = GEO_CAP7_S01;
