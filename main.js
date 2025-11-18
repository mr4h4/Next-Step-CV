// Importamos los módulos 'app' y 'BrowserWindow' de Electron
// 'app' controla el ciclo de vida de la aplicación
// 'BrowserWindow' nos permite crear ventanas de escritorio
const { app, BrowserWindow } = require('electron');

// Función que crea la ventana principal de la aplicación
function createWindow() {
  // Creamos una nueva ventana con ancho 800px y alto 600px
  const win = new BrowserWindow({
    //dimensiones baremo en proporción
    width: 800,
    height: 1131,
    minWidth:400, 
    minHeight: 566,
    webPreferences: {
      nodeIntegration: true // permite usar Node.js dentro del HTML/JS de la ventana
    }
  });
  // Cargamos el archivo HTML que se mostrará en la ventana
  win.loadFile('index.html'); // necesitas tener un index.html en la raíz del proyecto
}

////////////////////////////////////////////////////////////
// Se ejecuta cuando Electron ha terminado de inicializarse
app.whenReady().then(() => {
  createWindow(); // llamamos a la función para abrir la ventana

  // En macOS, cuando la app se activa y no hay ventanas abiertas, creamos una nueva
  app.on('activate', function () {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

// Se ejecuta cuando todas las ventanas están cerradas
// En Windows/Linux cerramos la app, en macOS es normal que quede activa
app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit();
});


