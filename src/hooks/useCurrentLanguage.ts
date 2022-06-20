import { useMemo } from "react";
import { useTranslation } from "react-i18next";

import { TranslatableTextKeys } from "./../models/index";

export const useCurrentLanguage = (): TranslatableTextKeys => {
  const { i18n } = useTranslation();
  const language = useMemo(
    () => i18n.language.slice(0, 2) as TranslatableTextKeys,
    [i18n.language]
  );
  return language;
};
