const CHAPTERS = {
  ciencias: {
    cap7: {
      id: 'cap7',
      title: 'Doenças Transmissíveis',
      icon: '🦠',
      stages: CONFIG.stages,
      totalQuestions: 150,
      summary: {
        intro: 'O segredo para ir bem na prova é entender a lógica: Agente → Transmissão → Sintomas → Prevenção',
        sections: [
          {
            title: 'Agentes Causadores',
            items: [
              { icon: '🦠', title: 'Vírus', text: 'gripe, covid-19, dengue – precisam de célula hospedeira' },
              { icon: '🧫', title: 'Bactérias', text: 'tétano, cólera – tratadas com antibióticos' },
              { icon: '🔬', title: 'Protozoários', text: 'malária, doença de Chagas – transmitidos por vetores' },
              { icon: '🍄', title: 'Fungos', text: 'micoses – prosperam em calor e umidade' }
            ]
          },
          {
            title: 'Defesas do Corpo',
            items: [
              { icon: '🛡️', title: 'Anticorpos', text: 'Proteínas "soldados" produzidas pelo sistema imune' },
              { icon: '🧠', title: 'Memória Imunológica', text: 'Após contato, o corpo "lembra" e reage mais rápido' }
            ]
          },
          {
            title: 'Epidemia vs Endemia vs Pandemia',
            table: [
              { term: 'Epidemia', meaning: 'Aumento rápido em uma região' },
              { term: 'Endemia', meaning: 'Doença constante na região (ex: dengue na Amazônia)' },
              { term: 'Pandemia', meaning: 'Espalhada pelo mundo (PAN = planeta) 🌍' }
            ]
          },
          {
            title: '💉 Vacina vs 🧪 Soro',
            macetes: [
              { title: 'Vacina previne; soro socorre', content: 'Vacina = antes (estimula anticorpos). Soro = depois (anticorpos prontos)' },
              { title: 'Duração', content: 'Vacina = proteção duradoura. Soro = ação rápida e temporária' }
            ]
          },
          {
            title: 'Doenças Virais Principais',
            items: [
              { icon: '🦟', title: 'Dengue/Zika/Chikungunya', text: 'Vetor: Aedes aegypti. Prevenção: eliminar água parada' },
              { icon: '🌬️', title: 'Covid-19/Gripe', text: 'Gotículas respiratórias. Prevenção: máscara, vacina, distância' },
              { icon: '💉', title: 'Poliomielite', text: 'Água/alimentos contaminados. Prevenção: vacina' },
              { icon: '🐕', title: 'Raiva', text: 'Mordida de animais. Prevenção: vacina animal + soro antirrábico' }
            ]
          },
          {
            title: 'Doenças Bacterianas Principais',
            items: [
              { icon: '🐀', title: 'Leptospirose', text: 'Urina de rato em água. Comum em enchentes. Prevenção: saneamento' },
              { icon: '💧', title: 'Cólera', text: 'Água/alimentos contaminados. Sintoma: diarreia intensa' },
              { icon: '🫁', title: 'Tuberculose', text: 'Gotículas respiratórias. Prevenção: vacina BCG' },
              { icon: '🩹', title: 'Tétano', text: 'Ferimentos com solo. Prevenção: vacinação + limpeza' }
            ]
          },
          {
            title: '🚽 Saneamento Básico',
            items: [
              { icon: '💧', title: 'Água tratada', text: 'Previne cólera, diarreias, hepatite A' },
              { icon: '🗑️', title: 'Coleta de lixo', text: 'Reduz ratos, vetores e criadouros' },
              { icon: '🚰', title: 'Rede de esgoto', text: 'Interrompe ciclo fecal-oral de transmissão' },
              { icon: '💰', title: 'Custo-benefício', text: 'R$1 em saneamento economiza ~R$9 em saúde' }
            ]
          }
        ],
        macetesFinais: [
          'Aedes = água 🦟💧',
          'Lepto = lama + rato 🐀',
          'BCG = tuberculose 🫁',
          'Pandemia = planeta 🌍',
          'Vacina previne; soro socorre 💉🧪'
        ],
        prioridades: [
          'Diferença vacina vs soro',
          'Epidemia/endemia/pandemia',
          'Dengue e Aedes aegypti',
          'Covid-19 e prevenção',
          'Doenças virais x bacterianas',
          'Importância da vacinação',
          'Saneamento básico',
          'Leptospirose e enchentes'
        ]
      }
    }
  }
};
