const QuestionCard = {
  create(question, showExplanation = false) {
    const letters = ['A', 'B', 'C', 'D', 'E'];
    const difficulty = CONFIG.difficulty[question.difficulty];
    
    return `
      <div class="card" data-qid="${question.id}">
        <div class="flex justify-between items-start mb-3">
          <span class="badge" style="background: ${difficulty.color}20; color: ${difficulty.color}">
            ${difficulty.label}
          </span>
          <span class="text-xs text-slate-400">${question.category}</span>
        </div>
        
        <p class="font-semibold text-lg mb-4 leading-snug">${question.q}</p>
        
        <div class="options">
          ${question.alt.map((alt, i) => `
            <button class="option" data-idx="${i}">
              <span class="option-letter">${letters[i]}</span>
              <span>${alt}</span>
            </button>
          `).join('')}
        </div>
        
        ${showExplanation ? `
          <div class="mt-4 p-3 bg-blue-50 rounded-lg border-l-4 border-blue-400">
            <p class="text-sm font-semibold text-blue-800 mb-1">💡 Explicação:</p>
            <p class="text-sm text-slate-600">${question.e}</p>
          </div>
        ` : ''}
      </div>
    `;
  },
  
  markAnswer(cardEl, selectedIdx, correctIdx, isCorrect) {
    const options = cardEl.querySelectorAll('.option');
    options.forEach((opt, i) => {
      opt.disabled = true;
      if (i === correctIdx) opt.classList.add('correct');
      if (i === selectedIdx && !isCorrect) opt.classList.add('wrong');
    });
  },
  
  createBonus(question) {
    return `
      <div class="card" style="border-color: var(--secondary); background: #fffbeb;">
        <div class="card-header">
          <span class="text-2xl">🎁</span>
          <span class="card-title">Questão Bônus</span>
        </div>
        <p class="text-sm text-slate-600 mb-3">Reforço: ${question.theme}</p>
        ${this.create(question, true)}
      </div>
    `;
  }
};