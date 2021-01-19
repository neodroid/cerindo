import React from "react";
import { PhaseOneHead } from "../components/Data/PhaseData/PhaseOneDatas";
import Banner from "../components/Banner";
import PhaseThreeComponents from "../components/Phase/PhaseThreeComponents";

const PhaseThree = () => {
  return (
    <>
      <Banner {...PhaseOneHead} />
      <PhaseThreeComponents />
    </>
  );
};

export default PhaseThree;
