import os

### ANSI CODES ###

# Text Format
BOLD = "\033[1m"
RESET = "\033[0m"

# Text Color
BLUE = "\033[34m"
GREEN = "\033[32m"
YELLOW = "\033[33m"
RED = "\033[31m"

# Base directory (always relative to this config file)
BASE_DIR = os.path.dirname(os.path.abspath(__file__))

# URLS / Paths
UPLOADS_FOLDER = os.path.join(BASE_DIR, 'app', 'uploads')
PDF_FOLDER = os.path.join(UPLOADS_FOLDER, 'pdf')
PHOTOS_FOLDER = os.path.join(UPLOADS_FOLDER, 'photos')
CSS_PATH = os.path.join(BASE_DIR, 'app', 'templates', 'cv_style.css')
BASE_URL = 'http://localhost:5000/uploads/pdf'

# Temporary file expiration (seconds)
TEMP_FILE_EXPIRATION = 60 * 5  # 5 minutes

# Default prints
ERROR = f'{BOLD}{RED}[ERROR]{RESET}'
INFO = f'{BOLD}{BLUE}[INFO]{RESET}'
WARNING = f'{BOLD}{YELLOW}[WARNING]{RESET}'
