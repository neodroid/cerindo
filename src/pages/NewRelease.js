import React, { useEffect, useState } from "react";
import Banner from "../components/Banner";
import { NReleaseBanner } from "../components/Data/News";
import NewsContent from "../components/CorporateNewsComponents/NewsReleaseComponents/NewsContentComponents";
import { aboutUsService } from "../service/Aboutus";
const NewsRelease = () => {
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
            lightText={true}
            heading="PRESS RELEASE"
            key={idx}
          />
        );
      })}
      <NewsContent />
    </>
  );
};

export default NewsRelease;
