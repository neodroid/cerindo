import React from "react";
import Banner from "../components/Banner";
import {BODHead} from "../components/Data/AboutusData/BODDatas";
import BODComponents from "../components/AboutUsComponents/BODComponents";

const BOD = () => {
  return (
    <>
      <Banner {...BODHead}/>
      <BODComponents />
    </>
  );
};

export default BOD;