import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';

// Import des traductions
/* FR */
import ContactFR from './../locales/fr/ContactPart.json';

/* EN */
import ContactEN from '../locales/en/ContactPart.json';

i18n
    .use(initReactI18next)
    .init({
        resources: {
            en: {
                translation: {
                    contact: ContactEN,
                }
            },
            fr: {
                translation: {
                    contact: ContactFR,
                }
            },
        },
        lng: 'fr',
        fallbackLng: 'en',
        interpolation: {
            escapeValue: false,
        },
    });

export default i18n;
