import React from "react";
import GetStarted from "./GetStarted";
import Heading from "./Heading";
import HowItWorks from "./HowItWorks";
import OfficerRecruit from "./OfficerRecruit";
import OurCommunity from "./OurCommunity";
// This is the Landing Page component which is the parent component of all components in this folder.
const LandingPage = () => {
  return (
    <section>
      <Heading />
      <GetStarted />
      <HowItWorks />
      <OfficerRecruit />
      <OurCommunity />
      <footer className="h-12"></footer>
    </section>
  );
};

export default LandingPage;
