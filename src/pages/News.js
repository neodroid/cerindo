import React, { useEffect, useState, useContext } from "react";
import Banner from "../components/Banner";
import NewsComponent from "../components/CorporateNewsComponents/NewsComponent";
import { aboutUsService } from "../service/Aboutus";
import { langContext } from '../langContext';
import { AboutUsTitle } from '../components/AboutUsComponents/AboutUsLang';

const News = () => {
  const { language } = useContext(langContext);
  const [press, setPress] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await aboutUsService.getListAboutUs();
      const data = response.data;
      setPress(data.press_release);
    };
    fetchData();
  }, []);
  if (press.length === 0) return null;
  return (
    <>
      {press.banner.map((data, idx) => {
        return (
          <Banner
            img={data.url}
            texted={true}            
            key={idx}
            place={AboutUsTitle(language)}  
          />
        );
      })}
      <NewsComponent />
    </>
  );
};

export default News;
