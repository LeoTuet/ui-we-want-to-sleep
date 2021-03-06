import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

import translationDE from "./assets/locales/de.json";
import translationEN from "./assets/locales/en.json";

export const resources = {
  en: {
    translation: translationEN,
  },
  de: {
    translation: translationDE,
  },
} as const;

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "de-DE",
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
  });

document.documentElement.setAttribute("lang", i18n.language);
i18n.on("languageChanged", (lng) => {
  document.documentElement.setAttribute("lang", lng);
});

export default i18n;
