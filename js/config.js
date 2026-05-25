const CONFIG = {
  appName: 'EduQuest',
  version: '1.0.0',
  storageKey: 'eduquest_state',
  
  stages: {
    1: { name: 'Imunidade e Vacinas', icon: '🛡️', readTime: 45 },
    2: { name: 'Doenças Virais', icon: '🦠', readTime: 60 },
    3: { name: 'Doenças Bacterianas', icon: '🧫', readTime: 50 },
    4: { name: 'Revisão Final', icon: '📝', readTime: 40 }
  },
  
  difficulty: {
    easy: { label: 'Fácil', color: '#22c55e', multiplier: 1 },
    medium: { label: 'Médio', color: '#f59e0b', multiplier: 1.5 },
    hard: { label: 'Difícil', color: '#ef4444', multiplier: 2 }
  },
  
  xp: {
    correct: 10,
    combo: 2,
    stageComplete: 50,
    perfectStage: 100,
    levelBase: 100
  },
  
  lives: {
    max: 5,
    recoveryTime: 3600000 // 1 hour
  }
};