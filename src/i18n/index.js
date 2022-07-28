import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import en from './resources/en.json';
import vi from './resources/vi.json';

i18n.use(initReactI18next).init({
  lng: 'vi',
  fallbackLng: 'vi',
  resources: {
    vi: {translation: vi},
    en: {translation: en},
  },
});

export default i18n;
