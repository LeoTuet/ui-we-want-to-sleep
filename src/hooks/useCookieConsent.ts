import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { actions, selectUI } from "../stores/ui";

export const useCookieConsent = () => {
  const dispatch = useDispatch();
  const { cookieConsent } = useSelector(selectUI);

  useEffect(() => {
    const consentValue = window.localStorage.getItem("cookieConsent");

    if (consentValue == "accepted")
      dispatch(actions.setCookieConsent(consentValue));
  }, [dispatch]);

  useEffect(() => {
    if (cookieConsent !== "accepted") {
      localStorage.removeItem("cookieConsent");
    } else {
      localStorage.setItem("cookieConsent", cookieConsent);
    }
  }, [cookieConsent]);

  return { cookieConsent };
};
