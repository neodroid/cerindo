import React, { useState, useEffect } from "react";
import {
  Businessstyle,
  BusinessMain,
  BusinessWrited,
} from "../BusinessElements";
import BusinessSideBarComponents from "../index";
import { NickleOreMiningContent } from "../../Data/BusinessData/NickleOreMiningDatas";
import { businessService } from "../../../service/Business";

const NickleOreComponents = () => {
  const [nickelOre, setNickelOre] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await businessService.getDetailBusiness(
        "5ff4395df736711508e898f1"
      );
      const data = response.data;
      setNickelOre(data);
    };
    fetchData();
  }, []);
  return (
    <>
      <Businessstyle>
        <BusinessSideBarComponents page1={true} />
        <BusinessMain>
          <BusinessWrited title>{nickelOre.title_en}</BusinessWrited>
          <BusinessWrited>{nickelOre.body_en}</BusinessWrited>
        </BusinessMain>
      </Businessstyle>
    </>
  );
};
export default NickleOreComponents;
