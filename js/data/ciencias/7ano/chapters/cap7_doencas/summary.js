const CAP7_SUMMARY = {
  introduction: {
    title: ' Introdução ao Capítulo',
    content: `O segredo para ir bem na prova é entender a lógica do capítulo, e não apenas decorar nomes de doenças.
    
Pense no seguinte esquema:
Agente causador → Forma de transmissão → Sintomas → Prevenção`,
    keyPoints: [
      'Doenças são causadas por microrganismos',
      'Cada doença tem forma específica de transmissão',
      'Prevenção é sempre melhor que tratamento'
    ]
  },
  
  sections: [
    {
      id: 'agentes',
      title: '1. Agentes Causadores',
      icon: '🦠',
      content: `São doenças causadas por microrganismos que podem passar de um ser vivo para outro.

Os principais agentes causadores são:

VÍRUS: gripe, covid-19, dengue
- São os menores
- Precisam de células vivas para se reproduzir
- Não são afetados por antibióticos

BACTÉRIAS: tétano, cólera, tuberculose
- São maiores que vírus
- Podem viver sozinhas
- Tratadas com antibióticos

PROTOZOÁRIOS: malária, doença de Chagas
- Seres unicelulares complexos
- Transmitidos por vetores

FUNGO: micoses
- Vivem em ambientes úmidos
- Causam infecções de pele`,
      table: {
        headers: ['Agente', 'Tamanho', 'Exemplos', 'Tratamento'],
        rows: [
          ['Vírus', 'Menor (0.02-0.3 μm)', 'Gripe, Dengue, Covid', 'Antivirais/Vacinas'],
          ['Bactéria', 'Médio (1-5 μm)', 'Tétano, Cólera', 'Antibióticos'],
          ['Protozoário', 'Grande (10-50 μm)', 'Malária, Chagas', 'Antiprotozoários'],
          ['Fungo', 'Variável', 'Micoses', 'Antifúngicos']
        ]
      }
    },
    
    {
      id: 'defesas',
      title: '2. Defesas do Organismo',
      icon: '🛡️',
      content: `O corpo possui mecanismos de defesa contra invasores.

ANTICORPOS:
São proteínas produzidas pelo organismo para combater microrganismos.

Fácil de lembrar:
Anticorpo = "soldado" do corpo.

Quando uma pessoa entra em contato com um microrganismo:
• O corpo produz anticorpos
• Depois disso, pode ficar imune
• O corpo "lembra" do invasor para próxima vez`,
      flashcards: [
        { q: 'O que são anticorpos?', a: 'Proteínas produzidas pelo sistema imune para combater invasores' },
        { q: 'Como o corpo fica imune?', a: 'Produz anticorpos e cria memória imunológica' }
      ]
    },
    
    {
      id: 'epidemia',
      title: '3. Epidemia, Endemia e Pandemia',
      icon: '🌍',
      content: `Essa parte costuma cair muito em prova.

EPIDEMIA:
Aumento rápido de casos em uma região
Exemplo: Surto de dengue em uma cidade

ENDEMIA:
Doença constante em determinada região
Exemplo: Dengue na Amazônia (sempre existe)

PANDEMIA:
Doença espalhada pelo mundo
Exemplo: Covid-19 (atingiu todos os continentes)

MACETE:
PANdemia = PLANETA inteiro`,
      table: {
        headers: ['Termo', 'Significado', 'Exemplo'],
        rows: [
          ['Epidemia', 'Aumento rápido em uma região', 'Surto de dengue'],
          ['Endemia', 'Doença constante na região', 'Dengue na Amazônia'],
          ['Pandemia', 'Espalhada pelo mundo', 'Covid-19']
        ]
      }
    },
    
    {
      id: 'vacina_soro',
      title: '4. Vacina x Soro',
      icon: '💉',
      content: `VACINA:
• PREVENÇÃO (antes de adoecer)
• Estimula o corpo a produzir anticorpos
• Proteção mais duradoura
• Exemplo: Vacina da gripe

SORO:
• TRATAMENTO (depois de adoecer)
• Já contém anticorpos prontos
• Ação rápida e temporária
• Exemplo: Soro antiofídico (picada de cobra)

MACETE:
"Vacina previne; soro socorre"
Vacina → ANTES
Soro → DEPOIS`,
      comparison: {
        left: {
          title: 'VACINA',
          items: ['Prevenção', 'Produz anticorpos', 'Ação duradoura', 'Ex: Gripe']
        },
        right: {
          title: 'SORO',
          items: ['Tratamento', 'Anticorpos prontos', 'Ação rápida', 'Ex: Picada de cobra']
        }
      }
    },
    
    {
      id: 'doencas_virais',
      title: '5. Doenças Virais Principais',
      icon: '🦟',
      subsections: [
        {
          title: 'Gripe e Resfriado',
          content: 'Transmissão: tosse, espirro, gotículas no ar\nPrevenção: lavar mãos, vacina, usar lenço'
        },
        {
          title: 'Covid-19',
          content: 'Causada por: SARS-CoV-2\nTransmissão: gotículas respiratórias, aerossóis\nPrevenção: máscara, vacina, distância, ventilação\nTestes: PCR (material genético), Sorologia (anticorpos)'
        },
        {
          title: 'Dengue',
          content: 'Vetor: Aedes aegypti (NÃO é o causador, só transmite)\nSintomas: febre alta, dores, manchas vermelhas\nPrevenção: eliminar água parada\nCriadouros: pneus, garrafas, vasos'
        },
        {
          title: 'Zika e Chikungunya',
          content: 'Também transmitidas pelo Aedes aegypti\nZika: pode causar microcefalia em bebês\nChikungunya: fortes dores nas articulações'
        },
        {
          title: 'Febre Amarela',
          content: 'Transmissão: mosquitos silvestres\nSintomas: febre, vômitos, lesões no fígado\nPrevenção: vacina (dose única vitalícia)\nIMPORTANTE: Macacos são VÍTIMAS, não transmitem!'
        }
      ]
    },
    
    {
      id: 'doencas_bacterianas',
      title: '6. Doenças Bacterianas',
      icon: '🧫',
      subsections: [
        {
          title: 'Leptospirose',
          content: 'Transmissão: urina de rato em água contaminada\nComum em: enchentes\nPrevenção: saneamento, evitar água contaminada'
        },
        {
          title: 'Cólera',
          content: 'Transmissão: água e alimentos contaminados\nSintoma: diarreia intensa (risco de desidratação)\nPrevenção: higiene, água tratada'
        },
        {
          title: 'Tuberculose',
          content: 'Afeta: pulmões\nSintoma: tosse persistente\nPrevenção: vacina BCG'
        },
        {
          title: 'Tétano',
          content: 'Entrada: ferimentos contaminados\nSintomas: contrações musculares fortes\nPrevenção: vacinação'
        }
      ]
    },
    
    {
      id: 'saneamento',
      title: '7. Saneamento Básico',
      icon: '🚽',
      content: `Um dos temas mais importantes do capítulo.

INCLUI:
• Água tratada
• Coleta de lixo
• Rede de esgoto

EVITA:
• Cólera
• Leptospirose
• Diarreias
• Várias infecções

CUSTO-BENEFÍCIO:
Investir R$1 em saneamento economiza ~R$9 em saúde!`,
      keyPoints: [
        'Saneamento é direito humano',
        'Previne múltiplas doenças',
        'Melhora qualidade de vida'
      ]
    }
  ],
  
  macetes: [
    { text: '"Vacina previne; soro socorre"', icon: '💡' },
    { text: '"Aedes = água parada"', icon: '🦟' },
    { text: '"Leptospirose = lama + rato"', icon: '🐀' },
    { text: '"BCG = tuberculose"', icon: '💉' },
    { text: '"Pandemia = planeta inteiro"', icon: '🌍' }
  ],
  
  prioridades: [
    'Diferença entre vacina e soro',
    'Epidemia, endemia e pandemia',
    'Dengue e Aedes aegypti',
    'Covid-19 e prevenção',
    'Doenças virais x bacterianas',
    'Importância da vacinação',
    'Saneamento básico',
    'Leptospirose e enchentes'
  ]
};