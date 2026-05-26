/**
 * EduQuest Adventure Map Engine
 * Composes gameplay layers in a strict order.
 */

const AdventureWorldRenderer = {
    build({ world, biomes, nodes, iconSystem }) {
        const landmarks = AdventureLandmarkSystem.build(biomes, world);
        const ambient = AdventureAmbientSystem.build(biomes, world);
        return `
            <div class="wm-layer wm-background-layer" aria-hidden="true"></div>
            ${AdventureBiomeGenerator.render(biomes)}
            ${AdventurePathGenerator.render(world, nodes)}
            <div class="wm-layer wm-node-layer">${AdventureNodeSystem.renderNodes(nodes, world, iconSystem)}</div>
            <div class="wm-layer wm-label-layer">${AdventureNodeSystem.renderLabels(nodes, world, iconSystem)}</div>
            <div class="wm-layer wm-landmark-layer" aria-hidden="true">${AdventureLandmarkSystem.render(landmarks)}</div>
            <div class="wm-layer wm-ambient-layer" aria-hidden="true">${AdventureAmbientSystem.render(ambient)}</div>
            ${AdventureAmbientSystem.renderFx(world)}
        `;
    },
};

window.AdventureWorldRenderer = AdventureWorldRenderer;
