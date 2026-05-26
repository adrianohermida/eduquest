/**
 * METADATA — Geografia 7º Ano: Brasil
 */

window.CHAPTERS_REGISTRY = window.CHAPTERS_REGISTRY || {};

const GEO_BRASIL_META = {
  id: 'geo_brasil',
  subject: 'geografia',
  grade: '7ano',
  title: 'Cap. 1 — Brasil',
  icon: '🇧🇷',
  color: '#16a34a',
  totalStages: 8,
  stages: [
    { index: 1, id: 'geo_s01', varName: 'GEO_S01', title: 'Localização do Brasil',     icon: '🗺️'  },
    { index: 2, id: 'geo_s02', varName: 'GEO_S02', title: 'Relevo e Hidrografia',       icon: '⛰️'  },
    { index: 3, id: 'geo_s03', varName: 'GEO_S03', title: 'Clima e Vegetação',          icon: '🌿'  },
    { index: 4, id: 'geo_s04', varName: 'GEO_S04', title: 'Regiões do Brasil',          icon: '🗺️'  },
    { index: 5, id: 'geo_s05', varName: 'GEO_S05', title: 'População Brasileira',       icon: '👥'  },
    { index: 6, id: 'geo_s06', varName: 'GEO_S06', title: 'Economia Brasileira',        icon: '💰'  },
    { index: 7, id: 'geo_sboss', varName: 'GEO_SBOSS', title: 'O Geógrafo Supremo',    icon: '🌎', isBoss: true  },
    { index: 8, id: 'geo_sfinal', varName: 'GEO_SFINAL', title: 'Exame Final — Brasil', icon: '🎓', isFinal: true }
  ]
};

window.CHAPTERS_REGISTRY['geo_brasil'] = GEO_BRASIL_META;
