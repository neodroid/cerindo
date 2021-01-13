import React from "react";
import { FerronickleSmeltingHead } from "../components/Data/BusinessData/FerronickleSmeltingDatas";
import Banner from "../components/Banner";
import FerronickleSmeltingComponents from "../components/BusinessComponents/FerronickleSmeltingComponents";

const FerronickleSmelting = () => {
  return (
    <>
      <Banner {...FerronickleSmeltingHead} />
      <FerronickleSmeltingComponents/>
    </>
  );
};

export default FerronickleSmelting;
