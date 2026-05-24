// summaries.js
const SUMMARIES = {
  ciencias: {
    1: {
      title: "🛡️ Etapa 1: Imunidade e Vacinas",
      content: [
        { icon: "🦠", title: "Defesas do Corpo", text: "Anticorpos são proteínas produzidas pelo sistema imune que atuam como soldados contra invasores." },
        { icon: "💉", title: "Vacina vs Soro", text: "💡 Vacina = PREVENÇÃO (estimula o corpo a produzir anticorpos). 🧪 Soro = TRATAMENTO (contém anticorpos prontos para ação rápida)." },
        { icon: "🌍", title: "Epidemia, Endemia e Pandemia", text: "📈 Epidemia = aumento rápido em uma região. 📍 Endemia = doença constante/local. 🌐 Pandemia = espalhada pelo planeta (PAN = todos)." }
      ],
      flashcards: [
        { q: "O que a vacina estimula?", a: "Produção natural e duradoura de anticorpos." },
        { q: "Quando o soro é indicado?", a: "Após contágio ou picada (ação imediata e temporária)." },
        { q: "O que define uma pandemia?", a: "Doença com transmissão ativa e global." }
      ]
    },
    2: {
      title: "🦠 Etapa 2: Doenças Virais",
      content: [
        { icon: "🦟", title: "Transmissão Vetorial", text: "Aedes aegypti transmite Dengue, Zika e Chikungunya. Ele é VETOR, não a causa. Eliminar água parada é a prevenção." },
        { icon: "🌬️", title: "Transmissão Respiratória", text: "Gripe, Covid-19, Sarampo, Caxumba: espalham-se por gotículas/aerossóis. Uso de máscara e ventilação reduzem riscos." },
        { icon: "💧", title: "Outras Transmissões", text: "Poliomielite: água/alimentos. Raiva: mordida/saliva. Febre Amarela: mosquitos silvestres/urbanos. Macacos são VÍTIMAS, não transmissores." }
      ],
      flashcards: [
        { q: "Qual o vetor da Dengue?", a: "Mosquito Aedes aegypti" },
        { q: "Zika e gravidez: qual o risco?", a: "Pode causar microcefalia e malformações neurológicas." },
        { q: "Como se previne a Raiva?", a: "Vacinação animal e soro antirrábico imediato após mordida." }
      ]
    },
    3: {
      title: "🧫 Etapa 3: Doenças Bacterianas",
      content: [
        { icon: "🐀", title: "Leptospirose", text: "Transmitida pela urina de ratos em água/lama (enchentes). Previna com saneamento, controle de roedores e evitar contato com água contaminada." },
        { icon: "💧", title: "Cólera", text: "Água/alimentos contaminados. Sintoma principal: diarreia aquosa intensa → risco de desidratação. Higiene e cloração previnem." },
        { icon: "🫁", title: "Tuberculose & Tétano", text: "Tuberculose: gotículas (vacina BCG). Tétano: ferimentos contaminados com solo (soro antitetânico + vacinação)." },
        { icon: "🚽", title: "Saneamento Básico", text: "Água tratada + rede de esgoto + coleta de lixo = base da saúde pública. Previne cólera, leptospirose, diarreias e parasitoses." }
      ],
      flashcards: [
        { q: "Leptospirose + Enchente?", a: "Urina de roedores diluída em água parada." },
        { q: "Principal risco da Cólera?", a: "Desidratação severa por diarreia." },
        { q: "Como prevenir Tétano?", a: "Vacinação em dia e limpeza imediata de ferimentos." }
      ]
    },
    4: {
      title: "📝 Etapa 4: Revisão Final & Pegadinhas",
      content: [
        { icon: "🤥", title: "Fake News na Saúde", text: "Sempre confira: fonte oficial (SUS/Fiocruz/OMS), data, autoria e consenso científico. Desconfie de 'curas milagrosas' ou medo excessivo." },
        { icon: "🚫", title: "Mitos Frequentes", text: "Antibiótico NÃO mata vírus. Macacos NÃO transmitem febre amarela. Vacina NÃO causa autismo nem altera DNA." },
        { icon: "🧼", title: "Prevenção Coletiva", text: "Lavar mãos, eliminar água parada, saneamento e vacinação em massa quebram cadeias de transmissão e protegem os vulneráveis." }
      ],
      flashcards: [
        { q: "Antibiótico cura gripe?", a: "Não. Gripe é viral. Antibióticos só atuam contra bactérias." },
        { q: "Macacos transmitem febre amarela?", a: "Não. São hospedeiros/sentinelas. A transmissão é por mosquito." },
        { q: "O que mais protege a população?", a: "Imunidade de rebanho + saneamento + higiene básica." }
      ]
    }
  },

  matematica: {
    1: {
      title: "➗ Etapa 1: Operações, Frações e Porcentagem",
      content: [
        { icon: "🔢", title: "Operações Fundamentais", text: "Adição/subtração exigem denominadores iguais. Multiplicação: numerador×numerador, denominador×denominador." },
        { icon: "📊", title: "Porcentagem", text: "% = parte de 100. Para calcular: (valor × %)/100. Útil para descontos, acréscimos e estatísticas." }
      ],
      flashcards: [
        { q: "Como somar 1/3 + 1/4?", a: "MMC(3,4)=12 → 4/12 + 3/12 = 7/12" },
        { q: "Quanto é 25% de 80?", a: "20 (80 × 0,25)" }
      ]
    }
  },

  portugues: {
    1: {
      title: "📖 Etapa 1: Interpretação, Concordância e Coesão",
      content: [
        { icon: "🔍", title: "Leitura Crítica", text: "Identifique ideia principal, argumentos, intenção do autor e diferença entre fato e opinião." },
        { icon: "🔗", title: "Concordância e Coesão", text: "Verbo concorda com sujeito. Pronomes e conjunções mantêm o texto fluido e lógico." }
      ],
      flashcards: [
        { q: "O que é sujeito na oração?", a: "Termo sobre o qual se faz uma declaração." },
        { q: "Quando usar 'mais' vs 'mas'?", a: "Mais = quantidade. Mas = oposição (porém)." }
      ]
    }
  }
};

// Exportação compatível com navegadores modernos
if (typeof module !== 'undefined') module.exports = SUMMARIES;