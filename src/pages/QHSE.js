import React, { useState, useEffect, useContext } from "react";
import { sustainService } from "../service/Sustainability";
import Banner from "../components/Banner";
import QHSEComponents from "../components/SustainabilityComponents/QHSEComponents";
import {BannerSlider} from "../components/BannerSlider";
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import { langContext } from '../langContext';
import { SustainabilityTitle } from '../components/SustainabilityComponents/SustainabilityLang';
import 'react-awesome-slider/dist/styles.css';
const AutoplaySlider = withAutoplay(BannerSlider);

const QHSE = () => {
  const { language } = useContext(langContext);
  const [QHSEContent, setQHSEContent] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await sustainService.getListSustain();
      const data = response.data.QHSE;
      setQHSEContent(data);
    };
    fetchData();
  }, []);

  if (QHSEContent.length === 0) return null;
  return (
    <>
     <AutoplaySlider
    play={true}
    cancelOnInteraction={false}
    interval={5000}
    className="aws-btn"
    >
      {QHSEContent.banner.map((data, idx) => {
        return(<> <Banner img={data.url} texted={true} key={idx} place={SustainabilityTitle(language)}/></>);
      })}</AutoplaySlider>
      <QHSEComponents />
    </>
  );
};

export default QHSE;
