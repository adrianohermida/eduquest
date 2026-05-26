/**
 * EduQuest Service Worker v1.0
 * Cache-first for assets, network-first for API calls
 */

const CACHE_NAME  = 'eduquest-v6';
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
    /* Admin */
    '/src/admin/admin.js',
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
