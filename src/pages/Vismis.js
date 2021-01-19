import React, { useState, useEffect } from "react";
import Banner from "../components/Banner";
import { VismisHead } from "../components/Data/AboutusData/VismisDatas";
import VismisComponents from "../components/AboutUsComponents/VismisComponents";
import { aboutUsService } from "../service/Aboutus";
const Vismis = () => {
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
      <Banner img={banner[0].url} heading="ABOUT US" lightText={true} />
      <VismisComponents />
    </>
  );
};

export default Vismis;
