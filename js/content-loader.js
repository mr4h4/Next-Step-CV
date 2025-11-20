document.addEventListener('DOMContentLoaded', function() {
  const content = document.getElementById('content');

  function loadFile(path) {
    fetch(path)
      .then(response => {
        if (!response.ok) throw new Error('Network response was not ok: ' + response.status);
        return response.text();
      })
      .then(html => {
        content.innerHTML = html;
        // Después de insertar HTML dinámico, enganchar listeners para elementos dentro del contenido
        attachDynamicListeners();
      })
      .catch(err => {
        content.innerHTML = '<p>Error cargando contenido.</p>';
        console.error('Error cargando', path, err);
      });
  }

  // Cargar contenido inicial
  loadFile('./home.html');

  // Manejar clicks en los botones de navegación (estos existen en el DOM principal)
  const newButton = document.getElementById('new-button');
  if (newButton) {
    newButton.addEventListener('click', function() {
      loadFile('./templates/default/default-cv.html'); // Carga el builder para el template "Default-CV"
    });
  }

  const homeButton = document.getElementById('home-button');
  if (homeButton) {
    homeButton.addEventListener('click', function() {
      loadFile('./home.html');
    });
  }

  // Funcion para enganchar listeners a elementos añadidos dinámicamente dentro de #content
  function attachDynamicListeners() {
    const newButton2 = document.getElementById('new-button2');
    if (newButton2) {
      newButton2.addEventListener('click', function() {
        loadFile('./templates/default/default-cv.html');
      });
    }
  }

});
