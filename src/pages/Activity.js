import React, { useState, useEffect, useContext } from "react";
import { sustainService } from "../service/Sustainability";
import Banner from "../components/Banner";
import ActivityComponents from "../components/NewsGalleryComponents/ActivityComponents";
import {BannerSlider} from "../components/BannerSlider";
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import { langContext } from '../langContext';
import { NewsGalleryTitle } from '../components/NewsGalleryComponents/NewsGalleryLang';
import 'react-awesome-slider/dist/styles.css';

const AutoplaySlider = withAutoplay(BannerSlider);

const Activity = () => {
  const { language } = useContext(langContext);
  const [activity, setActivity] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await sustainService.getListSustain();
      const data = response.data.CommunityActivities;
      setActivity(data);
    };
    fetchData();
  }, []);

  if (activity.length === 0) return null;
  return (
    <>
    <AutoplaySlider
    play={true}
    cancelOnInteraction={false}
    interval={10000}
    className="aws-btn"
    >
      {activity.banner.map((data, idx) => {
        return(
          <>
          <Banner img={data.url} texted={true} key={idx} place={NewsGalleryTitle(language)}/>
          </>
      )})}
      </AutoplaySlider>
      <ActivityComponents />
    </>
  );
};

export default Activity;
