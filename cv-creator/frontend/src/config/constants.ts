export const ANSI = {
    // Formatos de texto
    // Formato de texto
    BOLD: "\x1b[1m",
    RESET: "\x1b[0m",

    // Colores de texto
    BLUE: "\x1b[34m",
    GREEN: "\x1b[32m",
    YELLOW: "\x1b[33m",
    RED: "\x1b[31m",

};

export const LOG_MESSAGES = {
    ERROR: `${ANSI.BOLD}${ANSI.RED}[ERROR]${ANSI.RESET}`,
    INFO: `${ANSI.BOLD}${ANSI.BLUE}[INFO]${ANSI.RESET}`,
    WARNING: `${ANSI.BOLD}${ANSI.YELLOW}[WARNING]${ANSI.RESET}`,
};

export const APP_ROUTES = {
    HOME: '/',
    API_GENERATE_CV: '/api/cv'
};