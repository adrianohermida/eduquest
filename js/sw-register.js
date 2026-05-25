// Service Worker Register (Placeholder)
if ('serviceWorker' in navigator) {
    // Desativado temporariamente para evitar erros de escopo em desenvolvimento local sem HTTPS
    // navigator.serviceWorker.register('/sw.js').then(() => console.log('SW Registrado'));
    console.log('💾 Service Worker disponível (registramento adiado)');
}