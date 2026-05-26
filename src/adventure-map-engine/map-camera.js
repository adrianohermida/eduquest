/**
 * EduQuest Adventure Map Engine
 * Camera helper for scrollable 2D worlds.
 */

const AdventureMapCamera = {
    clamp(value, min, max) {
        return Math.max(min, Math.min(max, value));
    },

    follow(viewport, target, world, instant) {
        if (!viewport) return;
        const viewW = viewport.clientWidth || window.innerWidth;
        const viewH = viewport.clientHeight || window.innerHeight;
        const scrollX = this.clamp(target.x - viewW / 2, 0, Math.max(0, world.width - viewW));
        const scrollY = this.clamp(target.y - viewH / 2, 0, Math.max(0, world.height - viewH));
        if (instant) {
            viewport.scrollLeft = scrollX;
            viewport.scrollTop = scrollY;
            return;
        }
        const dx = scrollX - viewport.scrollLeft;
        const dy = scrollY - viewport.scrollTop;
        if (Math.abs(dx) > 0.5) viewport.scrollLeft += dx * 0.11;
        if (Math.abs(dy) > 0.5) viewport.scrollTop += dy * 0.11;
    },
};

window.AdventureMapCamera = AdventureMapCamera;
