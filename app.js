// Estado Global
let state = JSON.parse(localStorage.getItem('missaoCiencias')) || {
  xp: 0, level: 1, streak: 0, combo: 0, lives: 5, mistakes: [], 
  stats: { answered: 0, correct: 0, times: [] }, 
  currentStage: 1, mode: 'learning', step: 0, 
  readProgress: 0, readTimer: null, quizIndex: 0, quizPool: [], 
  quizActive: false, examMode: false, survivalMode: false, 
  survivalScore: 0, survivalTime: 0
};

const save = () => localStorage.setItem('missaoCiencias', JSON.stringify(state));
const $ = (sel) => document.querySelector(sel);
const el = (html) => document.createElement('div'); el.innerHTML = html; return el;

// UI Helpers
function updateHeader() {
  $('#stage-title').textContent = state.survivalMode ? '🔥 Sobrevivência' : 
                                  state.examMode ? '📝 Modo Prova' : 
                                  `Etapa ${state.currentStage}`;
  $('#xp-display').textContent = `${state.xp} XP`;
  $('#lives-display').textContent = '❤️'.repeat(Math.max(0, state.lives)) + '🖤'.repeat(Math.max(0, 5-state.lives));
  $('#streak-display').textContent = `🔥 ${state.streak}`;
}

function showScreen(html) {
  $('#app').innerHTML = html;
  updateHeader();
  save();
  window.scrollTo(0,0);
}

// Confetti
function confetti() {
  const c = $('#confetti-container'); c.innerHTML = '';
  const colors = ['#3b82f6','#ef4444','#10b981','#f59e0b','#8b5cf6'];
  for(let i=0; i<40; i++) {
    const p = document.createElement('div');
    p.className = 'confetti';
    p.style.left = Math.random()*100 + '%';
    p.style.background = colors[Math.floor(Math.random()*colors.length)];
    p.style.animationDuration = (Math.random()*2+2)+'s';
    c.appendChild(p);
  }
  setTimeout(()=>c.innerHTML='', 3500);
}

// Telas
function renderHome() {
  showScreen(`
    <div class="screen text-center py-6">
      <div class="text-6xl mb-4">🧬🎒</div>
      <h2 class="text-2xl font-bold mb-2">Missão Ciências</h2>
      <p class="text-slate-600 mb-6">Capítulo 7: Doenças Transmissíveis</p>
      <div class="grid grid-cols-1 gap-3">
        <button onclick="startStage(1)" class="btn-primary btn-blue">🛡️ Iniciar Etapa 1: Imunidade</button>
        <button onclick="startStage(2)" class="btn-primary btn-green">🦠 Iniciar Etapa 2: Vírus</button>
        <button onclick="startStage(3)" class="btn-primary btn-purple">🧫 Iniciar Etapa 3: Bactérias</button>
        <button onclick="startStage(4)" class="btn-primary btn-orange">📝 Iniciar Etapa 4: Final</button>
        <button onclick="renderSurvival()" class="btn-primary btn-red">🔥 Modo Sobrevivência</button>
        <button onclick="renderExam()" class="btn-primary btn-blue border border-slate-300">📝 Modo Prova (Cronometrado)</button>
      </div>
      <div class="mt-6 grid grid-cols-2 gap-3 text-sm">
        <button onclick="renderStats()" class="p-2 bg-white rounded-lg shadow">📊 Estatísticas</button>
        <button onclick="renderMistakes()" class="p-2 bg-white rounded-lg shadow">📖 Preciso Revisar (${state.mistakes.length})</button>
      </div>
      <p class="text-xs text-slate-400 mt-4">Nível ${state.level} | ${state.xp} XP total</p>
    </div>
  `);
}

function startStage(stage) {
  state.currentStage = stage;
  state.mode = 'learning';
  state.step = 1; // 1: Sumário, 2: Flashcards, 3: Quiz
  state.lives = 5;
  state.quizActive = false;
  renderSummary();
}

