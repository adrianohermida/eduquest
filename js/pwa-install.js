/**
 * EduQuest PWA Install Prompt
 * Gerencia o evento de instalação do PWA e exibe botão de instalação
 */

class PWAInstallManager {
    constructor() {
        this.deferredPrompt = null;
        this.installButton = null;
        this.init();
    }

    init() {
        // Aguardar evento beforeinstallprompt
        window.addEventListener('beforeinstallprompt', (e) => {
            e.preventDefault();
            this.deferredPrompt = e;
            this.showInstallButton();
            console.log('✅ PWA pronto para instalação');
        });

        // Detectar quando app foi instalado
        window.addEventListener('appinstalled', () => {
            console.log('✅ PWA instalado com sucesso!');
            this.deferredPrompt = null;
            this.hideInstallButton();
        });
    }

    showInstallButton() {
        // Criar botão de instalação se não existir
        if (!document.getElementById('pwa-install-btn')) {
            const btn = document.createElement('button');
            btn.id = 'pwa-install-btn';
            btn.innerHTML = '📲 Instalar EduQuest';
            btn.style.cssText = `
                position: fixed;
                bottom: 20px;
                right: 20px;
                background: linear-gradient(135deg, #f97316, #ea580c);
                color: white;
                border: none;
                padding: 12px 24px;
                border-radius: 50px;
                font-size: 16px;
                font-weight: bold;
                cursor: pointer;
                box-shadow: 0 4px 12px rgba(249, 115, 22, 0.4);
                z-index: 9999;
                transition: transform 0.2s, box-shadow 0.2s;
            `;
            
            btn.addEventListener('mouseenter', () => {
                btn.style.transform = 'translateY(-2px)';
                btn.style.boxShadow = '0 6px 16px rgba(249, 115, 22, 0.5)';
            });
            
            btn.addEventListener('mouseleave', () => {
                btn.style.transform = 'translateY(0)';
                btn.style.boxShadow = '0 4px 12px rgba(249, 115, 22, 0.4)';
            });

            btn.addEventListener('click', () => this.promptInstall());
            
            document.body.appendChild(btn);
            this.installButton = btn;
        }
    }

    hideInstallButton() {
        if (this.installButton) {
            this.installButton.remove();
            this.installButton = null;
        }
    }

    async promptInstall() {
        if (!this.deferredPrompt) {
            console.log('❌ Prompt de instalação não disponível');
            return;
        }

        this.deferredPrompt.prompt();
        const { outcome } = await this.deferredPrompt.userChoice;
        
        console.log(`Resposta do usuário: ${outcome}`);
        
        if (outcome === 'accepted') {
            console.log('✅ Usuário aceitou instalar o PWA');
        } else {
            console.log('❌ Usuário recusou instalar o PWA');
        }
        
        this.deferredPrompt = null;
        this.hideInstallButton();
    }

    isInstalled() {
        return window.matchMedia('(display-mode: standalone)').matches || 
               window.navigator.standalone === true;
    }
}

// Inicializar gerenciador PWA
const pwaInstallManager = new PWAInstallManager();
