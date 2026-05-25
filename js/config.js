/**
 * EDUQUEST CONFIG v2.0
 */

const CONFIG = {
    appName: 'EduQuest',
    version: '2.0.0',

    chapters: [
        {
            id: 'cap7_doencas',
            title: 'Doenças e Vírus',
            subject: 'Ciências',
            grade: '7º Ano',
            icon: '🧬',
            totalStages: 5,
            unlocked: true,
            description: 'Combata os vilões microscópicos!'
        }
    ],

    xp: {
        correct:       100,
        timeBonusMax:  75,
        comboBonus:    15,
        stageComplete: 50,
        perfect:       100
    },

    gems: {
        stageComplete: 10,
        perfect:       25,
        dailyStreak:   5
    },

    lives: {
        max:          3,
        gameHearts:   3
    },

    stages: {
        questionsPerGame: 10,
        timePerQuestion:  15
    },

    difficulty: {
        easy:   { label: 'Fácil',   color: '#16a34a', icon: '⭐' },
        medium: { label: 'Médio',   color: '#f59e0b', icon: '⭐⭐' },
        hard:   { label: 'Difícil', color: '#dc2626', icon: '⭐⭐⭐' }
    }
};

window.CONFIG = CONFIG;
