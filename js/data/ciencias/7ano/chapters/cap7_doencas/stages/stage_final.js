/**
 * STAGE FINAL — Exame Final: Mestre das Doenças Transmissíveis
 * Interpretação de texto + situações-problema integradas
 */

const STAGE_FINAL = {
  id: 'stage_final',
  title: 'Exame Final',
  icon: '🎓',
  difficulty: 'hard',
  estimatedTime: 25,
  isFinal: true,

  learningObjectives: [
    'Interpretar textos científicos e notícias de saúde',
    'Resolver situações-problema epidemiológicas',
    'Aplicar conhecimento integrado de prevenção e controle',
    'Demonstrar pensamento crítico sobre desinformação em saúde',
    'Conquistar o título de Mestre das Doenças Transmissíveis'
  ],

  summary: {
    readTime: 2,
    content: [
      {
        icon: '🎓',
        title: 'Parabéns — Chegou ao Exame Final!',
        text: 'Você completou os 10 estágios e venceu o Chefe!\n\nEste exame final testa sua capacidade de:\n\n📖 INTERPRETAR textos sobre saúde e epidemiologia\n🔍 ANALISAR situações-problema reais\n⚖️ COMPARAR doenças por múltiplos critérios\n🚫 IDENTIFICAR fake news e raciocínios incorretos\n\nAs questões são mais longas e complexas — mas você está pronto!\n\n🏆 Ao concluir: você receberá o badge "Mestre das Doenças Transmissíveis" e XP máximo do capítulo!'
      },
      {
        icon: '💡',
        title: 'Como Abordar as Questões',
        text: 'Estratégia para o exame final:\n\n1. Leia o texto/situação completamente antes das opções\n2. Identifique: Qual doença? Qual transmissão? Qual prevenção?\n3. Procure palavras-chave: "vetor", "fecal-oral", "aérea", "solo"\n4. Cuidado com negações ("NÃO é...", "EXCETO...")\n5. Raciocine sobre fake news: "Isso tem evidência científica?"\n\nVocê estudou tudo — confie no que aprendeu!'
      }
    ],

    flashcards: [
      { q: 'Cite 3 doenças de transmissão fecal-oral.', a: 'Cólera, febre tifóide, hepatite A (e giardíase, amebíase).' },
      { q: 'Cite 3 doenças de transmissão aérea.',      a: 'Tuberculose, sarampo, COVID-19 (e coqueluche, catapora).' },
      { q: 'Cite 3 doenças de transmissão vetorial.',   a: 'Dengue, malária, febre amarela (e zika, chikungunya, doença de Chagas).' },
      { q: 'Qual é o maior fator protetor individual contra doenças infecciosas?', a: 'Vacinação (junto com saneamento básico no nível coletivo).' }
    ],

    mnemonics: [
      { trigger: 'Revisão final',  memory: '"AgTrPr = Agente + Transmissão + Prevenção. Se souber isso para cada doença, passou no exame!"' }
    ],

    miniReview: [
      { q: 'Qual a diferença entre soro e vacina?',      a: 'Soro: anticorpos prontos (passivo, rápido). Vacina: treina o sistema imune (ativo, duradouro).' },
      { q: 'O saneamento previne quais tipos de doenças?', a: 'Fecal-orais (cólera, febre tifóide) e veiculadas por vetores que criam em água (dengue).' }
    ]
  },

  warmup: [
    {
      prompt: '📖 TEXTO: "Em 1854, uma epidemia de cólera matou 500 pessoas em 10 dias em Londres. John Snow mapeou os casos e descobriu que todos os doentes usavam a mesma bomba d\'água da Broad Street." Com base nessa situação, Snow usou:',
      options: [
        { text: 'Método epidemiológico — mapeamento espacial de casos para identificar a fonte',  correct: true  },
        { text: 'Método experimental — criou uma vacina e testou em voluntários',                  correct: false },
        { text: 'Método clínico — examinou todos os 500 doentes individualmente',                 correct: false },
        { text: 'Método molecular — analisou o DNA do Vibrio cholerae',                           correct: false }
      ],
      explanation: 'Snow fundou a epidemiologia moderna ao mapear casos geograficamente — sem ainda conhecer o agente causador!'
    },
    {
      prompt: '📖 TEXTO: "O R0 do sarampo é 15. Para imunidade de rebanho, usa-se a fórmula 1 − 1/R0." Com base nisso, qual a cobertura vacinal mínima necessária?',
      options: [
        { text: '~93% — (1 − 1/15 ≈ 93%)',  correct: true  },
        { text: '50% — sempre metade basta',  correct: false },
        { text: '100% — não há margem',       correct: false },
        { text: '75% — padrão da OMS',        correct: false }
      ],
      explanation: '1 − 1/15 = 1 − 0,067 = 0,933 = ~93% da população precisa ser imune para bloquear o sarampo.'
    },
    {
      prompt: '📖 SITUAÇÃO: Uma grávida de 8 semanas contraiu rubéola. Qual é a principal preocupação clínica?',
      options: [
        { text: 'Síndrome da Rubéola Congênita no feto — surdez, cardiopatia, catarata',  correct: true  },
        { text: 'Risco de aborto espontâneo por febre alta',                               correct: false },
        { text: 'Transmissão para o pai por contato domiciliar',                           correct: false },
        { text: 'Complicação renal grave na mãe',                                          correct: false }
      ],
      explanation: 'Rubéola no 1º trimestre causa SRC: a tríade clássica é surdez + cardiopatia congênita + catarata.'
    }
  ],

  guidedPractice: [
    {
      prompt: '🎓 ANÁLISE CRÍTICA: Uma rede social viraliza: "Vacina contra dengue causou morte de criança no dia seguinte à vacinação." Qual o erro lógico nessa afirmação?',
      options: [
        { text: 'Falácia post hoc ergo propter hoc — temporal não prova causalidade',  correct: true  },
        { text: 'A vacina da dengue não existe, logo a afirmação é impossível',        correct: false },
        { text: 'Mortes pós-vacinação são normais e esperadas em todo programa',       correct: false },
        { text: 'Crianças não podem tomar a vacina da dengue, logo é mentira',        correct: false }
      ],
      explanation: 'A morte pode ter ocorrido por causa completamente independente. "Depois de" ≠ "por causa de" — exige investigação científica.'
    },
    {
      prompt: '🎓 COMPARAÇÃO: Escolha a afirmação CORRETA sobre o controle do Aedes aegypti:',
      options: [
        { text: 'Controle ambiental (eliminar criadouros) é mais sustentável que inseticidas químicos em longo prazo', correct: true  },
        { text: 'Inseticidas químicos são suficientes e dispensam qualquer outra medida',                               correct: false },
        { text: 'Apenas a vacinação contra dengue controla o Aedes efetivamente',                                     correct: false },
        { text: 'O Aedes foi erradicado do Brasil em 1958 — os surtos são de outra espécie',                         correct: false }
      ],
      explanation: 'Inseticidas criam resistência; controle ambiental (eliminar água parada) é a base mais sustentável. Combinar abordagens é o ideal.'
    }
  ],

  questions: [
    {
      prompt: '📖 TEXTO: "Em 2016, a OMS declarou o zika vírus Emergência de Saúde Pública de Importância Internacional (ESPII) após aumento de casos de microcefalia no Brasil." Por que a relação entre zika e microcefalia gerou preocupação mundial?',
      options: [
        { text: 'Porque o vírus cruza a placenta e afeta o desenvolvimento cerebral do feto irreversivelmente', correct: true  },
        { text: 'Porque adultos com zika desenvolveram microcefalia em alguns casos',                            correct: false },
        { text: 'Porque a microcefalia causada pelo zika é tratável com medicamentos antivirais',               correct: false },
        { text: 'Porque o zika causou epidemia de microcefalia em todos os países do mundo',                    correct: false }
      ],
      explanation: 'O zika é neurotrópico — atravessa a placenta e interfere na neurogenese fetal, especialmente no 1º trimestre.'
    },
    {
      prompt: '📖 SITUAÇÃO: Uma cidade do Nordeste tem 60% de esgoto sem tratamento. Quais doenças terão maior prevalência comparada a uma cidade com 95% de esgoto tratado?',
      options: [
        { text: 'Cólera, febre tifóide, hepatite A e doenças diarreicas',  correct: true  },
        { text: 'Dengue, zika e chikungunya',                               correct: false },
        { text: 'Tuberculose e sarampo',                                    correct: false },
        { text: 'Tétano e hanseníase',                                      correct: false }
      ],
      explanation: 'Esgoto não tratado contamina água — ciclo fecal-oral. As doenças de transmissão fecal-oral explodem sem saneamento.'
    },
    {
      prompt: '📖 ANÁLISE: "Após campanha de vacinação contra sarampo, a incidência da doença caiu 99%." Qual conceito explica esse resultado?',
      options: [
        { text: 'Imunidade de rebanho — alta cobertura vacinal interrompeu as cadeias de transmissão',  correct: true  },
        { text: 'O vírus mutou espontaneamente e perdeu virulência',                                     correct: false },
        { text: 'A campanha distribuiu antibióticos que curaram os doentes',                            correct: false },
        { text: 'O vírus foi erradicado do ambiente por inseticidas',                                   correct: false }
      ],
      explanation: 'Com cobertura >95%, cada doente não encontra suscetíveis — R efetivo cai abaixo de 1 e a doença some.'
    },
    {
      prompt: '📖 SITUAÇÃO: Uma criança pisou descalça em uma fossa durante uma enchente e 5 dias depois tem febre, dor muscular nas panturrilhas e icterícia. O diagnóstico mais provável é:',
      options: [
        { text: 'Leptospirose — Leptospira entra pela pele, dor nas panturrilhas é sinal clássico',  correct: true  },
        { text: 'Cólera — ingestão de água contaminada causa diarreia',                              correct: false },
        { text: 'Dengue — febre alta com dor muscular generalizada',                                 correct: false },
        { text: 'Hepatite A — icterícia após contato com fezes',                                     correct: false }
      ],
      explanation: 'Tríade: enchente + pele exposta + panturrilha dolorosa + icterícia = leptospirose (Síndrome de Weil em evolução).'
    },
    {
      prompt: '📖 COMPARAÇÃO: Um médico precisa verificar se um paciente já teve COVID-19 há 6 meses. Qual exame solicitar?',
      options: [
        { text: 'Sorologia — detecta IgG (anticorpos de infecção passada)',  correct: true  },
        { text: 'PCR — detecta o RNA viral ativo',                           correct: false },
        { text: 'Hemograma — linfócitos elevados indicam infecção passada', correct: false },
        { text: 'Teste rápido de antígeno — detecta proteínas virais',      correct: false }
      ],
      explanation: 'Após meses, apenas IgG persiste. PCR e teste de antígeno só detectam infecção ativa (fase aguda).'
    },
    {
      prompt: '📖 FAKE NEWS: "A vacina BCG causa tuberculose em crianças." Essa afirmação é:',
      options: [
        { text: 'Falsa — BCG usa cepa atenuada de M. bovis que não causa tuberculose em imunocompetentes', correct: true  },
        { text: 'Verdadeira — a BCG pode causar TB miliar em qualquer criança',                            correct: false },
        { text: 'Parcialmente verdadeira — causa TB em 1% dos vacinados',                                 correct: false },
        { text: 'Verdadeira apenas para crianças prematuras',                                             correct: false }
      ],
      explanation: 'BCG usa Mycobacterium bovis atenuado. Em crianças imunocompetentes, não causa TB — apenas uma reação local esperada.'
    },
    {
      prompt: '📖 SITUAÇÃO: Um animal morto de raiva foi encontrado em um bairro. Qual medida de saúde pública é PRIORITÁRIA?',
      options: [
        { text: 'Investigar expostos ao animal e iniciar PPE antirrábica nos que tiveram contato', correct: true  },
        { text: 'Vacinar toda a população do bairro imediatamente',                                correct: false },
        { text: 'Aplicar inseticidas em todo o bairro para eliminar vetores',                     correct: false },
        { text: 'Fechar as escolas do bairro por 30 dias',                                        correct: false }
      ],
      explanation: 'Raiva: identificar quem teve contato com o animal + iniciar PPE nos expostos. Vacinação em massa não é indicada.'
    },
    {
      prompt: '📖 ANÁLISE: O número de casos de poliomielite caiu de 350.000/ano (1988) para menos de 100 casos hoje. Qual fator foi MAIS decisivo?',
      options: [
        { text: 'Programa Global de Erradicação da Poliomielite — vacinação oral em massa em todo o mundo', correct: true  },
        { text: 'O vírus sofreu mutação natural que o tornou inofensivo',                                   correct: false },
        { text: 'Antibióticos modernos que curam a infecção antes da paralisia',                           correct: false },
        { text: 'Melhora do saneamento nos países em desenvolvimento',                                     correct: false }
      ],
      explanation: 'O GPEI (Global Polio Eradication Initiative) com vacina oral reduziu 99,9% dos casos desde 1988 — conquista histórica.'
    },
    {
      prompt: '📖 TEXTO: "Uma pessoa vacinada contra dengue (vacina CYD-TDV, Dengvaxia) e soronegativa (nunca teve dengue) teve maior risco de dengue grave na primeira infecção." O que esse dado indica?',
      options: [
        { text: 'A vacina deve ser usada apenas em soropositivos — quem já teve dengue naturalmente',  correct: true  },
        { text: 'A vacina da dengue é ineficaz e deve ser retirada do mercado',                        correct: false },
        { text: 'Todos os soropositivos também têm maior risco com a vacina',                          correct: false },
        { text: 'A vacina só funciona em adultos acima de 30 anos',                                   correct: false }
      ],
      explanation: 'A CYD-TDV funciona como uma "infecção primária simulada" — em soropositivos é reforço; em soronegativos pode aumentar risco de dengue grave numa infecção real posterior.'
    },
    {
      prompt: '📖 QUESTÃO FINAL — INTEGRAÇÃO TOTAL: Qual conjunto de medidas preventivas abrange o MAIOR número de doenças transmissíveis simultaneamente?',
      options: [
        { text: 'Saneamento básico + vacinação + controle de vetores + higiene pessoal', correct: true  },
        { text: 'Antibióticos preventivos para toda a população',                         correct: false },
        { text: 'Isolamento social permanente como na pandemia de COVID-19',             correct: false },
        { text: 'Uso de repelente DEET diariamente por toda a população',               correct: false }
      ],
      explanation: 'Saneamento (cólera, febre tifóide...) + vacinas (sarampo, polio...) + controle de vetores (dengue...) + higiene (diarreias...) = cobertura máxima e sustentável.'
    }
  ],

  adaptiveReview: [
    {
      prompt: 'ANÁLISE AVANÇADA: Por que países com alto IDH (Índice de Desenvolvimento Humano) têm menor incidência de doenças infecciosas mesmo sem vacinas para todas elas?',
      options: [
        { text: 'Melhor saneamento, higiene, nutrição e acesso à saúde reduzem tanto a exposição quanto a suscetibilidade', correct: true  },
        { text: 'Populações de países ricos têm genética mais resistente a infecções',                                      correct: false },
        { text: 'Esses países vacinaram 100% da população para todas as doenças possíveis',                                correct: false },
        { text: 'O clima frio dos países ricos elimina naturalmente os patógenos',                                         correct: false }
      ],
      explanation: 'IDH alto = menos pobreza = melhor nutrição (resposta imune mais forte) + saneamento (menos exposição) + acesso a tratamento precoce.'
    },
    {
      prompt: 'ANÁLISE AVANÇADA: Um surto de doença desconhecida aparece com as seguintes características: R0 = 4, transmissão por gotículas, período de incubação 5-14 dias, 30% de assintomáticos. Qual estratégia de controle é mais eficaz?',
      options: [
        { text: 'Vacinação rápida + uso de máscaras + isolamento de casos + rastreamento de contatos', correct: true  },
        { text: 'Antibióticos preventivos para todos os expostos',                                      correct: false },
        { text: 'Controle de vetores (mosquiteiros e inseticidas)',                                    correct: false },
        { text: 'Tratamento de água e saneamento de emergência',                                       correct: false }
      ],
      explanation: 'Transmissão respiratória + assintomáticos (que transmitem sem saber) + R0=4: máscaras + vacinação + isolamento + rastreamento quebram a cadeia.'
    }
  ],

  rewards: {
    xp:    600,
    gems:  60,
    badge: '🎓 Mestre das Doenças Transmissíveis'
  },

  completionMessage: '🎓 CAPÍTULO CONCLUÍDO! Você é o MESTRE das Doenças Transmissíveis! Com esse conhecimento, você pode proteger a si mesmo e sua comunidade!',
  nextStage: null
};

window.STAGE_FINAL = STAGE_FINAL;
