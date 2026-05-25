const CIENCIAS_7ANO_METADATA = {
  title: 'Ciências - 7º Ano',
  description: 'Doenças transmissíveis, imunidade e prevenção',
  totalChapters: 1,
  icon: '🔬'
}

// Garante que a variável seja global
window.CIENCIAS_7ANO_METADATA = CIENCIAS_7ANO_METADATA;

// Registro seguro
if (typeof window.DataLoader !== 'undefined') {
    window.DataLoader.registerChapter('cap7_doencas', CIENCIAS_7ANO_METADATA);
}