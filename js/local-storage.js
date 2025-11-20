(function(){
  // Key shared with theme-renderer.js
  const STORAGE_KEY = 'ns-cv-theme'; // values: 'light' | 'dark'

  // Apply stored theme synchronously to avoid flicker
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored === 'light' || stored === 'dark') {
      document.body.classList.remove('light-theme', 'dark-theme');
      document.body.classList.add(stored + '-theme');
      document.documentElement.setAttribute('data-theme', stored);
    }
  } catch (e) {
    // ignore storage errors
  }

  // When DOM is ready, sync checkbox and attach listener to persist changes
  document.addEventListener('DOMContentLoaded', () => {
    try {
      const checkbox = document.getElementById('theme-checkbox');
      if (!checkbox) return;

      // If we have a stored theme, set checkbox state accordingly
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored === 'light' || stored === 'dark') {
        checkbox.checked = (stored === 'light');
      } else {
        // No stored preference — infer from body class
        checkbox.checked = document.body.classList.contains('light-theme');
      }

      // When user toggles the checkbox, persist the preference
      checkbox.addEventListener('change', (e) => {
        try {
          const isLight = Boolean(e.target.checked);
          localStorage.setItem(STORAGE_KEY, isLight ? 'light' : 'dark');
          // Also set data-theme and body class so other scripts/styles can react
          document.body.classList.remove('light-theme', 'dark-theme');
          document.body.classList.add(isLight ? 'light-theme' : 'dark-theme');
          document.documentElement.setAttribute('data-theme', isLight ? 'light' : 'dark');
        } catch (err) {
          // ignore storage errors
        }
      });
    } catch (err) {
      // defensive
    }
  });
})();
