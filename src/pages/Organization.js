import React, { useEffect, useState } from "react";
import Banner from "../components/Banner";
import { OrganizationHead } from "../components/Data/AboutusData/OrganizationDatas";
import OrganizationComponents from "../components/AboutUsComponents/OrganizationComponents";
import { aboutUsService } from "../service/Aboutus";
const Organization = () => {
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
        img={banner[3].url}
        heading="ORGANIZATION STRUCTURE"
        lightText={true}
      />
      <OrganizationComponents />
    </>
  );
};

export default Organization;
