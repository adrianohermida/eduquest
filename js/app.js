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
    Router.init();
    Router.handleRoute();

    window.addEventListener('hashchange', () => {
        Router.handleRoute();
    });

    console.log('✅ EduQuest v2.0 pronto!');
});
