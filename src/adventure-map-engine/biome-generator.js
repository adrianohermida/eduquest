/**
 * EduQuest Adventure Map Engine
 * Layer 1-3: biome, terrain and water generation.
 */

const AdventureBiomeGenerator = {
    definitions: [
        {
            id: 'immunity',
            title: 'Reino da Imunidade',
            range: [0.00, 0.125],
            icon: 'shield',
            color: '#22c55e',
            bg: ['#dcfce7', '#86efac'],
            asset: 'biome-forest.svg',
            terrain: 'meadow',
            water: 'clear',
            props: ['tree', 'shield', 'flower', 'bridge'],
        },
        {
            id: 'microbes',
            title: 'Floresta dos Microrganismos',
            range: [0.125, 0.25],
            icon: 'mushroom',
            color: '#8b5cf6',
            bg: ['#f3e8ff', '#c084fc'],
            asset: 'biome-forest.svg',
            terrain: 'forest',
            water: 'mist',
            props: ['mushroom', 'spore', 'tree', 'fog'],
        },
        {
            id: 'dengue',
            title: 'Pantano da Dengue',
            range: [0.25, 0.375],
            icon: 'warning',
            color: '#14b8a6',
            bg: ['#ccfbf1', '#5eead4'],
            asset: 'biome-village.svg',
            terrain: 'swamp',
            water: 'swamp',
            props: ['reed', 'mosquito', 'mud', 'bridge'],
        },
        {
            id: 'sanitation',
            title: 'Cidade do Saneamento',
            range: [0.375, 0.50],
            icon: 'home',
            color: '#0ea5e9',
            bg: ['#e0f2fe', '#7dd3fc'],
            asset: 'biome-lab.svg',
            terrain: 'city',
            water: 'canal',
            props: ['pipe', 'waterTower', 'lab', 'cleanWater'],
        },
        {
            id: 'vaccines',
            title: 'Laboratorio das Vacinas',
            range: [0.50, 0.625],
            icon: 'microscope',
            color: '#2563eb',
            bg: ['#dbeafe', '#93c5fd'],
            asset: 'biome-lab.svg',
            terrain: 'lab',
            water: 'energy',
            props: ['flask', 'hologram', 'lens', 'spark'],
        },
        {
            id: 'epidemics',
            title: 'Ilha das Epidemias',
            range: [0.625, 0.75],
            icon: 'boss',
            color: '#f97316',
            bg: ['#ffedd5', '#fb923c'],
            asset: 'biome-citadel.svg',
            terrain: 'island',
            water: 'rough',
            props: ['volcano', 'smoke', 'mutation', 'rock'],
        },
        {
            id: 'fake-news',
            title: 'Dungeon das Fake News',
            range: [0.75, 0.875],
            icon: 'warning',
            color: '#64748b',
            bg: ['#e2e8f0', '#94a3b8'],
            asset: 'biome-tower.svg',
            terrain: 'glitch',
            water: 'corrupt',
            props: ['glitch', 'terminal', 'brokenTile', 'fog'],
        },
        {
            id: 'final-tower',
            title: 'Torre da Revisao Final',
            range: [0.875, 1.00],
            icon: 'crown',
            color: '#f59e0b',
            bg: ['#fef3c7', '#f59e0b'],
            asset: 'biome-citadel.svg',
            terrain: 'final',
            water: 'lava',
            props: ['tower', 'lava', 'star', 'arena'],
        },
    ],

    build(world) {
        return this.definitions.map((b, index) => {
            const top = Math.round(b.range[0] * world.height);
            const bottom = Math.round(b.range[1] * world.height);
            return {
                ...b,
                index,
                top,
                bottom,
                height: bottom - top,
            };
        });
    },

    currentAtY(biomes, y) {
        return biomes.find(b => y >= b.top && y < b.bottom) || biomes[biomes.length - 1];
    },

    render(biomes) {
        return biomes.map((b, index) => {
            const divide = index > 0 ? `<div class="wm-layer wm-layer-divider" style="top:${b.top}px"></div>` : '';
            return `${divide}
            <section class="wm-layer wm-biome wm-biome-${b.id}" data-biome="${b.id}"
                style="top:${b.top}px;height:${b.height}px;--biome-a:${b.bg[0]};--biome-b:${b.bg[1]};--biome-color:${b.color};--biome-asset:url('../assets/maps/${b.asset}')">
                <div class="wm-biome-terrain" aria-hidden="true"></div>
                <div class="wm-biome-water wm-water-${b.water}" aria-hidden="true"></div>
                <div class="wm-biome-depth" aria-hidden="true"></div>
                <div class="wm-biome-name" aria-hidden="true">${b.title}</div>
            </section>`;
        }).join('');
    },
};

window.AdventureBiomeGenerator = AdventureBiomeGenerator;
