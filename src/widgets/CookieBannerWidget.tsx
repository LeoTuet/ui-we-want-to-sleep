import { useDispatch, useSelector } from "react-redux";
import { BottomBanner } from "../components/BottomBanner";
import { actions, selectUIStore } from "../stores/ui";

export const CookieBannerWidget = () => {
  const { cookieConsent } = useSelector(selectUIStore);

  const dispatch = useDispatch();

  const handleConsentCookies = () => {
    dispatch(actions.consentCookies());
  };

  const cookieBannerText =
    "Wir verwenden ausschließlich einen einzigen & essentiellen Cookie um die Funktionsweise des Captchas sicherzustellen";

  const consentButtonText = "Akzeptieren";

  if (cookieConsent !== "accepted") {
    return (
      <BottomBanner
        text={cookieBannerText}
        buttonText={consentButtonText}
        onButtonClick={handleConsentCookies}
      />
    );
  }
  return null;
};
