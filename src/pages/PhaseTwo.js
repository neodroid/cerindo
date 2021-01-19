import React from "react";
import { PhaseOneHead } from "../components/Data/PhaseData/PhaseOneDatas";
import Banner from "../components/Banner";
import PhaseTwoComponents from "../components/Phase/PhaseTwoComponents";

const PhaseTwo = () => {
  return (
    <>
      <Banner {...PhaseOneHead} />
      <PhaseTwoComponents />
    </>
  );
};

export default PhaseTwo;
