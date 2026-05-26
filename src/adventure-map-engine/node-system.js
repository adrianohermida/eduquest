/**
 * EduQuest Adventure Map Engine
 * Layer 5: interactive progression nodes.
 */

const AdventureNodeSystem = {
    state(node) {
        if (node.completed) return 'completed';
        if (node.unlocked) return 'active';
        return 'locked';
    },

    icon(node, iconSystem) {
        if (node.completed) return iconSystem.html('check', { size: 'lg' });
        if (!node.unlocked) return iconSystem.html('lock', { size: 'md' });
        if (node.nodeType === 'boss') return iconSystem.html('boss', { size: 'lg' });
        if (node.nodeType === 'legendary') return iconSystem.html('crown', { size: 'xl', variant: 'glow' });
        if (node.nodeType === 'challenge') return iconSystem.html('xp', { size: 'md' });
        if (node.nodeType === 'review') return iconSystem.html('scroll', { size: 'md' });
        if (node.nodeType === 'mastery') return iconSystem.html('star', { size: 'md' });
        return `<span class="wm-node-num">${node.index}</span>`;
    },

    label(node, iconSystem) {
        if (node.completed) return `${iconSystem.html('check', { size: 'xs', color: 'success' })} Concluido`;
        if (node.unlocked) return `${iconSystem.html('chevron-right', { size: 'xs', color: 'xp' })} Atual`;
        return `${iconSystem.html('lock', { size: 'xs' })} Bloqueado`;
    },

    renderNodes(nodes, world, iconSystem) {
        return nodes.map((node, idx) => {
            const state = this.state(node);
            const stars = node.completed ? `<div class="wm-node-stars" aria-label="${node.stars} estrelas">
                ${[1, 2, 3].map(n => `<span class="${n <= node.stars ? 'wm-star-lit' : 'wm-star-dim'}">★</span>`).join('')}
            </div>` : '';
            return `<button class="wm-node wm-node-${node.nodeType} is-${state}" id="wmn-${idx}"
                style="left:${node.x}px;top:${node.worldY}px"
                onclick="AdventureMap._clickNode(${idx})"
                aria-label="${node.title} - ${state}"
                tabindex="${node.unlocked ? 0 : -1}">
                    <span class="wm-node-shadow" aria-hidden="true"></span>
                    <span class="wm-node-ring" aria-hidden="true"></span>
                    <span class="wm-node-body" aria-hidden="true">
                        <span class="wm-node-icon">${this.icon(node, iconSystem)}</span>
                    </span>
                    ${stars}
            </button>`;
        }).join('');
    },

    renderLabels(nodes, world, iconSystem) {
        const labelW = world.width < 560 ? 132 : 162;
        return nodes.map((node, idx) => {
            const right = node.x < world.width * 0.58;
            let x = right ? node.x + 40 : node.x - 40 - labelW;
            x = Math.max(10, Math.min(world.width - labelW - 10, x));
            return `<aside class="wm-label ${right ? 'wm-label-right' : 'wm-label-left'}" id="wml-${idx}"
                style="left:${x}px;top:${node.worldY}px;--wm-label-w:${labelW}px">
                <div class="wm-label-card">
                    <div class="wm-label-kicker">${this.label(node, iconSystem)}</div>
                    <div class="wm-label-title">${node.title}</div>
                    <button class="wm-label-enter-btn" onclick="AdventureMap._enterStage(${idx})">
                        Entrar <span aria-hidden="true">→</span>
                    </button>
                </div>
            </aside>`;
        }).join('');
    },
};

window.AdventureNodeSystem = AdventureNodeSystem;
