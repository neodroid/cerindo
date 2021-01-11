import React from "react";
import Banner from "../components/Banner";
import {SubsidiaryHead} from "../components/Data/AboutusData/SubsidiaryDatas";
import SubsidiaryComponents from "../components/AboutUsComponents/SubsidiaryComponents";

const Subsidiary = () => {
  return (
    <>
      <Banner {...SubsidiaryHead}/>
      <SubsidiaryComponents />
    </>
  );
};

export default Subsidiary;
