/**
 * STATE MANAGER - GERENCIADOR DE ESTADO GLOBAL
 * Versão: 4.0 (RPG Clear Mode)
 * 
 * Responsabilidades:
 * 1. Persistência de dados (LocalStorage)
 * 2. Gestão de XP, Níveis, Gems e Vidas
 * 3. Rastreamento de progresso no Mapa RPG
 * 4. Configurações de usuário (Som, Tema)
 */

const STATE = {
    // Estrutura base de dados
    data: {
        user: {
            name: 'Heroi',
            level: 1,
            xp: 0,
            xpToNextLevel: 1000,
            gems: 0,
            hearts: 5,       // Vidas estilo Duolingo
            maxHearts: 5,
            streak: 1,       // Dias consecutivos
            lastLogin: null,
            inventory: [],   // Power-ups
            theme: 'clear'   // 'clear' ou 'dark'
        },
        progress: {
            // Formato: { 'cap7_doencas': { unlockedStage: 1, completed: { '1': 3, '2': 0 } } }
            // unlockedStage: Próxima etapa desbloqueada
            // completed: { stageIndex: stars (0-3) }
        },
        settings: {
            sound: true,
            music: false,
            vibrations: true
        }
    },

    /**
     * Inicializa o estado (carrega do LocalStorage ou cria novo)
     */
    init: function() {
        console.log('💾 Carregando save...');
        try {
            const savedData = localStorage.getItem('eduquest_save_v4');
            if (savedData) {
                const parsed = JSON.parse(savedData);
                // Merge seguro para não perder campos se a estrutura mudar
                this.data = { 
                    ...this.data, 
                    ...parsed,
                    user: { ...this.data.user, ...parsed.user },
                    progress: parsed.progress || {},
                    settings: parsed.settings || {}
                };
                console.log('✅ Save carregado com sucesso!');
            } else {
                console.log('🆕 Novo jogo iniciado.');
                this.checkStreak();
            }
        } catch (e) {
            console.error('❌ Erro ao carregar save:', e);
            localStorage.removeItem('eduquest_save_v4');
        }
        
        // Aplica configurações iniciais
        this.applySettings();
        this.save();
        return this;
    },

    /**
     * Salva o estado atual no LocalStorage
     */
    save: function() {
        try {
            localStorage.setItem('eduquest_save_v4', JSON.stringify(this.data));
            // Atualiza a UI se existir
            if (window.UI && typeof window.UI.updateHUD === 'function') {
                window.UI.updateHUD();
            }
        } catch (e) {
            console.error('❌ Erro ao salvar:', e);
        }
    },

    /**
     * Gerencia Lógica de Streak (Dia consecutivo)
     */
    checkStreak: function() {
        const today = new Date().toDateString();
        if (this.data.user.lastLogin !== today) {
            const yesterday = new Date();
            yesterday.setDate(yesterday.getDate() - 1);
            
            if (this.data.user.lastLogin === yesterday.toDateString()) {
                this.data.user.streak++;
                this.addGems(10); // Bônus por dia consecutivo
                console.log('🔥 Streak aumentado!');
            } else if (this.data.user.lastLogin !== today) {
                // Se perdeu um dia, reseta (opcional: usar freeze streak)
                if (this.data.user.lastLogin) {
                    this.data.user.streak = 1; 
                }
            }
            this.data.user.lastLogin = today;
        }
    },

    /**
     * Adiciona XP e verifica Level Up
     */
    addXP: function(amount) {
        this.data.user.xp += amount;
        if (this.data.user.xp >= this.data.user.xpToNextLevel) {
            this.data.user.xp -= this.data.user.xpToNextLevel;
            this.data.user.level++;
            this.data.user.xpToNextLevel = Math.floor(this.data.user.xpToNextLevel * 1.2);
            this.triggerEvent('LEVEL_UP', this.data.user.level);
            this.addGems(50); // Bônus de nível
        }
        this.save();
        this.triggerEvent('XP_GAIN', amount);
    },

    /**
     * Adiciona Gems (Moeda premium)
     */
    addGems: function(amount) {
        this.data.user.gems += amount;
        this.save();
        this.triggerEvent('GEMS_GAIN', amount);
    },

    /**
     * Remove uma vida (Coração)
     */
    removeHeart: function() {
        if (this.data.user.hearts > 0) {
            this.data.user.hearts--;
            this.save();
            if (this.data.user.hearts === 0) {
                this.triggerEvent('NO_HEARTS', null);
            }
            return true;
        }
        return false;
    },

    /**
     * Registra conclusão de etapa no Mapa RPG
     * @param {string} chapterId - ID do capítulo (ex: 'cap7_doencas')
     * @param {number} stageIndex - Índice da etapa (1-5)
     * @param {number} stars - Estrelas ganhas (1-3)
     */
    completeStage: function(chapterId, stageIndex, stars) {
        if (!this.data.progress[chapterId]) {
            this.data.progress[chapterId] = { unlockedStage: 1, completed: {} };
        }

        const chapterProgress = this.data.progress[chapterId];
        
        // Atualiza estrelas se for melhor que o anterior
        const currentStars = chapterProgress.completed[stageIndex] || 0;
        if (stars > currentStars) {
            chapterProgress.completed[stageIndex] = stars;
            // Calcula XP extra por primeira vez ou melhoria
            const xpBonus = (currentStars === 0) ? 100 : (stars - currentStars) * 20;
            this.addXP(xpBonus);
        }

        // Desbloqueia próxima etapa se completou a atual
        if (stageIndex === chapterProgress.unlockedStage && stars > 0) {
            chapterProgress.unlockedStage++;
        }

        this.save();
        return stars > currentStars; // Retorna true se bateu recorde
    },

    /**
     * Verifica se uma etapa está desbloqueada
     */
    isStageUnlocked: function(chapterId, stageIndex) {
        if (!this.data.progress[chapterId]) return stageIndex === 1;
        return stageIndex <= this.data.progress[chapterId].unlockedStage;
    },

    /**
     * Obtém estrelas de uma etapa específica
     */
    getStageStars: function(chapterId, stageIndex) {
        if (!this.data.progress[chapterId]) return 0;
        return this.data.progress[chapterId].completed[stageIndex] || 0;
    },

    /**
     * Aplica configurações (Tema, Som)
     */
    applySettings: function() {
        const root = document.documentElement;
        if (this.data.user.theme === 'dark') {
            root.style.setProperty('--bg-body', '#0f172a');
            root.style.setProperty('--text-main', '#f8fafc');
        } else {
            // Clear Mode (Padrão)
            root.style.setProperty('--bg-body', '#fffbeb');
            root.style.setProperty('--text-main', '#1e293b');
        }
    },

    /**
     * Alterna tema entre Clear e Dark
     */
    toggleTheme: function() {
        this.data.user.theme = this.data.user.theme === 'clear' ? 'dark' : 'clear';
        this.applySettings();
        this.save();
    },

    /**
     * Sistema simples de eventos para notificações na UI
     */
    triggerEvent: function(type, payload) {
        document.dispatchEvent(new CustomEvent('state-change', { 
            detail: { type, payload } 
        }));
    },

    /**
     * Getter seguro para o usuário
     */
    getUser: function() {
        return this.data.user;
    },

    /**
     * Getter para progresso de um capítulo
     */
    getChapterProgress: function(chapterId) {
        return this.data.progress[chapterId] || { unlockedStage: 1, completed: {} };
    }
};

// Garante que o objeto esteja disponível globalmente antes de qualquer outro script
window.STATE = STATE;