function renderSummary() {
  const sum = STAGE_SUMMARIES[state.currentStage];
  state.readProgress = 0;
  state.readTimer = setInterval(()=>{
    state.readProgress += 2;
    const bar = $('#read-bar');
    if(bar) bar.style.width = state.readProgress+'%';
    const btn = $('#btn-read');
    if(state.readProgress >= 100 && btn) btn.disabled = false;
  }, 100);
  
  let html = `<div class="screen"><h3 class="text-xl font-bold mb-2">${sum.title}</h3><p class="text-sm text-slate-500 mb-4">⏱️ Leia com atenção. A revisão é obrigatória.</p>`;
  sum.content.forEach(i => html += `<div class="bg-white p-4 rounded-xl shadow-sm border border-slate-200"><p class="font-semibold mb-1">${i.icon} ${i.title}</p><p>${i.text}</p></div>`);
  html += `
    <div class="h-2 bg-slate-200 rounded-full overflow-hidden mt-4"><div id="read-bar" class="h-full bg-blue-500 w-0 progress-fill"></div></div>
    <button id="btn-read" onclick="nextStep()" disabled class="btn-primary btn-blue mt-4">Continuar para Flashcards ➜</button>
  </div>`;
  showScreen(html);
}

function nextStep() {
  clearInterval(state.readTimer);
  state.step++;
  if(state.step === 2) renderFlashcards();
  else if(state.step === 3) renderQuizSetup();
}

function renderFlashcards() {
  const cards = STAGE_SUMMARIES[state.currentStage].flashcards;
  let idx = 0;
  function drawCard() {
    const c = cards[idx];
    showScreen(`
      <div class="screen flex flex-col items-center justify-center py-10">
        <h3 class="mb-4 font-bold">📇 Flashcards ${idx+1}/${cards.length}</h3>
        <div id="card-box" class="w-full h-48 perspective-1000 cursor-pointer">
          <div id="card-inner" class="card-inner relative w-full h-full">
            <div class="card-front bg-white p-6 rounded-xl shadow-lg flex items-center justify-center text-center font-semibold">${c.q}</div>
            <div class="card-back bg-blue-500 text-white p-6 rounded-xl shadow-lg flex items-center justify-center text-center font-semibold">${c.a}</div>
          </div>
        </div>
        <p class="text-xs text-slate-400 mt-2">Toque no cartão para virar</p>
        <button onclick="idx++; idx<cards.length ? drawCard() : nextStep()" class="btn-primary btn-purple mt-4">Próximo ➜</button>
      </div>
    `);
    setTimeout(()=>{
      $('#card-box').onclick = () => $('#card-inner').classList.toggle('flipped');
    }, 50);
  }
  drawCard();
}

function renderQuizSetup() {
  showScreen(`
    <div class="screen text-center py-10">
      <div class="text-5xl mb-4">🎯</div>
      <h2 class="text-2xl font-bold mb-2">Hora do Quiz!</h2>
      <p class="mb-6 text-slate-600">Teste seus conhecimentos. Não perca todas as vidas!</p>
      <div class="bg-yellow-100 p-4 rounded-lg mb-4 border border-yellow-300 text-sm">💡 Dicas: Leia bem. Erros voltam para revisão.</div>
      <button onclick="initQuiz(false)" class="btn-primary btn-green">Começar Quiz</button>
      <button onclick="renderHome()" class="btn-primary bg-slate-500 mt-2">Voltar</button>
    </div>
  `);
}

function initQuiz(isExam) {
  state.examMode = isExam;
  state.quizIndex = 0;
  state.quizActive = true;
  state.survivalMode = false;
  // Pool aleatório filtrado por etapa
  state.quizPool = QUESTIONS.filter(q => q.s === state.currentStage).sort(() => 0.5 - Math.random()).slice(0, 10);
  if(state.quizPool.length === 0) { state.quizPool = QUESTIONS.slice(0,10); }
  renderQuestion();
}

function renderQuestion() {
  if(state.lives <= 0 && !state.examMode) return renderResults(true);
  const q = state.quizPool[state.quizIndex];
  if(!q) return renderResults(false);
  
  let html = `<div class="screen">
    <div class="flex justify-between text-xs text-slate-500 mb-2"><span>Questão ${state.quizIndex+1}/${state.quizPool.length}</span><span>Combo: ${state.combo}x</span></div>
    <div class="bg-white p-5 rounded-xl shadow-sm border border-slate-200 mb-4">
      <p class="font-semibold text-lg leading-snug">${q.q}</p>
    </div>
    <div id="options" class="grid gap-3">`;
  
  q.alt.forEach((a,i) => {
    html += `<button onclick="checkAnswer(${i}, ${q.c}, this)" class="card-option">${a}</button>`;
  });
  html += `</div></div>`;
  showScreen(html);
}

