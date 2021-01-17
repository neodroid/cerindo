import React, { useEffect, useState } from "react";
import {
  Businessstyle,
  BusinessMain,
  BusinessWrited,
} from "../BusinessElements";
import BusinessSideBarComponents from "../index";
import { HPALContent } from "../../Data/BusinessData/HPALDatas";
import { businessService } from "../../../service/Business";

const NickelCobaltHPALComponents = () => {
  const [nickelCobalt, setNickelCobalt] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await businessService.getDetailBusiness(
        "5ff43e06b9e34a0df87694ae"
      );
      const data = response.data;
      setNickelCobalt(data);
    };
    fetchData();
  }, []);
  return (
    <>
      <Businessstyle>
        <BusinessSideBarComponents page4={true} />
        <BusinessMain>
          <BusinessWrited title>{nickelCobalt.title_en}</BusinessWrited>
          <BusinessWrited>{nickelCobalt.body_en}</BusinessWrited>
        </BusinessMain>
      </Businessstyle>
    </>
  );
};
export default NickelCobaltHPALComponents;
