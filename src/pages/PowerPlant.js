import React, { useEffect, useState, useContext } from "react";
import { businessService } from "../service/Business";
import { PowerPlantHead } from "../components/Data/BusinessData/PowerPlantDatas";
import Banner from "../components/Banner";
import PowerPlantComponents from "../components/BusinessComponents/PowerPlantComponents";
import {BannerSlider} from "../components/BannerSlider";
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import { langContext } from '../langContext';
import { BusinessTitle } from '../components/BusinessComponents/BusinessLang';
import 'react-awesome-slider/dist/styles.css';
const AutoplaySlider = withAutoplay(BannerSlider);

const PowerPlant = () => {
  const { language } = useContext(langContext);
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
      {businessList[5].banner.map((data, idx) => {
        return (<><Banner 
        img={data.url} 
        texted={true} 
        key={idx}
        place={BusinessTitle(language)}
        /></>);
      })}</AutoplaySlider>
      <PowerPlantComponents />
    </>
  );
};

export default PowerPlant;
