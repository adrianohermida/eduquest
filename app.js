const App = {
  state: JSON.parse(localStorage.getItem('eduQuestState')) || {
    subject: 'ciencias', stage: 1, xp: 0, level: 1, streak: 0, combo: 0, lives: 5,
    mistakes: [], stats: { answered: 0, correct: 0 },
    mode: 'learn', step: 0, readProgress: 0, quizPool: [], quizIndex: 0,
    survival: false, survivalScore: 0
  },
  
  save() { localStorage.setItem('eduQuestState', JSON.stringify(this.state)); },
  
  updateHeader() {
    const sub = this.state.subject === 'ciencias' ? 'Ciências' : this.state.subject;
    document.getElementById('subject-label').textContent = `${sub} – Etapa ${this.state.stage}`;
    document.getElementById('xp-display').textContent = `${this.state.xp} XP`;
    document.getElementById('lives-display').textContent = '❤️'.repeat(Math.max(0, this.state.lives)) + '🖤'.repeat(Math.max(0, 5-this.state.lives));
    document.getElementById('streak-display').textContent = `🔥 ${this.state.streak}`;
  },

  render(html) {
    document.getElementById('app').innerHTML = html;
    this.updateHeader();
    this.save();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  },

  confetti() {
    const c = document.getElementById('confetti-container'); c.innerHTML = '';
    const colors = ['#58cc02','#ffc800','#ff4b4b','#3b82f6','#8b5cf6'];
    for(let i=0; i<40; i++) {
      const p = document.createElement('div'); p.className = 'confetti';
      p.style.left = Math.random()*100 + '%'; p.style.background = colors[Math.floor(Math.random()*colors.length)];
      p.style.animationDuration = (Math.random()*2+2)+'s'; c.appendChild(p);
    }
    setTimeout(()=>c.innerHTML='', 3000);
  },

  // TELAS
  home() {
    const subjects = Object.keys(SUMMARIES);
    let html = `<div class="text-center py-6">
      <div class="text-5xl mb-4">🎓✨</div>
      <h2 class="text-2xl font-bold mb-2">Escolha sua Missão</h2>
      <p class="text-slate-500 mb-6">Aprenda, pratique e avance no seu ritmo.</p>
      <div class="grid-subjects">`;
    subjects.forEach(sub => {
      const active = this.state.subject === sub ? 'active' : '';
      const name = sub.charAt(0).toUpperCase() + sub.slice(1);
      html += `<div class="card subject-card ${active}" data-sub="${sub}">
        <div class="text-2xl mb-2">${sub==='ciencias'?'🔬':sub==='matematica'?'📐':sub==='portugues'?'📚':'📝'}</div>
        <div class="font-bold">${name}</div>
      </div>`;
    });
    html += `</div>
      <div class="mt-6 flex flex-col gap-3">
        <button id="btn-start" class="btn" ${this.state.subject?'':'disabled'}>🚀 Iniciar Etapa ${this.state.stage}</button>
        <button id="btn-mistakes" class="btn secondary">📖 Revisar Erros (${this.state.mistakes.length})</button>
        <button id="btn-stats" class="btn outline">📊 Estatísticas</button>
      </div>
      <p class="text-xs text-slate-400 mt-4">Nível ${this.state.level} | ${this.state.xp} XP</p>
    </div>`;
    this.render(html);

    document.querySelectorAll('.subject-card').forEach(el => {
      el.onclick = () => {
        this.state.subject = el.dataset.sub;
        this.state.stage = 1;
        this.home();
      };
    });
    document.getElementById('btn-start').onclick = () => this.startStage();
    document.getElementById('btn-mistakes').onclick = () => this.reviewMistakes();
    document.getElementById('btn-stats').onclick = () => this.showStats();
  },

  startStage() {
    this.state.mode = 'learn';
    this.state.step = 1;
    this.state.lives = 5;
    this.showSummary();
  },

  showSummary() {
    const sum = SUMMARIES[this.state.subject]?.[this.state.stage];
    if(!sum) return this.render(`<div class="text-center py-10"><h2>🎉 Conteúdo Completo!</h2><button class="btn mt-4" onclick="App.home()">Voltar</button></div>`);
    
    this.state.readProgress = 0;
    let html = `<div class="py-4">
      <h3 class="text-xl font-bold mb-2">${sum.title}</h3>
      <p class="text-sm text-slate-500 mb-4">⏱️ Leia com atenção. A revisão é obrigatória.</p>`;
    sum.content.forEach(i => html += `<div class="card mb-3"><p class="font-semibold mb-1">${i.icon} ${i.title}</p><p>${i.text}</p></div>`);
    html += `<div class="progress-bar mb-4"><div id="read-bar" class="progress-fill"></div></div>
      <button id="btn-next" class="btn" disabled>Continuar para Flashcards ➜</button>
      <button class="btn outline mt-2" onclick="App.home()">Voltar</button>
    </div>`;
    this.render(html);

    const interval = setInterval(() => {
      this.state.readProgress += 3;
      const bar = document.getElementById('read-bar');
      if(bar) bar.style.width = this.state.readProgress + '%';
      if(this.state.readProgress >= 100) {
        clearInterval(interval);
        const btn = document.getElementById('btn-next');
        if(btn) btn.disabled = false;
      }
    }, 100);
    document.getElementById('btn-next').onclick = () => this.showFlashcards();
  },

  showFlashcards() {
    const sum = SUMMARIES[this.state.subject][this.state.stage];
    let idx = 0;
    const draw = () => {
      const card = sum.flashcards[idx];
      this.render(`<div class="flex flex-col items-center justify-center py-6">
        <h3 class="mb-4 font-bold">📇 Flashcard ${idx+1}/${sum.flashcards.length}</h3>
        <div id="fc" class="flashcard-container mb-6"><div id="fc-inner" class="flashcard-inner">
          <div class="flashcard-front">${card.q}</div>
          <div class="flashcard-back">${card.a}</div>
        </div></div>
        <p class="text-xs text-slate-400 mb-4">Toque no cartão para virar</p>
        <button id="btn-fc-next" class="btn">${idx < sum.flashcards.length-1 ? 'Próximo ➜' : 'Ir para o Quiz ➜'}</button>
      </div>`);
      setTimeout(() => {
        document.getElementById('fc').onclick = () => document.getElementById('fc-inner').classList.toggle('flipped');
        document.getElementById('btn-fc-next').onclick = () => {
          idx++;
          if(idx < sum.flashcards.length) draw();
          else this.initQuiz();
        };
      }, 10);
    };
    draw();
  },

  initQuiz() {
    const pool = (QUESTIONS[this.state.subject] || []).filter(q => q.s === this.state.stage);
    if(pool.length === 0) return this.render(`<div class="text-center py-10"><h2>📭 Sem questões ainda.</h2><button class="btn mt-4" onclick="App.home()">Voltar</button></div>`);
    this.state.quizPool = pool.sort(() => 0.5 - Math.random()).slice(0, 10);
    this.state.quizIndex = 0;
    this.state.mode = 'quiz';
    this.nextQuestion();
  },

  nextQuestion() {
    if(this.state.lives <= 0) return this.endQuiz(true);
    const q = this.state.quizPool[this.state.quizIndex];
    if(!q) return this.endQuiz(false);

    let opts = '';
    q.alt.forEach((a,i) => opts += `<button class="option" data-idx="${i}">${a}</button>`);
    
    this.render(`<div class="py-2">
      <div class="flex justify-between text-xs text-slate-500 mb-2"><span>Questão ${this.state.quizIndex+1}/${this.state.quizPool.length}</span><span>Combo: ${this.state.combo}x</span></div>
      <div class="card mb-4"><p class="font-semibold text-lg leading-snug">${q.q}</p></div>
      <div id="quiz-opts">${opts}</div>
      <button class="btn outline mt-2" onclick="App.home()">Sair</button>
    </div>`);

    document.querySelectorAll('#quiz-opts .option').forEach(btn => {
      btn.onclick = () => this.checkAnswer(parseInt(btn.dataset.idx), q.c, btn, q);
    });
  },

  checkAnswer(sel, cor, btnEl, q) {
    document.querySelectorAll('#quiz-opts .option').forEach(b => b.disabled = true);
    document.querySelectorAll('#quiz-opts .option')[cor].classList.add('correct');
    
    if(sel !== cor) {
      btnEl.classList.add('wrong', 'shake');
      this.state.lives--; this.state.combo = 0;
      this.state.mistakes.push(q);
      this.state.stats.answered++;
    } else {
      btnEl.classList.add('glow');
      this.state.xp += 10 + (this.state.combo*2);
      this.state.combo++; this.state.streak++;
      this.state.stats.answered++; this.state.stats.correct++;
      this.confetti();
    }
    if(this.state.xp >= this.state.level * 100) { this.state.level++; this.state.lives = 5; }
    this.save(); this.updateHeader();
    setTimeout(() => { this.state.quizIndex++; this.nextQuestion(); }, 1100);
  },

  endQuiz(lostLives) {
    this.state.mode = 'learn';
    this.confetti();
    const ok = !lostLives;
    this.render(`<div class="text-center py-8">
      <div class="text-6xl mb-4">${ok ? '🎉' : '📚'}</div>
      <h2 class="text-2xl font-bold mb-2">${ok ? 'Parabéns! Etapa Concluída' : 'Revisão Necessária'}</h2>
      <p class="mb-6 text-slate-600">${ok ? 'Você dominou o conteúdo!' : 'Revise os erros e tente de novo.'}</p>
      <div class="card mb-6 grid grid-cols-2 gap-4 text-sm">
        <div>✅ Acertos: <span class="font-bold text-emerald-600">${this.state.stats.correct}</span></div>
        <div>❌ Erros: <span class="font-bold text-rose-600">${this.state.stats.answered - this.state.stats.correct}</span></div>
      </div>
      <button class="btn mb-2" onclick="App.startStage()">🔄 Tentar Novamente</button>
      <button class="btn secondary mb-2" onclick="App.reviewMistakes()">📖 Revisar Meus Erros</button>
      <button class="btn outline" onclick="App.home()">🏠 Menu Principal</button>
    </div>`);
  },

  reviewMistakes() {
    if(this.state.mistakes.length === 0) return this.render(`<div class="text-center py-16"><h2>🌟 Nenhum erro pendente!</h2><button class="btn mt-4" onclick="App.home()">Voltar</button></div>`);
    const q = this.state.mistakes[0];
    let opts = '';
    q.alt.forEach((a,i) => opts += `<button class="option" data-idx="${i}">${a}</button>`);
    this.render(`<div class="py-4">
      <h3 class="text-xl font-bold mb-2">📖 Preciso Revisar</h3>
      <p class="text-sm text-slate-500 mb-4">Revisando para fixar na memória!</p>
      <div class="card mb-4"><p class="font-bold">${q.q}</p></div>
      <div id="mistake-opts">${opts}</div>
      <button class="btn outline mt-4" onclick="App.home()">Sair</button>
    </div>`);
    document.querySelectorAll('#mistake-opts .option').forEach(btn => {
      btn.onclick = () => {
        document.querySelectorAll('#mistake-opts .option').forEach(b => b.disabled = true);
        document.querySelectorAll('#mistake-opts .option')[q.c].classList.add('correct');
        if(parseInt(btn.dataset.idx) === q.c) {
          this.confetti(); this.state.xp += 15; this.state.streak++;
          this.state.mistakes.shift();
        } else { btn.classList.add('wrong','shake'); this.state.combo=0; }
        this.save(); setTimeout(() => this.reviewMistakes(), 1000);
      };
    });
  },

  showStats() {
    const acc = this.state.stats.answered > 0 ? ((this.state.stats.correct/this.state.stats.answered)*100).toFixed(1) : 0;
    this.render(`<div class="text-center py-8">
      <h2 class="text-2xl font-bold mb-4">📊 Suas Estatísticas</h2>
      <div class="grid grid-cols-2 gap-4 mb-6">
        <div class="card"><p class="text-2xl font-bold">${this.state.level}</p><p class="text-sm">Nível</p></div>
        <div class="card"><p class="text-2xl font-bold">${this.state.xp}</p><p class="text-sm">XP Total</p></div>
        <div class="card"><p class="text-2xl font-bold">${this.state.stats.answered}</p><p class="text-sm">Respondidas</p></div>
        <div class="card"><p class="text-2xl font-bold">${acc}%</p><p class="text-sm">Taxa de Acerto</p></div>
      </div>
      <button class="btn" onclick="App.home()">Voltar</button>
    </div>`);
  }
};

// Inicialização
window.addEventListener('DOMContentLoaded', () => {
  if(App.state.lives < 1) App.state.lives = 1;
  App.home();
});;