import React from "react";
import { NickleOreMiningHead } from "../components/Data/BusinessData/NickleOreMiningDatas";
import Banner from "../components/Banner";
import NickleOreComponents from "../components/BusinessComponents/NickleOreComponents";

const NickleOreMining = () => {
  return (
    <>
      <Banner {...NickleOreMiningHead} />
      <NickleOreComponents/>
    </>
  );
};

export default NickleOreMining;