function checkAnswer(sel, cor, btnEl) {
  const q = state.quizPool[state.quizIndex];
  const isCorrect = sel === cor;
  const btns = $('#options').querySelectorAll('button');
  btns.forEach(b => b.disabled = true);
  
  btns[cor].classList.add('correct');
  if(!isCorrect) {
    btnEl.classList.add('wrong', 'shake');
    state.lives--; state.combo = 0;
    state.mistakes.push(q);
    state.stats.answered++;
  } else {
    btnEl.classList.add('glow-success');
    state.xp += 10 + (state.combo*2);
    state.combo++; state.streak++;
    state.stats.answered++; state.stats.correct++;
    confetti();
  }
  
  // Level up
  const needed = state.level * 100;
  if(state.xp >= needed) { state.level++; state.lives = 5; save(); }
  
  setTimeout(() => {
    state.quizIndex++;
    renderQuestion();
  }, 1200);
  save();
}

function renderResults(lostLives) {
  state.quizActive = false;
  state.examMode = false;
  const isPass = !lostLives;
  confetti();
  showScreen(`
    <div class="screen text-center py-10">
      <div class="text-6xl mb-4">${isPass ? '🎉' : '📚'}</div>
      <h2 class="text-2xl font-bold mb-2">${isPass ? 'Parabéns! Etapa Concluída' : 'Revisão Necessária'}</h2>
      <p class="mb-6 text-slate-600">${isPass ? 'Você dominou o conteúdo!' : 'Não desanime. Revise os erros e tente de novo.'}</p>
      <div class="bg-white p-4 rounded-xl shadow mb-6 grid grid-cols-2 gap-4 text-sm">
        <div>✅ Acertos: <span class="font-bold text-emerald-600">${state.stats.correct}</span></div>
        <div>❌ Erros: <span class="font-bold text-rose-600">${state.stats.answered - state.stats.correct}</span></div>
      </div>
      <button onclick="startStage(${state.currentStage})" class="btn-primary btn-blue mb-2">🔄 Tentar Novamente</button>
      <button onclick="renderMistakes()" class="btn-primary bg-slate-200 text-slate-800 mb-2">📖 Revisar Meus Erros (${state.mistakes.length})</button>
      <button onclick="renderHome()" class="btn-primary btn-purple">🏠 Voltar ao Menu</button>
    </div>
  `);
}

function renderMistakes() {
  if(state.mistakes.length === 0) return showScreen(`<div class="screen text-center py-20"><h2>🌟 Nenhum erro pendente!</h2><button onclick="renderHome()" class="btn-primary btn-blue mt-4">Voltar</button></div>`);
  
  const q = state.mistakes[0];
  showScreen(`
    <div class="screen">
      <h3 class="text-xl font-bold mb-2">📖 Revisão: Preciso Revisar</h3>
      <p class="text-sm text-slate-500 mb-4">Revisando para fixar na memória!</p>
      <div class="bg-white p-5 rounded-xl shadow-sm mb-4 border-l-4 border-blue-500">
        <p class="font-bold">${q.q}</p>
      </div>
      <div id="opts" class="grid gap-3">
        ${q.alt.map((a,i)=>`<button onclick="revCheck(${i}, ${q.c})" class="card-option">${a}</button>`).join('')}
      </div>
      <button onclick="renderHome()" class="btn-primary bg-slate-200 text-slate-800 mt-4">Sair</button>
    </div>
  `);
}

function revCheck(sel, cor) {
  const q = state.mistakes[0];
  const btns = $('#opts').querySelectorAll('button');
  btns.forEach(b=>b.disabled=true);
  btns[cor].classList.add('correct');
  if(sel===cor) {
    confetti(); state.xp+=15; state.streak++;
    state.mistakes.shift(); // Remove da lista se acertar
  } else { btns[sel].classList.add('wrong','shake'); state.combo=0; }
  save();
  setTimeout(()=>renderMistakes(), 1000);
}

