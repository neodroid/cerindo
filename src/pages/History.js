import React, { useEffect, useState, useContext } from "react";
import Banner from "../components/Banner";
import { HistoryHead } from "../components/Data/AboutusData/HistoryDatas";
import HistoryComponents from "../components/AboutUsComponents/HistoryComponents";
import { aboutUsService } from "../service/Aboutus";
import { langContext } from '../langContext';
import { AboutUsTitle } from '../components/AboutUsComponents/AboutUsLang';

const History = () => {
  const { language } = useContext(langContext);
  const [history, setHistory] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await aboutUsService.getListAboutUs();
      const data = response.data;
      setHistory(data.hisMil);
    };
    fetchData();
  }, []);
  if (history.length === 0) return null;
  return (
    <>
      {history.banner.map((data, idx) => {
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
      <HistoryComponents />
    </>
  );
};

export default History;
