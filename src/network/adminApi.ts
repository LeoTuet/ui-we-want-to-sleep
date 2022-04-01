import { Jwt, parseJwt } from "./jwt";

interface Credentials {
  username: string;
  password: string;
}

export const loginAdmin = async (credentials: Credentials): Promise<Jwt> => {
  const url = "/api/admin/login";

  const response = await fetch(url, {
    method: "POST",
    body: JSON.stringify(credentials),
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  });

  const text = await response.text();
  let json;
  try {
    json = JSON.parse(text);
  } catch {
    throw new Error(text);
  }

  if (!response.ok) {
    throw new Error(json.error.message);
  }

  return parseJwt(json.data.accessToken);
};

export const addAdmin = async (
  accessToken: string,
  credentials: Credentials
): Promise<{ username: string }> => {
  const url = "/api/admin/login";

  const response = await fetch(url, {
    method: "POST",
    body: JSON.stringify(credentials),
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken}`,
    },
  });
  const json = await response.json();
  if (!response.ok) {
    throw new Error(json.error.message);
  }
  return json.data;
};

export const generateToken = async (
  accessToken: string,
  data: {
    amount: number;
    valid: boolean;
  }
): Promise<string[]> => {
  const url = `/api/token`;

  const response = await fetch(url, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken}`,
    },
  });
  const json = await response.json();
  if (!response.ok) {
    throw new Error(json.error.message);
  }
  return json.data;
};
