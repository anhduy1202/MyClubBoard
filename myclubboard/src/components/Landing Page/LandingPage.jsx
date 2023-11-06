import React from "react";
import { MainLayout } from "../Layout/layout";
import GetStarted from "./GetStarted";
import Heading from "./Heading";
import HowItWorks from "./HowItWorks";
import OfficerRecruit from "./OfficerRecruit";
import OurCommunity from "./OurCommunity";
// This is the Landing Page component which is the parent component of all components in this folder.
const LandingPage = () => {
  const [isPopUp, setPopUp] = React.useState(false);
  return (
    <MainLayout custom={`bg-light_blue ${isPopUp && "opacity-50 blur-sm"}`}>
      <Heading />
      <GetStarted isPopUp={isPopUp} setPopUp={setPopUp} />
      <HowItWorks />
      <OfficerRecruit />
      <OurCommunity />
      <footer className="h-12"></footer>
    </MainLayout>
  );
};

export default LandingPage;
