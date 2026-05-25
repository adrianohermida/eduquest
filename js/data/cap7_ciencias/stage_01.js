const STAGE_01_DATA = {
  title: "Imunidade e Vacinas",
  questions: [
    {
      id: 1,
      type: "select",
      prompt: "O que são anticorpos?",
      options: [
        { text: "Proteínas de defesa", correct: true },
        { text: "Vírus enfraquecidos", correct: false },
        { text: "Bactérias boas", correct: false },
        { text: "Minerais essenciais", correct: false }
      ],
      explanation: "Anticorpos são proteínas do sistema imune que combatem invasores."
    },
    {
      id: 2,
      type: "binary",
      prompt: "A vacina serve para TRATAR doenças agudas?",
      correct: false, // False porque é prevenir
      explanation: "Vacinas são para PREVENIR. O Soro é para tratar."
    },
    {
      id: 3,
      type: "fill",
      prompt: "Complete: O soro terapêutico contém ______.",
      options: [
        { text: "Anticorpos prontos", correct: true },
        { text: "Antibióticos", correct: false },
        { text: "Vírus vivos", correct: false }
      ],
      explanation: "O soro fornece anticorpos prontos para ação imediata."
    },
    {
      id: 4,
      type: "select",
      prompt: "Qual termo define o aumento rápido de casos em uma região?",
      options: [
        { text: "Pandemia", correct: false },
        { text: "Endemia", correct: false },
        { text: "Epidemia", correct: true },
        { text: "Imunidade", correct: false }
      ],
      explanation: "Epidemia = surto localizado. Pandemia = global."
    }
  ]
};