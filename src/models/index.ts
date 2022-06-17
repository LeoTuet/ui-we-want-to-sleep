export interface Ballot {
  _id: string;
  question: TranslatableText;
  running: boolean;
  options: VoteOption[];
}

export interface VoteOption {
  identifier: string;
  label: TranslatableText;
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

export interface TranslatableText {
  de: string;
  en: string;
}
