const StatsPanel = {
  render(data) {
    const accuracy = State.getAccuracy();
    const timeSpent = Math.round(data.stats.timeSpent / 60);
    
    return `
      <div class="card text-center py-6 animate-fade">
        <h2 class="text-xl font-bold mb-4">📈 Estatísticas Detalhadas</h2>
        
        <div class="stats-grid mb-4">
          <div class="stat-card">
            <div class="stat-value">${data.level}</div>
            <div class="stat-label">Nível</div>
          </div>
          <div class="stat-card">
            <div class="stat-value">${data.xp}</div>
            <div class="stat-label">XP Total</div>
          </div>
          <div class="stat-card">
            <div class="stat-value">${data.stats.totalAnswered}</div>
            <div class="stat-label">Respondidas</div>
          </div>
          <div class="stat-card">
            <div class="stat-value">${accuracy}%</div>
            <div class="stat-label">Acurácia</div>
          </div>
        </div>
        
        ${ProgressBar.create('Progresso Geral', data.stats.totalCorrect, Math.max(150, data.stats.totalAnswered), 'var(--primary)')}
        
        <div class="text-left mt-4">
          <p class="font-semibold mb-2">📊 Por Etapa:</p>
          ${Object.entries(data.stageProgress || {}).map(([stage, progress]) => {
            const acc = progress.answered > 0 ? Math.round(progress.correct / progress.answered * 100) : 0;
            return `
              <div class="mb-2">
                <div class="flex justify-between text-sm mb-1">
                  <span>Etapa ${stage}</span>
                  <span>${acc}%</span>
                </div>
                <div class="progress-bar">
                  <div class="progress-fill" style="width: ${acc}%; 
                    background: ${acc >= 80 ? 'var(--success)' : acc >= 60 ? 'var(--secondary)' : 'var(--danger)'}">
                  </div>
                </div>
              </div>
            `;
          }).join('')}
        </div>
        
        <button class="btn btn-outline mt-4" onclick="App.showHome()">← Voltar</button>
      </div>
    `;
  },
  
  renderMistakeReview(mistakes) {
    if (mistakes.length === 0) {
      return `
        <div class="card text-center py-8">
          <div class="text-4xl mb-3">🌟</div>
          <h3 class="font-bold mb-2">Parabéns!</h3>
          <p class="text-slate-600 mb-4">Você não tem erros pendentes.</p>
          <button class="btn" onclick="App.showHome()">Continuar Estudando</button>
        </div>
      `;
    }
    
    return `
      <div class="card">
        <div class="card-header">
          <span class="text-2xl">📖</span>
          <h3 class="card-title">Revisão de Erros (${mistakes.length})</h3>
        </div>
        
        ${mistakes.slice(0, 5).map((m, i) => `
          <div class="mistake-item">
            <p class="mistake-question">${i+1}. ${m.question}</p>
            <p class="text-sm text-slate-500 mb-2">Sua resposta: <span class="text-rose-500">❌</span></p>
            <p class="text-sm font-semibold text-emerald-600 mb-2">Correta: ${m.correctAnswer}</p>
            <p class="mistake-explanation">💡 ${m.explanation}</p>
            <button class="btn btn-sm btn-primary mt-2" data-mistake-id="${m.id}">
              ✅ Marque como Aprendido
            </button>
          </div>
        `).join('')}
        
        ${mistakes.length > 5 ? `<p class="text-center text-sm text-slate-400 mt-2">+ ${mistakes.length - 5} mais...</p>` : ''}
        
        <div class="btn-group mt-4">
          <button class="btn btn-secondary" id="btn-bonus-quiz">🎁 Questões Bônus</button>
          <button class="btn btn-outline" onclick="App.showHome()">Voltar</button>
        </div>
      </div>
    `;
  }
};