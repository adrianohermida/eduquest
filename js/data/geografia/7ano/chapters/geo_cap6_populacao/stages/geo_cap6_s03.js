/**
 * GEO CAP6 STAGE 03 — Estrutura Etária e Pirâmides Populacionais
 * BNCC: EF07GE05 | Tópico 3
 */

const GEO_CAP6_S03 = {
  id: 'geo_cap6_s03',
  title: 'Estrutura Etária e Pirâmides',
  icon: '🔺',
  difficulty: 'medium',
  estimatedTime: 14,

  learningObjectives: [
    'Ler e interpretar pirâmides etárias de diferentes perfis',
    'Distinguir pirâmide jovem, adulta e envelhecida',
    'Compreender o conceito de PEA (População Economicamente Ativa)',
    'Explicar o bônus demográfico e sua janela de oportunidade',
    'Relacionar envelhecimento populacional com desafios previdenciários e de saúde'
  ],

  summary: {
    readTime: 4,
    content: [
      {
        icon: '🔺',
        title: 'O que a pirâmide etária nos conta',
        text: 'Uma pirâmide etária é um gráfico de barras duplas.\nÀ esquerda: homens. À direita: mulheres.\nEm baixo: jovens. Em cima: idosos.\n\nTrês perfis principais:\n\n• PIRÂMIDE JOVEM: base larga, topo estreito\n  → Alta natalidade, mortalidade ainda alta nos idosos\n  → Típica de países em desenvolvimento (ex: Níger, áreas rurais)\n\n• PIRÂMIDE ADULTA: base moderada, topo crescendo\n  → Fase intermediária. Brasil atual!\n\n• PIRÂMIDE ENVELHECIDA: base estreita, topo alargado\n  → Baixa natalidade, alta expectativa de vida\n  → Típica de Japão, Alemanha, países europeus\n\n🔑 O Brasil está migrando de pirâmide jovem para adulta/envelhecida — esse processo tem efeitos profundos na economia e na saúde pública.'
      },
      {
        icon: '💼',
        title: 'PEA e o bônus demográfico',
        text: 'A PEA é a População Economicamente Ativa — pessoas de 15 a 64 anos que trabalham ou buscam emprego.\n\nBônus Demográfico:\nOcorre quando a PEA é muito maior que a população dependente (crianças + idosos).\n→ Muitos trabalhadores, poucos dependentes\n→ Maior produção, mais poupança, mais crescimento\n\nO Brasil viveu seu bônus demográfico entre 1970 e 2030 (aproximadamente).\nEssa janela está se fechando!\n\nDepois do bônus, vem o ônus:\n→ Muitos idosos + poucos jovens\n→ Mais despesas com saúde e aposentadoria\n→ Menos contribuintes para o sistema previdenciário\n\n🔑 Países que aproveitaram o bônus demográfico investindo em educação e saúde (Coreia do Sul, Cingapura) se tornaram potências. Os que desperdiçaram enfrentam crise.'
      },
      {
        icon: '👴',
        title: 'Envelhecimento — desafio do século XXI',
        text: 'Em 2010, o Brasil tinha ~10% de idosos (>60 anos).\nEm 2040, serão ~25%.\n\nO envelhecimento gera pressões em 3 frentes:\n\n1. PREVIDÊNCIA SOCIAL (INSS):\n   → Mais aposentados + menos jovens contribuindo = deficit\n\n2. SISTEMA DE SAÚDE:\n   → Idosos demandam mais internações, medicamentos, reabilitação\n\n3. FAMÍLIA:\n   → Mulheres ainda são as principais cuidadoras de idosos\n   → Tensão entre trabalho feminino e cuidado doméstico\n\nÍndice de Envelhecimento = idosos ÷ jovens × 100\n→ Quando ultrapassa 100, há mais idosos que jovens\n\n🔑 O Brasil está envelhecendo mais rápido que países ricos envelheceram — sem ter tido tempo de construir infraestrutura adequada. Chegamos velhos antes de ficar ricos.'
      }
    ],

    flashcards: [
      { q: 'O que é PEA?',                              a: 'População Economicamente Ativa — pessoas de 15 a 64 anos que trabalham ou buscam emprego.' },
      { q: 'O que é bônus demográfico?',                a: 'Período em que a PEA (trabalhadores) supera amplamente a população dependente — janela de oportunidade econômica.' },
      { q: 'Como é uma pirâmide etária jovem?',         a: 'Base larga (muitos jovens), topo estreito (poucos idosos). Alta natalidade, ainda alta mortalidade de idosos.' },
      { q: 'Como é uma pirâmide etária envelhecida?',   a: 'Base estreita (poucos jovens), topo alargado (muitos idosos). Baixa natalidade, alta expectativa de vida.' },
      { q: 'Qual é o Índice de Envelhecimento?',        a: 'Idosos ÷ Jovens × 100. Quando passa de 100, há mais idosos que jovens.' },
      { q: 'Qual a expectativa de vida dos brasileiros atualmente?', a: 'Cerca de 76 anos (IBGE 2022) — 10 anos a mais que em 1980.' }
    ],

    mnemonics: [
      { trigger: 'Pirâmide jovem vs. envelhecida', memory: '"BASE LARGA = JOVEM (muitos bebês). BASE ESTREITA = VELHA (poucos bebês). Pensa em triângulo: quanto mais nova a população, mais "normal" o triângulo."' },
      { trigger: 'Bônus demográfico',               memory: '"BÔNUS = MUITOS trabalhadores, POUCOS dependentes. Como time de futebol com 9 na campo e 2 no banco. Depois inverte."' },
      { trigger: 'PEA = 15 a 64 anos',              memory: '"Quem trabalha tem de 15 a 64: adolescente trabalhando aos 15, aposentado saindo aos 64. Fora disso = dependente."' }
    ],

    miniReview: [
      { q: 'Por que o Brasil "chegou velho antes de ficar rico"?',
        a: 'O Brasil envelheceu mais rápido que países desenvolvidos — sem ter construído infraestrutura de saúde, previdência e cuidados adequados ao longo do processo. É um desafio duplo: envelhecer rápido + com recursos ainda insuficientes.' },
      { q: 'Como o bônus demográfico pode ser transformado em desenvolvimento?',
        a: 'Investindo os recursos da PEA numerosa em educação, infraestrutura e saúde — criando capacidade produtiva que beneficia as gerações futuras. Coreia do Sul e Cingapura são exemplos exitosos.' }
    ]
  },

  warmup: [
    {
      prompt: 'Uma pirâmide etária com base larga e topo estreito indica que a população é:',
      options: [
        { text: 'Envelhecida e com baixa natalidade', correct: false },
        { text: 'Jovem e com alta natalidade',        correct: true  },
        { text: 'Estável, sem crescimento nem declínio', correct: false },
        { text: 'Em declínio acelerado',              correct: false }
      ],
      explanation: 'Base larga = muitos jovens (alta natalidade). Topo estreito = poucos idosos (menor expectativa de vida histórica). Essa pirâmide é típica de países em desenvolvimento, como o Brasil nos anos 1960–1970.'
    },
    {
      prompt: 'A PEA (População Economicamente Ativa) inclui pessoas com quais idades?',
      options: [
        { text: '0 a 14 anos',   correct: false },
        { text: '15 a 64 anos',  correct: true  },
        { text: '25 a 59 anos',  correct: false },
        { text: '60 anos ou mais', correct: false }
      ],
      explanation: 'A PEA compreende a faixa de 15 a 64 anos — pessoas em idade de trabalhar. Abaixo de 15 são consideradas população jovem dependente; acima de 64 são idosos dependentes (em geral). A proporção da PEA em relação aos dependentes define o bônus demográfico.'
    },
    {
      prompt: 'O bônus demográfico ocorre quando:',
      options: [
        { text: 'Há mais crianças que adultos',                                 correct: false },
        { text: 'A PEA (15–64 anos) é muito maior que a população dependente', correct: true  },
        { text: 'A natalidade supera a mortalidade por muitos anos',            correct: false },
        { text: 'O governo reduz impostos para famílias com filhos',            correct: false }
      ],
      explanation: 'Bônus demográfico = muitos trabalhadores ativos, poucos dependentes (crianças + idosos). Isso gera mais produção, mais poupança e mais potencial de crescimento econômico — uma janela histórica de oportunidade.'
    }
  ],

  guidedPractice: [
    {
      prompt: '🔍 DICA: Índice de Envelhecimento = (idosos ÷ jovens) × 100.\n\nSe há 30 idosos para cada 100 jovens, o Índice de Envelhecimento é:',
      options: [
        { text: '3',    correct: false },
        { text: '30',   correct: true  },
        { text: '130',  correct: false },
        { text: '300',  correct: false }
      ],
      explanation: '(30 ÷ 100) × 100 = 30. O índice é 30 — ainda jovem. Quando o índice passa de 100, há mais idosos que jovens. O Brasil está subindo esse índice rapidamente — de ~18 em 2000 para mais de 50 hoje.'
    },
    {
      prompt: '🔍 DICA: Pense nos custos do envelhecimento para o INSS.\n\nSe a proporção de idosos dobrar e a de jovens cair pela metade, qual é o impacto mais provável?',
      options: [
        { text: 'Mais contribuições para o INSS, pois idosos pagam mais impostos',     correct: false },
        { text: 'Mais gastos com aposentadorias e menos contribuintes — possível deficit', correct: true  },
        { text: 'Estabilidade do sistema, pois os efeitos se compensam',               correct: false },
        { text: 'Melhora do sistema de saúde por redução da demanda pediátrica',       correct: false }
      ],
      explanation: 'Mais idosos = mais beneficiários do INSS. Menos jovens = menos trabalhadores contribuindo. A equação se desequilibra: o sistema paga mais do que arrecada. Esse é o "ônus demográfico" — o reverso do bônus. O Brasil precisa de reformas estruturais para enfrentá-lo.'
    }
  ],

  questions: [
    {
      prompt: 'Qual a principal diferença entre uma pirâmide etária do Japão e a do Níger?',
      options: [
        { text: 'Ambas têm base larga, mas o Japão tem topo mais estreito',                         correct: false },
        { text: 'O Japão tem base estreita (envelhecida); o Níger tem base larga (jovem)',          correct: true  },
        { text: 'O Japão cresce mais rápido pois tem mais jovens por causa da imigração',           correct: false },
        { text: 'O Níger tem pirâmide envelhecida por causa das guerras que eliminaram os jovens',  correct: false }
      ],
      explanation: 'Japão: fertilidade de ~1,2, expectativa de vida de ~84 anos → pirâmide envelhecida com base estreita. Níger: fertilidade de ~7, mortalidade infantil alta → pirâmide jovem com base amplíssima. São os dois extremos do processo de transição demográfica.'
    },
    {
      prompt: 'Uma cidade perde 30% de sua população jovem (15–30 anos) por emigração. Qual impacto direto sobre a pirâmide etária?',
      options: [
        { text: 'A pirâmide fica com "entalhes" na faixa jovem — envelhecimento relativo',  correct: true  },
        { text: 'A base da pirâmide se alarga, pois os restantes têm mais filhos',          correct: false },
        { text: 'O índice de envelhecimento cai, pois há menos jovens para comparar',       correct: false },
        { text: 'A pirâmide não se altera, pois emigração não afeta a estrutura etária',   correct: false }
      ],
      explanation: 'Emigração seletiva por faixa etária cria "entalhes" (recortes) na pirâmide na faixa que emigrou. A cidade fica com menos adultos jovens e relativamente mais crianças (dos que ficaram) e idosos. Esse padrão é comum em municípios rurais que perderam jovens para metrópoles.'
    },
    {
      prompt: 'O "dividendo demográfico" ou bônus demográfico ocorre porque:',
      options: [
        { text: 'Há mais crianças que adultos, gerando mais mercado consumidor',                         correct: false },
        { text: 'A PEA numerosa produz mais e poupa mais, gerando crescimento com poucos dependentes',   correct: true  },
        { text: 'O governo recebe mais impostos de idosos aposentados',                                  correct: false },
        { text: 'Jovens têm mais energia e trabalham mais horas que adultos',                            correct: false }
      ],
      explanation: 'O dividendo demográfico funciona assim: PEA numerosa → mais produção + mais poupança → mais investimento → mais crescimento. E como há poucos dependentes (crianças e idosos), o Estado gasta menos por capita em educação infantil e saúde geriátrica — liberando recursos para investimento produtivo.'
    },
    {
      prompt: 'Uma região tem 40% da população com menos de 15 anos e 5% com mais de 65 anos. Essa estrutura indica:',
      options: [
        { text: 'Região envelhecida com alta mortalidade infantil',                          correct: false },
        { text: 'Região jovem com alta natalidade e ainda baixa esperança de vida nos idosos', correct: true  },
        { text: 'Região em pleno bônus demográfico com PEA dominante',                       correct: false },
        { text: 'Região em transição pós-transição com envelhecimento rápido',               correct: false }
      ],
      explanation: '40% abaixo de 15 = muitos jovens (alta natalidade). 5% acima de 65 = poucos idosos (mortalidade alta historicamente, expectativa de vida ainda baixa). Isso é pirâmide jovem — típica de regiões do interior da África Subsaariana ou do Brasil dos anos 1950.'
    },
    {
      prompt: 'Qual é o impacto do envelhecimento sobre os sistemas de saúde?',
      options: [
        { text: 'Reduz os custos, pois idosos adoecem menos que crianças',                                 correct: false },
        { text: 'Aumenta a demanda por serviços de alta complexidade e de longa permanência',               correct: true  },
        { text: 'Não afeta o sistema de saúde pois idosos têm plano privado',                              correct: false },
        { text: 'Diminui os custos pois há menos pessoas com doenças infecciosas infantis',                correct: false }
      ],
      explanation: 'Idosos demandam mais saúde: mais internações, cirurgias ortopédicas, controle de diabetes e hipertensão, medicamentos de uso contínuo, cuidados paliativos e de longa permanência. O custo per capita de saúde de um idoso é 3 a 5 vezes maior que o de um jovem adulto — pressão enorme para o SUS.'
    },
    {
      prompt: 'Qual indicador mostra mais diretamente o grau de envelhecimento de uma população?',
      options: [
        { text: 'Taxa de natalidade bruta',                  correct: false },
        { text: 'Índice de Envelhecimento',                  correct: true  },
        { text: 'Densidade demográfica',                     correct: false },
        { text: 'Crescimento vegetativo',                    correct: false }
      ],
      explanation: 'O Índice de Envelhecimento (idosos ÷ jovens × 100) mede diretamente a proporção entre as gerações. Quando supera 100, a população tem mais idosos que jovens — indicador de envelhecimento avançado. A taxa de natalidade e o crescimento vegetativo são indicadores indiretos.'
    },
    {
      prompt: 'A expectativa de vida no Brasil aumentou de ~55 anos (1960) para ~76 anos (2022). Qual impacto isso tem sobre a pirâmide etária?',
      options: [
        { text: 'A pirâmide fica mais jovem pois as pessoas vivem mais tempo em cada faixa',         correct: false },
        { text: 'O topo da pirâmide se alarga, pois mais pessoas sobrevivem até idades avançadas',  correct: true  },
        { text: 'A base da pirâmide se alarga automaticamente com o aumento da expectativa de vida', correct: false },
        { text: 'A pirâmide não muda, pois o crescimento vegetativo permanece o mesmo',              correct: false }
      ],
      explanation: 'Maior expectativa de vida = mais gente chegando às faixas etárias mais altas. O topo da pirâmide se alarga. Combinado com a queda da natalidade (base estreitando), o resultado é uma pirâmide que migra progressivamente do formato triangular para o retangular — típico de países envelhecidos.'
    },
    {
      prompt: 'Por que o Brasil "envelhece mais rápido que enriqueceu"?',
      options: [
        { text: 'Porque o governo ignorou o envelhecimento até recentemente',                                    correct: false },
        { text: 'Porque a transição demográfica brasileira foi mais rápida que nos países ricos, com menos tempo para adaptar a infraestrutura social', correct: true  },
        { text: 'Porque a mortalidade infantil nunca caiu, só a mortalidade de adultos',                         correct: false },
        { text: 'Porque a imigração de idosos de outros países aumentou a proporção de velhos',                  correct: false }
      ],
      explanation: 'Países europeus levaram 100+ anos para envelhecer. O Brasil fez a transição em 50 anos — sem ter construído, no mesmo ritmo, a infraestrutura previdenciária, de saúde geriátrica e de cuidados de longa duração que os países ricos têm. Esse descompasso é a "armadilha do envelhecimento rápido sem riqueza adequada".'
    },
    {
      prompt: 'Em um município rural onde os jovens emigraram, o impacto mais provável sobre o mercado de trabalho local é:',
      options: [
        { text: 'Aumento da oferta de emprego para idosos, que passam a trabalhar mais',                  correct: false },
        { text: 'Escassez de mão de obra produtiva e dificuldade de sucessão familiar nas propriedades',  correct: true  },
        { text: 'Redução do custo de vida, pois há menos competição por serviços',                        correct: false },
        { text: 'Melhora automática da produtividade agropecuária',                                       correct: false }
      ],
      explanation: 'Quando os jovens emigram, o campo perde sua força de trabalho mais produtiva. Fica com idosos e crianças: mão de obra escassa, dificuldade de tocar a propriedade familiar, risco de abandono de terras. Esse é o ciclo do esvaziamento rural — e um dos resultados do êxodo rural no Brasil.'
    },
    {
      prompt: '(VESTIBULAR) Um pesquisador analisa duas pirâmides: uma do Brasil de 1970 e outra de 2020. Qual mudança estrutural é esperada?',
      options: [
        { text: 'A pirâmide de 2020 tem base mais larga, pois houve baby boom',                          correct: false },
        { text: 'A pirâmide de 2020 tem base mais estreita e topo mais alargado — envelhecimento em curso', correct: true  },
        { text: 'Ambas são idênticas pois o Brasil tem crescimento estável',                             correct: false },
        { text: 'A pirâmide de 2020 é mais larga no meio por causa da imigração',                        correct: false }
      ],
      explanation: 'De 1970 a 2020, o Brasil viveu queda acelerada da natalidade (de ~5,8 para ~1,7 filhos/mulher) e aumento da expectativa de vida (de ~58 para ~76 anos). O resultado é: base da pirâmide estreitando, topo alargando. A pirâmide de 2020 reflete claramente o envelhecimento em curso — transição do perfil jovem para adulto/envelhecido.'
    }
  ],

  adaptiveReview: [
    {
      prompt: 'DIFÍCIL: País A: 60% da pop. entre 15–64 anos, 20% abaixo de 15 e 20% acima de 65. País B: 55% entre 15–64, 35% abaixo de 15 e 10% acima de 65. Qual país está mais próximo de seu bônus demográfico?',
      options: [
        { text: 'País A, pois tem menor proporção de dependentes e maior PEA',                          correct: true  },
        { text: 'País B, pois tem mais jovens que poderão ingressar em breve na PEA',                   correct: false },
        { text: 'Ambos estão igualmente no bônus demográfico',                                          correct: false },
        { text: 'Nenhum está no bônus pois os jovens não são produtivos',                               correct: false }
      ],
      explanation: 'País A: dependentes = 20+20 = 40%; PEA = 60%. País B: dependentes = 35+10 = 45%; PEA = 55%. O País A tem maior PEA relativa e menor carga de dependentes — está mais próximo do pico do bônus. O País B tem mais jovens que entrarão na PEA — pode ter bônus futuro. Mas no presente, o bônus ativo é maior no País A.'
    },
    {
      prompt: 'DIFÍCIL: Analise: "Uma política que aumenta a imigração de adultos jovens qualificados compensa o declínio demográfico do Brasil." Essa afirmação é:',
      options: [
        { text: 'Falsa — imigrantes nunca se integram ao sistema previdenciário',                    correct: false },
        { text: 'Parcialmente verdadeira — aumenta a PEA e a arrecadação, mas depende de integração e qualificação', correct: true  },
        { text: 'Verdadeira — qualquer imigrante jovem resolve o problema demográfico',              correct: false },
        { text: 'Falsa — imigração reduz o salário médio e prejudica os nativos',                   correct: false }
      ],
      explanation: 'A afirmação é parcialmente correta. Imigração de adultos jovens aumenta a PEA, amplia a arrecadação e pode aliviar o ônus demográfico — estratégia usada pelo Canadá, Austrália e Alemanha. Mas exige políticas de integração (reconhecimento de diplomas, acesso a serviços), combate à xenofobia e absorção econômica efetiva. Sem isso, o potencial não se realiza.'
    }
  ],

  rewards: { xp: 130, gems: 13, badge: '🔺 Leitor de Pirâmides' },
  completionMessage: '🔺 Você lê pirâmides etárias como um especialista! Entende por que o Brasil está envelhecendo — e o que está em jogo.',
  nextStage: 'geo_cap6_s04'
};

window.GEO_CAP6_S03 = GEO_CAP6_S03;
