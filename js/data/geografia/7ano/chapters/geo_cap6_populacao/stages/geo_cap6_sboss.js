/**
 * GEO CAP6 BOSS — O Demógrafo Supremo
 * Integra todos os 4 tópicos do Cap. 6
 */

const GEO_CAP6_SBOSS = {
  id: 'geo_cap6_sboss',
  title: 'O Demógrafo Supremo',
  icon: '🧬',
  difficulty: 'hard',
  estimatedTime: 18,

  learningObjectives: [
    'Integrar distribuição, crescimento, estrutura etária e migrações em análises complexas',
    'Resolver questões de nível vestibular com encadeamento de conceitos',
    'Identificar relações de causalidade entre fenômenos populacionais',
    'Analisar dados e gráficos demográficos com precisão',
    'Aplicar os conceitos do capítulo a situações-problema inéditas'
  ],

  summary: {
    readTime: 3,
    content: [
      {
        icon: '🧬',
        title: 'O Demógrafo Supremo desafia você!',
        text: 'O Demógrafo Supremo domina todos os segredos da população brasileira.\nEle lança perguntas que cruzam múltiplos temas.\n\nPara vencê-lo, você precisa:\n✅ Calcular densidades e crescimento\n✅ Ler pirâmides etárias\n✅ Entender transição demográfica\n✅ Classificar fluxos migratórios\n✅ Analisar causas e consequências do êxodo rural\n\nO desafio: cada questão une dois ou mais tópicos.\nNão basta saber um pedaço — você precisa do mapa completo!\n\n⚠️ As questões seguem padrão vestibular. Leia com atenção cada alternativa.'
      },
      {
        icon: '🔑',
        title: 'Revisão relâmpago — os conceitos-chave',
        text: 'Distribuição Populacional:\n• D = pop ÷ área | Sudeste > 80 hab/km² | Norte < 5 hab/km²\n• Fatores: história + economia + clima + relevo\n\nCrescimento Populacional:\n• CV = natalidade − mortalidade\n• Pico brasileiro: ~228M em 2042 (IBGE)\n• Fertilidade atual: 1,7 (abaixo da reposição 2,1)\n\nEstrutura Etária:\n• PEA: 15–64 anos\n• Pirâmide jovem × adulta × envelhecida\n• Bônus demográfico = muita PEA, poucos dependentes\n• Índice de Envelhecimento = idosos ÷ jovens × 100\n\nMigrações e Êxodo Rural:\n• Êxodo: definitivo, campo → cidade, 1960–1980\n• Causas: mecanização + latifúndio + seca\n• Consequências: favelas, periferias, macrocefalia\n• Pendular: diário. Sazonal: temporário.'
      }
    ],

    flashcards: [
      { q: 'Qual a fórmula do crescimento vegetativo?',   a: 'CV = Natalidade − Mortalidade.' },
      { q: 'O que é bônus demográfico?',                  a: 'Período com alta PEA e poucos dependentes — janela de crescimento econômico.' },
      { q: 'Quais os 3 empurrões do êxodo rural?',        a: 'Mecanização + concentração fundiária (latifúndio) + secas no Nordeste.' },
      { q: 'Qual o pico populacional projetado para o Brasil?', a: '~228 milhões em 2042 (IBGE).' },
      { q: 'Diferença entre pirâmide jovem e envelhecida?', a: 'Jovem = base larga, topo estreito. Envelhecida = base estreita, topo alargado.' }
    ],

    mnemonics: [
      { trigger: 'Revisão completa', memory: '"D+C+E+M = Distribuição + Crescimento + Estrutura + Migrações. Os 4 pilares do Cap. 6. Cada letra é uma batalha ganha."' }
    ],

    miniReview: [
      { q: 'Como distribuição e migração se relacionam?', a: 'Migrações internas redistribuem a população no território — esvaziando o campo e adensando as cidades. A densidade demográfica atual é resultado histórico dos fluxos migratórios.' },
      { q: 'Como crescimento vegetativo e pirâmide etária se relacionam?', a: 'Alta natalidade → base larga. Queda da natalidade → base estreita. A pirâmide é o "retrato" do crescimento ao longo do tempo.' }
    ]
  },

  warmup: [
    {
      prompt: 'Um estado tem densidade de 45 hab/km². Sua área é de 200.000 km². Qual é sua população total?',
      options: [
        { text: '4,5 milhões',   correct: false },
        { text: '9 milhões',     correct: true  },
        { text: '45 milhões',    correct: false },
        { text: '900 mil',       correct: false }
      ],
      explanation: 'D = pop ÷ área → pop = D × área = 45 × 200.000 = 9.000.000 = 9 milhões. Lembre: a fórmula funciona nos dois sentidos. Com D e área, você acha a população.'
    },
    {
      prompt: 'Brasil em 2042 atingirá ~228 milhões e depois irá declinar. O fator principal disso é:',
      options: [
        { text: 'Alta mortalidade por envelhecimento superando os nascimentos',             correct: false },
        { text: 'Taxa de fertilidade abaixo da reposição (1,7 vs. 2,1) por décadas',       correct: true  },
        { text: 'Emigração massiva de brasileiros para outros países',                      correct: false },
        { text: 'Política governamental de controle de natalidade',                         correct: false }
      ],
      explanation: 'Com 1,7 filhos/mulher (abaixo de 2,1), cada geração é menor que a anterior. Eventualmente as mortes superam os nascimentos. Não há política coercitiva — é mudança social espontânea. A emigração é fator secundário.'
    },
    {
      prompt: 'A migração pendular se diferencia do êxodo rural porque:',
      options: [
        { text: 'Ocorre apenas no Nordeste',                                          correct: false },
        { text: 'É diária e não muda o endereço oficial do trabalhador',             correct: true  },
        { text: 'Sempre envolve cruzamento de fronteiras internacionais',            correct: false },
        { text: 'É exclusiva de trabalhadores informais',                            correct: false }
      ],
      explanation: 'Pendular = vai e volta todo dia (casa → trabalho → casa). O endereço oficial não muda. Êxodo rural = mudança definitiva, com abandono do local de origem. São dois fenômenos migratórios com lógicas, escalas e impactos completamente diferentes.'
    }
  ],

  guidedPractice: [
    {
      prompt: '🔍 DICA: Pense em como bônus demográfico e crescimento econômico se relacionam.\n\nPor que o Brasil entre 1970 e 2000 teve alto crescimento econômico relativo?',
      options: [
        { text: 'Por políticas de controle de natalidade que reduziram os dependentes',                 correct: false },
        { text: 'Pela coincidência do bônus demográfico: muita PEA ativa e poucos dependentes',        correct: true  },
        { text: 'Por exportação maciça de petróleo que gerou renda extraordinária',                     correct: false },
        { text: 'Por herança da política industrial do período colonial',                               correct: false }
      ],
      explanation: 'O bônus demográfico brasileiro coincidiu com a industrialização: muitos adultos trabalhando, poucos idosos e crianças para sustentar. Esse excedente de mão de obra barata + alta PEA geraram o "milagre econômico" dos anos 1970. Mas o bônus não é eterno — está se encerrando.'
    },
    {
      prompt: '🔍 DICA: Relacione êxodo rural, urbanização e estrutura etária juntos.\n\nO êxodo rural dos anos 1960–80 gerou, nas metrópoles brasileiras:',
      options: [
        { text: 'Pirâmide etária envelhecida, pois os idosos também migraram para a cidade',           correct: false },
        { text: 'Alargamento da base da pirâmide urbana, com muitos jovens adultos migrantes',         correct: true  },
        { text: 'Pirâmide jovem no campo, pois os adultos saíram e ficaram só crianças',               correct: false },
        { text: 'Bônus demográfico exclusivamente rural, pois a PEA ficou no campo',                   correct: false }
      ],
      explanation: 'O êxodo foi protagonizado por adultos jovens (15–40 anos) — a faixa produtiva. Ao chegarem às metrópoles, eles engrossaram a base da pirâmide urbana, ampliando a PEA das cidades. Ao mesmo tempo, o campo ficou mais velho (os jovens saíram). Uma mudança simultânea em dois tipos de pirâmide.'
    }
  ],

  questions: [
    {
      prompt: 'Uma região tem densidade de 8 hab/km². Sua natalidade é 22‰ e mortalidade é 8‰. Com crescimento vegetativo positivo, qual tendência demográfica ocorre?',
      options: [
        { text: 'A densidade tende a cair pois a mortalidade é alta',                           correct: false },
        { text: 'A densidade tende a aumentar — mais gente no mesmo espaço',                   correct: true  },
        { text: 'A densidade permanece estável pois natalidade e mortalidade se compensam',    correct: false },
        { text: 'A densidade cai pois o crescimento reduz os recursos disponíveis',            correct: false }
      ],
      explanation: 'CV = 22 − 8 = 14‰ (positivo = crescimento). Com mais nascimentos que mortes, a população aumenta. Em mesma área, mais gente = densidade maior. Isso ocorre nas regiões em desenvolvimento com alta natalidade e mortalidade já controlada — início da transição demográfica.'
    },
    {
      prompt: 'Relacione: A queda da natalidade brasileira e o envelhecimento populacional são fenômenos:',
      options: [
        { text: 'Independentes — não há relação causal entre eles',                                      correct: false },
        { text: 'Interdependentes — menos nascimentos hoje gera mais envelhecimento futuro',             correct: true  },
        { text: 'Inversamente proporcionais — quando um sobe, o outro cai sem exceção',                  correct: false },
        { text: 'Exclusivamente determinados por fatores genéticos da população'  ,                      correct: false }
      ],
      explanation: 'São interdependentes: menos filhos hoje = menos jovens amanhã = proporção maior de idosos = envelhecimento. Cada decisão reprodutiva individual agrega, coletivamente, para a estrutura etária de uma geração. A natalidade baixa de hoje é o envelhecimento de amanhã.'
    },
    {
      prompt: 'Analise o mapa mental: Nordeste → seca + latifúndio + mecanização → êxodo → favelas SP/RJ → pressão por serviços → políticas habitacionais. Esse encadeamento demonstra:',
      options: [
        { text: 'Que fatores naturais são os únicos determinantes dos problemas urbanos',                   correct: false },
        { text: 'Que problemas locais se tornam questões nacionais quando conectados por fluxos migratórios', correct: true  },
        { text: 'Que o Nordeste é o único responsável pelos problemas urbanos do Sudeste',                  correct: false },
        { text: 'Que políticas habitacionais isoladas resolvem o problema da favelização',                  correct: false }
      ],
      explanation: 'A cadeia mostra como um problema regional (seca + latifúndio nordestino) gera consequências nacionais (favelas no Sudeste, pressão por habitação). Isso demonstra que o território brasileiro é integrado: o que acontece no Sertão reverbera em São Paulo. Problemas regionais são problemas nacionais quando há mobilidade humana.'
    },
    {
      prompt: 'Um município rural perdeu 25% de sua população total em 20 anos por êxodo. Qual efeito sobre os serviços locais é mais provável?',
      options: [
        { text: 'Melhora dos serviços, pois há mais recursos por habitante',                    correct: false },
        { text: 'Fechamento de escolas, postos de saúde e redução do comércio',                correct: true  },
        { text: 'Expansão do mercado de trabalho pela saída dos concorrentes',                  correct: false },
        { text: 'Aumento da receita municipal pela tributação dos que ficaram',                 correct: false }
      ],
      explanation: 'Menos gente = menos alunos (escolas fecham), menos pacientes (postos ficam ociosos), menos clientes (comércio enfraquece), menos arrecadação (receita municipal cai). O êxodo rural cria um ciclo vicioso: quanto menos serviços, mais gente vai embora — até o colapso completo da vida comunitária.'
    },
    {
      prompt: 'Por que o êxodo rural, embora intenso nos anos 1960–80, não parou completamente após 1990?',
      options: [
        { text: 'Porque secas ocorreram apenas após 1990 no Nordeste',                                    correct: false },
        { text: 'Porque as causas estruturais (concentração fundiária, desigualdade) não foram resolvidas', correct: true  },
        { text: 'Porque o governo proibiu o retorno ao campo após 1990',                                   correct: false },
        { text: 'Porque as cidades pararam de crescer após 1990',                                          correct: false }
      ],
      explanation: 'O êxodo desacelerou mas não cessou porque as causas estruturais persistem: concentração de terras, mecanização crescente do agronegócio, desigualdade de oportunidades entre campo e cidade. O ritmo caiu (passou de ~5M/ano para ~1M/ano), mas os fluxos continuam — especialmente em direção a cidades médias e polos regionais.'
    },
    {
      prompt: 'Um geógrafo afirma: "A distribuição desigual da população brasileira é um espelho das desigualdades econômicas do país." Qual afirmação sustenta essa tese?',
      options: [
        { text: 'As regiões mais densas são exatamente as que têm mais recursos naturais',                 correct: false },
        { text: 'As regiões com maior concentração de renda e empregos têm maior densidade demográfica',  correct: true  },
        { text: 'Densidade e PIB per capita são inversamente proporcionais no Brasil',                    correct: false },
        { text: 'A distribuição é uniforme em todo o país, independentemente da renda',                    correct: false }
      ],
      explanation: 'Sudeste e Sul, com maior concentração de renda e empregos, são os mais densos. Norte e Centro-Oeste, historicamente com menos desenvolvimento econômico formal, são os mais vazios. A densidade demográfica no Brasil é, em grande medida, um mapa das oportunidades econômicas — e das desigualdades regionais.'
    },
    {
      prompt: 'Qual combinação de políticas públicas seria mais eficaz para reduzir ao mesmo tempo o êxodo rural E o envelhecimento das áreas rurais?',
      options: [
        { text: 'Proibição de migração e incentivo a famílias grandes no campo',                              correct: false },
        { text: 'Reforma agrária + crédito rural + internet + escolas de qualidade no campo',                correct: true  },
        { text: 'Apenas expansão do agronegócio exportador que gera renda sem mão de obra',                  correct: false },
        { text: 'Transferência compulsória de idosos urbanos para áreas rurais',                             correct: false }
      ],
      explanation: 'Para reduzir o êxodo, o campo precisa oferecer o que a cidade oferece: terra (reforma agrária), crédito, conectividade (internet, que democratiza acesso a serviços) e educação de qualidade. Sem isso, os jovens continuarão migrando — e o campo continuará envelhecendo. Não há atalho: é preciso tornar o campo uma escolha, não uma obrigação.'
    },
    {
      prompt: 'A pirâmide etária do Brasil em 2050 será provavelmente:',
      options: [
        { text: 'Jovem (base larga), pois o Brasil tem alta natalidade histórica',                       correct: false },
        { text: 'Adulta-envelhecida (base estreita, topo alargado), devido à queda da fertilidade',      correct: true  },
        { text: 'Idêntica à de 2020, pois a estrutura etária é estável',                                 correct: false },
        { text: 'Invertida completamente, com mais idosos que jovens em todas as faixas',                correct: false }
      ],
      explanation: 'Com fertilidade de 1,7 e expectativa de vida crescente, a pirâmide de 2050 terá base estreita (poucos jovens) e topo alargado (muitos idosos de 60+ anos). A proporção de idosos deve ultrapassar 25% da população. Não será "invertida" completamente, mas bem diferente da pirâmide larga de 1970.'
    },
    {
      prompt: '(VESTIBULAR) Analise as afirmativas:\nI. O bônus demográfico do Brasil terminou em 2020.\nII. A migração de retorno nordestina é um êxodo rural ao contrário.\nIII. O aumento da expectativa de vida alarga o topo da pirâmide sem relação com a natalidade.\nIV. Crescimento vegetativo negativo significa mais mortes que nascimentos.\nQuais são corretas?',
      options: [
        { text: 'I e II',    correct: false },
        { text: 'II e IV',   correct: true  },
        { text: 'I e III',   correct: false },
        { text: 'III e IV',  correct: false }
      ],
      explanation: 'I: FALSA — especialistas estimam que o bônus se estende até ~2030 (não acabou em 2020). II: VERDADEIRA — retorno ao Nordeste é migração cidade→campo/cidade menor = sentido inverso. III: FALSA — natalidade E expectativa de vida moldam a pirâmide juntas. IV: VERDADEIRA — crescimento vegetativo negativo = mortes > nascimentos. Corretas: II e IV.'
    },
    {
      prompt: '(VESTIBULAR) Um estudo compara dois estados: X (alta densidade, alta natalidade, pirâmide jovem) e Y (baixa densidade, baixa natalidade, pirâmide envelhecida). Em 50 anos, qual tendência demográfica diferencia X de Y?',
      options: [
        { text: 'X continuará crescendo mais rápido que Y em termos absolutos e relativos',                  correct: false },
        { text: 'X tende a envelhecer como Y hoje; Y tende ao declínio — a convergência histórica',         correct: true  },
        { text: 'Y crescerá mais que X pois tem melhor infraestrutura por pessoa',                          correct: false },
        { text: 'Ambos convergirão para o mesmo perfil jovem com a industrialização futura',                correct: false }
      ],
      explanation: 'X (jovem): com desenvolvimento e urbanização, a natalidade vai cair — ele se tornará como Y é hoje. Y (envelhecido): com crescimento vegetativo zero ou negativo, tende ao declínio ou estabilidade com imigração. A convergência demográfica é histórica: países/estados que industrializam e urbanizam seguem o mesmo caminho — pirâmide de jovem para adulta para envelhecida.'
    }
  ],

  adaptiveReview: [
    {
      prompt: 'BOSS FINAL: Se o Brasil implementar política de incentivo à natalidade (subsídios por filho) a partir de 2030, qual seria o efeito mais realista sobre o pico populacional e o envelhecimento?',
      options: [
        { text: 'Reverteria o envelhecimento imediatamente e ampliaria o pico para 300 milhões',            correct: false },
        { text: 'Poderia elevar levemente o pico e desacelerar o envelhecimento, mas o efeito é lento e incerto', correct: true  },
        { text: 'Não teria efeito algum — natalidade é determinada apenas biologicamente',                  correct: false },
        { text: 'Causaria superpopulação imediata acima de 400 milhões até 2050',                           correct: false }
      ],
      explanation: 'Políticas pró-natalidade têm efeito limitado e lento: dependem de mudança cultural profunda. Países como a França e a Suécia investiram décadas e conseguiram elevar fertilidade de ~1,5 para ~1,9 — mas não ao nível de reposição. O efeito sobre a pirâmide leva 20+ anos (um bebê hoje só entra na PEA em 2050). O envelhecimento é estrutural e de longo prazo.'
    },
    {
      prompt: 'BOSS FINAL: Um pesquisador cruzou três dados: (1) queda da natalidade desde 1970, (2) aumento do êxodo rural até 1980 e (3) crescimento das favelas em SP/RJ. A relação correta entre esses três fenômenos é:',
      options: [
        { text: 'São independentes — coincidiram no tempo sem relação causal',                                   correct: false },
        { text: 'Queda da natalidade CAUSOU o êxodo; êxodo CAUSOU as favelas',                                  correct: false },
        { text: 'Urbanização causou queda da natalidade E expandiu favelas; êxodo ALIMENTOU a urbanização',     correct: true  },
        { text: 'Favelas causaram a queda da natalidade pela miséria; êxodo é consequência das favelas',        correct: false }
      ],
      explanation: 'A relação correta: ÊXODO RURAL → pessoas vão para a cidade → URBANIZAÇÃO → vida urbana reduz a natalidade + chegada massiva sem moradia → FAVELAS. São processos encadeados, não independentes, mas com causalidades específicas. O êxodo alimentou a urbanização; a urbanização reduziu a natalidade; a chegada sem planejamento gerou favelas. Três fenômenos, uma lógica.'
    }
  ],

  rewards: { xp: 200, gems: 20, badge: '🧬 Vencedor do Demógrafo' },
  completionMessage: '🧬 Você derrotou o Demógrafo Supremo! Domina a população brasileira em toda sua complexidade. O exame final aguarda.',
  nextStage: 'geo_cap6_sfinal'
};

window.GEO_CAP6_SBOSS = GEO_CAP6_SBOSS;
