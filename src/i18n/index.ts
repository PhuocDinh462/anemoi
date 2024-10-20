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
    lng: localStorage.getItem('language') || 'jp',
    fallbackLng: 'jp',

    interpolation: {
      escapeValue: false
    }
  });

export const changeLanguage = (lng: string) => {
  i18n.changeLanguage(lng);
  localStorage.setItem('language', lng);
};

export default i18n;
