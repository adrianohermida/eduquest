/**
 * CAP8 STAGE 01 — Sistema Digestório
 * Da boca ao intestino: digestão mecânica e química
 */

const CAP8_S01 = {
  id: 'cap8_s01',
  title: 'Sistema Digestório',
  icon: '🫃',
  difficulty: 'easy',
  estimatedTime: 13,

  learningObjectives: [
    'Identificar os órgãos do sistema digestório em ordem',
    'Distinguir digestão mecânica de digestão química',
    'Compreender a função do estômago e intestinos',
    'Reconhecer as enzimas digestivas e onde atuam',
    'Entender a absorção de nutrientes no intestino delgado'
  ],

  summary: {
    readTime: 4,
    content: [
      {
        icon: '🫃',
        title: 'O Trajeto do Alimento',
        text: 'O alimento percorre: Boca → Faringe → Esôfago → Estômago → Intestino Delgado → Intestino Grosso → Ânus\n\n💡 Macete: "Boca F E Est Id Ig A" = "Boca Faz Engolir, Estômago Inicia, Intestinos Garantem Absorção"'
      },
      {
        icon: '⚙️',
        title: 'Digestão Mecânica vs Química',
        text: 'MECÂNICA: quebra física do alimento\n• Mastigação (boca), movimentos peristálticos (esôfago)\n• Não altera composição química\n\nQUÍMICA: quebra por enzimas\n• Amilase salival (boca) → quebra amido\n• Pepsina (estômago) → quebra proteínas\n• Lipase pancreática (intestino) → quebra gorduras'
      },
      {
        icon: '🧪',
        title: 'Estômago — A Fábrica Ácida',
        text: 'O estômago produz:\n• HCl (ácido clorídrico) — pH 1,5 a 2,0, mata bactérias\n• Pepsina — enzima que digere proteínas\n• Muco — protege a parede do estômago do próprio ácido\n\n⏱ O alimento fica ~4h no estômago virando "quimo"'
      },
      {
        icon: '🔬',
        title: 'Intestino Delgado — Campeão da Absorção',
        text: 'Mede ~7 metros e tem VILOSIDADES (dobras) que aumentam a área de absorção para ~200m²!\n\nAbsorve: glicose, aminoácidos, ácidos graxos, vitaminas, minerais\n\nÓrgãos acessórios que ajudam:\n• Fígado → produz bile (digere gordura)\n• Pâncreas → libera enzimas e bicarbonato'
      },
      {
        icon: '💧',
        title: 'Intestino Grosso — Água e Fezes',
        text: 'Mede ~1,5m. Funções:\n• Absorver água e sais minerais\n• Compactar o material não digerido formando fezes\n• Abrigar a microbiota intestinal (bilhões de bactérias benéficas)\n\n🦠 A microbiota produz vitamina K e B12!'
      }
    ],

    flashcards: [
      { q: 'Qual enzima da boca digere amido?',         a: 'Amilase salival (ptialina).' },
      { q: 'O que é peristaltismo?',                    a: 'Movimentos musculares que empurram o alimento pelo tubo digestivo.' },
      { q: 'Onde ocorre a maior absorção de nutrientes?',a: 'No intestino delgado, graças às vilosidades intestinais.' },
      { q: 'Qual a função do fígado na digestão?',      a: 'Produzir bile, que emulsifica (quebra em gotículas) as gorduras.' },
      { q: 'O que é o quimo?',                          a: 'Mistura pastosa formada no estômago após digestão mecânica e química.' },
      { q: 'O que diferencia digestão mecânica de química?', a: 'Mecânica = quebra física; química = quebra por enzimas, alterando a composição.' }
    ],

    mnemonics: [
      { trigger: 'Ordem dos órgãos',  memory: '"Boca Faz Engolir, Estômago Inicia, Intestinos Garantem Absorção" = Boca, Faringe, Esôfago, Estômago, I. Delgado, I. Grosso, Ânus' },
      { trigger: 'Enzimas chave',     memory: '"Ami na boca, Pep no estômago, Li no intestino" = Amilase, Pepsina, Lipase' },
      { trigger: 'Vilosidades',       memory: '"200m² de absorção = tamanho de uma quadra de tênis dentro do seu intestino!"' }
    ],

    miniReview: [
      { q: 'Cite os 7 órgãos do sistema digestório em ordem.', a: 'Boca, faringe, esôfago, estômago, intestino delgado, intestino grosso, ânus.' },
      { q: 'Por que o estômago não se digere a si mesmo?',     a: 'Por causa do muco que reveste sua parede, protegendo-a do ácido.' },
      { q: 'Qual a diferença entre quimo e quilo?',            a: 'Quimo = mistura do estômago. Quilo = mistura do intestino delgado após digestão.' }
    ]
  },

  warmup: [
    {
      prompt: 'Qual é a ordem correta do trajeto do alimento?',
      options: [
        { text: 'Boca → Estômago → Esôfago → Intestino', correct: false },
        { text: 'Boca → Faringe → Esôfago → Estômago → Intestino Delgado', correct: true },
        { text: 'Boca → Intestino → Estômago → Esôfago', correct: false },
        { text: 'Faringe → Boca → Estômago → Intestino', correct: false }
      ],
      explanation: 'O trajeto correto é: Boca → Faringe → Esôfago → Estômago → I. Delgado → I. Grosso → Ânus.'
    },
    {
      prompt: 'A mastigação é um exemplo de:',
      options: [
        { text: 'Digestão química', correct: false },
        { text: 'Digestão mecânica', correct: true },
        { text: 'Absorção', correct: false },
        { text: 'Excreção', correct: false }
      ],
      explanation: 'A mastigação quebra fisicamente o alimento sem alterar sua composição química — digestão mecânica.'
    },
    {
      prompt: 'Qual órgão produz a bile?',
      options: [
        { text: 'Estômago', correct: false },
        { text: 'Pâncreas', correct: false },
        { text: 'Fígado', correct: true },
        { text: 'Vesícula biliar', correct: false }
      ],
      explanation: 'O fígado produz a bile; a vesícula biliar apenas armazena e concentra a bile.'
    }
  ],

  guidedPractice: [
    {
      prompt: '🔍 DICA: Enzimas são como "tesouras moleculares" que cortam nutrientes específicos.\n\nA enzima que digere proteínas no estômago é:',
      options: [
        { text: 'Amilase',  correct: false },
        { text: 'Lipase',   correct: false },
        { text: 'Pepsina',  correct: true },
        { text: 'Salivina', correct: false }
      ],
      explanation: 'Pepsina (estômago) digere proteínas. Amilase (boca) digere amido. Lipase (intestino) digere gorduras.'
    },
    {
      prompt: '🔍 DICA: O intestino delgado tem estruturas que ampliam sua área de contato.\n\nAs estruturas que aumentam a área de absorção do intestino delgado chamam-se:',
      options: [
        { text: 'Vilosidades intestinais', correct: true },
        { text: 'Válvulas cardíacas',      correct: false },
        { text: 'Alvéolos',                correct: false },
        { text: 'Néfrons',                 correct: false }
      ],
      explanation: 'As vilosidades intestinais aumentam a área de absorção para ~200m² — tamanho de uma quadra de tênis!'
    }
  ],

  questions: [
    {
      prompt: 'O suco gástrico contém HCl. Qual o papel do ácido no estômago?',
      options: [
        { text: 'Absorver nutrientes',                correct: false },
        { text: 'Criar pH ácido para ativar pepsina e matar bactérias', correct: true },
        { text: 'Produzir bile',                      correct: false },
        { text: 'Neutralizar o bolo alimentar',       correct: false }
      ],
      explanation: 'O HCl cria pH ≈ 2, ativando a pepsina e eliminando microrganismos do alimento.'
    },
    {
      prompt: 'O pâncreas é classificado como glândula:',
      options: [
        { text: 'Somente endócrina',                correct: false },
        { text: 'Somente exócrina',                 correct: false },
        { text: 'Mista (endócrina e exócrina)',     correct: true },
        { text: 'Nenhuma das anteriores',           correct: false }
      ],
      explanation: 'Exócrina: libera enzimas digestivas no duodeno. Endócrina: libera insulina e glucagon na corrente sanguínea.'
    },
    {
      prompt: 'Qual parte do intestino é responsável por absorver a maior quantidade de água?',
      options: [
        { text: 'Intestino delgado', correct: false },
        { text: 'Intestino grosso',  correct: true },
        { text: 'Esôfago',           correct: false },
        { text: 'Estômago',          correct: false }
      ],
      explanation: 'O intestino grosso absorve principalmente água e sais minerais, compactando as fezes.'
    },
    {
      prompt: 'A bile emulsifica gorduras. Isso significa que ela:',
      options: [
        { text: 'Digere quimicamente as gorduras',           correct: false },
        { text: 'Quebra gorduras em gotículas menores para enzimas agirem', correct: true },
        { text: 'Produz lipase para quebrar gorduras',       correct: false },
        { text: 'Neutraliza o pH do intestino',              correct: false }
      ],
      explanation: 'Emulsificação = fragmentação mecânica das gorduras em gotículas — facilita a ação das lipases.'
    },
    {
      prompt: 'Uma pessoa sem vesícula biliar (colecistectomia) deve evitar:',
      options: [
        { text: 'Alimentos ricos em amido',   correct: false },
        { text: 'Proteínas magras',           correct: false },
        { text: 'Alimentos gordurosos em excesso', correct: true },
        { text: 'Frutas e vegetais',          correct: false }
      ],
      explanation: 'Sem vesícula, a bile cai continuamente no duodeno em pequenas quantidades — difícil digerir muita gordura de uma vez.'
    },
    {
      prompt: 'Movimentos peristálticos ocorrem em qual órgão?',
      options: [
        { text: 'Somente no esôfago',              correct: false },
        { text: 'Somente no intestino',            correct: false },
        { text: 'Em todo o tubo digestivo',        correct: true },
        { text: 'Somente no estômago',             correct: false }
      ],
      explanation: 'Peristaltismo = contrações musculares em todo o tubo digestivo (esôfago, estômago, intestinos) que empurram o alimento.'
    },
    {
      prompt: 'A amilase salival age melhor em pH:',
      options: [
        { text: 'Ácido (pH 2)',         correct: false },
        { text: 'Neutro (pH 6,5–7)',    correct: true },
        { text: 'Alcalino (pH 11)',     correct: false },
        { text: 'Qualquer pH',          correct: false }
      ],
      explanation: 'A amilase salival funciona em pH ~6,5–7. No estômago (pH ≈ 2), ela é inativada.'
    },
    {
      prompt: 'Os nutrientes absorvidos no intestino delgado vão diretamente para:',
      options: [
        { text: 'O fígado, via veia porta', correct: true },
        { text: 'Os rins',                 correct: false },
        { text: 'O coração diretamente',   correct: false },
        { text: 'Os pulmões',              correct: false }
      ],
      explanation: 'Os nutrientes entram nos capilares das vilosidades e seguem pela veia porta ao fígado, que os filtra e distribui.'
    },
    {
      prompt: 'Qual substância é produzida pelo fígado e armazenada na vesícula biliar?',
      options: [
        { text: 'Insulina', correct: false },
        { text: 'Bile',     correct: true },
        { text: 'Pepsina',  correct: false },
        { text: 'Amilase',  correct: false }
      ],
      explanation: 'Bile: produzida pelo fígado, armazenada e concentrada na vesícula biliar, liberada no duodeno ao comer gordura.'
    },
    {
      prompt: 'O peristaltismo inverso (contrações de volta) ocorre durante:',
      options: [
        { text: 'A digestão normal',   correct: false },
        { text: 'O vômito',            correct: true },
        { text: 'A absorção',          correct: false },
        { text: 'A defecação',         correct: false }
      ],
      explanation: 'O vômito é causado por contrações antiperiodísticas que empurram o conteúdo estomacal de volta ao esôfago.'
    }
  ],

  adaptiveReview: [
    {
      prompt: 'DIFÍCIL: O quilo é formado no intestino delgado após a digestão. O que o diferencia do quimo?',
      options: [
        { text: 'O quilo já teve os nutrientes absorvidos; o quimo não', correct: false },
        { text: 'O quilo contém nutrientes emulsificados pela bile; o quimo é o produto do estômago', correct: true },
        { text: 'O quilo é mais ácido que o quimo',                      correct: false },
        { text: 'Não há diferença; são nomes diferentes para a mesma coisa', correct: false }
      ],
      explanation: 'Quimo = mistura ácida formada no estômago. Quilo = mistura alcalina após ação da bile no intestino delgado.'
    },
    {
      prompt: 'DIFÍCIL: Uma pessoa com doença celíaca tem as vilosidades intestinais danificadas pelo glúten. A principal consequência é:',
      options: [
        { text: 'Aumento da absorção de gorduras',                  correct: false },
        { text: 'Má absorção de nutrientes, causando desnutrição',  correct: true },
        { text: 'Produção excessiva de bile',                       correct: false },
        { text: 'Aumento da motilidade intestinal apenas',          correct: false }
      ],
      explanation: 'Com vilosidades danificadas, a área de absorção diminui dramaticamente → má absorção de nutrientes essenciais.'
    }
  ],

  rewards: { xp: 130, gems: 13, badge: '🫃 Agente Digestório' },
  completionMessage: '🫃 Sistema Digestório dominado! Seu organismo agradece. Próximo sistema: Circulatório!',
  nextStage: 'cap8_s02'
};

window.CAP8_S01 = CAP8_S01;
