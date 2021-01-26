import React, { useState, useEffect } from "react";
import Banner from "../components/Banner";
import { VismisHead } from "../components/Data/AboutusData/VismisDatas";
import VismisComponents from "../components/AboutUsComponents/VismisComponents";
import { aboutUsService } from "../service/Aboutus";
const Vismis = () => {
  const [MVV, setMVV] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await aboutUsService.getListAboutUs();
      const data = response.data;
      setMVV(data.MVV);
    };
    fetchData();
  }, []);

  if (MVV.length === 0) return null;
  return (
    <>
      {MVV.banner.map((data, idx) => {
        return (
          <Banner
            img={data.url}
            lightText={true}
            heading="ABOUT US"
            key={idx}
          />
        );
      })}
      <VismisComponents />
    </>
  );
};

export default Vismis;
