/**
 * GEO CAP6 STAGE 04 — Migrações Internas e Êxodo Rural
 * BNCC: EF07GE06 | Tópicos 4 e 6
 */

const GEO_CAP6_S04 = {
  id: 'geo_cap6_s04',
  title: 'Migrações Internas e Êxodo Rural',
  icon: '🚌',
  difficulty: 'medium',
  estimatedTime: 15,

  learningObjectives: [
    'Classificar os tipos de migração interna (definitiva, temporária, pendular, sazonal)',
    'Explicar as causas e consequências do êxodo rural brasileiro',
    'Relacionar mecanização, latifúndio e seca com a expulsão de trabalhadores rurais',
    'Analisar o impacto do êxodo rural na formação de periferias e favelas',
    'Compreender o fenômeno da migração de retorno nordestina'
  ],

  summary: {
    readTime: 5,
    content: [
      {
        icon: '🚌',
        title: 'Migrações internas — o Brasil que se move',
        text: 'Migração interna é o deslocamento dentro do próprio país.\nAs pessoas se movem por necessidade, por desejo ou por busca de oportunidade.\n\nClassificações:\n• DEFINITIVA: muda de endereço para sempre (ex: êxodo rural)\n• TEMPORÁRIA: vai e volta em algum momento\n  - Pendular: ida e volta diária (trabalho/escola)\n  - Sazonal: deslocamento por época (colheita, turismo)\n\nFluxos históricos principais do Brasil:\n1. Nordeste → Sudeste (industrialização, séculos XX–XXI)\n2. Sul/Sudeste → Centro-Oeste (fronteira agrícola)\n3. Nordeste → Manaus e Norte (zona franca, garimpo)\n4. Interior → metrópoles (êxodo rural)\n\n🔑 Cada fluxo migratório tem uma história: fuga da pobreza, busca de emprego, atração de oportunidades. Entender o fluxo é entender o Brasil.'
      },
      {
        icon: '🌾',
        title: 'Êxodo rural — o campo se esvaziando',
        text: 'Êxodo rural = saída em massa de trabalhadores do campo para a cidade.\n\nNo Brasil, foi mais intenso entre 1960 e 1980.\nNesse período, 30 milhões de pessoas abandonaram o campo.\n\nTrês "empurrões" principais:\n\n1. MECANIZAÇÃO: tratores e colheitadeiras substituíram trabalhadores\n   → Máquina faz o trabalho de 10 pessoas. Sobra quem?\n\n2. CONCENTRAÇÃO FUNDIÁRIA: latifúndios deixam sem terra\n   → Pouca terra para muitos = desemprego rural\n\n3. SECA NO NORDESTE: a chuva falha, a colheita some\n   → Mala na mão, família na fila do ônibus\n\n"Puxão" da cidade:\n→ Fábricas no Sudeste precisavam de trabalhadores\n→ Propaganda de "vida melhor" nas cidades\n\n🔑 O êxodo rural não foi apenas econômico. Foi uma reorganização profunda do espaço geográfico nacional.'
      },
      {
        icon: '🏚️',
        title: 'O que aconteceu nas cidades?',
        text: 'Chegaram 30 milhões de pessoas. As cidades não estavam prontas.\n\nResultado: crescimento acelerado sem planejamento\n\n• Favelas em encostas de morro e margens de rios\n• Periferias sem saneamento, transporte e escola\n• Trânsito e sobrecarga dos serviços públicos\n• Macrocefalia urbana: cidades cresceram muito além do necessário\n\nMas o êxodo rural também trouxe:\n+ Mão de obra que construiu as grandes cidades\n+ Diversidade cultural: forró, acarajé, artesanato\n+ Redes de solidariedade e comunidade\n\nMigração de retorno:\nNos anos 1990-2020, muitos nordestinos voltaram ao Nordeste.\n→ Melhoria relativa de oportunidades na região\n→ Laços familiares e culturais chamando de volta\n→ Custo de vida alto no Sudeste empurrando\n\n🔑 O Brasil é feito de quem ficou e de quem foi. E de quem voltou.'
      }
    ],

    flashcards: [
      { q: 'O que é êxodo rural?',                    a: 'Saída em massa da população do campo para a cidade, de forma definitiva.' },
      { q: 'Quando o êxodo rural foi mais intenso no Brasil?', a: 'Entre 1960 e 1980 — período de industrialização acelerada no Sudeste.' },
      { q: 'Quais foram os 3 fatores que "expulsaram" do campo?', a: 'Mecanização agrícola, concentração fundiária (latifúndios) e secas no Nordeste.' },
      { q: 'O que é macrocefalia urbana?',             a: 'Crescimento exagerado de poucas metrópoles, concentrando serviços e população de forma desproporcional.' },
      { q: 'O que é migração de retorno?',             a: 'Fenômeno de migrantes que voltam à região de origem após anos fora (comum entre nordestinos).' },
      { q: 'Qual região foi historicamente a principal área de expulsão no êxodo rural?', a: 'O Nordeste — pela combinação de seca, concentração de terras e declínio econômico.' }
    ],

    mnemonics: [
      { trigger: 'Êxodo rural — por que aconteceu',  memory: '"MSS = Mecanização + Seca + Sem terra (latifúndio). Os 3 empurrões do campo para a cidade."' },
      { trigger: 'Êxodo vs. Pendular vs. Sazonal',   memory: '"ÊXODO = saiu, não voltou. PENDULAR = sai de manhã, volta à noite. SAZONAL = vai na safra, volta na entressafra."' },
      { trigger: 'Consequências urbanas',            memory: '"FPTS = Favela + Periferia + Trânsito + Sobrecarga de serviços. O preço do crescimento sem planejamento."' }
    ],

    miniReview: [
      { q: 'Por que o êxodo rural não melhorou automaticamente a vida dos migrantes?',
        a: 'Muitos chegaram às cidades sem qualificação formal, sem moradia acessível e disputando empregos com outros migrantes. Acabaram em periferias sem infraestrutura — trocaram a pobreza rural pela pobreza urbana.' },
      { q: 'Por que a migração de retorno cresceu nas últimas décadas?',
        a: 'Melhoria relativa de oportunidades no Nordeste (programas sociais, polos industriais, turismo), custo de vida crescente no Sudeste, laços familiares e desejo de envelhecer perto das raízes.' }
    ]
  },

  warmup: [
    {
      prompt: 'O que define o êxodo rural como diferente das outras migrações internas?',
      options: [
        { text: 'É um deslocamento diário entre municípios vizinhos',                    correct: false },
        { text: 'É a saída definitiva do campo para a cidade em busca de melhores condições', correct: true  },
        { text: 'Ocorre apenas no verão, ligado às secas sazonais',                      correct: false },
        { text: 'É um fluxo exclusivamente internacional, do Brasil para outros países', correct: false }
      ],
      explanation: 'O êxodo rural é migração definitiva (campo → cidade). Diferente da migração pendular (diária) e sazonal (temporária). É a saída em busca de emprego, estudo e melhores condições — sem data de retorno.'
    },
    {
      prompt: 'Qual região brasileira foi historicamente a principal "expulsora" de população no êxodo rural?',
      options: [
        { text: 'Sul',      correct: false },
        { text: 'Norte',    correct: false },
        { text: 'Nordeste', correct: true  },
        { text: 'Sudeste',  correct: false }
      ],
      explanation: 'O Nordeste foi a principal área de expulsão: secas periódicas no Semiárido, concentração fundiária histórica e falta de oportunidades econômicas geraram fluxos massivos para o Sudeste industrializado.'
    },
    {
      prompt: 'Qual período foi marcado pelo êxodo rural mais intenso no Brasil?',
      options: [
        { text: '1920 a 1940',  correct: false },
        { text: '1960 a 1980',  correct: true  },
        { text: '1990 a 2010',  correct: false },
        { text: '2010 a 2020',  correct: false }
      ],
      explanation: 'O êxodo rural mais intenso ocorreu entre 1960 e 1980, durante a industrialização acelerada do Sudeste. Fábricas precisavam de trabalhadores; o campo estava se mecanizando. Nesses 20 anos, ~30 milhões de pessoas migraram do campo para as cidades.'
    }
  ],

  guidedPractice: [
    {
      prompt: '🔍 DICA: Pense nos fatores que "empurram" do campo e "puxam" para a cidade.\n\nUm trabalhador rural nordestino perde seu emprego para uma colheitadeira e migra para São Paulo. Que forças agiram?',
      options: [
        { text: 'Apenas fatores de atração (puxão): a cidade oferece vida melhor',                           correct: false },
        { text: 'Fatores de expulsão (mecanização) + atração (emprego industrial) agiram juntos',           correct: true  },
        { text: 'Apenas fatores de expulsão (seca e pobreza): a cidade não atraiu, só expulsou',            correct: false },
        { text: 'Fatores políticos: o governo obrigou a migração por decreto',                              correct: false }
      ],
      explanation: 'O êxodo rural funciona com dois movimentos simultâneos: expulsão do campo (mecanização, seca, latifúndio) + atração da cidade (empregos, salários, serviços). A combinação cria fluxos migratórios intensos. Quando apenas a expulsão age (sem atração), as cidades não conseguem absorver os migrantes.'
    },
    {
      prompt: '🔍 DICA: Lembre-se das consequências do êxodo rural para as cidades.\n\nPor que o êxodo rural gerou favelas e não apenas bairros populares organizados?',
      options: [
        { text: 'Porque os migrantes preferiram não se registrar para evitar impostos',                         correct: false },
        { text: 'Porque a chegada massiva superou a oferta de moradia formal acessível — a informalidade foi a única saída', correct: true  },
        { text: 'Porque o governo determinou que migrantes deveriam viver em áreas específicas',               correct: false },
        { text: 'Porque os migrantes não conheciam as leis de zoneamento urbano',                              correct: false }
      ],
      explanation: 'O problema não foi falta de informação dos migrantes, mas falta de oferta de moradia acessível. Com 30 milhões chegando em 20 anos, o mercado formal de habitação nunca poderia absorver todos. As favelas foram a solução possível — ocupação de encostas, fundos de vale e áreas de risco que o mercado imobiliário não queria.'
    }
  ],

  questions: [
    {
      prompt: 'Qual alternativa NÃO é uma consequência direta do êxodo rural acelerado nas cidades?',
      options: [
        { text: 'Crescimento de favelas e periferias sem infraestrutura',              correct: false },
        { text: 'Sobrecarga do transporte público e dos serviços básicos',             correct: false },
        { text: 'Redução imediata da pobreza e melhoria de vida dos migrantes',       correct: true  },
        { text: 'Diversificação cultural das metrópoles com tradições regionais',     correct: false }
      ],
      explanation: 'O êxodo rural NÃO reduziu imediatamente a pobreza — muitos migrantes passaram da pobreza rural para a pobreza urbana. As consequências imediatas foram: favelas, sobrecarga de serviços e pressão habitacional. A melhoria de vida foi gradual, desigual e não garantida.'
    },
    {
      prompt: 'A mecanização da agricultura contribuiu para o êxodo rural porque:',
      options: [
        { text: 'Aumentou a produção e criou mais empregos no campo',                                     correct: false },
        { text: 'Substituiu trabalhadores manuais por máquinas, gerando desemprego rural estrutural',     correct: true  },
        { text: 'Tornou o campo mais atrativo para jovens qualificados',                                  correct: false },
        { text: 'Reduziu o preço dos alimentos e permitiu que os camponeses migrassem com renda',         correct: false }
      ],
      explanation: 'Uma colheitadeira substitui dezenas de trabalhadores manuais. Com a mecanização, a agricultura passou a precisar de menos mão de obra — gerando desemprego rural estrutural. Quem perdeu o emprego precisou ir embora. É o "empurrão tecnológico" do êxodo.'
    },
    {
      prompt: 'O que diferencia a migração sazonal do êxodo rural?',
      options: [
        { text: 'A migração sazonal é mais intensa que o êxodo rural em termos de pessoas',                correct: false },
        { text: 'A migração sazonal é temporária (vai e volta na safra); o êxodo é definitivo',           correct: true  },
        { text: 'O êxodo ocorre entre países; a sazonal é sempre dentro do mesmo estado',                 correct: false },
        { text: 'Ambos são idênticos — diferem apenas pelo nome regional',                                correct: false }
      ],
      explanation: 'Migração sazonal: trabalhador vai para a colheita (café, cana, laranja) por semanas/meses e retorna à origem. Êxodo rural: saída definitiva — o trabalhador deixa o campo sem perspectiva de retorno. Os "boias-frias" da cana paulista eram sazonais; os retirantes nordestinos que foram para SP nos anos 70 eram êxodo.'
    },
    {
      prompt: 'Qual fator natural foi historicamente decisivo para o êxodo rural nordestino?',
      options: [
        { text: 'Terremotos frequentes que destruíam lavouras',        correct: false },
        { text: 'Secas periódicas no Semiárido que eliminavam a produção agrícola', correct: true  },
        { text: 'Inundações sazonais que impediam o plantio',          correct: false },
        { text: 'Geadas que destruíam as culturas tropicais',          correct: false }
      ],
      explanation: 'A seca periódica do Semiárido nordestino — com períodos de estiagem de 1 a 5 anos — eliminava colheitas e forçava deslocamentos. Combinada com a concentração fundiária (ninguém tinha terra própria) e a falta de infraestrutura hídrica, criava crises periódicas de sobrevivência que empurravam populações para as cidades.'
    },
    {
      prompt: 'A construção de Brasília e de rodovias no Centro-Oeste nas décadas de 1950-1960 gerou que tipo de fluxo migratório?',
      options: [
        { text: 'Êxodo urbano: pessoas saindo das cidades para o interior',                        correct: false },
        { text: 'Migração de colonização: pessoas atraídas para ocupar novas fronteiras',         correct: true  },
        { text: 'Migração internacional: estrangeiros atraídos pela construção de Brasília',     correct: false },
        { text: 'Retorno migratório: nordestinos voltando ao Nordeste',                           correct: false }
      ],
      explanation: 'A construção de Brasília (1956-1960) e a abertura de rodovias como a Belém-Brasília geraram migração de colonização — pessoas atraídas para ocupar o interior com promessas de terra e emprego. Candangos vieram de todo o Brasil, especialmente do Nordeste, para construir a nova capital.'
    },
    {
      prompt: 'Qual impacto o êxodo rural gerou na estrutura etária das áreas rurais de origem?',
      options: [
        { text: 'Rejuvenescimento — chegaram jovens para substituir os que saíram',                          correct: false },
        { text: 'Envelhecimento relativo — saíram os adultos jovens, ficaram idosos e crianças',            correct: true  },
        { text: 'Estabilidade — quem saiu era exatamente o que entrou por novos nascimentos',               correct: false },
        { text: 'Crescimento — o êxodo atraiu mais pessoas por criar vagas nos serviços locais',            correct: false }
      ],
      explanation: 'O êxodo rural é seletivo: os adultos jovens (15–40 anos) partem em busca de emprego. Ficam para trás os mais velhos (que não têm forças ou coragem para migrar) e as crianças pequenas. O campo envelhece relativamente — pirâmide com "entalhes" na faixa jovem adulta.'
    },
    {
      prompt: 'A concentração fundiária (latifúndio) contribuiu para o êxodo rural porque:',
      options: [
        { text: 'Os latifúndios geravam empregos em abundância, liberando trabalhadores ociosos',     correct: false },
        { text: 'Com pouca terra disponível para pequenos produtores, o desemprego rural se estruturou', correct: true  },
        { text: 'Os grandes proprietários proibiram trabalhadores de permanecer em suas terras',        correct: false },
        { text: 'Os latifúndios converteram terras agrícolas em reservas ecológicas',                  correct: false }
      ],
      explanation: 'O problema fundiário brasileiro é histórico: desde a era colonial, poucos detêm muitas terras. Sem acesso à terra, o trabalhador rural não tem como produzir de forma independente — fica dependente do latifundiário ou desempregado. A mecanização agravou isso: mesmo o emprego assalariado no campo sumiu. Restou migrar.'
    },
    {
      prompt: 'A migração de retorno nordestina cresceu nas últimas décadas. Qual fator NÃO explica esse movimento?',
      options: [
        { text: 'Desenvolvimento de polos econômicos no Nordeste (turismo, agronegócio irrigado, indústria)',    correct: false },
        { text: 'Custo de vida alto no Sudeste (aluguel, transporte, alimentação)',                              correct: false },
        { text: 'Proibição legal de residência permanente no Sudeste para nordestinos',                          correct: true  },
        { text: 'Laços familiares e culturais que chamam de volta após a aposentadoria'  ,                       correct: false }
      ],
      explanation: 'Não existe nenhuma proibição legal de residência para brasileiros em qualquer estado — livre circulação é direito constitucional. O retorno ocorre por fatores positivos (oportunidades melhores no Nordeste) e negativos (custo alto no Sudeste) — e pelo desejo humano de voltar às raízes com os recursos acumulados.'
    },
    {
      prompt: 'O êxodo rural transformou a composição cultural das metrópoles brasileiras. Qual exemplo ilustra isso?',
      options: [
        { text: 'O desaparecimento das tradições regionais nas cidades grandes',                                 correct: false },
        { text: 'A presença do forró nordestino, da culinária baiana e das festas juninas em São Paulo e Rio',  correct: true  },
        { text: 'A homogeneização cultural com o fim das diferenças regionais',                                 correct: false },
        { text: 'A segregação cultural em bairros étnicos onde cada grupo vive isolado',                        correct: false }
      ],
      explanation: 'Os migrantes rurais trouxeram sua cultura: o forró nordestino hoje é nacional, a culinária baiana está em todos os bairros de SP, as festas juninas acontecem nas periferias das metrópoles. O êxodo rural não apenas moveu pessoas — moveu culturas inteiras. As metrópoles brasileiras são mosaicos culturais vivos dessa mistura.'
    },
    {
      prompt: '(VESTIBULAR) "O êxodo rural não foi apenas um deslocamento humano, mas uma reorganização profunda do espaço geográfico nacional." Qual argumento sustenta essa afirmação?',
      options: [
        { text: 'Apenas porque aumentou a densidade demográfica das metrópoles',                                      correct: false },
        { text: 'Porque transformou economia urbana, padrão de uso do solo, redes culturais e dinâmicas regionais',  correct: true  },
        { text: 'Apenas porque o campo ficou despovoado e a agricultura desapareceu',                                 correct: false },
        { text: 'Porque o governo reordenou os limites estaduais para adequar-se aos novos fluxos',                   correct: false }
      ],
      explanation: 'O êxodo rural foi uma reorganização multidimensional do espaço: criou periferias e favelas, transformou o agronegócio (mecanizado, menos mão de obra), mudou a composição cultural das metrópoles, gerou redes de solidariedade migrante, e reconfigurou as desigualdades regionais. Não foi só um "esvaziamento do campo" — foi uma revolução silenciosa no tecido territorial brasileiro.'
    }
  ],

  adaptiveReview: [
    {
      prompt: 'DIFÍCIL: Analise as afirmativas sobre êxodo rural no Brasil:\nI. Foi impulsionado exclusivamente por fatores naturais (secas).\nII. Mecanização e concentração fundiária foram fatores estruturantes.\nIII. Contribuiu para a urbanização acelerada e formação de periferias.\nIV. Beneficiou automaticamente todos os migrantes com melhoria de vida.\nEstão corretas:',
      options: [
        { text: 'I e IV',   correct: false },
        { text: 'II e III', correct: true  },
        { text: 'I, II e IV', correct: false },
        { text: 'III e IV',  correct: false }
      ],
      explanation: 'I é FALSA: fatores socioeconômicos (mecanização, latifúndio) foram decisivos — seca foi um fator, não o único. IV é FALSA: muitos migrantes enfrentaram pobreza urbana, preconceito e exclusão. II é VERDADEIRA: estrutura agrária e tecnologia expulsaram trabalhadores. III é VERDADEIRA: êxodo = urbanização acelerada + periferias. Corretas: II e III.'
    },
    {
      prompt: 'DIFÍCIL: Se uma política de reforma agrária bem planejada tivesse sido implementada no Brasil nos anos 1960, qual seria o impacto mais provável sobre o êxodo rural?',
      options: [
        { text: 'Não teria impacto — o êxodo é determinado apenas pela industrialização',                    correct: false },
        { text: 'Teria reduzido a intensidade do êxodo, criando alternativa de permanência com dignidade',   correct: true  },
        { text: 'Teria acelerado o êxodo, pois redistributividade gera conflito e instabilidade',            correct: false },
        { text: 'Teria impedido completamente o êxodo e estagnado as cidades'  ,                            correct: false }
      ],
      explanation: 'Reforma agrária = acesso à terra para pequenos produtores + crédito + assistência técnica. Com terra e renda, o trabalhador rural tem OPÇÃO de ficar — a migração deixa de ser "fuga" e passa a ser "escolha". Não eliminaria o êxodo completamente (industrialização também atrai), mas reduziria sua intensidade e os problemas urbanos associados. Países como o Taiwan na Ásia usaram exatamente isso.'
    }
  ],

  rewards: { xp: 135, gems: 13, badge: '🚌 Cronista das Migrações' },
  completionMessage: '🚌 Você entende as migrações internas do Brasil! Sabe por que 30 milhões de pessoas trocaram o campo pela cidade — e o que isso custou a todos.',
  nextStage: 'geo_cap6_sboss'
};

window.GEO_CAP6_S04 = GEO_CAP6_S04;
