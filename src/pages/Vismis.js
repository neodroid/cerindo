import React, { useState, useEffect, useContext } from "react";
import Banner from "../components/Banner";
import { VismisHead } from "../components/Data/AboutusData/VismisDatas";
import VismisComponents from "../components/AboutUsComponents/VismisComponents";
import { aboutUsService } from "../service/Aboutus";
import { langContext } from '../langContext';
import { AboutUsTitle } from '../components/AboutUsComponents/AboutUsLang';

const Vismis = () => {
  const { language } = useContext(langContext);
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
            texted={true}
            key={idx}
            place={AboutUsTitle(language)}
          />
        );
      })}
      <VismisComponents />
    </>
  );
};

export default Vismis;
