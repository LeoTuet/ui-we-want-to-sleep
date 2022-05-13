export const recordVote = async (
  identifier: string,
  ballotID: string,
  token: string,
  captchaToken: string
): Promise<void> => {
  const url = `/api/vote/${ballotID}`;

  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Captcha": captchaToken,
    },
    body: JSON.stringify({ token, vote: identifier }),
  });

  if (!response.ok) {
    const jsonResponse = await response.json();

    if (jsonResponse.error.message.includes("Captcha")) {
      return Promise.reject("INVALID_CAPTCHA");
    }
    
  }

};
