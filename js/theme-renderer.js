// ---- elementos preparados ----
const githubLink = (() => {
    const a = document.createElement('a');
    a.href = 'https://github.com/mr4h4/Next-Step-CV';
    a.target = '_blank';
    a.rel = 'noopener noreferrer';
    a.id = 'github-link-anchor';
    return a;
})();

const lightGitHub = (() => {
    const img = document.createElement('img');
    img.src = './src/img/github-blanco.png';
    img.style.width = '30px';          // ajusta si quieres otro tamaño
    img.style.display = 'block';
    img.style.margin = '0 auto';
    img.alt = 'GitHub Light Logo';
    return img;
})();

const darkGitHub = (() => {
    const img = document.createElement('img');
    img.src = './src/img/github-negro.png';
    img.style.width = '30px';          // hice el tamaño consistente con el claro
    img.style.display = 'block';
    img.style.margin = '0 auto';
    img.alt = 'GitHub Dark Logo';
    return img;
})();

// Cambiar Tema Día/Noche y actualizar logos (GitHub + Home)
document.addEventListener('DOMContentLoaded', () => {
    const themeCheckbox = document.getElementById('theme-checkbox');
    const wrap = document.getElementById('github-logo-wrap'); // contenedor donde poner el <a>

    function applyTheme(isLight) {
        document.body.className = isLight ? 'light-theme' : 'dark-theme';
    }
    
    function updateGithubLogo(isLight) {
        if (!wrap) return; // si no existe el contenedor, no hacemos nada

        // limpiar contenedor
        wrap.innerHTML = '';

        // clonamos la imagen porque podríamos reutilizar lightGitHub/darkGitHub en otras partes
        const imgToUse = isLight ? darkGitHub.cloneNode(true) : lightGitHub.cloneNode(true);

        // no visible al inicio
        imgToUse.classList.remove('visible');

        // clonamos el anchor (sin children) y le añadimos la imagen
        const anchor = githubLink.cloneNode(false);
        anchor.appendChild(imgToUse);

        // forzar reflow para reiniciar la animación
        requestAnimationFrame(() => {
                imgToUse.classList.add('visible');
            });

        wrap.appendChild(anchor);
    }

    // Determinar estado inicial (si existe checkbox lo usamos, si no miramos la clase del body)
    const initialIsLight = themeCheckbox ? themeCheckbox.checked : document.body.classList.contains('light-theme');
    applyTheme(initialIsLight);
    updateGithubLogo(initialIsLight);

    // Añadir un único listener si hay checkbox
    if (themeCheckbox) {
        themeCheckbox.addEventListener('change', (e) => {
            const isLight = e.target.checked;
            applyTheme(isLight);
            updateGithubLogo(isLight);
        });
    }
});
