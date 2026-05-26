/**
 * CAP8 STAGE 06 — Sistema Reprodutor
 * Reprodução humana, ciclo menstrual e desenvolvimento fetal
 */

const CAP8_S06 = {
  id: 'cap8_s06',
  title: 'Sistema Reprodutor',
  icon: '🧬',
  difficulty: 'medium',
  estimatedTime: 13,

  learningObjectives: [
    'Identificar os órgãos do sistema reprodutor masculino e feminino',
    'Compreender a gametogênese (espermatogênese e ovogênese)',
    'Entender o ciclo menstrual e seus hormônios',
    'Descrever as etapas do desenvolvimento fetal',
    'Reconhecer métodos contraceptivos e ISTs'
  ],

  summary: {
    readTime: 5,
    content: [
      {
        icon: '🧬',
        title: 'Sistema Reprodutor Masculino',
        text: 'Órgãos principais:\n• Testículos: produzem espermatozoides (37°C) e testosterona\n• Epidídimo: maturação e armazenamento dos espermatozoides\n• Ductos deferentes: conduzem espermatozoides\n• Próstata e vesículas seminais: produzem líquido seminal\n• Pênis: órgão copulador\n\n💡 Por que os testículos ficam fora do corpo? T° interna (37°C) destruiria os espermatozoides — temperatura ideal é 35°C!'
      },
      {
        icon: '🌸',
        title: 'Sistema Reprodutor Feminino',
        text: 'Órgãos principais:\n• Ovários (2): produzem óvulos e hormônios (estrogênio, progesterona)\n• Tubas uterinas (trompas): conduzem o óvulo; local da FECUNDAÇÃO\n• Útero: implantação e desenvolvimento fetal\n• Vagina: canal do parto e órgão copulador\n• Vulva: genitália externa\n\n⚠️ A fecundação ocorre na TUBA UTERINA, não no útero!'
      },
      {
        icon: '📅',
        title: 'Ciclo Menstrual — 28 dias',
        text: 'DIAS 1-5: Menstruação — descamação do endométrio\nDIAS 6-13: Fase folicular — FSH estimula crescimento do folículo; estrogênio ↑\nDIA 14: OVULAÇÃO — LH dispara, óvulo é liberado\nDIAS 15-28: Fase lútea — corpo lúteo produz progesterona\n\nSe NÃO houver fertilização:\nProgesterona ↓ → endométrio descama → nova menstruação'
      },
      {
        icon: '👶',
        title: 'Desenvolvimento Fetal',
        text: 'FECUNDAÇÃO: espermatozoide + óvulo = zigoto\nDIAS 1-4: Divisão celular (clivagem) → mórula → blástula\nDIA 7: IMPLANTAÇÃO (nidação) no endométrio\nSEMANAS 1-8: EMBRIÃO (formação dos sistemas)\nSEMANA 9+: FETO (crescimento e maturação)\n\nGESTAÇÃO: ~280 dias (40 semanas) = 9 meses\nFunção da placenta: troca de nutrientes/gases, hormônios'
      },
      {
        icon: '🛡️',
        title: 'Contracepção e ISTs',
        text: 'MÉTODOS CONTRACEPTIVOS:\n• Barreira: camisinha (também protege de ISTs!)\n• Hormonal: pílula, injeção (inibem ovulação)\n• DIU: dispositivo intrauterino\n• Cirúrgico: vasectomia, laqueadura\n\nISTs COMUNS:\n• AIDS (HIV): sem cura, controle com TARV\n• Sífilis: bactéria, tratável com penicilina\n• Gonorreia, HPV, Herpes, Hepatite B\n\n💡 Camisinha é o único método que previne ISTs E gravidez!'
      }
    ],

    flashcards: [
      { q: 'Onde ocorre a fecundação?',                         a: 'Na tuba uterina (trompa de Falópio).' },
      { q: 'Qual hormônio dispara a ovulação?',                 a: 'LH (hormônio luteinizante), produzido pela hipófise.' },
      { q: 'Por que os testículos ficam fora da cavidade abdominal?', a: 'A produção de espermatozoides requer temperatura ~2°C menor que a corporal (35°C).' },
      { q: 'O que é o corpo lúteo?',                            a: 'Estrutura formada após a ovulação que produz progesterona para manter o endométrio.' },
      { q: 'Qual método contraceptivo protege de ISTs?',        a: 'Apenas a camisinha (masculina e feminina) — barreira física contra vírus e bactérias.' },
      { q: 'Qual a diferença entre embrião e feto?',            a: 'Embrião: semanas 1-8 (formação dos órgãos). Feto: semana 9 em diante (crescimento e maturação).' }
    ],

    mnemonics: [
      { trigger: 'Ciclo menstrual',  memory: '"Menstrua, Folículo cresce, Ovula, Luto (corpo lúteo)" = 4 fases de 28 dias' },
      { trigger: 'Fecundação',       memory: '"FeCUNDAÇÃO = FE(rece) na TUba = tuba uterina" — não no útero!' },
      { trigger: 'Hormônios ciclo',  memory: '"FSH faz o Folículo; LH Lança o óvulo; Progesterona Preserva a gravidez"' }
    ],

    miniReview: [
      { q: 'Em que dia do ciclo menstrual ocorre a ovulação?',      a: 'Em torno do 14º dia (ciclo de 28 dias).' },
      { q: 'O que acontece com o endométrio se não houver fertilização?', a: 'O corpo lúteo regride, a progesterona cai e o endométrio é descamado (menstruação).' },
      { q: 'Qual a diferença entre mórula e blástula?',             a: 'Mórula: aglomerado sólido de células. Blástula: esfera com cavidade interna (blastocele).' }
    ]
  },

  warmup: [
    {
      prompt: 'A fecundação do óvulo pelo espermatozoide ocorre normalmente na:',
      options: [
        { text: 'Vagina',            correct: false },
        { text: 'Útero',             correct: false },
        { text: 'Tuba uterina',      correct: true  },
        { text: 'Ovário',            correct: false }
      ],
      explanation: 'A fecundação ocorre na tuba uterina (trompa). O óvulo é fecundado logo após a ovulação, enquanto ainda percorre a tuba.'
    },
    {
      prompt: 'Qual hormônio é responsável por DISPARAR a ovulação?',
      options: [
        { text: 'Estrogênio',      correct: false },
        { text: 'Progesterona',    correct: false },
        { text: 'FSH',             correct: false },
        { text: 'LH',              correct: true  }
      ],
      explanation: 'O pico de LH no 13º/14º dia dispara a ovulação. FSH estimula o desenvolvimento do folículo.'
    },
    {
      prompt: 'Qual método contraceptivo também protege contra ISTs?',
      options: [
        { text: 'Pílula anticoncepcional', correct: false },
        { text: 'DIU',                     correct: false },
        { text: 'Camisinha',               correct: true  },
        { text: 'Laqueadura',              correct: false }
      ],
      explanation: 'Apenas a camisinha (masculina ou feminina) cria barreira física que impede tanto a gravidez quanto a transmissão de ISTs.'
    }
  ],

  guidedPractice: [
    {
      prompt: '🔍 DICA: O ciclo menstrual tem 4 fases e é controlado por FSH, LH, estrogênio e progesterona.\n\nNa fase lútea (dias 15-28), o hormônio predominante é:',
      options: [
        { text: 'FSH',            correct: false },
        { text: 'Estrogênio',     correct: false },
        { text: 'Progesterona',   correct: true  },
        { text: 'LH',             correct: false }
      ],
      explanation: 'O corpo lúteo (resquício do folículo) produz progesterona para manter o endométrio receptivo a uma possível nidação.'
    },
    {
      prompt: '🔍 DICA: A placenta se forma no útero e é essencial para a gestação.\n\nA função principal da placenta é:',
      options: [
        { text: 'Proteger o feto do impacto físico',                correct: false },
        { text: 'Promover troca de nutrientes, O₂ e CO₂ entre mãe e feto', correct: true  },
        { text: 'Produzir o líquido amniótico',                      correct: false },
        { text: 'Iniciar as contrações do parto',                    correct: false }
      ],
      explanation: 'A placenta permite troca de gases (O₂/CO₂), nutrientes, hormônios e anticorpos entre sangue materno e fetal, sem misturar os sangues.'
    }
  ],

  questions: [
    {
      prompt: 'Os espermatozoides são produzidos nos túbulos seminíferos dos testículos por um processo chamado:',
      options: [
        { text: 'Ovogênese',            correct: false },
        { text: 'Meiose',               correct: false },
        { text: 'Espermatogênese',      correct: true  },
        { text: 'Gametogênese',         correct: false }
      ],
      explanation: 'Espermatogênese = processo de formação dos espermatozoides nos túbulos seminíferos, iniciado na puberdade e contínuo por toda a vida adulta.'
    },
    {
      prompt: 'A gravidez ectópica ocorre quando o embrião se implanta fora do útero. O local mais comum é:',
      options: [
        { text: 'Ovário',           correct: false },
        { text: 'Vagina',           correct: false },
        { text: 'Tuba uterina',     correct: true  },
        { text: 'Cavidade abdominal', correct: false }
      ],
      explanation: 'Gravidez tubária (tuba uterina) é a mais comum. É uma emergência médica — a tuba não comporta o crescimento do embrião.'
    },
    {
      prompt: 'O hormônio beta-hCG (detectado no teste de gravidez) é produzido por:',
      options: [
        { text: 'Corpo lúteo do ovário',    correct: false },
        { text: 'Trofoblasto / placenta',   correct: true  },
        { text: 'Hipófise materna',         correct: false },
        { text: 'Embrião diretamente',      correct: false }
      ],
      explanation: 'O trofoblasto (células que formarão a placenta) produz beta-hCG para manter o corpo lúteo ativo nas primeiras semanas → progesterona continua sendo produzida.'
    },
    {
      prompt: 'O HIV destrói principalmente os linfócitos T CD4+. A AIDS se manifesta quando:',
      options: [
        { text: 'O vírus entra no organismo',                    correct: false },
        { text: 'CD4+ cai abaixo de 200 células/mm³, permitindo infecções oportunistas', correct: true },
        { text: 'O paciente para de tomar TARV por 1 semana',   correct: false },
        { text: 'O corpo produz anticorpos contra o HIV',       correct: false }
      ],
      explanation: 'HIV = vírus. AIDS = estágio avançado da infecção (CD4 <200) com imunodeficiência grave e infecções/cânceres oportunistas.'
    },
    {
      prompt: 'O que diferencia gêmeos univitelinos de bivitelinos?',
      options: [
        { text: 'Univitelinos têm DNA diferente; bivitelinos têm o mesmo DNA',  correct: false },
        { text: 'Univitelinos = 1 zigoto dividido (idênticos); bivitelinos = 2 óvulos fecundados (fraternos)', correct: true },
        { text: 'Bivitelinos sempre são do mesmo sexo',                         correct: false },
        { text: 'Não há diferença genética entre eles',                         correct: false }
      ],
      explanation: 'Univitelinos (monozigóticos): mesmo zigoto → DNA idêntico. Bivitelinos (dizigóticos): dois óvulos + dois espermatozoides → DNA diferente.'
    },
    {
      prompt: 'O líquido amniótico tem como funções:',
      options: [
        { text: 'Fornecer nutrientes ao feto diretamente',        correct: false },
        { text: 'Proteger o feto de impactos, manter temperatura e permitir movimentos', correct: true },
        { text: 'Substituir a função da placenta',                correct: false },
        { text: 'Produzir hormônios gestacionais',               correct: false }
      ],
      explanation: 'O líquido amniótico: amortece choques, regula temperatura, permite movimentos fetais e impede infecções (propriedades antimicrobianas).'
    },
    {
      prompt: 'A menstruação ocorre quando:',
      options: [
        { text: 'O nível de estrogênio está no pico',                           correct: false },
        { text: 'A progesterona cai ao final do ciclo sem fecundação',          correct: true  },
        { text: 'O FSH estimula diretamente o endométrio',                      correct: false },
        { text: 'A ovulação não ocorre naquele ciclo',                          correct: false }
      ],
      explanation: 'Sem fecundação, o corpo lúteo regride → progesterona ↓ → endométrio perde sustentação hormonal → descama = menstruação.'
    },
    {
      prompt: 'A vasectomia como método contraceptivo:',
      options: [
        { text: 'Elimina a produção de testosterona',                            correct: false },
        { text: 'Corta ou obstrui os ductos deferentes, impedindo saída de espermatozoides', correct: true },
        { text: 'Remove os testículos cirurgicamente',                           correct: false },
        { text: 'Reduz a libido permanentemente',                               correct: false }
      ],
      explanation: 'Vasectomia: secção dos ductos deferentes. Os espermatozoides continuam sendo produzidos, mas são reabsorvidos. Testosterona e libido: inalterados.'
    },
    {
      prompt: 'A síndrome de Down (trissomia do 21) ocorre por:',
      options: [
        { text: 'Mutação em um único gene do cromossomo 21',                    correct: false },
        { text: 'Não-disjunção na meiose → três cópias do cromossomo 21',      correct: true  },
        { text: 'Ausência completa do cromossomo 21',                           correct: false },
        { text: 'Infecção viral durante a gestação',                            correct: false }
      ],
      explanation: 'Não-disjunção meiótica → gameta com 2 cromossomos 21 → após fecundação: 47 cromossomos (3 do par 21) = trissomia 21.'
    },
    {
      prompt: 'O parto normal é desencadeado principalmente pelo hormônio:',
      options: [
        { text: 'Progesterona',  correct: false },
        { text: 'Estrogênio',    correct: false },
        { text: 'Ocitocina',     correct: true  },
        { text: 'ADH',           correct: false }
      ],
      explanation: 'Ocitocina (hipófise posterior): provoca contrações uterinas progressivas. O parto sintético também usa ocitocina (Pitocin) para indução.'
    }
  ],

  adaptiveReview: [
    {
      prompt: 'DIFÍCIL: A talidomida causou malformações em fetos nos anos 60. Qual período da gestação é mais crítico para teratógenos?',
      options: [
        { text: '3º trimestre (semanas 27-40)',          correct: false },
        { text: '1º trimestre, especialmente semanas 3-8 (organogênese)', correct: true },
        { text: '2º trimestre (semanas 13-26)',           correct: false },
        { text: 'Qualquer período tem o mesmo risco',    correct: false }
      ],
      explanation: 'A organogênese (formação dos órgãos) ocorre nas semanas 3-8. Teratógenos nesse período causam malformações graves. No 3º trimestre, o feto já está formado.'
    },
    {
      prompt: 'DIFÍCIL: Por que gestantes Rh- com feto Rh+ recebem anti-D (imunoglobulina) após o parto?',
      options: [
        { text: 'Para evitar eritroblastose no 1º filho',                     correct: false },
        { text: 'Para destruir anticorpos anti-Rh formados e proteger gestações futuras', correct: true },
        { text: 'Para aumentar a produção de progesterona pós-parto',         correct: false },
        { text: 'Para prevenir infecções no recém-nascido',                  correct: false }
      ],
      explanation: 'Anti-D impede que a mãe Rh- forme memória imunológica contra o Rh+ → protege filhos futuros de eritroblastose fetal.'
    }
  ],

  rewards: { xp: 140, gems: 14, badge: '🧬 Guardião da Vida' },
  completionMessage: '🧬 Sistema Reprodutor compreendido! Você domina os segredos da vida. Prepare-se para o Chefe Final!',
  nextStage: 'cap8_sboss'
};

window.CAP8_S06 = CAP8_S06;
