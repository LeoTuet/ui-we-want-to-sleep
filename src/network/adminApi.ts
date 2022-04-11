import { Jwt, parseJwt } from "./jwt";
import { post } from "./request";

interface Credentials {
  username: string;
  password: string;
}

export async function loginAdmin(body: Credentials): Promise<Jwt> {
  const data = await post<{ accessToken: string }>("/api/admin/login", {
    body,
  });
  return parseJwt(data.accessToken);
}

interface GenerateTokenBody {
  amount: number;
  valid: boolean;
}

export async function generateToken(
  jwt: Jwt,
  body: GenerateTokenBody
): Promise<string[]> {
  const data = await post<string[]>("/api/token", { body, jwt });
  return data;
}
