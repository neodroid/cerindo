import React, { useEffect, useState } from "react";
import { businessService } from "../service/Business";
import { HPALHead } from "../components/Data/BusinessData/HPALDatas";
import Banner from "../components/Banner";
import NickelCobaltHPALComponents from "../components/BusinessComponents/NickelCobaltHPALComponents";
import {BannerSlider} from "../components/BannerSlider";
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css';
const AutoplaySlider = withAutoplay(BannerSlider);

const NickleCobaltHPAL = () => {
  const [businessList, setBusinessList] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await businessService.getListBusiness();
      const data = response.data;
      setBusinessList(data);
    };
    fetchData();
  }, []);

  if (businessList.length === 0) return null;
  return (
    <>
    <AutoplaySlider
    play={true}
    cancelOnInteraction={false}
    interval={5000}
    className="aws-btn"
    >
      {businessList[3].banner.map((data, idx) => {
        return (<><Banner img={data.url} texted={true} key={idx} place="Business"/></>)
      })}</AutoplaySlider>
      <NickelCobaltHPALComponents />
    </>
  );
};

export default NickleCobaltHPAL;
