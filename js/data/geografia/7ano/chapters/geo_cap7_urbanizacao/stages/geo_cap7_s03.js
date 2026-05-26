/**
 * GEO CAP7 STAGE 03 — Xenofobia e Direitos dos Migrantes
 * BNCC: EF07GE07 | Tópico 8
 */

const GEO_CAP7_S03 = {
  id: 'geo_cap7_s03',
  title: 'Xenofobia e Direitos dos Migrantes',
  icon: '🤝',
  difficulty: 'medium',
  estimatedTime: 13,

  learningObjectives: [
    'Definir xenofobia e suas formas de manifestação (física, verbal, institucional)',
    'Reconhecer a migração como direito humano fundamental (Artigo 13 da DUDH)',
    'Analisar as contribuições econômicas e culturais dos migrantes',
    'Identificar formas de xenofobia interna no Brasil (contra nordestinos, indígenas, quilombolas)',
    'Propor políticas de acolhimento e integração de migrantes'
  ],

  summary: {
    readTime: 4,
    content: [
      {
        icon: '🤝',
        title: 'Xenofobia — o medo de quem chegou',
        text: '"Xeno" = estrangeiro/forasteiro. "Fobia" = medo/rejeição.\nXenofobia = medo e rejeição ao diferente.\n\nNo Brasil, a xenofobia tem duas faces:\n\n1. EXTERNA: contra estrangeiros\n   → Venezuelanos, haitianos, bolivianos e sírios enfrentam discriminação, dificuldade de acesso a documentos, subemprego\n\n2. INTERNA: dentro do próprio país\n   → Nordestinos discriminados no Sudeste ("mão de obra barata", estereótipos)\n   → Indígenas e quilombolas invisibilizados nas cidades\n\nFormas de manifestação:\n• Verbal: xingamentos, piadas, estereótipos\n• Institucional: burocracia que nega documentos, diplomas não reconhecidos\n• Midiática: manchetes sensacionalistas que demonizam migrantes\n• Física: violência e ataques\n\n🔑 A xenofobia não é medo do desconhecido. É medo construído — por narrativas políticas, disputa de recursos e desinformação.'
      },
      {
        icon: '📜',
        title: 'Migrar é um direito humano',
        text: 'A Declaração Universal dos Direitos Humanos (1948) garante:\n\nArtigo 13:\n"Toda pessoa tem o direito de deixar qualquer país, inclusive o próprio, e a ele regressar."\n\nIsso significa:\n• Nenhum Estado pode impedir alguém de sair\n• Nenhum Estado pode impedir nacionais de voltar\n• Buscar vida digna, segurança e trabalho é direito humano universal\n\nO ACNUR (Alto Comissariado da ONU para Refugiados) protege:\n• Refugiados: fogem de perseguição, guerra ou catástrofe\n• Apátridas: sem nacionalidade reconhecida\n• Migrantes em situação vulnerável\n\n🔑 Fronteiras existem para organizar o espaço — não para negar dignidade. A regulação pode existir, mas precisa respeitar o princípio de não-devolução (non-refoulement): ninguém pode ser enviado para um lugar onde sua vida corre perigo.'
      },
      {
        icon: '🌍',
        title: 'O que os migrantes trazem',
        text: 'O discurso de "invasão" esconde os dados reais:\n\n📊 O que a pesquisa mostra:\n• Migrantes abrem negócios, criam empregos, pagam impostos\n• Trabalham em setores essenciais: construção, saúde, limpeza, serviços\n• Trazem diversidade cultural que enriquece gastronomia, arte e ciência\n• Preenchem lacunas em mercados de trabalho envelhecidos\n\nExemplos no Brasil:\n• Bolivianos: costura e confecção em São Paulo\n• Haitianos: construção civil no Sul e Sudeste\n• Sírios: culinária e comércio em várias cidades\n• Venezuelanos: serviços, comércio e agropecuária em Roraima\n\nTransculturalidade:\nCulturas se misturam e criam algo novo — não há "contaminação", há enriquecimento.\n\n🔑 A narrativa do migrante como "ameaça" é politicamente construída. Os dados mostram migrantes como contribuidores. A diferença entre os dois é a lente que escolhemos usar.'
      }
    ],

    flashcards: [
      { q: 'O que significa "xenofobia"?',              a: 'Medo/rejeição ao estrangeiro ou forasteiro. "Xeno" = estrangeiro; "fobia" = medo.' },
      { q: 'Qual artigo da DUDH garante o direito de migrar?', a: 'Artigo 13 — garante o direito de sair de qualquer país e a ele regressar.' },
      { q: 'Qual organismo da ONU protege refugiados?', a: 'ACNUR — Alto Comissariado da ONU para Refugiados.' },
      { q: 'O que é xenofobia interna?',                a: 'Discriminação entre pessoas do mesmo país por origem regional ou étnica (ex: preconceito contra nordestinos no Sudeste).' },
      { q: 'O que é transculturalidade?',               a: 'Mistura e enriquecimento mútuo de culturas — resultado da interação entre pessoas de origens diferentes.' },
      { q: 'O que é non-refoulement?',                  a: 'Princípio do direito internacional: ninguém pode ser devolvido a um lugar onde sua vida ou liberdade corre perigo.' }
    ],

    mnemonics: [
      { trigger: 'Formas de xenofobia',  memory: '"VIMP = Verbal + Institucional + Midiática + Física. Quatro formas que o preconceito veste antes de se mostrar."' },
      { trigger: 'ACNUR',                memory: '"ACNUR = A Cidadania Nunca Fica Umaparada. Órgão da ONU que não abandona quem foi abandonado pelo seu Estado."' },
      { trigger: 'Migrante contribui',   memory: '"NETD = Negócio + Emprego + Tributo + Diversidade. Quatro presentes que o migrante traz e que o discurso de ódio apaga."' }
    ],

    miniReview: [
      { q: 'Por que a xenofobia é considerada fenômeno construído, não natural?',
        a: 'Porque depende de narrativas políticas, mídia e contexto econômico para se intensificar. Em momentos de crise, governos e grupos usam migrantes como bodes expiatórios — culpando-os por problemas estruturais do mercado de trabalho. A xenofobia pode ser ensinada e também desaprendida.' },
      { q: 'Como a escola pode combater a xenofobia?',
        a: 'Através de projetos de escuta ativa (ouvir histórias de migrantes), currículo intercultural, combate a estereótipos, protocolos de acolhimento para alunos migrantes e atividades que valorizam a diversidade como riqueza — não como problema.' }
    ]
  },

  warmup: [
    {
      prompt: 'O termo "xenofobia" é formado por dois termos gregos. O que "xeno" significa?',
      options: [
        { text: 'Medo',                     correct: false },
        { text: 'Estrangeiro / forasteiro', correct: true  },
        { text: 'Nação',                    correct: false },
        { text: 'Diferente',               correct: false }
      ],
      explanation: '"Xeno" = estrangeiro/forasteiro (de fora). "Fobia" = medo/rejeição irracional. Juntos: medo/rejeição ao que vem de fora. Curiosidade: "xenofilia" seria o oposto — fascínio pelo estrangeiro. A língua grega nos ajuda a entender conceitos complexos pela raiz das palavras.'
    },
    {
      prompt: 'Qual artigo da Declaração Universal dos Direitos Humanos garante o direito de migrar?',
      options: [
        { text: 'Artigo 1',    correct: false },
        { text: 'Artigo 13',   correct: true  },
        { text: 'Artigo 25',   correct: false },
        { text: 'Artigo 30',   correct: false }
      ],
      explanation: 'Artigo 13 da DUDH (1948): "Toda pessoa tem o direito de deixar qualquer país, inclusive o próprio, e a ele regressar." Esse artigo reconhece a mobilidade humana como direito fundamental — não como privilégio ou ameaça.'
    },
    {
      prompt: 'A xenofobia interna no Brasil se manifesta principalmente contra qual grupo?',
      options: [
        { text: 'Imigrantes europeus nas capitais',                                     correct: false },
        { text: 'Nordestinos, indígenas e quilombolas que migram para outras regiões',  correct: true  },
        { text: 'Moradores do Sul que migram para o Norte',                             correct: false },
        { text: 'Servidores públicos que mudam de estado',                             correct: false }
      ],
      explanation: 'A xenofobia interna brasileira atinge principalmente nordestinos (discriminados no Sudeste por sotaque e origem), indígenas e quilombolas (discriminados em cidades pelo racismo estrutural). O livro destaca especialmente o preconceito regional contra nordestinos no contexto do êxodo rural.'
    }
  ],

  guidedPractice: [
    {
      prompt: '🔍 DICA: Pense em quem migra para onde e em que condições.\n\nUm engenheiro haitiano vem ao Brasil, mas seu diploma não é reconhecido e ele trabalha como entregador. Isso é um exemplo de:',
      options: [
        { text: 'Escolha profissional voluntária',                                      correct: false },
        { text: 'Xenofobia institucional — burocracia que desvaloriza qualificação de migrantes', correct: true  },
        { text: 'Adaptação normal ao mercado de trabalho',                              correct: false },
        { text: 'Política de proteção ao trabalhador nacional',                         correct: false }
      ],
      explanation: 'O não reconhecimento de diplomas estrangeiros é xenofobia institucional: a burocracia funciona como barreira invisível que força migrantes qualificados a trabalhos abaixo de sua formação. Isso é desperdício de capital humano — e viola o princípio da igualdade de oportunidades. A solução é criar processos rápidos e acessíveis de revalidação de diplomas.'
    },
    {
      prompt: '🔍 DICA: Pense no ciclo econômico do migrante.\n\nUm comerciante boliviano abre uma loja de tecidos em São Paulo e contrata 5 funcionários brasileiros. Qual análise está correta?',
      options: [
        { text: 'O boliviano "rouba" oportunidade de um empresário nacional',                          correct: false },
        { text: 'O empreendedorismo migrante gera empregos, paga impostos e revitaliza a rua',        correct: true  },
        { text: 'Os 5 funcionários deveriam ser bolivianos, pois são mais leais ao patrão migrante',  correct: false },
        { text: 'A loja cria concorrência desleal por usar mão de obra mais barata',                  correct: false }
      ],
      explanation: 'O migrante empreendedor não "rouba" — ele cria. Abre negócio, gera 5 empregos (para brasileiros!), paga aluguel, impostos e consome na economia local. A narrativa do "roubo de emprego" é mito econômico: a economia não é jogo de soma zero. Um negócio novo não elimina outro — cria mais atividade econômica.'
    }
  ],

  questions: [
    {
      prompt: 'Qual alternativa descreve corretamente a xenofobia institucional?',
      options: [
        { text: 'Agressões físicas cometidas por grupos organizados contra migrantes',                   correct: false },
        { text: 'Barreiras burocráticas, diplomas não reconhecidos e procedimentos que dificultam a integração', correct: true  },
        { text: 'Piadas e comentários preconceituosos nas redes sociais',                                correct: false },
        { text: 'Discurso político de partidos de extrema-direita',                                    correct: false }
      ],
      explanation: 'Xenofobia institucional é a mais difícil de identificar: aparece no formulário longo, na exigência de documentos impossíveis, no prazo que nunca fecha, no diploma que não é reconhecido. Não tem rosto — é processo. Mas seus efeitos são concretos: migrante qualificado que não consegue trabalhar na área, família que não acessa a escola ou o SUS.'
    },
    {
      prompt: 'Por que migrar é considerado um direito humano, mesmo que o Estado regule os fluxos?',
      options: [
        { text: 'Porque nenhum Estado tem o direito de regular a entrada de pessoas',                  correct: false },
        { text: 'Porque a busca por vida digna é inalienável, e a regulação deve respeitar o princípio da dignidade humana', correct: true  },
        { text: 'Porque o mercado de trabalho global exige livre circulação total de pessoas',        correct: false },
        { text: 'Porque a ONU proibiu qualquer forma de controle de fronteiras',                     correct: false }
      ],
      explanation: 'Estados podem regular fluxos migratórios (visto, análise de documentos, quotas). O que não podem é negar a dignidade dos migrantes, devolvê-los a situações de perigo (non-refoulement), proibir acesso à saúde emergencial ou educação infantil. O direito de migrar não é absoluto mas é inalienável — regulação pode existir com respeito à dignidade.'
    },
    {
      prompt: 'A transculturalidade descreve o processo pelo qual:',
      options: [
        { text: 'Uma cultura domina e substitui completamente as outras',                              correct: false },
        { text: 'Culturas se encontram, se misturam e criam novas expressões e identidades',          correct: true  },
        { text: 'Cada cultura se mantém completamente separada das outras',                           correct: false },
        { text: 'Uma cultura mais forte obriga a outra a se adaptar unilateralmente',                correct: false }
      ],
      explanation: 'Transculturalidade é mão dupla: culturas influenciam umas às outras, criando sínteses novas. O forró nordestino misturou influências ibéricas, africanas e indígenas. A culinária da imigração italiana transformou SP em capital do rodízio. Não é dominação nem separação — é diálogo criativo entre diferenças.'
    },
    {
      prompt: 'A xenofobia no Brasil é um fenômeno apenas de origem externa (estrangeiros)?',
      options: [
        { text: 'Sim — xenofobia só existe entre estrangeiros e nacionais',                           correct: false },
        { text: 'Não — existe também internamente, contra nordestinos, indígenas e quilombolas',     correct: true  },
        { text: 'Sim — a diversidade racial do Brasil elimina qualquer preconceito interno',         correct: false },
        { text: 'Não — no Brasil só existe xenofobia contra sul-americanos',                         correct: false }
      ],
      explanation: 'O livro é explícito: a xenofobia brasileira é também interna. Nordestinos sofreram discriminação no Sudeste (sotaque, estereótipos, "invasão de emprego"). Indígenas e quilombolas enfrentam racismo estrutural quando migram para centros urbanos. O mito da "democracia racial" brasileira não apaga essas formas de exclusão historicamente documentadas.'
    },
    {
      prompt: 'Por que a mídia tem papel crucial na construção ou desconstrução da xenofobia?',
      options: [
        { text: 'Porque a mídia é sempre xenofóbica por natureza',                                    correct: false },
        { text: 'Porque narrativas midiáticas moldam percepções coletivas — podem humanizar ou demonizar migrantes', correct: true  },
        { text: 'Porque migrantes dependem da mídia para encontrar emprego',                          correct: false },
        { text: 'Porque a mídia financia diretamente políticas de integração de migrantes',           correct: false }
      ],
      explanation: 'Quando a mídia mostra o migrante como criminoso, invasor e ladrão de emprego — sem contexto, com manchetes sensacionalistas — cria medo coletivo desproporcional. Quando mostra histórias reais de contribuição, vulnerabilidade e humanidade, ativa empatia. O jornalismo responsável é ferramenta de educação e redução de preconceito.'
    },
    {
      prompt: 'Qual conjunto de ações é mais eficaz para integrar migrantes internacionais?',
      options: [
        { text: 'Segregação em bairros específicos e proibição de acesso a serviços públicos',         correct: false },
        { text: 'Regularização facilitada, cursos de idioma, reconhecimento de diplomas, acesso à saúde e educação', correct: true  },
        { text: 'Expulsão de irregulares e redução das quotas de visto',                              correct: false },
        { text: 'Proibição de trabalho até completa regularização documental',                        correct: false }
      ],
      explanation: 'Integração efetiva requer: documento que regularize a situação (permite trabalhar, acessar serviços), idioma (comunicação e autonomia), reconhecimento de qualificações (capital humano aproveitado), saúde e educação (direitos universais). Sem esses pilares, o migrante fica preso em vulnerabilidade — e aí sim torna-se custo, não contribuição.'
    },
    {
      prompt: 'O princípio do "non-refoulement" (não-devolução) proíbe que Estados:',
      options: [
        { text: 'Cobrem impostos de migrantes antes de documentá-los',                                     correct: false },
        { text: 'Devolvam pessoas a países onde correm risco de vida, tortura ou perseguição',            correct: true  },
        { text: 'Exijam visto para entrada de migrantes econômicos',                                      correct: false },
        { text: 'Construam fronteiras físicas entre países',                                              correct: false }
      ],
      explanation: 'Non-refoulement é o princípio mais importante do direito internacional dos refugiados: nenhum Estado pode enviar de volta uma pessoa para um lugar onde ela corra risco real de perseguição, tortura ou morte. É a linha vermelha que separa regulação legítima de violação de direitos humanos.'
    },
    {
      prompt: 'Um aluno migrante haitiano chega a uma escola pública sem saber português. A melhor prática pedagógica do ponto de vista da cidadania é:',
      options: [
        { text: 'Mantê-lo na série abaixo da sua faixa etária até aprender português',                  correct: false },
        { text: 'Oferecer suporte linguístico, turma de acolhimento e valorizar sua cultura no ambiente escolar', correct: true  },
        { text: 'Encaminhá-lo apenas para escola particular de idiomas até se adaptar',                 correct: false },
        { text: 'Aguardar regularização completa dos documentos antes de matriculá-lo',                 correct: false }
      ],
      explanation: 'A CF/88 e o ECA garantem educação a toda criança, independentemente de documentação. A melhor prática: turma de acolhimento (apoio em português), valorização da cultura de origem, integração com os colegas. Não retrocedam na série — isso desmotiva e estigmatiza. A escola que acolhe o migrante prepara todos os alunos para a diversidade do mundo real.'
    },
    {
      prompt: 'Por que a narrativa de "roubo de emprego" por migrantes é considerada mito econômico?',
      options: [
        { text: 'Porque migrantes só trabalham em setores que os brasileiros rejeitam',                   correct: false },
        { text: 'Porque a economia não é jogo de soma zero — migrantes criam consumo, negócios e demanda por mais emprego', correct: true  },
        { text: 'Porque migrantes recebem salários menores e não competem com trabalhadores nativos',   correct: false },
        { text: 'Porque o governo proíbe migrantes de trabalhar nos setores mais concorridos',          correct: false }
      ],
      explanation: 'Economia não é torta de tamanho fixo onde cada fatia do migrante é uma fatia a menos para o nativo. Migrantes: consomem (aluguel, alimentação, lazer), pagam impostos, abrem negócios, criam empregos, preenchem setores com escassez de mão de obra. Estudos econômicos consistentemente mostram que imigração, no longo prazo, aumenta o PIB total sem reduzir empregos nativos de forma estrutural.'
    },
    {
      prompt: '(VESTIBULAR) Analise as afirmativas sobre xenofobia e migração:\nI. Xenofobia é fenômeno exclusivo de crises econômicas.\nII. Migrantes contribuem para inovação e diversificação econômica.\nIII. A criminalização da migração irregular viola o direito internacional dos refugiados.\nIV. Políticas de integração beneficiam apenas migrantes, não a sociedade receptora.\nQuais estão corretas?',
      options: [
        { text: 'I e IV',   correct: false },
        { text: 'II e III', correct: true  },
        { text: 'I e III',  correct: false },
        { text: 'III e IV', correct: false }
      ],
      explanation: 'I: FALSA — xenofobia existe também em economias prósperas (ex: Europa pré-2008). IV: FALSA — integração gera arrecadação, produtividade e coesão social para todos. II: VERDADEIRA — migrantes trazem diversidade cognitiva e empreendedorismo. III: VERDADEIRA — criminalizar a mobilidade de quem foge de perseguição viola o non-refoulement. Corretas: II e III.'
    }
  ],

  adaptiveReview: [
    {
      prompt: 'DIFÍCIL: O Brasil, por ter história de miscigenação, é "naturalmente" mais tolerante à xenofobia?',
      options: [
        { text: 'Sim — a mistura racial cria imunidade ao preconceito',                                  correct: false },
        { text: 'Não — o mito da democracia racial esconde racismo estrutural e xenofobia interna documentados historicamente', correct: true  },
        { text: 'Sim — a colonização portuguesa foi mais gentil que a britânica, criando sociedade mais inclusiva', correct: false },
        { text: 'Não — o Brasil é o país mais xenofóbico da América Latina',                             correct: false }
      ],
      explanation: 'O mito da democracia racial (ideia de que o Brasil é harmonioso por ter se miscigenado) foi desmontado por intelectuais como Florestan Fernandes e Abdias do Nascimento: a mistura de raças não eliminou hierarquias. O Brasil tem xenofobia interna documentada (contra nordestinos, indígenas, quilombolas) e externa (contra haitianos e venezuelanos). Miscigenação não é antídoto de preconceito — é necessária desconstrução ativa.'
    },
    {
      prompt: 'DIFÍCIL: Uma cidade abre "Centro de Apoio ao Migrante" com tradutores, orientação jurídica e revalidação de diplomas. Qual impacto econômico e social esperado?',
      options: [
        { text: 'Aumento do desemprego local pela atração de mais migrantes',                             correct: false },
        { text: 'Redução da vulnerabilidade dos migrantes + integração ao mercado formal + arrecadação de impostos + diversificação econômica', correct: true  },
        { text: 'Nenhum impacto mensurável, pois centros de apoio são apenas assistencialistas',          correct: false },
        { text: 'Aumento do custo dos serviços públicos sem retorno econômico',                           correct: false }
      ],
      explanation: 'Centro de apoio ao migrante: tradutores → migrante consegue se comunicar e acessar serviços. Orientação jurídica → regularização. Revalidação de diplomas → médico haitiano trabalha como médico (não entregador), engenheiro sírio trabalha como engenheiro. Resultado: mais contribuintes pagando INSS, mais qualificação disponível no mercado, menos vulnerabilidade. O investimento no centro se paga em produtividade — como qualquer política de inclusão eficiente.'
    }
  ],

  rewards: { xp: 130, gems: 13, badge: '🤝 Defensor dos Direitos' },
  completionMessage: '🤝 Você entende migração, direitos e preconceito. Sabe que xenofobia é construída — e que pode ser desconstruída.',
  nextStage: 'geo_cap7_s04'
};

window.GEO_CAP7_S03 = GEO_CAP7_S03;
