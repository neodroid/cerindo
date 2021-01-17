import React, { useEffect, useState } from "react";
import {
  Businessstyle,
  BusinessMain,
  BusinessWrited,
} from "../BusinessElements";
import BusinessSideBarComponents from "../index";
import { FerronickleSmeltingContent } from "../../Data/BusinessData/FerronickleSmeltingDatas";
import { businessService } from "../../../service/Business";

const FerronickleSmeltingComponents = () => {
  const [ferronicle, setFerronicle] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await businessService.getDetailBusiness(
        "5ff43b56b545d223a4997ccd"
      );
      const data = response.data;
      setFerronicle(data);
    };
    fetchData();
  }, []);
  return (
    <>
      <Businessstyle>
        <BusinessSideBarComponents page2={true} />
        <BusinessMain>
          <BusinessWrited title>{ferronicle.title_en}</BusinessWrited>
          <BusinessWrited>{ferronicle.body_en}</BusinessWrited>
        </BusinessMain>
      </Businessstyle>
    </>
  );
};
export default FerronickleSmeltingComponents;
