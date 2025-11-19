//Cambiar Tema Día/Noche
document.getElementById('theme-checkbox').addEventListener('change', e => {
    document.body.className = e.target.checked ? 'light-theme' : 'dark-theme';
});