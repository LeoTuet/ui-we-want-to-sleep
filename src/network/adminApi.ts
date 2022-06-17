import { Jwt } from "../models";
import { post } from "./request";

interface Credentials {
  username: string;
  password: string;
}

export async function loginAdmin(body: Credentials): Promise<string> {
  const data = await post<{ accessToken: string }>("/api/admin/login", {
    body,
  });
  return data.accessToken;
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
