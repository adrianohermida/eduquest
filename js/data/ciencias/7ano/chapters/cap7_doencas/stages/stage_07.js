/**
 * STAGE 07 — Doenças Virais da Infância
 * Sarampo, rubéola, catapora, caxumba e poliomielite
 */

const STAGE_07 = {
  id: 'stage_07',
  title: 'Virais da Infância',
  icon: '👶',
  difficulty: 'medium',
  estimatedTime: 14,

  learningObjectives: [
    'Conhecer as principais doenças virais da infância e suas características',
    'Entender por que o sarampo é tão contagioso (R0 ≈ 15)',
    'Compreender o risco da rubéola para grávidas (síndrome da rubéola congênita)',
    'Saber por que catapora pode reaparecer como herpes-zóster',
    'Entender a erradicação da poliomielite no Brasil e o risco de retorno'
  ],

  summary: {
    readTime: 5,
    content: [
      {
        icon: '🔴',
        title: 'Sarampo: O Mais Contagioso',
        text: 'Causado pelo Paramyxovírus. R0 ≈ 15 — um dos mais contagiosos já conhecidos!\n\nSintomas: febre alta, tosse, coriza, conjuntivite, manchas de Koplik (pontinhos brancos na boca) e depois erupção vermelha da cabeça aos pés.\n\nComplicações graves: pneumonia, encefalite, cegueira, morte.\n\nPrevenção: tríplice viral (SCR) — duas doses, com 95% de cobertura para imunidade de rebanho.\n\n⚠️ Surtos recentes no Brasil por queda na cobertura vacinal.'
      },
      {
        icon: '🌸',
        title: 'Rubéola: Perigo para Grávidas',
        text: 'Na maioria das crianças: doença leve com erupção cor-de-rosa e febre baixa.\n\nPerigo GRAVE: Síndrome da Rubéola Congênita (SRC):\n• Se grávida pegar rubéola no 1º trimestre → bebê pode nascer com:\n  - Surdez\n  - Cardiopatia congênita\n  - Catarata\n  - Deficiência intelectual\n\n✅ Vacina tríplice viral (SCR) previne. Mulheres em idade fértil devem verificar imunização!'
      },
      {
        icon: '💧',
        title: 'Catapora e Herpes-Zóster',
        text: 'Causada pelo vírus Varicela-Zóster (VZV). Altamente contagiosa.\n\nSintomas: febre, coceira intensa, bolhas (vesículas) espalhadas pelo corpo.\n\n⚠️ Característica especial: o vírus NUNCA sai do corpo!\nApós a catapora, o VZV fica latente nos gânglios nervosos.\n\nDecadas depois (geralmente com imunidade baixa ou idade avançada), pode reativar como HERPES-ZÓSTER:\n  - Lesões dolorosas ao longo de um nervo\n  - Dor pode durar meses (neuralgia pós-herpética)'
      },
      {
        icon: '🔔',
        title: 'Caxumba: As Glândulas Inchadas',
        text: 'Causada pelo Paramyxovírus das parotites.\n\nSintoma clássico: inchaço das glândulas salivares (parótidas) — "bochecha de hamster".\n\nComplicações em adultos:\n⚠️ Orquite (inflamação dos testículos) em homens — risco de infertilidade\n⚠️ Ovarite em mulheres\n⚠️ Meningite e surdez (raras)\n\nPrevenção: tríplice viral (SCR) — vacina do sarampo protege também contra caxumba e rubéola.'
      },
      {
        icon: '🦽',
        title: 'Poliomielite: A Paralisia Infantil',
        text: 'Causada pelo Poliovírus. Pode causar paralisia flácida irreversível nas pernas.\n\n✅ Brasil: livre da poliomielite desde 1989 graças ao Zé Gotinha!\n✅ Vacinação em gotas (vírus oral atenuado) ou injetável (VIP)\n\n⚠️ Alerta ATUAL: queda na cobertura vacinal e casos detectados em países vizinhos.\n\nFato histórico: nos anos 1950-60, epidemias de polio lotavam hospitais — crianças em "pulmões de aço".\n\n💡 A polio afeta principalmente menores de 5 anos.'
      }
    ],

    flashcards: [
      { q: 'Qual o R0 do sarampo?',                         a: 'R0 ≈ 15 — um dos mais contagiosos.' },
      { q: 'Qual vacina previne sarampo, caxumba e rubéola?', a: 'Tríplice viral (SCR) — duas doses.' },
      { q: 'O que é a Síndrome da Rubéola Congênita?',      a: 'Bebê de grávida com rubéola nasce com surdez, cardiopatia e catarata.' },
      { q: 'O que é o herpes-zóster?',                       a: 'Reativação do vírus VZV (catapora) dormindo nos nervos — décadas depois.' },
      { q: 'Quando o Brasil erradicou a poliomielite?',      a: 'Em 1989 — graças ao Programa Nacional de Imunizações.' },
      { q: 'Sintoma característico da caxumba:',            a: 'Inchaço das glândulas parótidas — "bochecha de hamster".' },
      { q: 'Por que quem teve catapora pode ter herpes-zóster?', a: 'O vírus VZV fica latente nos nervos e pode reativar décadas depois.' },
      { q: 'Qual complicação grave do sarampo?',             a: 'Pneumonia, encefalite e cegueira — pode levar à morte.' }
    ],

    mnemonics: [
      { trigger: 'Tríplice viral SCR',  memory: '"S-C-R = Sarampo, Caxumba, Rubéola. Três em Um — três inimigos de uma só agulha!"' },
      { trigger: 'Catapora → Zóster',  memory: '"VZV dorme no nervo. Catapora na infância → Zóster na velhice. O vírus não vai embora!"' },
      { trigger: 'Rubéola no 1º tri',  memory: '"RUBéola = RUim para o bebê. 1º trimestre = surdez, coração, catarata"' },
      { trigger: 'Polio e gotas',       memory: '"Zé Gotinha = Dois gotinhos de liberdade. Brasil livre da polio desde 1989!"' }
    ],

    miniReview: [
      { q: 'Qual vacina previne sarampo, caxumba e rubéola?',    a: 'Tríplice viral (SCR) — duas doses.' },
      { q: 'Por que a rubéola é perigosa para grávidas?',        a: 'Causa Síndrome da Rubéola Congênita: surdez, cardiopatia, catarata.' },
      { q: 'O que é herpes-zóster?',                             a: 'Reativação do vírus da catapora (VZV) nos nervos, décadas depois.' },
      { q: 'Desde quando o Brasil está livre da poliomielite?',  a: 'Desde 1989.' }
    ]
  },

  warmup: [
    {
      prompt: 'A vacina que protege contra sarampo, caxumba e rubéola é chamada:',
      options: [
        { text: 'Tríplice viral (SCR)',  correct: true  },
        { text: 'BCG',                   correct: false },
        { text: 'DPT',                   correct: false },
        { text: 'Hepatite B',            correct: false }
      ],
      explanation: 'A SCR (Sarampo-Caxumba-Rubéola) protege contra as três doenças em uma única vacina.'
    },
    {
      prompt: 'O Brasil está livre da poliomielite desde:',
      options: [
        { text: '1989',  correct: true  },
        { text: '1950',  correct: false },
        { text: '2000',  correct: false },
        { text: '2010',  correct: false }
      ],
      explanation: 'O Brasil recebeu certificado de eliminação da poliomielite em 1994, com o último caso em 1989.'
    },
    {
      prompt: 'A catapora é causada pelo vírus:',
      options: [
        { text: 'Varicela-Zóster (VZV)',  correct: true  },
        { text: 'Sarampo-Paramyxovírus',  correct: false },
        { text: 'Poliovírus tipo 1',      correct: false },
        { text: 'Rubivírus',              correct: false }
      ],
      explanation: 'O VZV (Varicela-Zóster Vírus) causa a catapora e pode reativar como herpes-zóster décadas depois.'
    }
  ],

  guidedPractice: [
    {
      prompt: '🔍 DICA: O VZV (vírus da catapora) nunca é eliminado do corpo — fica "dormindo" nos nervos.\n\nO herpes-zóster é causado por:',
      options: [
        { text: 'Reativação do vírus da catapora (VZV) nos nervos',  correct: true  },
        { text: 'Nova infecção por um vírus diferente',               correct: false },
        { text: 'Complicação de herpes labial (herpes simples)',      correct: false },
        { text: 'Efeito colateral da vacina da catapora',             correct: false }
      ],
      explanation: 'O VZV fica latente nos gânglios nervosos. Com queda da imunidade (idade, estresse, doenças), pode reativar como zóster.'
    },
    {
      prompt: '🔍 DICA: A rubéola em adultos é leve, mas no 1º trimestre de gestação é grave.\n\nA Síndrome da Rubéola Congênita pode causar no bebê:',
      options: [
        { text: 'Surdez, cardiopatia congênita e catarata',    correct: true  },
        { text: 'Microcefalia (como o Zika)',                   correct: false },
        { text: 'Paralisia das pernas (como a polio)',          correct: false },
        { text: 'Inchaço das glândulas (como a caxumba)',       correct: false }
      ],
      explanation: 'A rubéola congênita (1º trimestre) causa a tríade clássica: surdez + cardiopatia + catarata.'
    }
  ],

  questions: [
    {
      prompt: 'O sarampo tem R0 ≈ 15, o que significa que é:',
      options: [
        { text: 'Extremamente contagioso — cada doente infecta ~15 pessoas suscetíveis', correct: true  },
        { text: 'Perigoso mas pouco contagioso',                                          correct: false },
        { text: 'Menos transmissível que a gripe',                                        correct: false },
        { text: 'Contagioso apenas para crianças abaixo de 3 anos',                      correct: false }
      ],
      explanation: 'R0 = 15 exige 95%+ da população vacinada para imunidade de rebanho — uma das mais altas coberturas necessárias.'
    },
    {
      prompt: 'A principal complicação da rubéola ocorre quando:',
      options: [
        { text: 'Grávida contrai a doença no 1º trimestre — bebê pode nascer com malformações', correct: true  },
        { text: 'Adulto jovem contrai — causa infertilidade permanente',                         correct: false },
        { text: 'A vacina é dada no 1º ano de vida',                                            correct: false },
        { text: 'A doença reativa décadas depois como zóster',                                  correct: false }
      ],
      explanation: 'A Síndrome da Rubéola Congênita (SRC) no 1º trimestre causa surdez, cardiopatia e catarata.'
    },
    {
      prompt: 'O herpes-zóster ocorre porque:',
      options: [
        { text: 'O vírus VZV (catapora) permanece latente nos nervos e pode reativar',       correct: true  },
        { text: 'É uma nova infecção pelo vírus da catapora na vida adulta',                  correct: false },
        { text: 'É transmitido por contato com pessoa com catapora',                         correct: false },
        { text: 'Ocorre como complicação da vacina da varicela em adultos',                  correct: false }
      ],
      explanation: 'O VZV dorme nos gânglios nervosos. Queda de imunidade → reativação como herpes-zóster, com lesões dolorosas.'
    },
    {
      prompt: 'O sintoma clássico da caxumba é:',
      options: [
        { text: 'Inchaço das glândulas parótidas (salivares)',         correct: true  },
        { text: 'Vesículas (bolhas) espalhadas pelo corpo',            correct: false },
        { text: 'Manchas avermelhadas que começam no rosto e descem', correct: false },
        { text: 'Paralisia flácida das pernas',                        correct: false }
      ],
      explanation: 'A caxumba inflama as glândulas parótidas, causando o inchaço característico das bochechas.'
    },
    {
      prompt: 'A poliomielite foi eliminada do Brasil graças a:',
      options: [
        { text: 'Programa Nacional de Imunizações com vacinação oral (Zé Gotinha)', correct: true  },
        { text: 'Antibióticos específicos desenvolvidos nos anos 1980',              correct: false },
        { text: 'Melhora do saneamento básico apenas',                               correct: false },
        { text: 'A doença desapareceu naturalmente por mutação viral',               correct: false }
      ],
      explanation: 'O programa de vacinação oral em massa ("Zé Gotinha") levou o Brasil à eliminação em 1989.'
    },
    {
      prompt: 'As manchas de Koplik (pontinhos brancos na boca) são características de:',
      options: [
        { text: 'Sarampo',   correct: true  },
        { text: 'Caxumba',   correct: false },
        { text: 'Rubéola',   correct: false },
        { text: 'Catapora',  correct: false }
      ],
      explanation: 'As manchas de Koplik aparecem na mucosa bucal antes da erupção cutânea do sarampo — sinal diagnóstico.'
    },
    {
      prompt: 'Uma complicação grave da caxumba em homens adultos é:',
      options: [
        { text: 'Orquite — inflamação dos testículos com risco de infertilidade', correct: true  },
        { text: 'Paralisia flácida dos membros inferiores',                        correct: false },
        { text: 'Surdez permanente bilateral',                                     correct: false },
        { text: 'Erupção cutânea intensa como na catapora',                       correct: false }
      ],
      explanation: 'A orquite pós-caxumba pode levar à atrofia testicular e infertilidade em uma parcela dos homens adultos afetados.'
    },
    {
      prompt: 'A vacina tríplice viral (SCR) é administrada em:',
      options: [
        { text: 'Duas doses — aos 12 meses e 15 meses de idade',   correct: true  },
        { text: 'Uma dose única com reforço apenas na adolescência', correct: false },
        { text: 'Apenas quando há epidemia de sarampo',             correct: false },
        { text: 'Somente para crianças com histórico familiar',     correct: false }
      ],
      explanation: 'O calendário nacional recomenda 2 doses de SCR: D1 aos 12 meses e D2 aos 15 meses (junto com a tetra viral).'
    },
    {
      prompt: 'Por que houve surtos de sarampo no Brasil em 2019?',
      options: [
        { text: 'Queda na cobertura vacinal abaixo do limiar de imunidade de rebanho (95%)', correct: true  },
        { text: 'O vírus do sarampo mutou e a vacina antiga ficou ineficaz',                  correct: false },
        { text: 'A vacina deixou de ser oferecida gratuitamente pelo SUS',                    correct: false },
        { text: 'O sarampo foi importado de países sem vírus antigo',                        correct: false }
      ],
      explanation: 'Com queda da cobertura vacinal abaixo de 95%, o sarampo voltou a circular — lembrando a importância de manter as vacinas em dia.'
    },
    {
      prompt: 'O poliovírus afeta principalmente:',
      options: [
        { text: 'O sistema nervoso central — podendo causar paralisia flácida irreversível', correct: true  },
        { text: 'O aparelho respiratório — causando pneumonia grave',                        correct: false },
        { text: 'As glândulas salivares — causando inchaço',                                correct: false },
        { text: 'A pele — causando vesículas dolorosas',                                    correct: false }
      ],
      explanation: 'O poliovírus destrói neurônios motores na medula espinhal, causando paralisia flácida — principalmente nas pernas.'
    }
  ],

  adaptiveReview: [
    {
      prompt: 'DIFÍCIL: Por que quem teve catapora pode ter herpes-zóster, mas quem nunca teve NÃO pega zóster?',
      options: [
        { text: 'Zóster é reativação do VZV latente nos nervos — só quem já teve catapora tem o vírus no corpo', correct: true  },
        { text: 'Zóster é uma cepa diferente do VZV transmitida apenas por adultos',                             correct: false },
        { text: 'Zóster pode ser contraído por qualquer pessoa que teve contato com varicela',                   correct: false },
        { text: 'A vacina da catapora impede completamente o zóster em qualquer pessoa',                        correct: false }
      ],
      explanation: 'Zóster não é infecção nova — é reativação do VZV que "hibernou" nos gânglios nervosos após a catapora.'
    },
    {
      prompt: 'DIFÍCIL: Por que é mais importante vacinar contra rubéola as mulheres em idade fértil do que os homens?',
      options: [
        { text: 'Porque a rubéola causa síndrome congênita no bebê se a mãe se infectar durante a gravidez', correct: true  },
        { text: 'Porque homens não são infectados pelo vírus da rubéola',                                     correct: false },
        { text: 'Porque a vacina causa mais efeitos colaterais em homens',                                    correct: false },
        { text: 'Porque mulheres têm sistema imune mais fraco contra rubéola',                               correct: false }
      ],
      explanation: 'Homens vacinados não transmitem à grávida. A proteção da gestante (direta ou indireta via rebanho) previne a SRC.'
    }
  ],

  rewards: {
    xp:    185,
    gems:  19,
    badge: '👶 Protetor da Infância'
  },

  completionMessage: '👶 Incrível! Você protege crianças com conhecimento. Vacina em dia = criança saudável!',
  nextStage: 'stage_08'
};

window.STAGE_07 = STAGE_07;
