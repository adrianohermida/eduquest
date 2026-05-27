/**
 * EduQuest Service Worker Register
 * Registra o Service Worker para funcionalidade offline e PWA
 */

if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('./sw.js')
            .then(registration => {
                console.log('✅ Service Worker registrado:', registration.scope);
                
                // Verificar updates
                registration.addEventListener('updatefound', () => {
                    const newWorker = registration.installing;
                    newWorker.addEventListener('statechange', () => {
                        if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
                            // Novo conteúdo disponível
                            console.log('🔄 Nova versão disponível! Recarregue para atualizar.');
                            if (confirm('Nova versão do EduQuest disponível! Deseja recarregar agora?')) {
                                window.location.reload();
                            }
                        }
                    });
                });
            })
            .catch(error => {
                console.error('❌ Falha no registro do Service Worker:', error);
            });
    });
}