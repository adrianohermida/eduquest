/**
 * EDUQUEST CONFIG v3.0
 * Multi-subject hierarchy + gamification settings
 */

const CONFIG = {
    appName: 'EduQuest',
    version: '3.0.0',

    // ── SUBJECTS HIERARCHY ────────────────────────────────
    subjects: [
        {
            id: 'ciencias',
            name: 'Ciências',
            icon: '🔬',
            color: '#f97316',
            grade: '7º Ano',
            chapters: [
                { id: 'cap7_doencas', title: 'Cap. 7 — Doenças Transmissíveis', icon: '🧬', totalStages: 12, unlocked: true,  description: 'Combata os vilões microscópicos!' },
                { id: 'cap1_celulas', title: 'Cap. 1 — A Célula',               icon: '🔬', totalStages: 8,  unlocked: false, description: 'Em breve' },
                { id: 'cap2_corpo',   title: 'Cap. 2 — Corpo Humano',            icon: '🫀', totalStages: 8,  unlocked: false, description: 'Em breve' },
                { id: 'cap3_ecolog',  title: 'Cap. 3 — Ecologia',               icon: '🌿', totalStages: 8,  unlocked: false, description: 'Em breve' }
            ]
        },
        {
            id: 'matematica',
            name: 'Matemática',
            icon: '📐',
            color: '#3b82f6',
            grade: '7º Ano',
            chapters: [
                { id: 'mat_racionais', title: 'Cap. 1 — Números Racionais', icon: '🔢', totalStages: 8, unlocked: true,  description: 'Domine frações, decimais e negativos!' },
                { id: 'mat_fracoes',   title: 'Cap. 2 — Frações Avançadas', icon: '➗', totalStages: 8, unlocked: false, description: 'Em breve' },
                { id: 'mat_geom',      title: 'Cap. 3 — Geometria',         icon: '📐', totalStages: 8, unlocked: false, description: 'Em breve' }
            ]
        },
        {
            id: 'historia',
            name: 'História',
            icon: '🏛️',
            color: '#8b5cf6',
            grade: '7º Ano',
            chapters: [
                { id: 'hist_medieval', title: 'Cap. 1 — Idade Média',   icon: '⚔️', totalStages: 8, unlocked: true,  description: 'Feudalismo, Cruzadas e o fim da Idade Média!' },
                { id: 'hist_modern',   title: 'Cap. 2 — Idade Moderna', icon: '🗺️', totalStages: 8, unlocked: false, description: 'Em breve' }
            ]
        },
        {
            id: 'portugues',
            name: 'Português',
            icon: '📝',
            color: '#ec4899',
            grade: '7º Ano',
            chapters: [
                { id: 'port_gram',   title: 'Cap. 1 — Gramática', icon: '📝', totalStages: 8, unlocked: true,  description: 'Domine classes de palavras e sintaxe!' },
                { id: 'port_redac',  title: 'Cap. 2 — Redação',   icon: '✍️', totalStages: 6, unlocked: false, description: 'Em breve' }
            ]
        },
        {
            id: 'ingles',
            name: 'Inglês',
            icon: '🇬🇧',
            color: '#0891b2',
            grade: '7º Ano',
            chapters: [
                { id: 'eng_present', title: 'Unit 1 — Present Tense', icon: '🗣️', totalStages: 6, unlocked: false, description: 'Em breve' }
            ]
        },
        {
            id: 'espanhol',
            name: 'Espanhol',
            icon: '🇪🇸',
            color: '#d97706',
            grade: '7º Ano',
            chapters: [
                { id: 'esp_presente', title: 'Lección 1 — Presente', icon: '💬', totalStages: 6, unlocked: false, description: 'Em breve' }
            ]
        },
        {
            id: 'musica',
            name: 'Música',
            icon: '🎵',
            color: '#7c3aed',
            grade: '7º Ano',
            chapters: [
                { id: 'mus_teoria', title: 'Cap. 1 — Teoria Musical', icon: '🎵', totalStages: 6, unlocked: false, description: 'Em breve' }
            ]
        },
        {
            id: 'artes',
            name: 'Artes',
            icon: '🎨',
            color: '#dc2626',
            grade: '7º Ano',
            chapters: [
                { id: 'art_historia', title: 'Cap. 1 — História da Arte', icon: '🖼️', totalStages: 6, unlocked: false, description: 'Em breve' }
            ]
        },
        {
            id: 'geografia',
            name: 'Geografia',
            icon: '🌍',
            color: '#16a34a',
            grade: '7º Ano',
            chapters: [
                { id: 'geo_brasil',          title: 'Cap. 1 — Brasil',                              icon: '🇧🇷', totalStages: 8, unlocked: true,  description: 'Localização, biomas, regiões e economia do Brasil!' },
                { id: 'geo_cap6_populacao',  title: 'Cap. 6 — População Brasileira',                icon: '👥', totalStages: 6, unlocked: true,  description: 'Distribuição, crescimento e migrações do povo brasileiro!' },
                { id: 'geo_cap7_urbanizacao',title: 'Cap. 7 — Urbanização e Dinâmicas Migratórias', icon: '🏙️',totalStages: 6, unlocked: true,  description: 'Cidades, êxodo rural, xenofobia e projeções populacionais!' },
                { id: 'geo_regiao',          title: 'Cap. 2 — Regiões do Brasil',                   icon: '🗺️', totalStages: 8, unlocked: false, description: 'Em breve' }
            ]
        },
        {
            id: 'ciencias',
            name: 'Ciências',
            icon: '🔬',
            color: '#f97316',
            grade: '8º Ano',
            chapters: [
                { id: 'cap8_corpo', title: 'Cap. 8 — Corpo Humano', icon: '🫀', totalStages: 8, unlocked: true, description: 'Sistemas digestório, circulatório, nervoso, excretor e reprodutor!' }
            ]
        },
        {
            id: 'matematica',
            name: 'Matemática',
            icon: '📐',
            color: '#3b82f6',
            grade: '8º Ano',
            chapters: [
                { id: 'mat8_equacoes', title: 'Cap. 1 — Potências, Raízes e Equações', icon: '⚡', totalStages: 8, unlocked: true, description: 'Potenciação, radiciação, notação científica e equações do 1º e 2º graus!' }
            ]
        }
    ],

    // ── QUICK ACCESS (home screen) ────────────────────────
    chapters: [
        { id: 'cap7_doencas',       title: 'Doenças Transmissíveis',             subject: 'Ciências',    grade: '7º Ano', icon: '🧬', totalStages: 12, unlocked: true, description: 'Combata os vilões microscópicos!' },
        { id: 'mat_racionais',      title: 'Números Racionais',                  subject: 'Matemática',  grade: '7º Ano', icon: '🔢', totalStages: 8,  unlocked: true, description: 'Domine frações, decimais e negativos!' },
        { id: 'port_gram',          title: 'Gramática',                          subject: 'Português',   grade: '7º Ano', icon: '📝', totalStages: 8,  unlocked: true, description: 'Domine classes de palavras e sintaxe!' },
        { id: 'hist_medieval',      title: 'Idade Média',                        subject: 'História',    grade: '7º Ano', icon: '⚔️', totalStages: 8,  unlocked: true, description: 'Feudalismo, Cruzadas e o fim da Idade Média!' },
        { id: 'geo_brasil',         title: 'Brasil',                             subject: 'Geografia',   grade: '7º Ano', icon: '🇧🇷', totalStages: 8, unlocked: true, description: 'Localização, biomas, regiões e economia do Brasil!' },
        { id: 'geo_cap6_populacao', title: 'Cap. 6 — População Brasileira',      subject: 'Geografia',   grade: '7º Ano', icon: '👥', totalStages: 6,  unlocked: true, description: 'Distribuição, crescimento e migrações do povo brasileiro!' },
        { id: 'geo_cap7_urbanizacao',title: 'Cap. 7 — Urbanização',             subject: 'Geografia',   grade: '7º Ano', icon: '🏙️',totalStages: 6,  unlocked: true, description: 'Cidades, êxodo rural e projeções populacionais!' },
        { id: 'cap8_corpo',         title: 'Cap. 8 — Corpo Humano',              subject: 'Ciências',    grade: '8º Ano', icon: '🫀', totalStages: 8,  unlocked: true, description: 'Sistemas do corpo humano!' },
        { id: 'mat8_equacoes',      title: 'Potências, Raízes e Equações',       subject: 'Matemática',  grade: '8º Ano', icon: '⚡', totalStages: 8,  unlocked: true, description: 'Potenciação, radiciação e equações!' }
    ],

    // ── GAMIFICATION ─────────────────────────────────────
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
        max:        5,   // global HUD lives (refill over time, like Duolingo)
        gameHearts: 3    // hearts per battle session
    },

    stages: {
        questionsPerGame:   10,
        timePerQuestion:    15,
        minStarsToAdvance:  1,   // minimum stars on current stage to unlock next (0 = disabled)
    },

    premium: {
        unlimitedHearts:  true,
        noTimer:          false,
        advancedStats:    true,
        badge:            '👑',
    },

    difficulty: {
        easy:   { label: 'Fácil',   color: '#16a34a', icon: '⭐' },
        medium: { label: 'Médio',   color: '#f59e0b', icon: '⭐⭐' },
        hard:   { label: 'Difícil', color: '#dc2626', icon: '⭐⭐⭐' },
        boss:   { label: 'Chefe',   color: '#7c3aed', icon: '💀' }
    }
};

window.CONFIG = CONFIG;
