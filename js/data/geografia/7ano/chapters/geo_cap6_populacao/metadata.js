/**
 * METADATA — Geografia 7º Ano: Cap. 6 — População Brasileira
 * BNCC: EF07GE05, EF07GE06
 */

window.CHAPTERS_REGISTRY = window.CHAPTERS_REGISTRY || {};

const GEO_CAP6_META = {
  id: 'geo_cap6_populacao',
  subject: 'geografia',
  grade: '7ano',
  title: 'Cap. 6 — População Brasileira',
  icon: '👥',
  color: '#2563eb',
  totalStages: 6,
  stages: [
    { index: 1, id: 'geo_cap6_s01', varName: 'GEO_CAP6_S01', title: 'Distribuição Populacional',        icon: '🗺️' },
    { index: 2, id: 'geo_cap6_s02', varName: 'GEO_CAP6_S02', title: 'Crescimento Populacional',         icon: '📈' },
    { index: 3, id: 'geo_cap6_s03', varName: 'GEO_CAP6_S03', title: 'Estrutura Etária e Pirâmides',     icon: '🔺' },
    { index: 4, id: 'geo_cap6_s04', varName: 'GEO_CAP6_S04', title: 'Migrações Internas e Êxodo Rural', icon: '🚌' },
    { index: 5, id: 'geo_cap6_sboss', varName: 'GEO_CAP6_SBOSS', title: 'O Demógrafo Supremo',          icon: '🧬', isBoss: true  },
    { index: 6, id: 'geo_cap6_sfinal', varName: 'GEO_CAP6_SFINAL', title: 'Exame Final — População',    icon: '🎓', isFinal: true }
  ]
};

window.CHAPTERS_REGISTRY['geo_cap6_populacao'] = GEO_CAP6_META;
