import React, { useEffect, useState } from "react";
import {
  Businessstyle,
  BusinessMain,
  BusinessWrited,
} from "../BusinessElements";
import BusinessSideBarComponents from "../index";
import { PowerPlantContent } from "../../Data/BusinessData/PowerPlantDatas";
import { businessService } from "../../../service/Business";
const PowerPlantComponents = () => {
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
      <Businessstyle>
        <BusinessSideBarComponents page6={true} />
        <BusinessMain>
          <BusinessWrited title>{powerPlant.title_en}</BusinessWrited>
          <BusinessWrited>{powerPlant.body_en}</BusinessWrited>
        </BusinessMain>
      </Businessstyle>
    </>
  );
};
export default PowerPlantComponents;
