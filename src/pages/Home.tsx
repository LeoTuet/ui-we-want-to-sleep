import React from "react";
import { ContentSection } from "../sections/ContentSection";
import { IntroSection } from "../sections/IntroSection";
import { VotingSection } from "../sections/VotingSection";

export const Home = () => {
  return (
    <div>
      <IntroSection />
      <ContentSection />
      <VotingSection />
      <div style={{ height: "200vh" }}></div>
    </div>
  );
};
