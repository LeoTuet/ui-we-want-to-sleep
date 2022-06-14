export interface Ballot {
  _id: string;
  question: string;
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

export type Theme = "light" | "dark" | "default";

export interface Jwt {
  readonly encoded: string;
  readonly username: string;
  readonly iat: number;
  readonly exp: number;
}
