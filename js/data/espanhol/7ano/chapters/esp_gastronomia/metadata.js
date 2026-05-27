/**
 * METADATA — Espanhol 7º Ano: Unidad 2 — Gastronomía y Alimentación
 * BNCC: EF07LE01, EF07LE04, EF07LE06, EF07LE12, EF07LP07
 * Tópicos 1-4: comidas del día, vocabulario gastronómico, ortografía M/N + MUY/MUCHO, verbos 2ª conjugação
 */

window.CHAPTERS_REGISTRY = window.CHAPTERS_REGISTRY || {};

const ESP_GASTRONOMIA_META = {
  id: 'esp_gastronomia',
  subject: 'espanhol',
  grade: '7ano',
  title: 'Unidad 2 — Gastronomía y Alimentación',
  icon: '🍽️',
  color: '#d97706',
  totalStages: 6,
  stages: [
    { index: 1, id: 'esp_gas_s01', varName: 'ESP_GAS_S01', title: 'Comidas del Día',                icon: '☀️' },
    { index: 2, id: 'esp_gas_s02', varName: 'ESP_GAS_S02', title: 'Vocabulario Gastronómico',       icon: '🍳' },
    { index: 3, id: 'esp_gas_s03', varName: 'ESP_GAS_S03', title: 'Ortografía: M/N + MUY/MUCHO',   icon: '✏️' },
    { index: 4, id: 'esp_gas_s04', varName: 'ESP_GAS_S04', title: 'Verbos Irregulares — 2ª Conj.', icon: '🔄' },
    { index: 5, id: 'esp_gas_sboss', varName: 'ESP_GAS_SBOSS', title: 'El Gran Chef',              icon: '👨‍🍳', isBoss: true  },
    { index: 6, id: 'esp_gas_sfinal', varName: 'ESP_GAS_SFINAL', title: 'Examen — Unidad 2',       icon: '🎓', isFinal: true }
  ]
};

window.CHAPTERS_REGISTRY['esp_gastronomia'] = ESP_GASTRONOMIA_META;
