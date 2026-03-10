import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import translationTR from './locales/tr/translation.json';
import translationEN from './locales/en/translation.json';
import translationDE from './locales/de/translation.json';
import translationKU from './locales/ku/translation.json';

const resources = {
    tr: { translation: translationTR },
    en: { translation: translationEN },
    de: { translation: translationDE },
    ku: { translation: translationKU },
};

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources,
        fallbackLng: 'tr',
        interpolation: {
            escapeValue: false, // react already safes from xss
        },
    });

export default i18n;
