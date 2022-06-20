import { Jwt } from "../models";

export function parseJwt(token: string): Jwt {
  const base64Url = token.split(".")[1];
  const base64 = base64Url.replace(/[+-]/g, (t) => (t === "-" ? "+" : "/"));
  const jwt = JSON.parse(atob(base64));
  jwt.encoded = token;
  return jwt;
}
