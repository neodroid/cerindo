import React from "react";
import Banner from "../components/Banner";
import {ConcessionHead} from "../components/Data/AboutusData/ConcessionDatas";
import ConcessionComponents from "../components/AboutUsComponents/ConcessionComponents";

const Concession = () => {
  return (
    <>
      <Banner {...ConcessionHead}/>
      <ConcessionComponents />
    </>
  );
};

export default Concession;