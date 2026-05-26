/**
 * HIST_MEDIEVAL — Idade Média (7º Ano)
 */

const HIST_MEDIEVAL_META = {
  id: 'hist_medieval',
  subject: 'historia',
  grade: '7ano',
  icon: '⚔️',
  totalStages: 8,

  lore: {
    intro: 'Os reinos caíram e a Europa mergulhou na escuridão da Idade Média. Cavaleiros, servos e bispos disputam o poder entre castelos e mosteiros. Você será o historiador que revelará os segredos deste período épico!',
    boss: 'O Senhor Feudal Obscuro acumulou todo o poder e quer manter a ignorância sobre a história! Somente quem domina o conhecimento medieval pode desafiá-lo!',
    victory: 'Você derrotou o Senhor Feudal e libertou o conhecimento! Agora é um verdadeiro Cronista da Idade Média!'
  },

  stages: [
    { index: 1, id: 'hist_s01', varName: 'HIST_S01', isBoss: false, isFinal: false, label: 'O Feudalismo' },
    { index: 2, id: 'hist_s02', varName: 'HIST_S02', isBoss: false, isFinal: false, label: 'A Igreja na Idade Média' },
    { index: 3, id: 'hist_s03', varName: 'HIST_S03', isBoss: false, isFinal: false, label: 'As Cruzadas' },
    { index: 4, id: 'hist_s04', varName: 'HIST_S04', isBoss: false, isFinal: false, label: 'Comércio e Cidades Medievais' },
    { index: 5, id: 'hist_s05', varName: 'HIST_S05', isBoss: false, isFinal: false, label: 'Cultura e Arte Medieval' },
    { index: 6, id: 'hist_s06', varName: 'HIST_S06', isBoss: false, isFinal: false, label: 'A Crise do Feudalismo' },
    { index: 7, id: 'hist_sboss', varName: 'HIST_SBOSS', isBoss: true, isFinal: false, label: 'Senhor Feudal Obscuro' },
    { index: 8, id: 'hist_sfinal', varName: 'HIST_SFINAL', isBoss: false, isFinal: true, label: 'Exame Final — Idade Média' }
  ]
};

window.CHAPTERS_REGISTRY = window.CHAPTERS_REGISTRY || {};
window.CHAPTERS_REGISTRY['hist_medieval'] = HIST_MEDIEVAL_META;
