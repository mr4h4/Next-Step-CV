from flask import Blueprint, send_from_directory
import os

static_bp = Blueprint('static_bp', __name__,
                    static_folder='../static')

@static_bp.route('/', defaults={'path': ''})

@static_bp.route('/<path:path>')
def serve(path):
    static_folder_path = static_bp.static_folder
    
    if path != "" and os.path.exists(os.path.join(static_folder_path, path)):
        return send_from_directory(static_folder_path, path)
    else:

        return send_from_directory(static_folder_path, 'index.html')
    
@static_bp.route('/public/<path:path>')
def servePublicFiles(path):
    static_folder_path = static_bp.static_folder
    
    if path != "" and os.path.exists(os.path.join(static_folder_path, path)):
        return send_from_directory(static_folder_path, path)
    else:

        return send_from_directory(static_folder_path, 'index.html')