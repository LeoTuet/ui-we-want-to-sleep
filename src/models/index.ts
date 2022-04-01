export interface Data<T> {
  data: T;
}

export interface Ballot {
  _id: string;
  running: boolean;
  options: VoteOption[];
}

export interface VoteOption {
  identifier: string;
  label: string;
}

export interface TokenStatus {
  exists: boolean;
  valid: boolean;
  used: boolean;
}

export type Theme = "light" | "dark";
