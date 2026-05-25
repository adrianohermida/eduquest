/**
 * SUMMARIES - RESUMOS DO CAPÍTULO
 */

const CHAPTER_SUMMARIES = {
    intro: "Neste capítulo, você aprenderá sobre a diferença entre vírus e bactérias, como as vacinas funcionam e as principais doenças que afetaram a humanidade.",
    stages: {
        1: "Introdução aos microrganismos: O que são vírus e bactérias?",
        2: "O Sistema Imunológico: As defesas do nosso corpo.",
        3: "Vacinas e Sororos: Prevenção e tratamento.",
        4: "Epidemias e Pandemias: História e prevenção.",
        5: "Simulado Final: Teste seus conhecimentos!"
    },
    keyConcepts: [
        "Vírus são parasitas intracelulares obrigatórios",
        "Bactérias são seres unicelulares procariontes",
        "Vacinas estimulam a memória imunológica",
        "Higiene e saneamento previnem doenças"
    ]
};

if (typeof window.DataLoader !== 'undefined') {
    window.DataLoader.registerSummary('cap7_doencas', CHAPTER_SUMMARIES);
}