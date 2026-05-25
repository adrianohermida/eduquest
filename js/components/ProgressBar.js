const ProgressBar = {
  create(label, value, max, color = 'var(--primary)') {
    const percent = Math.round((value / max) * 100);
    return `
      <div class="progress-container">
        <div class="progress-label">
          <span>${label}</span>
          <span>${value}/${max} (${percent}%)</span>
        </div>
        <div class="progress-bar">
          <div class="progress-fill" style="width: ${percent}%; background: ${color}"></div>
        </div>
      </div>
    `;
  },
  
  createStageProgress(stage, totalStages) {
    return this.create(`Etapa ${stage}`, stage, totalStages, 'var(--secondary)');
  },
  
  createXPProgress(xp, level) {
    const needed = level * CONFIG.xp.levelBase;
    return this.create('XP para próximo nível', xp % needed, needed, 'var(--purple)');
  },
  
  animate(element, from, to, duration = 500) {
    const start = performance.now();
    const step = (timestamp) => {
      const progress = Math.min((timestamp - start) / duration, 1);
      const value = Math.round(from + (to - from) * progress);
      element.style.width = value + '%';
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }
};