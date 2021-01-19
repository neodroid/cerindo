import React, { useState, useEffect } from "react";
import Banner from "../components/Banner";
import { LicenseHead } from "../components/Data/AboutusData/LicenseDatas";
import LicenseComponents from "../components/AboutUsComponents/LicenseComponents";
import { aboutUsService } from "../service/Aboutus";
const License = () => {
  const [banner, setBanner] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await aboutUsService.getListAboutUs();
      const data = response.data;
      setBanner(data.aboutUsBanner);
    };
    fetchData();
  }, []);

  if (banner.length === 0) {
    return null;
  }
  return (
    <>
      <Banner
        img={banner[6].url}
        heading="LICENSE AND AWARDS"
        lightText={true}
      />
      <LicenseComponents />
    </>
  );
};

export default License;
