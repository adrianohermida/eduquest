/**
 * GEO CAP6 FINAL — Exame Final: População Brasileira
 * Nível: hard | Cobertura total do Cap. 6
 */

const GEO_CAP6_SFINAL = {
  id: 'geo_cap6_sfinal',
  title: 'Exame Final — População Brasileira',
  icon: '🎓',
  difficulty: 'hard',
  estimatedTime: 20,

  learningObjectives: [
    'Demonstrar domínio completo dos conceitos de distribuição e densidade populacional',
    'Aplicar os princípios da transição demográfica a situações reais',
    'Interpretar pirâmides etárias e índices populacionais com precisão',
    'Analisar causas e consequências do êxodo rural e das migrações internas',
    'Sintetizar os temas do capítulo em análises integradas de nível vestibular'
  ],

  summary: {
    readTime: 2,
    content: [
      {
        icon: '🎓',
        title: 'Você chegou ao Exame Final!',
        text: 'Este é o teste definitivo do Capítulo 6.\nTocos os temas se cruzam aqui.\n\nRevise mentalmente:\n\n📍 DISTRIBUIÇÃO: D = pop ÷ área | Sudeste denso | Norte vazio\n📈 CRESCIMENTO: CV = natalidade − mortalidade | pico 2042\n🔺 ESTRUTURA: PEA 15–64 | bônus demográfico | pirâmides\n🚌 MIGRAÇÕES: êxodo rural | pendular | sazonal | retorno\n\nSão 10 questões de alto nível.\nMuitas têm encadeamento de conceitos.\n\n💪 Confiança: você se preparou. Vá em frente!'
      }
    ],

    flashcards: [
      { q: 'Fórmula da densidade demográfica',         a: 'D = população ÷ área (km²).' },
      { q: 'Taxa de reposição populacional',            a: '2,1 filhos/mulher. Abaixo = população futura menor.' },
      { q: 'Faixa etária da PEA',                       a: '15 a 64 anos.' },
      { q: 'Período mais intenso do êxodo rural no BR', a: '1960 a 1980.' },
      { q: 'Projeção do pico populacional do Brasil',   a: '~228 milhões em 2042 (IBGE).' }
    ],

    mnemonics: [
      { trigger: 'Últimas dicas',  memory: '"DCAM = Densidade + Crescimento + Análise etária + Migrações. Os 4 domínios que este exame vai testar. Respira, confia."' }
    ],

    miniReview: [
      { q: 'Como os 4 temas se relacionam?', a: 'Migração redistribui a população (afeta densidade). Crescimento muda o tamanho total (afeta pirâmide). A pirâmide mostra quem está ativo (PEA) e quem depende. Êxodo rural é o principal fluxo que conectou todos esses fenômenos no Brasil moderno.' }
    ]
  },

  warmup: [
    {
      prompt: 'Uma cidade tem 800.000 hab. em 200 km². Qual é sua densidade demográfica?',
      options: [
        { text: '400 hab/km²',   correct: false },
        { text: '4.000 hab/km²', correct: true  },
        { text: '40 hab/km²',    correct: false },
        { text: '40.000 hab/km²', correct: false }
      ],
      explanation: '800.000 ÷ 200 = 4.000 hab/km². Alta densidade! Para comparar: São Paulo capital tem ~7.000 hab/km². Paris tem ~20.000 hab/km². Essa cidade é altamente densa — típica de grandes centros urbanos.'
    },
    {
      prompt: 'O Brasil tem fertilidade de 1,7 filhos/mulher. Isso significa que:',
      options: [
        { text: 'A população crescerá rapidamente nas próximas décadas',                           correct: false },
        { text: 'Cada geração será menor que a anterior, levando ao declínio pós-2042',           correct: true  },
        { text: 'A mortalidade deverá cair para compensar a baixa fertilidade',                    correct: false },
        { text: 'O governo deve controlar ainda mais a natalidade para reduzir o crescimento',     correct: false }
      ],
      explanation: 'Fertilidade 1,7 < taxa de reposição 2,1. Cada casal gera menos de dois filhos em média. Com o tempo, cada geração fica menor que a anterior — o pico ~228M em 2042 marca o momento em que mortes = nascimentos. Depois, declínio.'
    },
    {
      prompt: 'Qual tipo de migração é caracterizado pelo deslocamento diário para trabalho ou estudo sem mudança de endereço?',
      options: [
        { text: 'Êxodo rural',       correct: false },
        { text: 'Migração pendular', correct: true  },
        { text: 'Migração sazonal',  correct: false },
        { text: 'Migração forçada',  correct: false }
      ],
      explanation: 'Migração pendular = deslocamento diário (ida e volta), sem alteração do domicílio oficial. É típica de Regiões Metropolitanas: moradores de cidades satélites que trabalham no centro. Intensifica-se com o espraiamento urbano e o custo alto de moradia central.'
    }
  ],

  guidedPractice: [
    {
      prompt: '🔍 DICA: Integre bônus demográfico e crescimento econômico.\n\nO Brasil desperdiçou seu bônus demográfico? Qual argumento sustenta a afirmação de que "aproveitamos parcialmente"?',
      options: [
        { text: 'Sim — o crescimento do PIB foi zero durante o bônus',                                 correct: false },
        { text: 'Parcialmente — houve crescimento econômico, mas investimentos em educação foram insuficientes para maximizar o dividendo', correct: true  },
        { text: 'Não — o Brasil aproveitou 100% com industrialização completa e zero desigualdade',    correct: false },
        { text: 'Não se aplica — o Brasil nunca teve bônus demográfico',                               correct: false }
      ],
      explanation: 'O Brasil cresceu economicamente (milagre dos 70s), mas não investiu suficientemente em educação de qualidade e redução de desigualdade para transformar o bônus demográfico em desenvolvimento sustentável como a Coreia do Sul fez. O resultado: crescimento com exclusão, que não gerou a produtividade necessária para o envelhecimento futuro.'
    },
    {
      prompt: '🔍 DICA: Relacione todos os fatores do êxodo.\n\nSe todos os fatores do êxodo rural (mecanização, seca e latifúndio) atuassem juntos com igual intensidade, qual seria o mais difícil de resolver?',
      options: [
        { text: 'A seca — porque não se pode controlar o clima',                                        correct: false },
        { text: 'A concentração fundiária — pois envolve poder político e econômico historicamente consolidado', correct: true  },
        { text: 'A mecanização — porque empresas tecnológicas são mais fortes que o governo',           correct: false },
        { text: 'São igualmente difíceis de resolver, sem diferença',                                   correct: false }
      ],
      explanation: 'A seca pode ser mitigada com obras hídricas (transposição, cisternas, irrigação). A mecanização é uma tendência global inevitável, mas pode ser compensada com reconversão profissional. A concentração fundiária envolve poder político (bancada ruralista, latifundiários historicamente ligados ao Estado) — é a mais politicamente difícil de enfrentar, por isso a reforma agrária nunca foi completamente implementada no Brasil.'
    }
  ],

  questions: [
    {
      prompt: 'A densidade demográfica média do Brasil é ~25 hab/km². Por que esse dado, isolado, é insuficiente para descrever a realidade territorial do país?',
      options: [
        { text: 'Porque o dado está desatualizado desde o censo de 2010',                                    correct: false },
        { text: 'Porque a média nacional oculta contrastes brutais entre regiões ultra-densas e vazios demográficos', correct: true  },
        { text: 'Porque densidade só é útil em países com menos de 50 milhões de habitantes',               correct: false },
        { text: 'Porque o IBGE não calcula a densidade por região, apenas nacional',                         correct: false }
      ],
      explanation: 'A média de 25 hab/km² esconde que o Sudeste tem >80 hab/km² e o Amazonas tem <3 hab/km². Usar apenas a média nacional seria como dizer "a temperatura média do Brasil é 22°C" — verdade estatística que não descreve o Nordeste (38°C) nem o Sul gaúcho no inverno (5°C). A análise geográfica requer especificidade regional.'
    },
    {
      prompt: 'Qual é a relação entre a industrialização do Sudeste e o êxodo rural das décadas de 1960–1980?',
      options: [
        { text: 'Industrialização eliminou empregos urbanos, empurrando trabalhadores de volta ao campo',    correct: false },
        { text: 'Industrialização criou demanda por mão de obra nas cidades, atraindo migrantes rurais',    correct: true  },
        { text: 'Não há relação — os dois fenômenos ocorreram em regiões diferentes',                       correct: false },
        { text: 'Industrialização ocorreu depois do êxodo, sendo sua consequência',                         correct: false }
      ],
      explanation: 'Causa-efeito correto: Industrialização Sudeste → empregos urbanos → atração de migrantes rurais. Simultaneamente: mecanização + latifúndio + seca → expulsão do campo. Os dois movimentos se reforçaram: empurrão do campo + puxão da cidade = êxodo intenso. A industrialização não causou o êxodo, mas criou o destino que o tornou possível.'
    },
    {
      prompt: 'Em 2010, o Brasil tinha ~190M de hab. Em 2042, atingirá ~228M. Qual é o crescimento absoluto nesse período?',
      options: [
        { text: '18 milhões',  correct: false },
        { text: '38 milhões',  correct: true  },
        { text: '58 milhões',  correct: false },
        { text: '228 milhões', correct: false }
      ],
      explanation: '228M − 190M = 38 milhões a mais em ~32 anos. Mas o ritmo caiu muito: entre 1960 e 1990 o Brasil cresceu 60M em 30 anos. De 2010 a 2042 crescerá 38M. A desaceleração reflete a queda da natalidade — cada vez menos pessoas são adicionadas por ano.'
    },
    {
      prompt: 'Um município tem pirâmide etária com 45% da população entre 15–64 anos, 40% abaixo de 15 e 15% acima de 65. Qual análise está correta?',
      options: [
        { text: 'Está em pleno bônus demográfico, pois a PEA representa a maioria',              correct: false },
        { text: 'Alta proporção de jovens indica crescimento potencial, mas alta carga de dependentes jovens', correct: true  },
        { text: 'Está envelhecida, pois há 15% de idosos',                                       correct: false },
        { text: 'Não é possível analisar sem dados de natalidade e mortalidade',                 correct: false }
      ],
      explanation: 'PEA = 45%. Dependentes = 40% jovens + 15% idosos = 55%. Há mais dependentes que ativos! Alta proporção de jovens (40% < 15 anos) indica potencial de crescimento futuro, mas no presente gera carga alta — muitas crianças para cuidar e educar. Não está em bônus demográfico (que exige PEA > dependentes). É pirâmide jovem com carga elevada.'
    },
    {
      prompt: 'Qual fenômeno geográfico é definido pelo crescimento de cidades médias no interior a partir dos anos 1990?',
      options: [
        { text: 'Êxodo rural de segunda onda — para cidades pequenas',            correct: false },
        { text: 'Desconcentração relativa do crescimento urbano em direção a polos regionais', correct: true  },
        { text: 'Migração pendular de longa distância',                           correct: false },
        { text: 'Retorno compulsório ao campo por política federal',              correct: false }
      ],
      explanation: 'A partir dos anos 1990, o modelo de concentração exclusiva nas metrópoles deu lugar à desconcentração relativa: cidades médias (Uberlândia, Ribeirão Preto, Joinville, Caruaru) cresceram como polos regionais, atraindo migrantes que antes iriam direto para SP/RJ. Isso reduziu o êxodo rural direto para metrópoles, mas não eliminou os fluxos migratórios.'
    },
    {
      prompt: 'O "envelhecimento acelerado sem riqueza equivalente" é um dos maiores desafios do Brasil. Qual combinação de fatores explica isso?',
      options: [
        { text: 'Alta fertilidade + alta mortalidade = população jovem pobre',                               correct: false },
        { text: 'Transição demográfica rápida + desenvolvimento econômico incompleto = velhos pobres sem infraestrutura', correct: true  },
        { text: 'Baixa fertilidade histórica desde os anos 1950 + alto PIB desde então',                     correct: false },
        { text: 'Imigração maciça de idosos estrangeiros que envelheceram o perfil nacional',                correct: false }
      ],
      explanation: 'O paradoxo brasileiro: a transição demográfica (queda da natalidade) foi rápida como em países ricos, mas o desenvolvimento econômico foi desigual e incompleto. O resultado: chegamos ao envelhecimento sem a renda, a infraestrutura de saúde geriátrica e o sistema previdenciário dos países que envelheceram devagar. "Velhos antes de ricos" é o diagnóstico que resume o desafio.'
    },
    {
      prompt: 'Como a xenofobia interna contra nordestinos se insere no contexto do êxodo rural?',
      options: [
        { text: 'Não tem relação — xenofobia é fenômeno exclusivamente internacional',                          correct: false },
        { text: 'Disputa por empregos + estereótipos midiáticos construíram preconceito regional contra os migrantes', correct: true  },
        { text: 'Nordestinos geraram xenofobia por se recusarem a se integrar culturalmente',                   correct: false },
        { text: 'A xenofobia interna é exclusividade do século XXI, sem relação com o êxodo',                  correct: false }
      ],
      explanation: 'Com milhões de nordestinos chegando ao Sudeste a partir dos anos 1950, criou-se disputa por empregos de baixa qualificação — e os mídia e o senso comum construíram estereótipos (o nordestino "atrasado", "ladrão de emprego"). Essa xenofobia interna tem raízes econômicas e foi reforçada por narrativas excludentes — é preconceito social, não biológico, e pode ser desconstruído pela educação.'
    },
    {
      prompt: 'Analise: "Investir em reforma agrária é também uma política urbana." Qual argumento sustenta essa afirmação paradoxal?',
      options: [
        { text: 'Não faz sentido — reforma agrária afeta apenas o campo',                                       correct: false },
        { text: 'Reduzindo o êxodo rural, a reforma agrária alivia a pressão sobre as cidades — é política urbana indireta', correct: true  },
        { text: 'A reforma agrária gera empregos urbanos diretos na construção civil',                          correct: false },
        { text: 'Pequenos agricultores sempre migram para a cidade após receber a terra',                       correct: false }
      ],
      explanation: 'Se a reforma agrária cria alternativas reais no campo (terra + crédito + assistência técnica), reduz o êxodo forçado. Menos migrantes chegando às cidades = menos pressão sobre habitação, transporte, saúde e educação urbanas. Reformas agrárias bem feitas são políticas urbanas preventivas — mais baratas que construir periferias e favelas depois.'
    },
    {
      prompt: '(VESTIBULAR) Analise as afirmativas:\nI. A densidade demográfica depende exclusivamente da população absoluta.\nII. A queda da fertilidade é causa e efeito do envelhecimento simultaneamente.\nIII. O bônus demográfico foi resultado direto da industrialização, não da dinâmica etária.\nIV. O êxodo rural redistribuiu a população sem alterar a cultura das metrópoles.\nQuais afirmativas estão INCORRETAS?',
      options: [
        { text: 'I e II',     correct: false },
        { text: 'I, III e IV', correct: true  },
        { text: 'II e III',   correct: false },
        { text: 'III e IV',   correct: false }
      ],
      explanation: 'I: INCORRETA — densidade depende de população E área (D = pop ÷ área). II: CORRETA — baixa fertilidade = menos jovens amanhã = mais proporção de idosos = envelhecimento. III: INCORRETA — bônus demográfico é fenômeno etário (muita PEA), não resultado direto da industrialização (que o aproveitou, mas não o causou). IV: INCORRETA — o êxodo trouxe culturas regionais que transformaram as metrópoles (forró, culinária, festas). Incorretas: I, III e IV.'
    },
    {
      prompt: '(VESTIBULAR) Um município de 100.000 hab. tem 38% de jovens (< 15), 52% de adultos (15–64) e 10% de idosos (> 64). Sua natalidade é 20‰ e mortalidade é 8‰. O Índice de Envelhecimento é:',
      options: [
        { text: '10',    correct: false },
        { text: '26',    correct: true  },
        { text: '38',    correct: false },
        { text: '76',    correct: false }
      ],
      explanation: 'Índice de Envelhecimento = (idosos ÷ jovens) × 100 = (10 ÷ 38) × 100 = 26,3 ≈ 26. Ainda muito jovem (< 100 = mais jovens que idosos). Para comparação: o Brasil em 2020 tinha IE de ~52. Japão tem IE > 250. Esse município está na fase inicial da transição — crescimento vegetativo de 12‰ confirma.'
    }
  ],

  adaptiveReview: [
    {
      prompt: 'EXAME FINAL — DIFÍCIL: Se o Brasil implementar imigração estruturada de 300.000 jovens adultos/ano a partir de 2042 (ano do pico), como isso afetaria o envelhecimento?',
      options: [
        { text: 'Resolveria completamente o envelhecimento sem nenhuma reforma previdenciária',    correct: false },
        { text: 'Desaceleraria o envelhecimento, ampliaria a PEA e adiaria o deficit previdenciário, mas não seria suficiente sozinho', correct: true  },
        { text: 'Não teria efeito pois imigrantes também envelhecem',                             correct: false },
        { text: 'Causaria desemprego estrutural e pioraria o problema',                           correct: false }
      ],
      explanation: '300.000 imigrantes jovens/ano = 3M em 10 anos = ampliação da PEA e da arrecadação. Isso desaceleraria o envelhecimento relativo e aliviaria o INSS a curto prazo. Mas: (1) imigrantes também envelhecem; (2) 300K/ano é pouco para uma população de 228M; (3) precisa de integração efetiva. É complemento necessário, não solução única. Reforma previdenciária, produtividade e políticas de família continuam essenciais.'
    },
    {
      prompt: 'EXAME FINAL — DIFÍCIL: Três fatores do êxodo rural (mecanização, seca, latifúndio) atuaram juntos. Se apenas a seca fosse eliminada por obras hídricas, o êxodo teria cessado?',
      options: [
        { text: 'Sim — a seca era o único fator real, os outros eram secundários',                          correct: false },
        { text: 'Não — mecanização e latifúndio continuariam gerando desemprego e falta de terra',          correct: true  },
        { text: 'Sim — sem seca, o Nordeste seria tão desenvolvido quanto o Sudeste',                       correct: false },
        { text: 'Não — pois a atração da cidade é irresistível independentemente das condições do campo',   correct: false }
      ],
      explanation: 'A seca foi gatilho, não causa única. Com obras hídricas (transposição do São Francisco, cisternas), a produção agropecuária melhora — mas se a terra continua concentrada nos latifúndios e a mecanização substitui mão de obra, o trabalhador rural ainda não tem emprego nem perspectiva. Para cessar o êxodo forçado, seria preciso agir nos três vetores simultaneamente: água + terra + emprego rural.'
    }
  ],

  rewards: { xp: 250, gems: 25, badge: '🎓 Mestre da População Brasileira' },
  completionMessage: '🎓 Parabéns! Você domina a População Brasileira em nível de mestria. Da distribuição ao êxodo, da pirâmide ao bônus — é tudo seu agora.',
  nextStage: null
};

window.GEO_CAP6_SFINAL = GEO_CAP6_SFINAL;
