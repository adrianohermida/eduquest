const Flashcard = {
  create(question, answer, index) {
    return `
      <div class="flashcard-container" data-idx="${index}">
        <div class="flashcard-inner">
          <div class="flashcard-front">
            <span class="text-2xl mb-2 block">❓</span>
            ${question}
          </div>
          <div class="flashcard-back">
            <span class="text-2xl mb-2 block">✅</span>
            ${answer}
          </div>
        </div>
      </div>
    `;
  },
  
  createList(cards) {
    return cards.map((c, i) => this.create(c.q, c.a, i)).join('');
  },
  
  init(container) {
    container.querySelectorAll('.flashcard-container').forEach(card => {
      card.onclick = () => card.querySelector('.flashcard-inner').classList.toggle('flipped');
    });
  },
  
  createReview(items) {
    return `
      <div class="card">
        <h4 class="font-bold mb-3">🔄 Revisão Rápida</h4>
        ${items.map((item, i) => `
          <div class="mb-3 p-3 bg-slate-50 rounded-lg">
            <p class="font-semibold text-sm mb-1">${i+1}. ${item.q}</p>
            <details>
              <summary class="text-sm text-primary cursor-pointer">Ver resposta</summary>
              <p class="mt-2 text-emerald-600 font-medium">${item.a}</p>
            </details>
          </div>
        `).join('')}
      </div>
    `;
  }
};