/**
 * EDUQUEST — No Native Dialogs Interceptor
 * Safety net: redirects any remaining window.alert / confirm / prompt
 * through the EduQuest modal system. Logs a warning in dev mode so
 * the call site can be replaced properly.
 *
 * Loaded as the LAST script so ModalEngine is already available.
 */
(function () {
    const DEV = location.hostname === 'localhost' || location.hostname === '127.0.0.1';

    const _warn = (method, msg) => {
        if (DEV) {
            console.warn(
                `[EduQuest] Native ${method}() intercepted — replace this call with ModalEngine.\n  Message: "${msg}"\n  Caller:`,
                new Error().stack
            );
        }
    };

    // ── alert ─────────────────────────────────────────────────
    window.alert = function (msg) {
        _warn('alert', msg);
        if (typeof ModalEngine !== 'undefined') {
            ModalEngine.interrupt('simpleAlert', {
                icon:    'ℹ️',
                title:   'Aviso',
                message: String(msg || ''),
            });
        }
    };

    // ── confirm ───────────────────────────────────────────────
    // confirm() is synchronous — we can't truly replace it async,
    // but we intercept, show the modal, and return true as safe default.
    window.confirm = function (msg) {
        _warn('confirm', msg);
        if (typeof ModalEngine !== 'undefined') {
            ModalEngine.interrupt('confirm', {
                icon:        '❓',
                title:       'Confirmar',
                message:     String(msg || ''),
                confirmText: 'OK',
                cancelText:  'Cancelar',
            });
        }
        return true; // safe default — avoids blocking synchronous code
    };

    // ── prompt ────────────────────────────────────────────────
    window.prompt = function (msg, defaultValue) {
        _warn('prompt', msg);
        if (typeof ModalEngine !== 'undefined') {
            ModalEngine.interrupt('simpleAlert', {
                icon:    '✏️',
                title:   'Entrada necessária',
                message: String(msg || ''),
            });
        }
        return defaultValue || null;
    };
})();
