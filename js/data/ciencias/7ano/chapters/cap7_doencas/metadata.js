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

    lore: {
        intro: `No coração do **Reino de EduQuest**, um vírus mutante está se espalhando pelas terras. As forças da doença — Vírus, Bactérias, Protistas e Fungos — avançam sobre os habitantes. Apenas um Herói com conhecimento pode detê-los.\n\nSua missão: dominar as Ciências da Saúde e derrotar o **Vírus Mutante V1** antes que ele destrua a Academia. Cada missão que você completa enfraquece as hostes inimigas. A Ciência é sua arma.`,
        boss:    `⚠️ **ALERTA DE BATALHA** — O Vírus Mutante V1 emergiu das Profundezas Celulares! Este ser microscópico já infectou 3 regiões do mapa. Somente quem domina imunidade, anticorpos e mecanismos de defesa pode detê-lo. Use tudo que aprendeu — é agora ou nunca!`,
        victory: `🏆 **VITÓRIA!** O Vírus Mutante V1 foi derrotado! O Reino de EduQuest está salvo. Graças ao seu conhecimento sobre doenças infecciosas, imunidade e saúde pública, as forças da doença recuaram para as sombras. Você é agora um **Mestre das Ciências da Vida**!`,
    },

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
