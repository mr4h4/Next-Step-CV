from flask import Flask, jsonify, current_app
from flask_cors import CORS
import os

import config
from .routes import api_cv

def create_app():
    app = Flask(__name__)
    app.register_blueprint(api_cv.cv_bp)
    os.makedirs(config.PHOTOS_FOLDER, exist_ok=True)
    os.makedirs(config.PDF_FOLDER, exist_ok=True)

    return app

def cleanup_app(root_path):
    upload_folders = [
        os.path.join(root_path, 'uploads', 'photos'),
        os.path.join(root_path, 'uploads', 'pdf')
    ]

    print(f"{config.INFO} Cleaning temp files...")

    for folder in upload_folders:
        if os.path.exists(folder):
            for filename in os.listdir(folder):
                file_path = os.path.join(folder, filename)
                try:
                    # Es buena práctica verificar que sea un archivo antes de borrar
                    if os.path.isfile(file_path):
                        os.unlink(file_path)
                    #print(f"{config.INFO} File deleted: {file_path}")
                except Exception as error:
                    print(f"{config.ERROR} Error deleting the file: {file_path}. Reason: {error}")
    
    print(f"{config.INFO} Cleaning up finish succesfully")
