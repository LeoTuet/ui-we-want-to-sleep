import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

import { TranslatableTextKeys } from "./../models/index";

interface CurrentLanguage {
  language: TranslatableTextKeys;
}

export const useCurrentLanguage = (
  defaultLanguage: TranslatableTextKeys = "en"
): CurrentLanguage => {
  const [language, setLanguage] =
    useState<TranslatableTextKeys>(defaultLanguage);
  const { i18n } = useTranslation();

  useEffect(() => {
    setLanguage(i18n.language.slice(0, 2) as never);
  }, [i18n.language]);

  return { language };
};
