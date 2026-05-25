const STAGE_02_DATA = {
  title: "Doenças Virais",
  questions: [
    {
      id: 5,
      type: "binary",
      prompt: "O mosquito Aedes aegypti é o AGENTE CAUSADOR da dengue.",
      correct: false,
      explanation: "Ele é o VETOR. O agente causador é o VÍRUS da dengue."
    },
    {
      id: 6,
      type: "fill",
      prompt: "A Zika pode causar ______ em bebês durante a gravidez.",
      options: [
        { text: "Microcefalia", correct: true },
        { text: "Diabetes", correct: false },
        { text: "Paralisia", correct: false }
      ],
      explanation: "A Zika compromete o desenvolvimento cerebral do feto."
    },
    {
      id: 7,
      type: "select",
      prompt: "Qual teste detecta o material genético do vírus (infecção ativa)?",
      options: [
        { text: "Sorologia", correct: false },
        { text: "PCR", correct: true },
        { text: "Raio-X", correct: false }
      ],
      explanation: "O PCR detecta o RNA do vírus diretamente."
    }
  ]
};