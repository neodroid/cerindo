import React from "react";
import { PhaseOneHead } from "../components/Data/PhaseData/PhaseOneDatas";
import Banner from "../components/Banner";
import PhaseThreeAComponents from "../components/Phase/PhaseThreeAComponents";

const PhaseThreeA = () => {
  return (
    <>
      <Banner {...PhaseOneHead} />
      <PhaseThreeAComponents />
    </>
  );
};

export default PhaseThreeA;
