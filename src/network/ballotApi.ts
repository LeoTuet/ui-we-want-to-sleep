import { Ballot, Jwt, VoteResult } from "../models";
import { TotalVoteCount } from "./../models/index";
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
    if (e instanceof FetchError && e.status >= 500) {
      throw "SERVER_ERROR";
    }
    throw e;
  }
}

export async function addBallot(
  jwt: Jwt,
  body: CreationBallot
): Promise<Ballot> {
  return await post<Ballot>("/api/ballot", { body, jwt });
}

export async function deleteBallot(jwt: Jwt, id: string): Promise<void> {
  await del(`/api/ballot/${id}`, {
    jwt,
  });
}

export async function updateBallot(
  jwt: Jwt,
  id: string,
  body: Ballot
): Promise<Ballot> {
  return await put<Ballot>(`/api/ballot/${id}`, { body, jwt });
}

export type CreationBallot = Omit<Ballot, "_id">;

export async function getVoteResult(id: string): Promise<VoteResult[]> {
  return await get<VoteResult[]>(`/api/ballot/result/${id}`, {});
}

export async function getTotalVoteCount(id: string): Promise<TotalVoteCount> {
  return await get<TotalVoteCount>(`/api/ballot/status/${id}`, {});
}
