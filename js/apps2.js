// Text-to-Speech Controls
const TTSControls = {
  render() {
    return `
      <div class="tts-controls" style="position: fixed; bottom: 80px; right: 20px; z-index: 100;">
        <button id="btn-speak" class="btn btn-sm btn-primary" title="Ouvir conteúdo">
          🔊
        </button>
        <button id="btn-stop-speak" class="btn btn-sm btn-secondary" title="Parar">
          ⏹️
        </button>
      </div>
    `;
  },
  
  init(currentText) {
    document.body.insertAdjacentHTML('beforeend', this.render());
    
    document.getElementById('btn-speak').onclick = () => {
      AudioSys.speak(currentText);
    };
    
    document.getElementById('btn-stop-speak').onclick = () => {
      AudioSys.stopSpeaking();
    };
  },
  
  update(text) {
    const btn = document.getElementById('btn-speak');
    if (btn) {
      btn.onclick = () => AudioSys.speak(text);
    }
  }
};

// Modificar renderQuestion para adicionar TTS
function renderQuestion() {
  const q = state.questions[state.currentQuestionIndex];
  
  // ... código existente ...
  
  // Adicionar botão de ouvir
  setTimeout(() => {
    TTSControls.init(q.prompt + '. ' + q.options.map((o, i) => `${i+1}) ${o.text}`).join('. '));
  }, 100);
}

// Modificar showSummary para adicionar TTS
function showSummary() {
  // ... código existente ...
  
  // Permitir ouvir cada seção
  document.querySelectorAll('.summary-card').forEach(card => {
    const title = card.querySelector('.summary-title')?.textContent || '';
    const text = card.querySelector('.summary-text')?.textContent || '';
    
    const btnListen = document.createElement('button');
    btnListen.className = 'btn-listen-tts';
    btnListen.innerHTML = '🔊';
    btnListen.onclick = () => AudioSys.speak(title + '. ' + text);
    
    card.appendChild(btnListen);
  });
}