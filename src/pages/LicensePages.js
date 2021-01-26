import React, { useState, useEffect } from "react";
import Banner from "../components/Banner";
import { LicenseHead } from "../components/Data/AboutusData/LicenseDatas";
import LicenseComponents from "../components/AboutUsComponents/LicenseComponents";
import { aboutUsService } from "../service/Aboutus";
const License = () => {
  const [license, setLicense] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await aboutUsService.getListAboutUs();
      const data = response.data;
      setLicense(data.license_and_concession);
    };
    fetchData();
  }, []);
  if (license.length === 0) return null;
  return (
    <>
      {license.banner.map((data, idx) => {
        return (
          <Banner
            img={data.url}
            lightText={true}
            heading="LICENSE AND CONCESSION"
            key={idx}
          />
        );
      })}
      <LicenseComponents />
    </>
  );
};

export default License;