// Modos Especiais
function renderSurvival() {
  state.survivalMode = true; state.lives = 3; state.survivalScore = 0; state.quizIndex = 0;
  state.quizPool = QUESTIONS.sort(()=>0.5-Math.random());
  showScreen(`<div class="screen text-center py-10"><h2 class="text-2xl font-bold mb-2">🔥 Modo Sobrevivência</h2><p class="mb-6">Errou 3? Fim. Acertos dão vida.</p><button onclick="initSurvival()" class="btn-primary btn-red">Começar</button><button onclick="renderHome()" class="btn-primary bg-slate-500 mt-2">Voltar</button></div>`);
}

function initSurvival() { renderQuestionSurvival(); }

function renderQuestionSurvival() {
  if(state.lives <= 0) { state.survivalMode = false; return showScreen(`<div class="screen text-center py-10"><h2>💀 Fim de Jogo</h2><p>Pontuação: ${state.survivalScore}</p><button onclick="renderSurvival()" class="btn-primary btn-red mt-4">Tentar de Novo</button><button onclick="renderHome()" class="btn-primary bg-slate-500 mt-2">Menu</button></div>`); }
  const q = state.quizPool[state.quizIndex % state.quizPool.length];
  // Lógica similar ao renderQuestion, mas com ganho de vida a cada 3 acertos
  let html = `<div class="screen"><div class="flex justify-between text-xs mb-2"><span>Score: ${state.survivalScore}</span><span>Vidas: ${'❤️'.repeat(state.lives)}</span></div>
    <div class="bg-white p-5 rounded-xl shadow-sm mb-4"><p class="font-bold">${q.q}</p></div>
    <div id="opts" class="grid gap-3">${q.alt.map((a,i)=>`<button onclick="checkSurvival(${i}, ${q.c})" class="card-option">${a}</button>`).join('')}</div></div>`;
  showScreen(html);
  state.currentQ = q; // Armazena para callback
}

function checkSurvival(sel, cor) {
  const q = state.currentQ;
  const btns = $('#opts').querySelectorAll('button'); btns.forEach(b=>b.disabled=true);
  if(sel===cor) { btns[cor].classList.add('correct'); state.survivalScore++; state.streak++; state.xp+=10; if(state.streak%3===0 && state.lives<5) state.lives++; }
  else { btns[sel].classList.add('wrong','shake'); state.lives--; state.streak=0; }
  save(); updateHeader();
  state.quizIndex++; setTimeout(()=>renderQuestionSurvival(), 1000);
}

function renderExam() {
  state.examMode = true; state.lives = 5; state.quizPool = QUESTIONS.sort(()=>0.5-Math.random()).slice(0,15); state.quizIndex=0;
  showScreen(`<div class="screen text-center py-10"><h2 class="text-2xl font-bold mb-2">📝 Modo Prova</h2><p>15 questões. Sem dicas. Cronometrado (mental).</p><button onclick="initQuiz(true)" class="btn-primary btn-blue">Iniciar Prova</button><button onclick="renderHome()" class="btn-primary bg-slate-500 mt-2">Voltar</button></div>`);
}

function renderStats() {
  const acc = state.stats.answered > 0 ? ((state.stats.correct/state.stats.answered)*100).toFixed(1) : 0;
  showScreen(`
    <div class="screen text-center py-10">
      <h2 class="text-2xl font-bold mb-4">📊 Suas Estatísticas</h2>
      <div class="grid grid-cols-2 gap-4 mb-6">
        <div class="bg-white p-4 rounded-xl shadow"><p class="text-2xl font-bold">${state.level}</p><p class="text-sm">Nível</p></div>
        <div class="bg-white p-4 rounded-xl shadow"><p class="text-2xl font-bold">${state.xp}</p><p class="text-sm">XP Total</p></div>
        <div class="bg-white p-4 rounded-xl shadow"><p class="text-2xl font-bold">${state.stats.answered}</p><p class="text-sm">Respondidas</p></div>
        <div class="bg-white p-4 rounded-xl shadow"><p class="text-2xl font-bold">${acc}%</p><p class="text-sm">Taxa de Acerto</p></div>
      </div>
      <p class="text-sm text-slate-500 mb-4">🔥 Melhor Sequência: ${state.streak}</p>
      <button onclick="renderHome()" class="btn-primary btn-blue">Voltar</button>
    </div>
  `);
}

// Init
document.addEventListener('DOMContentLoaded', () => {
  updateHeader();
  renderHome();
  if(state.lives < 1) state.lives = 1; save();
});