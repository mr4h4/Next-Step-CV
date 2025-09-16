from app import create_app, cleanup_app
import atexit
import webbrowser
import threading
import os

app = create_app()

def open_browser():
    threading.Timer(2.0, lambda: webbrowser.open("http://localhost:8000")).start()

def run_app():
    atexit.register(cleanup_app, app.root_path)
    open_browser()
    app.run(debug=False, host="0.0.0.0", port=8000, threaded=True)
    

if __name__ == '__main__':
    run_app()
  