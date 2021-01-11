import React from "react";
import Banner from "../components/Banner";
import {LicenseHead} from "../components/Data/AboutusData/LicenseDatas";
import LicenseComponents from "../components/AboutUsComponents/LicenseComponents";

const License = () => {
  return (
    <>
      <Banner {...LicenseHead}/>
      <LicenseComponents />
    </>
  );
};

export default License;