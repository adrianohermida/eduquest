/**
 * HIST STAGE 05 — Cultura e Arte Medieval
 */

const HIST_S05 = {
  id: 'hist_s05',
  title: 'Cultura e Arte Medieval',
  icon: '🎨',
  difficulty: 'medium',
  estimatedTime: 12,

  learningObjectives: [
    'Identificar as principais expressões artísticas medievais',
    'Diferenciar arquitetura românica e gótica',
    'Reconhecer a literatura medieval (trovadores, épicos, Dante)',
    'Entender o papel da arte como instrumento da Igreja',
    'Conhecer a música e o teatro medievais'
  ],

  summary: {
    readTime: 3,
    content: [
      {
        icon: '🏛️',
        title: 'Arquitetura: Românico vs Gótico',
        text: 'Estilo Românico (séc. X-XII):\n• Paredes grossas, arcos semicirculares, interior escuro\n• Expressava poder, solidez e proteção\n• Ex: Igreja de Santiago de Compostela\n\nEstilo Gótico (séc. XII-XV):\n• Arcos ogivais (apontados), vitrais coloridos, verticalidade\n• Interior luminoso — "a luz como metáfora de Deus"\n• Ex: Notre-Dame de Paris, Catedral de Chartres\n\n🔑 A invenção do "arco ogival" e do "contraforte externo" permitiu paredes mais finas e janelas enormes.'
      },
      {
        icon: '📖',
        title: 'Literatura Medieval',
        text: 'Épicos e canções de gesta:\n• Canção de Rolando (França) — herói cristão vs sarracenos\n• El Cid (Espanha) — cavaleiro reconquistador\n• Nibelungenlied (Alemanha) — saga germânica\n\nPoesia trovadoresca:\n• Trovadores provençais (sul da França) — amor cortês\n• Jograis e segréis em Portugal\n\nAlta literatura medieval:\n• Dante Alighieri — "A Divina Comédia" (Inferno, Purgatório, Paraíso)\n• Geoffrey Chaucer — "Os Contos de Canterbury"\n• Christine de Pizan — primeira escritora profissional européia'
      },
      {
        icon: '🎭',
        title: 'Música e Teatro',
        text: 'Música:\n• Canto Gregoriano — música litúrgica monofônica da Igreja\n• Trovadores — melodias populares em língua vernácula\n• Primeiros passos da polifonia (várias vozes) séc. XII-XIII\n\nTeatro medieval:\n• Auto sacramental — peças religiosas encenadas nas igrejas\n• Mistérios — representações da vida de Cristo\n• Moralidades — personagens alegóricos (Vício, Virtude, Morte)\n\n🔑 A arte medieval era quase exclusivamente religiosa — a Igreja era o grande mecenas. Arte secular cresceu nas cortes aristocráticas.'
      }
    ],

    flashcards: [
      { q: 'Diferença gótico vs românico?',        a: 'Românico: paredes grossas, escuro. Gótico: arcos ogivais, vitrais, luz, verticalidade.' },
      { q: 'O que era o "amor cortês"?',           a: 'Ideal poético trovadoresco — cavaleiro dedica amor platônico e serviço a uma dama inacessível.' },
      { q: 'Autor da Divina Comédia?',             a: 'Dante Alighieri (1265-1321). Obra em italiano (vulgar), não latim.' },
      { q: 'O que era o canto gregoriano?',        a: 'Música litúrgica monofônica da Igreja Católica — sem instrumentos, só vozes em uníssono.' },
      { q: 'O que eram os "autos sacramentais"?',  a: 'Peças teatrais religiosas encenadas nas igrejas ou praças — educação religiosa popular.' }
    ],

    mnemonics: [
      { trigger: 'Gótico vs Românico', memory: '"GÓTICO = para cima, luz, ogival. ROMÂNICO = sólido, escuro, semicircular."' },
      { trigger: 'Dante',             memory: '"Dante desce ao INFERNO, sobe ao PURGATÓRIO, chega ao PARAÍSO. A Divina Comédia."' }
    ],

    miniReview: [
      { q: 'Por que Notre-Dame é gótica e não românica?', a: 'Tem arcos ogivais, rosáceas de vitral, vitrais grandes, verticalidade — características góticas.' },
      { q: 'Por que Dante escreveu em italiano, não latim?', a: 'Para atingir o povo — o latim era só dos cultos. Pioneiro da literatura em língua vernácula.' }
    ]
  },

  warmup: [
    {
      prompt: 'A principal diferença entre arquitetura românica e gótica é:',
      options: [
        { text: 'O material usado — pedra vs madeira',                         correct: false },
        { text: 'Gótica usa arcos ogivais e vitrais; românica usa arcos semicirculares e é mais fechada', correct: true },
        { text: 'Românicos eram religiosos e góticos eram seculares',          correct: false },
        { text: 'Românicos eram mais altos e esbeltos',                        correct: false }
      ],
      explanation: 'Estilo Românico = paredes grossas, arcos redondos, interior escuro. Gótico = arcos ogivais, vitrais coloridos, verticalidade, interior luminoso.'
    },
    {
      prompt: 'O "amor cortês" da poesia trovadoresca é melhor descrito como:',
      options: [
        { text: 'Um tratado político sobre casamento entre nobres',           correct: false },
        { text: 'Amor platônico e idealizado de um cavaleiro por uma dama inacessível', correct: true },
        { text: 'Músicas religiosas dedicadas à Virgem Maria',               correct: false },
        { text: 'Canções populares compostas pelos servos',                   correct: false }
      ],
      explanation: 'O amor cortês dos trovadores era um código poético — o cavaleiro amava à distância, servia a dama como vassalo, sem esperar retribuição.'
    },
    {
      prompt: '"A Divina Comédia" foi escrita por:',
      options: [
        { text: 'Geoffrey Chaucer',   correct: false },
        { text: 'Dante Alighieri',    correct: true  },
        { text: 'Christine de Pizan', correct: false },
        { text: 'São Tomás de Aquino',correct: false }
      ],
      explanation: 'Dante Alighieri (1265-1321) escreveu "A Divina Comédia" em italiano vulgar — viagem pelo Inferno, Purgatório e Paraíso. Marco da literatura ocidental.'
    }
  ],

  guidedPractice: [
    {
      prompt: '🔍 DICA: Os vitrais medievais eram a "Bíblia dos analfabetos".\n\nPor que as imagens nas catedrais góticas eram tão importantes?',
      options: [
        { text: 'Eram pura decoração para mostrar a riqueza da Igreja',         correct: false },
        { text: 'A maioria da população era analfabeta — imagens ensinavam a Bíblia', correct: true },
        { text: 'A Igreja proibia a leitura, então só imagens eram permitidas', correct: false },
        { text: 'Os vitrais filtravam a luz para iluminar os manuscritos',      correct: false }
      ],
      explanation: 'Com altíssimo analfabetismo, as esculturas, afrescos e vitrais das igrejas eram a principal forma de educação religiosa — "a Bíblia em imagens".'
    },
    {
      prompt: '🔍 DICA: O arco ogival foi a inovação técnica que permitiu o estilo gótico.\n\nO que o arco ogival permitia que o arco semicircular não permitia?',
      options: [
        { text: 'Construir igrejas em pedra calcária',                              correct: false },
        { text: 'Paredes mais finas e janelas maiores — distribuía o peso lateralmente', correct: true },
        { text: 'Construir sem fundações profundas',                                correct: false },
        { text: 'Usar madeira em vez de pedra nas paredes',                         correct: false }
      ],
      explanation: 'O arco ogival distribui o peso para os lados (para os contrafortes externos), permitindo paredes muito mais finas — o que abre espaço para os enormes vitrais góticos.'
    }
  ],

  questions: [
    {
      prompt: 'Qual elemento arquitetônico permitiu que as catedrais góticas tivessem janelas tão grandes?',
      options: [
        { text: 'O arco semicircular de origem romana',       correct: false },
        { text: 'O contraforte externo (botareu)',             correct: true  },
        { text: 'As paredes duplas de pedra',                 correct: false },
        { text: 'As colunas internas de ferro',               correct: false }
      ],
      explanation: 'O contraforte externo (botareu) distribui o peso da abóbada para fora — permitindo paredes mais finas com grandes janelas de vitral.'
    },
    {
      prompt: '"Chanson de Roland" (Canção de Rolando) é um exemplo de:',
      options: [
        { text: 'Poesia trovadoresca de amor cortês',         correct: false },
        { text: 'Canção de gesta — épico heroico medieval',   correct: true  },
        { text: 'Auto sacramental da Igreja',                 correct: false },
        { text: 'Tratado de filosofia escolástica',           correct: false }
      ],
      explanation: 'As "canções de gesta" eram épicos heroicos que celebravam guerreiros cristãos. A Chanson de Roland narra a batalha de Roncesvalles (778).'
    },
    {
      prompt: 'O "canto gregoriano" recebe esse nome porque:',
      options: [
        { text: 'Foi composto exclusivamente por Gregório Magno',            correct: false },
        { text: 'Foi sistematizado e promovido pelo papa Gregório I (séc. VI)', correct: true },
        { text: 'Era cantado apenas na Catedral de Roma em datas gregorianas', correct: false },
        { text: 'Usava a escala musical criada na Grécia Antiga',            correct: false }
      ],
      explanation: 'O papa Gregório I (540-604) codificou e padronizou o repertório litúrgico — daí o nome "canto gregoriano".'
    },
    {
      prompt: 'Christine de Pizan é notável na história medieval porque:',
      options: [
        { text: 'Foi a única rainha que governou sozinha na Idade Média',              correct: false },
        { text: 'Foi a primeira escritora europeia que viveu da sua escrita profissionalmente', correct: true },
        { text: 'Liderou uma Cruzada das mulheres',                                    correct: false },
        { text: 'Inventou o sistema de notas musicais',                                correct: false }
      ],
      explanation: 'Christine de Pizan (1364-c.1430) escreveu sobre o papel das mulheres na sociedade — pioneira do feminismo medieval e profissional da escrita.'
    },
    {
      prompt: 'A iluminura medieval era a arte de:',
      options: [
        { text: 'Fabricar velas e tochas para iluminar os castelos',               correct: false },
        { text: 'Decorar manuscritos com ilustrações coloridas e letras ornamentadas', correct: true },
        { text: 'Pintar afrescos nas paredes das igrejas',                         correct: false },
        { text: 'Criar vitrais coloridos para as catedrais',                       correct: false }
      ],
      explanation: 'A iluminura era a arte de decorar manuscritos — monges especializados (iluministas) criavam miniaturas coloridas e capitulares ornamentadas nos textos.'
    },
    {
      prompt: 'Qual era a principal língua da cultura escrita medieval na Europa Ocidental?',
      options: [
        { text: 'Grego',    correct: false },
        { text: 'Árabe',    correct: false },
        { text: 'Latim',    correct: true  },
        { text: 'Hebraico', correct: false }
      ],
      explanation: 'O latim era a língua universal do conhecimento — a Igreja, a filosofia, o direito e a ciência medievais eram escritos em latim. A ruptura veio com autores como Dante.'
    },
    {
      prompt: 'O que caracterizava os "mistérios" do teatro medieval?',
      options: [
        { text: 'Peças policiais encenadas nos castelos',                      correct: false },
        { text: 'Representações da vida de Cristo e dos santos, encenadas na praça', correct: true },
        { text: 'Rituais secretos da maçonaria medieval',                     correct: false },
        { text: 'Danças macabras realizadas no cemitério',                    correct: false }
      ],
      explanation: 'Os "mistérios" (mystery plays) eram peças teatrais encenadas pelas guildas na praça central — representavam a vida de Cristo e episódios bíblicos.'
    },
    {
      prompt: 'A tapisserie de Bayeux é famosa porque:',
      options: [
        { text: 'É o maior vitral gótico existente',                          correct: false },
        { text: 'É um bordado de 70m que narra a Conquista Normanda da Inglaterra (1066)', correct: true },
        { text: 'Foi a primeira obra literária em língua francesa',           correct: false },
        { text: 'É um mapa medieval de toda a Europa',                        correct: false }
      ],
      explanation: 'A Tapeçaria de Bayeux (séc. XI) é uma obra de arte histórica — 70 metros bordados narrando a conquista da Inglaterra por Guilherme, o Conquistador.'
    },
    {
      prompt: 'São Tomás de Aquino foi importante para a cultura medieval porque:',
      options: [
        { text: 'Pintou os afrescos da Basílica de Assis',                              correct: false },
        { text: 'Criou a Escolástica — síntese entre fé cristã e filosofia aristotélica', correct: true },
        { text: 'Escreveu a primeira gramática em língua vulgar',                        correct: false },
        { text: 'Fundou a Universidade de Paris',                                        correct: false }
      ],
      explanation: 'São Tomás de Aquino (1225-1274) — a Summa Theologica conciliou teologia cristã com a razão aristotélica. Maior filósofo medieval.'
    },
    {
      prompt: 'Por que a maioria da arte medieval europeia tem tema religioso?',
      options: [
        { text: 'A lei proibia arte secular sob pena de morte',                         correct: false },
        { text: 'A Igreja era o único mecenas com recursos para encomendá-la',          correct: true  },
        { text: 'Os artistas medievais eram todos monges',                              correct: false },
        { text: 'A população pedia exclusivamente arte religiosa',                      correct: false }
      ],
      explanation: 'A Igreja era o grande financiador da arte medieval — possuía terras, riquezas e encomendava obras para glorificar Deus e educar os fiéis.'
    }
  ],

  adaptiveReview: [
    {
      prompt: 'DIFÍCIL: Por que Dante escrever em italiano vulgar (não latim) na "Divina Comédia" foi um ato revolucionário?',
      options: [
        { text: 'Porque o italiano era mais fácil de aprender que o latim',             correct: false },
        { text: 'Porque democratizou a literatura — qualquer letrado podia ler, não só o clero; inaugurou a literatura nacional italiana', correct: true },
        { text: 'Porque a Igreja proibiu o latim para obras literárias',                correct: false },
        { text: 'Porque o italiano já era mais falado que o latim na Itália no séc. XIV', correct: false }
      ],
      explanation: 'Escrever em vernáculo (língua do povo) foi revolutionary — tornou a grande literatura acessível além do clero letrado, e estabeleceu o toscano como base da língua italiana.'
    }
  ],

  rewards: { xp: 130, gems: 13, badge: '🎨 Artista Medieval' },
  completionMessage: '🎨 Você aprecia a arte medieval — do canto gregoriano às catedrais góticas!',
  nextStage: 'hist_s06'
};

window.HIST_S05 = HIST_S05;
