import { TokenStatus } from "./../models/index";
import { get } from "./request";

export const getStatus = async (
  ballotID: string,
  token: string
): Promise<TokenStatus | undefined> => {
  const data = await get<TokenStatus | undefined>(
    `/api/token/status/${ballotID}/${token}`
  );
  return data;
};
