/**
 * CAPÍTULO 7 — DOENÇAS TRANSMISSÍVEIS
 * Metadados + registro das 12 etapas
 */

const CHAPTER_METADATA = {
    id:          'cap7_doencas',
    title:       'Doenças Transmissíveis',
    subject:     'ciencias',
    grade:       '7ano',
    icon:        '🧬',
    description: 'Combata os vilões microscópicos! Aprenda sobre imunidade, vacinas, doenças virais e bacterianas, e como o saneamento protege a vida.',
    totalStages: 12,

    // Registry completo das 12 etapas
    stages: [
        { index: 1,  id: 'stage_01',    varName: 'STAGE_01',    isBoss: false, isFinal: false },
        { index: 2,  id: 'stage_02',    varName: 'STAGE_02',    isBoss: false, isFinal: false },
        { index: 3,  id: 'stage_03',    varName: 'STAGE_03',    isBoss: false, isFinal: false },
        { index: 4,  id: 'stage_04',    varName: 'STAGE_04',    isBoss: false, isFinal: false },
        { index: 5,  id: 'stage_05',    varName: 'STAGE_05',    isBoss: false, isFinal: false },
        { index: 6,  id: 'stage_06',    varName: 'STAGE_06',    isBoss: false, isFinal: false },
        { index: 7,  id: 'stage_07',    varName: 'STAGE_07',    isBoss: false, isFinal: false },
        { index: 8,  id: 'stage_08',    varName: 'STAGE_08',    isBoss: false, isFinal: false },
        { index: 9,  id: 'stage_09',    varName: 'STAGE_09',    isBoss: false, isFinal: false },
        { index: 10, id: 'stage_10',    varName: 'STAGE_10',    isBoss: false, isFinal: false },
        { index: 11, id: 'stage_boss',  varName: 'STAGE_BOSS',  isBoss: true,  isFinal: false },
        { index: 12, id: 'stage_final', varName: 'STAGE_FINAL', isBoss: false, isFinal: true  }
    ]
};

window.CHAPTER_METADATA = CHAPTER_METADATA;
