document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.navbar').forEach((navbar) => {
        const button = navbar.querySelector('.nav-toggle');
        const menu = navbar.querySelector('.nav-links');
        if (!button || !menu) return;

        const closeMenu = () => {
            button.setAttribute('aria-expanded', 'false');
            button.setAttribute('aria-label', 'Open navigation');
            menu.classList.remove('is-open');
        };

        button.addEventListener('click', () => {
            const open = button.getAttribute('aria-expanded') === 'true';
            button.setAttribute('aria-expanded', String(!open));
            button.setAttribute('aria-label', open ? 'Open navigation' : 'Close navigation');
            menu.classList.toggle('is-open', !open);
        });

        menu.querySelectorAll('a').forEach((link) => link.addEventListener('click', closeMenu));
        document.addEventListener('keydown', (event) => {
            if (event.key === 'Escape') closeMenu();
        });
    });
});
