import React, { useEffect, useState } from "react";
import { businessService } from "../service/Business";
import { NickleOreMiningHead } from "../components/Data/BusinessData/NickleOreMiningDatas";
import Banner from "../components/Banner";
import NickleOreComponents from "../components/BusinessComponents/NickleOreComponents";
import {BannerSlider} from "../components/BannerSlider";
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css';
const AutoplaySlider = withAutoplay(BannerSlider);

const NickleOreMining = () => {
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
      {businessList[0].banner.map((data, idx) => {
        return (<><Banner img={data.url} texted={true} key={idx} place="Business"/></>)
      })}</AutoplaySlider>
      <NickleOreComponents />
    </>
  );
};

export default NickleOreMining;
