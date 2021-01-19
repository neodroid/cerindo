import React, { useEffect, useState } from "react";
import { aboutUsService } from "../service/Aboutus";
import Banner from "../components/Banner";
import { SubsidiaryHead } from "../components/Data/AboutusData/SubsidiaryDatas";
import SubsidiaryComponents from "../components/AboutUsComponents/SubsidiaryComponents";

const Subsidiary = () => {
  const [banner, setBanner] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await aboutUsService.getListAboutUs();
      const data = response.data;
      setBanner(data.aboutUsBanner);
    };
    fetchData();
  }, []);
  if (banner.length === 0) return null;
  return (
    <>
      <Banner
        img={banner[1].url}
        heading="COMPANY SUBSIDIARY"
        lightText={true}
      />
      <SubsidiaryComponents />
    </>
  );
};

export default Subsidiary;
