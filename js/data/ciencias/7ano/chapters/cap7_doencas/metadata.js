/**
 * METADATA - DADOS DO CAPÍTULO
 * Sem exports, apenas variável global
 */

const CHAPTER_METADATA = {
    id: 'cap7_doencas',
    title: 'Doenças e Vírus',
    subject: 'ciencias',
    grade: '7ano',
    description: 'Explore o mundo microscópico e descubra como vencer vírus e bactérias.',
    totalStages: 5,
    icon: '🦠',
    color: '#f97316',
    difficulty: 'Médio',
    estimatedTime: '45 min'
};

// Registro automático no loader global (se existir)
if (typeof window.DataLoader !== 'undefined') {
    window.DataLoader.registerChapter('cap7_doencas', {
        metadata: CHAPTER_METADATA
    });
}