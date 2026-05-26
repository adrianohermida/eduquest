/**
 * MATEMÁTICA 8º ANO — CAP. 1: POTÊNCIAS, RAÍZES E EQUAÇÕES
 * Metadados + registro das 8 etapas
 */

const MAT8_EQ_META = {
    id:          'mat8_equacoes',
    title:       'Potências, Raízes e Equações',
    subject:     'matematica',
    grade:       '8ano',
    icon:        '⚡',
    description: 'Domine potenciação, radiciação, notação científica e equações do 2º grau. O arsenal matemático do 8º ano!',
    totalStages: 8,

    lore: {
        intro:   `Na **Torre dos Expoentes**, o Arquimago Quadrático criou fórmulas tão poderosas que ninguém consegue resolver. Ele desafia todos: "Se você não dominar as potências e equações, jamais ascenderá ao Templo da Álgebra!"\n\nSua jornada começa com as bases da potenciação e termina com a Fórmula de Bhaskara — a arma suprema para derrotar qualquer equação do 2º grau!`,
        boss:    `⚠️ **DESAFIO FINAL!** O Arquimago lançou a equação mais complexa já vista: ax² + bx + c = 0 com coeficientes traiçoeiros! Só quem domina Bhaskara, discriminante e raízes pode vencê-lo. Mobilize todo seu conhecimento!`,
        victory: `🏆 **VITÓRIA!** O Arquimago Quadrático foi derrotado pela Fórmula de Bhaskara! Você é agora um **Mestre das Equações** — nenhuma expressão algébrica pode resistir ao seu poder!`,
    },

    stages: [
        { index: 1, id: 'mat8_s01',    varName: 'MAT8_S01',    isBoss: false, isFinal: false, label: 'Potenciação' },
        { index: 2, id: 'mat8_s02',    varName: 'MAT8_S02',    isBoss: false, isFinal: false, label: 'Radiciação' },
        { index: 3, id: 'mat8_s03',    varName: 'MAT8_S03',    isBoss: false, isFinal: false, label: 'Notação Científica' },
        { index: 4, id: 'mat8_s04',    varName: 'MAT8_S04',    isBoss: false, isFinal: false, label: 'Equação do 1º Grau' },
        { index: 5, id: 'mat8_s05',    varName: 'MAT8_S05',    isBoss: false, isFinal: false, label: 'Sistemas de Equações' },
        { index: 6, id: 'mat8_s06',    varName: 'MAT8_S06',    isBoss: false, isFinal: false, label: 'Equação do 2º Grau' },
        { index: 7, id: 'mat8_sboss',  varName: 'MAT8_SBOSS',  isBoss: true,  isFinal: false, label: 'Arquimago Quadrático' },
        { index: 8, id: 'mat8_sfinal', varName: 'MAT8_SFINAL', isBoss: false, isFinal: true,  label: 'Exame Final: Equações' }
    ]
};

window.CHAPTERS_REGISTRY = window.CHAPTERS_REGISTRY || {};
window.CHAPTERS_REGISTRY['mat8_equacoes'] = MAT8_EQ_META;
