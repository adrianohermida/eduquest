/**
 * EduQuest - Aplicação Principal
 * Entry point para GitHub Pages (Vanilla JS sem bundler)
 */

// ============================================
// CARREGAMENTO DE DADOS GLOBAIS
// ============================================
// Os dados são carregados via tags <script> no HTML
// Esta função garante que tudo esteja disponível antes de iniciar

function waitForData() {
  return new Promise((resolve) => {
    const checkData = setInterval(() => {
      if (typeof CONFIG !== 'undefined' && 
          typeof State !== 'undefined' && 
          typeof CHAPTERS !== 'undefined') {
        clearInterval(checkData);
        resolve();
      }
    }, 100);
    
    // Timeout de segurança
    setTimeout(() => {
      clearInterval(checkData);
      console.warn('⚠️ Alguns dados podem não ter carregado completamente');
      resolve();
    }, 3000);
  });
}

// ============================================
// ROUTER SIMPLES
// ============================================
const Router = {
  currentRoute: 'home',
  params: {},
  
  init() {
    window.addEventListener('hashchange', () => this.handleRoute());
    this.handleRoute();
  },
  
  handleRoute() {
    const hash = window.location.hash.slice(1) || 'home';
    const [route, ...paramParts] = hash.split('/');
    this.currentRoute = route;
    this.params = this.parseParams(paramParts);
    
    switch(route) {
      case 'home':
        App.renderHome();
        break;
      case 'chapter':
        App.renderChapter(this.params.subject, this.params.chapter);
        break;
      case 'stage':
        App.renderStage(this.params.subject, this.params.chapter, parseInt(this.params.stage));
        break;
      case 'summary':
        App.renderSummary(this.params.subject, this.params.chapter);
        break;
      case 'mistakes':
        App.renderMistakes();
        break;
      default:
        App.renderHome();
    }
  },
  
  parseParams(parts) {
    const params = {};
    if (parts.length >= 1) params.subject = parts[0];
    if (parts.length >= 2) params.chapter = parts[1];
    if (parts.length >= 3) params.stage = parts[2];
    return params;
  },
  
  navigate(route, params = {}) {
    let hash = route;
    if (params.subject) hash += `/${params.subject}`;
    if (params.chapter) hash += `/${params.chapter}`;
    if (params.stage) hash += `/${params.stage}`;
    window.location.hash = hash;
  }
};

