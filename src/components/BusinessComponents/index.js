import React, { useState, useEffect } from "react";
import {
  BusinessSideBar,
  BusinessSideBarContent,
  BusinessSideBarImage,
} from "./BusinessElements";
import { BusinessAllImage } from "../Data/BusinessData/BussinessDatas";
import { businessService } from "../../service/Business";
const BusinessSideBarComponents = ({
  page1,
  page2,
  page3,
  page4,
  page5,
  page6,
}) => {
  const [businessImage, setBusinessImage] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await businessService.getListBusiness();
      const data = response.data;
      setBusinessImage(data);
    };
    fetchData();
  }, []);
  console.log(businessImage);

  if (businessImage.length === 0) return null;

  return (
    <>
      <BusinessSideBar>
        <h1>Mining</h1>
        <BusinessSideBarImage img={businessImage[0].thumbnail.url}>
          <BusinessSideBarContent page={page1} to="/Nickle-Ore-Mining">
            Nickel Ore Mining
          </BusinessSideBarContent>
        </BusinessSideBarImage>
        <BusinessSideBarImage img={businessImage[1].thumbnail.url}>
          <BusinessSideBarContent page={page2} to="/Ferronickle-Smelting">
            Ferronickel Smelting
          </BusinessSideBarContent>
        </BusinessSideBarImage>
        <BusinessSideBarImage img={businessImage[2].thumbnail.url}>
          <BusinessSideBarContent page={page3} to="/Resource-Reserve">
            Resource and Reserve
          </BusinessSideBarContent>
        </BusinessSideBarImage>
        <BusinessSideBarImage img={businessImage[3].thumbnail.url}>
          <BusinessSideBarContent page={page4} to="/Nickle-Cobalt-HPAL">
            Nickel-Cobalt HPAL
          </BusinessSideBarContent>
        </BusinessSideBarImage>
        <h1>Logistic</h1>
        <BusinessSideBarImage img={businessImage[4].thumbnail.url}>
          <BusinessSideBarContent page={page5} to="/Jetty-Terminal">
            Jetty Terminal
          </BusinessSideBarContent>
        </BusinessSideBarImage>
        <h1>Energy</h1>
        <BusinessSideBarImage img={businessImage[5].thumbnail.url}>
          <BusinessSideBarContent page={page6} to="/Power-Plant">
            Power Plants
          </BusinessSideBarContent>
        </BusinessSideBarImage>
      </BusinessSideBar>
    </>
  );
};
export default BusinessSideBarComponents;
