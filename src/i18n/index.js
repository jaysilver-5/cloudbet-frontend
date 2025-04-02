import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { english } from './en';
import { france } from './fr';

const resources = {
  en: {
    translation: english,
  },
  cn: {
    translation: france,
  },
};

const curLang = window.localStorage.getItem('lang');

i18n.use(initReactI18next).init({
  resources,
  lng: curLang || 'en',
  keySeparator: false,
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
