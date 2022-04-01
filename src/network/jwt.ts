import { SetStateAction, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectJwt, actions } from "../stores/jwts";

export interface Jwt {
  readonly encoded: string;
  readonly username: string;
  readonly iat: number;
  readonly exp: number;
}

export function parseJwt(token: string): Jwt {
  var base64Url = token.split(".")[1];
  var base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
  var jsonPayload = decodeURIComponent(
    atob(base64)
      .split("")
      .map(function (c) {
        return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
      })
      .join("")
  );

  const jwt = JSON.parse(jsonPayload);
  jwt.encoded = token;
  return jwt;
}

export function useJwt(
  name: string
): [Jwt | null, (action: Jwt | null) => void] {
  const dispatch = useDispatch();

  const setJwt = (jwt: Jwt | null) => {
    if (jwt == null || Date.now() >= jwt.exp * 1000) {
      dispatch(actions.deleteJwt(name));
    } else {
      dispatch(
        actions.setJwt([
          name,
          jwt,
          setTimeout(() => {
            dispatch(actions.deleteJwt(name));
          }, jwt.exp * 1000 - Date.now()),
        ])
      );
    }
  };

  const { jwts } = useSelector(selectJwt);
  if (name in jwts) {
    return [jwts[name][0], setJwt];
  } else {
    const local = localStorage.getItem(name);
    if (local != null) {
      const jwt = parseJwt(local);
      if (Date.now() >= jwt.exp * 1000) {
        return [null, setJwt];
      }
      return [jwt, setJwt];
    } else {
      return [null, setJwt];
    }
  }
}
