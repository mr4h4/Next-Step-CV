// Cambiar Tema Día/Noche y actualizar logos (GitHub + Home)
document.addEventListener('DOMContentLoaded', () => {
    const themeCheckbox = document.getElementById('theme-checkbox');

    function applyTheme(isLight) {
        document.body.className = isLight ? 'light-theme' : 'dark-theme';
    }

    if (themeCheckbox) {
        // set initial state
        applyTheme(themeCheckbox.checked);

        // update on change
        themeCheckbox.addEventListener('change', (e) => {
            applyTheme(e.target.checked);
        });
    } else {
        // If checkbox missing, ensure logos match current body class
        const isLight = document.body.classList.contains('light-theme');
        applyTheme(isLight);
    }
});