// ============================================
// APLICAÇÃO PRINCIPAL
// ============================================
const App = {
  container: null,
  feedbackArea: null,
  checkBtn: null,
  progressBar: null,
  heartsDisplay: null,
  streakDisplay: null,
  
  async init() {
    console.log('🎮 EduQuest Iniciando...');
    
    // Aguardar dados carregarem
    await waitForData();
    
    // Inicializar estado
    State.init();
    
    // Cache DOM elements
    this.container = document.getElementById('game-container');
    this.feedbackArea = document.getElementById('feedback-area');
    this.checkBtn = document.getElementById('check-btn');
    this.progressBar = document.getElementById('progress-bar');
    this.heartsDisplay = document.getElementById('hearts-display');
    this.streakDisplay = document.getElementById('streak-display');
    
    // Setup event listeners
    this.setupEventListeners();
    
    // Update top bar
    this.updateTopBar();
    
    // Start router
    Router.init();
    
    console.log('✅ EduQuest Pronto!');
  },
  
  setupEventListeners() {
    // Check button
    if (this.checkBtn) {
      this.checkBtn.addEventListener('click', () => this.handleCheck());
    }
    
    // Delegação de eventos para opções de questões
    this.container.addEventListener('click', (e) => {
      const option = e.target.closest('.option');
      if (option) {
        this.selectOption(option);
      }
    });
    
    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' && !this.checkBtn.disabled) {
        this.handleCheck();
      }
    });
  },
  
  // ============================================
  // RENDERIZADORES DE TELAS
  // ============================================
  
  renderHome() {
    const subjects = Object.keys(CHAPTERS);
    
    this.container.innerHTML = `
      <div class="home-screen">
        <div class="welcome-header">
          <h1>🎓 EduQuest</h1>
          <p class="subtitle">Aprenda Ciências de forma gamificada!</p>
        </div>
        
        <div class="player-stats">
          <div class="stat-card">
            <span class="stat-icon">⭐</span>
            <span class="stat-value">${State.data.level}</span>
            <span class="stat-label">Nível</span>
          </div>
          <div class="stat-card">
            <span class="stat-icon">✨</span>
            <span class="stat-value">${State.data.xp}</span>
            <span class="stat-label">XP Total</span>
          </div>
          <div class="stat-card">
            <span class="stat-icon">🔥</span>
            <span class="stat-value">${State.data.streak}</span>
            <span class="stat-label">Sequência</span>
          </div>
          <div class="stat-card">
            <span class="stat-icon">🎯</span>
            <span class="stat-value">${State.getAccuracy()}%</span>
            <span class="stat-label">Precisão</span>
          </div>
        </div>
        
        <div class="subjects-grid">
          ${subjects.map(subject => {
            const chapters = CHAPTERS[subject];
            const chapterKeys = Object.keys(chapters);
            
            return `
              <div class="subject-section">
                <h2 class="subject-title">${this.getSubjectIcon(subject)} ${this.capitalize(subject)}</h2>
                <div class="chapters-path">
                  ${chapterKeys.map((capKey, idx) => {
                    const chapter = chapters[capKey];
                    const isLocked = idx > 0 && !this.isChapterCompleted(chapterKeys[idx - 1]);
                    
                    return `
                      <div class="chapter-node ${isLocked ? 'locked' : ''}" data-subject="${subject}" data-chapter="${capKey}">
                        <div class="node-icon">${chapter.icon}</div>
                        <div class="node-title">${chapter.title}</div>
                        ${this.getChapterProgress(subject, capKey)}
                      </div>
                    `;
                  }).join('')}
                </div>
              </div>
            `;
          }).join('')}
        </div>
        
        <div class="quick-actions">
          <button class="btn btn-secondary" onclick="Router.navigate('mistakes')">
            ❌ Revisar Erros (${State.data.mistakes.length})
          </button>
        </div>
      </div>
    `;
    
    // Add click handlers for chapters
    this.container.querySelectorAll('.chapter-node:not(.locked)').forEach(node => {
      node.addEventListener('click', () => {
        const subject = node.dataset.subject;
        const chapter = node.dataset.chapter;
        Router.navigate('chapter', { subject, chapter });
      });
    });
  },
  
  renderChapter(subject, chapterId) {
    const chapter = CHAPTERS[subject]?.[chapterId];
    if (!chapter) {
      this.container.innerHTML = '<div class="error-state">❌ Capítulo não encontrado</div>';
      return;
    }
    
    const stages = chapter.stages || CONFIG.stages;
    const stageKeys = Object.keys(stages);
    
    this.container.innerHTML = `
      <div class="chapter-screen">
        <button class="back-btn" onclick="Router.navigate('home')">← Voltar</button>
        
        <div class="chapter-header" style="border-color: ${chapter.color || '#10b981'}">
          <span class="chapter-icon">${chapter.icon}</span>
          <div class="chapter-info">
            <h1>${chapter.title}</h1>
            <p>${chapter.description || 'Domine este capítulo completando todas as etapas!'}</p>
          </div>
        </div>
        
        <div class="stages-list">
          ${stageKeys.map((stageKey, idx) => {
            const stage = stages[stageKey];
            const stageNum = parseInt(stageKey);
            const isLocked = idx > 0 && !this.isStageCompleted(subject, chapterId, stageNum - 1);
            const progress = this.getStageProgress(subject, chapterId, stageNum);
            
            return `
              <div class="stage-item ${isLocked ? 'locked' : ''} ${progress.completed ? 'completed' : ''}" 
                   data-stage="${stageNum}">
                <div class="stage-number">${stage.icon}</div>
                <div class="stage-info">
                  <h3>${stage.name}</h3>
                  <p>⏱️ ${stage.readTime} min • ${stage.questions || '?'} questões</p>
                  ${progress.completed ? '<span class="completed-badge">✓ Completo</span>' : ''}
                </div>
                <div class="stage-stars">
                  ${this.renderStars(progress.stars || 0)}
                </div>
              </div>
            `;
          }).join('')}
        </div>
        
        <div class="chapter-summary-preview">
          <button class="btn btn-outline" onclick="Router.navigate('summary', { subject: '${subject}', chapter: '${chapterId}' })">
            📖 Ver Resumo Completo
          </button>
        </div>
      </div>
    `;
    
    // Add click handlers for stages
    this.container.querySelectorAll('.stage-item:not(.locked)').forEach(item => {
      item.addEventListener('click', () => {
        const stageNum = parseInt(item.dataset.stage);
        Router.navigate('stage', { subject, chapter: chapterId, stage: stageNum });
      });
    });
  },
  
  renderStage(subject, chapterId, stageNum) {
    const chapter = CHAPTERS[subject]?.[chapterId];
    if (!chapter) {
      this.container.innerHTML = '<div class="error-state">❌ Capítulo não encontrado</div>';
      return;
    }
    
    const stages = chapter.stages || CONFIG.stages;
    const stage = stages[stageNum];
    
    if (!stage) {
      this.container.innerHTML = '<div class="error-state">❌ Etapa não encontrada</div>';
      return;
    }
    
    // Carregar questões do questions.js ou do stage
    const questions = this.getQuestionsForStage(subject, chapterId, stageNum);
    
    State.data.currentQuestionIndex = 0;
    State.data.currentQuestions = questions;
    State.data.currentStageNum = stageNum;
    State.data.currentSubject = subject;
    State.data.currentChapter = chapterId;
    
    this.container.innerHTML = `
      <div class="stage-screen">
        <div class="stage-header">
          <button class="back-btn" onclick="Router.navigate('chapter', { subject: '${subject}', chapter: '${chapterId}' })">← Sair</button>
          <span class="stage-title">${stage.icon} ${stage.name}</span>
          <span class="stage-progress">${State.data.currentQuestionIndex + 1}/${questions.length}</span>
        </div>
        
        <div class="question-container">
          ${QuestionCard.create(questions[0])}
        </div>
      </div>
    `;
    
    this.updateProgressBar(0, questions.length);
  },
  
  renderSummary(subject, chapterId) {
    const chapter = CHAPTERS[subject]?.[chapterId];
    if (!chapter || !chapter.summary) {
      this.container.innerHTML = '<div class="error-state">❌ Resumo não disponível</div>';
      return;
    }
    
    const summary = chapter.summary;
    
    this.container.innerHTML = `
      <div class="summary-screen">
        <button class="back-btn" onclick="Router.navigate('chapter', { subject: '${subject}', chapter: '${chapterId}' })">← Voltar ao Capítulo</button>
        
        <div class="summary-header">
          <h1>📖 Resumo: ${chapter.title}</h1>
          <p class="intro-text">${summary.intro}</p>
        </div>
        
        <div class="summary-content">
          ${summary.sections.map(section => `
            <div class="summary-section">
              <h2>${section.title}</h2>
              ${section.items ? `
                <div class="items-grid">
                  ${section.items.map(item => `
                    <div class="summary-item">
                      <span class="item-icon">${item.icon}</span>
                      <div>
                        <strong>${item.title}</strong>
                        <p>${item.text}</p>
                      </div>
                    </div>
                  `).join('')}
                </div>
              ` : ''}
              ${section.table ? `
                <table class="info-table">
                  ${section.table.map(row => `
                    <tr>
                      <td><strong>${row.term}</strong></td>
                      <td>${row.meaning}</td>
                    </tr>
                  `).join('')}
                </table>
              ` : ''}
              ${section.macetes ? `
                <div class="macetes-box">
                  ${section.macetes.map(macete => `
                    <div class="macete">
                      <span class="macete-icon">💡</span>
                      <div>
                        <strong>${macete.title}</strong>
                        <p>${macete.content}</p>
                      </div>
                    </div>
                  `).join('')}
                </div>
              ` : ''}
            </div>
          `).join('')}
        </div>
        
        <div class="macetes-finais">
          <h3>🎯 Macetes Finais</h3>
          <ul>
            ${summary.macetesFinais.map(macete => `<li>${macete}</li>`).join('')}
          </ul>
        </div>
        
        <div class="prioridades">
          <h3>⭐ Prioridades para a Prova</h3>
          <div class="prioridades-list">
            ${summary.prioridades.map(p => `<span class="prioridade-tag">${p}</span>`).join('')}
          </div>
        </div>
        
        <button class="btn btn-primary btn-large" onclick="Router.navigate('stage', { subject: '${subject}', chapter: '${chapterId}', stage: 1 })">
          🚀 Começar Prática
        </button>
      </div>
    `;
  },
  
  renderMistakes() {
    const mistakes = State.data.mistakes;
    
    if (mistakes.length === 0) {
      this.container.innerHTML = `
        <div class="empty-state">
          <span class="empty-icon">🎉</span>
          <h2>Sem erros para revisar!</h2>
          <p>Você está indo muito bem! Continue assim.</p>
          <button class="btn btn-primary" onclick="Router.navigate('home')">Voltar ao Início</button>
        </div>
      `;
      return;
    }
    
    this.container.innerHTML = `
      <div class="mistakes-screen">
        <button class="back-btn" onclick="Router.navigate('home')">← Voltar</button>
        
        <div class="mistakes-header">
          <h1>❌ Revisão de Erros</h1>
          <p>${mistakes.length} questão(ões) para revisar</p>
        </div>
        
        <div class="mistakes-list">
          ${mistakes.map((mistake, idx) => `
            <div class="mistake-card" data-idx="${idx}">
              <p class="mistake-question">${mistake.question}</p>
              <div class="mistake-answer">
                <span class="wrong-answer">❌ Sua resposta: ${mistake.wrongAnswer || '?'}</span>
                <span class="correct-answer">✅ Correta: ${mistake.correctAnswer}</span>
              </div>
              <p class="mistake-explanation">💡 ${mistake.explanation}</p>
              <button class="btn btn-sm btn-success mark-correct" data-idx="${idx}">
                ✓ Marque como Aprendido
              </button>
            </div>
          `).join('')}
        </div>
      </div>
    `;
    
    // Add handlers for marking as learned
    this.container.querySelectorAll('.mark-correct').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const idx = parseInt(e.target.dataset.idx);
        const mistake = mistakes[idx];
        State.removeMistake(mistake.id);
        State.save();
        this.renderMistakes();
        this.updateTopBar();
      });
    });
  },
  
  // ============================================
  // LÓGICA DO JOGO
  // ============================================
  
  selectOption(optionEl) {
    const card = optionEl.closest('.card');
    const options = card.querySelectorAll('.option');
    
    options.forEach(opt => opt.classList.remove('selected'));
    optionEl.classList.add('selected');
    
    State.data.selectedOption = parseInt(optionEl.dataset.idx);
    this.checkBtn.disabled = false;
  },
  
  handleCheck() {
    const currentQuestion = State.data.currentQuestions[State.data.currentQuestionIndex];
    const selectedIdx = State.data.selectedOption;
    const correctIdx = currentQuestion.c;
    const isCorrect = selectedIdx === correctIdx;
    
    // Mark answer visually
    const card = this.container.querySelector('.card');
    QuestionCard.markAnswer(card, selectedIdx, correctIdx, isCorrect);
    
    // Record result
    State.recordAnswer(isCorrect, State.data.currentStageNum);
    
    if (isCorrect) {
      // Calculate XP
      const baseXP = CONFIG.xp.correct;
      const comboBonus = State.data.combo * CONFIG.xp.combo;
      const difficultyMultiplier = CONFIG.difficulty[currentQuestion.difficulty].multiplier;
      const totalXP = Math.round((baseXP + comboBonus) * difficultyMultiplier);
      
      const leveledUp = State.addXP(totalXP);
      
      this.showFeedback(true, currentQuestion.e, totalXP, leveledUp);
    } else {
      State.addMistake({
        id: currentQuestion.id,
        stage: State.data.currentStageNum,
        q: currentQuestion.q,
        alt: currentQuestion.alt,
        c: currentQuestion.c,
        e: currentQuestion.e,
        wrongAnswer: currentQuestion.alt[selectedIdx]
      });
      
      this.showFeedback(false, currentQuestion.e);
    }
    
    State.save();
    this.updateTopBar();
    
    // Prepare next question or complete stage
    setTimeout(() => {
      State.data.currentQuestionIndex++;
      
      if (State.data.currentQuestionIndex >= State.data.currentQuestions.length) {
        this.completeStage();
      } else {
        this.loadNextQuestion();
      }
    }, 3000);
  },
  
  showFeedback(isCorrect, explanation, xp = 0, leveledUp = false) {
    this.feedbackArea.classList.remove('hidden');
    
    if (isCorrect) {
      this.feedbackArea.className = 'feedback-area feedback-correct';
      let message = leveledUp ? '🎉 CORRETO! Você subiu de nível!' : '✅ CORRETO!';
      message += ` +${xp} XP`;
      this.feedbackArea.querySelector('#feedback-text').innerHTML = `
        <strong>${message}</strong><br>
        <small>${explanation}</small>
      `;
    } else {
      this.feedbackArea.className = 'feedback-area feedback-wrong';
      this.feedbackArea.querySelector('#feedback-text').innerHTML = `
        <strong>❌ INCORRETO</strong><br>
        <small>${explanation}</small>
      `;
    }
  },
  
  loadNextQuestion() {
    const question = State.data.currentQuestions[State.data.currentQuestionIndex];
    const container = this.container.querySelector('.question-container');
    container.innerHTML = QuestionCard.create(question);
    
    this.checkBtn.disabled = true;
    this.feedbackArea.classList.add('hidden');
    
    const total = State.data.currentQuestions.length;
    const current = State.data.currentQuestionIndex + 1;
    this.updateProgressBar(current, total);
    
    this.container.querySelector('.stage-progress').textContent = `${current}/${total}`;
  },
  
  completeStage() {
    const stageNum = State.data.currentStageNum;
    const accuracy = State.getAccuracy();
    const stars = accuracy >= 90 ? 3 : accuracy >= 70 ? 2 : accuracy >= 50 ? 1 : 0;
    
    // Save stage completion
    const key = `${State.data.currentSubject}_${State.data.currentChapter}_${stageNum}`;
    State.data.stageProgress[key] = {
      completed: true,
      stars: stars,
      accuracy: accuracy,
      date: new Date().toISOString()
    };
    
    // Bonus XP for stage completion
    const completionXP = CONFIG.xp.stageComplete + (stars * 20);
    const leveledUp = State.addXP(completionXP);
    
    this.container.innerHTML = `
      <div class="stage-complete">
        <div class="completion-icon">${stars === 3 ? '🏆' : stars === 2 ? '🥈' : stars === 1 ? '🥉' : '💪'}</div>
        <h2>Etapa Completa!</h2>
        <div class="stage-results">
          <div class="result-item">
            <span class="result-label">Precisão</span>
            <span class="result-value">${accuracy}%</span>
          </div>
          <div class="result-item">
            <span class="result-label">Estrelas</span>
            <span class="result-value">${this.renderStars(stars)}</span>
          </div>
          <div class="result-item">
            <span class="result-label">XP Ganho</span>
            <span class="result-value">+${completionXP}</span>
          </div>
        </div>
        ${leveledUp ? '<div class="level-up-banner">🎉 NÍVEL UP! Você alcançou o nível ' + State.data.level + '!</div>' : ''}
        <div class="completion-actions">
          <button class="btn btn-primary" onclick="Router.navigate('chapter', { subject: '${State.data.currentSubject}', chapter: '${State.data.currentChapter}' })">
            Voltar ao Capítulo
          </button>
          ${this.canAdvanceToNextStage() ? `
            <button class="btn btn-success" onclick="Router.navigate('stage', { subject: '${State.data.currentSubject}', chapter: '${State.data.currentChapter}', stage: ${stageNum + 1} })">
              Próxima Etapa →
            </button>
          ` : ''}
        </div>
      </div>
    `;
    
    State.save();
  },
  
  canAdvanceToNextStage() {
    const nextStage = State.data.currentStageNum + 1;
    const stages = (CHAPTERS[State.data.currentSubject]?.[State.data.currentChapter]?.stages) || CONFIG.stages;
    return stages[nextStage] !== undefined;
  },
  
  // ============================================
  // UTILITÁRIOS
  // ============================================
  
  updateTopBar() {
    if (this.heartsDisplay) {
      this.heartsDisplay.textContent = '❤️'.repeat(State.data.lives);
    }
    if (this.streakDisplay) {
      this.streakDisplay.textContent = `🔥 ${State.data.streak}`;
    }
  },
  
  updateProgressBar(current, total) {
    if (this.progressBar) {
      const percent = (current / total) * 100;
      this.progressBar.style.width = `${percent}%`;
    }
  },
  
  getQuestionsForStage(subject, chapterId, stageNum) {
    // Tenta pegar questões específicas do stage
    const chapter = CHAPTERS[subject]?.[chapterId];
    
    // Se houver questões no global questions.js, filtra por stage
    if (typeof QUESTIONS !== 'undefined' && QUESTIONS[subject]) {
      const chapterQuestions = QUESTIONS[subject][chapterId] || QUESTIONS[subject][stageNum] || [];
      if (chapterQuestions.length > 0) {
        return chapterQuestions.slice(0, 10); // 10 questões por stage
      }
    }
    
    // Fallback: gera questões placeholder
    return this.generatePlaceholderQuestions(stageNum, 10);
  },
  
  generatePlaceholderQuestions(stageNum, count) {
    return Array.from({ length: count }, (_, i) => ({
      id: `stage${stageNum}_q${i}`,
      stage: stageNum,
      difficulty: i < 3 ? 'easy' : i < 7 ? 'medium' : 'hard',
      category: 'Ciências',
      q: `Questão ${i + 1} da Etapa ${stageNum} - Em desenvolvimento`,
      alt: ['Opção A', 'Opção B', 'Opção C', 'Opção D'],
      c: 0,
      e: 'Esta questão será implementada em breve.'
    }));
  },
  
  getSubjectIcon(subject) {
    const icons = {
      ciencias: '🔬',
      matematica: '📐',
      historia: '📜',
      geografia: '🌍',
      portugues: '📚'
    };
    return icons[subject] || '📖';
  },
  
  capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  },
  
  isChapterCompleted(chapterKey) {
    // Simplificado: verifica se há algum progresso
    return true; // TODO: Implementar lógica real
  },
  
  isStageCompleted(subject, chapterId, stageNum) {
    const key = `${subject}_${chapterId}_${stageNum}`;
    return State.data.stageProgress[key]?.completed || false;
  },
  
  getChapterProgress(subject, chapterId) {
    const chapter = CHAPTERS[subject]?.[chapterId];
    const stages = chapter?.stages || CONFIG.stages;
    const stageKeys = Object.keys(stages);
    
    let completed = 0;
    let totalStars = 0;
    
    stageKeys.forEach(key => {
      const stageNum = parseInt(key);
      const progKey = `${subject}_${chapterId}_${stageNum}`;
      const progress = State.data.stageProgress[progKey];
      if (progress?.completed) {
        completed++;
        totalStars += progress.stars || 0;
      }
    });
    
    const maxStars = stageKeys.length * 3;
    const percent = Math.round((completed / stageKeys.length) * 100);
    
    return `
      <div class="chapter-progress">
        <div class="progress-mini">
          <div class="progress-mini-bar" style="width: ${percent}%"></div>
        </div>
        <span class="progress-text">${completed}/${stageKeys.length} • ${this.renderStars(totalStars)}</span>
      </div>
    `;
  },
  
  getStageProgress(subject, chapterId, stageNum) {
    const key = `${subject}_${chapterId}_${stageNum}`;
    return State.data.stageProgress[key] || { completed: false, stars: 0 };
  },
  
  renderStars(count) {
    return '★'.repeat(count) + '☆'.repeat(3 - count);
  }
};

// ============================================
// INICIALIZAÇÃO
// ============================================
document.addEventListener('DOMContentLoaded', () => {
  App.init();
});
