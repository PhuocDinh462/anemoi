import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import translationJP from './jp.json';
import translationVI from './vi.json';

// the translations
const resources = {
  jp: {
    translation: translationJP
  },
  vi: {
    translation: translationVI
  }
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: 'vi', // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
    // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
    // if you're using a language detector, do not define the lng option

    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
