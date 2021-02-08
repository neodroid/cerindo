import React, { useState, useEffect, useContext } from "react";
import Banner from "../components/Banner";
import { LicenseHead } from "../components/Data/AboutusData/LicenseDatas";
import LicenseComponents from "../components/AboutUsComponents/LicenseComponents";
import { aboutUsService } from "../service/Aboutus";
import { langContext } from '../langContext';
import { AboutUsTitle } from '../components/AboutUsComponents/AboutUsLang';

const License = () => {
  const { language } = useContext(langContext);
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
            texted={true}
            key={idx}
            place={AboutUsTitle(language)}
          />
        );
      })}
      <LicenseComponents />
    </>
  );
};

export default License;
