import React, { useEffect, useState } from "react";
import Banner from "../components/Banner";
import { HistoryHead } from "../components/Data/AboutusData/HistoryDatas";
import HistoryComponents from "../components/AboutUsComponents/HistoryComponents";
import { aboutUsService } from "../service/Aboutus";
const History = () => {
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
        img={banner[4].url}
        heading="HISTORY AND MILESTONE"
        lightText={true}
      />
      <HistoryComponents />
    </>
  );
};

export default History;
