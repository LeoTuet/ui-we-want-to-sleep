import {CouchPanel} from "../components/CouchPanel";

export interface NoVotingSectionProps {
  type?: BallotError;
}

export type BallotError = "NO_RUNNING_BALLOT" | "SERVER_ERROR";

export const NoVotingSection = ({
                                  type = "NO_RUNNING_BALLOT",
                                }: NoVotingSectionProps) => {
  const getMainText = (type: BallotError): string => {
    switch (type) {
      case "NO_RUNNING_BALLOT":
        return "Lehn' dich zurück!";
      case "SERVER_ERROR":
        return "Kontaktiere uns bitte!"
    }
  };
  const getSubText = (type: BallotError): string => {
    switch (type) {
      case "NO_RUNNING_BALLOT":
        return "Aktuell wird nicht abgestimmt. Komm’ vielleicht später noch mal!";
      case "SERVER_ERROR":
        return "Wir haben scheinbar Probleme mit unserem Server :(";
    }
  };

  return (
    <CouchPanel mainText={getMainText(type)} subText={getSubText(type)}/>
  );
};
