import { useTranslation } from "react-i18next";
import { CouchPanel } from "../components/CouchPanel";
import { useCallback } from "react";

export interface NoVotingSectionProps {
  type: VoteResponseType;
}

export type VoteResponseType = "SUCCESS" | "INVALID_CAPTCHA";

export const VoteResponseSection = ({ type }: NoVotingSectionProps) => {
  const { t } = useTranslation();

  const getMainText = useCallback(() => {
    return t(`voteResponse.${type}.header`);
  }, [type]);

  const getSubText = useCallback(() => {
    return t(`voteResponse.${type}.content`);
  }, [type]);

  return <CouchPanel mainText={getMainText()} subText={getSubText()} />;
};
