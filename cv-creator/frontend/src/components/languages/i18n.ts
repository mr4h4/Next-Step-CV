import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'

import en from './Locales/en.json'
import es from './Locales/es.json'

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        // DEFAULT LANGUAGE = ES
        fallbackLng: 'es',
        resources: {
            en: { translation: en },
            es: { translation: es },
        },
        interpolation: {
            escapeValue: false, // React already escapes
        },
        detection: {
            order: ['localStorage', 'navigator'],
            caches: ['localStorage'],
        },
    })

export default i18n
