/**
 * GEO STAGE 04 — Regiões do Brasil
 */

const GEO_S04 = {
  id: 'geo_s04',
  title: 'Regiões do Brasil',
  icon: '🗺️',
  difficulty: 'medium',
  estimatedTime: 14,

  learningObjectives: [
    'Identificar as 5 regiões do Brasil e seus estados',
    'Reconhecer as características geográficas de cada região',
    'Comparar diferenças econômicas e climáticas entre regiões',
    'Entender as desigualdades regionais brasileiras',
    'Conhecer a importância de cada região para o desenvolvimento nacional'
  ],

  summary: {
    readTime: 3,
    content: [
      {
        icon: '🟢',
        title: 'Norte e Nordeste',
        text: 'REGIÃO NORTE (9 estados: AM, PA, AC, RO, RR, AP, TO):\n• Maior região em área (45% do Brasil)\n• Menor densidade demográfica\n• Domínio da Floresta Amazônica\n• Economia: extrativismo, agropecuária, turismo ecológico\n\nREGIÃO NORDESTE (9 estados: BA, SE, AL, PE, PB, RN, CE, PI, MA):\n• Maior população do Norte/Nordeste\n• Semiárido — fenômeno das secas\n• Polo turístico (litoral)\n• Economia: cana-de-açúcar histórica, petróleo (BA), fruticultura irrigada, turismo\n• 2ª região mais populosa (28% da população brasileira)'
      },
      {
        icon: '🟡',
        title: 'Centro-Oeste e Sul',
        text: 'REGIÃO CENTRO-OESTE (4 unidades: GO, MT, MS, DF):\n• Coração do agronegócio brasileiro (soja, milho, gado)\n• Cerrado — bioma mais ameaçado\n• Capital federal: Brasília\n• Crescimento econômico acelerado desde os anos 1970\n\nREGIÃO SUL (3 estados: PR, SC, RS):\n• Menor região em área (6,7% do Brasil)\n• Clima subtropical — 4 estações, geadas, neve\n• Colonização europeia (alemã, italiana, polonesa)\n• Alta qualidade de vida, IDH mais alto do Brasil\n• Economia: grãos, suinocultura, agroindústria, tecnologia'
      },
      {
        icon: '🔴',
        title: 'Sudeste — O Motor Econômico',
        text: 'REGIÃO SUDESTE (4 estados: SP, RJ, MG, ES):\n• Menor em área (11%) mas economicamente mais importante\n• Concentra ~55% do PIB brasileiro\n• Maior densidade populacional (~88 milhões — 42% do Brasil)\n• São Paulo: maior metrópole da América do Sul\n\nEconomia:\n• Centro industrial e financeiro (SP)\n• Petróleo offshore (RJ — Bacia de Campos e pré-sal)\n• Mineração (MG — maior produtor de ferro do Brasil)\n• Café, cana, citricultura (SP)\n\n🔑 DESIGUALDADE REGIONAL: enquanto o Sudeste concentra riqueza, o Norte e Nordeste têm PIB per capita muito menor — herança histórica da colonização e concentração de investimentos.'
      }
    ],

    flashcards: [
      { q: 'Qual é a maior região do Brasil em área?',       a: 'Norte — 45% do território (9 estados).' },
      { q: 'Qual região concentra mais PIB?',               a: 'Sudeste — ~55% do PIB brasileiro.' },
      { q: 'Capital federal fica em qual região?',          a: 'Centro-Oeste (Brasília, DF).' },
      { q: 'Qual região tem o maior IDH médio?',            a: 'Sul — maior qualidade de vida e IDH médio do Brasil.' },
      { q: 'Qual estado é o maior produtor de soja?',       a: 'Mato Grosso (MT) — Região Centro-Oeste.' }
    ],

    mnemonics: [
      { trigger: '5 regiões + estados representativos', memory: '"NORTE (AM/PA), NORDESTE (BA/CE), CENTRO-OESTE (GO/MT+DF), SUDESTE (SP/RJ/MG), SUL (RS/SC/PR)."' },
      { trigger: 'Desigualdade regional',               memory: '"SUDESTE = $ $ $. NORTE/NORDESTE = menor IDH. CENTRO-OESTE = crescendo rápido. SUL = melhor qualidade de vida."' }
    ],

    miniReview: [
      { q: 'Por que o Sudeste concentra tanta riqueza?', a: 'Herança histórica: café valorizou SP/MG; Rio foi capital; industrialização concentrou-se no Sudeste no séc. XX.' },
      { q: 'O que caracteriza a desigualdade regional brasileira?', a: 'Grande diferença de PIB per capita, IDH e infraestrutura entre o Sudeste/Sul (mais ricos) e Norte/Nordeste (mais pobres).' }
    ]
  },

  warmup: [
    {
      prompt: 'A região brasileira com maior área territorial é:',
      options: [
        { text: 'Nordeste',     correct: false },
        { text: 'Centro-Oeste', correct: false },
        { text: 'Norte',        correct: true  },
        { text: 'Sudeste',      correct: false }
      ],
      explanation: 'A Região Norte ocupa 45% do Brasil (3,85 milhões de km²) — a maior em área. Mas tem a menor densidade demográfica do país.'
    },
    {
      prompt: 'Brasília (capital federal) está localizada na região:',
      options: [
        { text: 'Sudeste',      correct: false },
        { text: 'Centro-Oeste', correct: true  },
        { text: 'Norte',        correct: false },
        { text: 'Nordeste',     correct: false }
      ],
      explanation: 'Brasília (DF) está no Centro-Oeste — construída no Planalto Central para integrar o interior do Brasil. Inaugurada em 21 de abril de 1960.'
    },
    {
      prompt: 'Qual região brasileira tem o maior IDH (Índice de Desenvolvimento Humano) médio?',
      options: [
        { text: 'Sudeste',  correct: false },
        { text: 'Sul',      correct: true  },
        { text: 'Norte',    correct: false },
        { text: 'Nordeste', correct: false }
      ],
      explanation: 'O Sul do Brasil tem o maior IDH médio — estados como Santa Catarina e Rio Grande do Sul lideram indicadores de educação, saúde e renda per capita.'
    }
  ],

  guidedPractice: [
    {
      prompt: '🔍 DICA: A colonização explica muito da desigualdade regional.\n\nPor que o Nordeste teve desenvolvimento econômico menor que o Sudeste?',
      options: [
        { text: 'O Nordeste não tem recursos naturais suficientes para o desenvolvimento',              correct: false },
        { text: 'A economia colonial baseada no latifúndio açucareiro não criou classe média; os investimentos industriais foram para o Sudeste', correct: true  },
        { text: 'O clima seco do Nordeste impede qualquer atividade econômica significativa',            correct: false },
        { text: 'O governo federal sempre proibiu indústrias no Nordeste',                              correct: false }
      ],
      explanation: 'O Nordeste tinha latifúndios de cana-de-açúcar (trabalho escravo) — estrutura que concentrou riqueza sem criar classe média consumidora. Na industrialização do séc. XX, o capital foi para SP/RJ. O Nordeste ficou para trás estruturalmente — não por falta de recursos.'
    },
    {
      prompt: '🔍 DICA: O Centro-Oeste cresceu muito nos últimos 50 anos.\n\nO que explica o boom econômico do Centro-Oeste a partir dos anos 1970?',
      options: [
        { text: 'A descoberta de petróleo no Cerrado goiano',                                  correct: false },
        { text: 'A revolução da soja + construção de Brasília + modernização da agricultura',  correct: true  },
        { text: 'O fluxo de imigrantes europeus que trouxeram tecnologia industrial',         correct: false },
        { text: 'O deslocamento das indústrias do Sudeste para escapar dos impostos',         correct: false }
      ],
      explanation: 'O Centro-Oeste cresceu por 3 fatores simultâneos: 1) Brasília (1960) criou demanda e infraestrutura; 2) A Revolução Verde e a soja transformaram o Cerrado em "celeiro do mundo"; 3) Modernização da agropecuária (EMBRAPA, insumos, mecanização).'
    }
  ],

  questions: [
    {
      prompt: 'Quantos estados compõem a Região Norte do Brasil?',
      options: [
        { text: '6',  correct: false },
        { text: '7',  correct: false },
        { text: '9',  correct: true  },
        { text: '11', correct: false }
      ],
      explanation: 'A Região Norte tem 9 estados: Amazonas, Pará, Acre, Roraima, Rondônia, Amapá e Tocantins. É a maior região em área e a menos populosa.'
    },
    {
      prompt: 'Qual estado brasileiro é o maior produtor de soja do mundo?',
      options: [
        { text: 'Goiás',          correct: false },
        { text: 'Mato Grosso',    correct: true  },
        { text: 'Mato Grosso do Sul', correct: false },
        { text: 'Paraná',         correct: false }
      ],
      explanation: 'Mato Grosso (MT) é o maior estado produtor de soja do Brasil — e o Brasil é o maior exportador de soja do mundo. O Cerrado do MT foi transformado em lavoura de soja nas últimas décadas.'
    },
    {
      prompt: 'A colonização europeia (alemã, italiana, polonesa) no Sul do Brasil explica:',
      options: [
        { text: 'O clima subtropical da região',                                              correct: false },
        { text: 'A estrutura de pequenas propriedades e a diversificação econômica típica da região', correct: true  },
        { text: 'A independência política do Sul em relação ao restante do Brasil',           correct: false },
        { text: 'A maior população negra da região em relação ao Nordeste',                  correct: false }
      ],
      explanation: 'Os colonos europeus (sécs. XIX-XX) trouxeram o modelo de pequena propriedade familiar — diferente dos latifúndios do Nordeste e Sudeste. Isso criou uma classe média rural, diversificação de culturas e base para a agroindústria moderna.'
    },
    {
      prompt: 'A Zona Franca de Manaus está localizada na Região Norte e:',
      options: [
        { text: 'É a maior área de livre comércio do mundo em volume de produtos',           correct: false },
        { text: 'É um polo industrial com incentivos fiscais que transformou Manaus numa metrópole industrial', correct: true  },
        { text: 'É uma área protegida onde o desmatamento é proibido desde 1967',           correct: false },
        { text: 'É o principal porto de escoamento da produção do Amazonas',                 correct: false }
      ],
      explanation: 'A Zona Franca de Manaus (criada em 1967) concede isenções fiscais para indústrias — transformou Manaus em polo de eletroeletrônicos, motocicletas e bens de consumo no coração da Amazônia.'
    },
    {
      prompt: 'Qual é a principal atividade econômica da Região Nordeste atualmente?',
      options: [
        { text: 'Exclusivamente cana-de-açúcar, como desde o período colonial',             correct: false },
        { text: 'Mix de agronegócio, petróleo (BA), turismo costeiro e polo industrial (Suape/PE)', correct: true  },
        { text: 'Somente extrativismo vegetal da Caatinga',                                 correct: false },
        { text: 'Principalmente produção de energia solar e eólica',                        correct: false }
      ],
      explanation: 'O Nordeste atual é diversificado: cana/etanol, fruticultura irrigada (PE, BA, RN), petróleo e petroquímica (BA), polo industrial de Suape (PE), turismo litorâneo e crescente produção de energia renovável (eólica e solar).'
    },
    {
      prompt: 'O "pré-sal" brasileiro está concentrado principalmente na região:',
      options: [
        { text: 'Norte',    correct: false },
        { text: 'Nordeste', correct: false },
        { text: 'Sudeste',  correct: true  },
        { text: 'Sul',      correct: false }
      ],
      explanation: 'O pré-sal (camada de petróleo abaixo do sal no fundo do Atlântico) está concentrado nas bacias de Santos e Campos — ao largo do litoral do Rio de Janeiro, São Paulo e Espírito Santo (Região Sudeste).'
    },
    {
      prompt: 'Por que Minas Gerais é tão importante para a economia brasileira?',
      options: [
        { text: 'É o maior estado industrial do Brasil, superando São Paulo',               correct: false },
        { text: 'Tem as maiores reservas de minério de ferro + agropecuária + tecnologia',  correct: true  },
        { text: 'Tem o maior PIB do Brasil por causa da capital Belo Horizonte',            correct: false },
        { text: 'É o maior produtor de petróleo onshore do Brasil',                         correct: false }
      ],
      explanation: 'Minas Gerais é o maior produtor de minério de ferro (Quadrilátero Ferrífero), além de importante em agropecuária (café, bovinos), siderurgia (aço), tecnologia (BH) e turismo histórico (Ouro Preto).'
    },
    {
      prompt: 'O "fenômeno das secas" é uma característica especialmente marcante em qual região?',
      options: [
        { text: 'Norte',        correct: false },
        { text: 'Nordeste',     correct: true  },
        { text: 'Centro-Oeste', correct: false },
        { text: 'Sul',          correct: false }
      ],
      explanation: 'O Nordeste semiárido é a região mais castigada pelas secas — ciclicamente, períodos de 1 a 7 anos sem chuva afetam o sertão. O fenômeno La Niña intensifica as secas; El Niño pode trazer chuvas excessivas.'
    },
    {
      prompt: 'A política do governo federal para reduzir as desigualdades regionais inclui:',
      options: [
        { text: 'Transferir a sede das empresas do Sudeste para o Nordeste',                correct: false },
        { text: 'Programas de transferência de renda, SUDAM/SUDENE, Zona Franca e projetos de irrigação', correct: true  },
        { text: 'Proibir o crescimento do Sudeste para que o Norte/Nordeste se desenvolva', correct: false },
        { text: 'Dividir o Brasil em países independentes baseados nas regiões',             correct: false }
      ],
      explanation: 'Instrumentos de política regional brasileira: SUDENE (Nordeste), SUDAM (Norte), Zona Franca de Manaus, projetos de irrigação (PISF), programas sociais (Bolsa Família concentrava beneficiários no NE) e incentivos fiscais para investimentos.'
    },
    {
      prompt: 'Qual é a maior cidade da América Latina?',
      options: [
        { text: 'Cidade do México',  correct: false },
        { text: 'São Paulo',         correct: true  },
        { text: 'Buenos Aires',      correct: false },
        { text: 'Rio de Janeiro',    correct: false }
      ],
      explanation: 'São Paulo é a maior cidade da América Latina — com ~12 milhões de habitantes na cidade e ~22 milhões na Região Metropolitana. É o principal centro financeiro, industrial e cultural do Brasil e da América Latina.'
    }
  ],

  adaptiveReview: [
    {
      prompt: 'DIFÍCIL: Como o conceito de "desigualdade regional" no Brasil é diferente da simples "pobreza"?',
      options: [
        { text: 'São sinônimos — regiões pobres são apenas as que têm muita pobreza',      correct: false },
        { text: 'Desigualdade regional é estrutural — diferenças históricas de investimento, infraestrutura e oportunidades que perpetuam a diferença entre regiões', correct: true  },
        { text: 'A desigualdade regional refere-se apenas à distribuição geográfica da água', correct: false },
        { text: 'Regiões "desiguais" são as que têm muitos estados diferentes culturalmente', correct: false }
      ],
      explanation: 'Pobreza individual pode ser aliviada com transferência de renda. Desigualdade regional é estrutural: diferença histórica de infraestrutura (rodovias, portos, universidades), investimento histórico (capital industrial foi para SP/RJ) e acesso a mercados. O Nordeste não é pobre por falta de recursos — é desigual por herança histórica que se perpetua mesmo com crescimento econômico.'
    }
  ],

  rewards: { xp: 140, gems: 14, badge: '🗺️ Conhecedor do Brasil' },
  completionMessage: '🗺️ Você domina as regiões brasileiras — de norte a sul!',
  nextStage: 'geo_s05'
};

window.GEO_S04 = GEO_S04;
