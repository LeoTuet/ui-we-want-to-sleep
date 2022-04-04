import { useDispatch, useSelector } from "react-redux";

import { actions, selectJwt } from "../stores/jwts";

export interface Jwt {
  readonly encoded: string;
  readonly username: string;
  readonly iat: number;
  readonly exp: number;
}

export function parseJwt(token: string): Jwt {
  const base64Url = token.split(".")[1];
  const base64 = base64Url.replace(/[+-]/g, (t) => (t === "-" ? "+" : "/"));
  const jwt = JSON.parse(atob(base64));
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
  let jwt: Jwt | null = null;

  if (name in jwts) {
    jwt = jwts[name][0];
  } else {
    const local = localStorage.getItem(name);

    if (local != null) {
      jwt = parseJwt(local);
      if (Date.now() >= jwt.exp * 1000) {
        jwt = null;
      }
    }

    if (jwt != null) {
      setJwt(jwt);
    }
  }

  return [jwt, setJwt];
}
