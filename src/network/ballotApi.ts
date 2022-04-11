import { Ballot, VoteOption } from "../models";
import { Jwt } from "./jwt";
import { del, FetchError, get, post, put } from "./request";

export async function fetchRunningBallot(): Promise<Ballot | undefined> {
  try {
    const data = await get<Ballot>("/api/ballot/running");
    return data;
  } catch (e) {
    if (e instanceof FetchError) {
      if (e.status === 404) {
        return Promise.reject("NO_RUNNING_BALLOT");
      } else if (e.status >= 500) {
        return Promise.reject("SERVER_ERROR");
      }
    }
    return Promise.reject("UNKNOWN_ERROR");
  }
}

export async function fetchAllBallots(): Promise<Ballot[]> {
  try {
    const data = await get<Ballot[]>("/api/ballot");
    return data;
  } catch (e) {
    if (e instanceof FetchError) {
      if (e.status >= 500) {
        throw "SERVER_ERROR";
      }
    }
    throw e;
  }
}

export async function addBallot(jwt: Jwt, body: BallotSchema): Promise<void> {
  await post<void>("/api/ballot", { body, jwt });
}

export async function deleteBallot(jwt: Jwt, id: string): Promise<void> {
  await del("/api/ballot", { body: { id }, jwt });
}

export async function updateBallot(
  jwt: Jwt,
  id: string,
  body: BallotSchema
): Promise<void> {
  await put(`/api/ballot/${id}`, { body, jwt });
}

interface BallotSchema {
  running: boolean;
  question: string;
  options: VoteOption[];
}
