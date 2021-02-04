import React, { useEffect, useState, useContext } from "react";
import {
  Businessstyle,
  ImageBusiness,
  BusinessWrited,
} from "../BusinessElements";
import {
  Aboutstyle,
  AboutMain,
} from "../../AboutUsComponents/AboutUsElements";
import BusinessSideBarComponents from "../index";
import { PowerPlantContent } from "../../Data/BusinessData/PowerPlantDatas";
import { businessService } from "../../../service/Business";
import { langContext } from "../../../langContext";
import { PowerPlantLangBody, PowerPlantLangTitle } from "./PowerPlantLang";

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
  return (
    <>
      <Aboutstyle>
        <BusinessSideBarComponents page6={true} />
        <AboutMain>
          <BusinessWrited title>{PowerPlantLangTitle(powerPlant, language)}</BusinessWrited>
          <BusinessWrited>
            {PowerPlantLangBody(powerPlant, language)}
          </BusinessWrited>
          <ImageBusiness src="https://upload.wikimedia.org/wikipedia/commons/8/8b/Pemandangan_Kaldera_Gunung_Bromo_dari_Viewpoint_Pananjakan_1%2C_Jawa_Timur%2C_25052017.jpg"/>
          {/*Gambar Ganti */}
        </AboutMain>
      </Aboutstyle>
    </>
  );
};
export default PowerPlantComponents;
