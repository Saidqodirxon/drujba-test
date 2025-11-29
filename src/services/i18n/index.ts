"use client";

import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { resources, defaultNS } from "./config";

if (!i18n.isInitialized) {
  i18n.use(initReactI18next).init({
    resources,
    lng: "uz",
    fallbackLng: "uz",
    defaultNS,
    interpolation: {
      escapeValue: false,
    },
  });
}

export default i18n;
