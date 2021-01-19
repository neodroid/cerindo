import React from "react";
import { PhaseOneHead } from "../components/Data/PhaseData/PhaseOneDatas";
import Banner from "../components/Banner";
import PhaseLastComponents from "../components/Phase/PhaseLastComponents";

const PhaseLast = () => {
  return (
    <>
      <Banner {...PhaseOneHead} />
      <PhaseLastComponents />
    </>
  );
};

export default PhaseLast;
