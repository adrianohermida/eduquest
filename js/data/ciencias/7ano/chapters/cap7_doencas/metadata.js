const CHAPTER_METADATA = {
    id: 'cap7_doencas',
    title: 'Doenças e Vírus',
    subject: 'ciencias',
    grade: '7ano',
    totalStages: 5,
    description: 'Combata os vilões microscópicos!'
};
// Garante que a variável seja global
window.CHAPTER_METADATA = CHAPTER_METADATA;

// Registro seguro
if (typeof window.DataLoader !== 'undefined') {
    window.DataLoader.registerChapter('cap7_doencas', CHAPTER_METADATA);
}