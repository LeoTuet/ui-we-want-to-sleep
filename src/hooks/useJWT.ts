import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { actions } from "../stores/adminLogin";

export const useJWT = (storeValue?: string) => {
  const dispatch = useDispatch();
  useEffect(() => {
    const savedToken = localStorage.getItem("accessToken");

    if (savedToken && !storeValue) {
      dispatch(actions.setAccessToken(savedToken));
    } else if (storeValue) {
      localStorage.setItem("accessToken", storeValue);
    } else {
      localStorage.removeItem("accessToken");
    }
  }, [dispatch, storeValue]);
};
