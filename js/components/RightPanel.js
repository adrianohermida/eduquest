const RightPanel = {
  render(stats, mistakes, currentStage) {
    const accuracy = State.getAccuracy();
    
    return `
      <aside class="right-panel animate-slide">
        <div class="panel-section">
          <p class="panel-title">📊 Seu Desempenho</p>
          <div class="flex flex-wrap gap-1">
            <span class="stat-badge xp">⭐ ${State.data.xp} XP</span>
            <span class="stat-badge lives">❤️ ${State.data.lives}</span>
            <span class="stat-badge streak">🔥 ${State.data.streak}</span>
          </div>
          ${ProgressBar.create('Acurácia', accuracy, 100, accuracy >= 80 ? 'var(--success)' : accuracy >= 60 ? 'var(--secondary)' : 'var(--danger)')}
        </div>
        
        <div class="panel-section">
          <p class="panel-title">📚 Em Progresso</p>
          <p class="text-sm text-slate-600 mb-2">Etapa ${currentStage}/4</p>
          ${ProgressBar.createStageProgress(currentStage, 4)}
        </div>
        
        ${mistakes.length > 0 ? `
          <div class="panel-section">
            <p class="panel-title">⚠️ Precisa Revisar</p>
            <p class="text-sm text-slate-600 mb-2">${mistakes.length} questões</p>
            <button id="btn-review-mistakes" class="btn btn-secondary btn-sm">
              Revisar Agora
            </button>
          </div>
        ` : `
          <div class="panel-section" style="background: #f0fdf4;">
            <p class="panel-title" style="color: var(--success);">🎉 Tudo Certo!</p>
            <p class="text-sm text-slate-600">Nenhuma questão pendente.</p>
          </div>
        `}
        
        <div class="panel-section">
          <p class="panel-title">🏆 Conquistas</p>
          <div class="flex flex-wrap gap-2">
            ${this.renderBadges(stats)}
          </div>
        </div>
      </aside>
    `;
  },
  
  renderBadges(stats) {
    const badges = [];
    if (stats.totalCorrect >= 10) badges.push({ icon: '🌟', label: 'Iniciante' });
    if (stats.totalCorrect >= 50) badges.push({ icon: '⭐', label: 'Estudante' });
    if (State.data.streak >= 10) badges.push({ icon: '🔥', label: 'Sequência' });
    if (State.getAccuracy() >= 90) badges.push({ icon: '🎯', label: 'Precisão' });
    
    return badges.map(b => `
      <span class="stat-badge" style="background: #f3e8ff; color: #7c3aed;">
        ${b.icon} ${b.label}
      </span>
    `).join('') || '<span class="text-xs text-slate-400">Complete etapas para ganhar badges!</span>';
  },
  
  init(onReviewMistakes) {
    Utils.$('#btn-review-mistakes')?.addEventListener('click', onReviewMistakes);
  },
  
  update(stats, mistakes, stage) {
    const panel = Utils.$('.right-panel');
    if (panel) panel.innerHTML = this.render(stats, mistakes, stage);
    this.init(() => App.showMistakeReview());
  }
};