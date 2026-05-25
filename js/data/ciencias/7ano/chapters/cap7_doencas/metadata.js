const CAP7_METADATA = {
  id: 'cap7_doencas',
  title: 'Capítulo 7: Doenças Transmissíveis',
  icon: '🦠',
  color: '#10b981',
  description: 'Aprenda sobre doenças causadas por vírus, bactérias e outros microrganismos',
  totalStages: 4,
  estimatedTime: '3-4 horas'
  
// ADICIONE ISTO NO FINAL DO ARQUIVO:
if (window.DataManager) {
    window.DataManager.registerChapter('cap7_doencas', {
        metadata: CHAPTER_METADATA, // Certifique-se que a variável se chama assim no arquivo
        summaries: CHAPTER_SUMMARIES, // Ou o nome da variável de resumo
        stages: [STAGE_01, STAGE_02, STAGE_03, STAGE_04, STAGE_05], // Nomes das variáveis globais dos stages
        questions: QUESTIONS_BANK // Ou como sua variável de questões se chama
    });
}