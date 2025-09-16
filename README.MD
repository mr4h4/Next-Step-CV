# NextStep CV | By H3rHex

[View in Spanish](#version-en-español)

## Table of Contents
1.  [Preview](#preview)
2.  [Getting Started](#getting-started)
3.  [Technologies](#technologies)
4.  [License and Contribution](#license-and-contribution)


## Preview
### A preview of the NextStep CV application interface

<center>
<img src="Examples/EN_EXAMPLE_UI.webp" alt="A preview of the NextStep CV application form and interface" style="border-radius: 24px; width: 700px; height: auto;">
</center>

### Curriculum Example
<center>
<img src="Examples/CV-PDF-IMAGE-EN.webp" alt="A sample image of a generated CV" style="border-radius: 24px; width: 700px; height: auto;">
</center>

<center>
  <a href="Examples/cv_example_EN.pdf" style="font-style: italic;">View real PDF</a>
</center>

## Getting Started
Follow these steps to run the app:

1.  **Install Python**
   
    * On Linux, it is usually installed by default.
    * Windows/Mac: : https://www.python.org/
        - OR USE <a href="/WINDOWS-SCRIPTS/install-python.cmd">INSTALATION SCRIPT ON WINDOWS<a/> | JUST DO DOUBLE CLICK OVER FILE

2.  **Start a virtual environment (optional but recommended)**

    This keeps the app separate from your other Python programs.
    * Linux/Mac
        ```bash
        python3 -m venv venv
        source venv/bin/activate
        ```
    * Windows
        ```cmd
        python -m venv venv
        venv\Scripts\activate.bat
        ```

3.  **Install requirements:**
    
    ```bash
    pip install -r requirements.txt
    ```
    ⚠️ Windows users need GTK-3 for PDFs:
    <a href="https://github.com/tschoonj/GTK-for-Windows-Runtime-Environment-Installer/releases/download/2022-01-04/gtk3-runtime-3.24.31-2022-01-04-ts-win64.exe">DOWNLOAD GTK-3</a>

    Or use the script in <a href="/WINDOWS-SCRIPTS/install-gtk3.cmd">INSTALATION SCRIPT ON WINDOWS<a/> | JUST DO DOUBLE CLICK OVER FILE

4.  **Run the program:**

    * Linux/Mac
        ```bash
        python3 backend/main.py
        ```
    * Windows
        ```cmd
        python backend/main.py
        ```
    You can also do double click over main.py file.

    Or use the script in <a href="/WINDOWS-SCRIPTS/start-app.cmd">START APP<a/> | JUST DO DOUBLE CLICK OVER FILE

        
## Technologies
### Frontend
* **TypeScript**
* **React:** Creates the UI
* **Tailwind CSS:** Styles the page 
* **Vite:** Builds the app

### Backend
* **Python**
* **Flask:** Manages backend logic and HTML templates
* **WeasyPrint:** The PDF creation engine

## License and Contribution

This project is distributed under the **GNU General Public License v3.0**. You are free to modify and use the code.

<a id="version-en-español"></a>
---

# NextStep CV | By H3rHex

[Ver en inglés](#)

## Tabla de Contenidos
1.  [Vista Previa](#preview-es)
2.  [Primeros Pasos](#primeros-pasos)
3.  [Tecnologías](#tecnologias)
4.  [Licencia y Colaboración](#licencia-y-colaboracion)


<a id="preview-es"></a>
## Vista Previa
### Una vista previa de la interfaz de la aplicación NextStep CV

<center>
<img src="Examples/ES_EXAMPLE_UI.webp" alt="Vista previa del formulario y la interfaz de la aplicación NextStep CV" style="border-radius: 24px; width: 700px; height: auto;">
</center>

### Ejemplo de Currículum
<center>
<img src="Examples/CV-PDF-IMAGE-ES.webp" alt="Una imagen de ejemplo de un CV generado" style="border-radius: 24px; width: 700px; height: auto;">
</center>

<center>
  <a href="Examples/cv_example_ES.pdf" style="font-style: italic;">Ver PDF real</a>
</center>

<a id="primeros-pasos"></a>
## Primeros Pasos
Esta sección explica cómo configurar y ejecutar el proyecto.

1.  **Instalar Python**
   
    * En Linux, suele estar instalado por defecto.
    * Para otros sistemas, visita: https://www.python.org/

        - OR USE <a href="/WINDOWS-SCRIPTS/install-python.cmd"> SCRIPT DE INSTALACION PARA WINDOWS <a/> | SOLO HAZ DOBLE CLICK EN EL ARCHIVO


2.  **Iniciar un entorno virtual (opcional pero recomendado)**
    * Linux/Mac
        ```bash
        python3 -m venv venv
        source venv/bin/activate
        ```
    * Windows
        ```cmd
        python -m venv venv
        venv\Scripts\activate.bat
        ```

3.  **Instalar dependencias:**
    
    ```bash
    pip install -r requirements.txt
    ```
    ⚠️ Usuarios Windows: necesitan GTK-3 para PDFs
    <a href="https://github.com/tschoonj/GTK-for-Windows-Runtime-Environment-Installer/releases/download/2022-01-04/gtk3-runtime-3.24.31-2022-01-04-ts-win64.exe">DESCARGAR GTK-3</a>

    O usar el script <a href="/WINDOWS-SCRIPTS/install-gtk3.cmd"> SCRIPT DE INSTALACION PARA WINDOWS <a/> | SOLO HAZ DOBLE CLICK EN EL ARCHIVO


4.  **Ejecutar el programa:**

    * Linux/Mac
        ```bash
        python3 backend/main.py
        ```
    * Windows
        ```cmd
        python backend/main.py
        ```
    Tambien puedes hacer doble click sobre el archivo main.py

    O usar el script <a href="/WINDOWS-SCRIPTS/start-app.cmd">INICIAR APP<a/> | SOLO HAZ DOBLE CLICK EN EL ARCHIVO
        
<a id="tecnologias"></a>
## Tecnologías
### Frontend
* **TypeScript**
* **React:** Crea la interfaz de usuario
* **Tailwind CSS:** Da estilo a la página 
* **Vite:** Compila la aplicación

### Backend
* **Python**
* **Flask:** Gestiona la lógica del backend y las plantillas HTML
* **WeasyPrint:** El motor de creación de PDF

<a id="licencia-y-colaboracion"></a>
## Licencia y Colaboración

Este proyecto se distribuye bajo la licencia **GNU General Public License v3.0**. Eres libre de modificar y usar el código.