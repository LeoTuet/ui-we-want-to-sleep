import { TokenStatus } from './../models/index';
export const getStatus = async (
  ballotID: string,
  token: string
): Promise<TokenStatus | undefined> => {
  const url = `/api/token/status/${ballotID}/${token}`;

  const response = await fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const jsonResponse = await response.json();
  if (!response.ok) {
    throw new Error(jsonResponse.error.message);
  }
  return jsonResponse.data
};
