import React, { useEffect, useState } from "react";
import Banner from "../components/Banner";
import { BODHead } from "../components/Data/AboutusData/BODDatas";
import BODComponents from "../components/AboutUsComponents/BODComponents";
import { aboutUsService } from "../service/Aboutus";
const BOD = () => {
  const [BOD, setBOD] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await aboutUsService.getListAboutUs();
      const data = response.data;
      setBOD(data.boardOfDirectors);
    };
    fetchData();
  }, []);
  if (BOD.length === 0) return null;

  return (
    <>
      {BOD.banner.map((data, idx) => {
        return (
          <Banner
            img={data.url}
            lightText={true}
            texted={true}
            key={idx}
            place="About Us"
          />
        );
      })}
      <BODComponents />
    </>
  );
};

export default BOD;
