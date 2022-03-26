import { Ballot, BallotResponse } from "../models";

export const fetchRunningBallot = async (): Promise<Ballot | undefined> => {
  const url = "/api/ballot/running";

  const response = await fetch(url, {
    method: "GET",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
  });
  const jsonResponse = (await response.json()) as BallotResponse;

    if (response.status === 404) {
      return Promise.reject("NO_RUNNING_BALLOT");
    } else if (response.status >= 500) {
      return Promise.reject("SERVER_ERROR");
    }

  return jsonResponse.data;
};
