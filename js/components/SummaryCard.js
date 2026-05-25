const SummaryCard = {
  create(item, index) {
    return `
      <div class="summary-card animate-fade" style="animation-delay: ${index * 0.1}s">
        <div class="summary-icon">${item.icon}</div>
        <div class="summary-title">${item.title}</div>
        <p class="summary-text">${item.text}</p>
      </div>
    `;
  },
  
  createList(items) {
    return items.map((item, i) => this.create(item, i)).join('');
  },
  
  createMacete(title, content) {
    return `
      <div class="card" style="background: linear-gradient(135deg, #fef3c7, #fcd34d); border-color: var(--secondary);">
        <div class="card-header">
          <span class="text-2xl">💡</span>
          <span class="card-title">Macete: ${title}</span>
        </div>
        <p class="font-semibold text-lg">${content}</p>
      </div>
    `;
  },
  
  createQuickTable(rows) {
    return `
      <div class="card">
        <table class="w-full text-sm">
          ${rows.map(r => `<tr class="border-b border-slate-100">
            <td class="py-2 font-semibold">${r.term}</td>
            <td class="py-2 text-slate-600">${r.meaning}</td>
          </tr>`).join('')}
        </table>
      </div>
    `;
  }
};