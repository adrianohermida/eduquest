/**
 * Componentes de UI Reutilizáveis
 * Estilo: Mobile First, Gamificado, Grande e Tocável
 */
const UIComponents = {
    createHeader() {
        const header = document.createElement('header');
        header.className = 'gamified-header';
        
        const streak = State.getUserStreak();
        const gems = State.getUserGems();
        const xp = State.getUserXP();

        header.innerHTML = `
            <div class="user-stats">
                <div class="stat-item fire ${streak > 0 ? 'active' : ''}">
                    🔥 <span>${streak}</span>
                </div>
                <div class="stat-item gem">
                    💎 <span>${gems}</span>
                </div>
                <div class="stat-item xp">
                    ⭐ <span>${xp} XP</span>
                </div>
            </div>
            <div class="avatar">
                <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Ccircle cx='50' cy='50' r='50' fill='%234EC0FF'/%3E%3Ctext x='50' y='65' font-size='50' text-anchor='middle' fill='white'%3E🦉%3C/text%3E%3C/svg%3E" alt="Avatar">
            </div>
        `;
        return header;
    },

    createChapterCard(id, subject, title, progress) {
        const card = document.createElement('div');
        card.className = `chapter-card ${progress.completed ? 'completed' : ''}`;
        card.onclick = () => window.location.hash = `#chapter/${id}`;
        
        const percent = Math.round((progress.stagesCompleted / progress.totalStages) * 100) || 0;

        card.innerHTML = `
            <div class="card-icon">${subject.includes('Ciências') ? '🧬' : '📐'}</div>
            <div class="card-info">
                <h3>${title}</h3>
                <div class="progress-track">
                    <div class="progress-fill" style="width: ${percent}%"></div>
                </div>
                <span class="progress-text">${percent}% Concluído</span>
            </div>
            <div class="card-arrow">➜</div>
        `;
        return card;
    },

    createStageNode(number, stageId, chapterId, unlocked, completed, stars) {
        const node = document.createElement('div');
        node.className = `stage-node ${unlocked ? 'unlocked' : 'locked'} ${completed ? 'completed' : ''}`;
        
        if (unlocked) {
            node.onclick = () => window.location.hash = `#stage/${chapterId}/${stageId}`;
        }

        // Estrelas dinâmicas
        let starsHtml = '';
        for(let i=0; i<3; i++) {
            starsHtml += i < stars ? '★' : '☆';
        }

        node.innerHTML = `
            <div class="node-circle">
                ${completed ? '🏆' : number}
            </div>
            <div class="node-stars">${starsHtml}</div>
            ${!unlocked ? '<div class="lock-icon">🔒</div>' : ''}
        `;
        return node;
    }
};