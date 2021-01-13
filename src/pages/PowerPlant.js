import React from "react";
import { PowerPlantHead } from "../components/Data/BusinessData/PowerPlantDatas";
import Banner from "../components/Banner";
import PowerPlantComponents from "../components/BusinessComponents/PowerPlantComponents";

const PowerPlant = () => {
  return (
    <>
      <Banner {...PowerPlantHead} />
      <PowerPlantComponents/>
    </>
  );
};

export default PowerPlant;
