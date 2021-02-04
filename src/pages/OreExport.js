import React, { useEffect, useState } from "react";
import { businessService } from "../service/Business";
import Banner from "../components/Banner";
import OreExportComponents from "../components/BusinessComponents/OreExportComponents";
import {BannerSlider} from "../components/BannerSlider";
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css';
const AutoplaySlider = withAutoplay(BannerSlider);

const OreExport = () => {
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
      {businessList[4].banner.map((data, idx) => {
        return(<> <Banner img={data.url} texted={true} key={idx} place="Business"/></>)
      })}</AutoplaySlider>
      <OreExportComponents />
    </>
  );
};

export default OreExport;
