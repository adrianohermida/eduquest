const STAGE_SUMMARIES = {
  1: {
    title: "🛡️ Etapa 1: Imunidade e Vacinas",
    content: [
      { icon: "🦠", title: "Defesas do Corpo", text: "Anticorpos são proteínas que atuam como soldados contra invasores." },
      { icon: "💉", title: "Vacina vs Soro", text: "Vacina = PREVENÇÃO (estimula anticorpos). Soro = TRATAMENTO (anticorpos prontos)." },
      { icon: "🌍", title: "Classificações", text: "Epidemia = surto local. Endemia = constante na região. Pandemia = espalhada globalmente." }
    ],
    flashcards: [
      { q: "O que a vacina estimula?", a: "Produção natural de anticorpos." },
      { q: "Quando o soro é usado?", a: "Após contágio ou picada (ação rápida)." },
      { q: "O que define uma pandemia?", a: "Doença espalhada pelo planeta inteiro." }
    ]
  },
  2: {
    title: "🦠 Etapa 2: Doenças Virais",
    content: [
      { icon: "🦟", title: "Transmissão Vetorial", text: "Aedes aegypti transmite Dengue, Zika, Chikungunya. Ele é VETOR, não a causa." },
      { icon: "🌬️", title: "Transmissão Respiratória", text: "Gripe, Covid-19, Sarampo, Caxumba: gotículas no ar ou contato próximo." },
      { icon: "💧", title: "Outros Vírus", text: "Poliomielite: água/alimentos. Raiva: mordida. Febre Amarela: mosquito silvestre/urbano." }
    ],
    flashcards: [
      { q: "Vetor da Dengue?", a: "Mosquito Aedes aegypti" },
      { q: "Zika e gravidez?", a: "Pode causar microcefalia no bebê." },
      { q: "Raiva se pega por?", a: "Mordida/saliva de animais infectados." }
    ]
  },
  3: {
    title: "🧫 Etapa 3: Doenças Bacterianas",
    content: [
      { icon: "🐀", title: "Leptospirose", text: "Transmitida pela urina de ratos em enchentes/lama. Risco de falência." },
      { icon: "💧", title: "Cólera", text: "Água/alimentos contaminados. Sintoma principal: diarreia intensa. Risco de desidratação." },
      { icon: "🫁", title: "Tuberculose & Tétano", text: "Tuberculose: gotículas (vacina BCG). Tétano: ferimentos contaminados (soro antitetânico)." },
      { icon: "🚽", title: "Saneamento Básico", text: "Água tratada + esgoto + lixo coletado = prevenção massiva de bactérias e parasitas." }
    ],
    flashcards: [
      { q: "Leptospirose + Enchente?", a: "Urina de rato na água contaminada." },
      { q: "Principal sintoma da Cólera?", a: "Diarreia intensa e desidratação." },
      { q: "Como prevenir Tétano?", a: "Vacinação e limpeza de ferimentos." }
    ]
  },
  4: {
    title: "📝 Etapa 4: Revisão Final & Pegadinhas",
    content: [
      { icon: "🤥", title: "Fake News na Saúde", text: "Sempre verifique: fonte confiável (SUS/Fiocruz/OMS), consenso científico, data." },
      { icon: "🚫", title: "Mitocomuns", text: "Antibiótico NÃO mata vírus. Macacos NÃO transmitem febre amarela. Vacina NÃO causa autismo." },
      { icon: "🧼", title: "Prevenção Coletiva", text: "Lavar mãos, eliminar água parada, saneamento e vacinação em massa quebram cadeias de transmissão." }
    ],
    flashcards: [
      { q: "Antibiótico funciona contra gripe?", a: "Não. Gripe é viral. Antibióticos são para bactérias." },
      { q: "Macacos transmitem febre amarela?", a: "Não. Eles são vítimas/sentinelas da doença." },
      { q: "O que quebra cadeias de transmissão?", a: "Higiene, saneamento e vacinação coletiva." }
    ]
  }
};