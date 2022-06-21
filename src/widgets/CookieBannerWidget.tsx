import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";

import { BottomBanner } from "../components/BottomBanner";
import { actions, selectUIStore } from "../stores/ui";

export const CookieBannerWidget = () => {
  const { cookieConsent } = useSelector(selectUIStore);
  const { t } = useTranslation();

  const dispatch = useDispatch();

  const handleConsentCookies = () => {
    dispatch(actions.consentCookies());
  };

  if (cookieConsent !== "accepted") {
    return (
      <BottomBanner
        text={t("cookieBanner.content")}
        buttonText={t("cookieBanner.acceptButtonText")}
        onButtonClick={handleConsentCookies}
      />
    );
  }
  return null;
};
