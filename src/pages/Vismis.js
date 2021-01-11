import React from "react";
import Banner from "../components/Banner";
import {VismisHead} from "../components/Data/AboutusData/VismisDatas";
import VismisComponents from "../components/AboutUsComponents/VismisComponents";

const Vismis = () => {
  return (
    <>
      <Banner {...VismisHead}/>
      <VismisComponents />
    </>
  );
};

export default Vismis;
