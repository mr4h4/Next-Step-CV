document.addEventListener('DOMContentLoaded', function() {
  const contentEl = document.getElementById('content');

  function loadFile(path) {
    fetch(path)
      .then(response => {
        if (!response.ok) throw new Error('Network response was not ok: ' + response.status);
        return response.text();
      })
      .then(html => {
        contentEl.innerHTML = html;
      })
      .catch(err => {
        contentEl.innerHTML = '<p>Error cargando contenido.</p>';
        console.error('Error cargando', path, err);
      });
  }

  // Cargar contenido inicial
  loadFile('./home.html');

  // Manejar clicks en los botones de navegación
  const newButton = document.getElementById('new-button');
  if (newButton) {
    newButton.addEventListener('click', function() {
      loadFile('./templates/default/default-cv.html'); // Carga el builder para el template "Default-CV"
    });
  }
});
