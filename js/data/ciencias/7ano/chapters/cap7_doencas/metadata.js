/**
 * METADATA DO CAPÍTULO 7: DOENÇAS E VÍRUS
 */

const CHAPTER_METADATA = {
    id: 'cap7_doencas',
    title: 'Doenças e Vírus',
    subject: 'ciencias',
    grade: '7ano',
    description: 'Uma jornada perigosa pelo mundo dos microrganismos.',
    totalStages: 5,
    icon: '🦠',
    color: '#f97316'
};

// Registro automático seguro
if (typeof window !== 'undefined') {
    window.CHAPTER_METADATA = CHAPTER_METADATA;
    
    // Se o DataLoader existir (injetado pelo app), registra aqui
    if (window.DataLoader && typeof window.DataLoader.registerChapter === 'function') {
        window.DataLoader.registerChapter('cap7_doencas', { metadata: CHAPTER_METADATA });
    }
}