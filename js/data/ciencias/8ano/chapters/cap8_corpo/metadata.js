/**
 * CIÊNCIAS 8º ANO — CAP. 1: CORPO HUMANO
 * Metadados + registro das 8 etapas
 */

const CAP8_CORPO_META = {
    id:          'cap8_corpo',
    title:       'Corpo Humano',
    subject:     'ciencias',
    grade:       '8ano',
    icon:        '🫀',
    description: 'Explore os sistemas do corpo humano: digestório, circulatório, respiratório, nervoso e mais. Entenda como seu corpo funciona!',
    totalStages: 8,

    lore: {
        intro:   `No **Reino do Corpo Humano**, bilhões de células trabalham em perfeita harmonia — até agora. O temido vírus **Dr. Chaos** invadiu o organismo e está desativando os sistemas vitais um a um!\n\nComo Agente Imunológico, você precisa atravessar cada sistema — do estômago ao cérebro — derrotando os agentes do caos e restaurando o equilíbrio. Sua missão começa no Sistema Digestório e termina no confronto final contra o próprio Dr. Chaos!`,
        boss:    `⚠️ **ALERTA MÁXIMO!** O Dr. Chaos ativou o **Protocolo Colapso** e está atacando TODOS os sistemas simultaneamente! Só um Agente que domina completamente o corpo humano pode detê-lo. Revise tudo — é a batalha pela sobrevivência do organismo!`,
        victory: `🏆 **VITÓRIA!** O Dr. Chaos foi eliminado e o corpo humano está salvo! Você provou domínio total sobre todos os sistemas vitais. Você é agora um **Especialista em Anatomia**!`,
    },

    stages: [
        { index: 1, id: 'cap8_s01',    varName: 'CAP8_S01',    isBoss: false, isFinal: false, label: 'Sistema Digestório' },
        { index: 2, id: 'cap8_s02',    varName: 'CAP8_S02',    isBoss: false, isFinal: false, label: 'Sistema Circulatório' },
        { index: 3, id: 'cap8_s03',    varName: 'CAP8_S03',    isBoss: false, isFinal: false, label: 'Sistema Respiratório' },
        { index: 4, id: 'cap8_s04',    varName: 'CAP8_S04',    isBoss: false, isFinal: false, label: 'Sistema Nervoso' },
        { index: 5, id: 'cap8_s05',    varName: 'CAP8_S05',    isBoss: false, isFinal: false, label: 'Sistema Excretor' },
        { index: 6, id: 'cap8_s06',    varName: 'CAP8_S06',    isBoss: false, isFinal: false, label: 'Sistema Reprodutor' },
        { index: 7, id: 'cap8_sboss',  varName: 'CAP8_SBOSS',  isBoss: true,  isFinal: false, label: 'Dr. Chaos — Chefe Final' },
        { index: 8, id: 'cap8_sfinal', varName: 'CAP8_SFINAL', isBoss: false, isFinal: true,  label: 'Exame Final: Corpo Humano' }
    ]
};

window.CHAPTERS_REGISTRY = window.CHAPTERS_REGISTRY || {};
window.CHAPTERS_REGISTRY['cap8_corpo'] = CAP8_CORPO_META;
