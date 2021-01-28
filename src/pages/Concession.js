import React, { useState, useEffect } from "react";
import Banner from "../components/Banner";
import { ConcessionHead } from "../components/Data/AboutusData/ConcessionDatas";
import ConcessionComponents from "../components/AboutUsComponents/ConcessionComponents";
import { aboutUsService } from "../service/Aboutus";
const Concession = () => {
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
      <Banner img={banner[5].url} texted={true} lightText={true} place="About Us"/>
      <ConcessionComponents />
    </>
  );
};

export default Concession;
