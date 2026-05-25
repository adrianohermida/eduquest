const AudioSys = {
  sounds: {},
  enabled: true,
  speechEnabled: true,
  speechRate: 1,
  speechPitch: 1,
  
  init() {
    // Carregar sons (se existirem)
    this.sounds = {
      correct: new Audio('assets/sounds/correct.wav'),
      wrong: new Audio('assets/sounds/wrong.wav'),
      complete: new Audio('assets/sounds/complete.mp3'),
      click: new Audio('assets/sounds/click.wav')
    };
    
    Object.values(this.sounds).forEach(sound => {
      sound.volume = 0.3;
      sound.addEventListener('error', () => {
        console.log('Som não encontrado - usando fallback silencioso');
      });
    });
    
    // Verificar suporte a speech
    this.speechEnabled = 'speechSynthesis' in window;
  },
  
  play(soundName) {
    if (!this.enabled) return;
    const sound = this.sounds[soundName];
    if (sound) {
      sound.currentTime = 0;
      sound.play().catch(() => {});
    }
  },
  
  // Text-to-Speech
  speak(text, options = {}) {
    if (!this.speechEnabled || !text) return;
    
    // Cancelar fala anterior
    window.speechSynthesis.cancel();
    
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.rate = options.rate || this.speechRate;
    utterance.pitch = options.pitch || this.speechPitch;
    utterance.volume = options.volume || 1;
    
    // Tentar usar voz em português
    const voices = window.speechSynthesis.getVoices();
    const ptVoice = voices.find(v => v.lang.includes('pt-BR') || v.lang.includes('pt'));
    if (ptVoice) utterance.voice = ptVoice;
    
    window.speechSynthesis.speak(utterance);
  },
  
  stopSpeaking() {
    window.speechSynthesis.cancel();
  },
  
  toggle() {
    this.enabled = !this.enabled;
    return this.enabled;
  },
  
  toggleSpeech() {
    this.speechEnabled = !this.speechEnabled;
    if (!this.speechEnabled) this.stopSpeaking();
    return this.speechEnabled;
  }
};

// Carregar vozes quando disponíveis
if ('speechSynthesis' in window) {
  window.speechSynthesis.onvoiceschanged = () => {
    // Vozes carregadas
  };
}