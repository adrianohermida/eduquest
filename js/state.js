const State = {
  data: {
    xp: 0,
    level: 1,
    streak: 0,
    combo: 0,
    lives: 5,
    currentStage: 1,
    currentSubject: 'ciencias',
    mistakes: [],
    stats: {
      totalAnswered: 0,
      totalCorrect: 0,
      stagesCompleted: [],
      timeSpent: 0
    },
    stageProgress: {},
    lastPlayed: null
  },
  
  init() {
    const saved = localStorage.getItem(CONFIG.storageKey);
    if (saved) {
      const parsed = JSON.parse(saved);
      this.data = { ...this.data, ...parsed };
    }
    this.checkLifeRecovery();
  },
  
  save() {
    this.data.lastPlayed = new Date().toISOString();
    localStorage.setItem(CONFIG.storageKey, JSON.stringify(this.data));
  },
  
  addXP(amount) {
    this.data.xp += amount;
    const needed = this.data.level * CONFIG.xp.levelBase;
    if (this.data.xp >= needed) {
      this.data.level++;
      this.data.lives = CONFIG.lives.max;
      return true; // Leveled up
    }
    return false;
  },
  
  addMistake(question) {
    if (!this.data.mistakes.find(m => m.id === question.id)) {
      this.data.mistakes.push({
        id: question.id,
        stage: question.stage,
        question: question.q,
        correctAnswer: question.alt[question.c],
        explanation: question.e,
        attempts: 1
      });
    }
  },
  
  removeMistake(questionId) {
    this.data.mistakes = this.data.mistakes.filter(m => m.id !== questionId);
  },
  
  recordAnswer(isCorrect, stage) {
    this.data.stats.totalAnswered++;
    if (isCorrect) {
      this.data.stats.totalCorrect++;
      this.data.combo++;
      this.data.streak++;
    } else {
      this.data.combo = 0;
      this.data.lives = Math.max(0, this.data.lives - 1);
    }
    
    if (!this.data.stageProgress[stage]) {
      this.data.stageProgress[stage] = { answered: 0, correct: 0 };
    }
    this.data.stageProgress[stage].answered++;
    if (isCorrect) {
      this.data.stageProgress[stage].correct++;
    }
  },
  
  checkLifeRecovery() {
    if (this.data.lastPlayed) {
      const hoursPassed = (Date.now() - new Date(this.data.lastPlayed).getTime()) / CONFIG.lives.recoveryTime;
      const livesToAdd = Math.floor(hoursPassed);
      if (livesToAdd > 0) {
        this.data.lives = Math.min(CONFIG.lives.max, this.data.lives + livesToAdd);
      }
    }
  },
  
  getAccuracy() {
    if (this.data.stats.totalAnswered === 0) return 0;
    return Math.round((this.data.stats.totalCorrect / this.data.stats.totalAnswered) * 100);
  }
};