/**
 * MATEMÁTICA 7º ANO — CAP. 1: NÚMEROS RACIONAIS
 * Metadados + registro das 8 etapas
 */

const MAT_RACIONAIS_META = {
    id:          'mat_racionais',
    title:       'Números Racionais',
    subject:     'matematica',
    grade:       '7ano',
    icon:        '🔢',
    description: 'Domine frações, decimais, porcentagens e números negativos. Ferramentas essenciais para toda a matemática!',
    totalStages: 8,

    lore: {
        intro:   `No **Reino dos Números**, uma guerra silenciosa acontece entre os Inteiros e os Racionais. Os antigos sábios acreditavam que apenas números inteiros existiam — até que descobriram que 1 ÷ 2 não era possível! Você foi convocado para explorar o **Mundo das Frações** e provar que os Racionais são tão reais quanto qualquer inteiro.\n\nSua jornada começa com a compreensão do que é um número racional e termina com a derrota do **Chefe Irracional** — aquele que tenta confundir todos com decimais infinitos!`,
        boss:    `⚠️ **ALERTA MATEMÁTICO!** O Chefe Irracional emergiu das profundezas do Plano Cartesiano! Ele domina frações complexas, decimais periódicos e porcentagens traiçoeiras. Somente quem domina TODOS os números racionais pode derrotá-lo. Revise tudo — é a batalha final!`,
        victory: `🏆 **VITÓRIA!** O Chefe Irracional foi derrotado! Você provou que os Números Racionais não têm segredos para você. Frações, decimais, porcentagens e negativos — tudo está sob seu controle. Você é agora um **Mestre dos Números Racionais**!`,
    },

    stages: [
        { index: 1, id: 'mat_s01',    varName: 'MAT_S01',    isBoss: false, isFinal: false, label: 'O que são Racionais?' },
        { index: 2, id: 'mat_s02',    varName: 'MAT_S02',    isBoss: false, isFinal: false, label: 'Soma e Subtração de Frações' },
        { index: 3, id: 'mat_s03',    varName: 'MAT_S03',    isBoss: false, isFinal: false, label: 'Multiplicação e Divisão' },
        { index: 4, id: 'mat_s04',    varName: 'MAT_S04',    isBoss: false, isFinal: false, label: 'Decimais e Porcentagem' },
        { index: 5, id: 'mat_s05',    varName: 'MAT_S05',    isBoss: false, isFinal: false, label: 'Números Negativos' },
        { index: 6, id: 'mat_s06',    varName: 'MAT_S06',    isBoss: false, isFinal: false, label: 'Comparação e Ordenação' },
        { index: 7, id: 'mat_sboss',  varName: 'MAT_SBOSS',  isBoss: true,  isFinal: false, label: 'Chefe Irracional' },
        { index: 8, id: 'mat_sfinal', varName: 'MAT_SFINAL', isBoss: false, isFinal: true,  label: 'Exame Final' }
    ]
};

window.CHAPTERS_REGISTRY = window.CHAPTERS_REGISTRY || {};
window.CHAPTERS_REGISTRY['mat_racionais'] = MAT_RACIONAIS_META;
