import React, { useEffect, useState, useContext } from "react";
import { businessService } from "../service/Business";
import { FerronickleSmeltingHead } from "../components/Data/BusinessData/FerronickleSmeltingDatas";
import Banner from "../components/Banner";
import {BannerSlider} from "../components/BannerSlider";
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css';
import { langContext } from '../langContext';
import { BusinessTitle } from '../components/BusinessComponents/BusinessLang';
import FerronickleSmeltingComponents from "../components/BusinessComponents/FerronickleSmeltingComponents";

const AutoplaySlider = withAutoplay(BannerSlider);

const FerronickleSmelting = () => {
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
      {businessList[1].banner.map((data, idx) => {
        return (<><Banner img={data.url} texted={true} key={idx} place={BusinessTitle(language)}/></>)
      })}</AutoplaySlider>
      <FerronickleSmeltingComponents />
    </>
  );
};

export default FerronickleSmelting;
