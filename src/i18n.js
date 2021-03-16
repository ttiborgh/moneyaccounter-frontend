import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./translations/en.json";
import hu from "./translations/hu.json";
import de from "./translations/de.json";

const resources = { en, hu, de };

Object.keys(resources).forEach(
  (key) => (resources[key] = { translation: resources[key] })
);

i18n.use(initReactI18next).init({
  resources,
  lng: "de",

  keySeparator: ".",

  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
