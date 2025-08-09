from flask import render_template, current_app
from weasyprint import HTML
import os
import uuid

import config

PDF_FOLDER = config.PDF_FOLDER
BASE_URL = config.BASE_URL


def html_to_pdf(html:str) ->  bytes:
    base_dir = current_app.root_path
    pdf_bytes=HTML(string=html, base_url=base_dir).write_pdf()
    return pdf_bytes

def save_pdf_and_get_url(pdf_bytes: bytes) -> str:
    if not os.path.exists(PDF_FOLDER):
        os.makedirs(PDF_FOLDER)
    
    filename = f'cv_{uuid.uuid4()}.pdf'
    filepath = os.path.join(PDF_FOLDER, filename)

    with open(filepath, 'wb') as f:
        f.write(pdf_bytes)

    return f"{BASE_URL}/{filename}"



def createCV(photo, cv_data, lang):
    css_path = f'{current_app.root_path}{config.CSS_PATH}'
    print(f'cssPath: {css_path}')
    # RENDER HTML TEMPLATE
    rendered_html = render_template(f'cv_template_{lang}.html', cv=cv_data, photo_path=photo, css_path=css_path)

    pdf_bytes = html_to_pdf(rendered_html)

    pdf_url = save_pdf_and_get_url(pdf_bytes)

    return pdf_url
    

