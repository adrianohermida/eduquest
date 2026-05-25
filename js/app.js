/**
 * EDUQUEST APP - Entry Point
 * Inicializa Config, Estado, Router e UI
 */

// 1. Inicialização Global
document.addEventListener('DOMContentLoaded', () => {
    console.log('🚀 EduQuest Iniciando...');
    
    // Carrega dados iniciais se necessário (já estão globais via script tags)
    if (typeof CONFIG === 'undefined') {
        console.error('❌ Erro Crítico: CONFIG não carregado. Verifique a ordem dos scripts no index.html');
        return;
    }

    // Inicializa Estado (carrega do localStorage ou cria novo)
    State.init();

    // Inicializa Router
    Router.init();

    // Renderiza a view inicial baseada na rota atual
    Router.handleRoute();

    // Listener para mudanças de hash (navegação)
    window.addEventListener('hashchange', () => {
        Router.handleRoute();
    });

    console.log('✅ EduQuest Pronto!');
});