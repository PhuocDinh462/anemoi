import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import translationJP from './jp.json';
import translationVI from './vi.json';
import LANGUAGES from '@/constants/languages';

// the translations
const resources = {
  jp: {
    translation: translationJP
  },
  vi: {
    translation: translationVI
  }
};

const getCurrentLanguage = () => {
  const defaultLang = LANGUAGES[0].code;
  const currentLang = localStorage.getItem('language') || defaultLang;

  if (LANGUAGES.map((language) => language.code).includes(currentLang)) return currentLang;
  return defaultLang;
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: getCurrentLanguage(),
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
