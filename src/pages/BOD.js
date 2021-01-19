import React, { useEffect, useState } from "react";
import Banner from "../components/Banner";
import { BODHead } from "../components/Data/AboutusData/BODDatas";
import BODComponents from "../components/AboutUsComponents/BODComponents";
import { aboutUsService } from "../service/Aboutus";
const BOD = () => {
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
        img={banner[2].url}
        heading="BOARD OF DIRECTOR"
        lightText={true}
      />
      <BODComponents />
    </>
  );
};

export default BOD;
