/**
 * METADATA — Espanhol 7º Ano: Unidad 3 — Deportes y Juegos Olímpicos
 * BNCC: EF07LE01, EF07LE04, EF07LE06, EF07LE12, EF07LP07
 * Tópicos 5-9: cultura olímpica, vocabulário deportivo, numerales, ortografía R/RR + apócope, verbos 3ª conjugação
 */

window.CHAPTERS_REGISTRY = window.CHAPTERS_REGISTRY || {};

const ESP_DEPORTES_META = {
  id: 'esp_deportes',
  subject: 'espanhol',
  grade: '7ano',
  title: 'Unidad 3 — Deportes y Juegos Olímpicos',
  icon: '🏅',
  color: '#d97706',
  totalStages: 7,
  stages: [
    { index: 1, id: 'esp_dep_s01', varName: 'ESP_DEP_S01', title: 'Cultura Olímpica',               icon: '🏛️' },
    { index: 2, id: 'esp_dep_s02', varName: 'ESP_DEP_S02', title: 'Vocabulario Deportivo',          icon: '⚽' },
    { index: 3, id: 'esp_dep_s03', varName: 'ESP_DEP_S03', title: 'Numerales',                      icon: '🔢' },
    { index: 4, id: 'esp_dep_s04', varName: 'ESP_DEP_S04', title: 'Ortografía: R/RR + Apócope',     icon: '✏️' },
    { index: 5, id: 'esp_dep_s05', varName: 'ESP_DEP_S05', title: 'Verbos Irregulares — 3ª Conj.', icon: '🔄' },
    { index: 6, id: 'esp_dep_sboss', varName: 'ESP_DEP_SBOSS', title: 'El Campeón Olímpico',        icon: '🥇', isBoss: true  },
    { index: 7, id: 'esp_dep_sfinal', varName: 'ESP_DEP_SFINAL', title: 'Examen — Unidad 3',        icon: '🎓', isFinal: true }
  ]
};

window.CHAPTERS_REGISTRY['esp_deportes'] = ESP_DEPORTES_META;
