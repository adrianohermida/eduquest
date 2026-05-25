/**
 * STATE MANAGER - GERENCIADOR DE ESTADO GLOBAL
 * Versão: 5.0 (Fix Critical Errors)
 */

const STATE = {
    data: {
        user: {
            name: 'Heroi',
            level: 1,
            xp: 0,
            gems: 0,
            hearts: 5,
            streak: 1,
            theme: 'clear'
        },
        progress: {} 
    },

    init: function() {
        try {
            const saved = localStorage.getItem('eduquest_v5');
            if (saved) {
                const parsed = JSON.parse(saved);
                this.data = { ...this.data, ...parsed };
            }
        } catch (e) {
            console.error('Erro no save:', e);
        }
        this.updateUI();
        return this;
    },

    save: function() {
        localStorage.setItem('eduquest_v5', JSON.stringify(this.data));
        this.updateUI();
    },

    addXP: function(amount) {
        this.data.user.xp += amount;
        if (this.data.user.xp >= this.data.user.level * 1000) {
            this.data.user.level++;
            this.data.user.xp = 0;
            alert('LEVEL UP! 🎉');
        }
        this.save();
    },

    addGems: function(amount) {
        this.data.user.gems += amount;
        this.save();
    },

    getUser: function() {
        return this.data.user;
    },

    updateUI: function() {
        // Atualiza HUD se existir
        const xpEl = document.getElementById('hud-xp');
        const gemsEl = document.getElementById('hud-gems');
        if (xpEl) xpEl.innerText = this.data.user.xp;
        if (gemsEl) gemsEl.innerText = this.data.user.gems;
    }
};

// Garante acesso global
window.STATE = STATE;