/**
 * STATE MANAGER - VERSÃO FINAL
 */
window.STATE = {
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
        const saved = localStorage.getItem('eduquest_v4');
        if (saved) {
            try { this.data = JSON.parse(saved); } catch(e) {}
        }
        this.updateUI();
        return this;
    },
    
    save: function() {
        localStorage.setItem('eduquest_v4', JSON.stringify(this.data));
        this.updateUI();
    },
    
    addXP: function(amount) {
        this.data.user.xp += amount;
        this.save();
    },
    
    addGems: function(amount) {
        this.data.user.gems += amount;
        this.save();
    },
    
    updateUI: function() {
        const u = this.data.user;
        const xpEl = document.getElementById('hud-xp');
        const gemEl = document.getElementById('hud-gems');
        if(xpEl) xpEl.innerText = u.xp;
        if(gemEl) gemEl.innerText = u.gems;
    }
};