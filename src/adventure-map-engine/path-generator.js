/**
 * EduQuest Adventure Map Engine
 * Layer 4: procedural readable path.
 */

const AdventurePathGenerator = {
    layouts: {
        vertical: {
            minWidth: 0,
            width: 480,
            heightPerNode: 190,
            xPattern: [52, 38, 58, 68, 48, 28, 42, 62, 74, 56, 36, 50],
        },
        tablet: {
            minWidth: 720,
            width: 760,
            heightPerNode: 165,
            xPattern: [28, 45, 63, 78, 61, 42, 23, 38, 58, 76, 60, 48],
        },
        desktop: {
            minWidth: 1120,
            width: 1040,
            heightPerNode: 135,
            xPattern: [16, 30, 47, 66, 82, 70, 52, 34, 18, 34, 58, 82],
        },
    },

    resolveLayout(viewportWidth, totalNodes) {
        const options = Object.values(this.layouts).sort((a, b) => a.minWidth - b.minWidth);
        const layout = options.reduce((acc, item) => viewportWidth >= item.minWidth ? item : acc, options[0]);
        const world = {
            mode: viewportWidth >= this.layouts.desktop.minWidth ? 'desktop' : viewportWidth >= this.layouts.tablet.minWidth ? 'tablet' : 'vertical',
            width: layout.width,
            height: Math.max(1260, Math.round((totalNodes + 2) * layout.heightPerNode)),
        };
        return { layout, world };
    },

    buildNodes(stageMeta, chapterId, stageReader, stateApi, viewportWidth) {
        const { layout, world } = this.resolveLayout(viewportWidth, stageMeta.length);
        const spacing = world.height / (stageMeta.length + 1);
        const nodes = stageMeta.map((s, index) => {
            const xPct = layout.xPattern[index % layout.xPattern.length];
            const y = Math.round(spacing * (index + 1));
            const data = stageReader(s.varName);
            return {
                id: s.id,
                index: s.index,
                nodeType: this.nodeTypeFor(s, index),
                isBoss: Boolean(s.isBoss),
                isFinal: Boolean(s.isFinal),
                title: data.title || `Missao ${s.index}`,
                xPct,
                x: Math.round((xPct / 100) * world.width),
                worldY: y,
                unlocked: stateApi.isStageUnlocked(chapterId, s.index),
                completed: stateApi.isStageCompleted(chapterId, s.index),
                stars: stateApi.getStageStars(chapterId, s.index),
            };
        });
        return { world, nodes };
    },

    nodeTypeFor(stage, index) {
        if (stage.isFinal) return 'legendary';
        if (stage.isBoss) return 'boss';
        if ((index + 1) % 5 === 0) return 'challenge';
        if ((index + 1) % 4 === 0) return 'review';
        if ((index + 1) % 3 === 0) return 'mastery';
        return 'normal';
    },

    segmentPath(a, b, index) {
        const dx = b.x - a.x;
        const dy = b.worldY - a.worldY;
        const curve = Math.max(42, Math.min(140, Math.abs(dx) * 0.45));
        const sign = dx >= 0 ? 1 : -1;
        const cp1x = a.x + curve * sign;
        const cp1y = a.worldY + dy * 0.34;
        const cp2x = b.x - curve * sign;
        const cp2y = a.worldY + dy * 0.66;
        const d = `M ${a.x} ${a.worldY} C ${cp1x} ${cp1y}, ${cp2x} ${cp2y}, ${b.x} ${b.worldY}`;
        const done = a.completed;
        const active = a.unlocked && !a.completed;
        return { d, done, active, index };
    },

    buildSegments(nodes) {
        const segments = [];
        for (let i = 0; i < nodes.length - 1; i++) {
            segments.push(this.segmentPath(nodes[i], nodes[i + 1], i));
        }
        return segments;
    },

    render(world, nodes) {
        const segments = this.buildSegments(nodes);
        const rails = segments.map(s => `<path class="wm-path-rail${s.done ? ' is-done' : ''}${s.active ? ' is-active' : ''}" d="${s.d}" />`).join('');
        const tiles = segments.map(s => `<path class="wm-path-tiles${s.done ? ' is-done' : ''}${s.active ? ' is-active' : ''}" d="${s.d}" />`).join('');
        const glow = segments.map(s => s.active ? `<path class="wm-path-glow" d="${s.d}" />` : '').join('');
        return `<svg class="wm-layer wm-paths-svg" width="${world.width}" height="${world.height}" viewBox="0 0 ${world.width} ${world.height}" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <defs>
                <filter id="wmPathSoftGlow" x="-25%" y="-25%" width="150%" height="150%">
                    <feGaussianBlur stdDeviation="5" result="blur"/>
                    <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
                </filter>
            </defs>
            ${glow}${rails}${tiles}
        </svg>`;
    },
};

window.AdventurePathGenerator = AdventurePathGenerator;
