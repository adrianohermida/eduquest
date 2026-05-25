const App = {
  currentView: 'home',
  
  init() {
    State.init();
    Audio.init();
    Modal.init();
    this.renderLayout();
    this.bindEvents();
    this.showHome();
  },
  
  renderLayout() {
    const stagesCompleted = Object.keys(State.data.stageProgress || {})
      .filter(s => (State.data.stageProgress[s].correct / State.data.stageProgress[s].answered) >= 0.7);
    
    document.getElementById('app').innerHTML = `
      ${Sidebar.render(State.data.currentSubject, State.data.currentStage, stagesCompleted)}
      <main class="main-content" id="main-content"></main>
      ${RightPanel.render(State.data.stats, State.data.mistakes, State.data.currentStage)}
    `;
    Sidebar.init((stage) => this.startStage(stage), (mode) => this.setMode(mode));
    RightPanel.init(() => this.showMistakeReview());
  },
  
  bindEvents() {
    // Global keyboard shortcuts
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') Modal.hide();
      if (e.key === ' ' && this.currentView === 'flashcards') {
        e.preventDefault();
        document.querySelector('.flashcard-inner')?.classList.toggle('flipped');
      }
    });
  },
  
  showHome() {
    this.currentView = 'home';
    const chapter = CHAPTERS[State.data.currentSubject]?.cap7;
    
    Utils.$('#main-content').innerHTML = `
      <div class="text-center py-4 animate-fade">
        <div class="card mb-4">
          <div class="text-4xl mb-2">${chapter?.icon || '🔬'}</div>
          <h1 class="text-xl font-bold mb-1">${chapter?.title || 'Capítulo 7'}</h1>
          <p class="text-slate-500 text-sm">${chapter?.summary?.intro || ''}</p>
        </div>
        
        <div class="card mb-4">
          <p class="font-semibold mb-3">🗺️ Sua Jornada</p>
          <div class="stage-path">
            ${Object.entries(CONFIG.stages).map(([id, stage]) => {
              const progress = State.data.stageProgress?.[id];
              const acc = progress?.answered > 0 ? Math.round(progress.correct/progress.answered*100) : 0;
              const completed = acc >= 70;
              const locked = id > 1 && !State.data.stageProgress?.[id-1]?.answered;
              
              return `
                <div class="stage-node ${completed ? 'completed' : id == State.data.currentStage ? 'active' : ''} ${locked ? 'locked' : ''}" 
                     data-stage="${id}" ${locked ? 'title="Complete a etapa anterior"' : ''}>
                  ${completed ? '✅' : stage.icon}
                </div>
                ${id < 4 ? `<div class="stage-connector ${completed ? 'completed' : ''}"></div>` : ''}
              `;
            }).join('')}
          </div>
        </div>
        
        <button id="btn-start-stage" class="btn btn-primary mb-2">
          ▶️ Continuar Etapa ${State.data.currentStage}
        </button>
        
        <div class="btn-group">
          <button id="btn-review" class="btn btn-secondary">📖 Revisar Erros</button>
          <button id="btn-stats" class="btn btn-outline">📊 Estatísticas</button>
        </div>
      </div>
    `;
    
    Utils.$('#btn-start-stage').onclick = () => this.startStage(State.data.currentStage);
    Utils.$('#btn-review').onclick = () => this.showMistakeReview();
    Utils.$('#btn-stats').onclick = () => this.showStats();
    
    Utils.$$('.stage-node:not(.locked)').forEach(node => {
      node.onclick = () => this.startStage(parseInt(node.dataset.stage));
    });
  },
  
  startStage(stageId) {
    State.data.currentStage = stageId;
    const chapter = CHAPTERS[State.data.currentSubject].cap7;
    const stage = chapter.stages[stageId];
    
    this.currentView = 'summary';
    Utils.$('#main-content').innerHTML = `
      <div class="animate-fade">
        <div class="card mb-4">
          <div class="card-header">
            <span class="text-2xl">${stage.icon}</span>
            <h2 class="card-title">${stage.title}</h2>
          </div>
          ${ProgressBar.create('Leitura Obrigatória', 0, 100)}
          <p class="text-sm text-slate-500 mb-3">⏱️ Tempo estimado: ${stage.readTime}s</p>
        </div>
        
        ${SummaryCard.createList(chapter.summary.sections.find(s => s.title.includes(stage.name.split(':')[1]?.trim()))?.items || [])}
        
        ${SummaryCard.createQuickTable(chapter.summary.sections.find(s => s.table)?.table || [])}
        
        ${chapter.summary.sections.find(s => s.macetes)?.macetes.map(m => 
          SummaryCard.createMacete(m.title, m.content)
        ).join('') || ''}
        
        <button id="btn-next-flashcards" class="btn btn-primary" disabled>
          Continuar para Flashcards ➜
        </button>
      </div>
    `;
    
    // Reading timer
    let elapsed = 0;
    const total = stage.readTime * 10;
    const timer = setInterval(() => {
      elapsed++;
      const percent = Math.min(100, Math.round((elapsed / total) * 100));
      const bar = Utils.$('.progress-fill');
      if (bar) bar.style.width = percent + '%';
      if (percent >= 100) {
        clearInterval(timer);
        Utils.$('#btn-next-flashcards').disabled = false;
        Utils.$('#btn-next-flashcards').classList.add('glow');
      }
    }, 100);
    
    Utils.$('#btn-next-flashcards').onclick = () => this.showFlashcards(stageId);
  },
  
  showFlashcards(stageId) {
    this.currentView = 'flashcards';
    const cards = CHAPTERS[State.data.currentSubject].cap7.summary.sections
      .flatMap(s => s.items || []).slice(0, 5).map(i => ({q: i.title, a: i.text}));
    
    Utils.$('#main-content').innerHTML = `
      <div class="card text-center animate-fade">
        <h3 class="font-bold mb-2">📇 Flashcards</h3>
        <p class="text-sm text-slate-500 mb-3">Toque para virar • Espaço para próximo</p>
        ${Flashcard.createList(cards)}
        <button id="btn-next-review" class="btn btn-primary mt-4">Ir para Revisão ➜</button>
      </div>
    `;
    
    Flashcard.init(Utils.$('#main-content'));
    Utils.$('#btn-next-review').onclick = () => this.showMiniReview(stageId);
  },
  
  showMiniReview(stageId) {
    this.currentView = 'review';
    const questions = CAP7_QUESTIONS.filter(q => q.stage === stageId && q.difficulty === 'easy').slice(0, 3);
    
    Utils.$('#main-content').innerHTML = `
      <div class="animate-fade">
        <h3 class="font-bold mb-4 text-center">🔄 Mini Revisão</h3>
        ${questions.map((q, i) => QuestionCard.create(q)).join('')}
        <button id="btn-start-quiz" class="btn btn-primary mt-4">
          Iniciar Quiz Principal ➜
        </button>
      </div>
    `;
    
    // Simple answer checking for mini review
    Utils.$$('#main-content .option').forEach(btn => {
      btn.onclick = function() {
        const card = this.closest('.card');
        const qid = parseInt(card.dataset.qid);
        const question = CAP7_QUESTIONS.find(q => q.id === qid);
        const selected = parseInt(this.dataset.idx);
        
        Utils.$$('#main-content .option').forEach(b => b.disabled = true);
        QuestionCard.markAnswer(card, selected, question.c, selected === question.c);
        
        if (selected === question.c) {
          Audio.play('correct');
          Utils.confetti();
        } else {
          Audio.play('wrong');
          State.addMistake(question);
        }
      };
    });
    
    Utils.$('#btn-start-quiz').onclick = () => this.startQuiz(stageId);
  },
  
  startQuiz(stageId) {
    this.currentView = 'quiz';
    let pool = CAP7_QUESTIONS.filter(q => q.stage === stageId);
    
    // Modo intensivo: prioriza erros
    if (State.data.mode === 'intensive' && State.data.mistakes.length > 0) {
      const mistakeIds = State.data.mistakes.map(m => m.id);
      pool = [...pool.filter(q => mistakeIds.includes(q.id)), ...pool];
    }
    
    State.data.quizPool = Utils.shuffle(pool).slice(0, 10);
    State.data.quizIndex = 0;
    this.nextQuestion();
  },
  
  nextQuestion() {
    if (State.data.lives <= 0 && State.data.mode !== 'exam') return this.endQuiz(true);
    
    const q = State.data.quizPool[State.data.quizIndex];
    if (!q) return this.endQuiz(false);
    
    Utils.$('#main-content').innerHTML = QuestionCard.create(q);
    
    // Answer handling
    Utils.$$('#main-content .option').forEach(btn => {
      btn.onclick = function() {
        Utils.$$('#main-content .option').forEach(b => b.disabled = true);
        const selected = parseInt(this.dataset.idx);
        const isCorrect = selected === q.c;
        
        QuestionCard.markAnswer(this.closest('.card'), selected, q.c, isCorrect);
        
        if (isCorrect) {
          Audio.play('correct');
          Utils.confetti();
          State.addXP(CONFIG.xp.correct + (State.data.combo * CONFIG.xp.combo));
          State.data.combo++;
          State.data.streak++;
        } else {
          Audio.play('wrong');
          State.data.lives--;
          State.data.combo = 0;
          State.addMistake(q);
        }
        
        State.recordAnswer(isCorrect, q.stage);
        State.save();
        
        // Show explanation modal
        setTimeout(() => {
          Modal.show(`
            <h4 class="font-bold mb-2">${isCorrect ? '✅ Acertou!' : '❌ Errou'}</h4>
            <p class="mb-3">${q.e}</p>
            <button class="btn btn-primary" onclick="App.nextQuestion()">
              ${State.data.quizIndex < State.data.quizPool.length - 1 ? 'Próxima ➜' : 'Ver Resultados'}
            </button>
          `);
          State.data.quizIndex++;
        }, isCorrect ? 500 : 1000);
      };
    });
  },
  
  endQuiz(lostLives) {
    const isPass = !lostLives;
    const accuracy = Math.round(State.data.stats.totalCorrect / State.data.stats.totalAnswered * 100) || 0;
    
    Modal.show(`
      <div class="text-center">
        <div class="text-4xl mb-3">${isPass ? '🏆' : '📚'}</div>
        <h3 class="font-bold text-lg mb-2">${isPass ? 'Etapa Concluída!' : 'Revisão Recomendada'}</h3>
        <p class="text-slate-600 mb-4">${accuracy}% de acerto</p>
        
        ${ProgressBar.create('Progresso da Etapa', State.data.stageProgress?.[State.data.currentStage]?.correct || 0, 10)}
        
        <div class="btn-group mt-4">
          <button class="btn btn-primary" onclick="App.startStage(${State.data.currentStage})">🔄 Refazer</button>
          ${State.data.mistakes.length > 0 ? `<button class="btn btn-secondary" onclick="App.showMistakeReview()">📖 Revisar Erros</button>` : ''}
        </div>
        <button class="btn btn-outline mt-2" onclick="App.showHome()">🏠 Menu</button>
      </div>
    `, () => {
      if (isPass && State.data.currentStage < 4) {
        State.data.currentStage++;
        this.showHome();
      }
    });
    
    Audio.play('complete');
  },
  
  showMistakeReview() {
    this.currentView = 'mistakes';
    Utils.$('#main-content').innerHTML = StatsPanel.renderMistakeReview(State.data.mistakes);
    
    // Mark as learned
    Utils.$$('#main-content [data-mistake-id]').forEach(btn => {
      btn.onclick = function() {
        const id = parseInt(this.dataset.mistakeId);
        State.removeMistake(id);
        State.addXP(15);
        State.save();
        this.closest('.mistake-item').style.opacity = '0.5';
        this.disabled = true;
        this.textContent = '✅ Aprendido!';
        RightPanel.update(State.data.stats, State.data.mistakes, State.data.currentStage);
      };
    });
    
    // Bonus quiz for mistakes
    Utils.$('#btn-bonus-quiz')?.addEventListener('click', () => {
      const bonusQuestions = State.data.mistakes.slice(0, 3).map(m => 
        CAP7_QUESTIONS.find(q => q.id === m.id)
      ).filter(q => q);
      
      if (bonusQuestions.length > 0) {
        State.data.quizPool = bonusQuestions;
        State.data.quizIndex = 0;
        this.nextQuestion();
      }
    });
  },
  
  showStats() {
    this.currentView = 'stats';
    Utils.$('#main-content').innerHTML = StatsPanel.render(State.data);
  },
  
  setMode(mode) {
    State.data.mode = mode;
    if (mode === 'intensive') {
      State.data.mistakes.forEach(m => m.attempts = 0);
    }
    this.showHome();
  }
};

// Initialize on load
document.addEventListener('DOMContentLoaded', () => App.init());