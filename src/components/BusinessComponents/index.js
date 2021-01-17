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

  const callImage = (idx) => {
    return businessImage[idx].thumbnail.url;
  };
  if (businessImage.length === 0) return null;

  return (
    <>
      <BusinessSideBar>
        <h1>Mining</h1>
        <BusinessSideBarImage img={callImage(0)}>
          <BusinessSideBarContent page={page1} to="/Nickle-Ore-Mining">
            Nickel Ore Mining
          </BusinessSideBarContent>
        </BusinessSideBarImage>
        <BusinessSideBarImage img={callImage(1)}>
          <BusinessSideBarContent page={page2} to="/Ferronickle-Smelting">
            Ferronickel Smelting
          </BusinessSideBarContent>
        </BusinessSideBarImage>
        <BusinessSideBarImage img={callImage(2)}>
          <BusinessSideBarContent page={page3} to="/Resource-Reserve">
            Resource and Reserve
          </BusinessSideBarContent>
        </BusinessSideBarImage>
        <BusinessSideBarImage img={callImage(3)}>
          <BusinessSideBarContent page={page4} to="/Nickle-Cobalt-HPAL">
            Nickel-Cobalt HPAL
          </BusinessSideBarContent>
        </BusinessSideBarImage>
        <h1>Logistic</h1>
        <BusinessSideBarImage img={callImage(4)}>
          <BusinessSideBarContent page={page5} to="/Jetty-Terminal">
            Jetty Terminal
          </BusinessSideBarContent>
        </BusinessSideBarImage>
        <h1>Energy</h1>
        <BusinessSideBarImage img={callImage(5)}>
          <BusinessSideBarContent page={page6} to="/Power-Plant">
            Power Plants
          </BusinessSideBarContent>
        </BusinessSideBarImage>
      </BusinessSideBar>
    </>
  );
};
export default BusinessSideBarComponents;
