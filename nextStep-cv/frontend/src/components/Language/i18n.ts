import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Archivos de traducción
import en from './locales/en.json';
import es from './locales/es.json';

i18n
    .use(LanguageDetector)         // Detecta idioma del navegador o localStorage
    .use(initReactI18next)         // Conecta con React
    .init({
        resources: {
            en: {translation: en},
            es: {translation: es},
        },
        fallbackLng: 'es',            // Idioma por defecto si no se detecta otro
        interpolation: {
            escapeValue: false,         // React ya protege contra XSS
        },
        detection: {                  // Opciones adicionales para LanguageDetector
            order: ['localStorage', 'navigator', 'htmlTag', 'path', 'subdomain'],
            caches: ['localStorage'],
        }
    });

export default i18n;
