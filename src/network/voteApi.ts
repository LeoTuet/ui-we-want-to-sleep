export const recordVote = async (
  identifier: string,
  ballotID: string,
  token: string,
  captchaToken: string
): Promise<void> => {
  const url = `/api/vote/${ballotID}`;

  try {
    await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Captcha": captchaToken,
      },
      body: JSON.stringify({ token, vote: identifier }),
    });
  } catch (error) {
    console.log(error);
  }
};
