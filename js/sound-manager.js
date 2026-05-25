/**
 * EDUQUEST SOUND MANAGER v1.0
 * Sistema de áudio gamificado com preload lazy e mute persistente
 */

const SoundManager = {
    sounds: {},
    muted: false,
    loaded: false,

    CATALOG: {
        correct:  'assets/sounds/correct.wav',
        wrong:    'assets/sounds/wrong.wav',
        click:    'assets/sounds/click.wav',
        complete: 'assets/sounds/complete.mp3'
    },

    init() {
        this.muted = localStorage.getItem('eq_muted') === 'true';
        this._updateMuteBtn();
        // Preload na primeira interação do usuário (evita bloqueio do browser)
        const loadOnce = () => {
            this._preload();
            window.removeEventListener('click', loadOnce);
            window.removeEventListener('touchstart', loadOnce);
        };
        window.addEventListener('click', loadOnce);
        window.addEventListener('touchstart', loadOnce);
    },

    _preload() {
        if (this.loaded) return;
        this.loaded = true;
        for (const [name, path] of Object.entries(this.CATALOG)) {
            try {
                const audio = new Audio(path);
                audio.preload = 'auto';
                audio.load();
                this.sounds[name] = audio;
            } catch (e) {}
        }
    },

    play(name) {
        if (this.muted) return;
        const src = this.sounds[name];
        if (!src) return;
        try {
            const clone = src.cloneNode();
            clone.volume = 0.55;
            clone.play().catch(() => {});
        } catch (e) {}
    },

    toggle() {
        this.muted = !this.muted;
        localStorage.setItem('eq_muted', this.muted.toString());
        this._updateMuteBtn();
        return this.muted;
    },

    _updateMuteBtn() {
        const btn = document.getElementById('mute-btn');
        if (btn) btn.textContent = this.muted ? '🔇' : '🔊';
    }
};

window.SoundManager = SoundManager;
