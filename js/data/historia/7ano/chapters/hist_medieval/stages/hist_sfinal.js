/**
 * HIST FINAL STAGE — Exame Final: Idade Média
 */

const HIST_SFINAL = {
  id: 'hist_sfinal',
  title: 'Exame Final — Idade Média',
  icon: '🎓',
  difficulty: 'hard',
  estimatedTime: 20,
  isFinal: true,

  learningObjectives: [
    'Demonstrar domínio completo da Idade Média europeia',
    'Aplicar conhecimento em questões analíticas e contextuais',
    'Conectar temas medievais com processos históricos amplos',
    'Avaliar interpretações históricas sobre o período',
    'Consolidar aprendizado para avaliações acadêmicas'
  ],

  summary: {
    readTime: 2,
    content: [
      {
        icon: '🎓',
        title: 'Exame Final da Idade Média',
        text: 'Você chegou ao Exame Final do capítulo mais desafiador do 7º ano!\n\nEste exame cobre TODOS os 6 estágios:\n• Feudalismo (S01)\n• Igreja Medieval (S02)\n• As Cruzadas (S03)\n• Comércio e Cidades (S04)\n• Cultura e Arte (S05)\n• A Crise do Feudalismo (S06)\n\n🔑 Dica: as questões do exame final são do nível de vestibular e ENEM — exigem análise, não apenas memorização.\n\n⚡ Você está prestes a conquistar o certificado completo da Idade Média!'
      },
      {
        icon: '📋',
        title: 'Revisão Rápida Final',
        text: 'Os 5 conceitos mais cobrados em provas:\n\n1. FEUDALISMO: suserano/vassalo, tríade funcional (oratores/bellatores/laboratores)\n2. PODER DA IGREJA: excomunhão, poder temporal vs. espiritual, Canossa\n3. CRUZADAS: causas mistas, 1ª única vitória, 4ª saqueia Constantinopla\n4. BURGUESIA: classe dos burgos, aliada dos reis, base do capitalismo\n5. CRISE FEUDAL: Peste Negra (1347), Jacquerie, Guerra dos Cem Anos, transição\n\n🎯 Conecte sempre: O que causou? O que consequentemente mudou?'
      }
    ],

    flashcards: [
      { q: 'Resumo do feudalismo em uma frase?',    a: 'Troca de proteção militar por terra e trabalho — pirâmide de obrigações pessoais.' },
      { q: 'Resumo do poder da Igreja?',            a: 'Maior proprietária, maior educadora, controlava a salvação e a legitimidade dos reis.' },
      { q: 'Resumo das Cruzadas?',                  a: '1096-1291: guerras santas por Jerusalém — 1ª vence, 4ª saqueia Constantinopla.' },
      { q: 'Resumo da burguesia medieval?',         a: 'Nova classe dos burgos — destruiu o feudalismo ao financiar reis centralizadores.' },
      { q: 'Resumo da crise do feudalismo?',        a: 'Peste (1347) + guerras + revoltas + crise da Igreja = fim gradual do sistema feudal.' }
    ],

    mnemonics: [
      { trigger: 'Linha do tempo medieval',  memory: '"476 (Roma cai) → 1096 (1ª Cruzada) → 1347 (Peste) → 1453 (Constantinopla cai). A Idade Média em 4 datas."' },
      { trigger: 'Os 3 poderes medievais',   memory: '"DEUS (Igreja) + ESPADA (nobreza) + ENXADA (servos) = A Sociedade Medieval em 3 símbolos."' }
    ],

    miniReview: [
      { q: 'O que é "vassalagem"?',                   a: 'Pacto pessoal de fidelidade e serviço militar em troca de proteção e terras (feudo).' },
      { q: 'O que iniciou a decadência do feudalismo?', a: 'Múltiplos fatores: Cruzadas (enfraquecimento da nobreza), comércio (burguesia), Peste (escassez de mão de obra), guerras.' }
    ]
  },

  warmup: [
    {
      prompt: '📋 EXAME: O feudalismo europeu se baseava fundamentalmente em:',
      options: [
        { text: 'Uma economia monetária avançada com bancos e crédito',                         correct: false },
        { text: 'Relações pessoais de fidelidade (suserania/vassalagem) com base territorial',  correct: true  },
        { text: 'Um sistema democrático de assembleias locais',                                  correct: false },
        { text: 'Comércio internacional organizado pelos reis',                                  correct: false }
      ],
      explanation: 'O feudalismo era uma rede de relações pessoais: suserano protege, vassalo serve; nobre dá terra, servo trabalha. Personalismo e territorialidade — sem "Estado" abstrato.'
    },
    {
      prompt: '📋 EXAME: A excomunhão papal era politicamente poderosa porque:',
      options: [
        { text: 'Privava o rei de seu exército imediatamente',                                    correct: false },
        { text: 'Liberava os vassalos do juramento de fidelidade ao rei excomungado',             correct: true  },
        { text: 'Confiscava automaticamente as terras do rei para a Igreja',                      correct: false },
        { text: 'Proibia o rei de coletar impostos em seu território',                            correct: false }
      ],
      explanation: 'A excomunhão era arma política: ao ser excomungado, o rei perdia a legitimidade divina — e os vassalos, desobrigados do juramento, podiam abandoná-lo ou rebelar-se.'
    },
    {
      prompt: '📋 EXAME: O principal motivo do fracasso da maioria das Cruzadas foi:',
      options: [
        { text: 'Falta de motivação religiosa dos cruzados',                                      correct: false },
        { text: 'A superioridade militar muçulmana combinada com divisões internas dos cruzados', correct: true  },
        { text: 'A recusa da Igreja em financiar as expedições',                                   correct: false },
        { text: 'As doenças que mataram todos os cruzados nas primeiras expedições',              correct: false }
      ],
      explanation: 'As Cruzadas falharam por múltiplos motivos: coalizões muçulmanas mais unidas (Saladino), divisões entre cruzados, desvios de objetivo (4ª Cruzada), logística deficiente e distâncias imensas.'
    }
  ],

  guidedPractice: [
    {
      prompt: '📋 EXAME ANALÍTICO: "A Idade Média foi um período de estagnação total." Com base no que estudou, essa afirmação é:',
      options: [
        { text: 'Verdadeira — não houve nenhum progresso científico ou cultural',                correct: false },
        { text: 'Falsa — houve avanços em arquitetura, filosofia, universidades, comércio e literatura', correct: true  },
        { text: 'Verdadeira apenas para os séculos V-X (Alta Idade Média)',                     correct: false },
        { text: 'Verdadeira apenas nas zonas rurais; cidades eram avançadas',                   correct: false }
      ],
      explanation: '"Idade das Trevas" é um mito do Renascimento. A Idade Média produziu: universidades, filosofia escolástica (Tomás de Aquino), literatura (Dante, Chaucer), catedrais góticas, o sistema bancário moderno, o direito comum inglês.'
    },
    {
      prompt: '📋 EXAME ANALÍTICO: Por que Portugal e Espanha foram os primeiros a realizar Grandes Navegações (séc. XV)?',
      options: [
        { text: 'Porque tinham a maior população e mais recursos da Europa',                    correct: false },
        { text: 'Porque a Reconquista criou experiência militar/náutica e a necessidade de novas rotas comerciais', correct: true  },
        { text: 'Porque a Igreja ordenou que eles explorassem o mundo para evangelizar',        correct: false },
        { text: 'Porque eram os únicos com tecnologia náutica avançada',                        correct: false }
      ],
      explanation: 'A Reconquista (séc. VIII-XV) deu aos ibéricos experiência militar, espírito de cruzada e posição atlântica estratégica. Com os turcos otomanos bloqueando as rotas terrestres ao Oriente, precisavam de novas rotas — herança direta do mundo medieval.'
    }
  ],

  questions: [
    {
      prompt: '📋 A "tríade funcional" da sociedade medieval, formulada por Adalbéron de Laon (séc. XI), dividia a sociedade em:',
      options: [
        { text: 'Ricos, pobres e classe média',                                                   correct: false },
        { text: 'Clérigos (oratores), guerreiros (bellatores) e trabalhadores (laboratores)',    correct: true  },
        { text: 'Reis, nobres e servos',                                                          correct: false },
        { text: 'Igreja, nobreza e burguesia',                                                    correct: false }
      ],
      explanation: 'A teoria medieval dos três ordens: oratores (rezam = clérigos), bellatores (guerreiam = nobreza), laboratores (trabalham = servos/camponeses). Sistema legitimado como ordem divina.'
    },
    {
      prompt: '📋 O conceito de "duplo poder" medieval refere-se ao conflito entre:',
      options: [
        { text: 'Nobres e servos pelo controle da terra',                                         correct: false },
        { text: 'Papa (poder espiritual) e imperadores (poder temporal) — qual era supremo?',    correct: true  },
        { text: 'Igreja Católica e Igreja Ortodoxa pela liderança do cristianismo',               correct: false },
        { text: 'Dois papas durante o Grande Cisma do Ocidente',                                  correct: false }
      ],
      explanation: 'A grande disputa medieval: o papa tinha poder espiritual (salvação) e temporal (terras)? Os reis tinham poder independente de Deus ou dependiam da Igreja? A Querela das Investiduras foi o clímax desse conflito.'
    },
    {
      prompt: '📋 A expressão "Stadtluft macht frei" ("o ar da cidade liberta") significa que:',
      options: [
        { text: 'As cidades medievais não tinham muros — eram abertas ao ar livre',               correct: false },
        { text: 'Um servo que vivesse um ano e um dia na cidade tornava-se homem livre',          correct: true  },
        { text: 'A liberdade religiosa era garantida apenas nas cidades',                          correct: false },
        { text: 'A poluição das cidades medievais era menor que nos feudos rurais',               correct: false }
      ],
      explanation: 'Em muitas regiões, especialmente nas cidades alemãs, o costume jurídico determinava: se o senhor não reclamasse o servo em um ano e um dia na cidade, ele tornava-se livre. As cidades eram, literalmente, rotas de escape da servidão.'
    },
    {
      prompt: '📋 A "escolástica" medieval buscava resolver o conflito entre:',
      options: [
        { text: 'Papado e imperador pela supremacia política',                                    correct: false },
        { text: 'Fé cristã e razão filosófica (especialmente Aristóteles)',                      correct: true  },
        { text: 'Latim e línguas vernáculas na produção literária',                               correct: false },
        { text: 'Arte religiosa e arte secular nos mosteiros',                                    correct: false }
      ],
      explanation: 'A escolástica (Anselmo, Abelardo, Tomás de Aquino) tentava mostrar que fé e razão são compatíveis — que a filosofia grega podia servir à teologia cristã. "Fides quaerens intellectum" (a fé busca a inteligência).'
    },
    {
      prompt: '📋 Por que as especiarias eram tão valiosas no comércio medieval?',
      options: [
        { text: 'Eram usadas como moeda pelos povos orientais',                                   correct: false },
        { text: 'Conservavam carnes (sem refrigeração), condimentavam e tinham usos medicinais',  correct: true  },
        { text: 'Eram matéria-prima para fabricar perfumes usados pela nobreza',                  correct: false },
        { text: 'Eram usadas em rituais religiosos da Igreja Católica',                           correct: false }
      ],
      explanation: 'Sem geladeira, conservar carne era vital: sal, pimenta, cravo, canela preveniam deterioração. Além disso, melhoravam o sabor de carnes mal conservadas e tinham usos medicinais — valiam literalmente seu peso em ouro.'
    },
    {
      prompt: '📋 A Tapeçaria de Bayeux (séc. XI) é importante historicamente porque:',
      options: [
        { text: 'É o único texto em língua francesa da Alta Idade Média',                         correct: false },
        { text: 'Documenta visualmente a Conquista Normanda da Inglaterra (1066) em 70 metros',  correct: true  },
        { text: 'Foi tecida por Joana d\'Arc como voto pela libertação da França',                correct: false },
        { text: 'É a maior obra de arte gótica tecida da Idade Média',                            correct: false }
      ],
      explanation: 'A Tapeçaria de Bayeux é uma fonte histórica visual primária: 70 metros bordados narrando passo a passo a invasão normanda de Guilherme, o Conquistador. Arte e história em tecido.'
    },
    {
      prompt: '📋 O movimento da "polifonia" (várias vozes simultâneas) na música medieval representou:',
      options: [
        { text: 'Uma heresia musical condenada pela Igreja',                                      correct: false },
        { text: 'Uma inovação técnica que transformaria toda a história da música ocidental',     correct: true  },
        { text: 'A influência da música islâmica introduzida pelas Cruzadas',                    correct: false },
        { text: 'A música secular das cortes, separada do canto gregoriano religioso',            correct: false }
      ],
      explanation: 'A polifonia (séc. XII-XIII, escola de Notre-Dame) — múltiplas vozes independentes e harmoniosas — foi revolucionária. Do canto gregoriano monofônico à polifonia: o caminho direto para Bach, Mozart e toda a música clássica ocidental.'
    },
    {
      prompt: '📋 Joana d\'Arc é um símbolo do nascimento do sentimento nacional francês porque:',
      options: [
        { text: 'Foi a primeira mulher a liderar um exército em toda a história',                 correct: false },
        { text: 'Mobilizou franceses em torno da ideia de "França" — nação, não apenas vassalagem ao rei', correct: true  },
        { text: 'Escreveu o primeiro manifesto pelos direitos das mulheres medievais',            correct: false },
        { text: 'Foi canonizada imediatamente após sua morte — santo padroeiro da França',       correct: false }
      ],
      explanation: 'Joana d\'Arc não lutava apenas "pelo rei Carlos VII" — lutava pela "douce France" (doce França). Esse sentimento de pertencer a uma nação, não apenas a um feudo, é o embrião do Estado-nação moderno.'
    },
    {
      prompt: '📋 A Grande Fome (1315-1322) que precedeu a Peste Negra foi causada principalmente por:',
      options: [
        { text: 'Invasões mongóis que destruíram as colheitas europeias',                        correct: false },
        { text: 'Resfriamento climático (início da Pequena Idade do Gelo) + superpopulação relativa', correct: true  },
        { text: 'A Igreja proibiu o trabalho nos dias santos, impedindo as colheitas',            correct: false },
        { text: 'Guerras que destruíram todos os campos cultivados da França',                    correct: false }
      ],
      explanation: 'No início do séc. XIV, o clima esfriou (Pequena Idade do Gelo) — colheitas ruins + população que havia crescido demais = fome generalizada. A Grande Fome matou milhões ANTES da Peste Negra (1347), enfraquecendo ainda mais a população europeia.'
    },
    {
      prompt: '📋 QUESTÃO ENEM: "A Idade Média europeia foi um período em que a religião permeava todas as dimensões da vida social, política, cultural e econômica." Qual exemplo MELHOR ilustra essa afirmação?',
      options: [
        { text: 'Os cavaleiros usavam cruzes em seus escudos',                                    correct: false },
        { text: 'A excomunhão derrubava reis; as universidades nasceram das catedrais; as Cruzadas misturavam fé e geopolítica; os vitrais ensinavam a Bíblia', correct: true  },
        { text: 'As pessoas iam à missa todos os domingos',                                       correct: false },
        { text: 'Os papas viviam em Roma, cidade de tradição religiosa',                          correct: false }
      ],
      explanation: 'A religiosidade medieval não era apenas "prática pessoal" — estruturava o poder político (excomunhão), a educação (universidades catedrais), a guerra (Cruzadas), a arte (catedrais, vitrais), a filosofia (escolástica), a economia (proibição da usura). A religião era o sistema operacional da sociedade medieval.'
    }
  ],

  adaptiveReview: [
    {
      prompt: 'ENEM/VESTIBULAR: Leia: "O século XIV foi o mais desastroso da história medieval europeia: Peste Negra, Guerra dos Cem Anos, cismas e revoltas se sobrepuseram numa crise sistêmica que destruiu o mundo feudal." Essa visão é:',
      options: [
        { text: 'Incorreta — o século XIV foi na verdade o auge do feudalismo',                         correct: false },
        { text: 'Parcialmente correta — a crise foi real, mas o feudalismo já vinha se transformando desde o séc. XI com o comércio', correct: true  },
        { text: 'Correta — o século XIV destruiu o feudalismo instantaneamente',                         correct: false },
        { text: 'Incorreta — a crise do feudalismo só ocorreu no séc. XVI com a Reforma Protestante',   correct: false }
      ],
      explanation: 'A visão é válida mas incompleta: o feudalismo já estava sendo corroído desde o séc. XI pelo renascimento comercial, pelas Cruzadas e pela burguesia. O séc. XIV acelerou e aprofundou uma transformação que já estava em curso — não foi ruptura súbita, mas aceleração dramática de um processo longo.'
    }
  ],

  rewards: { xp: 250, gems: 25, badge: '🎓 Mestre da Idade Média' },
  completionMessage: '🎓 PARABÉNS! Você domina completamente a Idade Média — você é um verdadeiro Historiador Medieval!',
  nextStage: null
};

window.HIST_SFINAL = HIST_SFINAL;
