/**
 * BANCO DE QUESTÕES GLOBAL
 * Fallback para garantir que o app funcione mesmo se os stages falharem
 */

const QUESTIONS_BANK = [
    {
        id: 1,
        question: "Qual a principal função das vacinas?",
        options: ["Curar doenças existentes", "Prevenir doenças estimulando a imunidade", "Substituir antibióticos", "Causar febre alta"],
        correct: 1,
        explanation: "As vacinas ensinam o sistema imunológico a reconhecer e combater vírus e bactérias antes que causem doenças."
    },
    {
        id: 2,
        question: "O que é um vetor de doença?",
        options: ["Um remédio forte", "Um organismo que transmite patógenos", "Um tipo de vírus", "Uma vacina"],
        correct: 1,
        explanation: "Vetores são organismos vivos (como mosquitos) que transmitem agentes infecciosos de um hospedeiro para outro."
    },
    {
        id: 3,
        question: "Qual a diferença entre soro e vacina?",
        options: ["Não há diferença", "Soro cura, vacina previne", "Vacina cura, soro previne", "Ambos curam"],
        correct: 1,
        explanation: "O soro contém anticorpos prontos para neutralizar toxinas (ação rápida/curativa). A vacina estimula a produção de anticorpos (ação lenta/preventiva)."
    }
];

// Garante acesso global
window.QUESTIONS_BANK = QUESTIONS_BANK;
console.log('✅ Banco de questões carregado');