import { Ballot, Data, VoteOption } from "../models";
import { Jwt } from "./jwt";

export const fetchRunningBallot = async (): Promise<Ballot | undefined> => {
  const url = "/api/ballot/running";

  const response = await fetch(url, {
    method: "GET",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
  });

  if (response.status === 404) {
    return Promise.reject("NO_RUNNING_BALLOT");
  } else if (response.status >= 500) {
    return Promise.reject("SERVER_ERROR");
  }

  const json: Data<Ballot> = await response.json();
  return json.data;
};

export async function fetchAllBallots(): Promise<Ballot[]> {
  const url = "/api/ballot";

  const response = await fetch(url, {
    method: "GET",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
  });

  if (response.status >= 500) {
    return Promise.reject("SERVER_ERROR");
  }

  const json: Data<Ballot[]> = await response.json();
  return json.data;
}

export async function addBallot(jwt: Jwt, schema: BallotSchema): Promise<void> {
  const url = "/api/ballot";

  const response = await fetch(url, {
    method: "POST",
    body: JSON.stringify(schema),
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${jwt.encoded}`,
    },
  });

  if (!response.ok) {
    const json = await response.json();
    throw new Error(json.error.message);
  }
}

export async function deleteBallot(jwt: Jwt, id: string): Promise<void> {
  const url = "/api/ballot";

  const response = await fetch(url, {
    method: "DELETE",
    body: JSON.stringify({ id }),
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${jwt.encoded}`,
    },
  });

  if (!response.ok) {
    const json = await response.json();
    throw new Error(json.error.message);
  }
}

interface BallotSchema {
  running: boolean;
  question: string;
  options: VoteOption[];
}
