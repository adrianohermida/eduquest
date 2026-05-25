// Estado Global
const state = {
  currentStage: 1,
  totalStages: 4,
  currentQuestionIndex: 0,
  questions: [],
  lives: 5,
  streak: 0,
  xp: 0,
  selectedOption: null,
  answered: false
};

// Elementos DOM
const els = {
  container: document.getElementById('game-container'),
  checkBtn: document.getElementById('check-btn'),
  progressBar: document.getElementById('progress-bar'),
  hearts: document.getElementById('hearts-display'),
  feedbackArea: document.getElementById('feedback-area'),
  feedbackText: document.getElementById('feedback-text')
};

// 1. Carregamento Dinâmico (Simulado)
async function loadStage(stageNum) {
  try {
    // Em produção, faria: const response = await fetch(`data/cap7_ciencias/stage_0${stageNum}.js`);
    // Como estamos em um exemplo, vamos simular a importação dos dados acima
    let stageData;
    if(stageNum === 1) stageData = STAGE_01_DATA; // Referencia global definida no outro script
    else if(stageNum === 2) stageData = STAGE_02_DATA;
    else stageData = STAGE_01_DATA; // Fallback

    state.questions = stageData.questions;
    state.currentQuestionIndex = 0;
    renderQuestion();
  } catch (e) {
    console.error("Erro ao carregar etapa", e);
  }
}

// 2. Renderização da Questão
function renderQuestion() {
  const q = state.questions[state.currentQuestionIndex];
  state.selectedOption = null;
  state.answered = false;
  
  // Atualizar UI
  els.checkBtn.disabled = true;
  els.checkBtn.textContent = "VERIFICAR";
  els.checkBtn.className = "btn btn-primary";
  els.feedbackArea.classList.add('hidden');
  
  // Atualizar barra
  const progress = (state.currentQuestionIndex / state.questions.length) * 100;
  els.progressBar.style.width = `${progress}%`;

  let html = `<h2 class="question-title">${q.prompt}</h2>`;

  if (q.type === 'binary') {
    html += `
      <div class="options-grid" style="grid-template-columns: 1fr 1fr;">
        <div class="option-card" onclick="selectOption(true, this)">VERDADEIRO</div>
        <div class="option-card" onclick="selectOption(false, this)">FALSO</div>
      </div>
    `;
  } else {
    html += `<div class="options-grid">`;
    q.options.forEach((opt, idx) => {
      html += `<div class="option-card" onclick="selectOption(${opt}, this)">${opt.text}</div>`;
    });
    html += `</div>`;
  }

  els.container.innerHTML = html;
}

// 3. Seleção de Opção
window.selectOption = function(value, element) {
  if (state.answered) return;

  // Remover seleção anterior
  document.querySelectorAll('.option-card').forEach(el => el.classList.remove('selected'));
  element.classList.add('selected');

  state.selectedOption = value;
  els.checkBtn.disabled = false;
};

// 4. Verificar Resposta
els.checkBtn.onclick = () => {
  if (!state.selectedOption) return;

  const q = state.questions[state.currentQuestionIndex];
  let isCorrect = false;

  if (q.type === 'binary') {
    isCorrect = (state.selectedOption === q.correct);
  } else if (q.type === 'select' || q.type === 'fill') {
    isCorrect = state.selectedOption.correct;
  }

  processAnswer(isCorrect, q.explanation);
};

function processAnswer(isCorrect, explanation) {
  state.answered = true;
  
  const cards = document.querySelectorAll('.option-card');
  // Lógica visual para marcar certo/errado
  cards.forEach(card => {
    card.style.cursor = "default";
    // Lógica simplificada para encontrar o card certo
    if(card.textContent.includes(explanation.split(' ')[0])) { 
       // Em implementação real, compararíamos IDs ou valores exatos
    }
  });

  // Feedback visual
  if (isCorrect) {
    document.querySelector('.selected').classList.add('correct');
    els.feedbackArea.className = "feedback-area success";
    els.feedbackText.textContent = "Mandou bem! 🎉";
    els.checkBtn.textContent = "CONTINUAR";
    state.streak++;
    state.xp += 10;
    playSound('success');
  } else {
    document.querySelector('.selected').classList.add('wrong');
    // Marcar o correto também
    // (Lógica para achar o correto visualmente omitida para brevidade)
    
    els.feedbackArea.className = "feedback-area error";
    els.feedbackText.textContent = `Ops! ${explanation}`;
    els.checkBtn.className = "btn btn-wrong";
    els.checkBtn.textContent = "ENTENDI";
    state.lives--;
    state.streak = 0;
    playSound('error');
  }

  updateHeader();
  
  // Mudar ação do botão
  els.checkBtn.disabled = false;
  els.checkBtn.onclick = nextStep;
  els.feedbackArea.classList.remove('hidden');
}

function nextStep() {
  state.currentQuestionIndex++;
  if (state.currentQuestionIndex >= state.questions.length) {
    finishStage();
  } else {
    renderQuestion();
  }
}

function finishStage() {
  els.container.innerHTML = `
    <div style="text-align:center;">
      <h1>Etapa Completa! 🏆</h1>
      <p>Você ganhou ${state.xp} XP!</p>
      <button class="btn btn-primary" onclick="location.reload()">Próxima Etapa</button>
    </div>
  `;
  els.progressBar.style.width = "100%";
  playSound('complete');
}

function updateHeader() {
  els.hearts.textContent = "❤️".repeat(state.lives) || "💔";
  document.getElementById('streak-display').textContent = `🔥 ${state.streak}`;
}

// Mock de sons
function playSound(type) {
  // console.log(`Playing sound: ${type}`);
}

// Iniciar
loadStage(1);