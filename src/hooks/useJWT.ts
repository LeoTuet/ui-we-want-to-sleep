import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { parseJwt } from "../lib/parseJwt";
import { actions } from "../stores/admin";

export const useJWT = (storeValue?: string) => {
  const dispatch = useDispatch();
  useEffect(() => {
    let savedToken = localStorage.getItem("accessToken");

    if (savedToken) {
      const parsedSavedToken = parseJwt(savedToken);

      if (Date.now() >= parsedSavedToken.exp * 1000) {
        savedToken = null;
      }
    }

    if (savedToken && !storeValue) {
      dispatch(actions.setAccessToken(savedToken));
    } else if (storeValue) {
      localStorage.setItem("accessToken", storeValue);
    } else {
      localStorage.removeItem("accessToken");
    }
  }, [dispatch, storeValue]);
};
