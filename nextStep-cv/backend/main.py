from app import create_app, cleanup_app
import atexit
import os

app = create_app()

if __name__ == '__main__':
    atexit.register(cleanup_app, app.root_path)
    
    app.run(debug=True)
    
  