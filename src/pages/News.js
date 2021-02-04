import React, { useEffect, useState } from "react";
import Banner from "../components/Banner";
import NewsComponent from "../components/CorporateNewsComponents/NewsComponent";
import { aboutUsService } from "../service/Aboutus";

const News = () => {
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
            place="About Us"
          />
        );
      })}
      <NewsComponent />
    </>
  );
};

export default News;
