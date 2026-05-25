const STATE = {
    data: {
        user: { name: 'Heroi', level: 1, xp: 0, gems: 0, hearts: 5, streak: 1, theme: 'clear' },
        progress: {}
    },
    init: function() {
        const saved = localStorage.getItem('eduquest_v4');
        if (saved) this.data = JSON.parse(saved);
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
        const xpEl = document.getElementById('xp-display');
        const gemsEl = document.getElementById('gems-display');
        const heartsEl = document.getElementById('hearts-display');
        if(xpEl) xpEl.innerText = u.xp;
        if(gemsEl) gemsEl.innerText = u.gems;
        if(heartsEl) heartsEl.innerText = u.hearts;
    }
};
window.STATE = STATE;