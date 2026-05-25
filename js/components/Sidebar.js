const Sidebar = {
  render(subject, currentStage, stagesCompleted) {
    const chapters = CHAPTERS[subject] || {};
    
    return `
      <aside class="sidebar animate-slide">
        <div class="sidebar-logo">
          <span>🎓</span>
          <span>EduQuest</span>
        </div>
        
        <nav class="nav-section">
          <p class="text-xs font-bold text-slate-400 uppercase mb-2">Capítulos</p>
          ${Object.entries(chapters).map(([id, chapter]) => `
            <div class="nav-item ${currentStage == id ? 'active' : ''} 
                        ${stagesCompleted.includes(id) ? 'completed' : ''}" 
                 data-stage="${id}">
              <span>${chapter.icon}</span>
              <span>${chapter.name}</span>
              ${stagesCompleted.includes(id) ? '<span class="ml-auto">✅</span>' : ''}
            </div>
          `).join('')}
        </nav>
        
        <div class="nav-section mt-4">
          <p class="text-xs font-bold text-slate-400 uppercase mb-2">Modos</p>
          <div class="nav-item" data-mode="learn">📖 Aprender</div>
          <div class="nav-item" data-mode="intensive">🧠 Memorização</div>
          <div class="nav-item" data-mode="exam">📝 Prova</div>
        </div>
        
        <div class="nav-section mt-4">
          <button id="btn-settings" class="w-full text-left nav-item">⚙️ Configurações</button>
          <button id="btn-sound" class="w-full text-left nav-item">🔊 Som: ON</button>
        </div>
      </aside>
    `;
  },
  
  init(onNavigate, onModeChange) {
    Utils.$$('.nav-item[data-stage]').forEach(item => {
      item.onclick = () => onNavigate(parseInt(item.dataset.stage));
    });
    
    Utils.$$('.nav-item[data-mode]').forEach(item => {
      item.onclick = () => onModeChange(item.dataset.mode);
    });
    
    Utils.$('#btn-sound').onclick = () => {
      Audio.toggle();
      Utils.$('#btn-sound').textContent = `🔊 Som: ${Audio.enabled ? 'ON' : 'OFF'}`;
    };
  },
  
  updateActive(stage) {
    Utils.$$('.nav-item[data-stage]').forEach(item => {
      item.classList.toggle('active', parseInt(item.dataset.stage) === stage);
    });
  }
};