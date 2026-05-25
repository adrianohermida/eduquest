/**
 * EDUQUEST APP v2.0 — Entry Point
 */

document.addEventListener('DOMContentLoaded', () => {
    if (typeof CONFIG === 'undefined') {
        console.error('❌ CONFIG não carregado!');
        return;
    }
    if (typeof State === 'undefined') {
        console.error('❌ State não carregado!');
        return;
    }

    State.init();
    if (typeof SoundManager !== 'undefined') SoundManager.init();
    if (typeof Sidebar !== 'undefined') Sidebar.init();
    if (typeof HUD !== 'undefined') HUD.init();
    Router.init();
    Router.handleRoute();

    window.addEventListener('hashchange', () => {
        Router.handleRoute();
    });

    // Daily login reward + streak risk — delayed so route renders first
    if (State.isOnboarded()) {
        setTimeout(() => State.checkDailyLogin(), 800);
    }

    // Register service worker for PWA
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('/sw.js').catch(() => {});
    }

    console.log('✅ EduQuest v2.0 pronto!');
});
