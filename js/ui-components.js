/**
 * EDUQUEST UI COMPONENTS v2.0
 * Componentes de interface reutilizáveis
 */

const UIComponents = {
    // Mantido para compatibilidade — rendering principal está no Router
    createChapterCard(id, subject, title, progress) {
        const card    = document.createElement('div');
        const percent = progress.percent || 0;
        card.className = 'chapter-card';
        card.onclick   = () => Router.navigate(`#chapter/${id}`);
        card.innerHTML = `
            <div class="chapter-icon-wrap">📚</div>
            <div class="chapter-body">
                <div class="chapter-subject">${subject}</div>
                <div class="chapter-title">${title}</div>
                <div class="chapter-progress-row">
                    <div class="chapter-progress-track">
                        <div class="chapter-progress-fill" style="width:${percent}%"></div>
                    </div>
                    <span class="chapter-percent">${percent}%</span>
                </div>
            </div>
            <div class="chapter-arrow">›</div>`;
        return card;
    }
};

window.UIComponents = UIComponents;
