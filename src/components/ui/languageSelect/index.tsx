"use client";

import React, { useEffect, useState } from "react";
import i18n from "@/services/i18n";
import "./style.scss";

const LANGS = [
  { value: "uz", label: "UZ", flag: "/flags/uz.svg" },
  { value: "ru", label: "RU", flag: "/flags/ru.svg" },
  { value: "en", label: "EN", flag: "/flags/en.svg" },
];

const LanguageSelect: React.FC = () => {
  const [value, setValue] = useState<string>("uz");

  useEffect(() => {
    const saved = localStorage.getItem("lang");
    const current = saved || "uz";
    setValue(current);
    i18n.changeLanguage(current).catch(() => {});
  }, []);

  const onChange = () => {
    const currentIndex = LANGS.findIndex((l) => l.value === value);
    const nextLang = LANGS[(currentIndex + 1) % LANGS.length];

    setValue(nextLang.value);
    i18n.changeLanguage(nextLang.value).catch(() => {});
    localStorage.setItem("lang", nextLang.value);
  };

  const activeLang = LANGS.find((l) => l.value === value);

  return (
    <button onClick={onChange} className="lang-select">
      <img src={activeLang?.flag} className="lang-flag" alt="flag" />
      <span className="lang-label">{activeLang?.label}</span>
    </button>
  );
};

export default LanguageSelect;
