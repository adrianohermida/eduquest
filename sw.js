/**
 * EduQuest Service Worker v1.0
 * Cache-first for assets, network-first for API calls
 */

const CACHE_NAME  = 'eduquest-v14';
const CACHE_SHELL = [
    '/',
    '/index.html',
    '/manifest.json',
    /* CSS */
    '/css/animations.css',
    '/css/styles.css',
    '/css/layout.css',
    '/css/modal-hud.css',
    '/css/design-system-v3.css',
    '/css/world-map.css',
    '/css/hud-dropdowns.css',
    '/css/icons.css',
    '/css/social.css',
    '/css/sprint5.css',
    '/css/game-feel.css',
    '/css/learning.css',
    '/css/builder.css',
    '/css/depth.css',
    '/css/cards.css',
    '/css/spacing.css',
    '/css/admin.css',
    /* Core JS */
    '/js/config.js',
    '/js/state.js',
    '/js/utils.js',
    '/js/sound-manager.js',
    '/js/ui-components.js',
    '/js/game-engine.js',
    '/js/adventure-map.js',
    '/js/sidebar.js',
    '/js/modal-engine.js',
    '/js/router.js',
    '/js/session-guard.js',
    '/js/app.js',
    /* Feature engines — Sprints 3-6C */
    '/js/social-engine.js',
    '/js/events-engine.js',
    '/js/ai-studio.js',
    '/js/builder.js',
    '/js/flashcard-engine.js',
    '/js/memory-engine.js',
    '/js/focus-engine.js',
    '/js/icon-system.js',
    /* Mini-games */
    '/js/mini-games/speed-drill.js',
    '/js/mini-games/memory-game.js',
    '/js/mini-games/forca.js',
    '/js/mini-games/word-search.js',
    /* Adventure map engine */
    '/src/adventure-map-engine/biome-generator.js',
    '/src/adventure-map-engine/path-generator.js',
    '/src/adventure-map-engine/node-system.js',
    '/src/adventure-map-engine/landmark-system.js',
    '/src/adventure-map-engine/ambient-system.js',
    '/src/adventure-map-engine/world-renderer.js',
    '/src/adventure-map-engine/map-camera.js',
    '/src/adventure-map-engine/node-animations.js',
    /* Motion system */
    '/src/motion/motion-tokens.js',
    '/src/motion/transitions.js',
    '/src/motion/springs.js',
    '/src/motion/feedback.js',
    '/src/motion/tactile-engine.js',
    '/src/motion/ui-animations.js',
    /* Admin */
    '/src/admin/admin.js',
    /* Ciências 7º Ano — Capítulo 7 Doenças */
    '/js/data/ciencias/7ano/chapters/cap7_doencas/metadata.js',
    '/js/data/ciencias/7ano/chapters/cap7_doencas/stages/stage_01.js',
    '/js/data/ciencias/7ano/chapters/cap7_doencas/stages/stage_02.js',
    '/js/data/ciencias/7ano/chapters/cap7_doencas/stages/stage_03.js',
    '/js/data/ciencias/7ano/chapters/cap7_doencas/stages/stage_04.js',
    '/js/data/ciencias/7ano/chapters/cap7_doencas/stages/stage_05.js',
    '/js/data/ciencias/7ano/chapters/cap7_doencas/stages/stage_06.js',
    '/js/data/ciencias/7ano/chapters/cap7_doencas/stages/stage_07.js',
    '/js/data/ciencias/7ano/chapters/cap7_doencas/stages/stage_08.js',
    '/js/data/ciencias/7ano/chapters/cap7_doencas/stages/stage_09.js',
    '/js/data/ciencias/7ano/chapters/cap7_doencas/stages/stage_10.js',
    '/js/data/ciencias/7ano/chapters/cap7_doencas/stages/stage_boss.js',
    '/js/data/ciencias/7ano/chapters/cap7_doencas/stages/stage_final.js',
    /* Matemática 7º Ano — Números Racionais */
    '/js/data/matematica/7ano/chapters/mat_racionais/metadata.js',
    '/js/data/matematica/7ano/chapters/mat_racionais/stages/mat_s01.js',
    '/js/data/matematica/7ano/chapters/mat_racionais/stages/mat_s02.js',
    '/js/data/matematica/7ano/chapters/mat_racionais/stages/mat_s03.js',
    '/js/data/matematica/7ano/chapters/mat_racionais/stages/mat_s04.js',
    '/js/data/matematica/7ano/chapters/mat_racionais/stages/mat_s05.js',
    '/js/data/matematica/7ano/chapters/mat_racionais/stages/mat_s06.js',
    '/js/data/matematica/7ano/chapters/mat_racionais/stages/mat_sboss.js',
    '/js/data/matematica/7ano/chapters/mat_racionais/stages/mat_sfinal.js',
    /* Português 7º Ano — Gramática */
    '/js/data/portugues/7ano/chapters/port_gram/metadata.js',
    '/js/data/portugues/7ano/chapters/port_gram/stages/pt_s01.js',
    '/js/data/portugues/7ano/chapters/port_gram/stages/pt_s02.js',
    '/js/data/portugues/7ano/chapters/port_gram/stages/pt_s03.js',
    '/js/data/portugues/7ano/chapters/port_gram/stages/pt_s04.js',
    '/js/data/portugues/7ano/chapters/port_gram/stages/pt_s05.js',
    '/js/data/portugues/7ano/chapters/port_gram/stages/pt_s06.js',
    '/js/data/portugues/7ano/chapters/port_gram/stages/pt_sboss.js',
    '/js/data/portugues/7ano/chapters/port_gram/stages/pt_sfinal.js',
    /* História 7º Ano — Idade Média */
    '/js/data/historia/7ano/chapters/hist_medieval/metadata.js',
    '/js/data/historia/7ano/chapters/hist_medieval/stages/hist_s01.js',
    '/js/data/historia/7ano/chapters/hist_medieval/stages/hist_s02.js',
    '/js/data/historia/7ano/chapters/hist_medieval/stages/hist_s03.js',
    '/js/data/historia/7ano/chapters/hist_medieval/stages/hist_s04.js',
    '/js/data/historia/7ano/chapters/hist_medieval/stages/hist_s05.js',
    '/js/data/historia/7ano/chapters/hist_medieval/stages/hist_s06.js',
    '/js/data/historia/7ano/chapters/hist_medieval/stages/hist_sboss.js',
    '/js/data/historia/7ano/chapters/hist_medieval/stages/hist_sfinal.js',
    /* Geografia 7º Ano — Brasil */
    '/js/data/geografia/7ano/chapters/geo_brasil/metadata.js',
    '/js/data/geografia/7ano/chapters/geo_brasil/stages/geo_s01.js',
    '/js/data/geografia/7ano/chapters/geo_brasil/stages/geo_s02.js',
    '/js/data/geografia/7ano/chapters/geo_brasil/stages/geo_s03.js',
    '/js/data/geografia/7ano/chapters/geo_brasil/stages/geo_s04.js',
    '/js/data/geografia/7ano/chapters/geo_brasil/stages/geo_s05.js',
    '/js/data/geografia/7ano/chapters/geo_brasil/stages/geo_s06.js',
    '/js/data/geografia/7ano/chapters/geo_brasil/stages/geo_sboss.js',
    '/js/data/geografia/7ano/chapters/geo_brasil/stages/geo_sfinal.js',
    /* Assets */
    '/assets/icons/icon-192.png',
    '/assets/icons/icon-512.png',
    '/assets/icons/apple-touch-icon-180x180.png',
    '/assets/sounds/correct.wav',
    '/assets/sounds/wrong.wav',
    '/assets/sounds/click.wav',
    '/assets/sounds/complete.mp3',
];

self.addEventListener('install', e => {
    e.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => cache.addAll(CACHE_SHELL))
            .then(() => self.skipWaiting())
    );
});

self.addEventListener('activate', e => {
    e.waitUntil(
        caches.keys().then(keys =>
            Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)))
        ).then(() => self.clients.claim())
    );
});

self.addEventListener('fetch', e => {
    const url = new URL(e.request.url);

    // Never intercept Supabase API calls
    if (url.hostname.includes('supabase')) return;

    // Cache-first for static assets
    if (e.request.method === 'GET') {
        e.respondWith(
            caches.match(e.request).then(cached => {
                if (cached) return cached;
                return fetch(e.request).then(response => {
                    if (response.ok && url.origin === location.origin) {
                        const clone = response.clone();
                        caches.open(CACHE_NAME).then(cache => cache.put(e.request, clone));
                    }
                    return response;
                }).catch(() => caches.match('/index.html'));
            })
        );
    }
});
