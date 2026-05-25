const Audio = {
  sounds: {},
  enabled: true,
  
  init() {
    // Create audio elements (will load from assets/sounds/)
    this.sounds = {
      correct: new Audio('assets/sounds/correct.mp3'),
      wrong: new Audio('assets/sounds/wrong.mp3'),
      complete: new Audio('assets/sounds/complete.mp3'),
      click: new Audio('assets/sounds/click.mp3')
    };
    
    // Set volumes
    Object.values(this.sounds).forEach(sound => {
      sound.volume = 0.3;
    });
  },
  
  play(soundName) {
    if (!this.enabled || !this.sounds[soundName]) return;
    
    const sound = this.sounds[soundName].cloneNode();
    sound.volume = 0.3;
    sound.play().catch(() => {}); // Ignore errors
  },
  
  toggle() {
    this.enabled = !this.enabled;
    return this.enabled;
  }
};