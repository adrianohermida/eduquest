/**
 * RESUMOS DO CAPÍTULO 7
 */

const CHAPTER_SUMMARIES = {
    stage1: {
        title: "Introdução aos Vírus",
        content: "Vírus são parasitas intracelulares obrigatórios. Eles precisam de uma célula viva para se reproduzir.",
        flashcards: [
            { q: "O que é um vírus?", a: "Parasita intracelular obrigatório" },
            { q: "Vírus são seres vivos?", a: "Discutível, mas agem como parasitas" }
        ]
    },
    stage2: {
        title: "Bactérias e Doenças",
        content: "Bactérias são unicelulares e podem ser úteis ou prejudiciais. Antibióticos matam bactérias, não vírus.",
        flashcards: [
            { q: "Antibiótico mata vírus?", a: "NÃO! Apenas bactérias." }
        ]
    },
    stage3: {
        title: "Vacinas e Soros",
        content: "Vacinas previnem (ensinam o corpo). Soros curam (atacam diretamente a toxina).",
        flashcards: [
            { q: "Picada de cobra usa?", a: "Soro antiofídico" },
            { q: "Gripe usa?", a: "Vacina (prevenção)" }
        ]
    },
    stage4: {
        title: "Epidemias e Pandemias",
        content: "Epidemia: surto local. Pandemia: espalhamento mundial. Endemia: constante em uma região.",
        flashcards: [
            { q: "COVID-19 foi o quê?", a: "Pandemia" }
        ]
    },
    stage5: {
        title: "Simulado Final",
        content: "Hora de testar todo o conhecimento adquirido nesta aventura!",
        flashcards: []
    }
};

if (typeof window !== 'undefined') {
    window.CHAPTER_SUMMARIES = CHAPTER_SUMMARIES;
    
    // Se o DataLoader existir (injetado pelo app), registra aqui
    if (window.DataLoader && typeof window.DataLoader.registerChapter === 'function') {
        window.DataLoader.registerChapter('cap7_doencas', { summaries: CHAPTER_SUMMARIES });
    }
}