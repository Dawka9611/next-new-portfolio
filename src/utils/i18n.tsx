// i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n
  .use(initReactI18next)
  .init({
    fallbackLng: 'en', // Default language
    debug: true, // Enable debugging in development
    resources: {
      en: {
        translation: {
          // Define your English translations here
        },
      },
      // Add translations for other languages as needed
    },
  });

export default i18n;