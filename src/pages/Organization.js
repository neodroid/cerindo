import React from "react";
import Banner from "../components/Banner";
import {OrganizationHead} from "../components/Data/AboutusData/OrganizationDatas";
import OrganizationComponents from "../components/AboutUsComponents/OrganizationComponents";

const Organization = () => {
  return (
    <>
      <Banner {...OrganizationHead}/>
      <OrganizationComponents />
    </>
  );
};

export default Organization;