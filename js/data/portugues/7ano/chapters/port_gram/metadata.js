/**
 * PORT_GRAM — Gramática: Classes de Palavras e Sintaxe (7º Ano)
 */

const PT_GRAM_META = {
  id: 'port_gram',
  subject: 'portugues',
  grade: '7ano',
  icon: '📝',
  totalStages: 8,

  lore: {
    intro: 'As palavras têm poderes especiais — cada classe tem seu papel na construção do sentido. Aprenda a identificar substantivos, adjetivos, verbos e muito mais!',
    boss: 'O Gramaturgo Caótico embaralhou todas as classes de palavras! Somente quem domina a gramática pode restaurar a ordem das frases.',
    victory: 'Você venceu o Gramaturgo e restaurou a harmonia das palavras! Agora você é um verdadeiro Mestre da Língua!'
  },

  stages: [
    { index: 1, id: 'pt_s01', varName: 'PT_S01', isBoss: false, isFinal: false, label: 'Substantivo' },
    { index: 2, id: 'pt_s02', varName: 'PT_S02', isBoss: false, isFinal: false, label: 'Adjetivo' },
    { index: 3, id: 'pt_s03', varName: 'PT_S03', isBoss: false, isFinal: false, label: 'Verbo' },
    { index: 4, id: 'pt_s04', varName: 'PT_S04', isBoss: false, isFinal: false, label: 'Pronome' },
    { index: 5, id: 'pt_s05', varName: 'PT_S05', isBoss: false, isFinal: false, label: 'Advérbio e Preposição' },
    { index: 6, id: 'pt_s06', varName: 'PT_S06', isBoss: false, isFinal: false, label: 'Sintaxe: Sujeito e Predicado' },
    { index: 7, id: 'pt_sboss', varName: 'PT_SBOSS', isBoss: true, isFinal: false, label: 'Gramaturgo Caótico' },
    { index: 8, id: 'pt_sfinal', varName: 'PT_SFINAL', isBoss: false, isFinal: true, label: 'Exame Final de Gramática' }
  ]
};

window.CHAPTERS_REGISTRY = window.CHAPTERS_REGISTRY || {};
window.CHAPTERS_REGISTRY['port_gram'] = PT_GRAM_META;
