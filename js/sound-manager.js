/**
 * EDUQUEST SOUND MANAGER v2.0
 * Web Audio API synthesized sounds + file fallbacks
 * Click: crispy synthesized tap (no .wav dependency)
 */

const SoundManager = {
    sounds:  {},
    muted:   false,
    loaded:  false,
    _actx:   null,

    CATALOG: {
        correct:  'assets/sounds/correct.wav',
        wrong:    'assets/sounds/wrong.wav',
        complete: 'assets/sounds/complete.mp3'
        // 'click' is synthesized via Web Audio API — no file needed
    },

    init() {
        this.muted = localStorage.getItem('eq_muted') === 'true';
        this._updateMuteBtn();
        // Lazy-load file sounds after first interaction (browser policy)
        const loadOnce = () => {
            this._preload();
            window.removeEventListener('click',      loadOnce);
            window.removeEventListener('touchstart', loadOnce);
        };
        window.addEventListener('click',      loadOnce, { passive: true });
        window.addEventListener('touchstart', loadOnce, { passive: true });
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

    _getAudioContext() {
        if (!this._actx) {
            try {
                this._actx = new (window.AudioContext || window.webkitAudioContext)();
            } catch (e) { return null; }
        }
        // Resume if suspended (Chrome autoplay policy)
        if (this._actx.state === 'suspended') {
            this._actx.resume().catch(() => {});
        }
        return this._actx;
    },

    /**
     * Synthesized "click" — crispy UI tap sound
     * Short pitch-swept tone: 900→350 Hz over 30ms, fades to silence at 90ms
     */
    _playClick() {
        const ctx = this._getAudioContext();
        if (!ctx) return;

        const now  = ctx.currentTime;
        const osc  = ctx.createOscillator();
        const gain = ctx.createGain();

        osc.connect(gain);
        gain.connect(ctx.destination);

        osc.type = 'sine';
        osc.frequency.setValueAtTime(900, now);
        osc.frequency.exponentialRampToValueAtTime(350, now + 0.030);

        gain.gain.setValueAtTime(0.28, now);
        gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.090);

        osc.start(now);
        osc.stop(now + 0.095);
    },

    /**
     * Synthesized "correct" chime — ascending two-tone
     */
    _playCorrectSynth() {
        const ctx = this._getAudioContext();
        if (!ctx) return;
        [[523, 0, 0.25], [659, 0.08, 0.25], [784, 0.16, 0.3]].forEach(([freq, delay, vol]) => {
            const osc  = ctx.createOscillator();
            const gain = ctx.createGain();
            osc.connect(gain); gain.connect(ctx.destination);
            osc.type = 'sine';
            osc.frequency.value = freq;
            const t = ctx.currentTime + delay;
            gain.gain.setValueAtTime(vol, t);
            gain.gain.exponentialRampToValueAtTime(0.0001, t + 0.32);
            osc.start(t); osc.stop(t + 0.35);
        });
    },

    /**
     * Synthesized "wrong" buzz
     */
    _playWrongSynth() {
        const ctx = this._getAudioContext();
        if (!ctx) return;
        const osc  = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.connect(gain); gain.connect(ctx.destination);
        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(200, ctx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(80, ctx.currentTime + 0.18);
        gain.gain.setValueAtTime(0.22, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.22);
        osc.start(ctx.currentTime); osc.stop(ctx.currentTime + 0.25);
    },

    play(name) {
        if (this.muted) return;

        // Synthesized sounds take priority
        if (name === 'click')   { this._playClick();       return; }
        if (name === 'correct') { this._playCorrectSynth(); return; }
        if (name === 'wrong')   { this._playWrongSynth();   return; }

        // File-based fallback
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
