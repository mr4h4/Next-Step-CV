from flask import Flask, request, jsonify, Blueprint, current_app, send_from_directory
from werkzeug.utils import secure_filename

import os
import uuid
import io
import json

#SERVICES

from ..services import createCV
import config

UPDATES_FOLDER = config.UPDATES_FOLDER


# Create cv Blueprint --> Better endpoints managment
cv_bp = Blueprint('cv', __name__)

@cv_bp.route('/api/createCV', methods=['POST'])
def generateCV():

    #Get data from endpoint
    lang = request.form.get('lang', 'es')
    cv_raw = request.form.get('cv')
    user_photo = request.files.get('photo')

    try:
        #Transform raw data to json
        cv_data = json.loads(cv_raw) if cv_raw else {}
    
    except ValueError as error:
        print(f'{config.ERROR} Error parsing json: {error}')

        # Return error to caller (usually web frontend)
        return jsonify({"error":str(error)}),400

    try:
        # Save photo on disk (temporally)
        photo_path = None
        if user_photo:
            # PHOTO EXTENSION IS CHECKED ON FRONTEND
            filename = secure_filename(user_photo.filename)
            photo_path = os.path.join(f'{current_app.root_path}{UPDATES_FOLDER}', f"{uuid.uuid4()}_{filename}")
            user_photo.save(photo_path)
            print(f"apiPhotoPath: {photo_path}")

    
    except Exception as error:
        print(f'{config.ERROR} Error saving photo file: {error}')
        # Return error to caller (usually web frontend)
        return jsonify({"error":str(error)}),400

    # Call createPDFofCV service → returns a temporary URL pointing to the generated PDF
    try:
        cv_url = createCV.createCV(photo_path, cv_data, lang)
        print(f"URL CV: {cv_url}")
        return jsonify({"message":"CV Created correctly", "cv_url":cv_url}),200

    except Exception as error:
        print(f'{config.ERROR} Error creating CV: {error}')

        # Return error to caller (usually web frontend)
        return jsonify({"error":str(error)}),400
    

@cv_bp.route('/uploads/pdf/<path:filename>', methods=['GET'])
def serve_pdf(filename):
    return send_from_directory(config.PDF_FOLDER, filename)

