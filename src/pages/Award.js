import React, { useState, useEffect, useContext } from "react";
import { sustainService } from "../service/Sustainability";
import { AwardHead } from "../components/Data/SustainabilityData/AwardDatas";
import Banner from "../components/Banner";
import AwardComponents from "../components/SustainabilityComponents/AwardComponents";
import {BannerSlider} from "../components/BannerSlider";
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import { langContext } from '../langContext';
import { SustainabilityTitle } from '../components/SustainabilityComponents/SustainabilityLang';
import 'react-awesome-slider/dist/styles.css';

const AutoplaySlider = withAutoplay(BannerSlider);

const Award = () => {
  const { language } = useContext(langContext);
  const [award, setAward] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await sustainService.getListSustain();
      const data = response.data.Awards;
      setAward(data);
    };
    fetchData();
  }, []);

  if (award.length === 0) return null;
  return (
    <>
    <AutoplaySlider
    play={true}
    cancelOnInteraction={false}
    interval={5000}
    className="aws-btn"
    >
      {award.banner.map((data, idx) => {
        return(<> <Banner img={data.url} texted={true} key={idx} place={SustainabilityTitle(language)}/></>)
      })}</AutoplaySlider>
      <AwardComponents />
    </>
  );
};

export default Award;
