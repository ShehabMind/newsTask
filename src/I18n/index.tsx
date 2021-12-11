/* eslint-disable prettier/prettier */
import i18next from 'i18next';
import en from './en.json';
import de from './de.json';
import {initReactI18next} from 'react-i18next';

i18next.use(initReactI18next).init({
  lng: 'en',
  resources: {
    en: en,
    de: de,
  },
  react: {
    useSuspense: false,
  },
});
export default i18next;
