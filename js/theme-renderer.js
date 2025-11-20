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
    const STORAGE_KEY = 'ns-cv-theme'; // 'light' | 'dark'

    function applyTheme(isLight) {
        // remove any existing theme classes and set the correct one
        document.body.classList.remove('light-theme', 'dark-theme');
        document.body.classList.add(isLight ? 'light-theme' : 'dark-theme');
        document.documentElement.setAttribute('data-theme', isLight ? 'light' : 'dark');
        // update meta theme-color if present
        const meta = document.querySelector('meta[name="theme-color"]');
        if (meta) meta.setAttribute('content', isLight ? '#e7f1ff' : '#0a0f2b');
    }

    function updateGithubLogo(isLight) {
        if (!wrap) return;
        wrap.innerHTML = '';
        const imgToUse = isLight ? darkGitHub.cloneNode(true) : lightGitHub.cloneNode(true);
        imgToUse.classList.remove('visible');
        const anchor = githubLink.cloneNode(false);
        anchor.appendChild(imgToUse);
        requestAnimationFrame(() => imgToUse.classList.add('visible'));
        wrap.appendChild(anchor);
    }

    // Determine initial theme: priority -> localStorage -> checkbox -> body class -> default dark
    const stored = localStorage.getItem(STORAGE_KEY);
    const checkboxState = themeCheckbox ? themeCheckbox.checked : null;
    const bodyHasLight = document.body.classList.contains('light-theme');
    const initialIsLight = (stored === 'light') ? true
        : (stored === 'dark') ? false
        : (checkboxState !== null) ? checkboxState
        : bodyHasLight;

    // ensure a class is set on load (prevents both logos showing before JS runs)
    applyTheme(Boolean(initialIsLight));
    updateGithubLogo(Boolean(initialIsLight));

    // wire checkbox, persist preference
    if (themeCheckbox) {
        themeCheckbox.checked = Boolean(initialIsLight);
        themeCheckbox.addEventListener('change', (e) => {
            const isLight = e.target.checked;
            applyTheme(isLight);
            updateGithubLogo(isLight);
            localStorage.setItem(STORAGE_KEY, isLight ? 'light' : 'dark');
        });
    }
    // if no checkbox, still allow other code to change theme by writing to localStorage
    window.addEventListener('storage', (e) => {
        if (e.key === STORAGE_KEY) {
            const isLight = e.newValue === 'light';
            applyTheme(isLight);
            updateGithubLogo(isLight);
        }
    });
});
