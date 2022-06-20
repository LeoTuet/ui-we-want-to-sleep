import { post } from "./request";

export const recordVote = async (
  identifier: string,
  ballotID: string,
  token: string,
  captchaToken: string
): Promise<void> => {
  try {
    await post(`/api/vote/${ballotID}`, {
      headers: { "X-Captcha": captchaToken },
      body: { token, vote: identifier },
    });
  } catch (e) {
    if (e instanceof Error && e.message.includes("Captcha")) {
      throw "INVALID_CAPTCHA";
    }
  }
};
