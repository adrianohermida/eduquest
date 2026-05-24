const EduQuest = (() => {
  // Estado global persistente
  const state = {
    subject: 'ciencias',
    stage: 1,
    xp: 0,
    level: 1,
    streak: 0,
    combo: 0,
    lives: 5,
    mistakes: [],
    stats: { answered: 0, correct: 0, time: [] },
    mode: 'learn', // learn, survival, exam, intensive
    step: 0, // 0:home, 1:summary, 2:flashcards, 3:review, 4:quiz
    readProgress: 0,
    readTimer: null,
    quizPool: [],
    quizIndex: 0,
    survivalScore: 0,
    intensiveTarget: 0.9, // 90% acerto para sair do modo intensivo
    intensivePool: [],
    difficulty: 'easy', // easy, medium, hard
    lastResults: [],
    rankings: JSON.parse(localStorage.getItem('eq_rankings')) || []
  };

  // Utilitários
  const $ = sel => document.querySelector(sel);
  const $$ = sel => Array.from(document.querySelectorAll(sel));
  const save = () => {
    localStorage.setItem('eduQuestState', JSON.stringify({
      xp: state.xp, level: state.level, streak: state.streak, 
      mistakes: state.mistakes, stats: state.stats, rankings: state.rankings
    }));
  };
  const load = () => {
    const saved = JSON.parse(localStorage.getItem('eduQuestState'));
    if (saved) {
      state.xp = saved.xp || 0;
      state.level = saved.level || 1;
      state.streak = saved.streak || 0;
      state.mistakes = saved.mistakes || [];
      state.stats = saved.stats || { answered: 0, correct: 0, time: [] };
      state.rankings = saved.rankings || [];
    }
  };

  // UI Helpers
  const updateHeader = () => {
    $('#subject-label').textContent = `${state.subject === 'ciencias' ? 'Ciências' : state.subject} – Etapa ${state.stage}`;
    $('#xp-display').textContent = `${state.xp} XP`;
    $('#lives-display').textContent = '❤️'.repeat(Math.max(0, state.lives)) + '🖤'.repeat(Math.max(0, 5 - state.lives));
    $('#streak-display').textContent = `🔥 ${state.streak}`;
  };

  const render = (html) => {
    $('#app').innerHTML = `<div class="screen">${html}</div>`;
    updateHeader();
    save();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const confetti = () => {
    const c = $('#confetti-container');
    c.innerHTML = '';
    const colors = ['#10b981', '#f59e0b', '#ef4444', '#3b82f6', '#8b5cf6'];
    for (let i = 0; i < 50; i++) {
      const p = document.createElement('div');
      p.className = 'confetti';
      p.style.left = `${Math.random() * 100}%`;
      p.style.background = colors[Math.floor(Math.random() * colors.length)];
      p.style.animationDuration = `${Math.random() * 2 + 2}s`;
      p.style.animationDelay = `${Math.random() * 1}s`;
      c.appendChild(p);
    }
    setTimeout(() => c.innerHTML = '', 3500);
  };

  const showModal = (content) => {
    $('#modal-content').innerHTML = content;
    $('#modal-overlay').classList.remove('hidden');
  };

  const hideModal = () => {
    $('#modal-overlay').classList.add('hidden');
  };

  // Telas
  const home = () => {
    const subjects = Object.keys(SUMMARIES);
    let html = `
      <div class="text-center py-4">
        <div class="text-5xl mb-3">🎓🔬</div>
        <h2 class="text-xl font-bold mb-1">Missão Ciências</h2>
        <p class="text-sm text-slate-500 mb-4">Capítulo 7: Doenças Transmissíveis</p>
        
        <div class="card mb-4">
          <p class="font-semibold mb-2">📚 Escolha sua disciplina:</p>
          <div class="grid-subjects">
            ${subjects.map(sub => {
              const active = state.subject === sub ? 'active' : '';
              const icon = sub === 'ciencias' ? '🔬' : sub === 'matematica' ? '📐' : '📚';
              const name = sub.charAt(0).toUpperCase() + sub.slice(1);
              return `
                <div class="subject-card ${active}" data-sub="${sub}">
                  <div class="subject-icon">${icon}</div>
                  <div class="subject-name">${name}</div>
                  <div class="subject-stage">${SUMMARIES[sub] ? Object.keys(SUMMARIES[sub]).length : 0} etapas</div>
                </div>
              `;
            }).join('')}
          </div>
        </div>

        <div class="card mb-4">
          <p class="font-semibold mb-2">🎮 Modo de jogo:</p>
          <div class="mode-selector">
            <div class="mode-btn ${state.mode === 'learn' ? 'active' : ''}" data-mode="learn">📖 Aprender</div>
            <div class="mode-btn ${state.mode === 'intensive' ? 'active' : ''}" data-mode="intensive">🧠 Memorização</div>
            <div class="mode-btn ${state.mode === 'survival' ? 'active' : ''}" data-mode="survival">🔥 Sobrevivência</div>
            <div class="mode-btn ${state.mode === 'exam' ? 'active' : ''}" data-mode="exam">📝 Prova</div>
          </div>
        </div>

        <button id="btn-start" class="btn mb-2" ${!SUMMARIES[state.subject] ? 'disabled' : ''}>
          🚀 Iniciar Etapa ${state.stage}
        </button>
        <div class="btn-group">
          <button id="btn-mistakes" class="btn secondary">📖 Erros (${state.mistakes.length})</button>
          <button id="btn-stats" class="btn outline">📊 Estatísticas</button>
        </div>
        <p class="text-xs text-slate-400 mt-3">Nível ${state.level} • ${state.xp} XP • Melhor streak: ${state.streak}</p>
      </div>
    `;
    render(html);

    // Event listeners
    $$('.subject-card').forEach(el => {
      el.onclick = () => {
        state.subject = el.dataset.sub;
        state.stage = 1;
        home();
      };
    });

    $$('.mode-btn').forEach(btn => {
      btn.onclick = () => {
        state.mode = btn.dataset.mode;
        if (state.mode === 'intensive') {
          state.intensivePool = [...state.mistakes];
          state.intensiveTarget = 0.9;
        }
        home();
      };
    });

    $('#btn-start').onclick = () => {
      if (!SUMMARIES[state.subject]?.[state.stage]) {
        showModal(`<h3 class="font-bold mb-2">🎉 Parabéns!</h3><p>Você completou todas as etapas de ${state.subject}.</p><button class="btn mt-4" onclick="EduQuest.home()">Voltar</button>`);
        return;
      }
      startStage();
    };
    $('#btn-mistakes').onclick = reviewMistakes;
    $('#btn-stats').onclick = showStats;
  };

  const startStage = () => {
    state.lives = state.mode === 'survival' ? 3 : 5;
    state.step = 1;
    state.readProgress = 0;
    showSummary();
  };

  const showSummary = () => {
    const sum = SUMMARIES[state.subject]?.[state.stage];
    if (!sum) return home();

    let html = `
      <div class="card">
        <div class="card-header">
          <span class="text-2xl">📖</span>
          <h3 class="card-title">${sum.title}</h3>
        </div>
        <p class="text-sm text-slate-500 mb-3">⏱️ Leia com atenção. Tempo estimado: ${sum.readTime}s</p>
        
        ${sum.content.map(item => `
          <div class="summary-item">
            <span class="summary-icon">${item.icon}</span>
            <div>
              <p class="summary-title">${item.title}</p>
              <p class="summary-text">${item.text}</p>
            </div>
          </div>
        `).join('')}
        
        <div class="progress-label">
          <span>Progresso de leitura</span>
          <span id="read-percent">0%</span>
        </div>
        <div class="progress-bar"><div id="read-bar" class="progress-fill"></div></div>
        
        <div class="reading-indicator mt-2">
          <div class="reading-dot active"></div>
          <div class="reading-dot"></div>
          <div class="reading-dot"></div>
          <span>Continue lendo para desbloquear...</span>
        </div>
        
        <button id="btn-next" class="btn mt-4" disabled>Continuar para Flashcards ➜</button>
        <button class="btn outline mt-2" onclick="EduQuest.home()">Voltar</button>
      </div>
    `;
    render(html);

    // Timer de leitura obrigatória
    const total = sum.readTime * 10; // 10 ticks por segundo
    let elapsed = 0;
    state.readTimer = setInterval(() => {
      elapsed++;
      state.readProgress = Math.min(100, Math.round((elapsed / total) * 100));
      $('#read-bar').style.width = `${state.readProgress}%`;
      $('#read-percent').textContent = `${state.readProgress}%`;
      
      if (state.readProgress >= 100) {
        clearInterval(state.readTimer);
        const btn = $('#btn-next');
        if (btn) {
          btn.disabled = false;
          btn.classList.add('glow');
        }
      }
    }, 100);

    $('#btn-next').onclick = () => showFlashcards();
  };

  const showFlashcards = () => {
    const sum = SUMMARIES[state.subject][state.stage];
    let idx = 0;
    
    const draw = () => {
      const card = sum.flashcards[idx];
      render(`
        <div class="card text-center">
          <h3 class="font-bold mb-2">📇 Flashcard ${idx + 1}/${sum.flashcards.length}</h3>
          <p class="text-sm text-slate-500 mb-3">Toque no cartão para ver a resposta</p>
          
          <div id="fc" class="flashcard-container">
            <div id="fc-inner" class="flashcard-inner">
              <div class="flashcard-front">${card.q}</div>
              <div class="flashcard-back">${card.a}</div>
            </div>
          </div>
          
          <p class="text-xs text-slate-400 mb-4">💡 Dica: Tente responder antes de virar!</p>
          
          <button id="btn-fc-next" class="btn">
            ${idx < sum.flashcards.length - 1 ? 'Próximo ➜' : 'Ir para Revisão ➜'}
          </button>
        </div>
      `);

      // Flip animation
      setTimeout(() => {
        $('#fc').onclick = () => $('#fc-inner').classList.toggle('flipped');
      }, 10);

      $('#btn-fc-next').onclick = () => {
        idx++;
        if (idx < sum.flashcards.length) draw();
        else showMiniReview();
      };
    };
    draw();
  };

  const showMiniReview = () => {
    const sum = SUMMARIES[state.subject][state.stage];
    let idx = 0;
    let correct = 0;

    const ask = () => {
      const item = sum.miniReview[idx];
      render(`
        <div class="card text-center">
          <h3 class="font-bold mb-3">🔄 Mini Revisão ${idx + 1}/${sum.miniReview.length}</h3>
          <p class="text-lg font-semibold mb-4">${item.q}</p>
          
          <input type="text" id="review-answer" class="w-full p-3 border-2 border-slate-200 rounded-xl mb-3" 
                 placeholder="Digite sua resposta..." autocomplete="off">
          
          <button id="btn-check" class="btn">Verificar</button>
          <p id="review-feedback" class="text-sm mt-2"></p>
        </div>
      `);

      $('#btn-check').onclick = () => {
        const ans = $('#review-answer').value.trim().toLowerCase();
        const expected = item.a.toLowerCase();
        const feedback = $('#review-feedback');
        
        if (ans.includes(expected) || expected.includes(ans)) {
          feedback.innerHTML = `<span class="text-emerald-600 font-semibold">✅ Correto!</span>`;
          correct++;
          setTimeout(() => {
            idx++;
            if (idx < sum.miniReview.length) ask();
            else initQuiz(correct / sum.miniReview.length >= 0.7);
          }, 800);
        } else {
          feedback.innerHTML = `<span class="text-rose-600">❌ Quase! Resposta: ${item.a}</span>`;
          setTimeout(() => {
            idx++;
            if (idx < sum.miniReview.length) ask();
            else initQuiz(correct / sum.miniReview.length >= 0.7);
          }, 1500);
        }
      };
    };
    ask();
  };

  const initQuiz = (passedReview) => {
    if (!passedReview && state.mode === 'learn') {
      showModal(`
        <h3 class="font-bold mb-2">📚 Revisão Necessária</h3>
        <p class="mb-4">Você precisa acertar pelo menos 70% na mini revisão para continuar.</p>
        <button class="btn" onclick="EduQuest.hideModal(); EduQuest.showMiniReview()">Tentar Novamente</button>
        <button class="btn outline mt-2" onclick="EduQuest.hideModal(); EduQuest.home()">Voltar</button>
      `);
      return;
    }

    // Preparar pool de questões
    let pool = (QUESTIONS[state.subject] || []).filter(q => q.stage === state.stage);
    
    // Modo intensivo: prioriza erros
    if (state.mode === 'intensive' && state.intensivePool.length > 0) {
      pool = [...state.intensivePool, ...pool.filter(q => !state.intensivePool.find(m => m.id === q.id))];
    }
    
    // Dificuldade progressiva
    if (state.stats.answered > 20) {
      const acc = state.stats.correct / state.stats.answered;
      if (acc > 0.8) state.difficulty = 'hard';
      else if (acc > 0.6) state.difficulty = 'medium';
      else state.difficulty = 'easy';
    }
    
    // Filtrar por dificuldade no modo aprendizado
    if (state.mode === 'learn') {
      pool = pool.filter(q => q.difficulty === state.difficulty || q.difficulty === 'easy');
    }
    
    if (pool.length === 0) {
      render(`<div class="card text-center py-8"><h2>📭 Sem questões para esta etapa ainda.</h2><button class="btn mt-4" onclick="EduQuest.home()">Voltar</button></div>`);
      return;
    }

    state.quizPool = pool.sort(() => 0.5 - Math.random()).slice(0, state.mode === 'exam' ? 15 : 10);
    state.quizIndex = 0;
    state.step = 4;
    nextQuestion();
  };

  const nextQuestion = () => {
    if (state.lives <= 0 && state.mode !== 'exam') return endQuiz(true);
    
    const q = state.quizPool[state.quizIndex];
    if (!q) return endQuiz(false);

    const letters = ['A', 'B', 'C', 'D', 'E'];
    let opts = '';
    q.alt.forEach((a, i) => {
      opts += `
        <button class="option" data-idx="${i}">
          <span class="option-letter">${letters[i]}</span>
          <span>${a}</span>
        </button>
      `;
    });

    const badge = `<span class="badge ${q.difficulty === 'easy' ? 'easy' : q.difficulty === 'medium' ? 'medium' : 'hard'}">${q.difficulty === 'easy' ? 'Fácil' : q.difficulty === 'medium' ? 'Médio' : 'Difícil'}</span>`;
    
    render(`
      <div class="card">
        <div class="flex justify-between text-xs text-slate-500 mb-2">
          <span>Questão ${state.quizIndex + 1}/${state.quizPool.length}</span>
          <span>Combo: ${state.combo}x 🔥</span>
        </div>
        
        <div class="mb-3">${badge}</div>
        
        <p class="font-semibold text-lg leading-snug mb-4">${q.q}</p>
        
        <div id="quiz-opts">${opts}</div>
        
        ${state.mode !== 'exam' ? `<button class="btn outline mt-3" onclick="showHint(${q.id})">💡 Dica</button>` : ''}
      </div>
    `);

    // Timer no modo prova
    if (state.mode === 'exam') {
      let timeLeft = 30;
      const timerEl = document.createElement('div');
      timerEl.className = 'text-xs text-slate-500 text-center mt-2';
      timerEl.textContent = `⏱️ ${timeLeft}s`;
      $('#app .card').appendChild(timerEl);
      
      const timer = setInterval(() => {
        timeLeft--;
        timerEl.textContent = `⏱️ ${timeLeft}s`;
        if (timeLeft <= 0) {
          clearInterval(timer);
          checkAnswer(-1, q.c, null, q);
        }
      }, 1000);
    }

    $$('#quiz-opts .option').forEach(btn => {
      btn.onclick = () => {
        $$('#quiz-opts .option').forEach(b => b.disabled = true);
        checkAnswer(parseInt(btn.dataset.idx), q.c, btn, q);
      };
    });
  };

  const showHint = (qid) => {
    const q = QUESTIONS[state.subject].find(q => q.id === qid);
    if (!q) return;
    
    // Dica progressiva baseada no tema
    const hints = {
      'anticorpos': '💡 São proteínas produzidas pelo seu sistema de defesa!',
      'prevenção': '💡 Pense: o que fazemos ANTES de adoecer?',
      'vetor': '💡 Não é a causa, mas o "transportador" da doença.',
      'saneamento': '💡 Água + esgoto + lixo = saúde!',
      'fake_news': '💡 Desconfie: sem fonte, com medo, promessa milagrosa.'
    };
    
    showModal(`
      <h3 class="font-bold mb-2">💡 Dica</h3>
      <p class="mb-4">${hints[q.theme] || '💡 Releia a pergunta com calma e elimine as alternativas impossíveis.'}</p>
      <button class="btn" onclick="EduQuest.hideModal()">Continuar</button>
    `);
    
    // Penalidade leve no modo aprendizado
    if (state.mode === 'learn') state.xp = Math.max(0, state.xp - 2);
  };

  const checkAnswer = (sel, cor, btnEl, q) => {
    const isCorrect = sel === cor;
    const opts = $$('#quiz-opts .option');
    
    // Feedback visual
    opts[cor].classList.add('correct');
    if (!isCorrect && btnEl) {
      btnEl.classList.add('wrong');
      state.lives--;
      state.combo = 0;
      if (!state.mistakes.find(m => m.id === q.id)) state.mistakes.push(q);
    } else if (isCorrect) {
      btnEl.classList.add('pulse-success');
      state.xp += 10 + (state.combo * 2);
      state.combo++;
      state.streak++;
      confetti();
    }
    
    // Stats
    state.stats.answered++;
    if (isCorrect) state.stats.correct++;
    state.stats.time.push(Date.now());
    
    // Level up
    const needed = state.level * 100;
    if (state.xp >= needed) {
      state.level++;
      state.lives = 5;
      showModal(`
        <div class="text-center">
          <div class="text-4xl mb-2">🎉</div>
          <h3 class="font-bold">Nível ${state.level}!</h3>
          <p class="text-sm text-slate-500">Vidas restauradas • +5 ❤️</p>
          <button class="btn mt-4" onclick="EduQuest.hideModal()">Continuar</button>
        </div>
      `);
    }
    
    // Explicação
    setTimeout(() => {
      showModal(`
        <div class="text-center">
          <h3 class="font-bold mb-2">${isCorrect ? '✅ Acertou!' : '❌ Errou'}</h3>
          <p class="mb-3">${q.e}</p>
          ${!isCorrect ? `<p class="text-sm text-slate-500 mb-3">Vidas restantes: ${'❤️'.repeat(Math.max(0, state.lives))}</p>` : ''}
          <button class="btn" onclick="EduQuest.hideModal(); EduQuest.nextQuestion()">
            ${state.quizIndex < state.quizPool.length - 1 ? 'Próxima ➜' : 'Ver Resultados'}
          </button>
        </div>
      `);
      
      state.quizIndex++;
      save();
      updateHeader();
    }, isCorrect ? 600 : 1200);
  };

  const endQuiz = (lostLives) => {
    state.step = 0;
    const isPass = !lostLives;
    
    // Atualizar ranking local
    const entry = {
      date: new Date().toLocaleDateString('pt-BR'),
      stage: state.stage,
      mode: state.mode,
      score: state.stats.correct,
      total: state.quizPool.length,
      xp: state.xp
    };
    state.rankings.unshift(entry);
    if (state.rankings.length > 10) state.rankings.pop();
    
    // Modo intensivo: verifica se atingiu meta
    if (state.mode === 'intensive') {
      const acc = state.stats.correct / state.stats.answered;
      if (acc >= state.intensiveTarget) {
        showModal(`
          <div class="text-center">
            <div class="text-4xl mb-2">🧠✨</div>
            <h3 class="font-bold">Memorização Concluída!</h3>
            <p class="mb-3">Você atingiu ${Math.round(acc * 100)}% de acerto (meta: 90%).</p>
            <p class="text-sm text-slate-500 mb-4">Questões revisadas: ${state.intensivePool.length}</p>
            <button class="btn" onclick="EduQuest.hideModal(); EduQuest.home()">Voltar ao Menu</button>
          </div>
        `);
        state.intensivePool = [];
        save();
        return;
      }
    }
    
    confetti();
    render(`
      <div class="card text-center py-6">
        <div class="text-5xl mb-3">${isPass ? '🏆' : '📚'}</div>
        <h2 class="text-xl font-bold mb-1">${isPass ? 'Etapa Concluída!' : 'Revisão Recomendada'}</h2>
        <p class="text-slate-600 mb-4">${isPass ? 'Você dominou o conteúdo!' : 'Revise os erros para fixar o aprendizado.'}</p>
        
        <div class="stats-grid mb-4">
          <div class="stat-card">
            <div class="stat-value">${state.stats.correct}</div>
            <div class="stat-label">Acertos</div>
          </div>
          <div class="stat-card">
            <div class="stat-value">${state.stats.answered - state.stats.correct}</div>
            <div class="stat-label">Erros</div>
          </div>
          <div class="stat-card">
            <div class="stat-value">${state.xp}</div>
            <div class="stat-label">XP Ganho</div>
          </div>
          <div class="stat-card">
            <div class="stat-value">${Math.round(state.stats.correct/state.stats.answered*100)}%</div>
            <div class="stat-label">Acurácia</div>
          </div>
        </div>
        
        ${state.mistakes.length > 0 ? `
          <button class="btn secondary mb-2" onclick="EduQuest.reviewMistakes()">
            📖 Revisar Meus Erros (${state.mistakes.length})
          </button>
        ` : ''}
        
        <button class="btn mb-2" onclick="EduQuest.startStage()">🔄 Refazer Etapa</button>
        <button class="btn outline" onclick="EduQuest.home()">🏠 Menu Principal</button>
        
        ${state.mode === 'learn' && isPass ? `
          <button class="btn sm mt-4" onclick="EduQuest.startStage(); state.stage++; if(state.stage > 4) state.stage = 1;">
            Próxima Etapa ➜
          </button>
        ` : ''}
      </div>
    `);
  };

  const reviewMistakes = () => {
    if (state.mistakes.length === 0) {
      render(`<div class="card text-center py-12"><h2 class="text-xl font-bold mb-2">🌟 Nenhum erro pendente!</h2><p class="text-slate-500 mb-4">Continue estudando para manter o desempenho.</p><button class="btn" onclick="EduQuest.home()">Voltar</button></div>`);
      return;
    }
    
    const q = state.mistakes[0];
    const letters = ['A', 'B', 'C', 'D', 'E'];
    
    render(`
      <div class="card">
        <h3 class="font-bold mb-3">📖 Preciso Revisar</h3>
        <p class="text-sm text-slate-500 mb-4">Foco nas questões que errou para fixar o conteúdo!</p>
        
        <div class="mistake-card">
          <p class="mistake-question">${q.q}</p>
          <div class="mb-3">
            ${q.alt.map((a, i) => `
              <button class="option ${i === q.c ? 'correct' : ''}" data-idx="${i}" ${i === q.c ? 'disabled' : ''}>
                <span class="option-letter">${letters[i]}</span>
                <span>${a}</span>
              </button>
            `).join('')}
          </div>
          <p class="mistake-explanation">💡 ${q.e}</p>
        </div>
        
        <div class="btn-group">
          <button class="btn secondary" onclick="EduQuest.removeMistake(${q.id})">✅ Aprendi!</button>
          <button class="btn outline" onclick="EduQuest.keepMistake(${q.id})">🔄 Revisar Depois</button>
        </div>
        <button class="btn sm mt-3" onclick="EduQuest.home()">Sair</button>
      </div>
    `);
  };

  const removeMistake = (id) => {
    state.mistakes = state.mistakes.filter(m => m.id !== id);
    state.xp += 15;
    state.streak++;
    save();
    reviewMistakes();
  };

  const keepMistake = (id) => {
    // Mantém na lista, mas move para o final para revisar depois
    const q = state.mistakes.find(m => m.id === id);
    state.mistakes = state.mistakes.filter(m => m.id !== id);
    state.mistakes.push(q);
    save();
    reviewMistakes();
  };

  const showStats = () => {
    const acc = state.stats.answered > 0 ? ((state.stats.correct / state.stats.answered) * 100).toFixed(1) : 0;
    const totalTime = state.stats.time.length > 1 ? 
      Math.round((state.stats.time[state.stats.time.length - 1] - state.stats.time[0]) / 1000 / 60) : 0;
    
    render(`
      <div class="card text-center py-4">
        <h2 class="text-xl font-bold mb-4">📊 Suas Estatísticas</h2>
        
        <div class="stats-grid mb-4">
          <div class="stat-card">
            <div class="stat-value">${state.level}</div>
            <div class="stat-label">Nível</div>
          </div>
          <div class="stat-card">
            <div class="stat-value">${state.xp}</div>
            <div class="stat-label">XP Total</div>
          </div>
          <div class="stat-card">
            <div class="stat-value">${state.stats.answered}</div>
            <div class="stat-label">Respondidas</div>
          </div>
          <div class="stat-card">
            <div class="stat-value">${acc}%</div>
            <div class="stat-label">Acurácia</div>
          </div>
        </div>
        
        <p class="text-sm text-slate-500 mb-1">🔥 Melhor Sequência: ${state.streak}</p>
        <p class="text-sm text-slate-500 mb-4">⏱️ Tempo de Estudo: ~${totalTime} min</p>
        
        ${state.rankings.length > 0 ? `
          <div class="text-left mb-4">
            <p class="font-semibold mb-2">🏆 Últimas Pontuações:</p>
            ${state.rankings.slice(0, 5).map((r, i) => `
              <div class="flex justify-between text-sm py-1 border-b border-slate-100">
                <span>${i+1}. ${r.mode === 'exam' ? '📝' : r.mode === 'survival' ? '🔥' : '📖'} Etapa ${r.stage}</span>
                <span class="font-semibold">${r.score}/${r.total} • ${r.xp} XP</span>
              </div>
            `).join('')}
          </div>
        ` : ''}
        
        <button class="btn" onclick="EduQuest.home()">Voltar</button>
      </div>
    `);
  };

  // Inicialização
  const init = () => {
    load();
    home();
    if (state.lives < 1) state.lives = 1;
  };

  // API pública
  return {
    init,
    home,
    startStage,
    showSummary,
    showFlashcards,
    showMiniReview,
    initQuiz,
    nextQuestion,
    checkAnswer,
    endQuiz,
    reviewMistakes,
    removeMistake,
    keepMistake,
    showStats,
    showModal,
    hideModal,
    showHint
  };
})();

// Iniciar app
document.addEventListener('DOMContentLoaded', EduQuest.init);