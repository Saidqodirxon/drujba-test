export const defaultNS = "common";
export const resources = {
  uz: {
    common: require("./locales/uz/common.json"),
  },
  ru: {
    common: require("./locales/ru/common.json"),
  },
  en: {
    common: require("./locales/en/common.json"),
  },
} as const;

export const languages = Object.keys(resources);
