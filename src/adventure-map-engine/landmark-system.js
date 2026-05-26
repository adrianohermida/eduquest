/**
 * EduQuest Adventure Map Engine
 * Layer 6: emotional landmarks.
 */

const AdventureLandmarkSystem = {
    glyphs: {
        immunity: ['🛡️', '🏰', '🌿'],
        microbes: ['🍄', '🦠', '🌫️'],
        dengue: ['🦟', '🌴', '💧'],
        sanitation: ['🚰', '🏙️', '🔧'],
        vaccines: ['🧪', '🔬', '💠'],
        epidemics: ['🌋', '🧬', '🔥'],
        'fake-news': ['🧩', '⚠️', '📡'],
        'final-tower': ['🗼', '👑', '⭐'],
    },

    build(biomes, world) {
        return biomes.flatMap((b, i) => {
            const glyphs = this.glyphs[b.id] || ['✦'];
            const mid = b.top + b.height * 0.48;
            const alt = b.top + b.height * 0.72;
            return [
                { glyph: glyphs[0], x: i % 2 === 0 ? 15 : 82, y: mid, size: 'xl', biome: b.id },
                { glyph: glyphs[1], x: i % 2 === 0 ? 82 : 16, y: alt, size: 'lg', biome: b.id },
                { glyph: glyphs[2], x: 50, y: b.top + b.height * 0.24, size: 'sm', biome: b.id },
            ].map(item => ({ ...item, x: Math.round((item.x / 100) * world.width), y: Math.round(item.y) }));
        });
    },

    render(items) {
        return items.map((item, index) => `<div class="wm-landmark wm-landmark-${item.size}" data-biome="${item.biome}"
            style="left:${item.x}px;top:${item.y}px;animation-delay:${(index % 5) * 0.35}s" aria-hidden="true">${item.glyph}</div>`).join('');
    },
};

window.AdventureLandmarkSystem = AdventureLandmarkSystem;
