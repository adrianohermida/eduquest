// ... (código existente do State) ...

const State = {
    // ... (propriedades existentes: user, chapters, etc) ...

    // --- NOVOS MÉTODOS PARA FASE 3 ---

    getUserStreak() {
        return this.user.streak || 0;
    },

    getUserGems() {
        return this.user.gems || 0;
    },

    getUserXP() {
        return this.user.xp || 0;
    },

    getChapterProgress(chapterId) {
        // Retorna estrutura segura mesmo se capítulo não existir
        const data = this.data.chapters[chapterId] || { completed: false, stagesCompleted: 0, totalStages: 5 };
        return {
            completed: data.completed || false,
            stagesCompleted: data.stagesCompleted || 0,
            totalStages: 5 // Default fallback
        };
    },

    isStageUnlocked(chapterId, stageNumber) {
        if (stageNumber === 1) return true;
        const prevStage = stageNumber - 1;
        return this.isStageCompleted(chapterId, prevStage);
    },

    isStageCompleted(chapterId, stageNumber) {
        const key = `${chapterId}_stage_${stageNumber}`;
        return this.data.completedStages.includes(key);
    },

    getStageStars(chapterId, stageNumber) {
        // Simulação: retorna estrelas baseadas em "score" salvo (ainda não implementado fully no save)
        // Em produção, viria de this.data.scores[chapterId][stageNumber]
        const key = `${chapterId}_stage_${stageNumber}`;
        if (this.isStageCompleted(chapterId, stageNumber)) {
            return 3; // Demo: sempre 3 estrelas se completou
        }
        return 0;
    },
    
    addXP(amount) {
        this.user.xp = (this.user.xp || 0) + amount;
        this.save();
    },
    
    addGems(amount) {
        this.user.gems = (this.user.gems || 0) + amount;
        this.save();
    }
    
    // ... (restante do código existente: init, save, load) ...
};