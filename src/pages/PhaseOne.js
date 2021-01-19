import React from "react";
import { PhaseOneHead } from "../components/Data/PhaseData/PhaseOneDatas";
import Banner from "../components/Banner";
import PhaseOneComponents from "../components/Phase/PhaseOneComponents";

const PhaseOne = () => {
  return (
    <>
      <Banner {...PhaseOneHead} />
      <PhaseOneComponents />
    </>
  );
};

export default PhaseOne;
