export interface BallotResponse {
  data: Ballot;
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
