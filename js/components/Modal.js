const Modal = {
  overlay: null,
  content: null,
  
  init() {
    this.overlay = Utils.createElement('div', 'modal-overlay hidden', '');
    this.content = Utils.createElement('div', 'modal-content', '');
    this.overlay.appendChild(this.content);
    document.body.appendChild(this.overlay);
    
    this.overlay.onclick = (e) => {
      if (e.target === this.overlay) this.hide();
    };
  },
  
  show(html, onClose = null) {
    this.content.innerHTML = html;
    this.overlay.classList.remove('hidden');
    if (onClose) this.onClose = onClose;
    document.body.style.overflow = 'hidden';
  },
  
  hide() {
    this.overlay.classList.add('hidden');
    document.body.style.overflow = '';
    if (this.onClose) this.onClose();
  },
  
  confirm(title, message, onConfirm, onCancel) {
    this.show(`
      <h3 class="font-bold text-lg mb-3">${title}</h3>
      <p class="mb-4 text-slate-600">${message}</p>
      <div class="btn-group">
        <button id="modal-confirm" class="btn btn-primary">Confirmar</button>
        <button id="modal-cancel" class="btn btn-outline">Cancelar</button>
      </div>
    `);
    Utils.$('#modal-confirm').onclick = () => { this.hide(); if (onConfirm) onConfirm(); };
    Utils.$('#modal-cancel').onclick = () => { this.hide(); if (onCancel) onCancel(); };
  }
};