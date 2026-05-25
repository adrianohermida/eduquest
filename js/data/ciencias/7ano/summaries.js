const SUMMARIES = {
  ciencias: {
    1: {
      title: "🛡️ Etapa 1: Imunidade e Vacinas",
      readTime: 45,
      content: [
        { icon: "🦠", title: "Defesas do Corpo", text: "Anticorpos são proteínas produzidas pelo sistema imune que atuam como soldados contra invasores. Quando um microrganismo entra no corpo, os anticorpos se ligam a ele e ajudam a destruí-lo." },
        { icon: "💉", title: "Vacina vs Soro", text: "💡 Vacina = PREVENÇÃO: estimula o corpo a produzir anticorpos. Proteção duradoura. 🧪 Soro = TRATAMENTO: contém anticorpos prontos. Ação rápida e temporária." },
        { icon: "🌍", title: "Epidemia, Endemia e Pandemia", text: "📈 Epidemia = aumento rápido de casos em uma região. 📍 Endemia = doença constante em determinada região. 🌐 Pandemia = doença espalhada pelo planeta inteiro (PAN = todos)." },
        { icon: "🧬", title: "Importância das Vacinas", text: "As vacinas evitam doenças, diminuem mortes, reduzem epidemias e protegem toda a população. Vacina NÃO causa a doença, apenas estimula a defesa natural do corpo." }
      ],
      flashcards: [
        { q: "O que são anticorpos?", a: "Proteínas produzidas pelo sistema imune para combater microrganismos invasores." },
        { q: "Qual a diferença entre vacina e soro?", a: "Vacina previne (estimula produção de anticorpos). Soro trata (fornece anticorpos prontos)." },
        { q: "O que define uma pandemia?", a: "Doença espalhada pelo planeta inteiro, afetando múltiplos países simultaneamente." },
        { q: "Por que vacinas não causam a doença?", a: "Elas usam microrganismos enfraquecidos ou partes deles, incapazes de causar infecção." },
        { q: "O que é imunidade de rebanho?", a: "Quando a maioria da população está imune, protegendo indiretamente quem não pode se vacinar." }
      ],
      miniReview: [
        { q: "Vacina serve para prevenir ou tratar?", a: "Prevenir" },
        { q: "Soro contém anticorpos prontos ou estimula produção?", a: "Contém anticorpos prontos" },
        { q: "PANdemia significa doença em quantos lugares?", a: "No planeta inteiro" }
      ]
    },
    2: {
      title: "🦠 Etapa 2: Doenças Virais",
      readTime: 60,
      content: [
        { icon: "🦟", title: "Transmissão Vetorial", text: "Aedes aegypti transmite Dengue, Zika e Chikungunya. Ele é VETOR, não a causa. Eliminar água parada (pneus, garrafas, vasos) é a principal prevenção." },
        { icon: "🌬️", title: "Transmissão Respiratória", text: "Gripe, Covid-19, Sarampo, Caxumba: espalham-se por gotículas/aerossóis ao tossir, espirrar ou falar. Máscara, distância e ventilação reduzem riscos." },
        { icon: "💧", title: "Outras Transmissões", text: "Poliomielite: água/alimentos contaminados. Raiva: mordida/saliva de animais. Febre Amarela: mosquitos silvestres/urbanos. Macacos são VÍTIMAS, não transmissores." },
        { icon: "🧪", title: "Testes Diagnósticos", text: "PCR detecta material genético do vírus (infecção ativa). Sorologia detecta anticorpos (infecção passada ou vacinação)." }
      ],
      flashcards: [
        { q: "Qual o vetor da Dengue?", a: "Mosquito Aedes aegypti" },
        { q: "Zika e gravidez: qual o risco principal?", a: "Microcefalia e malformações neurológicas no bebê" },
        { q: "Como se previne a Raiva após mordida?", a: "Lavar ferida com água e sabão + procurar atendimento para vacina/soro" },
        { q: "O que significa 'hidrofobia' na raiva?", a: "Medo de água devido a espasmos na garganta ao tentar engolir" },
        { q: "Por que a vacina da gripe muda todo ano?", a: "O vírus da gripe sofre mutações frequentes (drift antigênico)" }
      ],
      miniReview: [
        { q: "Aedes aegypti transmite quais 3 doenças?", a: "Dengue, Zika e Chikungunya" },
        { q: "PCR detecta o quê na covid-19?", a: "Material genético do vírus" },
        { q: "Macacos transmitem febre amarela?", a: "Não, são vítimas/sentinels" }
      ]
    },
    3: {
      title: "🧫 Etapa 3: Doenças Bacterianas",
      readTime: 50,
      content: [
        { icon: "🐀", title: "Leptospirose", text: "Transmitida pela urina de ratos em água/lama contaminada. Comum em enchentes. Previna com saneamento, controle de roedores e evitar contato com água de alagamento." },
        { icon: "💧", title: "Cólera", text: "Água/alimentos contaminados. Sintoma: diarreia aquosa intensa → risco de desidratação. Previna com cloração, cozimento e higiene das mãos/vegetais." },
        { icon: "🫁", title: "Tuberculose & Tétano", text: "Tuberculose: gotículas respiratórias (vacina BCG). Tétano: ferimentos com solo/objetos contaminados (soro antitetânico + vacinação em dia)." },
        { icon: "🚽", title: "Saneamento Básico", text: "Água tratada + rede de esgoto + coleta de lixo = base da saúde pública. Previne cólera, leptospirose, diarreias e parasitoses. Investir R$1 em saneamento economiza ~R$9 em saúde." }
      ],
      flashcards: [
        { q: "Leptospirose + Enchente: qual a relação?", a: "Urina de ratos diluída na água de alagamento" },
        { q: "Principal risco da Cólera?", a: "Desidratação severa por diarreia intensa" },
        { q: "Como prevenir Tétano em ferimentos?", a: "Limpeza imediata + vacinação em dia + soro se necessário" },
        { q: "BCG protege contra qual doença?", a: "Tuberculose" },
        { q: "Por que saneamento previne tantas doenças?", a: "Interrompe ciclo fecal-oral e elimina criadouros de vetores" }
      ],
      miniReview: [
        { q: "Leptospirose é transmitida por quê?", a: "Urina de rato em água contaminada" },
        { q: "Cólera causa qual sintoma principal?", a: "Diarreia aquosa intensa" },
        { q: "Saneamento básico inclui quais 3 itens?", a: "Água tratada, esgoto e coleta de lixo" }
      ]
    },
    4: {
      title: "📝 Etapa 4: Revisão Final & Pegadinhas",
      readTime: 40,
      content: [
        { icon: "🤥", title: "Fake News na Saúde", text: "Sempre confira: fonte oficial (SUS/Fiocruz/OMS), data, autoria e consenso científico. Desconfie de 'curas milagrosas', medo excessivo ou falta de referências." },
        { icon: "🚫", title: "Mitos Frequentes", text: "Antibiótico NÃO mata vírus (só bactérias). Macacos NÃO transmitem febre amarela. Vacina NÃO causa autismo nem altera DNA. 'Post hoc ergo propter hoc' = falácia de correlação." },
        { icon: "🧼", title: "Prevenção Coletiva", text: "Lavar mãos, eliminar água parada, saneamento e vacinação em massa quebram cadeias de transmissão e protegem os vulneráveis (imunidade de rebanho)." }
      ],
      flashcards: [
        { q: "Antibiótico cura gripe?", a: "Não. Gripe é viral. Antibióticos só atuam contra bactérias." },
        { q: "Macacos transmitem febre amarela?", a: "Não. São hospedeiros/sentinels. Transmissão é por mosquito." },
        { q: "O que mais protege a população?", a: "Imunidade de rebanho + saneamento + higiene básica" },
        { q: "Como identificar fake news?", a: "Sem fonte confiável, promete cura milagrosa, usa medo/sensacionalismo" },
        { q: "O que significa 'post hoc ergo propter hoc'?", a: "Falácia: 'depois disso, logo causado por isso' - correlação não é causalidade" }
      ],
      miniReview: [
        { q: "Antibiótico funciona contra vírus?", a: "Não" },
        { q: "Qual a melhor forma de evitar fake news?", a: "Verificar fonte oficial/consenso científico" },
        { q: "O que quebra cadeias de transmissão?", a: "Higiene, saneamento e vacinação coletiva" }
      ]
    }
  }
};