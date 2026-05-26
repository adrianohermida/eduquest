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
    if (typeof IconSystem !== 'undefined') {
        IconSystem.init();
        IconSystem.upgradeHUD();
        IconSystem.upgradeNav();
    }
    if (typeof SoundManager !== 'undefined') SoundManager.init();
    if (typeof Sidebar !== 'undefined') Sidebar.init();
    if (typeof HUD !== 'undefined') HUD.init();
    if (typeof EduFeedback !== 'undefined') EduFeedback.init();
    Router.init();
    Router.handleRoute();
    if (typeof EduTransitions !== 'undefined') {
        const route = (location.hash.replace('#', '').split('/')[0] || 'home');
        EduTransitions.markRoute(route);
        requestAnimationFrame(() => EduTransitions.pageEnter(document.getElementById('app-container')));
    }

    window.addEventListener('hashchange', () => {
        Router.handleRoute();
        if (typeof EduTransitions !== 'undefined') {
            const route = (location.hash.replace('#', '').split('/')[0] || 'home');
            EduTransitions.markRoute(route);
            requestAnimationFrame(() => EduTransitions.pageEnter(document.getElementById('app-container')));
        }
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
