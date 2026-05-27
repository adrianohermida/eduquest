/**
 * GEO CAP7 STAGE 05 — Redes Urbanas, Segregação e Vestibular
 * BNCC: EF07GE06, EF07GE07 | Tópico 5 — Nível Vestibular
 */

const GEO_CAP7_S05 = {
  id: 'geo_cap7_s05',
  title: 'Redes Urbanas e Segregação Socioespacial',
  icon: '🗺️',
  difficulty: 'hard',
  estimatedTime: 16,

  learningObjectives: [
    'Analisar a rede urbana brasileira e sua hierarquia policêntrica',
    'Relacionar especulação imobiliária, macrocefalia e favelização',
    'Compreender os mecanismos de segregação socioespacial',
    'Aplicar os conceitos ao nível de vestibular e ENEM',
    'Avaliar políticas urbanas e seu impacto na desigualdade espacial'
  ],

  summary: {
    readTime: 4,
    content: [
      {
        icon: '🕸️',
        title: 'Rede urbana — como as cidades se conectam',
        text: 'A rede urbana é o sistema de interdependência entre cidades de diferentes portes e funções.\nNenhuma cidade vive sozinha: elas trocam bens, serviços, pessoas e informações.\n\nHierarquia urbana brasileira:\n• METRÓPOLE NACIONAL: São Paulo (centro de comando global)\n• METRÓPOLES REGIONAIS: Rio de Janeiro, Belo Horizonte, Fortaleza, Recife, Belém, Manaus, Porto Alegre\n• CAPITAIS REGIONAIS: cidades que polarizam estados/regiões\n• CENTROS SUB-REGIONAIS: influenciam pequenos conjuntos de municípios\n• CIDADES MÉDIAS: 100–500 mil hab. — crescimento acelerado desde 1990\n• CIDADES PEQUENAS: < 100 mil hab. — maioria dos municípios do Brasil\n\n🔑 POLICENTRISMO: nas últimas décadas, polos regionais como Campinas, Uberlândia, Joinville e Maringá dividem funções com as metrópoles. A rede ficou menos "estrela" e mais "teia".'
      },
      {
        icon: '🔄',
        title: 'Desmetropolização e crescimento das cidades médias',
        text: 'Desde os anos 1990, cidades médias crescem mais rápido que metrópoles.\n\nPor quê?\n• Deseconomias das metrópoles: trânsito, violência, custo de moradia\n• Expansão do agronegócio para o interior: novas cidades agrícolas\n• Descentralização industrial: empresas buscam custo menor e incentivos fiscais\n• Melhor qualidade de vida percebida\n\nAtenção: "desmetropolização" NÃO significa que as metrópoles perderam influência. Elas ainda dominam a economia — mas perdem ritmo de crescimento.\n\n🔑 MIGRAÇÃO PENDULAR: quem mora em cidade média mas trabalha na metrópole vai e volta diariamente (pendular = ida e volta como pêndulo).'
      },
      {
        icon: '🏚️',
        title: 'Segregação, especulação e políticas urbanas',
        text: 'CICLO DA SEGREGAÇÃO:\n1. Especulação valoriza centros → solo caro\n2. População pobre é empurrada para periferia\n3. Periferia sem infraestrutura → favelas, risco\n4. Pouca mobilidade urbana → mais desigualdade\n\nINSTRUMENTOS DO ESTATUTO DA CIDADE (2001):\n• IPTU progressivo: quem não usa terreno central paga mais\n• Outorga onerosa: construtoras pagam pelo direito de construir mais\n• Regularização fundiária: titulação de terrenos irregulares\n• Zoneamento inclusivo: reserva de áreas para habitação popular\n\nGENTRIFICAÇÃO: bairro popular fica "chique" → moradores originais saem por não conseguir pagar\n\n🔑 A CIDADE NÃO É NEUTRA. Ela reflete desigualdades — e políticas urbanas inclusivas são o antídoto.'
      }
    ]
  },

  flashcards: [
    { q: 'O que é migração pendular?',                        a: 'Movimento diário (ida e volta) de pessoas que moram em uma cidade e trabalham/estudam em outra, geralmente uma metrópole.' },
    { q: 'O que é desmetropolização?',                        a: 'Perda relativa de ritmo de crescimento das metrópoles em comparação com cidades médias e polos regionais. As metrópoles mantêm influência, mas crescem menos.' },
    { q: 'Quais são os instrumentos do Estatuto da Cidade?',  a: 'IPTU progressivo, outorga onerosa, regularização fundiária, operações urbanas consorciadas, direito de preempção e zoneamento inclusivo.' },
    { q: 'O que é conurbação?',                               a: 'Fusão física dos tecidos urbanos de cidades vizinhas que cresceram até se tocar, formando um contínuo urbano.' },
    { q: 'O que é verticalização urbana?',                    a: 'Crescimento das cidades para cima, com construção de prédios altos em áreas centrais valorizadas.' },
    { q: 'O que é macrocefalia urbana?',                      a: 'Concentração excessiva de população, serviços e poder em poucas metrópoles, gerando desequilíbrio no sistema urbano.' }
  ],

  mnemonics: [
    { trigger: 'Ciclo da segregação',    memory: '"ESP → Especulação → Solo caro → Pobre sai → Periferia cresce sem serviços → mais Segregação. ESP = ciclo vicioso".' },
    { trigger: 'Estatuto da Cidade 2001', memory: '"IPTU + Outorga + Regular = IOR — Instrumentos que tentam corrigir a cidade injusta".' },
    { trigger: 'Desmetropolização',       memory: '"Metro não desapareceu, só dividiu o trono com as médias. O rei ainda existe, mas agora tem mais príncipes".' }
  ],

  miniReview: [
    { q: 'Por que a especulação imobiliária gera favelização?',
      a: 'A especulação valoriza áreas centrais, tornando-as inacessíveis para trabalhadores de baixa renda. Sem opção, essas pessoas ocupam encostas, várzeas e áreas de risco — gerando favelas. O ciclo se mantém pela falta de políticas habitacionais e controle do uso do solo.' },
    { q: 'Por que a conurbação exige gestão metropolitana compartilhada?',
      a: 'Quando cidades se fundem fisicamente, problemas como transporte, saneamento, segurança e poluição ultrapassam limites municipais. Um município sozinho não resolve. A Constituição e o Estatuto da Cidade exigem cooperação interfederativa.' }
  ],

  warmup: [
    {
      prompt: 'O processo pelo qual duas ou mais cidades crescem até que seus limites físicos se unem formando um contínuo urbano é denominado:',
      options: [
        { text: 'Verticalização',   correct: false },
        { text: 'Conurbação',       correct: true  },
        { text: 'Gentrificação',    correct: false },
        { text: 'Macrocefalia',     correct: false }
      ],
      explanation: 'Conurbação = cidades que crescem tanto que colam. O Grande ABC paulista (Santo André, São Bernardo, São Caetano + SP) é um exemplo clássico. A Grande Recife (Recife + Olinda + Caruaru) é outro. Os limites municipais existem no papel, mas a paisagem urbana é contínua.'
    },
    {
      prompt: 'A "migração pendular" nas regiões metropolitanas refere-se ao:',
      options: [
        { text: 'Retorno de migrantes às suas cidades de origem',                                      correct: false },
        { text: 'Movimento diário de pessoas entre município de residência e de trabalho/estudo',      correct: true  },
        { text: 'Migração sazonal de trabalhadores rurais para colheitas',                             correct: false },
        { text: 'Fluxo de refugiados entre países vizinhos',                                          correct: false }
      ],
      explanation: 'Pendular = vai e vem todo dia, como um pêndulo. A pessoa mora em Guarulhos/SP, mas trabalha no centro de São Paulo. Sai às 5h, volta às 21h. Essa migração sobrecarrega o transporte público e consome horas da vida do trabalhador — consequência direta da segregação imobiliária que o empurrou para longe do emprego.'
    },
    {
      prompt: 'O Estatuto da Cidade (Lei 10.257/2001) utiliza o IPTU progressivo como instrumento para:',
      options: [
        { text: 'Arrecadar mais impostos para pagar dívida pública municipal',                         correct: false },
        { text: 'Combater a especulação imobiliária e promover a função social da propriedade',        correct: true  },
        { text: 'Financiar programas de habitação nas periferias exclusivamente',                      correct: false },
        { text: 'Aumentar o valor venal dos imóveis centrais para atrair investidores',                correct: false }
      ],
      explanation: 'IPTU progressivo no tempo: terreno/imóvel subutilizado no centro paga imposto crescente a cada ano. A ideia é forçar o proprietário a usar o imóvel (moradia, comércio) ou vendê-lo — acabando com terrenos especulativos vazios em áreas bem servidas. É um instrumento de controle do mercado imobiliário para garantir que a cidade sirva a todos, não apenas aos especuladores.'
    }
  ],

  guidedPractice: [
    {
      prompt: '🔍 DICA: Pense na relação entre preço do solo e deslocamentos.\n\nQuando um trabalhador é empurrado para a periferia pela especulação imobiliária, qual impacto DIRETO isso tem na sua qualidade de vida?',
      options: [
        { text: 'Acesso melhor a parques e natureza, compensando a distância',                             correct: false },
        { text: 'Maior tempo e custo de deslocamento, reduzindo tempo com família e lazer',               correct: true  },
        { text: 'Maior proximidade com indústrias, facilitando o emprego formal',                         correct: false },
        { text: 'Redução de gastos com moradia, aumentando a renda disponível',                           correct: false }
      ],
      explanation: 'Trabalhador na periferia = 2h de ônibus para trabalhar + 2h para voltar = 4h diárias no transporte. 20 dias/mês = 80h perdidas. 80h/mês a mais que um colega que mora perto do trabalho. Isso é tempo que não fica com os filhos, que não descansa, que não estuda. A segregação não é só geográfica — ela rouba tempo de vida.'
    },
    {
      prompt: '🔍 DICA: Relacione o crescimento policêntrico com a qualidade de vida.\n\nPor que o crescimento das cidades médias pode representar uma oportunidade para reduzir desigualdades regionais?',
      options: [
        { text: 'Porque cidades médias têm melhor clima do que as metrópoles',                            correct: false },
        { text: 'Porque distribuem empregos, serviços e população além das metrópoles sobrecarregadas',   correct: true  },
        { text: 'Porque têm legislação ambiental menos restritiva que as grandes cidades',                correct: false },
        { text: 'Porque os trabalhadores rurais preferem cidades médias às metrópoles',                   correct: false }
      ],
      explanation: 'Cidades médias como Uberlândia, Ribeirão Preto, Joinville e Mossoró atraem indústrias e serviços, criando polos regionais de emprego e renda. Isso reduz a pressão migratória sobre SP e RJ, distribui oportunidades pelo território e permite que trabalhadores vivam mais perto do emprego — menos trânsito, menos custo, mais qualidade de vida. O risco é repetir os erros de urbanização acelerada sem planejamento.'
    }
  ],

  questions: [
    {
      prompt: 'A "rede urbana" brasileira é caracterizada por:',
      options: [
        { text: 'Distribuição homogênea de cidades de mesmo porte em todo o território',                     correct: false },
        { text: 'Hierarquia de cidades interconectadas por fluxos, com concentração no Sudeste e policentrismo crescente', correct: true  },
        { text: 'Ausência de interdependência entre municípios por causa das diferenças culturais regionais', correct: false },
        { text: 'Domínio exclusivo de São Paulo como único polo econômico nacional',                          correct: false }
      ],
      explanation: 'A rede urbana brasileira é hierárquica (São Paulo no topo, cidades pequenas na base), concentrada no Sudeste historicamente, mas com crescimento policêntrico recente: polos regionais como Campinas, Uberlândia, Curitiba, Florianópolis e Manaus dividem funções com as metrópoles tradicionais. A rede ficou mais complexa e descentralizada.'
    },
    {
      prompt: 'Qual afirmativa sobre desmetropolização está CORRETA?',
      options: [
        { text: 'As metrópoles perderam totalmente sua influência econômica e política',                  correct: false },
        { text: 'Cidades médias crescem mais rápido que metrópoles, mas estas mantêm sua influência',    correct: true  },
        { text: 'A desmetropolização ocorreu apenas no Norte e Nordeste do Brasil',                      correct: false },
        { text: 'O fenômeno levou ao esvaziamento das metrópoles do Sudeste',                            correct: false }
      ],
      explanation: 'Desmetropolização = perda RELATIVA de ritmo de crescimento (não de influência). SP, RJ e BH ainda dominam a economia nacional, mas crescem menos rápido que Uberlândia, Joinville ou Maringá. O centro não abdicou, só dividiu espaço com novos polos regionais. Confundir "crescer menos" com "perder poder" é um erro clássico em provas.'
    },
    {
      prompt: 'A gentrificação urbana resulta principalmente:',
      options: [
        { text: 'Na melhora da qualidade de vida de todos os moradores do bairro valorizado',              correct: false },
        { text: 'No deslocamento de moradores originais de baixa renda para periferias mais distantes',    correct: true  },
        { text: 'Na criação de novas favelas no centro das cidades gentrificadas',                         correct: false },
        { text: 'Na redução da especulação imobiliária por conta da renovação urbana',                     correct: false }
      ],
      explanation: 'Gentrificação: bairro popular vira "descolado" → artistas, jovens profissionais, bares e restaurantes chegam → aluguéis sobem → moradores originais (costureira, carpinteiro, idosa de baixa renda) não conseguem mais pagar → saem forçados. A valorização melhora a aparência do bairro, mas expulsa quem o construiu historicamente.'
    },
    {
      prompt: 'Por que a verticalização excessiva sem planejamento pode gerar problemas ambientais?',
      options: [
        { text: 'Porque prédios altos impermeabilizam menos solo do que casas no mesmo terreno',           correct: false },
        { text: 'Porque concentra população, aumenta consumo de recursos e pode criar ilhas de calor',     correct: true  },
        { text: 'Porque prédios altos impedem a circulação dos ventos e reduzem as chuvas',                correct: false },
        { text: 'Porque construtoras usam materiais menos sustentáveis em edifícios altos',                correct: false }
      ],
      explanation: 'Verticalização concentrada gera: ilhas de calor (concreto absorve e irradia mais calor que vegetação), sobrecarga na rede de água/esgoto/energia, redução de áreas verdes e impermeabilização do solo. Em zonas com prédios muito densos e pouca arborização, a temperatura pode ser 5–8°C mais alta que em áreas verdes próximas — fenômeno mensurável e cada vez mais grave com as mudanças climáticas.'
    },
    {
      prompt: 'Analise: "O Estatuto da Cidade prevê que terrenos urbanos subutilizados devem cumprir sua função social, sob pena de IPTU progressivo". Isso busca combater:',
      options: [
        { text: 'A favelização nas áreas periféricas',                                                    correct: false },
        { text: 'A especulação imobiliária que mantém terrenos centrais ociosos à espera de valorização', correct: true  },
        { text: 'O adensamento excessivo nos centros das metrópoles',                                     correct: false },
        { text: 'A migração de trabalhadores rurais para as cidades',                                     correct: false }
      ],
      explanation: 'Terreno vazio no centro = especulação pura. O proprietário espera valorizar sem usar. O IPTU progressivo aumenta a cada ano de subutilização, tornando a espera especulativa cara. A lógica: se o terreno é bem localizado e servido pela cidade (infraestrutura paga por todos), ele deve servir à cidade (moradia, comércio, serviços) — não apenas ao enriquecimento privado.'
    },
    {
      prompt: 'Qual alternativa demonstra corretamente a relação entre segregação socioespacial e mobilidade urbana?',
      options: [
        { text: 'A segregação reduz os deslocamentos, pois as pessoas trabalham perto de casa na periferia', correct: false },
        { text: 'A expulsão para a periferia aumenta o tempo e custo de deslocamento dos trabalhadores',    correct: true  },
        { text: 'O transporte público de qualidade elimina os efeitos da segregação socioespacial',          correct: false },
        { text: 'A verticalização dos bairros nobres reduz a necessidade de deslocamentos',                  correct: false }
      ],
      explanation: 'Segregado para longe = mais tempo no transporte. No Brasil, trabalhadores de baixa renda podem gastar até 3–4 horas por dia em deslocamentos, contra 30–60 min dos que moram em áreas nobres. Isso significa menos tempo de sono, lazer, família e estudo. A mobilidade urbana desigual é uma expressão concreta da segregação socioespacial — e um dos principais vetores de reprodução da pobreza.'
    },
    {
      prompt: 'A formação de "cidades dormitório" ao redor de metrópoles está associada principalmente a:',
      options: [
        { text: 'Preferência cultural por cidades menores e mais sossegadas',                              correct: false },
        { text: 'Alto custo de moradia no centro + expansão da rede de transporte + fuga da violência',    correct: true  },
        { text: 'Políticas de descentralização industrial planejadas pelo governo federal',                 correct: false },
        { text: 'Crescimento natural da população nos municípios vizinhos às metrópoles',                  correct: false }
      ],
      explanation: 'Cidade dormitório surge de um conjunto de fatores: (1) moradia inalcançável no centro → trabalhador se muda para cidade vizinha mais barata; (2) transporte (metrô, trem, ônibus, Uber) viabiliza o deslocamento diário; (3) violência urbana afasta famílias dos grandes centros. O resultado é um município que "dorme" — sem vida econômica plena, sem comércio ativo, sem lazer noturno — porque todos saem de manhã e voltam exaustos à noite.'
    },
    {
      prompt: 'A "macrocefalia urbana" gera qual consequência estrutural para o sistema urbano brasileiro?',
      options: [
        { text: 'Distribuição equilibrada de serviços e infraestrutura por todo o território',              correct: false },
        { text: 'Concentração de infraestrutura nas metrópoles e exclusão relativa das regiões periféricas', correct: true  },
        { text: 'Redução da migração interna entre regiões do país',                                       correct: false },
        { text: 'Crescimento acelerado das cidades pequenas por rejeição às metrópoles',                   correct: false }
      ],
      explanation: 'Macrocefalia = sistema desequilibrado. Quando SP e RJ concentram desproporcionalmente serviços, empregos e infraestrutura, as demais regiões ficam em desvantagem. Norte e Nordeste, historicamente, tiveram menos investimento → menos oportunidades → mais emigração para o Sudeste → mais macrocefalia. É um ciclo que o crescimento das cidades médias e do agronegócio interior está ajudando a romper, mas lentamente.'
    },
    {
      prompt: 'Analise as afirmativas sobre urbanização brasileira e assinale a INCORRETA:',
      options: [
        { text: 'A hierarquia urbana é dinâmica e pode mudar com transformações econômicas e políticas',    correct: false },
        { text: 'A conurbação elimina completamente a necessidade de gestão metropolitana compartilhada',   correct: true  },
        { text: 'A segregação socioespacial reflete e reproduz desigualdades de renda e acesso a serviços', correct: false },
        { text: 'O crescimento das cidades médias é uma tendência observada desde os anos 1990',           correct: false }
      ],
      explanation: 'A alternativa INCORRETA é que a conurbação "elimina" a necessidade de gestão compartilhada. Na verdade, é o contrário: a conurbação AUMENTA essa necessidade! Quando cidades se fundem fisicamente, problemas como transporte intermunicipal, saneamento de bacias compartilhadas e segurança pública se tornam impossíveis de resolver separadamente. A Constituição (art. 25) e o Estatuto da Cidade exigem exatamente essa cooperação.'
    },
    {
      prompt: 'A "rurbanização" (ou rururbanização) descreve:',
      options: [
        { text: 'O retorno em massa da população urbana para o campo por desencantamento com as cidades',   correct: false },
        { text: 'A difusão de atividades e modos de vida urbanos para áreas rurais, dissolve a fronteira campo-cidade', correct: true  },
        { text: 'A transformação de terras rurais em parques e reservas ambientais',                        correct: false },
        { text: 'A industrialização das atividades agrícolas com uso de tecnologia avançada',               correct: false }
      ],
      explanation: 'Rurbanização = zona cinzenta entre campo e cidade. Loteamentos urbanos "invadem" o campo; sítios de lazer aparecem; internet e comércio chegam ao interior; trabalhadores rurais usam smartphones e supermercados. Ao mesmo tempo, nas periferias urbanas, aparecem criações de animais, hortas e modos de vida rurais. A fronteira que parecia clara agora é porosa.'
    }
  ]
};

window.GEO_CAP7_S05 = GEO_CAP7_S05;
