/**
 * CAP8 FINAL — Exame Final: Corpo Humano
 * Avaliação abrangente de todos os sistemas estudados
 */

const CAP8_SFINAL = {
  id: 'cap8_sfinal',
  title: 'Exame Final: Corpo Humano',
  icon: '🏆',
  difficulty: 'hard',
  estimatedTime: 25,

  learningObjectives: [
    'Demonstrar domínio completo dos 6 sistemas do corpo humano',
    'Aplicar conhecimentos integrados em situações complexas',
    'Diferenciar doenças e seus mecanismos em cada sistema',
    'Resolver cenários clínicos com raciocínio sistêmico',
    'Provar maestria total para completar o capítulo'
  ],

  summary: {
    readTime: 7,
    content: [
      {
        icon: '🏆',
        title: 'Exame Final — Revisão Completa',
        text: 'Este é o exame definitivo! Revise todos os sistemas:\n\n🍽️ DIGESTÓRIO: boca→esôfago→estômago→ID→IG→reto; enzimas (amilase, pepsina, lipase); bile do fígado\n\n🫀 CIRCULATÓRIO: 4 câmaras (AD→VD→AE→VE); pequena e grande circulação; sangue (hemácias, leucócitos, plaquetas, plasma); grupos ABO/Rh'
      },
      {
        icon: '🔬',
        title: 'Respiratório, Nervoso e Excretor',
        text: '🫁 RESPIRATÓRIO: nariz→faringe→laringe→traqueia→brônquios→alvéolos; hematose por difusão; respiração celular (glicose+O₂→CO₂+H₂O+ATP)\n\n🧠 NERVOSO: SNC (encéfalo+medula) + SNP; neurônios (dendrito→corpo→axônio); sinapses; arco reflexo na medula\n\n🫘 EXCRETOR: rins (néfron→filtração→reabsorção→secreção); urina; excreção pela pele e pulmões'
      },
      {
        icon: '🧬',
        title: 'Sistema Reprodutor e Integração',
        text: '🧬 REPRODUTOR FEMININO: ovários→tubas→útero→vagina; ciclo menstrual (~28 dias); ovulação; hormônios (estrogênio, progesterona, FSH, LH)\n\n🧬 REPRODUTOR MASCULINO: testículos (espermatozoides+testosterona); epidídimo→ducto→uretra\n\nINTEGRAÇÃO: todos os sistemas se comunicam via sistema circulatório (nutrientes, O₂, hormônios) e nervoso (coordenação)'
      },
      {
        icon: '🩺',
        title: 'Doenças Importantes — Revisão',
        text: 'Digestório: gastrite, úlcera, hepatite, pancreatite\nCirculatório: infarto, hipertensão, anemia, leucemia\nRespiratório: asma, bronquite, pneumonia, enfisema\nNervoso: AVC, Parkinson, Alzheimer, esclerose múltipla\nExcretor: insuficiência renal, cálculo renal, cistite\nReprodutor: DSTs, câncer de colo, HPV, endometriose'
      },
      {
        icon: '⚡',
        title: 'Conceitos Mais Cobrados em Provas',
        text: '1. Excreção vs eliminação: excreção = produto do metabolismo celular\n2. Doador/receptor universal: O- doa para todos; AB+ recebe de todos\n3. Arco reflexo: NÃO passa pelo cérebro\n4. Hematose: difusão SIMPLES (sem ATP)\n5. Ciclo menstrual: ovulação ~dia 14; menstruação = sem fecundação\n6. Néfron: unidade funcional do rim (filtração→reabsorção→secreção)\n7. Sinapse: neurotransmissores na fenda sináptica'
      }
    ],

    flashcards: [
      { q: 'Qual é a unidade funcional do rim?',                           a: 'O néfron (glomérulo + cápsula de Bowman + túbulos).' },
      { q: 'O que é excreção?',                                             a: 'Eliminação de produtos do metabolismo celular (ex: ureia, CO₂, água metabólica).' },
      { q: 'Qual a diferença entre fecundação e implantação?',              a: 'Fecundação: óvulo+espermatozoide nas tubas. Implantação: embrião no endométrio do útero.' },
      { q: 'Qual enzima do pâncreas digere proteínas no intestino?',        a: 'Tripsina (produzida como tripsinogênio — forma inativa).' },
      { q: 'O que é ADH e qual sua função?',                                a: 'Hormônio antidiurético: aumenta a reabsorção de água nos rins, concentrando a urina.' },
      { q: 'Qual a função dos cílios nas vias aéreas?',                     a: 'Varrer muco e partículas para a faringe (tapete mucociliar).' },
      { q: 'O que diferencia artéria de veia funcionalmente?',              a: 'Artéria: leva sangue do coração. Veia: traz sangue ao coração.' },
      { q: 'O que são gametas?',                                             a: 'Células reprodutoras haploides (n): óvulo e espermatozoide.' }
    ],

    mnemonics: [
      { trigger: 'Grupo doador/receptor', memory: '"O menos nada doa para todos; AB mais aceita tudo" → O- doador universal; AB+ receptor universal' },
      { trigger: 'Funções dos lobos cerebrais', memory: '"FOTP: Frontal=Faz planos; Occipital=Olha; Temporal=Toca/ouve; Parietal=Percebe sensações"' },
      { trigger: 'Excreção vs eliminação',  memory: '"EXcreção = EXcremento metabólico (do metabolismo); ELiminação = saída qualquer"' }
    ],

    miniReview: [
      { q: 'Cite os 4 componentes do sangue e suas funções.', a: 'Hemácias (O₂), leucócitos (defesa), plaquetas (coagulação), plasma (transporte de nutrientes/hormônios).' },
      { q: 'O que acontece hormonalmente na ovulação?', a: 'Pico de LH → liberação do óvulo pelo ovário no ~dia 14 do ciclo.' },
      { q: 'Por que o intestino delgado é eficiente na absorção?', a: 'Vilosidades + microvilosidades (borda em escova) aumentam enormemente a área de contato.' }
    ]
  },

  warmup: [
    {
      prompt: '🏆 EXAME FINAL | O grupo sanguíneo que pode receber de qualquer tipo ABO é:',
      options: [
        { text: 'O positivo',   correct: false },
        { text: 'A negativo',   correct: false },
        { text: 'AB positivo',  correct: true  },
        { text: 'B negativo',   correct: false }
      ],
      explanation: 'AB positivo é o receptor universal: tem antígenos A, B e Rh, portanto não produz anticorpos contra eles — aceita qualquer sangue.'
    },
    {
      prompt: '🏆 EXAME FINAL | A respiração celular ocorre em qual organela?',
      options: [
        { text: 'Núcleo',         correct: false },
        { text: 'Ribossomo',      correct: false },
        { text: 'Mitocôndria',    correct: true  },
        { text: 'Complexo de Golgi', correct: false }
      ],
      explanation: 'As mitocôndrias realizam a respiração aeróbica (glicose + O₂ → CO₂ + H₂O + ATP) — geram ~36-38 ATPs por glicose.'
    },
    {
      prompt: '🏆 EXAME FINAL | Qual hormônio é produzido pelos rins para estimular a produção de hemácias?',
      options: [
        { text: 'ADH',         correct: false },
        { text: 'Aldosterona', correct: false },
        { text: 'EPO',         correct: true  },
        { text: 'Renina',      correct: false }
      ],
      explanation: 'Eritropoietina (EPO) produzida pelo rim estimula a medula óssea a produzir mais hemácias. Base do doping sanguíneo no esporte.'
    }
  ],

  guidedPractice: [
    {
      prompt: '🔍 DICA: O intestino delgado tem estruturas para maximizar a absorção.\n\nA principal estrutura que aumenta a área de absorção do intestino delgado é:',
      options: [
        { text: 'Glândulas de Lieberkuhn',  correct: false },
        { text: 'Válvula ileocecal',         correct: false },
        { text: 'Vilosidades intestinais',   correct: true  },
        { text: 'Células caliciformes',      correct: false }
      ],
      explanation: 'Vilosidades (e microvilosidades — borda em escova) multiplicam a área do intestino de ~1m² para ~200m² — tamanho de uma quadra de tênis!'
    },
    {
      prompt: '🔍 DICA: Os sistemas nervoso e endócrino cooperam na homeostase.\n\nO hipotálamo controla a produção hormonal da hipófise por meio de:',
      options: [
        { text: 'Impulsos elétricos diretos à hipófise',                    correct: false },
        { text: 'Hormônios liberadores e inibidores via sistema porta',     correct: true  },
        { text: 'Nervos sensitivos que percebem falta de hormônio',        correct: false },
        { text: 'Sinais químicos via líquido cefalorraquidiano',           correct: false }
      ],
      explanation: 'O hipotálamo secreta hormônios liberadores (ex: GnRH, TRH, CRH) que viajam pelo sistema porta hipotalâmico-hipofisário e controlam a hipófise.'
    }
  ],

  questions: [
    {
      prompt: '🏆 EXAME | O ácido clorídrico do estômago tem como funções:',
      options: [
        { text: 'Digerir carboidratos e criar pH básico',                               correct: false },
        { text: 'Ativar pepsina, matar microorganismos e desnaturar proteínas',          correct: true  },
        { text: 'Neutralizar a bile e facilitar absorção de gorduras',                   correct: false },
        { text: 'Produzir vitaminas do complexo B',                                      correct: false }
      ],
      explanation: 'HCl: converte pepsinogênio em pepsina (ativa), desnatura proteínas, mata patógenos ingeridos e cria pH ~2 ideal para pepsina.'
    },
    {
      prompt: '🏆 EXAME | O que caracteriza uma doença autoimune como lúpus ou esclerose múltipla?',
      options: [
        { text: 'Deficiência total de leucócitos',                                correct: false },
        { text: 'O sistema imune ataca tecidos do próprio organismo',             correct: true  },
        { text: 'Excesso de produção de anticorpos contra agentes externos',     correct: false },
        { text: 'Vírus que destrói os linfócitos T',                             correct: false }
      ],
      explanation: 'Doenças autoimunes: o sistema imune perde a tolerância ao "próprio" e ataca tecidos do hospedeiro. Ex: EM (mielina), lúpus (vários tecidos), diabetes tipo 1 (células beta).'
    },
    {
      prompt: '🏆 EXAME | O peristaltismo é responsável por:',
      options: [
        { text: 'Secretar enzimas digestivas',                          correct: false },
        { text: 'Mover o alimento pelo trato gastrointestinal por contrações musculares', correct: true },
        { text: 'Absorver nutrientes no intestino delgado',              correct: false },
        { text: 'Produzir suco gástrico',                               correct: false }
      ],
      explanation: 'Peristaltismo: contrações rítmicas da musculatura lisa do tubo digestivo que empurram o bolo alimentar (boca→ânus).'
    },
    {
      prompt: '🏆 EXAME | Qual hormônio é responsável por manter o endométrio durante a gravidez?',
      options: [
        { text: 'Estrogênio apenas',      correct: false },
        { text: 'FSH',                    correct: false },
        { text: 'Progesterona',           correct: true  },
        { text: 'LH',                     correct: false }
      ],
      explanation: 'A progesterona mantém o endométrio espessado para o embrião. Na gravidez, a placenta passa a produzi-la após as primeiras semanas (corpo lúteo → placenta).'
    },
    {
      prompt: '🏆 EXAME | A aldosterona, produzida pelas glândulas suprarrenais, age nos rins para:',
      options: [
        { text: 'Aumentar a filtração glomerular',                       correct: false },
        { text: 'Reabsorver Na⁺ e excretar K⁺, retendo água',          correct: true  },
        { text: 'Eliminar ureia mais rapidamente',                       correct: false },
        { text: 'Reduzir a produção de urina',                          correct: false }
      ],
      explanation: 'Aldosterona → reabsorção de sódio (Na⁺) no túbulo distal → água segue osmoticamente → pressão arterial aumenta. Excesso: hipertensão. Déficit: hipotensão.'
    },
    {
      prompt: '🏆 EXAME | A morte encefálica é definida pela cessação irreversível das funções do:',
      options: [
        { text: 'Cerebelo',        correct: false },
        { text: 'Córtex cerebral apenas',  correct: false },
        { text: 'Encéfalo completo, incluindo tronco encefálico', correct: true },
        { text: 'Medula espinhal', correct: false }
      ],
      explanation: 'Morte encefálica = cessação irreversível de TODAS as funções encefálicas, incluindo o tronco (respiração espontânea, reflexos de tronco). Critério legal para doação de órgãos.'
    },
    {
      prompt: '🏆 EXAME | O que é o ciclo de Krebs (ciclo do ácido cítrico)?',
      options: [
        { text: 'Ciclo de absorção de vitaminas no intestino',            correct: false },
        { text: 'Série de reações na mitocôndria que oxidam acetil-CoA, produzindo CO₂ e NADH', correct: true },
        { text: 'Processo de síntese de glicose a partir de CO₂',        correct: false },
        { text: 'Ciclo de produção de hormônios no pâncreas',            correct: false }
      ],
      explanation: 'Ciclo de Krebs: segunda etapa da respiração aeróbica (após glicólise). Ocorre na matriz mitocondrial. Produz CO₂, NADH, FADH₂ que alimentam a cadeia respiratória para gerar ATP.'
    },
    {
      prompt: '🏆 EXAME | Um paciente com obstrução do ducto pancreático apresentará dificuldade para digerir:',
      options: [
        { text: 'Apenas proteínas',                    correct: false },
        { text: 'Proteínas, gorduras E carboidratos',  correct: true  },
        { text: 'Apenas gorduras',                     correct: false },
        { text: 'Apenas vitaminas lipossolúveis',      correct: false }
      ],
      explanation: 'O pâncreas produz: tripsina/quimotripsina (proteínas), lipase pancreática (gorduras), amilase pancreática (carboidratos). Obstrução → má digestão de todos os macronutrientes.'
    },
    {
      prompt: '🏆 EXAME | Por que a hipertensão arterial crônica danifica os rins?',
      options: [
        { text: 'Reduz o fluxo sanguíneo renal, causando isquemia',                   correct: false },
        { text: 'A alta pressão danifica os glomérulos, reduzindo a filtração',       correct: true  },
        { text: 'Aumenta a produção de ureia pelo fígado',                            correct: false },
        { text: 'Bloqueia os ureteres por espasmo muscular',                          correct: false }
      ],
      explanation: 'Hipertensão → pressão excessiva nos capilares glomerulares → dano estrutural progressivo → glomeruloesclerose → insuficiência renal crônica (nefropatia hipertensiva).'
    },
    {
      prompt: '🏆 EXAME | O que é a meiose e por que é essencial para a reprodução sexuada?',
      options: [
        { text: 'Divisão que dobra o número de cromossomos para fortalecer os gametas', correct: false },
        { text: 'Divisão celular que reduz o número de cromossomos à metade, gerando gametas haploides', correct: true },
        { text: 'Processo de cópia do DNA antes da fertilização',                       correct: false },
        { text: 'Fusão de duas células somáticas para gerar um gameta',                 correct: false }
      ],
      explanation: 'Meiose: 2n (46 cromossomos) → n (23). Garante que após fecundação (n + n = 2n) o número correto seja restaurado. Gera variabilidade genética por crossing-over e segregação independente.'
    }
  ],

  adaptiveReview: [
    {
      prompt: '🏆 DIFÍCIL: Uma criança nasce com ausência congênita do timo (síndrome de DiGeorge). Qual será o principal problema imunológico?',
      options: [
        { text: 'Ausência de anticorpos (imunoglobulinas)',                                     correct: false },
        { text: 'Deficiência de linfócitos T maduros → imunidade celular comprometida',        correct: true  },
        { text: 'Excesso de leucócitos → reações autoimunes',                                   correct: false },
        { text: 'Rins não conseguem filtrar toxinas infecciosas',                               correct: false }
      ],
      explanation: 'O timo é onde os linfócitos T amadurecem e aprendem a reconhecer o "próprio". Sem timo → poucos T maduros → infecções virais e fúngicas graves. A imunidade humoral (anticorpos/linfócitos B) é parcialmente preservada.'
    },
    {
      prompt: '🏆 DIFÍCIL: Por que gestantes com deficiência de folato têm risco de defeitos do tubo neural no feto?',
      options: [
        { text: 'O folato forma ossos — sua falta causa malformações ósseas',                   correct: false },
        { text: 'O folato é essencial para síntese de DNA e divisão celular rápida no desenvolvimento neural inicial', correct: true },
        { text: 'O folato produz mielina — sua falta causa desmielinização fetal',             correct: false },
        { text: 'O folato equilibra hormônios uterinos necessários para o fechamento neural',  correct: false }
      ],
      explanation: 'O tubo neural (origem do SNC) fecha nas semanas 3-4 de gestação. Nessa fase há divisão celular intensa que exige folato para síntese de DNA. Deficiência → espinha bífida, anencefalia.'
    }
  ],

  rewards: { xp: 250, gems: 25, badge: '🏆 Mestre do Corpo Humano' },
  completionMessage: '🏆 CAPÍTULO COMPLETO! Você é o Mestre do Corpo Humano! 6 sistemas dominados, Dr. Chaos derrotado, e agora este diploma digital é seu. A jornada científica continua — novos desafios te aguardam!',
  nextStage: null
};

window.CAP8_SFINAL = CAP8_SFINAL;
