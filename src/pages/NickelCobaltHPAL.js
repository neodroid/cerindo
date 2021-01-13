import React from "react";
import { HPALHead } from "../components/Data/BusinessData/HPALDatas";
import Banner from "../components/Banner";
import NickelCobaltHPALComponents from "../components/BusinessComponents/NickelCobaltHPALComponents";

const NickleCobaltHPAL = () => {
  return (
    <>
      <Banner {...HPALHead} />
      <NickelCobaltHPALComponents/>
    </>
  );
};

export default NickleCobaltHPAL;
