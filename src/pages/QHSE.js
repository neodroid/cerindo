import React from "react";
import { QHSEHead } from "../components/Data/SustainabilityData/QHSEDatas";
import Banner from "../components/Banner";
import QHSEComponents from "../components/SustainabilityComponents/QHSEComponents";

const QHSE = () => {
  return (
    <>
      <Banner {...QHSEHead} />
      <QHSEComponents />
    </>
  );
};

export default QHSE;
