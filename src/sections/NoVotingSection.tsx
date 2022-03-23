import { useTranslation } from "react-i18next";
import { CouchPanel } from "../components/CouchPanel";

export interface NoVotingSectionProps {
  type?: BallotError;
}

export type BallotError = "NO_RUNNING_BALLOT" | "SERVER_ERROR";

export const NoVotingSection = ({
  type = "NO_RUNNING_BALLOT",
}: NoVotingSectionProps) => {
  const { t } = useTranslation();
  const getMainText = (type: BallotError): string => {
    switch (type) {
      case "NO_RUNNING_BALLOT":
        return t("noVoting.noRunningBallot.header");
      case "SERVER_ERROR":
        return t("noVoting.serverError.header");
    }
  };
  const getSubText = (type: BallotError): string => {
    switch (type) {
      case "NO_RUNNING_BALLOT":
        return t("noVoting.noRunningBallot.content");
      case "SERVER_ERROR":
        return t("noVoting.serverError.content");
    }
  };

  return <CouchPanel mainText={getMainText(type)} subText={getSubText(type)} />;
};
