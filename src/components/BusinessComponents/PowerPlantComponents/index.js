import React, { useEffect, useState, useContext } from "react";
import {
  Businessstyle,
  ImageBusiness,
  BusinessWrited,
} from "../BusinessElements";
import { Aboutstyle, AboutMain } from "../../AboutUsComponents/AboutUsElements";
import BusinessSideBarComponents from "../index";
import { PowerPlantContent } from "../../Data/BusinessData/PowerPlantDatas";
import { businessService } from "../../../service/Business";
import { langContext } from "../../../langContext";
import {
  PowerPlantLangBody,
  PowerPlantLangTitle,
  PowerPlantLangBody2,
} from "./PowerPlantLang";

const PowerPlantComponents = () => {
  const { language } = useContext(langContext);
  const [powerPlant, setPowerPlant] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await businessService.getDetailBusiness(
        "5ff43e7bb9e34a0df87694b0"
      );
      const data = response.data;
      setPowerPlant(data);
    };
    fetchData();
  }, []);
  if (powerPlant.length === 0) return null;
  return (
    <>
      <Aboutstyle>
        <BusinessSideBarComponents page6={true} />
        <AboutMain>
          <BusinessWrited title>
            {PowerPlantLangTitle(powerPlant, language)}
          </BusinessWrited>
          <BusinessWrited>
            {PowerPlantLangBody(powerPlant, language)}
          </BusinessWrited>
          {powerPlant.images.map((data) => {
            return <ImageBusiness src={data.url} />;
          })}
          <BusinessWrited>
            {PowerPlantLangBody2(powerPlant, language)}
          </BusinessWrited>
        </AboutMain>
      </Aboutstyle>
    </>
  );
};
export default PowerPlantComponents;
