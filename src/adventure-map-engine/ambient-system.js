/**
 * EduQuest Adventure Map Engine
 * Layer 7-8: ambient life and FX.
 */

const AdventureAmbientSystem = {
    props: {
        tree: '🌲',
        flower: '🌼',
        bridge: '🌉',
        mushroom: '🍄',
        spore: '✦',
        fog: '≈',
        reed: '🌾',
        mosquito: '•',
        mud: '●',
        pipe: '⚙',
        waterTower: '🚰',
        lab: '🏥',
        cleanWater: '💧',
        flask: '🧪',
        hologram: '◇',
        lens: '🔬',
        spark: '✦',
        volcano: '🌋',
        smoke: '☁',
        mutation: '🧬',
        rock: '🪨',
        glitch: '▣',
        terminal: '▤',
        brokenTile: '▥',
        tower: '🗼',
        lava: '◆',
        star: '★',
        arena: '◉',
    },

    build(biomes, world) {
        const items = [];
        biomes.forEach((b, biomeIndex) => {
            const count = world.width > 900 ? 9 : world.width > 600 ? 7 : 5;
            for (let i = 0; i < count; i++) {
                const prop = b.props[i % b.props.length];
                const sideBias = i % 2 === 0 ? 0.16 : 0.84;
                const xPct = (sideBias + ((i * 17 + biomeIndex * 9) % 18 - 9) / 100);
                const yPct = b.range[0] + ((i + 1) / (count + 1)) * (b.range[1] - b.range[0]);
                items.push({
                    prop,
                    glyph: this.props[prop] || '✦',
                    x: Math.round(Math.max(24, Math.min(world.width - 24, xPct * world.width))),
                    y: Math.round(yPct * world.height),
                    motion: ['float', 'pulse', 'drift'][i % 3],
                    scale: i % 4 === 0 ? 'lg' : i % 3 === 0 ? 'sm' : 'md',
                    biome: b.id,
                });
            }
        });
        return items;
    },

    render(items) {
        return items.map((item, index) => `<span class="wm-ambient wm-ambient-${item.scale} wm-motion-${item.motion}"
            data-prop="${item.prop}" data-biome="${item.biome}"
            style="left:${item.x}px;top:${item.y}px;animation-delay:${(index % 7) * 0.27}s" aria-hidden="true">${item.glyph}</span>`).join('');
    },

    renderFx(world) {
        const particles = Array.from({ length: world.width > 900 ? 34 : 22 }, (_, i) => {
            const x = Math.round(((i * 37) % 100) / 100 * world.width);
            const y = Math.round(((i * 61) % 100) / 100 * world.height);
            return `<span class="wm-fx-particle" style="left:${x}px;top:${y}px;animation-delay:${(i % 9) * 0.5}s" aria-hidden="true"></span>`;
        }).join('');
        return `<div class="wm-layer wm-fx-layer" aria-hidden="true">${particles}</div>`;
    },
};

window.AdventureAmbientSystem = AdventureAmbientSystem;
